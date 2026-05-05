// Tiny toast helper. The toast element lives in index.html as #cocpit-toast.
let toastTimer;
export function toast(msg) {
  const el = document.getElementById('cocpit-toast');
  if (!el) return;
  el.textContent = msg;
  el.style.opacity = '1';
  el.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-50%) translateY(20px)';
  }, 1600);
}
