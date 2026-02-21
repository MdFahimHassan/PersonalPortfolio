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

// Scroll-triggered section reveal
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Typewriter effect
const text = "CODE IS MY CANVAS — LOGIC IS MY BRUSH";
const span = document.getElementById("typewriter");

let i = 0;
let isDeleting = false;
const speed = 200; // consistent speed in ms

function typeLoop() {
  if (!isDeleting) {
    // typing forward
    span.textContent = text.substring(0, i);
    i++;
    if (i > text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // pause before deleting
      return;
    }
  } else {
    // deleting backward
    span.textContent = text.substring(0, i);
    i--;
    if (i < 0) {
      isDeleting = false;
      i = 0;
      setTimeout(typeLoop, 500); // pause before typing again
      return;
    }
  }
  setTimeout(typeLoop, speed);
}

// start the loop
typeLoop();

function openDemoModal() {
  document.getElementById("demoModal").style.display = "block";
}

function closeDemoModal() {
  document.getElementById("demoModal").style.display = "none";
}

// Optional: close when clicking outside modal
window.onclick = function(event) {
  const modal = document.getElementById("demoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function openDemoModal() {
  const modal = document.getElementById("demoModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeDemoModal() {
  const modal = document.getElementById("demoModal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
