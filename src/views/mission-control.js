// Mission Control view — the original 1440-wide dashboard, ported verbatim.
import { toast } from '../toast.js';

const html = `    <div class="content" style="">
      <!-- Page header -->
      <div class="page-head">
        <div>
          <h1>Evening, <em>Omer</em>. Squad's working.</h1>
          <div class="greet">
            <span><b style="color:var(--ink-2)">23</b> tasks queued</span>
            <span>·</span>
            <span><b style="color:var(--ink-2)">5</b> running</span>
            <span>·</span>
            <span><b style="color:var(--negative)">4</b> need approval</span>
            <span>·</span>
            <span>Last action <b style="color:var(--ink-2)">3s</b> ago</span>
          </div>
        </div>
        <div class="head-controls">
          <div class="seg" role="tablist">
            <button>Today</button>
            <button class="on">Live</button>
            <button>7d</button>
            <button>All</button>
          </div>
          <button class="ghost-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect></svg>
            Pause all
          </button>
        </div>
      </div>

      <!-- KPIs -->
      <section class="sec">
        <div class="section-head"><div class="lhs"><span class="eyebrow">01 · At a glance</span></div></div>
        <div class="kpis">
        <div class="kpi">
          <div class="l">Tasks completed today</div>
          <div class="v num">142</div>
          <div class="meta"><span class="delta up">▲ 38</span><span class="vs">vs yesterday</span></div>
        </div>
        <div class="kpi">
          <div class="l">Hours saved</div>
          <div class="v num">11.4<span class="u">h</span></div>
          <div class="meta"><span class="delta up">▲ 2.1h</span><span class="vs">this week</span></div>
        </div>
        <div class="kpi">
          <div class="l">Actions taken</div>
          <div class="v num">3,284</div>
          <div class="meta"><span class="delta up">▲ 12%</span><span class="vs">click+type+exec</span></div>
        </div>
        <div class="kpi">
          <div class="l">Agent success rate</div>
          <div class="v num">96.2<span class="u">%</span></div>
          <div class="meta"><span class="delta down">▼ 0.4pt</span><span class="vs">7d avg</span></div>
        </div>
        <div class="kpi">
          <div class="l">Spend today</div>
          <div class="v num">$8.42</div>
          <div class="meta"><span class="delta flat">≈ $13/d</span><span class="vs">budget</span></div>
        </div>
      </div></section>

      <!-- Mission Control: live feed + step rail -->
      <section class="sec">
        <div class="section-head">
          <div class="lhs"><span class="eyebrow">02 · Live now</span><h2>Mission control — <em>5</em> agents on your screen</h2></div>
          <div class="rhs"><button class="ghost-btn">Open theatre view →</button></div>
        </div>
        <div class="grid-mc">
        <div class="card" style="gap:14px">
          <div class="card-head">
            <div>
              <h3>Live: Bingo on your Mac</h3>
              <div class="sub">Booking flights · MissionID <span class="mono" style="color:var(--ink-2)">M-91827</span></div>
            </div>
            <div class="right">
              <span class="pill run dot">Running · 04:21</span>
              <div class="live-controls">
                <button class="ctl" title="Take over"><svg class="ic" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
                <button class="ctl" title="Pause"><svg class="ic" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14"></rect><rect x="14" y="5" width="4" height="14"></rect></svg></button>
                <button class="ctl danger" title="Stop"><svg class="ic" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="1"></rect></svg></button>
              </div>
            </div>
          </div>

          <div class="liveview">
            <div class="screen">
              <div class="screen-chrome">
                <div class="lights"><span></span><span></span><span></span></div>
                <div class="url">
                  <svg class="lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>
                  flights.example.com / search?to=LIS&amp;from=TLV&amp;date=2026-05-12
                </div>
              </div>
              <div class="screen-body">
                <div class="browser-shell">
                  <div class="b-head">
                    <div class="logo">aero<em style="color:var(--accent);font-style:italic">·</em>fly</div>
                    <div class="nav-mock">
                      <span>Flights</span><span>Hotels</span><span>Cars</span><span>Sign in</span>
                    </div>
                  </div>
                  <div class="b-hero">Book your <em>next move</em> in seconds.</div>
                  <div class="b-form">
                    <label>Passenger</label>
                    <div class="field">Omer Gat</div>
                    <label>From → To</label>
                    <div class="field">TLV → LIS</div>
                    <label>Date</label>
                    <div class="field focus">May 12, 2026 ▾</div>
                    <button class="submit" type="button">Search flights</button>
                  </div>
                </div>
                <!-- agent cursor -->
                <div class="ring"></div>
                <svg class="cursor" viewBox="0 0 24 24" fill="#15140F"><path d="M3 2l7 18 2.5-7L20 11z" stroke="#fff" stroke-width="1.2"></path></svg>
                <div class="typed-tag">⌨ typed "May 12, 2026"</div>
              </div>
            </div>

            <div class="steprail">
              <div class="sr-head">
                <span class="t">Plan · 7 steps</span>
                <span class="c">step 5/7</span>
              </div>
              <div class="sr-list">
                <div class="step"><span class="icn done">✓</span><span class="body"><b>Open browser</b><small>chrome.app</small></span><span class="t">04:21</span></div>
                <div class="step"><span class="icn done">✓</span><span class="body"><b>Navigate aerofly.com</b><small>https://flights…</small></span><span class="t">04:18</span></div>
                <div class="step"><span class="icn done">✓</span><span class="body"><b>Enter origin TLV</b><small>input[name=from]</small></span><span class="t">04:11</span></div>
                <div class="step"><span class="icn done">✓</span><span class="body"><b>Enter destination LIS</b><small>input[name=to]</small></span><span class="t">04:05</span></div>
                <div class="step"><span class="icn run">●</span><span class="body"><b>Type departure date</b><small>May 12, 2026</small></span><span class="t">now</span></div>
                <div class="step"><span class="icn todo">5</span><span class="body"><b>Click "Search flights"</b><small>button.submit</small></span><span class="t">—</span></div>
                <div class="step"><span class="icn warn">!</span><span class="body"><b>Pick best flight</b><small>needs your approval</small></span><span class="t">—</span></div>
              </div>
            </div>
          </div>

          <div class="agent-line">
            <div class="av" style="background:#F59E0B">B</div>
            <div>
              <span class="who">Bingo:</span> Filling the date field — I'll show you the top 3 flights before booking. If <code>price &gt; $480</code>, I'll wait for your sign-off.
            </div>
          </div>
        </div>

        <!-- Right side: queue + watchlist -->
        <div class="card">
          <div class="card-head">
            <div>
              <h3>Mission queue</h3>
              <div class="sub">23 tasks · 5 running · 3 scheduled</div>
            </div>
            <button class="ghost-btn">View board →</button>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px">
            <div class="approval" style="grid-template-columns:30px 1fr auto;background:rgba(31,122,77,.04);border-color:rgba(31,122,77,.2)">
              <div class="who-av" style="background:#F59E0B;width:28px;height:28px;font-size:14px">B</div>
              <div class="body"><b>Book Lisbon flight</b><div class="meta"><span>Bingo</span>·<span>step 5/7</span>·<span>browser</span></div></div>
              <span class="pill run dot">live</span>
            </div>
            <div class="approval" style="grid-template-columns:30px 1fr auto">
              <div class="who-av" style="background:#7C3AED;color:#fff;width:28px;height:28px;font-size:14px">P</div>
              <div class="body"><b>Reply to 12 unread emails</b><div class="meta"><span>Pickle</span>·<span>step 3/12</span>·<span>Mail.app</span></div></div>
              <span class="pill run dot">live</span>
            </div>
            <div class="approval" style="grid-template-columns:30px 1fr auto">
              <div class="who-av" style="background:#DB2777;color:#fff;width:28px;height:28px;font-size:14px">S</div>
              <div class="body"><b>Compile weekly highlights deck</b><div class="meta"><span>Snorkle</span>·<span>step 4/9</span>·<span>Keynote</span></div></div>
              <span class="pill run dot">live</span>
            </div>
            <div class="approval" style="grid-template-columns:30px 1fr auto">
              <div class="who-av" style="background:#15140F;color:#fff;width:28px;height:28px;font-size:14px">Z</div>
              <div class="body"><b>Refactor billing module</b><div class="meta"><span>Ziggy</span>·<span>tests passing</span>·<span>VS&nbsp;Code</span></div></div>
              <span class="pill run dot">live</span>
            </div>
            <div class="approval" style="grid-template-columns:30px 1fr auto">
              <div class="who-av" style="background:#0D9488;color:#fff;width:28px;height:28px;font-size:14px">N</div>
              <div class="body"><b>Research suppliers in Porto</b><div class="meta"><span>Noodle</span>·<span>waiting on captcha</span>·<span>browser</span></div></div>
              <span class="pill wait dot">wait</span>
            </div>
            <div class="approval" style="grid-template-columns:30px 1fr auto">
              <div class="who-av" style="background:#2C6FB1;color:#fff;width:28px;height:28px;font-size:14px">M</div>
              <div class="body"><b>Sync calendar with Notion</b><div class="meta"><span>Muffin</span>·<span style="color:var(--negative)">auth expired</span>·<span>OAuth</span></div></div>
              <span class="pill err dot">error</span>
            </div>
            <div class="approval" style="grid-template-columns:30px 1fr auto">
              <div class="who-av" style="background:#C2410C;color:#fff;width:28px;height:28px;font-size:14px">W</div>
              <div class="body"><b>Order weekly groceries</b><div class="meta"><span>Waffles</span>·<span>scheduled · 18:00</span>·<span>browser</span></div></div>
              <span class="pill idle dot">idle</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <!-- Squad grid -->
      <section class="sec">
        <div class="section-head">
          <div class="lhs"><span class="eyebrow">03 · The roster</span><h2 style="color: rgb(249, 72, 0);">The <em style="color: rgb(249, 72, 0);">Septuplets</em> — seven super-duper agents</h2></div>
          <div class="rhs"><button class="ghost-btn">Hire an 8th →</button></div>
        </div>

        <div class="squad">
          <!-- Featured agent: Bingo -->
          <div class="agent-card feature">
            <div class="a-head">
              <div class="a-avatar" style="background:#F59E0B">B</div>
              <div class="a-meta">
                <div class="a-name">Bingo <span style="color:#8B8678;font-size:10.5px;font-weight:400;font-family:'IBM Plex Mono',monospace">· captain</span></div>
                <div class="a-role">browser · forms · bookings</div>
              </div>
              <span class="a-status run">● running</span>
            </div>
            <div class="a-task">
              <small>now</small>
              Booking flight TLV → LIS, May 12. Comparing 4 carriers; flagging if price exceeds budget.
            </div>
            <div class="a-progress">
              <div class="row"><span>step 5 / 7</span><span>04:21 elapsed</span></div>
              <div class="bar"><i style="width:71%"></i></div>
            </div>
            <div class="footer">
              <span><b>1,284</b> missions · <b>97.1%</b> success</span>
              <div class="tools">
                <div class="tool-chip" title="browser">🌐</div>
                <div class="tool-chip" title="keyboard">⌨</div>
                <div class="tool-chip" title="mouse">🖱</div>
                <div class="tool-chip" title="screen">📷</div>
              </div>
            </div>
          </div>

          <!-- Pickle -->
          <div class="agent-card">
            <div class="a-head">
              <div class="a-avatar" style="background:#7C3AED;color:#fff">P</div>
              <div class="a-meta">
                <div class="a-name">Pickle</div>
                <div class="a-role">inbox · messaging</div>
              </div>
              <span class="a-status run">● run</span>
            </div>
            <div class="a-task">
              <small>now</small>
              Drafting replies to 12 unread emails. Will queue for your approval before sending.
            </div>
            <div class="a-progress"><div class="row"><span>3 / 12</span><span>00:47</span></div><div class="bar"><i style="width:25%"></i></div></div>
            <div class="footer"><span><b>892</b> sent · <b>99.4%</b> good</span><div class="tools"><div class="tool-chip">✉</div><div class="tool-chip">💬</div></div></div>
          </div>

          <!-- Noodle -->
          <div class="agent-card">
            <div class="a-head">
              <div class="a-avatar" style="background:#0D9488;color:#fff">N</div>
              <div class="a-meta">
                <div class="a-name">Noodle</div>
                <div class="a-role">research · summarize</div>
              </div>
              <span class="a-status wait">◐ wait</span>
            </div>
            <div class="a-task">
              <small>blocked</small>
              Stuck on a captcha while researching Porto suppliers. Tap to solve it for them.
            </div>
            <div class="a-progress"><div class="row"><span>9 / 14</span><span>02:12</span></div><div class="bar"><i style="width:64%;background:var(--amber)"></i></div></div>
            <div class="footer"><span><b>410</b> reports</span><div class="tools"><div class="tool-chip">🌐</div><div class="tool-chip">📑</div></div></div>
          </div>

          <!-- Snorkle -->
          <div class="agent-card">
            <div class="a-head">
              <div class="a-avatar" style="background:#DB2777;color:#fff">S</div>
              <div class="a-meta">
                <div class="a-name">Snorkle</div>
                <div class="a-role">decks · docs · design</div>
              </div>
              <span class="a-status run">● run</span>
            </div>
            <div class="a-task">
              <small>now</small>
              Composing a weekly highlights deck in Keynote — pulling charts, cropping screenshots.
            </div>
            <div class="a-progress"><div class="row"><span>4 / 9</span><span>03:08</span></div><div class="bar"><i style="width:44%"></i></div></div>
            <div class="footer"><span><b>233</b> docs · <b>92%</b> kept</span><div class="tools"><div class="tool-chip">🎨</div><div class="tool-chip">📷</div></div></div>
          </div>

          <!-- Waffles -->
          <div class="agent-card">
            <div class="a-head">
              <div class="a-avatar" style="background:#C2410C;color:#fff">W</div>
              <div class="a-meta">
                <div class="a-name">Waffles</div>
                <div class="a-role">errands · shopping</div>
              </div>
              <span class="a-status idle">○ idle</span>
            </div>
            <div class="a-task">
              <small>scheduled</small>
              Weekly grocery order from your usual list. Will run at 18:00 unless paused.
            </div>
            <div class="a-progress"><div class="row"><span>standby</span><span>in 2h 14m</span></div><div class="bar"><i style="width:0%"></i></div></div>
            <div class="footer"><span><b>76</b> errands run</span><div class="tools"><div class="tool-chip">🛒</div><div class="tool-chip">💳</div></div></div>
          </div>

          <!-- Ziggy -->
          <div class="agent-card">
            <div class="a-head">
              <div class="a-avatar" style="background:#15140F;color:#F6F4EE">Z</div>
              <div class="a-meta">
                <div class="a-name">Ziggy</div>
                <div class="a-role">code · terminal · git</div>
              </div>
              <span class="a-status run">● run</span>
            </div>
            <div class="a-task">
              <small>now</small>
              Refactoring <code style="font-size:11px;background:var(--chip-bg);padding:1px 4px;border-radius:3px;font-family:'IBM Plex Mono',monospace">billing/api.ts</code>. 47 tests passing.
            </div>
            <div class="a-progress"><div class="row"><span>tests 47/47</span><span>06:55</span></div><div class="bar"><i style="width:88%"></i></div></div>
            <div class="footer"><span><b>1,890</b> commits · <b>2</b> reverts</span><div class="tools"><div class="tool-chip">⌨</div><div class="tool-chip">🐙</div></div></div>
          </div>

          <!-- Muffin (error state) -->
          <div class="agent-card">
            <div class="a-head">
              <div class="a-avatar" style="background:#2C6FB1;color:#fff">M</div>
              <div class="a-meta">
                <div class="a-name">Muffin</div>
                <div class="a-role">calendars · sync</div>
              </div>
              <span class="a-status err">! error</span>
            </div>
            <div class="a-task" style="border-color:rgba(180,58,58,.2);background:rgba(180,58,58,.04);color:var(--negative)">
              <small style="color:var(--negative)">needs your hand</small>
              Notion OAuth token expired. Tap to re-auth and Muffin will pick right up.
            </div>
            <div class="a-progress"><div class="row"><span>paused</span><span>—</span></div><div class="bar"><i style="width:55%;background:var(--negative)"></i></div></div>
            <div class="footer"><span><b>540</b> syncs · <b>0</b> losses</span><div class="tools"><div class="tool-chip">📅</div><div class="tool-chip">🔗</div></div></div>
          </div>
        </div>
      </section>

      <!-- Scheduled timeline -->
      <section class="sec">
        <div class="section-head">
          <div class="lhs"><span class="eyebrow">04 · On the schedule</span><h2>Up next — <em>11</em> missions queued</h2></div>
          <div class="rhs">
            <div class="seg">
              <button class="on">Today</button>
              <button>Tomorrow</button>
              <button>This week</button>
            </div>
            <button class="accent-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
              Schedule mission
            </button>
          </div>
        </div>
        <div class="sched-card">
          <div class="sched-head">
            <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
              <h3>Mission timeline</h3>
              <span class="sub">Drag missions to reschedule · agents will pick them up automatically</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="pill"><span class="dot live"></span>1 running</span>
              <span class="pill warn"><span class="dot"></span>1 conflict</span>
            </div>
          </div>

          <div class="sched-track-wrap">
            <div class="sched-axis">
              <div class="sched-ticks">
                <span>17:00</span><span>18:00</span><span>19:00</span><span>20:00</span><span>21:00</span><span>22:00</span><span>23:00</span>
              </div>
              <div class="now-mark"></div>
            </div>

            <div class="sched-lanes">
              <!-- Lane 1: Bingo -->
              <div class="sched-lane">
                <div class="sched-mission live" style="left:6%;width:22%">
                  <div class="av" style="background:#F59E0B">B</div>
                  <span class="ttl">Book Lisbon flight</span>
                  <span class="pri p1">P1</span>
                  <span class="at">17:08 → 17:32</span>
                </div>
                <div class="sched-mission" style="left:34%;width:14%;animation-delay:.4s">
                  <div class="av" style="background:#F59E0B">B</div>
                  <span class="ttl">Hotel research</span>
                  <span class="pri p3">P3</span>
                  <span class="at">17:55</span>
                </div>
              </div>

              <!-- Lane 2: Pickle -->
              <div class="sched-lane">
                <div class="sched-mission" style="left:14%;width:11%;animation-delay:.8s">
                  <div class="av" style="background:#7C3AED;color:#fff">P</div>
                  <span class="ttl">Triage inbox</span>
                  <span class="pri p2">P2</span>
                  <span class="at">17:20</span>
                </div>
                <div class="sched-mission recur" style="left:42%;width:10%;animation-delay:1.2s">
                  <div class="av" style="background:#7C3AED;color:#fff">P</div>
                  <span class="ttl">Inbox triage</span>
                  <span class="pri p3">P3</span>
                  <span class="at">19:00</span>
                </div>
                <div class="sched-mission recur" style="left:74%;width:10%;animation-delay:1.4s">
                  <div class="av" style="background:#7C3AED;color:#fff">P</div>
                  <span class="ttl">Inbox triage</span>
                  <span class="pri p3">P3</span>
                  <span class="at">22:00</span>
                </div>
              </div>

              <!-- Lane 3: Noodle -->
              <div class="sched-lane">
                <div class="sched-mission" style="left:18%;width:18%;animation-delay:1.6s">
                  <div class="av" style="background:#0D9488;color:#fff">N</div>
                  <span class="ttl">Compile market memo</span>
                  <span class="pri p2">P2</span>
                  <span class="at">17:30 → 18:20</span>
                </div>
              </div>

              <!-- Lane 4: Snorkle -->
              <div class="sched-lane">
                <div class="sched-mission" style="left:30%;width:22%;animation-delay:2s">
                  <div class="av" style="background:#DB2777;color:#fff">S</div>
                  <span class="ttl">Draft Q3 board deck</span>
                  <span class="pri p1">P1</span>
                  <span class="at">18:30 → 19:45</span>
                </div>
              </div>

              <!-- Lane 5: Waffles -->
              <div class="sched-lane">
                <div class="sched-mission recur warn" style="left:40%;width:9%;animation-delay:2.4s">
                  <div class="av" style="background:#C2410C;color:#fff">W</div>
                  <span class="ttl">Order groceries</span>
                  <span class="pri p2">P2</span>
                  <span class="at">18:00</span>
                </div>
                <div class="sched-mission" style="left:58%;width:11%;animation-delay:2.7s">
                  <div class="av" style="background:#C2410C;color:#fff">W</div>
                  <span class="ttl">Renew gym pass</span>
                  <span class="pri p3">P3</span>
                  <span class="at">20:30</span>
                </div>
              </div>

              <!-- Lane 6: Ziggy -->
              <div class="sched-lane">
                <div class="sched-mission" style="left:48%;width:14%;animation-delay:3s">
                  <div class="av" style="background:#15140F;color:#fff">Z</div>
                  <span class="ttl">Push deploy &amp; smoke test</span>
                  <span class="pri p1">P1</span>
                  <span class="at">19:30 → 20:00</span>
                </div>
              </div>

              <!-- Lane 7: Muffin -->
              <div class="sched-lane">
                <div class="sched-mission recur" style="left:64%;width:10%;animation-delay:3.4s">
                  <div class="av" style="background:#2C6FB1;color:#fff">M</div>
                  <span class="ttl">Calendar sweep</span>
                  <span class="pri p3">P3</span>
                  <span class="at">21:00</span>
                </div>
              </div>
            </div>
          </div>

          <div class="sched-foot">
            <div class="legend">
              <span class="lg"><span class="pri p1">P1</span> critical</span>
              <span class="lg"><span class="pri p2">P2</span> standard</span>
              <span class="lg"><span class="pri p3">P3</span> low</span>
              <span class="lg" style="color:var(--muted-2)">·</span>
              <span class="lg"><span style="color:var(--muted-2);font-family:'IBM Plex Mono',monospace;font-size:11px">↻</span> recurring</span>
              <span class="lg" style="color:var(--negative)"><span style="width:8px;height:8px;border-radius:2px;background:rgba(180,58,58,.4);display:inline-block"></span> conflict</span>
            </div>
            <div class="controls">
              <button class="ghost-btn">Calendar view</button>
              <button class="ghost-btn">Pause schedule</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Approvals + Activity timeline -->
      <section class="sec">
        <div class="section-head"><div class="lhs"><span class="eyebrow">05 · Your hand needed</span><h2>Approvals &amp; activity</h2></div></div>
        <div class="grid-2">
        <div class="card">
          <div class="card-head">
            <div>
              <h3>Waiting on you</h3>
              <div class="sub">4 actions paused — squad won't proceed without sign-off</div>
            </div>
            <button class="ghost-btn">Approve all safe →</button>
          </div>

          <div class="approvals-list">
            <div class="approval urgent">
              <div class="who-av" style="background:#F59E0B">B</div>
              <div class="body">
                <b>Bingo</b> wants to <b>charge $462.10</b> to your Visa for the Lisbon flight on May 12.
                <div class="meta">
                  <span class="pill" style="background:rgba(180,58,58,.08);color:var(--negative)">payment</span>
                  <span>browser · aerofly.com</span>
                  <span>budget left $87.90</span>
                </div>
              </div>
              <div class="actions">
                <button class="btn-deny">Deny</button>
                <button class="btn-allow">Allow once</button>
              </div>
            </div>
            <div class="approval">
              <div class="who-av" style="background:#7C3AED;color:#fff">P</div>
              <div class="body">
                <b>Pickle</b> wants to send <b>3 replies</b> to your Mom, Dani, and accounting@northwind.com.
                <div class="meta">
                  <span class="pill review">review draft</span>
                  <span>Mail.app · 3 of 12</span>
                </div>
              </div>
              <div class="actions">
                <button class="btn-deny">Edit</button>
                <button class="btn-allow">Send all</button>
              </div>
            </div>
            <div class="approval">
              <div class="who-av" style="background:#15140F;color:#F6F4EE">Z</div>
              <div class="body">
                <b>Ziggy</b> wants to <b>push 14 commits</b> to <code>main</code> and open a PR titled "Refactor billing module".
                <div class="meta">
                  <span class="pill" style="background:rgba(31,122,77,.1);color:var(--positive)">tests pass</span>
                  <span>VS Code · github.com/omerg/cocpit</span>
                </div>
              </div>
              <div class="actions">
                <button class="btn-deny">Hold</button>
                <button class="btn-allow">Push &amp; PR</button>
              </div>
            </div>
            <div class="approval">
              <div class="who-av" style="background:#C2410C;color:#fff">W</div>
              <div class="body">
                <b>Waffles</b> wants to substitute <b>oat milk → almond milk</b> at checkout (your usual is out of stock).
                <div class="meta">
                  <span class="pill">substitution</span>
                  <span>browser · greengrocer.co</span>
                </div>
              </div>
              <div class="actions">
                <button class="btn-deny">Skip item</button>
                <button class="btn-allow">Substitute</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity feed -->
        <div class="card">
          <div class="card-head">
            <div>
              <h3>Activity feed</h3>
              <div class="sub">Every click, keystroke, and command — last 60 minutes</div>
            </div>
            <button class="ghost-btn">Filter</button>
          </div>
          <div class="timeline">
            <div class="ev run">
              <div class="marker"></div>
              <div class="body"><b>Bingo</b> typed <code>"May 12, 2026"</code> into <code>flights.example.com</code><div class="meta">⌨ keypress · 12 chars · 0.4s</div></div>
              <div class="when">just now</div>
            </div>
            <div class="ev">
              <div class="marker"></div>
              <div class="body"><b>Ziggy</b> ran <code>npm test</code> in <code>~/cocpit</code> — <b style="color:var(--positive)">47 passed</b><div class="meta">terminal · 6.2s</div></div>
              <div class="when">36s</div>
            </div>
            <div class="ev warn">
              <div class="marker"></div>
              <div class="body"><b>Noodle</b> hit a captcha on <code>suppliers.pt</code> — paused for help<div class="meta">browser · waiting 1m 12s</div></div>
              <div class="when">1m</div>
            </div>
            <div class="ev run">
              <div class="marker"></div>
              <div class="body"><b>Snorkle</b> screenshotted <b>3 charts</b> from Cocpit overview into Keynote slide 4<div class="meta">screen capture · 3 files</div></div>
              <div class="when">2m</div>
            </div>
            <div class="ev err">
              <div class="marker"></div>
              <div class="body"><b>Muffin</b> failed to refresh Notion token (HTTP 401)<div class="meta">OAuth · re-auth required</div></div>
              <div class="when">4m</div>
            </div>
            <div class="ev run">
              <div class="marker"></div>
              <div class="body"><b>Pickle</b> drafted reply to <b>"Re: invoice 2841"</b> — saved in <code>Drafts</code><div class="meta">Mail.app</div></div>
              <div class="when">6m</div>
            </div>
            <div class="ev run">
              <div class="marker"></div>
              <div class="body"><b>Bingo</b> opened <code>Chrome</code>, restored 2 tabs, focused address bar<div class="meta">app launch · 0.9s</div></div>
              <div class="when">8m</div>
            </div>
            <div class="ev">
              <div class="marker"></div>
              <div class="body"><b>You</b> assigned mission <b>"Book Lisbon flight"</b> to Bingo<div class="meta">manual · ⌘K</div></div>
              <div class="when">9m</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <!-- Bottom strip -->
      <section class="sec">
        <div class="section-head"><div class="lhs"><span class="eyebrow">06 · Resources</span><h2>Compute, permissions &amp; apps</h2></div></div>
        <div class="strip">
        <div class="res-card">
          <div class="card-head">
            <div><h3>Compute &amp; spend</h3><div class="sub">Today across all 7 agents</div></div>
            <span class="pill">on budget</span>
          </div>
          <div class="gauge">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#EFEBDF" stroke-width="9"></circle>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#C2410C" stroke-width="9" stroke-linecap="round" stroke-dasharray="263.9" stroke-dashoffset="100" transform="rotate(-90 50 50)"></circle>
              <text x="50" y="48" text-anchor="middle" font-size="20" font-weight="600" fill="#15140F" font-family="Geist">62%</text>
              <text x="50" y="64" text-anchor="middle" font-size="10" fill="#6E6B61" font-family="IBM Plex Mono, monospace">of $13.50</text>
            </svg>
            <div style="display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--muted);flex:1;min-width:0">
              <div style="display:flex;justify-content:space-between;gap:8px;white-space:nowrap"><span>Tokens</span><b style="color:var(--ink);font-variant-numeric:tabular-nums">1.4M</b></div>
              <div style="display:flex;justify-content:space-between;gap:8px;white-space:nowrap"><span>API calls</span><b style="color:var(--ink);font-variant-numeric:tabular-nums">3,284</b></div>
              <div style="display:flex;justify-content:space-between;gap:8px;white-space:nowrap"><span>Screen time</span><b style="color:var(--ink);font-variant-numeric:tabular-nums">2h 18m</b></div>
              <div style="display:flex;justify-content:space-between;gap:8px;white-space:nowrap"><span>Top</span><b style="color:var(--ink)">Ziggy · $3.10</b></div>
            </div>
          </div>
        </div>

        <div class="res-card">
          <div class="card-head">
            <div><h3>Permissions</h3><div class="sub">What the squad is allowed to touch</div></div>
            <button class="ghost-btn">Manage</button>
          </div>
          <div class="perm-grid">
            <div class="perm"><span class="sw"></span><span class="perm-name">Browser</span></div>
            <div class="perm"><span class="sw"></span><span class="perm-name">Mail</span></div>
            <div class="perm warn"><span class="sw"></span><span class="perm-name">Files (read)</span></div>
            <div class="perm"><span class="sw"></span><span class="perm-name">Calendar</span></div>
            <div class="perm warn"><span class="sw"></span><span class="perm-name">Files (write)</span></div>
            <div class="perm"><span class="sw"></span><span class="perm-name">Terminal</span></div>
            <div class="perm off"><span class="sw"></span><span class="perm-name">Payments</span></div>
            <div class="perm off"><span class="sw"></span><span class="perm-name">Identity</span></div>
          </div>
        </div>

        <div class="res-card">
          <div class="card-head">
            <div><h3>Connected apps</h3><div class="sub">14 apps · 3 need re-auth</div></div>
            <button class="ghost-btn">Add app</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px">
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Chrome">🌐</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Mail">✉</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Slack">💬</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Calendar">📅</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Terminal">⌨</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px;border-color:var(--negative);color:var(--negative)" title="Notion (auth)">⚠</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Figma">🎨</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="VS Code">🐙</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Photos">📷</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Notes">📝</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Music">🎵</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Slack">💳</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px" title="Keynote">🎯</div>
            <div class="tool-chip" style="width:34px;height:34px;font-size:14px;background:var(--surface-2);color:var(--muted-2)" title="Add">+</div>
          </div>
        </div>
        </div>
      </section>

      <!-- Billing & ration footer -->
      <section class="sec" style="margin-top:8px">
        <div class="section-head">
          <div class="lhs"><span class="eyebrow">07 · Billing</span><h2>Daily ration &amp; spend</h2></div>
          <div class="rhs"><button class="ghost-btn">Manage plan</button></div>
        </div>
        <div class="billing-row">
          <div class="bill-card primary">
            <div class="bill-head">
              <div>
                <div class="bill-label">Daily ration</div>
                <div class="bill-meta">Resets at 00:00 · rolls unused into tomorrow</div>
              </div>
              <div class="bill-pct">62<span>%</span></div>
            </div>
            <div class="bill-bar"><i style="width:62%"></i></div>
            <div class="bill-foot">
              <span><b>$8.42</b> spent</span>
              <span>of <b>$13.50</b></span>
              <span><b>$5.08</b> remaining</span>
            </div>
          </div>
          <div class="bill-card">
            <div class="bill-label">This month</div>
            <div class="bill-big">$184.20</div>
            <div class="bill-meta">of $400 monthly cap · 46%</div>
            <div class="bill-bar small"><i style="width:46%;background:var(--ink-2)"></i></div>
          </div>
          <div class="bill-card">
            <div class="bill-label">Top spender today</div>
            <div class="bill-row"><span class="a-avatar" style="background:#15140F;color:#fff;width:24px;height:24px;font-size:11px;border-radius:7px;display:grid;place-items:center;font-weight:700">Z</span><b>Ziggy</b><span class="bill-meta">code &amp; terminal</span></div>
            <div class="bill-big">$3.10</div>
            <div class="bill-meta">37% of today's spend</div>
          </div>
          <div class="bill-card">
            <div class="bill-label">Next invoice</div>
            <div class="bill-big">May 31</div>
            <div class="bill-meta">Visa •••• 4421</div>
            <div class="bill-row" style="margin-top:auto"><button class="ghost-btn" style="width:100%;justify-content:center">View invoices</button></div>
          </div>
        </div>
      </section>

      <div class="meta-strip">
        <div style="display:flex;align-items:center;gap:14px">
          <span>cocpit · v 4.12.0</span>
          <span>·</span>
          <span>Streaming from Omer's-MacBook · 192.168.1.4</span>
          <span>·</span>
          <span>Encrypted in transit</span>
        </div>
        <div>made for the seven super-duper agents</div>
      </div>
    </div>
`;

export default {
  title: 'Mission Control',
  render() { return html; },
  mount(host) {
    // Segmented filter chips (Today/Live/7d/All etc.)
    host.querySelectorAll('.seg').forEach(seg => {
      const btns = Array.from(seg.querySelectorAll('button'));
      btns.forEach(b => b.addEventListener('click', () => {
        btns.forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        toast('Filter: ' + b.textContent.trim());
      }));
    });
    // Live agent controls (take over / pause / stop)
    host.querySelectorAll('.live-controls .ctl').forEach(b => {
      b.addEventListener('click', () => toast(b.getAttribute('title') || 'Control'));
    });
    // Browser-mock submit
    const submit = host.querySelector('.b-form .submit');
    if (submit) submit.addEventListener('click', () => toast('Search flights — Bingo is on it'));
    // Permission switches
    host.querySelectorAll('.perm').forEach(p => {
      p.style.cursor = 'pointer';
      p.addEventListener('click', () => {
        p.classList.toggle('off');
        const name = p.querySelector('.perm-name');
        toast((p.classList.contains('off') ? 'Disabled: ' : 'Enabled: ') + (name ? name.textContent : 'permission'));
      });
    });
    // Tool chips
    host.querySelectorAll('.tool-chip').forEach(c => {
      c.style.cursor = 'pointer';
      c.addEventListener('click', () => toast(c.getAttribute('title') || 'App'));
    });
    // Generic ghost buttons inside this view
    host.querySelectorAll('.ghost-btn').forEach(b => {
      b.addEventListener('click', () => toast(b.textContent.trim()));
    });
    // Accent buttons (Schedule mission etc.)
    host.querySelectorAll('.accent-btn').forEach(b => {
      b.addEventListener('click', () => toast(b.textContent.trim() + ' — opening…'));
    });
  }
};
