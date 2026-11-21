import React from 'react';
import { Link } from 'react-router-dom';

export const changeOrderSections = [
  [
    "connected-change-orders",
    "Why connect change orders to the project?"
  ],
  [
    "what-to-include",
    "What should a change order include?"
  ],
  [
    "pot-light-example",
    "A worked pot-light example"
  ],
  [
    "fuzedflow-workflow",
    "The FuzedFlow workflow"
  ],
  [
    "change-order-template",
    "A reusable template"
  ],
  [
    "questions",
    "Common questions"
  ],
  [
    "keep-work-connected",
    "Keep the extra work connected"
  ]
];

export default function ChangeOrderArticle() {
  return <>
    <div className="ff-blog-intro">
      <p>A construction change order records an agreed change to an existing project. It should identify the client and project, explain what is being added, removed or revised, show the price and schedule impact, and record approval before the changed work begins.</p>
      <p>The document should also remain easy to find when it is time to plan the work or prepare an invoice.</p>
      <p>In this guide, we explain what to include, walk through a pot-light example and share a reusable checklist.</p>
    </div>
    <section id="connected-change-orders">
      <h2>Why we wanted change orders connected to the project</h2>
      <p>When researching workflows for FuzedFlow, our team encountered examples where additional work was handled through a separate quote or sent directly as an invoice. The information existed, but its connection to the original project was not always clear.</p>
      <p>That shaped the workflow we wanted to build: a change order with its own scope, price and approval, linked to the client through the relevant project.</p>
      <p>A contractor should be able to answer three questions without piecing together separate conversations: Which job does this belong to? What changed? Has the client approved it?</p>
    </section>
    <section id="what-to-include">
      <h2>What should a construction change order include?</h2>
      <p>A useful change order gives both sides enough information to understand the decision.</p>
      <ul className="ff-blog-checklist"><li><strong>A clear reference:</strong> Change-order number, title and issue date.</li><li><strong>The client and project:</strong> Identify the existing job and its original quote or agreement.</li><li><strong>The reason for the change:</strong> Explain the client request or project condition that prompted it.</li><li><strong>The revised scope:</strong> Describe the work being added, removed or changed, including relevant quantities and exclusions.</li><li><strong>The price:</strong> Show additions, credits, applicable tax and the resulting amount to approve.</li><li><strong>The schedule impact:</strong> State whether the change affects sequencing or completion, including anything still awaiting confirmation.</li><li><strong>The approval record:</strong> Follow the approval process agreed for the project and keep the decision with the change order.</li><li><strong>The next action:</strong> Identify what needs scheduling, ordering or invoicing after approval.</li></ul>
      <p>A title such as “Additional living-room pot lights” is easier to recognize later than “Extras.”</p>
    </section>
    <section id="pot-light-example">
      <h2>Construction change order example: adding four pot lights</h2>
      <p>Imagine a living-room renovation is underway. The approved scope does not include new recessed lighting, but the homeowner asks to add four pot lights before the ceiling work is finished.</p>
      <p>A short text saying “Please add the lights” leaves questions about the fixtures, switching, ceiling repairs and price. A change order brings those details together.</p>
      <p>The example below uses fictional project details and illustrative amounts in CAD. It is not a recommended market price.</p>
      <div className="ff-blog-table-wrap" role="region" aria-label="Example change-order details" tabIndex={0}><table className="ff-blog-table"><caption>Example change-order details</caption><thead><tr><th scope="col">Field</th><th scope="col">Example</th></tr></thead><tbody><tr><th scope="row">Change-order reference</th><td>CO-002 — Additional living-room pot lights</td></tr><tr><th scope="row">Linked project</th><td>PRJ-1001 — Living-room renovation</td></tr><tr><th scope="row">Reason for change</th><td>The homeowner requested four additional recessed lights after approving the original scope.</td></tr><tr><th scope="row">Added scope</th><td>Supply and install four agreed pot lights, update the agreed switch/control arrangement and patch the ceiling areas affected by this work.</td></tr><tr><th scope="row">Scope clarification</th><td>Whole-room repainting is excluded from this change order. The original painting scope remains as quoted.</td></tr><tr><th scope="row">Schedule impact</th><td>Allow one additional working day. Confirm the electrical visit and revised sequence before promising a completion date.</td></tr><tr><th scope="row">Approval needed</th><td>Before booking and starting the additional work.</td></tr></tbody></table></div>
      <h3>Make the price easy to review</h3>
      <div className="ff-blog-table-wrap" role="region" aria-label="Illustrative price breakdown (CAD)" tabIndex={0}><table className="ff-blog-table"><caption>Illustrative price breakdown (CAD)</caption><thead><tr><th scope="col">Added work</th><th scope="col" className="ff-blog-number">Illustrative amount</th></tr></thead><tbody><tr><th scope="row">Four pot lights, supplied and installed at $150 each</th><td className="ff-blog-number">$600</td></tr><tr><th scope="row">Agreed switch/control adjustment</th><td className="ff-blog-number">$100</td></tr><tr><th scope="row">Patching directly affected ceiling areas</th><td className="ff-blog-number">$150</td></tr><tr><th scope="row"><strong>Change-order subtotal, before applicable tax</strong></th><td className="ff-blog-number"><strong>$850</strong></td></tr></tbody></table></div>
      <p>Show applicable tax and the final approval total in the document. If the change removes work already included in the original price, show the credit clearly too.</p>
      <p>The aim is a decision the homeowner can understand: what they are receiving, what it costs and what it means for the job.</p>
    </section>
    <section id="fuzedflow-workflow">
      <h2>How the change moves through FuzedFlow</h2>
      <p>FuzedFlow’s change-order workflow is available on <strong>Professional and Business</strong>.</p>
      <h3>1. Create the change order against the project</h3>
      <p>Choose the linked project so the additional work belongs to the correct job and client. Give the change order a recognizable title and explain the reason for it.</p>
      <p>The builder shown in the accompanying screenshot includes a linked-project field, client details, scope wording and dates for follow-up and the client’s decision.</p>
      <h3>2. Describe and price the changed work</h3>
      <p>Add the relevant change items and client-facing descriptions. Make additions, credits, exclusions and schedule implications clear before sharing.</p>
      <p>Keep internal planning notes separate from the information intended for the homeowner.</p>
      <h3>3. Send it for the client’s decision</h3>
      <p>Share the change order for online review and approval. The client can review the proposed change in its project context.</p>
      <p>When the client approves, the decision is recorded and the team is notified. Email and SMS alerts depend on the recipient’s enabled notification preferences; they should not replace checking the saved approval record.</p>
      <h3>4. Update the work plan</h3>
      <p>Review what the approved change means for the trades, materials and sequence of work. Confirm those arrangements before giving the client a revised date.</p>
      <p>Approval and scheduling are separate steps. Keeping the document linked to the project gives the team a clear reference for both.</p>
      <h3>5. Invoice the approved change</h3>
      <p>Convert agreed work into an invoice through the change-order workflow, following the payment arrangements for the project.</p>
      <p>Keep the reference and description clear so the client can connect the invoice to the extra work they approved.</p>
      <figure className="ff-blog-product-image">
        <img src="/images/blog/change-order-builder-demo.webp" width="1440" height="706" loading="lazy" decoding="async" alt="FuzedFlow Change Order Builder showing the linked project, client, scope and approval due date in a demonstration account."/>
        <figcaption>Demo screenshot: the change order has its own title and scope while remaining linked to the project and client.</figcaption>
      </figure>
    </section>
    <section id="change-order-template">
      <h2>A reusable change-order template</h2>
      <p>Use this structure as a starting point, then adapt it to the project and your agreed approval process.</p>
      <p><strong>Change-order number:</strong> [Reference]<br/><strong>Title:</strong> [Recognizable description]<br/><strong>Client:</strong> [Client name]<br/><strong>Project and original quote:</strong> [Project reference and quote/agreement reference]<br/><strong>Issue date:</strong> [Date]</p>
      <p><strong>Reason for change:</strong><br/>[Who requested the change, or what condition prompted it?]</p>
      <p><strong>Added, removed or revised scope:</strong><br/>[Describe the work, quantities and relevant specifications.]</p>
      <p><strong>Exclusions and assumptions:</strong><br/>[Explain the boundaries of this change.]</p>
      <p><strong>Price:</strong><br/>[Additions less credits, applicable tax and final approval total.]</p>
      <p><strong>Schedule impact:</strong><br/>[Confirmed impact, or what must be checked before confirming dates.]</p>
      <p><strong>Approval:</strong><br/>[Client decision and date, recorded using the agreed process.]</p>
      <p><strong>Next action:</strong><br/>[Who will arrange the work, update the project and prepare the invoice?]</p>
      <p><a href="/resources/construction-change-order-template.md" download>Download the blank change-order template</a></p>
    </section>
    <section id="questions">
      <h2>Common questions</h2>
      <h3>Is a change order the same as another quote?</h3>
      <p>A change order can contain quote-like details, but it records a change to an existing job. Keeping it linked to that project helps distinguish the original scope from later decisions.</p>
      <h3>Can we send an invoice for the extra work instead?</h3>
      <p>An invoice requests payment. It does not, by itself, explain whether the client agreed to a change before the work began. Document the scope, price and decision using the process agreed for the project.</p>
      <h3>Do all change orders increase the price?</h3>
      <p>No. A change can add work, remove work or substitute one item for another. It may create an additional charge, a credit or no price adjustment. Record schedule implications separately.</p>
      <h3>Which FuzedFlow plans include change orders?</h3>
      <p>Change orders are included on Professional and Business. Check the current plan comparison when choosing the workspace for your team.</p>
      <p><Link to="/pricing">Compare FuzedFlow plans</Link></p>
    </section>
    <section id="keep-work-connected">
      <h2>Keep the extra work connected</h2>
      <p>Small requests still deserve a clear record. A separate change-order document can make the decision easy to review while its link to the client and project keeps the job history understandable.</p>
      <p><Link to="/features/change-orders">Explore FuzedFlow change orders</Link> or <Link to="/contact">request a walkthrough</Link> using an example from the work you do.</p>
      
    </section>
  </>;
}

