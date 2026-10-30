# Architecture and data contracts

[← Project overview](../README.md)

## Design decision

ShipSearch is a static publishing project with local browser interactions. Complete service HTML supports direct navigation and content inspection without a client framework. Node scripts provide a portable build and analysis pipeline with no third-party package installation. Tradeoff: source changes require a rebuild; there is no content-management interface, durable enquiry storage or server-side business logic.

## Module responsibilities

| Module | Reads | Produces |
| --- | --- | --- |
| `src/content.mjs` | Authored service copy, keywords and sources | Exported objects consumed at build time |
| `scripts/analyze.mjs` | Local `Train.csv` or path argument | `data/shipping-summary.json` |
| `scripts/build.mjs` | Content, summary, browser assets, public environment values | `dist/`, keyword CSV and page manifest |
| `src/app.js` | DOM fields and service query parameter | Menu state, weight output, brief and browser download |
| `scripts/serve.mjs` | Generated files in `dist/` | Loopback HTTP preview on port 4173 |
| `tests/seo.test.mjs` | Generated pages and aggregate JSON | Assertions about output consistency |

## Database schema

There is no database, ORM, migration or SQL schema. These are the actual data contracts, not proposed tables.

### Shipping summary

| Field | Type | Meaning |
| --- | --- | --- |
| `source` | string URL | Kaggle dataset page |
| `retrieved` | date string | Recorded retrieval date |
| `sha256` | 64-character hex string | Hash of exact input CSV text |
| `rows`, `late`, `onTime` | integers | Sample and binary outcome counts |
| `latePercent` | number | `100 × late / rows`, rounded to two decimals |
| `averageSupportCalls` | number | Mean customer care calls, rounded to two decimals |
| `byMode[]` | array of objects | `{ mode: string, count: integer, late: integer }` |
| `limitations` | string | Interpretation boundaries |

Counts should reconcile: `late + onTime = rows`; mode counts sum to `rows`; mode late counts sum to `late`. Tests check these invariants. The analysis script checks the expected row count and binary outcome values. It is not a general-purpose dataset schema validator.

### Keyword map and page inventory

`data/keyword-map.csv` has **five columns**: `keyword`, `intent`, `destination`, `priority`, `rationale`. Each row is generated from the keyword array in `src/content.mjs`. Priorities are editorial judgments.

`data/page-manifest.json` is an array of `{ path: string, title: string, description: string, noindex: boolean }`. The builder writes it after generating all pages. Enquiry and privacy pages carry `noindex` and are omitted from the sitemap.

### Enquiry form

| Field | Browser constraints |
| --- | --- |
| `service` | One of the three service slugs |
| `origin`, `destination` | Required text, maximum 100 characters each |
| `weight` | Required number, 0.01–1,000 kg, step 0.01 |
| `length`, `width`, `height` | Required numbers, 1–300 cm, step 0.1 |
| `volume` | One-off shipment or one of the defined monthly-volume bands |
| `notes` | Required text, maximum 1,500 characters |

Native browser validation supports the demo. There is no server validation because there is no submission endpoint. A production backend must validate independently and define retention, consent and error behavior.

Illustrative volumetric weight is `length × width × height / 5000`. Illustrative chargeable weight is the maximum of actual and volumetric weight, formatted to two decimals. The divisor is a demo assumption, not a provider tariff or a price calculation.

## Privacy and external requests

Form text is inserted with `textContent`; the brief is created in memory and exported as a `Blob`. Editing inputs clears the existing result. There are no enquiry network calls, cookies or local-storage writes. Browser form restoration may preserve values independently. Google Fonts and README badges make external requests; hosting providers may process access logs. External research links use their own privacy practices.

## Deployment variants

The default build targets the private Sites origin. GitHub Pages rebuilds with `SITE_URL=https://vaishnavibnsall.github.io` and `BASE_PATH=/shipsearch-logistics-seo`. The base path adjusts generated links and absolute metadata. Only one path segment is accepted. Public settings are build-time inputs; no runtime secret injection is needed.
