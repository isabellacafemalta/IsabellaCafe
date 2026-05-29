/* Isabella Café — small, hand-written interactions only */

(() => {
  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
      });
    });
  }

  // Highlight category nav on scroll (menu page)
  const catLinks = document.querySelectorAll('.cat-nav a');
  if (catLinks.length) {
    const sections = [...catLinks].map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);
    const setActive = id => {
      catLinks.forEach(a => {
        a.classList.toggle('is-current', a.getAttribute('href') === '#' + id);
      });
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));

    // smooth scroll offset for sticky nav
    catLinks.forEach(a => a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: 'smooth' });
    }));
  }

  // Image graceful fallback — if a remote image fails, swap to a hand-drawn placeholder
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      const label = img.getAttribute('alt') || 'Isabella Café';
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
        <rect width='400' height='300' fill='%23F5F5F5'/>
        <text x='50%' y='52%' text-anchor='middle' font-family='Georgia, serif' font-style='italic' font-size='22' fill='%23050505'>${label}</text>
      </svg>`;
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }, { once: true });
  });
})();
