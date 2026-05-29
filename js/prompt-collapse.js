/**
 * Open collapsible prompt details when navigating via #blockN (N > 1).
 */
(function () {
  function openFromHash() {
    var hash = window.location.hash;
    if (!hash || !/^#block([2-8])$/.test(hash)) return;
    var num = hash.slice(7);
    var details = document.querySelector('.prompt-details[data-prompt="' + num + '"]');
    if (!details) return;
    details.open = true;
    var article = details.closest('.prompt');
    if (article) {
      article.scrollIntoView({ block: 'nearest', behavior: 'auto' });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openFromHash);
  } else {
    openFromHash();
  }
  window.addEventListener('hashchange', openFromHash);
})();
