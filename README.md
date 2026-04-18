# Career Fair — Junior Auditor

A small web app for the Hoover Middle School career fair. Students visiting the
**Junior Auditor (Public Accounting)** table pick a case on the screen and then
follow their paper Case File — which tells them which other career tables to
visit and what questions to ask.

The web app is display-only: it shows the job → the cases → the chosen case's
scenario + instructions. All questions and answer fields live on the printed
Case File sheets handed out at the table.

A second job — **Budget Accountant (Private Accounting)** — is stubbed out and
will be filled in later.

## Run locally

ES-module scripts need an HTTP server; they won't run from `file://`.

```bash
cd game
python3 -m http.server 8000
# open http://localhost:8000/
```

## Cases

| # | Case | Theme |
|---|------|-------|
| 1 | 🎤 Eras Tour Audit | Concert production budget |
| 2 | 🏀 Hoover Basketball Arena Audit | Construction & technology budget |

More cases can be added by editing `js/cases.js`.

## Adding / editing cases

All content lives in `js/cases.js`. Each `case` has an `id`, `caseNumber`,
`emoji`, `title`, `teaser`, and `scenario`. No other files need to change.

## Deployment (GitHub Pages)

`.github/workflows/pages.yml` publishes the repo root to GitHub Pages on every
push to `main` or the feature branch. One-time setup: **Settings → Pages →
Source: GitHub Actions**. The site is served at `https://<owner>.github.io/game/`.
