# Storefront proof and measurement

The public copy was checked against the app on 4 October 2026. Published worked examples are illustrative; they are not customer case studies or measured savings.

Schedule drafting runs within Fuzed Flow using existing project and phase dates. It creates unassigned planning placeholders for manager review; it does not send project details to an external model or check crew conflicts, weather or dependencies. Do not describe it as an autonomous AI scheduler.

## Customer case study packet

Collect the customer's permission to use their name, logo, quotes and screenshots before publication. Keep customer and project details private until approved.

- Customer/company and approver:
- Approved attribution and images:
- Trade, crew size and workflow:
- Before: how enquiries, quote revisions, material ordering, changes and invoices were handled:
- After: which Fuzed Flow workflows were actually used:
- Baseline period and number of comparable jobs:
- Measured quoting/admin time before and after, with source records:
- Changes in missed follow-ups or unpaid invoices, with source records:
- Other process changes that could explain the result:
- Approved customer quote and publication date:

Do not publish numerical savings, revenue growth or a testimonial without the supporting evidence and permission.

## Search Console rollout

The build renders all 45 canonical pages and generates `/sitemap.xml`. Register or verify `https://www.fuzedflow.com` in Google Search Console using the business owner's account. Submit the sitemap and inspect `/features`, a feature page, an industry page and a resource page. Search Console account access is not supplied through the current deployment connectors.

Record a baseline of indexed pages, impressions, clicks and query groups. Compare the same date windows after Google recrawls the site. Indexing and rankings are controlled by Google; a deploy or a sitemap does not establish a ranking gain.

## Conversion and performance events

The storefront includes Vercel Web Analytics and Speed Insights. The included Hobby Web Analytics plan was enabled on 4 October 2026: capped at 50,000 events/month with 30 days of viewable history. It measures visitors and page views. Custom-event reports require a paid Vercel plan and have not been enabled. Actions emit `window.dataLayer` events for a later tag-manager setup, and actual saved enquiries are recorded in Supabase. No analytics event includes form values, names, emails or message text.

| Event | Meaning |
| --- | --- |
| `trial_cta` | Visitor opens pricing from a trial CTA |
| `trial_start` | Visitor follows the selected plan signup link; not proof of signup completion |
| `demo_cta` | Visitor follows a demo CTA |
| `enquiry_submit`, `enquiry_success`, `enquiry_error` | Form attempt and saved/error outcomes |
| `resource_download` | Visitor follows a resource download link |
| `time_value_calculator` | Visitor changes calculator assumptions |

Measure signup completion and subscription activation in the app/Stripe separately. Do not equate a signup-link click with a paid subscription. Review Core Web Vitals only after sufficient real visits; local build size is not a field performance result.

## Service information requiring owner confirmation

The public support address remains support@fuzedflow.com. A phone number, social profiles and support response-time promises are omitted until operationally confirmed. Business still includes account management and custom reporting; the team arranges those services. The internal PM client timeline remains separate from the public ClientPortal.

## Latest app feature review — 5 October 2026

Checked against production app commit `785ab001b20bf5c2510b860effecf79ec5a1dd61` and the active database/functions. The storefront now has 25 feature pages and 43 public FAQ answers. All 45 canonical routes are rendered at build time and included in the sitemap.

| Public page | Evidence and boundary |
| --- | --- |
| `/features/approvals` | The visible hub has an action queue, quote activity, change orders and purchase orders. Internal review navigation remains hidden. Change orders require Professional/Business. |
| `/features/client-updates` | Project/date, summary, completed/upcoming work and client notes; draft/publish; branded PDF; email and text delivery; published portal records. These are reviewed author-created updates. |
| `/features/project-closeouts` | Quick photo capture or guided walkthrough; photo, category, description, vendor, optional due date and status; client publishing; separate trade PDF packages. Saving needs an internet connection. |
| `/features/ai-rewrite` | Supported long text fields, quote line-item descriptions and internal notes; Rewrite, Undo and Expand/Collapse. Server entitlements enable Professional/Business with a current subscription/trial. User/company usage limits apply, with retry guidance. Existing subscriber access is preserved by the app’s prior entitlement override. |

Starter, Professional and Business prices, yearly totals, included users, project limits and Stripe price IDs were preserved. No unlimited rewrite claim or fixed quota promise is published. AI Help remains product help; AI Rewrite is writing assistance. The privacy page states that selected-field text is sent to OpenAI when the user chooses Rewrite; the operational rewrite log excludes input/output text. The internal project timeline is still separate from the public portal.

No customer messages, live rewrite-provider calls, charges or customer data fixtures were needed for this storefront review. Modelled examples remain illustrative.

Two additional prospect resources provide a client project update outline and a project closeout/deficiency checklist. Both have downloadable Markdown copies and links to the matching product workflows.
