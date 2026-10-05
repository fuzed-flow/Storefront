import React from 'react';
import { Link } from 'react-router-dom';
import Page, { Intro, TrialCTA } from '@/components/shared/Page';

const steps = [
  ['1. Capture the enquiry', 'A homeowner requests a bathroom renovation. Record the contact, site, photos, source and follow-up date in the lead record.', 'lead-management'],
  ['2. Quote the agreed scope', 'Build demolition, rough-in, finishes and fixtures as phases. Offer a separate $1,200 fixture upgrade as an optional item; the homeowner chooses their scope before approving.', 'estimating'],
  ['3. Prepare the project', 'Plan the phases and tasks. Import selected items marked Track Material, then track each supplier and To Order, Ordered or Received status.', 'project-materials'],
  ['4. Share the trade scope', 'Select the drawings and scope for the electrical subcontractor. Send the current contractor portal link so they can review the work and return a quote.', 'contractor-portal'],
  ['5. Keep the site record', 'Record completed rough-in, photos before concealment, crew and the decision needed before closing the wall. Save the daily record online.', 'daily-logs'],
  ['6. Keep the homeowner informed', 'Prepare a project update with completed work, upcoming work and access notes. On Professional or Business, use AI Rewrite to improve supported text, review the result, then publish and send the branded update.', 'client-updates'],
  ['7. Review the next approval', 'Document an extra outlet in a change order. Review pending change orders and purchase orders in the Approvals Hub, confirm the decision and follow up on the relevant scope.', 'approvals'],
  ['8. Walk through the deficiencies', 'Photograph a paint touch-up and grout repair. Add descriptions, assign the painter and tiler, and send each trade their assigned checklist. Publish the reviewed closeout for the homeowner and track completion.', 'project-closeouts'],
  ['9. Review the balance', 'On a $10,000 invoice, record a confirmed $2,000 payment and review the $8,000 remaining balance. Send a receipt for the recorded payment.', 'invoicing'],
];

export default function WorkflowExample() {
  return <Page title="A contractor job from enquiry to project closeout" description="Follow a renovation through quote options, trade scope, client updates, approvals, photo deficiency checklists and invoice payments." path="/workflow-example">
    <article className="ff-shell ff-article">
      <Intro eyebrow="Worked process example" title="One renovation. A connected set of records." description="This example uses illustrative scope and amounts to show how a contractor can keep decisions, client communication and handover organized." />
      {steps.map(([title, body, slug]) => <section key={title} className="ff-section">
        <h2>{title}</h2><p className="ff-lead">{body}</p>
        <Link className="inline-block mt-4 font-bold" to={'/features/' + slug}>See this workflow →</Link>
      </section>)}
      <p className="ff-plan-note">Client updates and closeouts are shared project tools. AI Rewrite and change orders are included on Professional and Business. AI Rewrite usage limits apply.</p>
      <div className="ff-cta-strip"><h2>Try the steps with your own scope.</h2><TrialCTA /></div>
    </article>
  </Page>;
}
