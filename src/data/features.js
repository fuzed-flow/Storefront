export const features = [
  {
    slug: 'lead-management',
    name: 'Lead Management',
    tagline: 'Never lose another inquiry between calls, texts, and emails.',
    iconName: 'Users',
    overview: 'Fuzed Flow captures every lead the moment it arrives, whether from your website, a phone call, a referral, or a walk-in. Every inquiry lands in one pipeline where you can qualify, assign, and follow up before it goes cold. No more leads buried in a notebook or forgotten in a text thread.',
    benefits: [
      { title: 'Faster Response Times', text: 'New leads trigger instant notifications so you or your sales rep can respond within minutes, not days.' },
      { title: 'Zero Leads Lost', text: 'Every inquiry is logged automatically. If a lead stalls, Fuzed Flow flags it for follow-up before it slips away.' },
      { title: 'Know Your Close Rate', text: 'Track leads from first contact to signed contract so you can see exactly where jobs are won or lost.' },
      { title: 'Smart Assignment', text: 'Route leads to the right salesperson or estimator based on trade, territory, or project size.' }
    ],
    howItWorks: [
      'A lead comes in through your website form, a phone call, or manual entry.',
      'Fuzed Flow logs it and assigns it to the right team member automatically.',
      'Your rep qualifies the lead and moves it through your custom pipeline stages.',
      'When the lead is ready, convert it into an estimate with one click.'
    ],
    capabilities: [
      'Custom pipeline stages tailored to your sales process',
      'Lead source tracking to see which channels produce the best jobs',
      'Automated follow-up reminders and task assignment',
      'Lead scoring based on project size and readiness',
      'SMS and email templates for quick responses',
      'Conversion tracking from lead to signed contract'
    ],
    integrations: ['CRM', 'Estimating', 'Project Management', 'Reporting']
  },
  {
    slug: 'crm',
    name: 'CRM',
    tagline: 'Every client relationship, organized and in one place.',
    iconName: 'BriefcaseBusiness',
    overview: 'Your client database is the backbone of your business. Fuzed Flow keeps every contact, conversation, property, and project history in one searchable system. When a past client calls two years later for a new renovation, you have the full context at your fingertips.',
    benefits: [
      { title: 'Complete Client History', text: 'See every call, email, estimate, invoice, and project for any client in one timeline.' },
      { title: 'Repeat Business Made Easy', text: 'Past clients are your best leads. Fuzed Flow tracks anniversaries and follow-ups so you stay top of mind.' },
      { title: 'Property-Based Tracking', text: 'Organize contacts by property address so you can see every job ever done at a location.' },
      { title: 'Team-Wide Visibility', text: 'Anyone on your team can pick up where a colleague left off without asking questions.' }
    ],
    howItWorks: [
      'Client records are created automatically when leads are captured or estimates are sent.',
      'Every interaction, call log, and document is attached to the client profile.',
      'Properties are linked to clients so you can track multiple jobs at the same address.',
      'Search by name, phone, address, or project type to find any client instantly.'
    ],
    capabilities: [
      'Full contact database with custom fields for your trade',
      'Communication timeline with call logs, emails, and notes',
      'Property and address-based organization',
      'Client tags and segments for targeted outreach',
      'Document storage for contracts, specs, and warranties',
      'Automated birthday and anniversary reminders'
    ],
    integrations: ['Lead Management', 'Estimating', 'Invoicing', 'Client Portal']
  },
  {
    slug: 'estimating',
    name: 'Estimating',
    tagline: 'Build professional, accurate quotes in minutes, not hours.',
    iconName: 'FileText',
    overview: 'Stop building estimates in spreadsheets and Word docs. Fuzed Flow gives you trade-specific estimate templates, your own material and labor price lists, and professional proposals that clients can approve online. Turn around quotes faster and win more jobs.',
    benefits: [
      { title: 'Quote in Minutes', text: 'Pre-built templates and saved price lists let you generate a detailed estimate in a fraction of the time.' },
      { title: 'Win More Jobs', text: 'Professional, itemized proposals with your branding build trust and get approved faster.' },
      { title: 'Accurate Pricing', text: 'Your saved materials and labor rates ensure every quote is profitable and consistent.' },
      { title: 'Online Approval', text: 'Clients review and sign proposals from their phone. No more waiting for a signature on paper.' }
    ],
    howItWorks: [
      'Select a trade-specific template or start from scratch.',
      'Pull from your saved material and labor price lists to build line items.',
      'Add your branding, terms, and optional upgrade packages.',
      'Send the proposal electronically and get a digital signature.'
    ],
    capabilities: [
      'Trade-specific estimate templates',
      'Saved material and labor price lists',
      'Multi-tier proposal options for upselling',
      'Digital signature and online approval',
      'PDF and branded proposal exports',
      'One-click conversion from estimate to project'
    ],
    integrations: ['Lead Management', 'CRM', 'Smart Templates', 'Project Management']
  },
  {
    slug: 'smart-templates',
    name: 'Smart Templates',
    tagline: 'Save line items, materials, and phases to drop into future quotes.',
    iconName: 'Layers3',
    overview: 'Why price the same bathroom remodel from scratch every time? Smart Templates allow you to save your most common assemblies, material groups, and labor phases. Next time a similar job comes in, drop the template into your quote and adjust the quantities. Done.',
    benefits: [
      { title: 'Stop Reinventing the Wheel', text: 'Save entire job phases or individual assemblies so you never have to price them from scratch again.' },
      { title: 'Standardize Margins', text: 'Ensure every estimator on your team is quoting with the same baseline markup and material costs.' },
      { title: 'Speed Up Bidding', text: 'Turn around complex bids in minutes by stacking multiple pre-built templates together.' },
      { title: 'Reduce Errors', text: 'Pre-configured templates mean fewer forgotten line items and omitted materials.' }
    ],
    howItWorks: [
      'Build a quote for a common job type (e.g., standard kitchen demolition).',
      'Save that phase or the entire quote as a Smart Template in your library.',
      'When quoting a new project, select the template to instantly populate line items.',
      'Adjust the square footage or quantities, and the total cost calculates automatically.'
    ],
    capabilities: [
      'Save entire quotes or specific phases as templates',
      'Automatic calculation based on updated unit quantities',
      'Standardized markup and profit margins embedded in templates',
      'Centralized template library for the whole team',
      'Category tags for quick template retrieval',
      'Easy updates across templates when material costs change'
    ],
    integrations: ['Estimating', 'CRM', 'Inventory Management', 'Project Management']
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    tagline: 'Track every job from contract to completion.',
    iconName: 'Layers3',
    overview: 'Once an estimate is approved, it becomes a project with phases, tasks, milestones, and budgets. Fuzed Flow gives you a clear view of every active job, its status, its timeline, and its profitability. You will always know what is on track and what needs attention.',
    benefits: [
      { title: 'Total Job Visibility', text: 'See the status, timeline, budget, and crew for every project on one dashboard.' },
      { title: 'Stay on Schedule', text: 'Task dependencies and milestones keep phases moving in the right order.' },
      { title: 'Protect Margins', text: 'Track actual costs against your budget so overruns are caught early.' },
      { title: 'Keep Teams Aligned', text: 'Everyone knows their tasks, deadlines, and what comes next on every job.' }
    ],
    howItWorks: [
      'Approved estimates convert to projects automatically with budget and scope carried over.',
      'Break the project into phases, tasks, and milestones with assigned owners.',
      'Track progress, costs, and completion as crews update from the field.',
      'Review profitability and close out the project when work is done.'
    ],
    capabilities: [
      'Project phases, tasks, and milestone tracking',
      'Budget vs. actual cost monitoring in real time',
      'Task dependencies and critical path visibility',
      'Document and photo attachment per task',
      'Project templates for repeating job types',
      'Profitability tracking from start to finish'
    ],
    integrations: ['Scheduling', 'Daily Logs', 'Time Tracking', 'Expense Tracking', 'Reporting']
  },
  {
    slug: 'scheduling',
    name: 'Scheduling',
    tagline: 'Get the right crew on the right job at the right time.',
    iconName: 'CalendarDays',
    overview: 'Stop juggling crew schedules on a whiteboard. Fuzed Flow gives you a drag-and-drop calendar where you can assign crews, subcontractors, and equipment to jobs. Everyone sees the same plan, conflicts are flagged automatically, and schedules sync to mobile instantly.',
    benefits: [
      { title: 'No Double-Booking', text: 'Fuzed Flow flags scheduling conflicts before they happen, so no crew is assigned to two jobs at once.' },
      { title: 'Field-Ready Schedules', text: 'Crews see their schedule on their phone the moment it is updated. No more calling the office.' },
      { title: 'Subcontractor Coordination', text: 'Schedule and track subs alongside your own crews in one unified calendar.' },
      { title: 'Smart Availability', text: 'See which crews and resources are free before you assign them.' }
    ],
    howItWorks: [
      'Create a schedule by dragging jobs onto the calendar and assigning crews.',
      'Fuzed Flow checks for conflicts and availability in real time.',
      'Crews receive their schedule instantly on the mobile app.',
      'Updates sync to everyone immediately when plans change.'
    ],
    capabilities: [
      'Drag-and-drop calendar with day, week, and month views',
      'Crew, subcontractor, and equipment assignment',
      'Automatic conflict detection and availability checking',
      'Real-time mobile sync for field teams',
      'Recurring schedules for maintenance contracts',
      'Weather and delay tracking with rescheduling tools'
    ],
    integrations: ['Project Management', 'Time Tracking', 'Daily Logs', 'Employee Portal']
  },
  {
    slug: 'daily-logs',
    name: 'Daily Logs',
    tagline: 'Document progress from the field in minutes.',
    iconName: 'ClipboardCheck',
    overview: 'Protect yourself from disputes and keep a record of every jobsite day. Fuzed Flow lets crews log weather, work completed, materials delivered, visitors, and issues from their phone. Photos are attached automatically, and logs are archived permanently per project.',
    benefits: [
      { title: 'Dispute Protection', text: 'Detailed daily logs with photos provide documentation if a client or sub questions what happened on-site.' },
      { title: 'Progress Visibility', text: 'Office staff and clients can see exactly what happened each day without calling the foreman.' },
      { title: 'Field-Friendly Entry', text: 'Crews complete a daily log in under two minutes from their phone, even offline.' },
      { title: 'Permanent Archive', text: 'Every log is stored permanently and searchable by date, project, or crew.' }
    ],
    howItWorks: [
      'At the end of each work day, the foreman opens the daily log on their phone.',
      'They log weather, work completed, materials, visitors, and any issues.',
      'Photos of the jobsite are attached with a tap.',
      'The log is saved to the project and visible to the office instantly.'
    ],
    capabilities: [
      'Weather, work, materials, visitors, and issue fields',
      'Photo and document attachment per log entry',
      'Offline mode for remote jobsites with auto-sync',
      'Crew and subcontractor sign-in tracking',
      'Searchable archive by project, date, or crew',
      'Client-visible summaries for transparency'
    ],
    integrations: ['Project Management', 'Scheduling', 'Time Tracking', 'Client Portal']
  },
  {
    slug: 'time-tracking',
    name: 'Time Tracking',
    tagline: 'Employees clock in and out from mobile devices.',
    iconName: 'Timer',
    overview: 'Replace paper timesheets with GPS-verified mobile clock-ins. Crews clock in when they arrive on-site and out when they leave. Hours flow automatically into payroll and job costing, so you know exactly what labor costs on every project.',
    benefits: [
      { title: 'Accurate Labor Costs', text: 'Hours are automatically tied to the project and task, giving you true job costing without manual entry.' },
      { title: 'No More Paper Timesheets', text: 'Crews clock in from their phone. No more chasing down timesheets at the end of the week.' },
      { title: 'GPS Verification', text: 'Clock-ins are location-stamped so you know crews are on-site when they clock in.' },
      { title: 'Payroll Ready', text: 'Approved hours export directly to your payroll provider with no re-keying.' }
    ],
    howItWorks: [
      'Crew members open the Fuzed Flow app and clock in when they arrive on-site.',
      'GPS verifies their location and hours are tied to the active project.',
      'At the end of the day, they clock out and review their hours.',
      'The foreman approves the time and it flows into job costing and payroll.'
    ],
    capabilities: [
      'Mobile clock-in and clock-out with GPS verification',
      'Project and task-based hour assignment',
      'Overtime and break tracking',
      'Foreman approval workflow before payroll',
      'Payroll export to major providers',
      'Historical time reports by crew, project, or date range'
    ],
    integrations: ['Project Management', 'HR Management', 'Employee Portal', 'Reporting']
  },
  {
    slug: 'change-orders',
    name: 'Change Orders',
    tagline: 'Approve scope changes digitally, no paper chase.',
    iconName: 'FileCheck2',
    overview: 'Every contractor knows scope changes can kill margins if they are not documented. Fuzed Flow lets you create change orders tied to the original estimate, send them to the client for digital approval, and automatically update the project budget. Nothing slips through.',
    benefits: [
      { title: 'Protect Your Margins', text: 'Every scope change is documented, priced, and approved before work begins. No more free extras.' },
      { title: 'Fast Client Approval', text: 'Clients review and sign change orders from their phone in minutes, not days.' },
      { title: 'Budget Auto-Updates', text: 'Approved change orders automatically adjust the project budget so your numbers are always current.' },
      { title: 'Full Audit Trail', text: 'Every change is tracked with who approved what and when, protecting you from disputes.' }
    ],
    howItWorks: [
      'When scope changes, create a change order tied to the active project.',
      'Pull from your price lists or add custom line items for the new work.',
      'Send the change order to the client for digital signature.',
      'Once approved, the project budget and schedule update automatically.'
    ],
    capabilities: [
      'Change orders linked to original estimates and projects',
      'Digital signature and client approval workflow',
      'Automatic budget and schedule adjustment on approval',
      'Price list integration for consistent pricing',
      'Full history and audit trail per change order',
      'Client portal visibility for transparency'
    ],
    integrations: ['Estimating', 'Project Management', 'Client Portal', 'Invoicing']
  },
  {
    slug: 'purchase-orders',
    name: 'Purchase Orders',
    tagline: 'Create and track vendor orders.',
    iconName: 'FileText',
    overview: 'Ensure your crews have exactly what they need, exactly when they need it. Centralize your purchasing by creating and tracking purchase orders against project budgets. Send digital POs directly to vendors and monitor fulfillment statuses.',
    benefits: [
      { title: 'Control Spending', text: 'Prevent unauthorized purchasing by requiring POs for all material runs.' },
      { title: 'Never Lose a Receipt', text: 'Match invoices directly to POs to verify pricing and prevent double billing.' },
      { title: 'Job Cost Accuracy', text: 'Material costs are immediately committed to the project budget before the invoice even arrives.' },
      { title: 'Vendor Accountability', text: 'Track what was ordered versus what was delivered, handling partial shipments effortlessly.' }
    ],
    howItWorks: [
      'Generate a PO based on the approved estimate materials or a field request.',
      'Send the PO directly to your supplier from Fuzed Flow.',
      'When materials arrive, mark the PO as fulfilled or partially received.',
      'Match the final supplier invoice against the PO for approval.'
    ],
    capabilities: [
      'Digital PO generation linked to specific jobs',
      'Direct-to-vendor email workflow',
      'Partial and full fulfillment tracking',
      'Budget commitment tracking',
      'Approval workflows for large purchases',
      'Vendor management and history'
    ],
    integrations: ['Project Management', 'Inventory Management', 'Expense Tracking']
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    tagline: 'Track materials and equipment on hand.',
    iconName: 'BriefcaseBusiness',
    overview: 'Stop guessing where your tools are and what materials you have in the yard. Track equipment location, assignment, and maintenance schedules while keeping an accurate count of stocked materials available for the next job.',
    benefits: [
      { title: 'Stop Tool Loss', text: 'Assign high-value tools to specific crews or projects so you always know who is responsible for them.' },
      { title: 'Prevent Shortages', text: 'Track material quantities across multiple yards or vans, setting minimum thresholds to reorder in time.' },
      { title: 'Maintenance Alerts', text: 'Schedule and track routine maintenance for heavy equipment to prevent costly breakdowns.' },
      { title: 'Easy Job Allocation', text: 'Check out materials from your yard directly to a project to ensure accurate job costing.' }
    ],
    howItWorks: [
      'Add your tools, vehicles, and stocked materials into the Fuzed Flow database.',
      'Assign equipment to foremen or projects when they leave the yard.',
      'Deduct material quantities as they are pulled for specific jobs.',
      'Receive automated alerts when inventory drops below your minimum stock levels.'
    ],
    capabilities: [
      'Equipment assignment tracking and history',
      'Material stock levels across multiple locations',
      'Low-stock alerts and reorder reports',
      'Maintenance scheduling and logging',
      'Barcode or QR code scanning compatibility',
      'Direct allocation to project budgets'
    ],
    integrations: ['Project Management', 'Purchase Orders', 'Estimating']
  },
  {
    slug: 'employee-portal',
    name: 'Employee Portal',
    tagline: 'Centralize schedules, docs, and HR for your team.',
    iconName: 'Smartphone',
    overview: 'Give your field and office staff a single place to access everything they need to work. From upcoming schedules and timesheets to safety manuals, certifications, and HR documents, the employee portal puts the back-office in their pocket.',
    benefits: [
      { title: 'Empower the Crew', text: 'Crews can view their schedule, request time off, and access job details without calling the office.' },
      { title: 'Simplify Compliance', text: 'Store safety manuals, digital signatures, and certifications where they are always accessible.' },
      { title: 'Reduce Admin Phone Calls', text: 'Give employees direct access to their past timesheets and pay stubs to eliminate routine HR questions.' },
      { title: 'Company Wide Updates', text: 'Post announcements, weather delays, or policy changes to the entire team instantly.' }
    ],
    howItWorks: [
      'Employees log into their secure mobile dashboard.',
      'They view their schedule for the week and clock into their assigned job.',
      'They can submit time-off requests or upload a renewed certification.',
      'Management approves requests and pushes announcements to the portal.'
    ],
    capabilities: [
      'Personalized schedule and task views',
      'Digital document vault for manuals and policies',
      'Time-off request and approval workflow',
      'Company announcement board',
      'Certification and training tracking',
      'Historical timesheet and earnings visibility'
    ],
    integrations: ['Scheduling', 'Time Tracking', 'HR Management']
  },
  {
    slug: 'hr-management',
    name: 'HR Management',
    tagline: 'Manage employee records, roles, and crew assignments.',
    iconName: 'Users',
    overview: 'Manage the people that make your business run. Keep track of employee details, pay rates, emergency contacts, performance reviews, and roles, ensuring that scheduling and payroll run smoothly behind the scenes.',
    benefits: [
      { title: 'Centralized Records', text: 'Keep all employee information, contracts, and emergency contacts in one secure database.' },
      { title: 'Smart Role Assignment', text: 'Define trades, skills, and roles to ensure the right people are scheduled for the right tasks.' },
      { title: 'Accurate Payroll Data', text: 'Manage individual pay rates, overtime rules, and tax profiles for flawless payroll exports.' },
      { title: 'Onboarding Made Easy', text: 'Standardize how you collect information and provision access for new hires.' }
    ],
    howItWorks: [
      'Create an employee profile with contact info, trade skills, and pay rates.',
      'Upload employment contracts and track certification expiration dates.',
      'Assign the employee to specific crews or locations.',
      'Manage time-off requests and performance notes from the HR dashboard.'
    ],
    capabilities: [
      'Comprehensive employee database and profiles',
      'Role, trade, and skill tagging',
      'Pay rate and overtime rule management',
      'Certification expiration tracking and alerts',
      'Emergency contact repository',
      'Time-off accrual and balance tracking'
    ],
    integrations: ['Time Tracking', 'Scheduling', 'Employee Portal', 'Reporting']
  },
  {
    slug: 'client-portal',
    name: 'Client Portal',
    tagline: 'Keep clients updated in real time without the phone calls.',
    iconName: 'Smartphone',
    overview: 'Give your clients a branded portal where they can see project progress, schedules, photos, change orders, and invoices. Instead of calling you for updates, they check the portal. It builds trust, reduces interruptions, and makes you look like the professional you are.',
    benefits: [
      { title: 'Fewer Interruptions', text: 'Clients check the portal instead of calling you. You get fewer status-update calls and more time to work.' },
      { title: 'Build Trust', text: 'Transparency in progress, photos, and finances makes clients feel informed and confident in your work.' },
      { title: 'Professional Image', text: 'A branded client portal sets you apart from contractors still using text messages and email.' },
      { title: 'Faster Approvals', text: 'Clients approve change orders and pay invoices right from the portal.' }
    ],
    howItWorks: [
      'When a project starts, the client gets a secure login to their portal.',
      'They can view the schedule, progress photos, daily summaries, and documents.',
      'Change orders and invoices appear in the portal for review and approval.',
      'Clients can message your team directly through the portal.'
    ],
    capabilities: [
      'Branded portal with your company logo and colors',
      'Project timeline, schedule, and milestone visibility',
      'Progress photo gallery updated from daily logs',
      'Change order review and digital approval',
      'Invoice viewing and online payment',
      'Secure messaging between client and project team'
    ],
    integrations: ['Project Management', 'Daily Logs', 'Change Orders', 'Invoicing']
  },
  {
    slug: 'invoicing',
    name: 'Invoicing',
    tagline: 'Send invoices and collect payments faster.',
    iconName: 'DollarSign',
    overview: 'Finished jobs should not wait weeks for payment. Fuzed Flow lets you generate invoices from approved estimates or change orders, send them electronically, and accept online payments. Track what is outstanding, send automatic reminders, and get paid faster.',
    benefits: [
      { title: 'Get Paid Faster', text: 'Online payment options and automatic reminders reduce the time from invoice to deposit.' },
      { title: 'One-Click Invoices', text: 'Generate invoices from estimates or project billing schedules without re-entering data.' },
      { title: 'Know What is Outstanding', text: 'See every unpaid invoice and its age on one dashboard so nothing is forgotten.' },
      { title: 'Professional Billing', text: 'Branded, itemized invoices build trust and make your business look established.' }
    ],
    howItWorks: [
      'Generate an invoice from an approved estimate, change order, or manual entry.',
      'Review, customize, and send it electronically to the client.',
      'Clients pay online via card or bank transfer through the portal.',
      'Fuzed Flow tracks payment status and sends automatic reminders.'
    ],
    capabilities: [
      'Invoice generation from estimates and change orders',
      'Online payment acceptance via card and ACH',
      'Automatic payment reminders and overdue notices',
      'Deposit and progress billing schedules',
      'Aging reports and outstanding balance dashboards',
      'QuickBooks and accounting software sync'
    ],
    integrations: ['Estimating', 'Change Orders', 'Client Portal', 'Reporting']
  },
  {
    slug: 'expense-tracking',
    name: 'Expense Tracking',
    tagline: 'Monitor project costs before they eat your margins.',
    iconName: 'BarChart3',
    overview: 'Know what every job is costing you in real time. Fuzed Flow tracks materials, labor, subcontractor costs, and overhead against your project budget. When costs start drifting, you see the warning signs before the job is done and the margin is gone.',
    benefits: [
      { title: 'Catch Overruns Early', text: 'Real-time cost tracking against your budget shows you when a project is drifting before it is too late.' },
      { title: 'True Job Profitability', text: 'See actual profit per project after all materials, labor, and subs are accounted for.' },
      { title: 'Receipts Organized', text: 'Crews snap photos of receipts in the field. They are tied to the project automatically.' },
      { title: 'Subcontractor Cost Control', text: 'Track every sub invoice against the budget so you know your true costs.' }
    ],
    howItWorks: [
      'Material purchases, sub invoices, and labor hours are logged against each project.',
      'Crews photograph receipts in the field for instant documentation.',
      'Fuzed Flow compares actual costs to your budget in real time.',
      'You see profitability and cost alerts on your dashboard anytime.'
    ],
    capabilities: [
      'Real-time budget vs. actual cost tracking per project',
      'Mobile receipt capture with automatic project assignment',
      'Subcontractor invoice and cost management',
      'Overhead allocation across projects',
      'Cost category breakdowns for analysis',
      'Profitability alerts when costs exceed thresholds'
    ],
    integrations: ['Project Management', 'Time Tracking', 'Invoicing', 'Reporting', 'Purchase Orders']
  },
  {
    slug: 'reporting',
    name: 'Reporting',
    tagline: 'Know your numbers instantly, across every job.',
    iconName: 'Landmark',
    overview: 'Stop guessing at your business performance. Fuzed Flow gives you real-time dashboards and reports on revenue, profitability, pipeline, crew productivity, and more. Make decisions based on facts, not gut feelings, and spot trends before they become problems.',
    benefits: [
      { title: 'Real-Time Dashboards', text: 'See revenue, profit, pipeline, and project status at a glance without building a single spreadsheet.' },
      { title: 'Profitability Insights', text: 'Know which project types, crews, and clients are most profitable so you can double down on what works.' },
      { title: 'Crew Productivity', text: 'Track hours, output, and efficiency per crew to optimize your labor strategy.' },
      { title: 'Data-Driven Decisions', text: 'Custom reports let you analyze trends and make confident business decisions.' }
    ],
    howItWorks: [
      'Fuzed Flow automatically aggregates data from every project, lead, and invoice.',
      'Pre-built dashboards show your key metrics in real time.',
      'Build custom reports to answer specific business questions.',
      'Export or schedule reports to share with partners or your accountant.'
    ],
    capabilities: [
      'Real-time business performance dashboards',
      'Revenue, profit, and cash flow reports',
      'Lead pipeline and close-rate analytics',
      'Crew productivity and labor cost reports',
      'Project profitability breakdowns by type and client',
      'Scheduled and exportable reports in PDF and CSV'
    ],
    integrations: ['Lead Management', 'Project Management', 'Expense Tracking', 'Time Tracking', 'Invoicing']
  },
  {
    slug: 'reporting',
    name: 'Reporting',
    tagline: 'Know your numbers instantly, across every job.',
    iconName: 'Landmark',
    overview: 'Stop guessing at your business performance. Fuzed Flow gives you real-time dashboards and reports on revenue, profitability, pipeline, crew productivity, and more. Make decisions based on facts, not gut feelings, and spot trends before they become problems.',
    benefits: [
      { title: 'Real-Time Dashboards', text: 'See revenue, profit, pipeline, and project status at a glance without building a single spreadsheet.' },
      { title: 'Profitability Insights', text: 'Know which project types, crews, and clients are most profitable so you can double down on what works.' },
      { title: 'Crew Productivity', text: 'Track hours, output, and efficiency per crew to optimize your labor strategy.' },
      { title: 'Data-Driven Decisions', text: 'Custom reports let you analyze trends and make confident business decisions.' }
    ],
    howItWorks: [
      'Fuzed Flow automatically aggregates data from every project, lead, and invoice.',
      'Pre-built dashboards show your key metrics in real time.',
      'Build custom reports to answer specific business questions.',
      'Export or schedule reports to share with partners or your accountant.'
    ],
    capabilities: [
      'Real-time business performance dashboards',
      'Revenue, profit, and cash flow reports',
      'Lead pipeline and close-rate analytics',
      'Crew productivity and labor cost reports',
      'Project profitability breakdowns by type and client',
      'Scheduled and exportable reports in PDF and CSV'
    ],
    integrations: ['Lead Management', 'Project Management', 'Expense Tracking', 'Time Tracking', 'Invoicing']
  }
];

