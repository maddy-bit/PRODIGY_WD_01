window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Text change on hover
const magicText = document.getElementById('magic-text');
magicText.addEventListener('mouseenter', () => {
  magicText.textContent = 'Scroll and Hover to See the Magic';
});
magicText.addEventListener('mouseleave', () => {
  magicText.textContent = 'Scroll to See the Magic';
});
