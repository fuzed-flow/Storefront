import React from 'react';
import { Link } from 'react-router-dom';
import Page, { Intro, TrialCTA } from '@/components/shared/Page';

const site = 'https://www.fuzedflow.com';

export default function CompareSpreadsheets() {
  const schema = [{
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
      { '@type': 'ListItem', position: 2, name: 'Fuzed Flow vs spreadsheets', item: `${site}/compare/spreadsheets` },
    ],
  }];
  const rows = [
    ['Client and job context', 'Usually separated across files, folders and inboxes', 'Connected lead, client, quote, project and invoice records'],
    ['Approvals', 'Manual follow-up and status columns', 'Quote activity plus change-order and purchase-order approval workflows'],
    ['Client communication', 'Copied into email or separate documents', 'Published updates, branded PDFs and client portal access'],
    ['Closeout', 'Generic list with separately stored photos', 'Photo deficiency items, owners, due dates and status'],
    ['Payments', 'Manually reconciled references', 'Stripe payment links, recorded balances and receipts'],
    ['Team access', 'File permissions and duplicate copies', 'Plan-based users, roles and focused portals'],
  ];

  return <Page
    title="Fuzed Flow vs contractor spreadsheets"
    description="Compare disconnected contractor spreadsheets with a connected workflow for leads, quotes, projects, client updates, invoices and closeouts."
    path="/compare/spreadsheets"
    schema={schema}
  >
    <div className="ff-shell">
      <Intro
        eyebrow="Connected workflow comparison"
        title="When the spreadsheet stops telling the whole job story."
        description="Spreadsheets remain useful for flexible calculations and exports. Fuzed Flow adds connected records, controlled client views and repeatable actions around the job."
      />
      <section className="ff-section">
        <h2>What changes in a connected workspace</h2>
        <div className="overflow-x-auto hidden md:block">
          <table className="ff-table"><thead><tr><th scope="col">Workflow</th><th scope="col">Typical spreadsheet process</th><th scope="col">Fuzed Flow</th></tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((value,index)=>index===0?<th scope="row" key={value}>{value}</th>:<td key={value}>{value}</td>)}</tr>)}</tbody></table>
        </div>
        <div className="ff-mobile-comparison md:hidden">{rows.map(([name,sheet,flow])=><article key={name}><h3>{name}</h3><p><strong>Spreadsheet:</strong> {sheet}</p><p><strong>Fuzed Flow:</strong> {flow}</p></article>)}</div>
      </section>
      <section className="ff-example"><h2>Keep spreadsheets where they still help.</h2><p>Fuzed Flow supports selected CSV imports and report exports. It does not claim to replace every accounting, payroll or custom calculation tool. Review the current <Link to="/integrations">integration and migration status</Link> before planning a move.</p></section>
      <div className="ff-cta-strip"><div><h2>Use a real job for the comparison.</h2><p>Bring your current process to a demo or start with the plan that fits your crew.</p></div><TrialCTA /></div>
    </div>
  </Page>;
}
