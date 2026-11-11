import React from 'react';
import { Link } from 'react-router-dom';

export const softwareQuestionsSections = [
  [
    "total-cost",
    "What will it actually cost?"
  ],
  [
    "support",
    "Can I get support when something goes wrong?"
  ],
  [
    "business-records",
    "Can I access and export my business records?"
  ],
  [
    "quoting-and-invoicing",
    "Does it handle the way I quote and invoice?"
  ],
  [
    "jobsite-use",
    "Does it work smoothly on the jobsite?"
  ],
  [
    "questions",
    "Common questions"
  ],
  [
    "explore-fuzedflow",
    "Explore how FuzedFlow fits your workflow"
  ]
];

export default function ChoosingSoftwareArticle() {
  return <>
    <div className="ff-blog-intro">
      <p>A low monthly price can make contractor software look like an easy decision. The real test comes when you need to revise a quote from your truck, collect a progress payment or find a client’s records months after a job is finished.</p>
      <p>Customer reviews can help you think about those situations before committing. Concerns about cost, support, access to records and everyday usability all lead to useful questions to ask during a trial.</p>
      <p><strong>A low monthly price only matters if the software works for your business.</strong></p>
      <p>Before you sign up, use these five questions to see how well a platform fits the way you work.</p>
    </div>
    <section id="total-cost">
      <h2>1. What will it actually cost?</h2>
      <p>Start with the plan that includes the features you need. An advertised starting price may cover one user or a limited number of projects, while your business needs additional team members, change orders or reporting.</p>
      <p>Check:</p>
      <ul className="ff-blog-checklist"><li>Monthly billing compared with the total annual commitment.</li><li>Included users, active projects and document limits.</li><li>Features that require a higher subscription tier.</li><li>Additional charges for users, messaging or other services.</li><li>Payment-processing fees for the methods your clients use.</li><li>Trial expiry, renewal and cancellation terms.</li><li>The billing currency and applicable taxes.</li></ul>
      <p>Payment fees deserve their own review. As a simple illustration, a one-percentage-point difference on $20,000 in processed payments equals $200. That can matter more than a small difference in subscription price.</p>
      <p>Also ask when payments normally reach your bank and what could delay a payout. The subscription cost, processing fee and time it takes to receive your money are separate parts of the decision.</p>
      <p><strong>Try this:</strong> Price the setup you would actually use for the next year, including your team and expected payment volume.</p>
    </section>
    <section id="support">
      <h2>2. Can I get support when something goes wrong?</h2>
      <p>Support becomes particularly important when a problem affects a client or holds up a job.</p>
      <p>Imagine a homeowner is ready to pay a deposit, but the payment link will not open. You need to know how to report the issue, when someone is available and who can help resolve it.</p>
      <p>Ask:</p>
      <ul className="ff-blog-checklist"><li>Which support channels are available on your plan?</li><li>What hours and time zones does support cover?</li><li>Are response times published, and do they apply to your plan?</li><li>How are urgent quote, invoice or payment problems escalated?</li><li>If a payment is delayed, does the software provider or payment processor handle it?</li></ul>
      <p>A quick acknowledgement is useful, but it is also worth understanding how an unresolved issue moves forward.</p>
      <p><strong>Try this:</strong> Send a specific workflow question during your trial. Assess how clearly the reply answers it and whether the suggested steps help.</p>
    </section>
    <section id="business-records">
      <h2>3. Can I access and export my business records?</h2>
      <p>Your software may hold years of quotes, invoices, client details, photos and project decisions. Understand how you can retrieve those records before you depend on the platform.</p>
      <p>Ask what happens if you downgrade, cancel or let a subscription expire:</p>
      <ul className="ff-blog-checklist"><li>Can you still view and download historical documents?</li><li>Which records can you export, and in what formats?</li><li>Are photos, attachments and communication history included?</li><li>Can you export records in bulk?</li><li>How long does access continue after cancellation?</li><li>What happens to links you previously shared with clients?</li></ul>
      <p>Being able to download one invoice as a PDF is useful. Moving a complete set of client and project records requires a different level of export access.</p>
      <p><strong>Try this:</strong> Export a sample client and job, then open the files outside the platform. Check what is included and what you would need to save separately.</p>
    </section>
    <section id="quoting-and-invoicing">
      <h2>4. Does it handle the way I quote and invoice?</h2>
      <p>Most platforms can produce a quote. The question is whether they can produce one that clearly explains your work and supports your payment process.</p>
      <p>For a renovation contractor, that might mean grouping work by room or phase, showing optional upgrades, adding photos and setting out deposits and progress payments.</p>
      <p>Check whether you can:</p>
      <ul className="ff-blog-checklist"><li>Reuse scope descriptions and templates.</li><li>Present optional items without confusing the base price.</li><li>Customize branding, descriptions, terms and document layout.</li><li>Set payment milestones that match your agreement.</li><li>Record partial payments and see the remaining balance.</li><li>Keep approved additions clear when preparing invoices.</li></ul>
      <p>Use a realistic example. A bathroom renovation might include a base scope, an optional heated floor and a 30/30/30/10 payment schedule. Build that example and review it from both sides: your internal view and the homeowner’s document.</p>
      <p>Check whether the client can understand what is included, what they selected and what is due at each stage.</p>
      <p><strong>Try this:</strong> Recreate a recent quote, revise an option and follow it through to an invoice with a partial payment.</p>
    </section>
    <section id="jobsite-use">
      <h2>5. Does it work smoothly on the jobsite?</h2>
      <p>A platform can feel straightforward on an office computer and awkward on a phone.</p>
      <p>During a site visit, you may need to add a photo, change a quantity, reorder scope items or send a revised quote while the client is beside you. Test those actions on the device you normally carry.</p>
      <p>Check whether you can:</p>
      <ul className="ff-blog-checklist"><li>Create and edit a quote without losing your place.</li><li>Add photos and read longer scope descriptions.</li><li>Move line items and confirm totals.</li><li>Preview the document the client will receive.</li><li>Send the quote and reopen the saved version.</li></ul>
      <p>Ask which functions require an internet connection and whether any offline work is supported. If you regularly work in basements or areas with weak reception, include those conditions in your trial.</p>
      <p><strong>Try this:</strong> Complete one realistic quoting task from your phone, from entering the client details to opening the finished document.</p>
    </section>
    <section id="questions">
      <h2>Common questions</h2>
      <h3>Should I rule out software because of a bad review?</h3>
      <p>Use the review to identify something to investigate. Check its date, the version or plan involved and any provider response. An individual complaint does not establish how the product works today.</p>
      <h3>What is the most useful thing to do during a trial?</h3>
      <p>Run through a job you already understand. Build its quote, make a revision, prepare an invoice, record a sample payment and export the available records. You will have a clearer basis for comparison than a feature list alone.</p>
      <h3>Is the lowest-priced plan the best value?</h3>
      <p>It can be, if it covers the work you need. Compare the total cost with how well the software handles your routine tasks, the support available and the manual work still required.</p>
    </section>
    <section id="explore-fuzedflow">
      <h2>Explore how FuzedFlow fits your workflow</h2>
      <p>Bring a recent quote and your usual payment schedule. Explore how FuzedFlow connects quoting, client records, project updates, closeout checklists and invoicing, then work through the details that matter to your business.</p>
      <p>See how your scope, optional items and payment stages fit before choosing a plan.</p>
      <p><Link to="/">Explore FuzedFlow</Link> or <Link to="/contact">request a walkthrough</Link> to discuss your quoting and project workflow.</p>
    </section>
  </>;
}
