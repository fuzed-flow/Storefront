import React from 'react';
import { Link } from 'react-router-dom';

export const smallRenovationSections = [
  [
    "start-with-problem",
    "Start with the problem"
  ],
  [
    "small-team-features",
    "Features for a small crew"
  ],
  [
    "team-access",
    "Who needs access?"
  ],
  [
    "accounting-tools",
    "Accounting and integrations"
  ],
  [
    "compare-costs",
    "Compare the real cost"
  ],
  [
    "test-one-job",
    "Test one sample job"
  ],
  [
    "fuzedflow-fit",
    "Where FuzedFlow fits"
  ],
  [
    "questions",
    "Common questions"
  ],
  [
    "choose-next-job",
    "Choose around your next job"
  ]
];

export default function SmallRenovationArticle() {
  return <>
    <div className="ff-blog-intro">
      <p>For a small renovation company, useful contractor software should make it easier to quote the work, organize the job, keep the homeowner informed and track what remains to be paid. Choose it by testing those tasks with the people who will do them. The number of features matters less than whether the important parts fit together.</p>
      <p>A two-person bathroom business and a five-person company running several renovations may need different levels of coordination. Start with the work you handle today, then check what changes as the business grows.</p>
    </div>
    <section id="start-with-problem">
      <h2>What problem should the software solve first?</h2>
      <p>Write down where information gets lost or entered again.</p>
      <p>Perhaps you prepare a quote in a document, copy the approved work into a spreadsheet, send progress photos by text and rebuild the invoice later. Or the paperwork is manageable, but nobody can quickly find the latest client decision.</p>
      <p>Choose one specific problem to test:</p>
      <ul className="ff-blog-checklist"><li>Can we stop rebuilding the same scope in several places?</li><li>Can the person coordinating the job find the latest approved information?</li><li>Can the homeowner see a clear update without searching a message thread?</li><li>Can we tell what has been billed, what has been paid and what is outstanding?</li></ul>
      <p>If a vendor demonstrates dozens of features, bring the conversation back to that problem. Ask them to walk through your example.</p>
    </section>
    <section id="small-team-features">
      <h2>Which features does a small renovation company actually need?</h2>
      <p>Use a typical job to decide which capabilities are essential.</p>
      <div className="ff-blog-table-wrap" role="region" aria-label="A small renovation company\u2019s software checklist" tabIndex={0}><table className="ff-blog-table"><caption>A small renovation company’s software checklist</caption><thead><tr><th scope="col">Part of the job</th><th scope="col">What to look for</th><th scope="col">A useful question during a demo</th></tr></thead><tbody><tr><th scope="row">Enquiry and site visit</th><td>Contact details, site notes, photos and follow-up</td><td>Can I find the information when I return to prepare the quote?</td></tr><tr><th scope="row">Quoting</th><td>Clear scope, phases or rooms, quantities and client options</td><td>Can I explain what is included and show an optional upgrade separately?</td></tr><tr><th scope="row">Job coordination</th><td>Tasks, dates, documents and responsibility</td><td>Can the person managing the job see the next action?</td></tr><tr><th scope="row">Client communication</th><td>Reviewed updates and an accessible client view</td><td>Where does the homeowner find what we shared last week?</td></tr><tr><th scope="row">Changes</th><td>A record of changed scope, price and approval</td><td>Can we distinguish an approved extra from the original work?</td></tr><tr><th scope="row">Invoicing</th><td>Payment terms, payments received and remaining balance</td><td>Can we check the balance without reconstructing it from messages?</td></tr><tr><th scope="row">Closeout</th><td>Photos, descriptions, responsibility and completion status</td><td>Can we turn “a few touch-ups” into a clear list?</td></tr></tbody></table></div>
      <p>Use this as a shortlist. A company doing short service visits may place less emphasis on a weekly client update than a contractor managing a six-week bathroom renovation.</p>
      <p>For a closer look at presenting scope, see <Link to="/blog/what-makes-a-contractor-quote-stand-out">what makes a contractor quote stand out</Link>.</p>
    </section>
    <section id="team-access">
      <h2>Does every carpenter and subcontractor need a paid login?</h2>
      <p>Check how the software handles different roles before choosing a plan.</p>
      <p>Your owner may prepare quotes, a project manager may coordinate work, and a carpenter may only need certain tasks or documents. The homeowner needs a client view. A subcontractor may need a specific scope package.</p>
      <p>Ask which of those roles requires a paid user, what access each receives and whether external collaborators have different limits. Five people working on a job does not automatically mean five identical software accounts.</p>
      <p>Have each intended user test their own task. A system that suits the person quoting may still be awkward for someone opening drawings on a phone.</p>
    </section>
    <section id="accounting-tools">
      <h2>Do I still need accounting software?</h2>
      <p>Separate managing the job from keeping the books. A professional invoice screen does not establish that a product handles your bookkeeping, payroll or reporting requirements.</p>
      <p>List what you intend to keep in your accounting system and what you want the contractor software to manage. If the two must connect, ask which records transfer, in which direction and how errors are corrected.</p>
      <p>A CSV export and a continuous accounting integration are different workflows. Verify the connection you need with sample records before relying on it.</p>
    </section>
    <section id="compare-costs">
      <h2>How do I compare the real cost?</h2>
      <p>Compare the cost for your intended setup, including the features and access you will use.</p>
      <p>Check the subscription currency, monthly versus annual commitment, included users, active-project limits, extra-user charges and any features requiring an upgrade. Ask separately about payment-processing fees, setup assistance and migration support.</p>
      <p>For a Canadian business comparing a subscription billed in USD, allow for the currency conversion and any applicable charges shown by the payment provider. Avoid comparing a monthly payment with an annual plan’s advertised monthly equivalent as though the commitments were identical.</p>
      <p>Use the same list for every product. Our <Link to="/blog/choosing-contractor-software-5-questions">five questions before signing up</Link> covers costs, support, records, quoting and mobile use in more detail.</p>
    </section>
    <section id="test-one-job">
      <h2>What should I test before subscribing?</h2>
      <p>Run a sample bathroom renovation through the shortlisted software. This is an illustrative test, not a customer case study.</p>
      <ol className="ff-blog-job-steps"><li><strong>Prepare the quote.</strong> Separate demolition, rough-ins, tile and finishing. Add an optional fixture upgrade.</li><li><strong>Open the client view.</strong> Check the descriptions, selected options and information the homeowner can see.</li><li><strong>Make a phone edit.</strong> Correct a quantity, save it and confirm that the saved document shows the change.</li><li><strong>Prepare the project.</strong> Find the agreed scope and add the next tasks, relevant dates and supporting documents.</li><li><strong>Share progress.</strong> Draft an update explaining completed work, upcoming work and a client decision.</li><li><strong>Test an extra.</strong> Describe additional lighting and check how its approval is recorded on a plan that supports change orders.</li><li><strong>Review billing and closeout.</strong> Check a sample payment schedule, remaining balance and photographed touch-up item.</li></ol>
      <p>Use sample contacts while exploring. Check the client view before sending anything to a real homeowner, and confirm how test payments are handled before using payment features.</p>
      <p>The useful result is a list of what worked, what needed help and what still sits outside the software.</p>
    </section>
    <section id="fuzedflow-fit">
      <h2>Where does FuzedFlow fit?</h2>
      <p>FuzedFlow brings quoting, project records, client communication and closeout work into one contractor workspace. Its plans include quotes, invoicing, client updates and photo closeouts; Professional and Business add change orders and employee tools. <Link to="/pricing">Compare current plans</Link>.</p>
      <p>Bring a familiar quote and client update to a walkthrough. Check the <Link to="/integrations">current integration status</Link> against the other tools you intend to keep.</p>
    </section>
    <section id="questions">
      <h2>Common questions from small renovation contractors</h2>
      <h3>Is my business too small for contractor software?</h3>
      <p>Size alone does not decide it. If a simple process already keeps records clear, you may only need a modest tool. If repeated entry and missing information are becoming routine, test whether software improves those specific tasks.</p>
      <h3>What if I only need estimates and invoices?</h3>
      <p>Start there. Compare the speed, document quality, payment records and exports you need. Add project-management features when they solve a real problem in your work.</p>
      <h3>Can I keep using spreadsheets?</h3>
      <p>Yes. Decide which record is authoritative and how information moves between tools. Problems arise when several copies are updated independently and nobody knows which one reflects the agreed job.</p>
      <h3>Will the software work without internet on site?</h3>
      <p>Do not assume that a mobile-friendly product works offline. Ask which actions require a connection and what happens to unsaved changes. Test the relevant tasks under the conditions where you work.</p>
      <h3>Can homeowners see my costs or private notes?</h3>
      <p>Check the actual client view and sharing controls. Use a sample quote with internal notes, then inspect the client document and PDF. A field visible to your team is not necessarily intended for the homeowner.</p>
      <h3>How long should setup take?</h3>
      <p>That depends on the records, templates, roles and integrations involved. Ask what must be configured before the first job can run, who will do it and what help is included. A first usable workflow is a better milestone than an untested promise about setup time.</p>
      <h3>What should I ask the salesperson to demonstrate?</h3>
      <p>Ask them to follow one job through your essential tasks, including a phone edit and client preview. Have them identify the plan, extra charges and work that still needs another tool.</p>
    </section>
    <section id="choose-next-job">
      <h2>Choose around the next job</h2>
      <p>The right choice should make your next renovation easier to understand: what was agreed, what happens next, what the client needs to know and what remains unfinished.</p>
      <p><Link to="/contact">Explore how FuzedFlow fits your quoting and project workflow</Link>, using an example from the work you already do.</p>
    </section>
  </>;
}
