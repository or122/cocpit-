// Tasks view — full list of all tasks across the squad, filterable by status and bucket.
import { tasks, agentById } from '../data.js';
import { toast } from '../toast.js';

const STATUS_LABELS = { live: '● live', wait: '◐ wait', queued: '○ queued', done: '✓ done', error: '! error' };

let filterStatus = 'all';   // all | live | wait | queued | done | error
let filterBucket = 'all';   // all | today | tomorrow | this-week

function visibleTasks() {
  return tasks.filter(t =>
    (filterStatus === 'all' || t.status === filterStatus) &&
    (filterBucket === 'all' || t.bucket === filterBucket)
  );
}

function row(t) {
  const a = agentById[t.agent];
  return `
    <div class="task-row" data-id="${t.id}">
      <span class="agent-dot" style="background:${a.color};color:${a.ink}">${a.avatar}</span>
      <div class="task-main">
        <div class="task-title">${t.title}</div>
        <div class="task-meta">${a.name} · ${a.specialty}</div>
      </div>
      <span class="task-status ${t.status}">${STATUS_LABELS[t.status]}</span>
      <span class="task-when mono">${t.when}</span>
    </div>`;
}

function chipsRow(label, values, current, key) {
  return `<div class="seg" data-key="${key}">
    ${values.map(v => `<button class="${v === current ? 'on' : ''}" data-val="${v}">${v === 'all' ? 'All' : label[v] || v}</button>`).join('')}
  </div>`;
}

export default {
  title: 'Tasks',
  render() {
    const list = visibleTasks();
    return `
      <div class="content">
        <div class="page-head">
          <div>
            <h1>Tasks — <em>${list.length}</em> shown</h1>
            <div class="greet">
              <span><b style="color:var(--ink-2)">${tasks.filter(t => t.status === 'live').length}</b> live</span>
              <span>·</span>
              <span><b style="color:var(--ink-2)">${tasks.filter(t => t.status === 'queued' || t.status === 'wait').length}</b> waiting</span>
              <span>·</span>
              <span><b style="color:var(--negative)">${tasks.filter(t => t.status === 'error').length}</b> errored</span>
            </div>
          </div>
        </div>

        <section class="sec">
          <div class="section-head">
            <div class="lhs"><span class="eyebrow">Filter by status</span></div>
            ${chipsRow({ live:'Live', wait:'Wait', queued:'Queued', done:'Done', error:'Error' }, ['all','live','wait','queued','done','error'], filterStatus, 'status')}
          </div>
          <div class="section-head" style="margin-top:8px">
            <div class="lhs"><span class="eyebrow">Filter by bucket</span></div>
            ${chipsRow({ today:'Today', tomorrow:'Tomorrow', 'this-week':'This week' }, ['all','today','tomorrow','this-week'], filterBucket, 'bucket')}
          </div>
        </section>

        <section class="sec">
          <div class="task-list">
            ${list.length ? list.map(row).join('') : `<div class="empty">No tasks match these filters.</div>`}
          </div>
        </section>
      </div>`;
  },
  mount(host) {
    host.querySelectorAll('.seg[data-key]').forEach(seg => {
      const key = seg.dataset.key;
      seg.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          if (key === 'status') filterStatus = b.dataset.val;
          if (key === 'bucket') filterBucket = b.dataset.val;
          // Re-render in place
          host.innerHTML = this.render();
          this.mount(host);
        });
      });
    });
    host.querySelectorAll('.task-row').forEach(r => {
      r.addEventListener('click', () => {
        const t = tasks.find(x => x.id === r.dataset.id);
        if (t) toast('Task: ' + t.title);
      });
    });
  }
};
