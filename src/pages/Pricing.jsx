import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '@/data/plans';
import Page, { Intro } from '@/components/shared/Page';

export function PricingCards() {
  const [annual, setAnnual] = useState(false);
  return <>
    <div className="ff-billing-toggle" role="group" aria-label="Billing period">
      <button aria-pressed={!annual} onClick={() => setAnnual(false)}>Monthly</button>
      <button aria-pressed={annual} onClick={() => setAnnual(true)}>Annual</button>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map(plan => <article key={plan.id} className={`ff-price-card ${plan.id === 'professional' ? 'ff-price-featured' : ''}`}>
        <p className="ff-eyebrow">{plan.id === 'professional' ? 'For growing teams' : 'Your workspace'}</p>
        <h3>{plan.name}</h3>
        <p className="ff-price">${annual ? plan.annual / 12 : plan.monthly}<span> USD/month</span></p>
        <p className="ff-price-billing">{annual ? `$${plan.annual.toLocaleString('en-US')} USD billed annually` : `$${plan.monthly} USD billed monthly`}</p>
        <p className="mt-5 font-bold">{plan.users} {plan.users === 1 ? 'user' : 'users'} included · {plan.projects}</p>
        <ul className="ff-check-list">{plan.includes.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <a className="ff-button" href={`https://app.fuzedflow.com/signup?plan=${annual ? plan.annualId : plan.monthlyId}`} data-event="trial_start" data-plan={plan.id} data-cycle={annual ? 'annual' : 'monthly'}>Start 14-day trial →</a>
      </article>)}
    </div>
    <p className="ff-pricing-note">Extra users: $29 USD/month each on monthly billing, or $348 USD/year each on annual billing. Applicable taxes are shown at checkout. Billing starts after the 14-day trial unless you cancel.</p>
  </>;
}

export default function Pricing() {
  const rows = [
    ['Included users', '1', '3', '10'],
    ['Active projects', '5', 'Unlimited', 'Unlimited'],
    ['Leads, clients, quotes, templates and invoicing', 'Included', 'Included', 'Included'],
    ['Client portal and project dashboard', 'Included', 'Included', 'Included'],
    ['Client updates, branded PDFs and portal publishing', 'Included', 'Included', 'Included'],
    ['Photo deficiency checklists and project closeouts', 'Included', 'Included', 'Included'],
    ['Quote activity and purchase order approvals', 'Included', 'Included', 'Included'],
    ['AI Rewrite with Undo in supported text fields', '—', 'Included', 'Included'],
    ['Employee portal, HR and time tracking', '—', 'Included', 'Included'],
    ['Change orders and advanced reports', '—', 'Included', 'Included'],
    ['Advanced permissions', '—', '—', 'Included'],
    ['Dedicated account manager and custom reporting', '—', '—', 'Included'],
  ];
  return <Page title="Pricing in USD: Starter, Professional and Business" description="Compare Fuzed Flow plans from $29 USD/month, including client updates and closeouts. Professional and Business add AI Rewrite. Start a 14-day trial." path="/pricing" schema={[{
    '@type': 'SoftwareApplication', name: 'Fuzed Flow', applicationCategory: 'BusinessApplication', operatingSystem: 'Web browser',
    offers: plans.map(plan => ({ '@type': 'Offer', name: plan.name, price: plan.monthly, priceCurrency: 'USD', url: 'https://www.fuzedflow.com/pricing', priceSpecification: { '@type': 'UnitPriceSpecification', price: plan.monthly, priceCurrency: 'USD', unitText: 'month' } })),
  }]}>
    <div className="ff-shell">
      <Intro eyebrow="Clear plans · USD billing" title="Choose the workspace for your crew." description="Keep clients informed and organize your project closeouts on every plan. Professional and Business add AI Rewrite and team workflows. Start with a 14-day trial." />
      <PricingCards />
      <section className="ff-section">
        <h2>Compare plans</h2>
        <div className="overflow-x-auto">
          <table className="ff-table">
            <thead><tr>{['Feature', 'Starter', 'Professional', 'Business'].map(name => <th scope="col" key={name}>{name}</th>)}</tr></thead>
            <tbody>{rows.map(([name, ...values]) => <tr key={name}><th scope="row">{name}</th>{values.map((value, i) => <td key={i}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p className="mt-5">AI Rewrite is available with an active Professional or Business subscription or trial, subject to user and company usage limits. Review the wording before saving or sending. <Link to="/features/ai-rewrite">See AI Rewrite and Undo →</Link></p>
        <p className="mt-5">Business account management and custom reporting are arranged with the Fuzed Flow team. Contact us about the setup and reporting support you need.</p>
      </section>
      <section className="ff-example">
        <h2>Need a larger setup?</h2>
        <p>Discuss user configurations, onboarding, training and support requirements with the team.</p>
        <a className="ff-button mt-5" href="/contact">Discuss an Enterprise plan →</a>
      </section>
    </div>
  </Page>;
}
