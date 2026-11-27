import React from 'react';
import { Link } from 'react-router-dom';

export const switchingSoftwareSections = [
  [
    "switching-goal",
    "Define a better workflow"
  ],
  [
    "collect-records",
    "Collect the right records"
  ],
  [
    "archives-and-imports",
    "Archives versus imports"
  ],
  [
    "active-projects",
    "Handle active projects"
  ],
  [
    "unpaid-invoices",
    "Check unpaid invoices"
  ],
  [
    "sample-migration",
    "Test a sample migration"
  ],
  [
    "cancelling-old-service",
    "Before cancelling"
  ],
  [
    "fuzedflow-migration",
    "FuzedFlow migration options"
  ],
  [
    "questions",
    "Common questions"
  ],
  [
    "switching-checklist",
    "Final switching checklist"
  ]
];

export default function SwitchingSoftwareArticle() {
  return <>
    <div className="ff-blog-intro">
      <p>Start a software switch by making an inventory of your records and deciding where each active job will continue. Preserve readable copies of important documents, confirm the formats the new system supports, test a small sample and check outstanding payments before choosing a cutover date. Cancel the old service after you have verified the access and records you will need.</p>
      <p>Not every historical record needs to become an editable record in the new software. The goal is a workable transition with a clear history of the job.</p>
    </div>
    <section id="switching-goal">
      <h2>What should the new software do better?</h2>
      <p>Name the problem that prompted the change. It might be rebuilding invoices from estimates, struggling to train staff, losing track of client decisions or paying for functions you do not use.</p>
      <p>Turn that problem into a test. For example: “The person coordinating the job needs to find the latest scope, client update and outstanding action without searching three places.”</p>
      <p>Run that test before moving the business. Importing a contact list successfully will not prove that the new workflow solves the original problem.</p>
      <p>If you are still comparing products, use our <Link to="/blog/choosing-contractor-software-5-questions">contractor-software buying questions</Link> to review the shortlist.</p>
    </section>
    <section id="collect-records">
      <h2>What records should I collect before switching?</h2>
      <p>Make a list of the information you use to quote, run and close out a job. Include records held outside the old software, such as photos on phones or approvals in email.</p>
      <div className="ff-blog-table-wrap" role="region" aria-label="Records to review before switching software" tabIndex={0}><table className="ff-blog-table"><caption>Records to review before switching software</caption><thead><tr><th scope="col">Record type</th><th scope="col">What to preserve or check</th><th scope="col">What to confirm before importing</th></tr></thead><tbody><tr><th scope="row">Leads and contacts</th><td>Names, contact details, site addresses and follow-up notes</td><td>Required columns, duplicate handling and contact relationships</td></tr><tr><th scope="row">Quotes and agreements</th><td>Original versions, accepted scope, chosen options and approval records</td><td>Whether the new tool imports structured quotes or stores documents only</td></tr><tr><th scope="row">Invoices and payments</th><td>Invoice references, amounts, confirmed payments and balances</td><td>How active invoices and payment links will be handled</td></tr><tr><th scope="row">Change orders</th><td>Changed scope, price, decision and project reference</td><td>How the connection to the original job will remain understandable</td></tr><tr><th scope="row">Documents and photos</th><td>Original files, useful filenames and project references</td><td>Attachment support, file limits and where files will live</td></tr><tr><th scope="row">Products and templates</th><td>Descriptions, units, quantities, prices and reusable wording</td><td>Supported fields and whether templates can be rebuilt or imported</td></tr><tr><th scope="row">Communication history</th><td>Important updates, decisions and next actions</td><td>What transfers, what becomes an archive and what needs a manual summary</td></tr></tbody></table></div>
      <p>An export button may produce several files. Open them and check what they contain before assuming the job history is complete.</p>
    </section>
    <section id="archives-and-imports">
      <h2>What is the difference between an archive and an import?</h2>
      <p>An archive is a preserved copy you can consult later. An import creates usable records inside the new system.</p>
      <p>A PDF of an accepted quote may be useful evidence of what the client agreed to. It does not necessarily become editable phases and line items when uploaded elsewhere. Likewise, a payment report does not automatically recreate invoice history or reconnect a payment processor.</p>
      <p>Give each record a destination: <strong>import, attach, rebuild, archive or keep in the existing system for now</strong>. This makes gaps visible before the cutover.</p>
      <p>Store the archive somewhere your business controls, with access limited to the people who need it. Test that important files open outside the original service.</p>
    </section>
    <section id="active-projects">
      <h2>Should I move active projects or only start new ones in the new system?</h2>
      <p>Consider the stage of each job.</p>
      <p>A new enquiry may be straightforward to start in the new software. A renovation nearing completion may be easier to finish in the current system. A longer project may need selected records moved and a clear link back to its history.</p>
      <p>Choose where each active job’s schedule, client updates, approvals and invoices will be maintained during the transition. Tell the team which record to update. Running both systems without that decision can create conflicting versions.</p>
      <p>When a client-facing link changes, explain where the homeowner should look next and which existing links remain valid.</p>
    </section>
    <section id="unpaid-invoices">
      <h2>How do I handle unpaid invoices and deposits?</h2>
      <p>Prepare a dated list of active invoices, confirmed payments, credits and remaining balances. Check it with the person responsible for your books before transferring billing records.</p>
      <p>Consider this fictional example, with amounts in CAD:</p>
      <div className="ff-blog-table-wrap" role="region" aria-label="Illustrative invoice balance at cutover (CAD)" tabIndex={0}><table className="ff-blog-table"><caption>Illustrative invoice balance at cutover (CAD)</caption><thead><tr><th scope="col">Invoice position at the cutover</th><th scope="col" className="ff-blog-number">Illustrative amount</th></tr></thead><tbody><tr><th scope="row">Existing invoice total</th><td className="ff-blog-number">$20,000</td></tr><tr><th scope="row">Confirmed payment already received</th><td className="ff-blog-number">$6,000</td></tr><tr><th scope="row">Remaining balance</th><td className="ff-blog-number">$14,000</td></tr></tbody></table></div>
      <p>The move does not create another $20,000 of work to bill. Decide how the existing invoice and its remaining balance will be handled before creating another payable document.</p>
      <p>If the invoice stays in the old system, retain its reference in the new project record. If billing records will move, have the migration reviewed and check both systems for duplicate invoices, reminders or payment requests.</p>
      <p>Also confirm which payment links remain active. A new project record does not, by itself, transfer an existing payment link or settlement history.</p>
    </section>
    <section id="sample-migration">
      <h2>What should I test in a small sample migration?</h2>
      <p>Use an authorized sample before importing the full list. A useful test might include a contact with a separate site address, a repeat client and product items with different units.</p>
      <p>Check:</p>
      <ul className="ff-blog-checklist"><li>Names, email addresses and phone numbers.</li><li>Site addresses and the connection to the right client.</li><li>Duplicate records and matching rules.</li><li>Product descriptions, units, decimal values and prices.</li><li>Notes, attachments and any fields the import does not support.</li><li>Whether another team member can find and use the imported information.</li></ul>
      <p>Compare important fields and record counts with the source. A file can upload successfully while still placing information in the wrong fields.</p>
      <p>Then run a sample job through the workflow that motivated the switch. Check the quote, client preview, project record, update and invoice stages you intend to use.</p>
    </section>
    <section id="cancelling-old-service">
      <h2>When is it safe to cancel the old subscription?</h2>
      <p>Check the provider’s cancellation, renewal and post-cancellation access terms first. Do not assume your business records will remain available indefinitely.</p>
      <p>Before cancelling, confirm that essential exports are readable, active jobs have an agreed home, payment arrangements are clear and the team knows where to work. Check any need to retain access with the person responsible for your business records.</p>
      <p>Choose a transition period that fits the workload. A short overlap can provide time to verify the move, but it needs a defined purpose and an end date.</p>
    </section>
    <section id="fuzedflow-migration">
      <h2>What can I bring into FuzedFlow?</h2>
      <p>FuzedFlow’s public migration options include CSV imports for leads, clients and inventory, plus selected report exports. Use the format shown in the relevant screen and test a sample. These options do not establish a complete transfer of historical quotes, signed records, invoices or attachments. <Link to="/integrations">Check supported connections and migration options</Link>.</p>
      <p>Discuss the records you want to move and how you want to use them after the switch. A document archive and an editable job record serve different purposes.</p>
    </section>
    <section id="questions">
      <h2>Common questions about switching contractor software</h2>
      <h3>How long does switching contractor software take?</h3>
      <p>There is no reliable single timeframe for every business. A contact import differs from rebuilding templates, moving active jobs and changing payment workflows. Estimate the work after reviewing a sample of your actual records.</p>
      <h3>Can I switch in the middle of a renovation?</h3>
      <p>You can plan a partial transition, but decide which system holds each active record. Preserve the agreed scope, approval history and billing references, and tell the client if their portal or payment instructions change.</p>
      <h3>Do I need to migrate every old project?</h3>
      <p>Not necessarily. Completed jobs may be useful as an organized archive. Prioritize the records needed for current operations and future reference, while checking your business’s retention requirements.</p>
      <h3>Can I import my old quotes from PDFs?</h3>
      <p>A PDF can preserve the document, but editable import support varies. Ask whether the new system can reconstruct line items, quantities, options and approvals, or whether you will attach the PDF and rebuild selected information.</p>
      <h3>Is a CSV import the same as an accounting integration?</h3>
      <p>No. An import transfers a file at a point in time. A working integration has defined rules for exchanging records between systems. Confirm which records move, how often and how duplicates or errors are handled.</p>
      <h3>Will my old client portal and payment links keep working?</h3>
      <p>That depends on the provider and account status. Check before cancelling. Test the links you still intend clients to use and communicate any replacements clearly.</p>
      <h3>Should I switch accounting software at the same time?</h3>
      <p>Treat it as a separate decision. Changing both systems increases the records and connections that need checking. Agree on the sequence with your bookkeeper or accountant and test the information exchanged between them.</p>
      <h3>What should I ask a vendor about migration help?</h3>
      <p>Ask which records and formats they support, who prepares the files, what costs extra and what happens to unsupported data. Request a sample result and agree on how the finished migration will be checked.</p>
    </section>
    <section id="switching-checklist">
      <h2>A final switching checklist</h2>
      <ul className="ff-blog-checklist"><li>The new workflow addresses the problem that prompted the switch.</li><li>Important records have a named destination.</li><li>Original documents and decision records are preserved.</li><li>Sample imports have been checked against their source.</li><li>Active invoices, payments and links have been reviewed.</li><li>Each active job has a clearly identified working system.</li><li>Staff and affected clients know where to find current information.</li><li>Access, renewal and cancellation terms have been checked.</li></ul>
      <p>Bring a sample of your current quote, project records and import files to a conversation with our team. <Link to="/contact">Explore how FuzedFlow fits your quoting and project workflow</Link>, including what can move now and what needs a different approach.</p>
    </section>
  </>;
}
