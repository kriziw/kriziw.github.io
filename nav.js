(function () {
  var toggle = document.getElementById('nav-toggle');
  var sidebar = document.getElementById('doc-sidebar');
  var overlay = document.getElementById('nav-overlay');

  if (!toggle || !sidebar) return;

  function openNav() {
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    sidebar.removeAttribute('aria-hidden');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', function () {
    document.body.classList.contains('nav-open') ? closeNav() : openNav();
  });

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  sidebar.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });
})();
