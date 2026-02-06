// Header com comportamento ao scroll
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');

  if (!header) return;

  const toggleHeaderOnScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Estado inicial
  toggleHeaderOnScroll();

  // Listener de scroll
  window.addEventListener('scroll', toggleHeaderOnScroll, { passive: true });
});
