import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';


// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // Create scroll progress element
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);

  const reveals = document.querySelectorAll('.reveal, .reveal-left');
  reveals.forEach(el => revealObserver.observe(el));

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  });
});

// Also run periodically for dynamically rendered content (simple approach for this app)
setInterval(() => {
  const reveals = document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active)');
  reveals.forEach(el => revealObserver.observe(el));
}, 1000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
