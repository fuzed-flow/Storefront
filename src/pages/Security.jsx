import React from 'react';
import { Link } from 'react-router-dom';
import Page, { Intro } from '@/components/shared/Page';
import PhoneLink from '@/components/shared/PhoneLink';

const site = 'https://www.fuzedflow.com';

export default function Security() {
  const schema = [{
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
      { '@type': 'ListItem', position: 2, name: 'Trust & security', item: `${site}/security` },
    ],
  }];

  return <Page
    title="Fuzed Flow trust, security and data handling"
    description="Review how Fuzed Flow handles company access, payments, AI requests, service providers, shared links and responsible use."
    path="/security"
    schema={schema}
  >
    <div className="ff-shell">
      <Intro
        eyebrow="Trust & security"
        title="Know where your information goes."
        description="Fuzed Flow uses company-based access controls, encrypted connections and established service providers. This page explains the practical safeguards and the choices your team still controls."
      />

      <section className="ff-section">
        <div className="ff-card-grid">
          <article className="ff-card"><h2>Company access</h2><p>Authenticated membership, company-based database restrictions, roles and project permissions are used to limit access to workspace records.</p></article>
          <article className="ff-card"><h2>Payments</h2><p>Stripe processes subscription and connected customer payments. Fuzed Flow does not store full card numbers or card security codes in its application database.</p></article>
          <article className="ff-card"><h2>AI by choice</h2><p>AI Rewrite sends the selected field text to OpenAI only when an eligible user chooses the action. Review every result before saving or sending.</p></article>
          <article className="ff-card"><h2>Shared links</h2><p>Your team chooses which quotes, invoices, updates, closeouts and contractor documents to share. Review recipients and permissions before sending.</p></article>
          <article className="ff-card"><h2>Service providers</h2><p>Supabase, Vercel, Stripe, Resend, Twilio, OpenAI and GitHub support specific hosting, database, payment, communication, AI and development functions.</p></article>
          <article className="ff-card"><h2>Responsible limitations</h2><p>No online service can guarantee complete security. Fuzed Flow does not claim offline field sync, GPS time verification, payroll processing or production QuickBooks sync.</p></article>
        </div>
      </section>

      <section className="ff-example">
        <h2>Your team remains part of the security model.</h2>
        <ul className="ff-resource-list">
          <li>Use individual accounts and remove access when a team member leaves.</li>
          <li>Confirm recipients before sending documents, payment links or portal links.</li>
          <li>Do not place passwords, payment-card data or unnecessary sensitive information in notes or AI requests.</li>
          <li>Export records you need before cancelling or requesting workspace deletion.</li>
        </ul>
      </section>

      <section className="ff-section">
        <h2>Privacy, terms and security questions</h2>
        <p>Read the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms &amp; Conditions</Link> for detailed provider, international-processing, retention and user-responsibility information.</p>
        <p className="mt-4">To report a suspected security issue, call <PhoneLink className="font-bold underline underline-offset-4" /> or use the <Link to="/contact#contact">contact form</Link>. Do not send passwords or payment-card details.</p>
      </section>
    </div>
  </Page>;
}
