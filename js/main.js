(() => {
  const doc = document;
  const body = doc.body;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const navToggle = doc.querySelector('.nav-toggle');
  const navMenu = doc.querySelector('#nav-menu');
  if (navToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove('is-open');
      body.classList.remove('mobile-nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    };
    const openMenu = () => {
      navMenu.classList.add('is-open');
      body.classList.add('mobile-nav-open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close menu');
    };
    navToggle.addEventListener('click', event => {
      event.stopPropagation();
      if (navMenu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
    navMenu.addEventListener('click', event => {
      if (event.target.matches('a')) closeMenu();
    });
    doc.addEventListener('click', event => {
      if (!navMenu.classList.contains('is-open')) return;
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) closeMenu();
    });
    doc.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  const modeButtons = [...doc.querySelectorAll('[data-mode-button]')];
  const modeHelper = doc.querySelector('[data-mode-helper]');
  const modeCopy = {
    all: 'Compare all three role paths.',
    dotnet: 'Focus on ASP.NET Core, APIs, SQL Server, CQRS, and production backend work.',
    java: 'Focus on Spring Boot, REST services, data platforms, and backend workflows.',
    product: 'Focus on requirements, workflows, feasibility, and measurable delivery.'
  };
  function setMode(mode) {
    body.dataset.mode = mode;
    modeButtons.forEach(button => {
      const active = button.dataset.modeButton === mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (modeHelper && modeCopy[mode]) modeHelper.textContent = modeCopy[mode];
  }
  modeButtons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.modeButton)));
  if (!body.dataset.mode) setMode('all');

  const filterButtons = [...doc.querySelectorAll('[data-filter]')];
  const projectCards = [...doc.querySelectorAll('[data-project-tags]')];
  function filterProjects(filter, syncButtons = true) {
    projectCards.forEach(card => {
      const tags = card.dataset.projectTags.split(' ');
      card.classList.toggle('is-hidden', !(filter === 'all' || tags.includes(filter)));
    });
    if (syncButtons) filterButtons.forEach(button => button.classList.toggle('is-active', button.dataset.filter === filter));
  }
  filterButtons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));

  const skillFilterButtons = [...doc.querySelectorAll('[data-skill-filter]')];
  const capabilityCards = [...doc.querySelectorAll('[data-skill-tags]')];
  function filterCapabilities(filter) {
    capabilityCards.forEach(card => {
      const tags = card.dataset.skillTags.split(' ');
      const matches = filter === 'all' || tags.includes(filter);
      card.classList.toggle('is-dimmed', filter !== 'all' && !matches);
      card.classList.toggle('is-focused', filter !== 'all' && matches);
      card.querySelectorAll('[data-track]').forEach(marker => {
        marker.classList.toggle('is-track-active', filter !== 'all' && marker.dataset.track === filter);
      });
    });
    skillFilterButtons.forEach(button => {
      const active = button.dataset.skillFilter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  skillFilterButtons.forEach(button => button.addEventListener('click', () => filterCapabilities(button.dataset.skillFilter)));

  const navLinks = [...doc.querySelectorAll('.nav-menu a[href^="#"]')];
  const sections = [...doc.querySelectorAll('.section-observed')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 });
    sections.forEach(section => navObserver.observe(section));

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    doc.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    doc.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  if (!prefersReduced) {
    window.addEventListener('pointermove', event => {
      body.style.setProperty('--mx', `${event.clientX}px`);
      body.style.setProperty('--my', `${event.clientY}px`);
    }, { passive: true });
  }

  const yearNode = doc.querySelector('#current-year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

})();
