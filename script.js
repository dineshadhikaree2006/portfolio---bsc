

const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.setAttribute('aria-expanded', 'false');

  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', siteNav.classList.contains('show') ? 'true' : 'false');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  if (window.scrollY > 20) {
    header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.25)';
  } else {
    header.style.boxShadow = 'none';
  }
});
