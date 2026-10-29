import React from 'react';
import { Link } from 'react-router-dom';
import Page, { Intro, TrialCTA } from '@/components/shared/Page';
import PhoneLink from '@/components/shared/PhoneLink';

const site = 'https://www.fuzedflow.com';

export default function About() {
  const schema = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${site}/about` },
      ],
    },
    {
      '@type': 'AboutPage',
      name: 'About Fuzed Flow',
      description: 'Why Fuzed Flow connects contractor quoting, project communication, field records and closeout work.',
      url: `${site}/about`,
    },
  ];

  return <Page
    title="About Fuzed Flow contractor software"
    description="Fuzed Flow is contractor software designed around the real path from enquiry and quote through project updates, invoicing and closeout."
    path="/about"
    schema={schema}
  >
    <div className="ff-shell">
      <Intro
        eyebrow="Built around contractor work"
        title="One job story, instead of disconnected records."
        description="Fuzed Flow is designed for small and growing contractor teams that want clear scope, better client communication and a reliable record from the first enquiry to the final walkthrough."
      />

      <section className="ff-section">
        <div className="ff-card-grid">
          <article className="ff-card"><h2>Follow the work</h2><p>Carry the client, approved scope, project records, payments, updates and closeout items through one connected workflow.</p></article>
          <article className="ff-card"><h2>Make the next step clear</h2><p>Give the office, project manager, crew and client the information they need without exposing every internal record.</p></article>
          <article className="ff-card"><h2>Stay honest about the product</h2><p>Our feature, pricing and integration pages distinguish what works today from previews and future connections.</p></article>
        </div>
      </section>

      <section className="ff-example">
        <p className="ff-eyebrow">Designed from the job outward</p>
        <h2>Practical contractor workflows come first.</h2>
        <p>Fuzed Flow focuses on the work contractors repeat every week: qualifying an enquiry, agreeing on scope, coordinating a job, keeping the client informed, collecting payment and closing out deficiencies. It is not presented as payroll, accounting, legal advice or a municipal permit service.</p>
        <p className="mt-4"><Link to="/blog/what-makes-fuzedflow-different">Read what makes FuzedFlow different →</Link></p>
        <p className="mt-4"><Link to="/workflow-example">Follow a worked renovation example →</Link></p>
      </section>

      <section className="ff-section">
        <h2>Talk through your workflow</h2>
        <p className="ff-lead">Call <PhoneLink className="font-bold underline underline-offset-4" /> or request a walkthrough using a job like yours.</p>
        <div className="ff-topic-links"><Link to="/contact#demo">Book a demo →</Link><Link to="/security">Review trust and security →</Link></div>
      </section>

      <div className="ff-cta-strip"><div><h2>See where your current process connects.</h2><p>Start a trial or bring your workflow questions to a demo.</p></div><TrialCTA /></div>
    </div>
  </Page>;
}
