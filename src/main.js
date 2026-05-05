// Bootstrap: register routes, wire global chrome, initial render.
import { register, render, go, currentPath } from './router.js';
import { toast } from './toast.js';
import missionControl from './views/mission-control.js';
import tasks from './views/tasks.js';
import approvals from './views/approvals.js';
import { tasks as taskList, approvals as approvalList } from './data.js';

// A stub view for sidebar items that aren't fully built yet.
function stub(title, blurb) {
  return {
    title,
    render() {
      return `
        <div class="content">
          <div class="page-head">
            <div>
              <h1>${title}</h1>
              <div class="greet"><span>${blurb}</span></div>
            </div>
          </div>
          <section class="sec">
            <div class="empty" style="padding:48px;text-align:center;color:var(--muted)">
              This view is a stub. Mission Control, Tasks, and Approvals are the working pages in this MVP.
            </div>
          </section>
        </div>`;
    }
  };
}

register('/',           missionControl);
register('/tasks',      tasks);
register('/approvals',  approvals);
register('/live',       stub('Live runs', 'Theatre view across all running agents — coming next.'));
register('/history',    stub('History', 'Completed missions, filterable by agent and date — coming next.'));
register('/apps',       stub('Connected apps', 'Manage OAuth connections to Mail, Drive, Notion, etc.'));
register('/permissions',stub('Permissions', 'What each agent is allowed to touch on your machine.'));
register('/billing',    stub('Usage & billing', 'Daily ration, top spender, monthly invoices.'));

// Sidebar nav: clicks toggle the route via hash.
function bindSidebar() {
  document.querySelectorAll('aside nav .nav-item[data-route]').forEach(item => {
    item.addEventListener('click', () => {
      go(item.dataset.route);
      toast('Opened: ' + item.textContent.trim().replace(/\s+/g, ' '));
    });
  });
  document.querySelectorAll('aside .agent-row').forEach(row => {
    row.addEventListener('click', () => {
      const name = row.querySelector('.ag-name');
      toast('Selected agent: ' + (name ? name.textContent : 'agent'));
    });
  });
}

// Topbar: search, primary "New mission", icon buttons.
function bindTopbar() {
  const searchInput = document.querySelector('.topbar .search input');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        toast('Asking the squad: "' + searchInput.value.trim() + '"');
        searchInput.value = '';
      }
    });
  }
  document.querySelectorAll('.topbar .icon-btn').forEach(b => {
    b.addEventListener('click', () => {
      const title = b.getAttribute('title');
      if (title === 'Approvals') go('/approvals');
      else toast(title || 'Action');
    });
  });
  document.querySelectorAll('.topbar .primary-btn').forEach(b => {
    b.addEventListener('click', () => toast(b.textContent.trim() + ' — opening…'));
  });
}

// Live counters in the topbar pill + sidebar approval badge.
function refreshCounters() {
  const live = taskList.filter(t => t.status === 'live').length;
  const pill = document.querySelector('.topbar .live-pill');
  if (pill) pill.innerHTML = `<span class="d"></span>${live} of 7 live`;
  const apprBadge = document.querySelector('aside nav .nav-item[data-route="/approvals"] .badge');
  if (apprBadge) apprBadge.textContent = String(approvalList.length);
}

// ⌘K focuses the search input.
window.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    const input = document.querySelector('.topbar .search input');
    if (input) input.focus();
  }
});

bindSidebar();
bindTopbar();
refreshCounters();
// If user lands on a non-existent hash, normalize to /.
if (!location.hash) location.hash = '/';
render();
