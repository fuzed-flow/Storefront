import React from 'react';
import Page, { Intro, TrialCTA } from '@/components/shared/Page';

const integrations = [
  {
    name: 'Stripe invoice and quote deposit payments',
    status: 'Available',
    detail: 'Connect your company’s Stripe account to collect online payments and record confirmed balances.',
  },
  {
    name: 'Fuzed Flow subscription billing',
    status: 'Available',
    detail: 'USD plans, a 14-day trial and billing management through Stripe.',
  },
  {
    name: 'CSV migration: leads, clients and inventory',
    status: 'Available',
    detail: 'Import files using the column format shown in the relevant app screen.',
  },
  {
    name: 'Client update and closeout delivery',
    status: 'Available',
    detail: 'Send email with branded PDF attachments or text links from the app. Confirm recipient details and company sending setup.',
  },
  {
    name: 'AI Rewrite via OpenAI',
    status: 'Professional & Business',
    detail: 'Rewrite the text in supported fields when you choose the action. Usage limits apply; review the result before saving or sending.',
  },
  {
    name: 'Report CSV export',
    status: 'Available',
    detail: 'Download selected payment, expense, invoice tax or aging records.',
  },
  {
    name: 'QuickBooks',
    status: 'Coming soon / sandbox',
    detail: 'The app marks this coming soon. Current functions use sandbox endpoints.',
  },
  {
    name: 'Xero and Zapier',
    status: 'Not currently available',
    detail: 'Use supported file workflows while these connections remain unavailable.',
  },
  {
    name: 'External Google / Outlook calendar sync',
    status: 'Not currently available',
    detail: 'Use the app’s own scheduling and calendar views.',
  },
];

function IntegrationStatus({ status }) {
  return (
    <span className={`ff-integration-status${status === 'Available' ? ' ff-integration-status-available' : ''}`}>
      <span className="sr-only">Status: </span>{status}
    </span>
  );
}

export default function Integrations() {
  return (
    <Page
      title="Integrations and CSV migration"
      description="See which Fuzed Flow integrations work today: Stripe payments, subscription billing, CSV imports and exports, plus the status of QuickBooks and calendar connections."
      path="/integrations"
    >
      <div className="ff-shell ff-integrations">
        <Intro
          eyebrow="Connections with clear status"
          title="Know what connects today."
          description="Connect payments through Stripe and bring supported records across with CSV files. See which connections work today and which are previews or future requests."
        />

        <section className="ff-section ff-integration-list" aria-label="Integration availability">
          <ul className="ff-integration-cards md:hidden">
            {integrations.map(({ name, status, detail }) => (
              <li className="ff-integration-card" key={name}>
                <h2>{name}</h2>
                <IntegrationStatus status={status} />
                <p>{detail}</p>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <table className="ff-table ff-integrations-table">
              <caption className="sr-only">Fuzed Flow integration availability</caption>
              <thead>
                <tr>
                  <th scope="col">Connection</th>
                  <th scope="col">Status</th>
                  <th scope="col">What it does</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map(({ name, status, detail }) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td><IntegrationStatus status={status} /></td>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="ff-example">
          <h2>Start with a small migration</h2>
          <ol className="ff-resource-list ff-migration-steps">
            <li>Export a copy of your existing leads, contacts or stock list.</li>
            <li>Use the required headers from the matching Fuzed Flow import screen.</li>
            <li>Import a small sample and review names, amounts, units and duplicates.</li>
            <li>Bring in the remaining records after the sample is correct.</li>
          </ol>
          <p>File imports and exports are separate from continuous accounting or calendar synchronization.</p>
        </section>

        <section className="ff-section">
          <h2>Need a specific connection?</h2>
          <p className="ff-lead">Tell us the tool, records and workflow you want to connect so the team can discuss the scope with you.</p>
          <a className="ff-button ff-integration-contact mt-6" href="/contact">
            Discuss an integration<span aria-hidden="true"> →</span>
          </a>
        </section>

        <div className="ff-cta-strip">
          <h2>See how the connected job works.</h2>
          <TrialCTA />
        </div>
      </div>
    </Page>
  );
}
