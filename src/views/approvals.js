// Approvals view — focused queue with approve/deny actions on each item.
import { approvals as initial, tasks, agentById } from '../data.js';
import { toast } from '../toast.js';

// In-memory copy so approve/deny removes from the list during the session.
let queue = initial.slice();

function row(a) {
  const task = tasks.find(t => t.id === a.taskId);
  const agent = task ? agentById[task.agent] : null;
  const urgency = a.urgency === 'urgent' ? 'urgent' : '';
  return `
    <div class="approval ${urgency}" data-id="${a.id}" style="grid-template-columns:30px 1fr auto auto">
      ${agent ? `<span class="agent-dot" style="background:${agent.color};color:${agent.ink}">${agent.avatar}</span>` : '<span></span>'}
      <div class="approval-body">
        <div class="approval-summary">${a.summary}</div>
        <div class="approval-meta">${task ? task.title : ''} · <span class="kind">${a.kind}</span>${a.urgency === 'urgent' ? ' · <b style="color:var(--negative)">Urgent</b>' : ''}</div>
      </div>
      <button class="ghost-btn" data-act="deny" data-id="${a.id}">Deny</button>
      <button class="primary-btn" data-act="approve" data-id="${a.id}">Approve</button>
    </div>`;
}

export default {
  title: 'Approvals',
  render() {
    const urgent = queue.filter(a => a.urgency === 'urgent').length;
    return `
      <div class="content">
        <div class="page-head">
          <div>
            <h1>Approvals — <em>${queue.length}</em> waiting on you</h1>
            <div class="greet">
              <span><b style="color:var(--negative)">${urgent}</b> urgent</span>
              <span>·</span>
              <span>Squad pauses on these until you decide</span>
            </div>
          </div>
        </div>
        <section class="sec">
          <div class="approvals-list">
            ${queue.length ? queue.map(row).join('') : `<div class="empty">All clear — no approvals waiting.</div>`}
          </div>
        </section>
      </div>`;
  },
  mount(host) {
    host.querySelectorAll('button[data-act]').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = b.dataset.id;
        const act = b.dataset.act;
        const item = queue.find(a => a.id === id);
        if (!item) return;
        queue = queue.filter(a => a.id !== id);
        toast(act === 'approve' ? 'Approved: ' + item.summary : 'Denied: ' + item.summary);
        host.innerHTML = this.render();
        this.mount(host);
      });
    });
  }
};
