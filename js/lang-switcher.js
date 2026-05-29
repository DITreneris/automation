/**
 * Compact language dropdown – hero and footer instances.
 * Requires .lang-switcher--dropdown with .lang-switcher-trigger + .lang-switcher-menu.
 */
(function () {
  var switchers = document.querySelectorAll('.lang-switcher--dropdown');
  if (!switchers.length) return;

  var openSwitcher = null;

  function closeSwitcher(nav) {
    var trigger = nav.querySelector('.lang-switcher-trigger');
    var menu = nav.querySelector('.lang-switcher-menu');
    if (!trigger || !menu) return;
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (openSwitcher === nav) openSwitcher = null;
  }

  function closeAll(except) {
    switchers.forEach(function (nav) {
      if (nav !== except) closeSwitcher(nav);
    });
  }

  function openMenu(nav) {
    var trigger = nav.querySelector('.lang-switcher-trigger');
    var menu = nav.querySelector('.lang-switcher-menu');
    if (!trigger || !menu) return;
    closeAll(nav);
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    openSwitcher = nav;
  }

  function toggleMenu(nav) {
    var menu = nav.querySelector('.lang-switcher-menu');
    if (!menu) return;
    if (menu.hidden) openMenu(nav);
    else closeSwitcher(nav);
  }

  switchers.forEach(function (nav) {
    var trigger = nav.querySelector('.lang-switcher-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu(nav);
    });

    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        if (e.key !== 'ArrowDown') e.preventDefault();
        var menu = nav.querySelector('.lang-switcher-menu');
        if (menu && menu.hidden) openMenu(nav);
        var firstLink = menu && menu.querySelector('.lang-link');
        if (firstLink && e.key === 'ArrowDown') {
          e.preventDefault();
          firstLink.focus();
        }
      }
      if (e.key === 'Escape') closeSwitcher(nav);
    });

    var menu = nav.querySelector('.lang-switcher-menu');
    if (menu) {
      menu.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeSwitcher(nav);
          trigger.focus();
        }
      });
    }
  });

  document.addEventListener('click', function () {
    closeAll(null);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openSwitcher) {
      var trigger = openSwitcher.querySelector('.lang-switcher-trigger');
      closeSwitcher(openSwitcher);
      if (trigger) trigger.focus();
    }
  });
})();
