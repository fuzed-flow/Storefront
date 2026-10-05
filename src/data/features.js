// Cross-referenced with production app commit 785ab001b20bf5c2510b860effecf79ec5a1dd61 on 2026-10-05.
export const features = [
  {
    "slug": "lead-management",
    "name": "Lead management",
    "group": "Sales & quotes",
    "tagline": "Keep enquiries, ownership and the next follow-up together.",
    "overview": "Record leads manually or import a CSV. Track seven pipeline stages, source, estimated value, assigned team member and a follow-up date. Convert qualified enquiries into quoting or project work.",
    "howItWorks": [
      "Capture contact details, site address, notes and files.",
      "Choose a stage and assign the enquiry to a team member.",
      "Set the next follow-up date and convert the lead when ready."
    ],
    "example": "A renovation enquiry moves from New to Qualified after a site visit. Record the address, photos and requested scope before preparing the quote.",
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
    "overview": "Build phased quotes with line items, material and labour costs, client prices, scope text and photos. Use company branding in PDFs and let clients choose optional items or phases before online approval. Professional and Business include AI Rewrite with Undo for supported quote line-item descriptions and internal notes.",
    "howItWorks": [
      "Build the scope in phases and add priced line items.",
      "Review costs, gross margin, tax and optional upgrades.",
      "Share the quote; the client chooses options and approves the scope."
    ],
    "example": "Offer a $1,200 fixture upgrade as an optional item. The client selection changes the approved quote total and is shown internally.",
    "plan": "All plans",
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
    "overview": "The mobile web portal includes assigned work and schedules, a time clock, timesheets, estimated pay, leave requests, expenses, tasks, project notes and inventory according to company settings and role.",
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
    "overview": "Build invoices from quote or change-order scope and phases. Track staged payments, partial payments and receipts. Connect your company’s Stripe account for online invoice and approved quote-deposit payments.",
    "howItWorks": [
      "Build the invoice from the agreed work and set payment terms.",
      "Share the invoice or an approved quote’s deposit payment link.",
      "Confirmed payments update balances; send a receipt for selected payments."
    ],
    "example": "On a $10,000 invoice, a confirmed $2,000 payment leaves $8,000 outstanding. A quote deposit is carried into the first linked invoice.",
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
    "overview": "Submit an expense with a receipt, choose its category and project, and send it for approval. Managers review submissions in HR. Project selection and receipt details are entered by the user.",
    "howItWorks": [
      "Enter the amount and category.",
      "Choose the relevant project and attach the receipt.",
      "Submit the expense for a manager to review."
    ],
    "example": "Attach a receipt for site supplies and select the renovation project so the office can review the purchase in context.",
    "plan": "Employee expense submissions: Professional & Business.",
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
    "overview": "View sales and revenue, expense categories, invoice tax amounts and invoice aging with date filters and CSV exports. Invoiced tax is an overview; expense tax credits and filing adjustments are not tracked here.",
    "howItWorks": [
      "Choose a report and date range.",
      "Review recorded payments, expenses or unpaid balances.",
      "Export the selected records as CSV for further review."
    ],
    "example": "Compare the month’s invoiced total with confirmed payments, then review which unpaid balances are more than 30 days overdue.",
    "plan": "Professional & Business",
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
