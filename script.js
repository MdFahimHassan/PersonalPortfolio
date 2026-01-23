// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fake send button feedback
document.getElementById('sendBtn')?.addEventListener('click', () => {
  alert('Thanks for reaching out! Use the email on the left for a real message.');
});