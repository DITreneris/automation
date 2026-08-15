/**
 * Suggest-don't-force locale banner.
 * Shows when browser language maps to another shipped locale and the
 * visitor has not stored a language choice. Never 302s a locale URL.
 */
'use strict';

(function () {
  var SHIPPED = ['lt', 'en', 'et', 'lv', 'de', 'ja', 'zh'];
  var DISMISS_KEY = 'langNudgeDismissed';
  var CTA = {
    lt: 'Žiūrėti lietuviškai',
    en: 'View in English',
    et: 'Vaata eesti keeles',
    lv: 'Skatīt latviešu valodā',
    de: 'Auf Deutsch ansehen',
    ja: '日本語で見る',
    zh: '查看简体中文',
  };
  var DISMISS = {
    lt: 'Uždaryti',
    en: 'Dismiss',
    et: 'Sulge',
    lv: 'Aizvērt',
    de: 'Schließen',
    ja: '閉じる',
    zh: '关闭',
  };
  var REGION = {
    lt: 'Kalbos pasiūlymas',
    en: 'Language suggestion',
    et: 'Keele soovitus',
    lv: 'Valodas ieteikums',
    de: 'Sprachvorschlag',
    ja: '言語の提案',
    zh: '语言建议',
  };

  function navToLocale(nav) {
    if (!nav) return '';
    var n = String(nav).toLowerCase();
    if (n.indexOf('lt') === 0) return 'lt';
    if (n.indexOf('et') === 0 || n.indexOf('ee') === 0) return 'et';
    if (n.indexOf('lv') === 0) return 'lv';
    if (n.indexOf('de') === 0) return 'de';
    if (n.indexOf('ja') === 0) return 'ja';
    if (n.indexOf('zh') === 0) return 'zh';
    if (n.indexOf('en') === 0) return 'en';
    return '';
  }

  function currentLocale() {
    var path = (window.location.pathname || '').toLowerCase();
    var match = path.match(/\/(lt|en|et|lv|de|ja|zh)(?:\/|$)/);
    if (match) return match[1];
    var htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    if (htmlLang.indexOf('zh') === 0) return 'zh';
    if (SHIPPED.indexOf(htmlLang) !== -1) return htmlLang;
    return 'en';
  }

  function storedLang() {
    try {
      return localStorage.getItem('lang') || '';
    } catch (_e) {
      return '';
    }
  }

  function wasDismissed() {
    try {
      return localStorage.getItem(DISMISS_KEY) === '1';
    } catch (_e) {
      return true;
    }
  }

  var stored = storedLang();
  if (stored && SHIPPED.indexOf(stored) !== -1) return;
  if (wasDismissed()) return;

  var suggested = navToLocale(typeof navigator !== 'undefined' ? navigator.language : '');
  if (!suggested || SHIPPED.indexOf(suggested) === -1) return;
  if (suggested === currentLocale()) return;

  function go() {
    try {
      localStorage.setItem('lang', suggested);
    } catch (_e) { /* ignore quota / private mode */ }
    window.location.assign('../' + suggested + '/');
  }

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch (_e) { /* ignore */ }
    if (banner.parentNode) banner.parentNode.removeChild(banner);
  }

  var banner = document.createElement('div');
  banner.className = 'locale-nudge';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', REGION[suggested] || REGION.en);
  banner.setAttribute('lang', suggested === 'zh' ? 'zh-Hans' : suggested);

  var link = document.createElement('a');
  link.className = 'locale-nudge-link';
  link.href = '../' + suggested + '/';
  link.textContent = CTA[suggested] || CTA.en;
  link.addEventListener('click', function (e) {
    e.preventDefault();
    go();
  });

  var close = document.createElement('button');
  close.type = 'button';
  close.className = 'locale-nudge-dismiss';
  close.setAttribute('aria-label', DISMISS[suggested] || DISMISS.en);
  close.textContent = '×';
  close.addEventListener('click', dismiss);

  banner.appendChild(link);
  banner.appendChild(close);

  function mount() {
    var skip = document.querySelector('.skip-link');
    if (skip && skip.parentNode) {
      skip.parentNode.insertBefore(banner, skip.nextSibling);
    } else if (document.body.firstChild) {
      document.body.insertBefore(banner, document.body.firstChild);
    } else {
      document.body.appendChild(banner);
    }
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
