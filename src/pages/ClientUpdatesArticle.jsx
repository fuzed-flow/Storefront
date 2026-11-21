import React from 'react';
import { Link } from 'react-router-dom';

export const clientUpdatesSections = [
  ['garys-experience', 'Gary’s experience at LBProjects'],
  ['what-to-share', 'What to include in a client update'],
  ['one-client-portal', 'Give the update a home'],
  ['weekly-update-example', 'A weekly update example'],
  ['team-handover', 'Keep the team informed'],
  ['update-template', 'A reusable update template'],
  ['questions', 'Common questions'],
];

export default function ClientUpdatesArticle() {
  return <>
    <div className="ff-blog-answer">
      <h2>What makes a useful client project update?</h2>
      <p>A useful update tells the homeowner what has been completed, what is coming next and what decisions or access you need from them. Give it a date, explain any changes to the plan, and keep the reviewed update somewhere the client and your team can find it again.</p>
    </div>

    <section id="garys-experience">
      <h2>Gary’s experience: daily messages, then another Friday email</h2>
      <p>Gary from LBProjects shared how he used to keep renovation clients informed. During the week, he sent daily texts through WhatsApp or a message group. On Fridays, he put together a personalized update email for each client. Later, he started using Google Docs for those updates.</p>
      <p>The care was already there. He was making an effort to tell each homeowner what was happening on their job. But the process involved several places to write, send and look back through the information.</p>
      <p>Gary now uses FuzedFlow to send personalized project updates that clients can return to in their Client Portal. He also described being able to open the lead details so his team can check when project updates were sent.</p>
      <p>His experience points to a practical question: after you have written a good update, where will the homeowner find it next week, and how will your team know what you shared?</p>
    </section>

    <section id="what-to-share">
      <h2>Start with the questions your homeowner needs answered</h2>
      <p>“Work is progressing” does not give a client much to work with. A clear update connects the activity on site to the next stage of their renovation.</p>
      <ul className="ff-blog-checklist">
        <li><strong>A short summary.</strong> Explain where the project stands in plain language.</li>
        <li><strong>Completed work.</strong> Say what changed since the last update. Distinguish finished work from work still awaiting review or inspection.</li>
        <li><strong>Upcoming work.</strong> Explain the next stage and any conditions that must be met first.</li>
        <li><strong>Client decisions and access.</strong> Name the selection, approval or access arrangement needed, with a realistic date.</li>
        <li><strong>Changes or blockers.</strong> Explain what is known, what is still being checked and when you expect to follow up.</li>
      </ul>
      <p>Personalization is about relevance. One homeowner may need to confirm a vanity size. Another may need to know which entrance will be available during flooring work. A consistent structure leaves room for those details.</p>
      <p>Keep unconfirmed dates clear. “Drywall is planned after the inspection passes” is more useful than promising a start date that still depends on a decision outside your control.</p>
    </section>

    <section id="one-client-portal">
      <h2>Give the update a home in the client portal</h2>
      <p>Sending an update tells the client there is something to read. Keeping it in a portal gives them somewhere to return when they want to check the details again.</p>
      <p>In <Link to="/features/client-updates">FuzedFlow’s client-update workflow</Link>, choose the project and date, then prepare the summary, completed work, upcoming work and important client notes. Save a draft while you check the details, preview the branded PDF, then publish the reviewed update to the <Link to="/features/client-portal">Client Portal</Link>.</p>
      <p>Email can include the branded PDF and a portal link. Text messages share the portal link. Check the recipient details and message before sending, and make sure the Updates section is enabled in your portal settings.</p>
      <figure className="ff-blog-product-image">
        <img src="/images/blog/client-project-update-portal-demo.webp" width="1440" height="771" loading="lazy" decoding="async" alt="FuzedFlow demonstration Client Portal with Updates selected, a dated Weekly Update and a list of completed renovation work."/>
        <figcaption>Demonstration screenshot supplied for this guide: the Updates tab displays a dated weekly update with a summary, completed work and upcoming work. These are demo project details.</figcaption>
      </figure>
      <p>The screenshot shows the client-facing result: a recognizable contractor-branded portal and a structured update. It is separate from the internal notes your team uses to run the job.</p>
    </section>

    <section id="weekly-update-example">
      <h2>A weekly renovation update the client can act on</h2>
      <p>The following is a fictional bathroom-renovation example, not a report from Gary’s projects or the demonstration account.</p>
      <div className="ff-blog-note-example">
        <p className="ff-eyebrow">Example client update</p>
        <h3>Summary</h3>
        <p>The bathroom rough-ins are complete. We are waiting for the scheduled electrical inspection before closing the walls.</p>
        <h3>Completed since the last update</h3>
        <p>The shower framing and niche are complete, and the plumbing and electrical rough-ins are finished. Inspection approval is still pending.</p>
        <h3>Upcoming work</h3>
        <p>Once the required inspection approval is confirmed, we will finalize the insulation and drywall sequence. We will share the confirmed start date in the next update.</p>
        <h3>What we need from you</h3>
        <p>Please confirm the vanity model and dimensions by Tuesday so we can review the fit before the next stage. Let us know if you need help comparing your options.</p>
      </div>
      <p>This update distinguishes completed work from approval still needed, explains the dependency and gives the homeowner a specific next action. Add relevant photos when they help explain the work, with enough context for the client to understand what they show.</p>
    </section>

    <section id="team-handover">
      <h2>Make the update useful to your team, too</h2>
      <p>Gary’s point about checking the lead details matters when more than one person speaks with the client. A colleague should be able to check the update and send history before following up.</p>
      <p>A sent record answers a different question from an approval. Sending an update does not mean a client has read it, confirmed a selection or agreed to extra work. Follow up on decisions that need a response.</p>
      <p>Keep internal <Link to="/features/daily-logs">daily logs and project notes</Link> for site records. Prepare a reviewed client update from the facts the homeowner needs. If a request changes the agreed scope or price, document it through the <Link to="/blog/construction-change-order-example">change-order workflow</Link> rather than treating the update as approval for the extra work.</p>
    </section>

    <section id="update-template">
      <h2>A reusable client project update template</h2>
      <p>Use this structure each week, then tailor the content to the job. Remove headings that are not relevant and check every date before sharing.</p>
      <div className="ff-blog-note-example">
        <p><strong>Project:</strong> [Project name or reference]<br/><strong>Update date:</strong> [Date]<br/><strong>Reporting period:</strong> [Dates covered]</p>
        <p><strong>Summary:</strong><br/>[Where the project stands and the most important thing the client should know.]</p>
        <p><strong>Completed since the last update:</strong><br/>[Completed work, with any outstanding review or inspection clearly identified.]</p>
        <p><strong>Upcoming work:</strong><br/>[Next steps, confirmed dates and dependencies still to be resolved.]</p>
        <p><strong>Decisions or access needed:</strong><br/>[What the client needs to do, by when and who can help.]</p>
        <p><strong>Changes or blockers:</strong><br/>[Known impact, what is being checked and when you will follow up.]</p>
        <p><strong>Next update:</strong><br/>[When the client should expect to hear from you again.]</p>
      </div>
      <p><a href="/resources/client-project-update-template.md" download>Download the blank client project update template</a></p>
    </section>

    <section id="questions">
      <h2>Common questions about client project updates</h2>
      <h3>How often should a contractor send an update?</h3>
      <p>Agree on a rhythm that fits the project. A weekly summary can give the client a predictable check-in, with additional messages for urgent issues or time-sensitive decisions. Send important changes when they arise instead of waiting for the next scheduled update.</p>
      <h3>Do client updates replace daily site notes?</h3>
      <p>No. Daily notes preserve the working record. Client updates explain the relevant progress, next steps and decisions in language the homeowner can use.</p>
      <h3>Are client updates included on every FuzedFlow plan?</h3>
      <p>Yes. Client updates, branded PDFs and portal publishing are included on all plans. Each plan has its own user and project allowances. <Link to="/pricing">Compare current plans</Link> for the details.</p>
      <h3>Can AI help with the wording?</h3>
      <p>Professional and Business include <Link to="/features/ai-rewrite">AI Rewrite</Link> in supported fields, subject to usage limits. You supply the facts and review the wording before saving or sending. It cannot verify site progress or confirm a trade’s arrival.</p>
      <p>Bring an update you already send and <Link to="/contact">explore how FuzedFlow fits your project workflow</Link>. Start with the information your clients need, then see how the draft, branded document and portal work together.</p>
    </section>
  </>;
}
