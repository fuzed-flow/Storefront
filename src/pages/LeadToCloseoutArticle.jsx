import React from 'react';
import { Link } from 'react-router-dom';

export const closeoutSections = [
  [
    "capture-lead",
    "Capture the lead and set a follow-up"
  ],
  [
    "agree-scope",
    "Build the quote and agree on the scope"
  ],
  [
    "run-project",
    "Run the project and keep the client informed"
  ],
  [
    "verify-deficiencies",
    "Capture, assign, and verify deficiencies"
  ],
  [
    "get-paid",
    "Get paid and close out the balance"
  ],
  [
    "questions",
    "Common questions"
  ]
];

export default function LeadToCloseoutArticle() {
  return <>
    <section id="capture-lead">
      <h2>1. Capture the lead and set a follow-up</h2>
      <p>Save the homeowner’s contact details, project address, scope notes, and any photos they’ve sent. Assign the enquiry to someone on your team and set a follow-up date.</p>
      <p>In this bathroom example, the homeowner wants a new shower and vanity, but hasn’t decided whether to replace the floor tile. Record that as a question for the site visit. After the visit, update the lead with the decision so the person preparing the quote knows what to include.</p>
      <p><Link to="/features/lead-management">Explore Lead Management →</Link></p>
    </section>
    <section id="agree-scope">
      <h2>2. Build the quote and agree on the scope</h2>
      <p>Organize the quote into phases the homeowner can follow, such as demolition, plumbing and electrical rough-ins, shower waterproofing, tile, and finishing. Use line-item descriptions and photos where they help explain the work. If the homeowner is weighing an upgrade, present it as an option so they can review the resulting total before approving.</p>
      <p>When the approved quote becomes a project, the linked lead can be converted into a client record. The project team can refer back to the agreed scope when planning the work or answering a question later.</p>
      <p><Link to="/features/estimating">Explore Estimating and Quoting →</Link></p>
    </section>
    <section id="run-project">
      <h2>3. Run the project and keep the client informed</h2>
      <p>Use daily logs for site details the team may need later, such as photos of rough-ins before drywall goes up. Use client updates for what the homeowner needs to know now. Say what’s complete, what’s next, and what you need from them.</p>
      <blockquote>The plumbing rough-in is complete. Drywall is next once the electrical inspection is complete. Please confirm the vanity selection so we can check its dimensions before that stage.</blockquote>
      <p>If the homeowner asks for an extra outlet, record the added work and price in a change order and send it for approval. Change orders are available on Professional and Business.</p>
      <p><Link to="/features/client-updates">Explore Client Updates</Link> · <Link to="/features/change-orders">Explore Change Orders</Link></p>
    </section>
    <section id="verify-deficiencies">
      <h2>4. Capture, assign, and verify deficiencies</h2>
      <p>At the final walkthrough, the bathroom is ready except for two items. The left vanity door rubs when it closes, and there’s a paint touch-up beside the mirror.</p>
      <p>Open the Project Deficiency Tool and choose how you want to work.</p>
      <ul className="ff-blog-checklist">
        <li><strong>Quick Photo Capture</strong> lets you take photos during the walkthrough and add descriptions and assignments afterward.</li>
        <li><strong>Guided Walkthrough</strong> lets you fill in each item while you’re still looking at it.</li>
      </ul>
      <p>“Adjust the left vanity door so it closes without rubbing” tells the cabinet installer exactly what to check. Add the photo, trade, responsible subcontractor, and a due date if needed. Record the paint touch-up separately for the painter.</p>
      <p>Send each subcontractor a branded PDF with their assigned items. Publish the reviewed checklist to the Client Portal so the homeowner has a record of what’s outstanding. Track items through Open, In Progress, and Ready for Review. After checking the repair, mark the item Complete.</p>
      <p><Link to="/features/project-closeouts">Explore Project Closeouts and Deficiency Checklists →</Link></p>
    </section>
    <section id="get-paid">
      <h2>5. Get paid and close out the balance</h2>
      <p>Getting paid starts with clear payment milestones. As the renovation progresses, send invoices at the stages agreed in the quote. If the homeowner approved an extra outlet through a change order, you can convert that approved change into an invoice so they can see what the additional charge covers.</p>
      <p>At the final walkthrough, review the deficiency checklist and the invoice balance together. Once the job reaches the final payment milestone in your agreement, send the invoice with an online payment link. When payment is confirmed, review the remaining balance and send a receipt. If the client already paid part of the invoice, check the outstanding amount before following up.</p>
      <p><Link to="/features/invoicing">Explore Invoicing and Payments →</Link></p>
    </section>
    <section id="questions">
      <h2>Common questions</h2>
      <h3>Can I take photos first and finish the checklist later?</h3>
      <p>Yes. Quick Photo Capture lets you save each photo and come back to add the description, trade, and assignment. You’ll need an internet connection to save.</p>
      <h3>Does each subcontractor receive the whole checklist?</h3>
      <p>Each subcontractor’s PDF contains their assigned items. You can share the reviewed project checklist with the homeowner through the Client Portal.</p>
      <h3>Is the Project Deficiency Tool included on Starter?</h3>
      <p>Yes. Project closeouts and photo deficiency checklists are included on all plans. <Link to="/pricing">Compare FuzedFlow plans</Link>.</p>
    </section>
  </>;
}
