# Product brief and prioritized backlog

[← Project overview](../README.md)

Status: implemented portfolio MVP. Company identity and services are fictional. Proposed research, metrics and roadmap items below are not measured results or delivery commitments.

## Problem and target users

People comparing courier options need help selecting a service and assembling enough detail for a useful response. Small stores additionally need to specify recurring volumes, returns and cash-on-delivery requirements. The product hypothesis is that clearer preparation guidance makes that next step easier; usability or conversion improvements have not been established.

| User group | Task | Design response |
| --- | --- | --- |
| Individual sender | Understand domestic vs. international requirements | Dedicated service pages, preparation steps and FAQs |
| Small business | Prepare a document or parcel enquiry | Route, packed measurements and requirements in one brief |
| Online-store operator | Explain recurring deliveries and post-purchase needs | Merchant service page, volume bands and returns / COD prompts |
| Portfolio reviewer | Inspect decisions and evidence | Public research page, source code, audit, tests and provenance |

## Scope

Implemented: seven pages, three service journeys, responsive navigation, local enquiry generation, downloadable brief, SEO metadata, discovery files and an evidence-led case study.

Out of scope for the MVP: real bookings, rates, payment, authentication, customer database, notifications, courier APIs, live tracking, operational SLAs and measured organic growth.

## User stories and acceptance criteria

| Story | Acceptance criteria | Evidence |
| --- | --- | --- |
| As a sender, I can find the appropriate service | Three distinct service URLs with descriptive navigation and a clear enquiry action | Build link checks and service page inspection |
| As a first-time shipper, I can understand preparation needs | Each service has concrete preparation steps and relevant FAQs | Authored service content |
| As a sender, I can prepare a reusable brief | Required fields validate; output includes route, parcel and requirements; download creates text | Manual browser QA |
| As a visitor, I understand what happens to my data | No-booking notice and privacy explanation are visible | Enquiry page and privacy page |
| As a researcher, I can reproduce the external aggregates | Source, retrieval date, hash and script are available | Data documentation and reconciliation tests |
| As a reviewer, I can distinguish evidence from hypotheses | No fabricated volume, ranking, service KPI or before/after growth claim | Case study and audit fixture |

## Proposed success measures

These are measurement definitions for future validation, not collected analytics:

- **Service selection:** proportion of usability participants reaching the right page for a given task; record wrong turns and hesitation.
- **Brief completion:** proportion completing a valid sample brief, with time-on-task and field confusion notes.
- **Comprehension:** whether participants understand that a brief is not a booking and identify what still needs provider confirmation.
- **Public SEO:** impressions and relevant query clicks after a real business/domain launch with Search Console access.
- **Production quality:** accessibility findings and measured field / lab performance, with dated tooling and context.

No analytics tracker is installed. A real launch must choose a measurement approach consistent with its privacy obligations.

## Prioritized backlog

| Priority | Work | Dependency | Definition of done |
| --- | --- | --- | --- |
| P1 | Automated browser coverage | Browser test tooling decision | CI checks the enquiry flow, service preselection, menu and export |
| P1 | Target-user content evaluation | Recruiting willing participants | Findings recorded; unclear copy revised and retested |
| P2 | Keyword demand validation | Appropriate research-tool access | Dated evidence separates observed demand from hypotheses |
| P2 | Accessibility / performance audit | Defined devices, tools and scope | Findings prioritized, fixes verified, results documented |
| P2 | Real enquiry submission | Verified business, backend and privacy requirements | Validated submission, failure states, confirmation and retention rules |
| P3 | Arabic localization | Qualified content review | Reviewed translations and RTL layout / keyboard tests |
| P3 | Courier integration | Provider agreement and sandbox | Accurate status mapping, error handling and integration tests |

## Risks and decisions

| Risk | Current response |
| --- | --- |
| Fictional brand mistaken for a provider | Visible notices and explicit no-booking interaction |
| Dataset confused with Dubai performance | Provenance and limitations adjacent to results |
| Demo weights mistaken for tariffs | Divisor and chargeable weight are marked illustrative; no price produced |
| SEO implementation mistaken for measured growth | Controlled baseline fixture and no ranking claims |
| Scope expands into operational logistics | Keep live-service work behind verified requirements and a separate implementation decision |

## Release criteria and maintenance

Before merging: inspect changed copy and links, build, run the automated checks, and manually verify affected interactions. The Pages workflow repeats the root build/tests before deploying the public artifact. After deployment, verify representative pages and base-path links. Revert a faulty source change and push the revert to trigger a replacement deployment; Git history preserves prior versions.

Refresh competitor observations and source terms when updating the research. Keep raw datasets out of the repository, and keep README claims aligned with implemented behavior.
