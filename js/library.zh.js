(function() {
            'use strict';

            // ===== KONFIGŪRACIJA =====
            const CONFIG = {
                SELECTION_TIMEOUT: 2000,
                TOAST_DURATION: 3000,
                BUTTON_RESET_TIMEOUT: 2500,
                ERROR_TIMEOUT: 3000,
                DEBOUNCE_DELAY: 100
            };

            // ===== PAGALBINĖS FUNKCIJOS =====
            let isCopying = false;

            /**
             * Debounce su atskiru timeriu kiekvienam įvyniojimui (select vs copy nesidalija).
             */
            function createDebounce(func, delay) {
                let timeoutId = null;
                return function(...args) {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => func.apply(this, args), delay);
                };
            }

            /**
             * Pasirinkti tekstą code-block elemente
             */
            function selectText(element) {
                if (!element) return;

                try {
                    const pre = element.querySelector('pre');
                    if (!pre) return;

                    const range = document.createRange();
                    range.selectNodeContents(pre);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                    element.classList.add('selected');
                    
                    setTimeout(() => {
                        element.classList.remove('selected');
                    }, CONFIG.SELECTION_TIMEOUT);
                } catch (_) { /* fallback: vartotojas gali pažymėti ranka */ }
            }

            /**
             * Klaviatūros navigacija code-block elementams
             */
            function handleCodeBlockKeydown(event, element) {
                // Enter arba Space aktyvuoja pasirinkimą
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectText(element);
                    
                    // Automatiškai kopijuoti po pasirinkimo
                    const promptId = element.querySelector('pre')?.id;
                    if (promptId) {
                        const button = element.closest('.prompt')?.querySelector('.btn');
                        if (button) {
                            setTimeout(() => {
                                copyPrompt(button, promptId);
                            }, 300);
                        }
                    }
                }
            }

            /**
             * 复制文本：textarea/input.value，否则 textContent。
             */
            function getCopyText(element) {
                if (!element) return '';
                if (typeof element.value === 'string') {
                    return element.value.trim();
                }
                return element.textContent ? element.textContent.trim() : '';
            }

            /**
             * Clipboard API 或 fallback。
             */
            function writeClipboard(text, button) {
                isCopying = true;

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text)
                        .then(() => {
                            showSuccess(button);
                            isCopying = false;
                        })
                        .catch(() => {
                            fallbackCopy(text, button);
                        });
                } else {
                    fallbackCopy(text, button);
                }
            }

            /**
             * 将提示词复制到剪贴板
             */
            function copyPrompt(button, promptId) {
                if (isCopying) {
                    return;
                }

                if (!button || !promptId) {
                    showError(button, '出错了，请再复制一次。');
                    return;
                }

                const promptElement = document.getElementById(promptId);
                if (!promptElement) {
                    showError(button, '出错了，请再复制一次。');
                    return;
                }

                const promptText = getCopyText(promptElement);
                if (!promptText) {
                    showError(button, '出错了，请再复制一次。');
                    return;
                }

                writeClipboard(promptText, button);
            }

            /**
             * Fallback 复制（旧浏览器）
             */
            function fallbackCopy(text, button) {
                const textarea = document.getElementById('hiddenTextarea');
                if (!textarea) {
                    showError(button, '出错了，请再复制一次。请选中文本，然后按 Ctrl+C（或 Cmd+C）。');
                    isCopying = false;
                    return;
                }

                const parent = textarea.parentNode;
                const next = textarea.nextSibling;

                try {
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.left = '0';
                    textarea.style.top = '0';
                    textarea.style.opacity = '0';
                    textarea.style.pointerEvents = 'none';

                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    textarea.setSelectionRange(0, text.length);

                    const successful = document.execCommand('copy');

                    if (successful) {
                        showSuccess(button);
                    } else {
                        throw new Error('execCommand copy failed');
                    }
                } catch (_) {
                    showError(button, '复制失败。请选中文本，然后按 Ctrl+C（或 Cmd+C）。');
                } finally {
                    isCopying = false;
                    textarea.style.position = 'absolute';
                    textarea.style.left = '-9999px';
                    textarea.style.opacity = '';
                    textarea.style.pointerEvents = 'auto';
                    if (parent && textarea.parentNode !== parent) {
                        if (next && next.parentNode === parent) {
                            parent.insertBefore(textarea, next);
                        } else {
                            parent.appendChild(textarea);
                        }
                    }
                }
            }

            /**
             * 显示成功状态
             */
            function showSuccess(button) {
                if (!button) return;

                const promptIdAttr = button.getAttribute('data-prompt-id');
                if (promptIdAttr) {
                    const num = promptIdAttr.replace('prompt', '');
                    const checkbox = document.querySelector('.prompt-done[data-prompt-id="' + num + '"]');
                    if (checkbox && !checkbox.checked) {
                        checkbox.checked = true;
                        savePromptDoneState(num, true);
                        updateProgressIndicator();
                    }
                }

                const original = button.innerHTML;
                const originalAria = button.getAttribute('aria-label');
                button.innerHTML = '<i data-lucide="check" aria-hidden="true"></i><span>已复制</span>';
                if (typeof lucide !== 'undefined') lucide.createIcons({ root: button });
                button.classList.add('success');
                button.setAttribute('aria-label', '提示词已复制');
                showToast();
                
                setTimeout(() => {
                    button.innerHTML = original;
                    if (typeof lucide !== 'undefined') lucide.createIcons({ root: button });
                    button.classList.remove('success');
                    const promptId = button.getAttribute('data-prompt-id');
                    if (promptId) {
                        button.setAttribute('aria-label', `将提示词 ${promptId.replace('prompt', '')} 复制到剪贴板`);
                    } else if (originalAria) {
                        button.setAttribute('aria-label', originalAria);
                    }
                }, CONFIG.BUTTON_RESET_TIMEOUT);
            }

            /**
             * 显示错误
             */
            function showError(button, message) {
                if (!button) return;

                const original = button.innerHTML;
                const originalAria = button.getAttribute('aria-label');
                const errorMessage = message || '出错了，请再复制一次。';
                button.innerHTML = '<i data-lucide="alert-circle" aria-hidden="true"></i><span>' + errorMessage + '</span>';
                if (typeof lucide !== 'undefined') lucide.createIcons({ root: button });
                button.setAttribute('aria-label', errorMessage);
                
                setTimeout(() => {
                    button.innerHTML = original;
                    if (typeof lucide !== 'undefined') lucide.createIcons({ root: button });
                    const promptId = button.getAttribute('data-prompt-id');
                    if (promptId) {
                        button.setAttribute('aria-label', `将提示词 ${promptId.replace('prompt', '')} 复制到剪贴板`);
                    } else if (originalAria) {
                        button.setAttribute('aria-label', originalAria);
                    }
                }, CONFIG.ERROR_TIMEOUT);
            }

            /**
             * 显示 toast
             */
            function showToast() {
                const toast = document.getElementById('toast');
                if (!toast) return;

                toast.classList.add('show');
                toast.setAttribute('aria-live', 'polite');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, CONFIG.TOAST_DURATION);
            }

            // ===== GLOBAL FUNKCIJOS (prieinamos HTML) =====
            window.selectText = createDebounce(selectText, CONFIG.DEBOUNCE_DELAY);
            window.copyPrompt = copyPrompt;
            window.handleCodeBlockKeydown = handleCodeBlockKeydown;

            // ===== KLAVIATŪROS SHORTCUTS =====
            document.addEventListener('keydown', function(event) {
                if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                    const selection = window.getSelection();
                    if (selection.toString().trim().length > 0) {
                        return;
                    }
                }

                if (event.key === 'Escape') {
                    const toast = document.getElementById('toast');
                    if (toast) {
                        toast.classList.remove('show');
                    }
                }
            });

            // Kontaktų forma išjungta – vėlesniems etapams (žr. docs/archive/integrations/)

            // ===== "标记完成" – localStorage (M2) =====
            const PROMPT_DONE_KEY_PREFIX = 'di_prompt_done_';
            function loadPromptDoneState() {
                const checkboxes = document.querySelectorAll('.prompt-done');
                checkboxes.forEach(function(cb) {
                    const id = cb.getAttribute('data-prompt-id');
                    if (id) {
                        try {
                            cb.checked = localStorage.getItem(PROMPT_DONE_KEY_PREFIX + id) === 'true';
                        } catch { /* ignore */ }
                    }
                });
            }
            function savePromptDoneState(promptId, checked) {
                try {
                    localStorage.setItem(PROMPT_DONE_KEY_PREFIX + promptId, checked ? 'true' : 'false');
                } catch { /* ignore */ }
            }

            function getPromptDoneCount() {
                var count = 0;
                try {
                    for (var i = 1; i <= 8; i++) {
                        if (localStorage.getItem(PROMPT_DONE_KEY_PREFIX + i) === 'true') count++;
                    }
                } catch { /* ignore */ }
                return count;
            }

            function updateProgressIndicator() {
                var count = getPromptDoneCount();
                var textEl = document.getElementById('progressText');
                var fillEl = document.getElementById('progressBarFill');
                var barEl = document.querySelector('.progress-bar[role="progressbar"]');
                if (textEl) textEl.textContent = count === 8 ? '很好，8 条提示词都用过了。' : '已完成 ' + count + ' / 8 条提示词。';
                if (fillEl) fillEl.style.width = (count / 8 * 100) + '%';
                if (barEl) {
                    barEl.setAttribute('aria-valuenow', count);
                }
            }

            // ===== INICIALIZACIJA =====
            document.addEventListener('DOMContentLoaded', function() {
                if (typeof lucide !== 'undefined') lucide.createIcons();
                const codeBlocks = document.querySelectorAll('.code-block');
                codeBlocks.forEach(block => {
                    if (!block.hasAttribute('tabindex')) {
                        block.setAttribute('tabindex', '0');
                    }
                });

                loadPromptDoneState();
                document.querySelectorAll('.prompt-done').forEach(function(cb) {
                    cb.addEventListener('change', function() {
                        const id = cb.getAttribute('data-prompt-id');
                        if (id) savePromptDoneState(id, cb.checked);
                        updateProgressIndicator();
                    });
                });

                updateProgressIndicator();

            });})();
