# ShipSearch: controlled before/after audit

Audit date: 30 October 2026. Baseline: `docs/before.html`, an intentionally flawed fixture created for this project. It was never a live customer website. No traffic or ranking change is claimed.

| Issue in baseline | Fix in final build | Evidence |
| --- | --- | --- |
| Generic Home title; no description | Unique service-intent titles and descriptions | `data/page-manifest.json`, automated assertions |
| No service architecture | Three pre-rendered service URLs | `src/content.mjs`, `dist/*/index.html` after build |
| Vague heading and unsupported superlatives | Task-specific service H1s, preparation guidance, clear fictional identity | Rendered service pages |
| Broken image without alt | Original local SVG with contextual alt, width and height | Homepage markup test |
| “Click here” dead link | Descriptive crawlable links to services, FAQs and enquiry | Link / fragment resolution test |
| Unclear contact journey | Browser-only validated enquiry builder and text export | Manual browser QA |
| No discovery metadata | Canonicals, sitemap, robots, Open Graph and WebPage JSON-LD | Generated files and tests |
| No research provenance | Source register, Kaggle download checksum, limitations | `data/shipping-summary.json`, `docs/DATA.md` |

## Implementation choices

Static HTML is complete before JavaScript executes. JavaScript only enhances navigation and enquiry preparation. Semantic headings, keyboard focus styles, native FAQ disclosures, labels, a skip link and reduced-motion support improve usability. A local SVG avoids a large hero download. Google Fonts has a system-font fallback.

Utility enquiry and privacy pages are noindex and omitted from the sitemap. WebPage schema describes the portfolio honestly; no fake LocalBusiness address, reviews, aggregate rating or FAQ rich-result eligibility is claimed. The deployed Sites preview is private, so search engines cannot crawl through its access control. Public SEO readiness is demonstrable in the source; actual indexing requires a public deployment and verified business identity.

## Next measurement plan

For a real launch: set SITE_URL to the final HTTPS origin, configure a working enquiry backend and privacy terms, verify Search Console, submit the sitemap, and capture a dated baseline. Track impressions, relevant query clicks, enquiry starts/completions and field Core Web Vitals. No Lighthouse score or conversion uplift is claimed without a measured report.
