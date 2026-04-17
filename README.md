# Career Fair — Junior Auditor

An interactive web program for a middle-school career fair. A student who sits
at the **Junior Auditor (Public Accounting)** table picks one of four cases and
walks around the fair to find the answers at other career tables. The program
records the student's picks so the mentor can talk through them afterwards.

A second job — **Budget Accountant (Private Accounting)** — is stubbed out and
will be filled in later.

## Try it locally

ES-module scripts need an HTTP server; they won't run from `file://`.

```bash
cd game
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## The 4 cases

| # | Case | Tables visited |
|---|------|----------------|
| 1 | Pups & Pastries Dog Bakery | Dog Bakery · CPA Accountant · Attorney |
| 2 | Runway Dreams Boutique | Fashion Designer · Realtor · Marketing Manager (Bitcoin) |
| 3 | Rockets & Revenue | Aerospace Engineer · Structural Engineer · Attorney Advisor (Treasury) |
| 4 | Cyber Startup Books | Software Engineer · Cyber Security AI · Machine Learning Engineer |

## Printable sheets

Open `print.html` and use the browser's print dialog — each case prints on its
own page with circle-able answer bubbles, so students can do it on paper if the
device or wifi is busy.

## Adding a new case or job

All content lives in `js/cases.js`. The file exports a `jobs` array. Each job
has a `cases` array; each case has a `questions` array of 3 items with
`visit`, `prompt`, and `options`. No other files need to change.

## Deployment (GitHub Pages)

A workflow in `.github/workflows/pages.yml` publishes the repo root to GitHub
Pages on every push. One-time setup: in the repo's **Settings → Pages**, set
the source to **GitHub Actions**. The site will then be available at
`https://<owner>.github.io/game/`.
