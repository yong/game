import { jobs } from './cases.js';

const app = document.getElementById('app');

const state = {
  jobId: null,
  caseId: null,
  studentName: '',
  answers: {},
};

function findJob(id) {
  return jobs.find((j) => j.id === id);
}

function findCase(job, id) {
  return job ? job.cases.find((c) => c.id === id) : null;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function render() {
  if (!state.jobId) {
    renderHome();
  } else if (!state.caseId) {
    renderCasePicker();
  } else if (state.caseId === '__done__') {
    renderReceipt();
  } else {
    renderCase();
  }
}

function renderHome() {
  const tiles = jobs
    .map((job) => {
      const disabled = job.available ? '' : 'disabled';
      const badge = job.available
        ? ''
        : '<span class="badge">coming soon</span>';
      return `
        <button class="tile ${disabled}" data-job="${escapeHtml(job.id)}" ${
        job.available ? '' : 'disabled'
      }>
          <div class="tile-title">${escapeHtml(job.title)}</div>
          <div class="tile-sub">${escapeHtml(job.subtitle)} ${badge}</div>
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
    <footer class="foot">
      <a href="print.html">Printable case sheets →</a>
    </footer>
  `;

  app.querySelectorAll('button.tile:not([disabled])').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.jobId = btn.dataset.job;
      state.caseId = null;
      state.answers = {};
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
      (c, i) => `
      <button class="card" data-case="${escapeHtml(c.id)}">
        <div class="case-num">Case ${i + 1}</div>
        <div class="case-title">${escapeHtml(c.title)}</div>
        <div class="case-teaser">${escapeHtml(c.teaser)}</div>
      </button>
    `,
    )
    .join('');

  app.innerHTML = `
    <header class="topbar">
      <button class="back" id="back">← Back</button>
      <h1>${escapeHtml(job.title)}</h1>
      <p class="tagline">Pick one case to investigate.</p>
    </header>
    <label class="name-row">
      Your first name (optional):
      <input id="name" type="text" maxlength="30" value="${escapeHtml(
        state.studentName,
      )}" placeholder="e.g. Maya" />
    </label>
    <section class="grid-2">${cards}</section>
  `;

  app.querySelector('#back').addEventListener('click', () => {
    state.jobId = null;
    render();
  });
  app.querySelector('#name').addEventListener('input', (e) => {
    state.studentName = e.target.value;
  });
  app.querySelectorAll('button.card').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.caseId = btn.dataset.case;
      state.answers = {};
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

  const qBlocks = kase.questions
    .map((q, i) => {
      const selected = state.answers[i];
      const opts = q.options
        .map(
          (opt, j) => `
          <label class="option ${selected === j ? 'selected' : ''}">
            <input type="radio" name="q${i}" value="${j}" ${
            selected === j ? 'checked' : ''
          } />
            <span class="letter">${String.fromCharCode(65 + j)}</span>
            <span class="opt-text">${escapeHtml(opt)}</span>
          </label>`,
        )
        .join('');

      return `
        <article class="question">
          <div class="q-head">
            <span class="q-num">Q${i + 1}</span>
            <span class="visit">🚶 Go visit the <strong>${escapeHtml(
              q.visit,
            )}</strong> table</span>
          </div>
          <p class="q-prompt">${escapeHtml(q.prompt)}</p>
          <div class="options">${opts}</div>
        </article>
      `;
    })
    .join('');

  app.innerHTML = `
    <header class="topbar">
      <button class="back" id="back">← Back</button>
      <h1>${escapeHtml(kase.title)}</h1>
    </header>
    <section class="scenario">
      <h2>Your mission</h2>
      <p>${escapeHtml(kase.scenario)}</p>
    </section>
    <section class="questions">${qBlocks}</section>
    <div class="actions">
      <button class="primary" id="finish">Finish &amp; see my report →</button>
    </div>
  `;

  app.querySelector('#back').addEventListener('click', () => {
    state.caseId = null;
    render();
  });

  app.querySelectorAll('input[type=radio]').forEach((input) => {
    input.addEventListener('change', (e) => {
      const name = e.target.name;
      const idx = parseInt(name.slice(1), 10);
      state.answers[idx] = parseInt(e.target.value, 10);
      render();
    });
  });

  app.querySelector('#finish').addEventListener('click', () => {
    state.caseId = '__done__';
    state._lastCaseId = kase.id;
    render();
  });
}

function renderReceipt() {
  const job = findJob(state.jobId);
  const kase = findCase(job, state._lastCaseId);
  if (!kase) {
    state.caseId = null;
    return render();
  }

  const rows = kase.questions
    .map((q, i) => {
      const pick = state.answers[i];
      const ans =
        pick === undefined ? '<em>no answer</em>' : escapeHtml(q.options[pick]);
      return `
        <li>
          <div class="r-visit">${escapeHtml(q.visit)}</div>
          <div class="r-prompt">${escapeHtml(q.prompt)}</div>
          <div class="r-ans"><strong>Your answer:</strong> ${ans}</div>
        </li>`;
    })
    .join('');

  const who = state.studentName ? escapeHtml(state.studentName) : 'Auditor';

  app.innerHTML = `
    <header class="topbar">
      <h1>🎉 Great work, ${who}!</h1>
      <p class="tagline">Show this to the Junior Auditor mentor.</p>
    </header>
    <section class="receipt">
      <div class="r-title">${escapeHtml(kase.title)}</div>
      <ol>${rows}</ol>
    </section>
    <div class="actions">
      <button class="primary" onclick="window.print()">🖨️ Print my report</button>
      <button class="ghost" id="again">Try another case</button>
    </div>
  `;

  app.querySelector('#again').addEventListener('click', () => {
    state.caseId = null;
    state.answers = {};
    render();
  });
}

render();
