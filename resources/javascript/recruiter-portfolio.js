document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Stamp stagger delay on reveal elements that are siblings inside a grid/list
  const staggerParents = document.querySelectorAll(
    '.hero-grid, .proof-grid, .info-grid, .experience-grid, .project-grid, .visual-proof-grid, .skill-grid, .credential-grid, .contact-grid'
  );
  staggerParents.forEach(parent => {
    const children = parent.querySelectorAll(':scope > .reveal, :scope > * > .reveal');
    children.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${i * 70}ms`);
    });
  });

  // Hero copy and panel get a gentle stagger too
  const heroCopy = document.querySelector('.hero-copy.reveal');
  const heroPanel = document.querySelector('.hero-panel.reveal');
  if (heroCopy) heroCopy.style.setProperty('--reveal-delay', '0ms');
  if (heroPanel) heroPanel.style.setProperty('--reveal-delay', '120ms');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});