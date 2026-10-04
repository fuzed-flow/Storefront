import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, MessageCircleQuestion, Phone, Mail, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Helmet } from 'react-helmet-async'; 

// --- FULL FAQ DATA ARRAY ---
const faqData = [
  {
    category: "General",
    questions: [
      { q: "What is FuzedFlow?", a: "FuzedFlow is an all-in-one construction business management platform designed to bring your customers, estimates, projects, scheduling, job information and financial workflows together in one place." },
      { q: "Who is FuzedFlow designed for?", a: "FuzedFlow is designed for contractors, renovation companies, builders, specialty trades and other project-based businesses that want to reduce paperwork and manage their business from one connected system." },
      { q: "Is FuzedFlow specifically built for construction and renovation companies?", a: "Yes. FuzedFlow has been designed around real construction workflows rather than adapting a generic CRM to the industry." },
      { q: "Can FuzedFlow replace multiple apps or software platforms we currently use?", a: "That is one of the main goals of FuzedFlow. It combines CRM, estimating, scheduling, project management, documents, invoicing, job costing and customer communication so businesses can reduce the number of disconnected systems they rely on." },
      { q: "Can I manage my entire business from FuzedFlow?", a: "FuzedFlow is designed to manage the majority of your day-to-day construction business workflow, from the first customer enquiry through quoting, project delivery and invoicing." },
      { q: "Is FuzedFlow suitable for small contractors as well as larger construction companies?", a: "Yes. FuzedFlow is designed to scale from owner-operators and small teams through to multi-crew and multi-location construction businesses." },
      { q: "Can subcontractors and specialty trades use FuzedFlow?", a: "Yes. FuzedFlow can be used by general contractors, subcontractors and specialty trades, with workflows that can be adapted to different types of construction businesses." },
      { q: "How quickly can I get started with FuzedFlow?", a: "Smaller businesses can begin setting up customers, templates and projects quickly. Businesses migrating large amounts of existing data may benefit from additional onboarding and migration assistance." }
    ]
  },
  {
    category: "Getting Started & Accounts",
    questions: [
      { q: "How do I create a FuzedFlow account?", a: "Select Sign Up from FuzedFlow and follow the account creation process. Once registered, you can begin configuring your company and inviting team members." },
      { q: "Can I sign in using my Google account?", a: "Yes. FuzedFlow supports signing in with Google as well as standard email-based account access." },
      { q: "Can I invite other employees to my FuzedFlow account?", a: "Yes. You can add internal users so your office staff, project managers and field team can work from the same system." },
      { q: "Can different employees have different access permissions?", a: "Yes. Role-based permissions are available on applicable plans, allowing administrators to control which areas of FuzedFlow different users can access." },
      { q: "Can I restrict employees from seeing financial information?", a: "Yes. With role-based permissions, financial and other sensitive areas can be restricted to authorized team members." },
      { q: "Can I add or remove users at any time?", a: "Yes. Your account can grow with your team, and users can be added or removed as your staffing requirements change." },
      { q: "Can FuzedFlow be customized for the way my company operates?", a: "Yes. FuzedFlow includes configurable templates and settings, while higher plans provide additional custom forms, workflows, dashboards and permissions." }
    ]
  },
  {
    category: "Customers, Leads & CRM",
    questions: [
      { q: "Can I manage leads and potential customers in FuzedFlow?", a: "Yes. FuzedFlow includes a CRM for managing leads, customers and property records from initial enquiry onward." },
      { q: "Can I track where new leads came from?", a: "Lead information can be recorded within the CRM. The level of lead-source tracking and reporting available will depend on your configured CRM fields and reporting setup." },
      { q: "Can I keep all customer contact information in one place?", a: "Yes. Customer records can contain contact names, phone numbers, email addresses, property information and other relevant details." },
      { q: "Can I see a customer's complete history?", a: "FuzedFlow is designed to keep customer information connected to their quotes, projects and related activity so your team has one place to find the information they need." },
      { q: "Can I add notes, calls, emails and follow-ups to a customer?", a: "Customer and project records can include notes and activity information. More advanced communication and automated workflow features are available on higher plans." },
      { q: "Can I set reminders to follow up with leads or customers?", a: "Yes. Follow-up workflows can be used to help ensure opportunities and customers don't get forgotten. Automated follow-ups are included in the more advanced plans." },
      { q: "Can I track a customer from initial enquiry through to completed project?", a: "Yes. This is a core principle of FuzedFlow: keeping the customer journey connected from lead to estimate, project and financial records." },
      { q: "Can I import my existing customers into FuzedFlow?", a: "Yes. Existing customer information can be imported as part of your migration into FuzedFlow." }
    ]
  },
  {
    category: "Estimates & Quotes",
    questions: [
      { q: "Can I create estimates and quotes in FuzedFlow?", a: "Yes. FuzedFlow includes professional estimating and quotation tools designed specifically for construction projects." },
      { q: "Can I create professional branded quotes with my company logo?", a: "Yes. Quotes can be professionally presented and customized with company branding, project details, descriptions and client-facing content." },
      { q: "Can I create quote templates for commonly performed work?", a: "Yes. Reusable estimating templates and a custom price book can make repeat quoting significantly faster." },
      { q: "Can I duplicate an existing quote?", a: "FuzedFlow's estimating system is designed to make reusing existing information and templates easy, reducing the need to rebuild similar estimates from scratch." },
      { q: "Can customers approve a quote electronically?", a: "Yes. FuzedFlow supports interactive proposals and electronic signatures, allowing customers to approve proposals digitally." },
      { q: "Can I see whether a quote has been sent, viewed or approved?", a: "Quote status can be tracked throughout the sales process. Exact engagement information, such as individual view tracking, may depend on the proposal workflow being used." },
      { q: "Can an approved quote be converted into a project?", a: "FuzedFlow is designed to keep the estimating and project-management processes connected so accepted work can move into project delivery without having to recreate the information." },
      { q: "Can I revise a quote after it has been sent?", a: "Yes. Quotes can be revised when the scope changes. Advanced plans also include estimate version control for maintaining a clearer history of revisions." },
      { q: "Can I track which quotes have been won or lost?", a: "FuzedFlow's sales workflow allows opportunities and quotes to be tracked through the sales process so your team can monitor what is progressing and what has been lost." }
    ]
  },
  {
    category: "Projects",
    questions: [
      { q: "Can I manage multiple construction projects at the same time?", a: "Yes. FuzedFlow is designed to give contractors visibility across multiple active projects from one system." },
      { q: "What information can I store against a project?", a: "Projects can bring together customer information, schedules, notes, files, photos, checklists, financial information and other job-related records." },
      { q: "Can I assign employees or subcontractors to a project?", a: "Yes. Team members and resources can be assigned as part of project and scheduling workflows." },
      { q: "Can I create project tasks and deadlines?", a: "Yes. Scheduling and checklist tools can be used to manage work that needs to be completed and when it needs to happen." },
      { q: "Can I track the current stage of each project?", a: "Yes. FuzedFlow is designed to provide visibility into where projects are in their lifecycle and what needs to happen next." },
      { q: "Can I see all upcoming project activities from one dashboard?", a: "FuzedFlow provides centralized project and scheduling information to help managers see what is coming up across the business." },
      { q: "Can project managers add notes and updates from the jobsite?", a: "Yes. Job notes, photos and project information can be added while working in the field through FuzedFlow's mobile-accessible platform." },
      { q: "Can I create checklists for different stages of a project?", a: "Yes. Checklists are included so companies can create more consistent processes for different project stages and types of work." },
      { q: "Can I track project completion and outstanding work?", a: "Yes. Project information, schedules and checklists help teams see what has been completed and what remains outstanding." },
      { q: "Can I archive completed projects without losing their information?", a: "FuzedFlow is designed to retain completed project records so they remain available for future reference rather than disappearing when the project is finished." }
    ]
  },
  {
    category: "Scheduling",
    questions: [
      { q: "Does FuzedFlow include a calendar or scheduling system?", a: "Yes. Scheduling is built into FuzedFlow so project and team activities can be managed alongside the rest of your business information." },
      { q: "Can I schedule employees and subcontractors?", a: "Yes. FuzedFlow supports team scheduling, with more advanced crew scheduling and dispatch functionality available on higher plans." },
      { q: "Can I see all company projects on one calendar?", a: "Scheduling is designed to give managers a consolidated view of upcoming company work rather than maintaining separate calendars for every project." },
      { q: "Can employees see their own upcoming schedule?", a: "Team members can access the information relevant to the jobs and activities assigned to them." },
      { q: "Can I reschedule work if a project is delayed?", a: "Yes. Construction schedules change, and FuzedFlow allows schedules to be updated when dates or project requirements change." },
      { q: "Can I schedule inspections, deliveries and subcontractors?", a: "FuzedFlow's scheduling tools can be used to organize important project activities, including site work, subcontractors and other time-sensitive events." },
      { q: "Can FuzedFlow help prevent scheduling conflicts?", a: "Centralizing your schedule makes it easier to identify resource and scheduling conflicts before they affect the job. Advanced plans provide greater crew, dispatch and capacity-planning tools." }
    ]
  },
  {
    category: "Documents, Photos & Project Files",
    questions: [
      { q: "Can I upload documents to a project?", a: "Yes. Files and documents can be stored with project information so your team isn't searching through separate folders and email chains." },
      { q: "Can I store contracts, permits, plans and specifications?", a: "Yes. Project-related documents can be kept alongside the project record for easier access." },
      { q: "Can employees upload jobsite photos?", a: "Yes. Job photos are part of FuzedFlow's project-management functionality." },
      { q: "Can photos be organized by project?", a: "Yes. Photos can be associated with the relevant job so your project history remains organized." },
      { q: "Can I access previous project documents after a job is completed?", a: "Yes. Completed job information is retained so your team can refer back to historical project records when needed." },
      { q: "Is there a limit to how many files or photos I can store?", a: "FuzedFlow is not designed around restrictive job-count limits. Fair-use limits or additional charges may apply to unusually storage-intensive media usage depending on your plan." }
    ]
  },
  {
    category: "Change Orders",
    questions: [
      { q: "Can I create change orders in FuzedFlow?", a: "Yes. Change-order management is included on applicable FuzedFlow plans." },
      { q: "Can customers approve change orders electronically?", a: "FuzedFlow is designed to keep change orders documented and presented through a controlled workflow. Electronic approval options will depend on the change-order configuration available on your plan." },
      { q: "Can change orders automatically update the project value?", a: "Change orders are designed to remain connected with project financials so approved scope changes can be reflected in the value and costing of the project." },
      { q: "Can I see all approved and outstanding change orders for a project?", a: "Yes. Change orders remain associated with the project, helping your team see both approved changes and items still requiring action." }
    ]
  },
  {
    category: "Costs & Profitability",
    questions: [
      { q: "Can I track project costs in FuzedFlow?", a: "Yes. FuzedFlow includes job-costing capabilities, ranging from basic job-cost reporting to advanced costing on higher plans." },
      { q: "Can I record labour, material and subcontractor costs?", a: "FuzedFlow's costing system is designed to bring the major costs associated with delivering a project together in one place." },
      { q: "Can I compare estimated costs against actual costs?", a: "Yes. Budget-versus-actual reporting is available on the Medium Business plan and above." },
      { q: "Can I see whether a project is making or losing money?", a: "Yes. Job-cost and profitability reporting can help you understand how a project's actual performance compares with what was estimated." },
      { q: "Can I track project budgets?", a: "Yes. Advanced FuzedFlow plans include project budgeting and budget-versus-actual comparisons." },
      { q: "Can I see profitability across all of my projects?", a: "Reporting and analytics tools provide visibility into financial performance across projects and the wider business." }
    ]
  },
  {
    category: "Invoicing & Payments",
    questions: [
      { q: "Can I create invoices in FuzedFlow?", a: "Yes. Invoicing is built into FuzedFlow." },
      { q: "Can invoices be created from an approved quote or project?", a: "FuzedFlow is designed to keep estimating, projects and invoicing connected, minimizing duplicate data entry as a job moves through its lifecycle." },
      { q: "Can I create deposit, progress and final invoices?", a: "Deposits are supported, while Medium Business and higher plans include progress and milestone invoicing for longer or more complex projects." },
      { q: "Can I see which invoices have been paid and which are outstanding?", a: "Yes. FuzedFlow includes payment tracking and accounts-receivable reporting so you can monitor what has been collected and what remains outstanding." },
      { q: "Can FuzedFlow send payment reminders?", a: "Automated follow-up workflows are available on higher plans and can be used to reduce the amount of manual chasing required." },
      { q: "Can customers pay invoices online?", a: "FuzedFlow supports online payment tracking. Where online payment processing is enabled, payment-processing charges are separate from your FuzedFlow subscription." },
      { q: "Can I issue credits or make adjustments to invoices?", a: "Financial records can be managed within FuzedFlow, although the exact credit-note and post-invoice adjustment workflow should be confirmed for your account before relying on it for a specific accounting process." },
      { q: "Can I download or print invoices as PDFs?", a: "FuzedFlow is designed for digital document delivery and export. Available invoice download and print options may depend on the invoice format being used." }
    ]
  },
  {
    category: "Employees & Subcontractors",
    questions: [
      { q: "Can I manage employees in FuzedFlow?", a: "Yes. Internal users can be added to your company workspace and used within scheduling, project and operational workflows." },
      { q: "Can I maintain a list of subcontractors and suppliers?", a: "Yes. FuzedFlow is designed to keep suppliers and subcontractors connected with purchasing and project workflows." },
      { q: "Can I store subcontractor contact information and documents?", a: "Subcontractor and supplier records can be used to centralize important information instead of maintaining separate spreadsheets and contact lists." },
      { q: "Can employees be assigned tasks and projects?", a: "Yes. Employees can be connected to project and scheduling activities so everyone has greater clarity over their responsibilities." },
      { q: "Can I track employee responsibilities and deadlines?", a: "Yes. Scheduling, project activities and checklists can be used to communicate what needs to be completed and when." },
      { q: "Can employees access FuzedFlow from the field?", a: "Yes. Mobile access is part of FuzedFlow so employees can access relevant information away from the office." }
    ]
  },
  {
    category: "Customer Communication",
    questions: [
      { q: "Can I send emails or messages to customers through FuzedFlow?", a: "Advanced plans include two-way messaging and automated communication workflows, helping keep customer communication connected with the business." },
      { q: "Can customer communication be stored against their project?", a: "FuzedFlow is designed to keep relevant customer and project activity together so staff have a clearer history of the job." },
      { q: "Can FuzedFlow automatically send customers project updates?", a: "Automated workflows are available on higher plans and can be used to reduce repetitive customer follow-up and communication tasks." },
      { q: "Can customers access their project information online?", a: "Yes. FuzedFlow includes a client portal that can give customers access to relevant project information." },
      { q: "Is there a customer portal?", a: "Yes. A client portal is included within the FuzedFlow platform." },
      { q: "Can customers view quotes, invoices, documents and project updates?", a: "The client portal is designed to provide customers with access to relevant information such as quotes, change orders and project updates. The exact information displayed can depend on your portal configuration." }
    ]
  },
  {
    category: "Mobile & Remote Access",
    questions: [
      { q: "Can I use FuzedFlow on my phone or tablet?", a: "Yes. FuzedFlow includes mobile access so important information can be accessed when you're away from your desk." },
      { q: "Can my field staff access FuzedFlow from the jobsite?", a: "Yes. Field staff can use FuzedFlow to access the information they need and contribute job notes, photos and other project information." },
      { q: "Do I need to install an app?", a: "FuzedFlow can be accessed as an online platform. A separate native mobile application should not be assumed unless one is specifically made available for your device." },
      { q: "Can I access FuzedFlow from any computer?", a: "Yes. As an online platform, FuzedFlow is designed to be accessed through a supported web browser with an internet connection." },
      { q: "Will FuzedFlow work on both Android and iPhone?", a: "FuzedFlow's mobile web access is intended to work across modern mobile devices. Native Android or iPhone app availability should be confirmed separately." }
    ]
  },
  {
    category: "Reports & Management",
    questions: [
      { q: "What reports are available in FuzedFlow?", a: "FuzedFlow reporting includes areas such as sales and revenue, expenses, tax information, invoice aging and project financial performance. Additional reporting is available on higher plans." },
      { q: "Can I see sales, quotes and project values from a dashboard?", a: "Yes. Dashboards are designed to provide managers with a clearer view of important business and financial information." },
      { q: "Can I track my company's sales pipeline?", a: "Yes. Leads and customer opportunities can be managed through FuzedFlow's CRM and sales workflows." },
      { q: "Can I see outstanding invoices and amounts owing?", a: "Yes. FuzedFlow includes accounts-receivable and invoice-aging information to help identify outstanding balances." },
      { q: "Can I see upcoming projects and workload?", a: "Yes. Project and scheduling information can help managers see upcoming work and plan resources accordingly." },
      { q: "Can reports be exported to Excel or PDF?", a: "FuzedFlow includes report export functionality. Available export formats can vary depending on the report." }
    ]
  },
  {
    category: "Accounting & Integrations",
    questions: [
      { q: "Does FuzedFlow integrate with QuickBooks?", a: "QuickBooks Online connectivity is included within the current FuzedFlow plan structure." },
      { q: "Can FuzedFlow integrate with other accounting software?", a: "Yes. Xero integration is included on Medium Business and higher plans." },
      { q: "Can I export financial information for my accountant?", a: "Yes. FuzedFlow's financial and reporting tools are designed to make it easier to provide your accountant with the information they require." },
      { q: "Does FuzedFlow integrate with Google Calendar or Microsoft Outlook?", a: "Google Calendar and Microsoft Outlook integrations are not part of the currently confirmed integration list, so we would not recommend advertising these integrations until they are formally supported." },
      { q: "Can FuzedFlow connect with other apps we already use?", a: "Yes. Medium Business includes Zapier integration, while larger organizations can access API and webhook functionality on applicable plans for more advanced integrations." }
    ]
  },
  {
    category: "Data Migration",
    questions: [
      { q: "Can I move my information from my existing CRM into FuzedFlow?", a: "Yes. FuzedFlow is designed to support businesses moving away from existing CRMs, spreadsheets and disconnected systems." },
      { q: "Can existing customers, projects and quotes be imported?", a: "Yes. Existing business data can be mapped and imported where compatible. The exact information that can be migrated depends on the format and quality of your existing data." },
      { q: "Can FuzedFlow help us migrate from spreadsheets?", a: "Yes. Spreadsheet imports can be used as part of the migration process, making it easier to bring existing customer and business records into FuzedFlow." },
      { q: "Will we lose historical customer or project information when we switch?", a: "The migration process is designed to preserve the historical information you choose to bring into FuzedFlow. Before migration, the existing data is reviewed to determine what can be mapped accurately." },
      { q: "How long does the migration process normally take?", a: "Migration time depends on the amount, complexity and condition of your existing data. Simple imports may be relatively straightforward, while complex migrations involving multiple systems require additional planning." }
    ]
  },
  {
    category: "Security & Data",
    questions: [
      { q: "Is my information secure in FuzedFlow?", a: "FuzedFlow includes account permissions and access controls designed to protect business information. Larger plans add features such as granular permissions, audit logs and single sign-on." },
      { q: "Where is FuzedFlow data stored?", a: "Specific hosting locations and data-residency arrangements should be confirmed through FuzedFlow's current Privacy Policy and security documentation rather than assuming a particular country or cloud provider." },
      { q: "Is my company's information backed up?", a: "FuzedFlow is a cloud-based business platform, but specific backup frequency, retention periods and disaster-recovery commitments should be confirmed in the current service documentation." },
      { q: "Who owns the data I enter into FuzedFlow?", a: "Data ownership should be governed by the FuzedFlow Terms of Service and Privacy Policy. We recommend referring to those documents for the definitive legal position." },
      { q: "Can I export my data if I decide to leave FuzedFlow?", a: "FuzedFlow includes export capabilities for areas of the platform. Full account-data portability and any export period following cancellation should be defined by the applicable subscription terms." },
      { q: "What happens to my information if I cancel my account?", a: "Data retention and deletion after cancellation are governed by FuzedFlow's subscription and data-retention terms. Larger plans can also include additional retention controls." }
    ]
  },
  {
    category: "Pricing & Subscription",
    questions: [
      { 
        q: "How much does Fuzed Flow cost?", 
        a: "We offer three simple plans to match your stage of growth: Starter ($29/month), Professional ($59/month), and Business ($149/month). If you choose an annual subscription, you can save up to 25%." 
      },
      { 
        q: "Is pricing based on the number of users?", 
        a: "Your base plan includes your primary seat. You can easily add more internal team members at any time by increasing your user quantity in the billing portal. There is no charge for clients viewing the client portal." 
      },
      { 
        q: "Are there different Fuzed Flow plans available?", 
        a: "Yes! We offer Starter, Professional, and Business plans. You can also contact our sales team to build a custom plan for larger-scale operations." 
      },
      { 
        q: "Can I pay monthly or annually?", 
        a: "Yes, you can choose either option at checkout. Annual subscriptions are billed upfront and offer up to a 25% discount compared to paying monthly." 
      },
      { 
        q: "Is there a free trial?", 
        a: "Yes, all of our plans include a 14-day free trial. You can cancel anytime before the trial ends and you will not be charged." 
      },
      { 
        q: "Are there setup or onboarding fees?", 
        a: "There are absolutely no setup fees or hidden charges. For larger teams needing custom API integrations or hands-on migration, custom plans with dedicated onboarding are available." 
      },
      { 
        q: "Can I change my subscription as my company grows?", 
        a: "Absolutely. You can upgrade your plan, downgrade, or add additional team members to your workspace 24/7 directly from your secure billing portal." 
      },
      { 
        q: "Can I cancel my subscription at any time?", 
        a: "Yes. There are no lock-in contracts. Monthly subscribers can cancel at any time, and annual subscribers can cancel to prevent their plan from renewing at the end of their billing cycle." 
      }
    ]
  },
  {
    category: "Training & Support",
    questions: [
      { q: "Is training included when we sign up?", a: "FuzedFlow provides onboarding options to help businesses get started. The level of onboarding and training available depends on your plan and implementation requirements." },
      { q: "Do you provide onboarding assistance?", a: "Yes. Standard onboarding assistance is available, with more extensive and dedicated onboarding available for larger organizations." },
      { q: "Is customer support included?", a: "Yes. Customer support is included. Small Business includes email and chat support, Medium Business adds phone support, and Large Corporation provides priority and dedicated support options." },
      { q: "How do I contact FuzedFlow support?", a: "Support options depend on your subscription and can include email, chat and phone support." },
      { q: "Is there an online help centre or knowledge base?", a: "FuzedFlow includes in-platform Help functionality. Additional help-centre and knowledge-base resources can be provided as the platform's support library expands." },
      { q: "Can you help configure FuzedFlow around our existing workflow?", a: "Yes. Medium Business and higher plans provide greater workflow customization, while larger implementations can include dedicated onboarding and configuration assistance." },
      { q: "Do you offer demonstrations before we subscribe?", a: "Yes. A FuzedFlow demonstration can be used to explore the platform and determine how it could fit your company's current processes before making a subscription decision." }
    ]
  }
];

// --- INNER COMPONENT: Individual Question Accordion ---
const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-primary"
      >
        <span className="font-bold text-foreground pr-4">{question}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pt-1 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- OUTER COMPONENT: Category Accordion ---
const CategoryItem = ({ categoryData }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden border-2 border-foreground bg-background shadow-[8px_8px_0_hsl(var(--primary))] transition-colors hover:border-primary">
      <button
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="flex w-full items-center justify-between bg-black px-6 py-5 text-left transition-colors hover:bg-black/90"
      >
        // Inside FAQ.jsx, update this line in the CategoryItem component:
<h2 className="font-heading text-xl uppercase tracking-wide text-white m-0">
  {categoryData.category}
</h2>
        <ChevronDown className={`h-6 w-6 shrink-0 text-primary transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isCategoryOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 py-2 bg-background">
              {categoryData.questions.map((q, idx) => (
                <QuestionItem key={idx} question={q.q} answer={q.a} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* 👇 Injected Helmet with page-specific Canonical Link and FAQ Schema */}
      <Helmet>
        <title>Frequently Asked Questions | Fuzed Flow</title>
        <meta name="description" content="Find answers to common questions about Fuzed Flow's pricing, features, and how to set up your construction management workspace." />
        <link rel="canonical" href="https://www.fuzedflow.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does Fuzed Flow cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer three simple plans to match your stage of growth: Starter ($29/month), Professional ($59/month), and Business ($149/month). If you choose an annual subscription, you can save up to 25%."
                }
              },
              {
                "@type": "Question",
                "name": "Is pricing based on the number of users?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your base plan includes your primary seat. You can easily add more internal team members at any time by increasing your user quantity in the billing portal. There is no charge for clients viewing the client portal."
                }
              },
              {
                "@type": "Question",
                "name": "Are there different Fuzed Flow plans available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer Starter, Professional, and Business plans. You can also contact our sales team to build a custom plan for larger-scale operations."
                }
              },
              {
                "@type": "Question",
                "name": "Can I pay monthly or annually?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can choose either option at checkout. Annual subscriptions are billed upfront and offer up to a 25% discount compared to paying monthly."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a free trial?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all of our plans include a 14-day free trial. You can cancel anytime before the trial ends and you will not be charged."
                }
              },
              {
                "@type": "Question",
                "name": "Are there setup or onboarding fees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are absolutely no setup fees or hidden charges. For larger teams needing custom API integrations or hands-on migration, custom plans with dedicated onboarding are available."
                }
              },
              {
                "@type": "Question",
                "name": "Can I change my subscription as my company grows?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. You can upgrade your plan, downgrade, or add additional team members to your workspace 24/7 directly from your secure billing portal."
                }
              },
              {
                "@type": "Question",
                "name": "Can I cancel my subscription at any time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. There are no lock-in contracts. Monthly subscribers can cancel at any time, and annual subscribers can cancel to prevent their plan from renewing at the end of their billing cycle."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 pt-16 md:pt-20 pb-24">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <MessageCircleQuestion className="h-8 w-8 text-primary" />
          </div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Everything You Need to Know</p>
          <h1 className="font-heading text-4xl uppercase leading-tight md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about FuzedFlow's features, pricing, and onboarding process. Select a category below to explore.
          </p>
        </div>

        {/* Categories Nested Accordions */}
        <div className="space-y-4">
          {faqData.map((category, index) => (
            <CategoryItem key={index} categoryData={category} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center border-2 border-foreground bg-background p-8 shadow-[8px_8px_0_hsl(var(--primary))]">
          <h2 className="font-heading text-2xl uppercase text-foreground">Still have questions?</h2>
          <p className="mt-2 text-muted-foreground mb-6">Our team is ready to help you figure out if FuzedFlow is the right fit.</p>
          <Button asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}