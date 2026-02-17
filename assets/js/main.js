(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const panel = document.querySelector('[data-mobile-nav]');

  if (!toggle || !panel) return;

  const openNav = () => {
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    document.body.style.overflow = 'hidden'; // prevent body scroll
  };

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    document.body.style.overflow = ''; // restore scroll
  };

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('nav-open');
    isOpen ? closeNav() : openNav();
  });

  panel.addEventListener('click', (e) => {
    if (e.target.matches('a')) closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
})();
