# Static resource and interaction reference

[← Project overview](../README.md)

ShipSearch has **no backend API**. This reference documents the resources and local interactions that actually exist. Do not send customer enquiries to these routes expecting a booking or notification.

## Base URLs

- Public: `https://vaishnavibnsall.github.io/shipsearch-logistics-seo/`
- Local root build: `http://127.0.0.1:4173/`

## Static routes

| Relative resource | Content |
| --- | --- |
| `index.html` or `/` | Homepage |
| `domestic-delivery/` | UAE delivery guidance and FAQs |
| `international-shipping/` | Cross-border preparation and FAQs |
| `e-commerce-delivery/` | Merchant requirements, COD and returns |
| `case-study/` | Data findings, keyword map, competitor research and audit |
| `enquiry/` | Browser-only enquiry builder; `noindex` |
| `privacy/` | Demo privacy and limitations; `noindex` |
| `data/shipping-summary.json` | Aggregate external shipping data |
| `data/keyword-map.csv` | Five-column keyword export |
| `sitemap.xml` | Five indexable pages |
| `robots.txt` | Crawl directive and absolute sitemap location |
| `assets/` | CSS, browser JavaScript and original SVG |

Resources are retrieved with ordinary `GET` requests. No authentication, pagination or application-specific API rate limit is implemented. Hosting-provider behavior still applies.

### Aggregate response excerpt

```json
{
  "source": "https://www.kaggle.com/datasets/prachi13/customer-analytics",
  "retrieved": "2026-10-30",
  "rows": 10999,
  "late": 6563,
  "onTime": 4436,
  "latePercent": 59.67,
  "averageSupportCalls": 4.05
}
```

This excerpt omits the checksum, mode breakdown and limitations for brevity. The live file includes them. Label 1 means NOT on time according to the publisher; the result does not describe UAE or ShipSearch operations.

## Enquiry query parameter

`enquiry/?service=international-shipping` selects International shipping on page load. Allowed slugs are `domestic-delivery`, `international-shipping` and `e-commerce-delivery`. Unknown values do not override the initial default.

## Local actions

1. Input changes update the illustrative weight output and clear a previously generated brief.
2. “Create enquiry brief” runs native validation and formats values into a local text preview.
3. “Download brief” creates `shipsearch-enquiry.txt` through a browser Blob URL.

No `POST`, email delivery, lead record, order ID or booking confirmation is produced. The form is intentionally not a shipping-price API.

## Errors and compatibility

The development server returns status 404 with `Page not found` for missing or rejected paths; it does not expose a JSON error contract. Production 404 pages and HTTP headers are controlled by the host. `dist/404.html` is generated for hosts that support it. No CORS behavior is configured by application code. HTML pages remain readable without JavaScript; enquiry generation and the mobile menu need JavaScript.
