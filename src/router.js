// Hash-based router. Hash changes -> render() -> mount the matched view.
const routes = new Map(); // path -> { title, render, mount? }

export function register(path, view) { routes.set(path, view); }

export function go(path) {
  if (location.hash !== '#' + path) location.hash = path;
  else render();
}

export function currentPath() {
  return (location.hash || '#/').slice(1) || '/';
}

export function render() {
  const path = currentPath();
  const view = routes.get(path) || routes.get('/');
  const host = document.getElementById('view');
  if (!host || !view) return;
  host.innerHTML = view.render();
  if (view.mount) view.mount(host);
  // Topbar crumbs
  const crumb = document.querySelector('.topbar .crumbs .here');
  if (crumb && view.title) crumb.textContent = view.title;
  // Sidebar active state by data-route
  document.querySelectorAll('aside nav .nav-item[data-route]').forEach(el => {
    el.classList.toggle('active', el.dataset.route === path);
  });
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
