
// Simple mouse parallax on hero overlay
document.addEventListener('mousemove', function(e){
  const overlay = document.querySelector('.hero-overlay');
  if(!overlay) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const x = (e.clientX - w/2) / w;
  const y = (e.clientY - h/2) / h;
  overlay.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
});
