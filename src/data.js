// Shared mock data for the Cocpit MVP.
// All numbers, names, and timestamps are placeholders — no backend.

export const agents = [
  { id: 'bingo',   name: 'Bingo',   avatar: 'B', color: '#F59E0B', ink: '#15140F', specialty: 'Browser',  status: 'run'  },
  { id: 'pickle',  name: 'Pickle',  avatar: 'P', color: '#7C3AED', ink: '#FFFFFF', specialty: 'Code',     status: 'run'  },
  { id: 'noodle',  name: 'Noodle',  avatar: 'N', color: '#0D9488', ink: '#FFFFFF', specialty: 'Mail',     status: 'wait' },
  { id: 'snorkle', name: 'Snorkle', avatar: 'S', color: '#DB2777', ink: '#FFFFFF', specialty: 'Calendar', status: 'run'  },
  { id: 'waffles', name: 'Waffles', avatar: 'W', color: '#C2410C', ink: '#FFFFFF', specialty: 'Design',   status: 'idle' },
  { id: 'ziggy',   name: 'Ziggy',   avatar: 'Z', color: '#15140F', ink: '#FFFFFF', specialty: 'Errands',  status: 'run'  },
  { id: 'muffin',  name: 'Muffin',  avatar: 'M', color: '#2C6FB1', ink: '#FFFFFF', specialty: 'Files',    status: 'err'  },
];

export const agentById = Object.fromEntries(agents.map(a => [a.id, a]));

// status: live | wait | queued | done | error
export const tasks = [
  { id: 't-001', title: 'Book flight LIS Jun 14, return Jun 21',          agent: 'bingo',   status: 'live',   when: '3s ago',  bucket: 'today' },
  { id: 't-002', title: 'Find 5★ hotel in Alfama under €240/night',       agent: 'bingo',   status: 'queued', when: 'in 4m',   bucket: 'today' },
  { id: 't-003', title: 'Reserve dinner at Belcanto, party of 2',         agent: 'bingo',   status: 'queued', when: 'in 12m',  bucket: 'tomorrow' },
  { id: 't-004', title: 'Review PR #142 — auth refactor',                 agent: 'pickle',  status: 'live',   when: '12s ago', bucket: 'today' },
  { id: 't-005', title: 'Open follow-up PR for the failing test',         agent: 'pickle',  status: 'queued', when: 'in 1h',   bucket: 'today' },
  { id: 't-006', title: 'Triage inbox — flag investor replies',           agent: 'noodle',  status: 'wait',   when: 'paused',  bucket: 'today' },
  { id: 't-007', title: 'Reply to Sequoia partner re: deck v3',           agent: 'noodle',  status: 'queued', when: 'in 30m',  bucket: 'today' },
  { id: 't-008', title: 'Find a 30-min slot with Maya next week',         agent: 'snorkle', status: 'live',   when: '47s ago', bucket: 'today' },
  { id: 't-009', title: 'Move Friday standup to 10:30',                   agent: 'snorkle', status: 'done',   when: '2m ago',  bucket: 'today' },
  { id: 't-010', title: 'Resolve calendar conflict on Jun 18',            agent: 'snorkle', status: 'queued', when: 'in 2h',   bucket: 'tomorrow' },
  { id: 't-011', title: 'Generate 12 hero variations for landing v4',     agent: 'waffles', status: 'queued', when: 'in 15m',  bucket: 'today' },
  { id: 't-012', title: 'Export icon set as SVG + PNG @1x/2x/3x',         agent: 'waffles', status: 'queued', when: 'in 45m',  bucket: 'this-week' },
  { id: 't-013', title: 'Order groceries for the week',                   agent: 'ziggy',   status: 'live',   when: '1m ago',  bucket: 'today' },
  { id: 't-014', title: 'Book dentist for Tue afternoon',                 agent: 'ziggy',   status: 'done',   when: '8m ago',  bucket: 'today' },
  { id: 't-015', title: 'Renew passport — schedule appointment',          agent: 'ziggy',   status: 'queued', when: 'in 3h',   bucket: 'this-week' },
  { id: 't-016', title: 'Sync Drive ↔ Notion — re-auth required',         agent: 'muffin',  status: 'error',  when: '5m ago',  bucket: 'today' },
  { id: 't-017', title: 'Backup Q2 invoices to long-term storage',        agent: 'muffin',  status: 'queued', when: 'blocked', bucket: 'this-week' },
];

// Each approval points to a task and carries the human-in-the-loop ask.
export const approvals = [
  { id: 'a-1', taskId: 't-001', urgency: 'urgent', kind: 'spend',     summary: 'Confirm €1,840 booking on TAP Air Portugal — needs your card' },
  { id: 'a-2', taskId: 't-003', urgency: 'normal', kind: 'reserve',   summary: 'Belcanto requires a 12-hour cancellation guarantee — proceed?' },
  { id: 'a-3', taskId: 't-007', urgency: 'normal', kind: 'reply',     summary: 'Pickle drafted a reply to Sequoia — review tone before send' },
  { id: 'a-4', taskId: 't-016', urgency: 'urgent', kind: 'auth',      summary: 'Google Drive token expired — re-authorize Muffin' },
];

export const counts = {
  get queued() { return tasks.filter(t => t.status === 'queued' || t.status === 'wait').length; },
  get running() { return tasks.filter(t => t.status === 'live').length; },
  get needApproval() { return approvals.length; },
  get doneToday() { return 142; }, // placeholder consistent with mockup
};
