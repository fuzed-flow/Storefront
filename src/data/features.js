// Cross-referenced with app workflows on 2026-10-04.
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
    "overview": "Build phased quotes with line items, material and labour costs, client prices, scope text and photos. Use company branding in PDFs and let clients choose optional items or phases before online approval.",
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
      "client-portal"
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
    "overview": "Keep client and site information, phases, tasks, materials, plans, permits, subcontractors and linked documents in the project workspace. The phase cost comparison uses tracked materials with actual or estimated costs.",
    "howItWorks": [
      "Open the project workspace and confirm scope and site details.",
      "Set phase dates and assign people and tasks.",
      "Review materials, logs, issues and linked documents as work progresses."
    ],
    "example": "Follow a renovation from demolition to finishes. A blocked phase, assigned task and Ordered material each describe a different part of the job.",
    "plan": "Starter: 5 active projects. Professional & Business: unlimited.",
    "related": [
      "scheduling",
      "project-materials",
      "plans-and-permits"
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
      "employee-portal"
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
      "invoicing"
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
      "inventory-management"
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
    "tagline": "Let clients review the documents that need a decision.",
    "overview": "Share quotes, change orders, invoices, quote documents and portfolio photos through the customer document portal. Clients can select quote options, approve scope and open invoice payment links.",
    "howItWorks": [
      "Share the client’s document link.",
      "The client reviews quotes, options and supporting documents.",
      "They approve scope or open the invoice payment view."
    ],
    "example": "A homeowner compares the base quote and optional fixture upgrade, then approves their selected scope.",
    "plan": "All plans; change orders require Professional or Business.",
    "related": [
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
  }
];
