// Simple scroll-to-top button
window.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('top-btn');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
