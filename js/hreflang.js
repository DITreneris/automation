/**
 * Sets absolute hreflang link targets from location (handles project base path and /lt vs /lt/…).
 * Requires <html data-hreflang-suite="library"|"privacy"> and link ids hreflang-lt … hreflang-default.
 */
(function () {
  'use strict';
  var suite = document.documentElement.getAttribute('data-hreflang-suite');
  if (!suite) return;

  var pathname = location.pathname;
  var base = pathname.replace(/\/(lt|en|et|lv|de|ja|zh)(\/.*|$)/i, '');
  var origin = location.origin;
  var prefix = origin + base;

  function set(id, href) {
    var el = document.getElementById(id);
    if (el) el.href = href;
  }

  if (suite === 'library') {
    set('hreflang-lt', prefix + '/lt/');
    set('hreflang-en', prefix + '/en/');
    set('hreflang-et', prefix + '/et/');
    set('hreflang-lv', prefix + '/lv/');
    set('hreflang-de', prefix + '/de/');
    set('hreflang-ja', prefix + '/ja/');
    set('hreflang-zh', prefix + '/zh/');
    set('hreflang-default', prefix + '/en/');
  } else if (suite === 'privacy') {
    set('hreflang-lt', prefix + '/lt/privatumas.html');
    set('hreflang-en', prefix + '/en/privacy.html');
    set('hreflang-et', prefix + '/et/privacy.html');
    set('hreflang-lv', prefix + '/lv/privacy.html');
    set('hreflang-de', prefix + '/de/privacy.html');
    set('hreflang-ja', prefix + '/ja/privacy.html');
    set('hreflang-zh', prefix + '/zh/privacy.html');
    set('hreflang-default', prefix + '/en/privacy.html');
  }
})();
