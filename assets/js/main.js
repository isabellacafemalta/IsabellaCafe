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
    const catNavInner = document.querySelector('.cat-nav__inner');
    const sections = [...catLinks].map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);
    let userIsScrollingCatNav = false;
    let userScrollTimer = null;
    if (catNavInner) {
      // Don't auto-scroll the cat-nav while the user is manually scrolling it
      const onUserScroll = () => {
        userIsScrollingCatNav = true;
        clearTimeout(userScrollTimer);
        userScrollTimer = setTimeout(() => { userIsScrollingCatNav = false; }, 800);
      };
      catNavInner.addEventListener('touchstart', onUserScroll, { passive: true });
      catNavInner.addEventListener('wheel', onUserScroll, { passive: true });
    }
    const scrollActiveIntoView = activeLink => {
      if (!catNavInner || !activeLink || userIsScrollingCatNav) return;
      const navRect = catNavInner.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      // Center the active link within the cat-nav viewport
      const targetLeft = catNavInner.scrollLeft + (linkRect.left - navRect.left)
        - (navRect.width / 2) + (linkRect.width / 2);
      catNavInner.scrollTo({ left: targetLeft, behavior: 'smooth' });
    };
    const setActive = id => {
      let activeLink = null;
      catLinks.forEach(a => {
        const match = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-current', match);
        if (match) activeLink = a;
      });
      scrollActiveIntoView(activeLink);
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
