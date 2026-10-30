# Verification record

Verified locally on 30 October 2026 with Node.js 24 and the in-app Chromium browser.

## Automated

`npm run build` succeeds and produces seven complete HTML pages. `npm test` passes five checks: unique useful metadata and JSON-LD; local links, query links, assets and fragments; descriptive image attributes; sitemap / noindex consistency; dataset count reconciliation. These are source / build checks, not Google indexing or ranking validation.

## Browser

- Homepage visually inspected at the default narrow panel and 1440 × 1000 desktop viewport.
- Phone viewport 390 × 844: homepage and research page fit without page-wide horizontal overflow (document scroll width 375 px against viewport width 390 px). Tables have their own scroll container.
- Mobile Menu expands and exposes service links and enquiry action.
- Enquiry starts with Download hidden. Fixed a CSS display override found during QA and verified the fix.
- Entered Al Quoz → Abu Dhabi, 2 kg, 30 × 20 × 15 cm, clothing samples. Output correctly shows 1.80 kg volumetric and 2.00 kg illustrative chargeable weight.
- Generated brief appears with the no-booking notice; Download produces `shipsearch-enquiry.txt`.
- Changing actual weight to 3 kg updates the calculation and removes the stale brief / Download action.
- Research page opens with dataset, competitor, keyword and audit navigation.

Screenshots in `docs/screenshots/` record the homepage design. No automated browser suite, full accessibility conformance audit, real device lab, measured Lighthouse score or field performance result is claimed.
