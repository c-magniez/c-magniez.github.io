(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  const saved = localStorage.getItem('theme');
  const initialTheme = saved === 'light' ? 'light' : 'dark';

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (icon) icon.src = theme === 'dark' ? icon.dataset.sun : icon.dataset.moon;
    if (icon) icon.alt = '';
    if (toggle) {
      const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }
  }

  if (icon) {
    icon.dataset.sun = '/img/sun.svg';
    icon.dataset.moon = '/img/moon.svg';
  }
  applyTheme(initialTheme);

  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
