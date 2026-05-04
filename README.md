# Cockpit MVP

A working MVP of **Cocpit** — a single-screen mission-control dashboard that gives Omer a live view of seven AI agents (the Septuplets: Bingo, Pickle, Noodle, Snorkle, Waffles, Ziggy, Muffin) running browser, code, mail, calendar, design, and errand tasks on his Mac.

This repo packages the original 1440-wide HTML mockup as a deployable Vite project.

## What's in the dashboard

- Sidebar nav with Mission Control, Tasks, Approvals, Live runs, History, Connected apps, Permissions, Usage & billing
- KPI strip (tasks completed, agents live, approvals pending, daily ration)
- Live mission control with browser-window mock + agent cursor
- Approvals queue with green/amber/red triage
- Squad roster grid for the 7 agents (one error state for Muffin)
- Scheduled timeline with per-agent lanes and a "now" mark
- Approvals & activity feed
- Toast feedback on every clickable element so demos feel real

## Stack

- **Vite** (vanilla JS) — dev server + build
- Plain HTML + CSS, no framework
- Google Fonts: Instrument Serif, Geist, IBM Plex Mono

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`). The dashboard is fixed at 1440px wide — view on a wide screen or zoom out.

To build a static bundle:

```bash
npm run build
npm run preview
```

The build output goes to `dist/` and is suitable for GitHub Pages, Netlify, Vercel, etc.

## Project structure

```
cockpit-mvp/
├── index.html        # markup, head, fonts
├── src/
│   ├── styles.css    # design system + component styles (extracted from source)
│   └── main.js       # toast feedback wiring for clicks/filters/permissions
├── package.json
└── .gitignore
```

## Assumptions

The source folder contained one HTML mockup and a feedback document. The MVP is a faithful port of the mockup — no new product decisions were invented. Specifically:

- **No backend.** All numbers, agent states, and timestamps are static placeholders carried over from the mockup.
- **No routing.** Sidebar items toggle the active state and show a toast; they don't navigate to separate pages.
- **No responsive layout.** Locked to `width=1440` per the source. The feedback doc flags this as a known gap.
- **No accessibility pass.** Status is conveyed by color alone in places; focus styles aren't audited. Also flagged in the feedback doc.
- **No dark mode, empty states, or error states** beyond Muffin's OAuth state. Flagged for future work.
- **Vite vanilla JS** chosen over React/Tailwind because the source is already complete static HTML/CSS/JS — porting to a framework would be a rewrite, not an MVP.

## Next steps (from the feedback doc)

- Real routing between sidebar sections
- Replace static data with real bindings
- Persist filter + selected-agent state across reloads
- Build the real notifications + approvals panel
- Add `:focus-visible`, ARIA roles, keyboard shortcuts beyond ⌘K
- Author empty / error / over-budget / no-permissions states
- Decide on responsive breakpoints; ship a mobile read-only view first
