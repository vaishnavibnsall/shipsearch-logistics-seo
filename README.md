# ShipSearch ↗

A complete frontend and evidence-led SEO portfolio project for a **fictional Dubai courier**. Designed around shipping customers’ practical questions: what service fits, what information is needed, and what happens next.

## Experience

- Seven pre-rendered pages: homepage, domestic delivery, international shipping, e-commerce delivery, enquiry and research case study, plus privacy.
- Responsive forest-green / lime identity and an original locally served SVG illustration.
- Browser-only enquiry builder: native validation, actual / volumetric weight comparison and downloadable text brief. No booking or personal-data submission.
- Unique titles, descriptions and H1s; descriptive links, contextual image alt, canonicals, Open Graph, sitemap, robots and honest WebPage JSON-LD.
- Twelve qualitative keyword hypotheses, three official-source competitor comparisons and a controlled before/after audit.
- Reproducible descriptive analysis of 10,999 external Kaggle shipping records, with checksum and interpretation limits.

## Run locally

Requires Node.js 22 or newer. There are **no runtime or build dependencies** and no install step.

```sh
npm run build
npm test
npm run dev
```

Open http://127.0.0.1:4173. The server runs on loopback and is intended for development only. Build output is `dist/`. Stop with Ctrl+C.

## Project layout

| Location | Purpose |
| --- | --- |
| `src/content.mjs` | Service copy, keyword hypotheses, source register |
| `src/styles.css`, `src/delivery.svg` | Responsive design and original illustration |
| `src/app.js` | Accessible menu and local enquiry interactions |
| `scripts/build.mjs` | Static HTML, metadata, sitemap and data export generation |
| `scripts/analyze.mjs` | Reproducible external dataset aggregation |
| `tests/seo.test.mjs` | Metadata, schema, local links, images, sitemap, data reconciliation |
| `data/` | Aggregates, page inventory, keyword CSV; no raw customer data |
| `docs/` | Provenance, audit, portfolio walkthrough and QA record |

## Deployment

Upload `dist/` to a static host that supports directory index files. Set `SITE_URL` to the real HTTPS origin before building. The default canonical origin is the private Sites demo. Private access prevents search-engine crawling; public indexing needs a public host and a verified real identity if converted to a business.

PowerShell example:

```powershell
$env:SITE_URL = 'https://your-domain.example'
npm run build
```

GitHub Actions runs build and tests on pushes and pull requests. The project does not assume a paid service or need any secret to build. Sites identity is held in `.openai/hosting.json`; its source-sync remote is separate from GitHub.

## Research and credibility

Read [data provenance](docs/DATA.md), [SEO audit](docs/SEO-AUDIT.md), and [portfolio walkthrough](docs/PORTFOLIO.md). The live case-study page links to Google Search Central, Kaggle, Aramex, DHL and Emirates Post. Dataset observations are not ShipSearch KPIs. Keyword priorities are judgments, not measured volume. The baseline is an explicit fixture, not a live client audit. No ranking, conversion or Lighthouse performance score is invented.

Original code and illustration are MIT licensed. Third-party datasets, fonts, sites and trademarks retain their own terms. Raw source data is excluded from Git.
