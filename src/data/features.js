// Cross-referenced with production app changes through 2026-10-14.
export const features = [
  {
    "slug": "lead-management",
    "name": "Lead management",
    "group": "Sales & quotes",
    "tagline": "Keep enquiries, ownership and the next follow-up together.",
    "overview": "Record leads manually or import a CSV. Track seven pipeline stages, source, estimated value, assigned team member and a follow-up date. When a linked quote becomes a project or invoice, convert the qualified lead into a client while checking for an existing matching client.",
    "howItWorks": [
      "Capture contact details, site address, notes and files.",
      "Choose a stage and assign the enquiry to a team member.",
      "Prepare the quote, then carry the lead into the connected client record when the work becomes a project or invoice."
    ],
    "example": "A renovation enquiry moves from New to Qualified after a site visit. Record the address, photos and scope; when its quote becomes a project, the linked lead is converted into the client record without re-entering the job contact.",
    "plan": "All plans",
    "related": [
      "crm",
      "estimating"
    ]
  },
  {
    "slug": "crm",
    "name": "Client records",
    "group": "Sales & quotes",
    "tagline": "Find the client details behind the job.",
    "overview": "Maintain contact and address details, tags, saved segments, notes, photos and attachments. Link clients to tasks, quotes, invoices and projects.",
    "howItWorks": [
      "Create or import a client record.",
      "Add notes, tags, photos and supporting files.",
      "Open the linked documents and tasks when following up."
    ],
    "example": "Keep a homeowner’s contact information and site notes beside the quote and invoice for their renovation.",
    "plan": "All plans",
    "related": [
      "lead-management",
      "client-portal"
    ]
  },
  {
    "slug": "estimating",
    "name": "Estimating & quoting",
    "group": "Sales & quotes",
    "tagline": "Build a clear scope with costs, phases and client options.",
    "seoTitle": "Contractor estimating and quoting software",
    "description": "Create phased contractor estimates with labour, materials, margins, options, branded PDFs and online client approvals in one connected workflow.",
    "headline": "Create contractor estimates that explain the scope and protect the margin.",
    "overview": "Build phased quotes with line items, material and labour costs, client prices, scope text and photos. Review the cost-to-revenue margin before sharing a branded PDF, then let the client choose optional items or phases before online approval. Professional and Business include AI Rewrite with Undo for supported quote line-item descriptions and internal notes.",
    "benefitTitle": "Turn job knowledge into a quote the office and client can follow",
    "benefits": [
      {
        "title": "Scope the work by phase",
        "text": "Separate demolition, rough-ins, finishes and other stages so inclusions, quantities and responsibilities are easier to review."
      },
      {
        "title": "See cost and margin before sending",
        "text": "Compare material and labour costs with client pricing, discounts, tax, deposits and the resulting gross margin inside the quote builder."
      },
      {
        "title": "Give clients clear choices",
        "text": "Present optional phases or upgrades in the shared quote so selected choices become part of the approved total and recorded scope."
      }
    ],
    "image": {
      "src": "https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-estimating-software-quote-builder.webp",
      "alt": "Fuzed Flow contractor estimate builder showing phased scope and priced line items",
      "caption": "Build the scope in phases, then review the numbers before the quote reaches the client."
    },
    "detailSections": [
      {
        "title": "Build the estimate around how the job will run",
        "paragraphs": [
          "A contractor estimate needs to do more than produce a total. It should show what is included, where the work belongs and which assumptions the price depends on. Fuzed Flow organizes the quote into phases so the structure can follow the actual job sequence.",
          "Inside each phase, add priced line items with scope descriptions, quantities, material and labour costs, client pricing and supporting photos. That gives the office a working cost record while the client receives a clearer explanation of the proposed work."
        ],
        "items": [
          "Organize work into phases or rooms.",
          "Record quantities, units, labour and material costs.",
          "Add scope wording and photos beside the relevant line item.",
          "Reorder phases as the estimate develops."
        ]
      },
      {
        "title": "Review the financial assumptions before the quote leaves the office",
        "paragraphs": [
          "The builder compares total cost with client revenue and displays the estimated margin amount and percentage. You can also account for discounts, tax settings, a required deposit and a milestone payment schedule before sending the document.",
          "These figures help with estimating decisions, but they are based on the information entered by your company. They are not a guarantee of job profitability and do not replace bookkeeping or accounting review."
        ]
      },
      {
        "title": "Make upgrades and alternatives easier to decide",
        "paragraphs": [
          "Optional line items let a client compare an upgrade without mixing it into the base scope. For example, a standard fixture can remain in the main estimate while a premium fixture package is presented as an optional selection.",
          "When the client reviews the shared quote, selected options update the approval total. The resulting choice stays connected to the quote activity instead of being buried in a separate email thread."
        ]
      },
      {
        "title": "Keep the approved scope connected to the next step",
        "paragraphs": [
          "After approval, the quote remains connected to the client and downstream project or invoice workflow. Selected material items can also be carried into project material tracking when they are marked for that purpose.",
          "Reusable quote, phase and pricebook records help with repeat work, but every new estimate should still be checked against the current site conditions, supplier pricing and subcontractor scope."
        ]
      }
    ],
    "howItWorks": [
      "Build the scope in phases and add priced line items.",
      "Review costs, gross margin, tax and optional upgrades.",
      "Share the quote; the client chooses options and approves the scope."
    ],
    "example": "For a bathroom renovation, create phases for demolition, plumbing, electrical, waterproofing, tile and finishing. Keep the standard fixture allowance in the base scope and offer a $1,200 premium fixture package as an option. The client can review the difference, choose the upgrade and approve the resulting quote total online.",
    "plan": "All plans",
    "dateModified": "2026-10-21",
    "faq": [
      {
        "question": "Can Fuzed Flow show estimated gross margin before I send a quote?",
        "answer": "Yes. The quote builder compares entered costs with client revenue and displays an estimated margin amount and percentage. The result depends on the accuracy of the costs, quantities and pricing entered by your company."
      },
      {
        "question": "Can clients select optional items on a contractor quote?",
        "answer": "Yes. Optional items or phases can be presented in the shared quote. The client's selections change the approval total and remain connected to the quote record."
      },
      {
        "question": "Can I reuse a previous estimate?",
        "answer": "Use full quote templates, phase templates and reusable pricebook items to start familiar work faster. Review every copied scope, quantity and price before sending the new estimate."
      },
      {
        "question": "Does estimating replace accounting software?",
        "answer": "No. Fuzed Flow helps prepare and approve contractor scope and pricing. It does not replace formal bookkeeping, payroll, tax filing or an accountant's review."
      }
    ],
    "related": [
      "pricebook",
      "smart-templates",
      "approvals",
      "ai-rewrite"
    ]
  },
  {
    "slug": "smart-templates",
    "name": "Quote & phase templates",
    "group": "Sales & quotes",
    "tagline": "Reuse the structure of work you quote often.",
    "overview": "Save full quotes and phase or room templates. Duplicate and reorder scope rather than rebuilding familiar work. Review prices before sending each new quote.",
    "howItWorks": [
      "Save a reusable quote or phase structure.",
      "Duplicate the template into a new job and reorder phases.",
      "Review quantities, current costs and scope before sharing."
    ],
    "example": "Start a bathroom estimate with demolition, rough-in, finishes and fixtures, then adjust each section to the site.",
    "plan": "All plans",
    "related": [
      "estimating",
      "pricebook"
    ]
  },
  {
    "slug": "project-management",
    "name": "Project management",
    "group": "Projects & field",
    "tagline": "Know what is planned, assigned, blocked and ordered.",
    "overview": "Keep client and site information, phases, tasks, materials, plans, permits, subcontractors and linked documents in the project workspace. Prepare client updates and closeout checklists alongside the job, and use the Approvals Hub to review pending document decisions.",
    "howItWorks": [
      "Open the project workspace and confirm scope and site details.",
      "Set phase dates and assign people and tasks.",
      "Review materials, logs, issues and linked documents as work progresses."
    ],
    "example": "Follow a renovation from demolition to finishes. A blocked phase, assigned task and Ordered material each describe a different part of the job.",
    "plan": "Starter: 5 active projects. Professional & Business: unlimited.",
    "related": [
      "approvals",
      "client-updates",
      "project-closeouts",
      "project-materials",
      "scheduling"
    ]
  },
  {
    "slug": "scheduling",
    "name": "Scheduling",
    "group": "Projects & field",
    "tagline": "Plan phase dates and see assigned work.",
    "overview": "Manage project and phase dates, calendars and employee assignments. Review a schedule draft before making changes to the job. Managers control dates and assignments.",
    "howItWorks": [
      "Set planned start and end dates for the project and its phases.",
      "Assign work and check the calendar or timeline.",
      "Update the plan when site conditions or availability change."
    ],
    "example": "Schedule rough-in before drywall, then adjust the planned phase dates after a site review.",
    "plan": "All plans",
    "related": [
      "project-management",
      "time-tracking"
    ]
  },
  {
    "slug": "daily-logs",
    "name": "Daily logs & project notes",
    "group": "Projects & field",
    "tagline": "Leave a useful record of what happened on site.",
    "overview": "Record work completed, crew, blockers, safety concerns, materials and photos. Weather is entered by the team. Save records to the online workspace.",
    "howItWorks": [
      "Choose the project and date.",
      "Record work, crew, blockers, safety and photos.",
      "Save online so the office can review the project record."
    ],
    "example": "Record that rough-in is complete, a fixture delivery is delayed and the crew needs a decision before closing the wall.",
    "plan": "All plans",
    "related": [
      "project-management",
      "client-updates",
      "ai-rewrite"
    ]
  },
  {
    "slug": "time-tracking",
    "name": "Time tracking",
    "group": "Team & help",
    "tagline": "Submit hours and give managers a review queue.",
    "overview": "Employees clock in and out or submit missing manual hours. Timesheets show status for manager review. Pay views estimate recorded hours multiplied by the stored hourly rate.",
    "howItWorks": [
      "Clock in and out in the employee web portal.",
      "Submit missing hours with a date, time and notes.",
      "A manager reviews pending entries in HR."
    ],
    "example": "A crew member submits a missing four-hour site visit. The manager reviews the entry before using it in their own payroll process.",
    "plan": "Professional & Business",
    "related": [
      "employee-portal",
      "hr-management"
    ]
  },
  {
    "slug": "change-orders",
    "name": "Change orders",
    "group": "Money & purchasing",
    "tagline": "Agree on changed scope before invoicing it.",
    "overview": "Create a separate change-order document, share it for online approval and convert agreed work into an invoice. Keep the change distinct from the original quoted scope.",
    "howItWorks": [
      "Describe the changed work and its price.",
      "Share the change order for the client’s approval.",
      "Invoice the approved change and update the job plan as needed."
    ],
    "example": "Document an added outlet, the agreed cost and its effect on the job before carrying out the extra work.",
    "plan": "Professional & Business",
    "related": [
      "estimating",
      "invoicing",
      "approvals"
    ]
  },
  {
    "slug": "purchase-orders",
    "name": "Purchase orders",
    "group": "Money & purchasing",
    "tagline": "Document what you ordered and where it belongs.",
    "overview": "Create supplier and project line items, expected delivery dates and shipping terms. Share a PDF or public view and track Draft, Sent, Received, Billed or Cancelled status.",
    "howItWorks": [
      "Choose a supplier and add project material line items.",
      "Record expected delivery and shipping details; send the order.",
      "Update the order’s overall status as delivery and billing progress."
    ],
    "example": "Order the quoted fixtures from the supplier, record the expected delivery and mark the order Received after checking it.",
    "plan": "All plans",
    "related": [
      "project-materials",
      "inventory-management",
      "approvals"
    ]
  },
  {
    "slug": "inventory-management",
    "name": "Inventory",
    "group": "Money & purchasing",
    "tagline": "See stock, movements and project usage.",
    "overview": "Track SKU, supplier, location, quantity and reorder thresholds. Record movements and project usage, and use CSV workflows for existing stock lists. Planned project materials remain a separate list.",
    "howItWorks": [
      "Add or import stock with its SKU and storage location.",
      "Record receipts, adjustments and project usage.",
      "Review quantities against reorder thresholds."
    ],
    "example": "Record a box of fasteners received at the shop and the quantity used on a specific job.",
    "plan": "All plans",
    "related": [
      "project-materials",
      "purchase-orders"
    ]
  },
  {
    "slug": "employee-portal",
    "name": "Employee portal",
    "group": "Team & help",
    "tagline": "Give the crew a focused view of their work.",
    "overview": "The installable mobile web portal includes assigned work and schedules, a time clock, timesheets, estimated pay, leave requests, expenses, tasks, project notes and inventory according to company settings and role. Install it from a supported browser on iPhone, iPad, Android or Windows; current records still require an internet connection.",
    "howItWorks": [
      "An invited employee signs in using their own account.",
      "Open assigned work or clock in from the portal.",
      "Submit hours, receipts or project notes for the office to review."
    ],
    "example": "A worker opens assigned tasks, submits an expense with a receipt and checks the status of their timesheet.",
    "plan": "Professional & Business",
    "related": [
      "time-tracking",
      "expense-tracking",
      "hr-management"
    ]
  },
  {
    "slug": "hr-management",
    "name": "Human resources",
    "group": "Team & help",
    "tagline": "Review staff submissions without losing their context.",
    "overview": "Maintain staff roles and hourly rates. Review time entries, expenses and leave requests. The employee pay view is an estimate of gross pay from recorded hours and rate.",
    "howItWorks": [
      "Invite staff and set their role and hourly rate.",
      "Review pending time, expense and leave submissions.",
      "Use the reviewed records in your own payroll and accounting process."
    ],
    "example": "Check an employee’s timesheet and receipt against the assigned work before approving their submission.",
    "plan": "Professional & Business",
    "related": [
      "time-tracking",
      "employee-portal"
    ]
  },
  {
    "slug": "client-portal",
    "name": "Client portal",
    "group": "Sales & quotes",
    "tagline": "Give clients the shared documents, updates and closeout checklist.",
    "overview": "Share quotes, change orders, invoices, published project updates and published closeout checklists in the Client Portal. Clients can review quote options, approve scope, open payment links and download branded update or closeout PDFs. Your company chooses which portal sections are shown.",
    "howItWorks": [
      "Prepare the documents, project updates or deficiency checklist you want to share.",
      "Publish reviewed updates and closeouts, then send the client’s portal link.",
      "The client reviews the shared records, downloads available PDFs and takes the relevant document action."
    ],
    "example": "A homeowner checks the latest renovation update, reviews a published deficiency checklist and opens the remaining invoice from their portal.",
    "plan": "All plans; change orders require Professional or Business.",
    "related": [
      "client-updates",
      "project-closeouts",
      "estimating",
      "invoicing"
    ]
  },
  {
    "slug": "invoicing",
    "name": "Invoicing & payments",
    "group": "Money & purchasing",
    "tagline": "Invoice agreed scope and track the remaining balance.",
    "overview": "Build invoices from quote or change-order scope and phases. Track staged and partial payments, let a client return to pay the next available invoice milestone, and send receipts for confirmed Stripe payments. Connect your company’s Stripe account for online invoice and approved quote-deposit payments.",
    "howItWorks": [
      "Build the invoice from the agreed work and set payment terms.",
      "Share the invoice, an approved quote deposit link or the next invoice milestone payment link.",
      "Confirmed Stripe payments update balances; send the customer a receipt."
    ],
    "example": "On a $10,000 invoice, a confirmed $2,000 milestone leaves $8,000 outstanding. The customer can return to the secure invoice view for the next payable milestone and receive a Stripe receipt after payment.",
    "plan": "All plans",
    "related": [
      "change-orders",
      "reporting",
      "client-portal"
    ]
  },
  {
    "slug": "expense-tracking",
    "name": "Expense tracking",
    "group": "Money & purchasing",
    "tagline": "Keep the receipt, category and job together.",
    "seoTitle": "Contractor expense tracking and receipt approvals",
    "description": "Let employees submit job expenses with a receipt, category, payment method and project for manager review and CSV reporting.",
    "headline": "Capture contractor expenses while the receipt and job are still clear.",
    "overview": "Employees can submit an expense with the date, amount, category, payment method, description and an optional project, then attach a receipt image or PDF. Managers review submissions in the HR workspace and can separate pending, approved and rejected claims. Project selection and receipt details are entered by the user.",
    "benefitTitle": "Give field purchases a consistent path back to the office",
    "benefits": [
      {
        "title": "Submit from the employee portal",
        "text": "Record the amount, category, payment method and description while the purchase is still fresh, then upload or photograph the receipt."
      },
      {
        "title": "Connect the expense to a job",
        "text": "Choose an active project when the purchase belongs to specific work, or leave it as a general company expense when appropriate."
      },
      {
        "title": "Create a manager review queue",
        "text": "Review pending claims, approve or reject submissions and export the selected expense records for further office review."
      }
    ],
    "detailSections": [
      {
        "title": "Record the details the office needs",
        "paragraphs": [
          "A receipt by itself rarely explains which job paid for the purchase or why it was needed. The employee expense form collects the purchase date, amount, category, payment method and a short description alongside the receipt document.",
          "The receipt can be uploaded as an image or PDF. Employees can also use a supported mobile device to photograph the receipt before it is misplaced."
        ],
        "items": [
          "Purchase date and amount.",
          "Expense category and payment method.",
          "Optional project assignment.",
          "Description plus an image or PDF receipt."
        ]
      },
      {
        "title": "Separate job costs from general purchases",
        "paragraphs": [
          "Project selection is optional because not every expense belongs to one customer job. A box of fasteners purchased for a specific renovation can be connected to that project, while a general office purchase can remain unassigned.",
          "The employee chooses the project and category, so managers should confirm both during review. Fuzed Flow does not infer the correct job from the receipt or automatically decide the accounting treatment."
        ]
      },
      {
        "title": "Review claims before they become an office mystery",
        "paragraphs": [
          "Expense submissions appear with other employee approvals in the HR workspace. Managers can filter the queue, inspect the supporting information and mark a claim approved or rejected.",
          "Employees retain a focused view of their own expense claims and status. This creates a traceable review step without exposing the full company workspace to every field user."
        ]
      },
      {
        "title": "Use the expense record in reporting",
        "paragraphs": [
          "Approved and recorded expenses can be reviewed by date and category in reporting, and selected records can be exported to CSV. That helps prepare information for bookkeeping without presenting Fuzed Flow as the accounting system of record.",
          "The current expense form does not separately capture recoverable sales tax. Tax credits, reimbursements and final ledger classification should be confirmed in your accounting process."
        ]
      }
    ],
    "howItWorks": [
      "Enter the amount and category.",
      "Choose the relevant project and attach the receipt.",
      "Submit the expense for a manager to review."
    ],
    "example": "A crew member buys $86.40 of site protection materials. From the employee portal, they photograph the receipt, choose the supplies category, select the renovation project and add a short description. The office can then review the claim with the job context instead of trying to identify the purchase at month-end.",
    "plan": "Employee expense submissions: Professional & Business.",
    "dateModified": "2026-10-21",
    "faq": [
      {
        "question": "Can an employee photograph a receipt from a phone?",
        "answer": "Yes. The employee portal accepts receipt images and PDF documents. On a supported mobile device, the employee can take or upload a receipt photo when submitting the claim."
      },
      {
        "question": "Does every expense need to be connected to a project?",
        "answer": "No. Project assignment is optional. Connect job-specific purchases to the relevant project and leave general company expenses unassigned when appropriate."
      },
      {
        "question": "Can managers approve or reject expense claims?",
        "answer": "Yes. Managers can review employee expense submissions in the HR workspace and mark them approved or rejected."
      },
      {
        "question": "Does Fuzed Flow replace bookkeeping software?",
        "answer": "No. Expense tracking organizes submissions, receipts, approvals and CSV exports. Your bookkeeping process remains responsible for ledger coding, tax treatment, reimbursements and formal financial records."
      }
    ],
    "related": [
      "employee-portal",
      "hr-management",
      "reporting"
    ]
  },
  {
    "slug": "reporting",
    "name": "Reports",
    "group": "Money & purchasing",
    "tagline": "Review collected payments, expenses and outstanding invoices.",
    "seoTitle": "Contractor reporting for revenue, expenses and invoices",
    "description": "Review contractor revenue, invoiced totals, expenses, tax summaries and unpaid invoice aging with date filters and CSV exports.",
    "headline": "See what was invoiced, collected, spent and still outstanding.",
    "overview": "Review sales and revenue, expense categories, invoice tax amounts and invoice aging with year-to-date, quarter-to-date and monthly filters. Export the underlying records to CSV for further review. Invoiced tax is an overview; expense tax credits and filing adjustments are not tracked here.",
    "benefitTitle": "Answer practical financial questions without rebuilding the report",
    "benefits": [
      {
        "title": "Compare billed and collected revenue",
        "text": "Review total invoiced, confirmed payments, outstanding accounts receivable, a six-month trend and the highest-value clients for the selected period."
      },
      {
        "title": "Understand recorded expenses",
        "text": "See the expense total, category breakdown and transaction log using the job and category information recorded by your team."
      },
      {
        "title": "Focus on overdue invoices",
        "text": "Group unpaid balances into current, 1–30, 31–60 and 60-plus-day aging buckets, then export the open invoice details."
      }
    ],
    "detailSections": [
      {
        "title": "Sales and revenue: billed work is not the same as collected cash",
        "paragraphs": [
          "The Sales & Revenue view separates the total issued on non-draft invoices from payments that have actually been recorded. It also shows outstanding accounts receivable, a six-month comparison of billed and collected amounts and the top clients by invoiced value.",
          "Use year-to-date, quarter-to-date, this-month or last-month filters to answer a defined question. Revenue figures depend on confirmed payment records, while billed totals depend on the invoice issue date and status."
        ],
        "items": [
          "Revenue collected from recorded payments.",
          "Total issued on non-draft invoices.",
          "Outstanding accounts receivable.",
          "Six-month billed-versus-collected trend and top clients."
        ]
      },
      {
        "title": "Expense reporting: review where recorded spending went",
        "paragraphs": [
          "The Expense Report totals expenses in the selected period, groups them by category and provides a transaction log with the merchant or description, category, project and amount.",
          "The report is only as complete as the expense records submitted by the team. Use the connected expense-approval workflow to keep receipts and project context attached before month-end review."
        ]
      },
      {
        "title": "Invoice aging: prioritize the balances that need attention",
        "paragraphs": [
          "The aging view uses invoice due dates and recorded balances to group open invoices into current, 1–30 days past due, 31–60 days past due and more than 60 days past due.",
          "The detailed table keeps the invoice, client, due date, total and remaining balance together. Export the aging records to CSV when the office needs a follow-up list or a separate working file."
        ]
      },
      {
        "title": "Tax summary: a focused invoice overview, not a tax return",
        "paragraphs": [
          "The Tax Summary shows tax recorded on issued invoices and identifies the invoices contributing to the total. The current expense workflow does not separately record recoverable expense tax.",
          "Because expense tax credits, filing adjustments and accounting entries are outside this report, use it as an operational reference and confirm official tax reporting with your accounting records and professional adviser."
        ]
      },
      {
        "title": "Export the records behind the summary",
        "paragraphs": [
          "Sales, expense, tax and aging views provide CSV exports with fields relevant to the selected report. Exported records can be reviewed in a spreadsheet or provided to the person responsible for bookkeeping.",
          "Exports reflect the data currently recorded in Fuzed Flow. They do not create adjusting entries, reconcile a bank account or replace formal financial statements."
        ]
      }
    ],
    "howItWorks": [
      "Choose a report and date range.",
      "Review recorded payments, expenses or unpaid balances.",
      "Export the selected records as CSV for further review."
    ],
    "example": "At month-end, select This Month to compare issued invoices with confirmed payments and recorded expenses. Then open Invoice Aging to identify balances that are 1–30, 31–60 or more than 60 days past due, and export the list for follow-up.",
    "plan": "Professional & Business",
    "dateModified": "2026-10-21",
    "faq": [
      {
        "question": "What contractor reports are available?",
        "answer": "The reporting workspace includes Sales & Revenue, Expense Report, Tax Summary and Invoice Aging views, with date filters and CSV exports where applicable."
      },
      {
        "question": "What is the difference between invoiced revenue and collected revenue?",
        "answer": "Invoiced totals come from issued invoices in the selected period. Collected revenue comes from confirmed payment records. Keeping them separate helps show what was billed versus what was actually received."
      },
      {
        "question": "How are overdue invoices grouped?",
        "answer": "Open invoice balances are grouped as current, 1–30 days past due, 31–60 days past due and more than 60 days past due using each invoice's due date."
      },
      {
        "question": "Is the tax summary suitable for filing a tax return?",
        "answer": "No. The summary shows tax recorded on issued invoices. It does not currently include recoverable expense tax, filing adjustments or formal accounting entries."
      }
    ],
    "related": [
      "invoicing",
      "expense-tracking"
    ]
  },
  {
    "slug": "pricebook",
    "name": "Pricebook",
    "group": "Sales & quotes",
    "tagline": "Reuse the items you quote regularly.",
    "overview": "Organize products in categories with unit cost, supplier, SKU, links, images and tax-related fields. Save quote lines for reuse and review prices when building each new quote.",
    "howItWorks": [
      "Create categories and add frequently used products.",
      "Store cost, supplier, SKU and the unit of measure.",
      "Reuse the items in a new quote and review the current price."
    ],
    "example": "Keep the common fixture cost and supplier beside a reusable quote line, then adjust quantity and client price for the new job.",
    "plan": "All plans",
    "related": [
      "estimating",
      "smart-templates"
    ]
  },
  {
    "slug": "project-materials",
    "name": "Project materials",
    "group": "Projects & field",
    "tagline": "Turn selected quoted materials into an ordering list.",
    "overview": "Mark quote items Track Material and import selected items into project materials. Matching names are skipped to reduce duplicates. Track supplier, phase, unit, quantity, expected cost and To Order, Ordered or Received status.",
    "howItWorks": [
      "Flag the quote items you want to track as materials.",
      "Import the selected items into the project list.",
      "Assign supplier and phase, then update ordering status."
    ],
    "example": "Import fixtures and flooring from the approved quote. Mark fixtures Ordered and flooring Received without treating either list as warehouse stock.",
    "plan": "All plans",
    "related": [
      "pricebook",
      "purchase-orders",
      "inventory-management"
    ]
  },
  {
    "slug": "contractor-portal",
    "name": "Contractor portal",
    "group": "Projects & field",
    "tagline": "Share selected scope and documents with a trade partner.",
    "overview": "A project manager prepares the contractor scope and chooses the files to share. Send the project’s contractor link to recipients who need to review the work and return a quote. Recipients do not need a standard app account.",
    "howItWorks": [
      "Prepare the scope in the project’s contractor portal tab.",
      "Choose the drawings and documents to share.",
      "Send the current contractor link with the invitation to quote."
    ],
    "example": "Share the electrical scope and selected drawing revision with a subcontractor without sharing internal job records.",
    "plan": "All plans",
    "related": [
      "plans-and-permits",
      "project-management"
    ]
  },
  {
    "slug": "plans-and-permits",
    "name": "Plans & permits",
    "group": "Projects & field",
    "tagline": "Find the drawing revision and supporting permit record.",
    "overview": "Upload drawings with category, title, revision and notes. Preview images and download files. Track permit records, status and attachments alongside project documents.",
    "howItWorks": [
      "Upload a drawing with its title and revision.",
      "Add permit records and supporting attachments.",
      "Find the recorded revision and share selected files with the contractor portal."
    ],
    "example": "Keep Revision B of the floor plan beside the permit record, then select that revision for a trade invitation.",
    "plan": "All plans",
    "related": [
      "contractor-portal",
      "project-management"
    ]
  },
  {
    "slug": "approvals",
    "name": "Approvals Hub",
    "group": "Projects & field",
    "tagline": "Keep quote activity and pending approvals in view.",
    "overview": "See client quote activity, pending change orders and purchase orders in one Approvals Hub. Search by client, project or document, filter by status, review the work behind a decision and approve or reject pending change orders and purchase orders.",
    "howItWorks": [
      "Open the action queue to review pending change orders and purchase orders.",
      "Check client quote activity, then search or filter the document list.",
      "Open the document, confirm the scope and record the next decision."
    ],
    "example": "A project manager checks a pending fixture change and a supplier purchase order before work proceeds, then follows up on a quote the homeowner has viewed.",
    "plan": "Quote activity and purchase order approvals: all plans. Change orders: Professional & Business. Team access follows company permissions.",
    "related": [
      "estimating",
      "change-orders",
      "purchase-orders",
      "client-updates"
    ],
    "faq": [
      {
        "question": "Which decisions appear in the action queue?",
        "answer": "The action queue shows pending change orders and purchase orders awaiting approval. Client quotes have a separate activity view with document status and follow-up actions."
      },
      {
        "question": "Can I follow up on a quote from the Approvals Hub?",
        "answer": "Yes. Review quote activity, open the quote, copy its client link or resend the quote email from the hub."
      }
    ],
    "headline": "Contractor approvals, with the next decision in view.",
    "seoTitle": "Contractor approvals and quote activity",
    "description": "Review quote activity, pending change orders and purchase order approvals in Fuzed Flow. Search by client or project and act on the next decision."
  },
  {
    "slug": "client-updates",
    "name": "Client project updates",
    "group": "Projects & field",
    "tagline": "Give clients a clear update on progress and upcoming work.",
    "overview": "Prepare project updates with a summary, completed work, upcoming work and important client notes. Save a draft, preview a branded PDF, publish the update to the Client Portal and send it by email or text link. Professional and Business add AI Rewrite for supported writing fields.",
    "howItWorks": [
      "Choose the project and date, then write the summary, completed work, upcoming work and client notes.",
      "Review the update and its branded PDF before publishing.",
      "Publish to the Client Portal and send an email with a PDF or a text link."
    ],
    "example": "After rough-in, tell the homeowner what was completed, what inspection is next and when access is needed. Publish the reviewed update so the client can return to it later.",
    "plan": "Client updates, branded PDFs and portal publishing: all plans. AI Rewrite: Professional & Business, subject to usage limits. Sending requires valid recipient details.",
    "related": [
      "client-portal",
      "daily-logs",
      "ai-rewrite",
      "project-closeouts"
    ],
    "faq": [
      {
        "question": "Can I keep an update private until it is ready?",
        "answer": "Yes. Save it as a draft while preparing the wording. Published updates appear in the Client Portal when that section is enabled."
      },
      {
        "question": "How do clients receive a project update?",
        "answer": "Email can include the branded PDF and a portal link. Text messages share the portal link. Review the recipient and message before sending."
      }
    ],
    "headline": "Client project updates, ready to share.",
    "seoTitle": "Client project update software for contractors",
    "description": "Share completed work, upcoming work and client notes through branded project updates. Publish to the Client Portal and send email PDFs or text links."
  },
  {
    "slug": "project-closeouts",
    "name": "Project closeouts & deficiency checklists",
    "group": "Projects & field",
    "tagline": "Close out the job with a photo for every deficiency.",
    "overview": "Create a project deficiency checklist on a phone, tablet or computer. Use Quick Photo Capture to photograph items onsite and add details later, or a Guided Walkthrough to complete each item as you go. Add a trade category, description, subcontractor, due date and status; share a branded checklist with the client and send each subcontractor their assigned items.",
    "howItWorks": [
      "Start a project closeout and choose Quick Photo Capture or Guided Walkthrough.",
      "Photograph each deficiency, then add its category, description, assigned subcontractor and optional due date.",
      "Track Open, In Progress, Ready for Review and Complete status; publish the client checklist or send trade-specific PDF packages."
    ],
    "example": "Photograph a paint touch-up and a tile grout repair during a bathroom walkthrough. Assign each to the relevant subcontractor, then review completion before marking the closeout complete.",
    "plan": "All plans. Team access follows company project permissions. AI Rewrite in supported text fields: Professional & Business, subject to usage limits.",
    "related": [
      "client-updates",
      "client-portal",
      "contractor-portal",
      "project-management"
    ],
    "faq": [
      {
        "question": "Can I take deficiency photos now and finish the details later?",
        "answer": "Yes. Quick Photo Capture saves a photo for each item so you can add its description, category and subcontractor later. Saving requires an internet connection."
      },
      {
        "question": "Does every subcontractor receive the full checklist?",
        "answer": "The subcontractor email workflow creates a separate branded PDF package with that subcontractor’s assigned deficiencies. The client checklist can be published in the Client Portal and sent by email or text link."
      }
    ],
    "headline": "Project closeouts, with a photo for every deficiency.",
    "seoTitle": "Project closeout and deficiency checklist software",
    "description": "Capture deficiency photos onsite, assign subcontractors and track completion. Share a branded closeout checklist and send each trade their assigned items."
  },
  {
    "slug": "ai-rewrite",
    "name": "AI Rewrite",
    "group": "Team & help",
    "tagline": "Turn rough job notes into clearer writing.",
    "overview": "On Professional and Business, use AI Rewrite in supported long text fields, including client update summaries, completed and upcoming work, client notes, quote line-item descriptions and internal notes. Expand the field while writing, review the rewritten text and use Undo to restore the previous version before saving or sending.",
    "howItWorks": [
      "Write the facts in a supported text field and expand it when you need more room.",
      "Choose AI Rewrite to improve the wording, then check names, dates, amounts and meaning.",
      "Edit the result or use Undo to restore the original, then save or send through the normal workflow."
    ],
    "example": "Turn a rough note about completed framing and an upcoming inspection into a clear client update. Check the date and work status before publishing.",
    "plan": "Included on Professional & Business with an active subscription or trial, subject to usage limits. New Starter plans do not include AI Rewrite.",
    "related": [
      "client-updates",
      "estimating",
      "project-closeouts"
    ],
    "faq": [
      {
        "question": "Is AI Rewrite unlimited?",
        "answer": "AI Rewrite has usage limits by user and company. If a limit is reached, the app gives retry guidance. Professional and Business include access without a separate AI Rewrite add-on."
      },
      {
        "question": "What text is sent for a rewrite?",
        "answer": "When you choose AI Rewrite, the text in the selected field is sent to the AI provider, OpenAI, to generate revised wording. Review what you submit and check the result before saving or sending. You can use Undo to restore the previous text."
      }
    ],
    "headline": "AI Rewrite for clearer job notes and client updates.",
    "seoTitle": "AI Rewrite for contractor notes and client updates",
    "description": "Improve supported long text fields with AI Rewrite, Undo and Expand. Included on Professional and Business, with usage limits and review before saving."
  }
];
