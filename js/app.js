import { jobs } from './cases.js';

const app = document.getElementById('app');

const state = {
  jobId: null,
  caseId: null,
};

function findJob(id) {
  return jobs.find((j) => j.id === id);
}

function findCase(job, id) {
  return job ? job.cases.find((c) => c.id === id) : null;
}

function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escWithHighlights(text, highlights) {
  let out = esc(text);
  if (!highlights || !highlights.length) return out;
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  for (const term of sorted) {
    const safe = esc(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(safe, 'g'), `<span class="hl">${esc(term)}</span>`);
  }
  return out;
}

function render() {
  if (!state.jobId) {
    renderHome();
  } else if (!state.caseId) {
    renderCasePicker();
  } else {
    renderCase();
  }
}

function renderHome() {
  const tiles = jobs
    .map((job) => {
      const badge = job.available
        ? ''
        : '<span class="badge">coming soon</span>';
      return `
        <button class="tile" data-job="${esc(job.id)}" ${
        job.available ? '' : 'disabled'
      }>
          <div class="tile-title">${esc(job.title)}</div>
          <div class="tile-sub">${esc(job.subtitle)} ${badge}</div>
        </button>
      `;
    })
    .join('');

  app.innerHTML = `
    <header class="topbar">
      <h1>Career Fair — Accounting</h1>
      <p class="tagline">Pick the job you want to try today.</p>
    </header>
    <section class="grid-2">${tiles}</section>
  `;

  app.querySelectorAll('button.tile:not([disabled])').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.jobId = btn.dataset.job;
      state.caseId = null;
      render();
    });
  });
}

function renderCasePicker() {
  const job = findJob(state.jobId);
  if (!job) {
    state.jobId = null;
    return render();
  }

  const cards = job.cases
    .map(
      (c) => `
      <button class="card" data-case="${esc(c.id)}">
        <div class="case-num">Case File #${c.caseNumber}</div>
        <div class="case-title">${esc(c.emoji || '')} ${esc(c.title)}</div>
        <div class="case-teaser">${esc(c.teaser)}</div>
      </button>
    `,
    )
    .join('');

  app.innerHTML = `
    <header class="topbar">
      <button class="back" id="back">← Back</button>
      <h1>${esc(job.title)}</h1>
      <p class="tagline">Pick a case to investigate. Your paper case file has the full mission.</p>
    </header>
    <section class="grid-2">${cards}</section>
  `;

  app.querySelector('#back').addEventListener('click', () => {
    state.jobId = null;
    render();
  });
  app.querySelectorAll('button.card').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.caseId = btn.dataset.case;
      render();
    });
  });
}

function renderCase() {
  const job = findJob(state.jobId);
  const kase = findCase(job, state.caseId);
  if (!kase) {
    state.caseId = null;
    return render();
  }

  app.innerHTML = `
    <header class="topbar">
      <button class="back" id="back">← Pick a different case</button>
      <div class="case-tag">Case File #${kase.caseNumber}</div>
      <h1>${esc(kase.emoji || '')} ${esc(kase.title)}</h1>
    </header>
    <section class="scenario big">
      <h2>Your mission</h2>
      <p>${escWithHighlights(kase.scenario, kase.highlights)}</p>
    </section>
    <section class="instructions">
      <h2>What to do</h2>
      <ol>
        <li>Pick up your paper Case File from the Junior Auditor table.</li>
        <li>Walk to the other career tables listed on your Case File.</li>
        <li>Ask the professionals the questions, and write their answers on the paper.</li>
        <li>Bring the completed Case File back to the Junior Auditor table.</li>
        <li>After we review your completed workpaper, collect your award! 🏆🎉</li>
      </ol>
      <p class="tip">Good luck, Junior Auditor! 🔍</p>
    </section>
  `;

  app.querySelector('#back').addEventListener('click', () => {
    state.caseId = null;
    render();
  });
}

render();
