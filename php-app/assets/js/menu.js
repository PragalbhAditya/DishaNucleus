document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menu-button');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    const wasHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!wasHidden));
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    }
  });

  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      }
    });
  });
});
