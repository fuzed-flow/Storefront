import React from 'react';
import Page from '@/components/shared/Page';
import PhoneLink from '@/components/shared/PhoneLink';

const programs = [
  {
    id: 'propartner', name: 'ProPartner', audience: 'For accountants, bookkeepers & business advisors',
    reward: 'cash commission', referral: 'Your clients',
    description: 'Help your contractor clients get organized. Earn a cash commission when you introduce them to FuzedFlow.',
    image: 'fuzedflow-propartner-referral-program',
    alt: 'FuzedFlow ProPartner: earn 20% cash commission; your clients get 10% off their first annual subscription.',
    benefits: ['Earn 20% of first-year subscription revenue as cash commission.', 'Your clients get 10% off their first annual subscription.', 'FuzedFlow handles the demo, onboarding and support.'],
    fit: 'Accountants, bookkeepers, consultants and business coaches who work with contractors and trade businesses.',
  },
  {
    id: 'tradeconnect', name: 'TradeConnect', audience: 'For general contractors',
    reward: 'account credit', referral: 'Your subcontractors',
    description: 'Help the trades you trust run stronger businesses. Turn your subcontractor referrals into savings on your own subscription.',
    image: 'fuzedflow-tradeconnect-referral-program',
    alt: 'FuzedFlow TradeConnect: earn 20% account credit; your subcontractors get 10% off their first annual subscription.',
    benefits: ['Earn 20% of first-year subscription revenue as FuzedFlow account credit.', 'Your subcontractors get 10% off their first annual subscription.', 'Reduce your software costs while helping your trade network grow.'],
    fit: 'General contractors referring plumbers, electricians, painters, framers and other subcontractors.',
  },
];

function ProgramCard({ program }) {
  return <article className="ff-referral-card" aria-labelledby={`${program.id}-title`}>
    <img
      src={`/images/referrals/${program.image}.webp`}
      srcSet={`/images/referrals/${program.image}-640.webp 640w, /images/referrals/${program.image}.webp 1254w`}
      sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1240px) calc((100vw - 64px) / 2), 588px"
      width="1254" height="1254" loading="lazy" decoding="async" alt={program.alt}
    />
    <div className="ff-referral-card-body">
      <p className="ff-eyebrow">{program.audience}</p>
      <h2 id={`${program.id}-title`}>FuzedFlow <span>{program.name}</span></h2>
      <p className="ff-referral-description">{program.description}</p>
      <div className="ff-referral-reward"><strong>20%</strong><span>{program.reward}<small>of first-year subscription revenue</small></span></div>
      <p className="ff-referral-discount">{program.referral} get <strong>10% off</strong> their first annual subscription.</p>
      <ul className="ff-check-list">{program.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
      <p className="ff-referral-fit"><strong>A good fit for</strong>{program.fit}</p>
      <a className="ff-button" href={`/contact?program=${program.id}#contact`} data-event={`referral_${program.id}_enquiry`}>Ask about {program.name}<span aria-hidden="true"> →</span></a>
    </div>
  </article>;
}

export default function Referrals() {
  return <Page title="Referral programs: ProPartner & TradeConnect" description="Refer contractors to FuzedFlow. ProPartner offers 20% cash commission; TradeConnect offers 20% account credit. Referrals get 10% off their first annual subscription." path="/referrals">
    <section className="ff-hero ff-referral-hero">
      <div className="ff-shell">
        <p className="ff-eyebrow">The FuzedFlow referral programs</p>
        <h1>Good connections.<br/><span>Shared rewards.</span></h1>
        <p className="ff-lead">You know the people. We help them manage the work. Introduce contractors to FuzedFlow and choose the program that fits your business.</p>
        <p className="ff-referral-hero-note">Two programs. A reward for you. A head start for them.</p>
      </div>
    </section>
    <section className="ff-shell ff-section" aria-label="Choose your referral program">
      <div className="ff-referral-grid">{programs.map(program => <ProgramCard key={program.id} program={program}/>)}</div>
    </section>
    <section className="ff-band">
      <div className="ff-shell ff-section">
        <p className="ff-eyebrow">Build your network. Share the value.</p>
        <h2>Make the introduction.<br/>We’ll take it from there.</h2>
        <ol className="ff-step-grid ff-referral-steps">
          <li><span aria-hidden="true">01</span><h3>Talk to our team</h3><p>Tell us about your business and the program you’re interested in. We’ll walk you through setup and how referrals are tracked.</p></li>
          <li><span aria-hidden="true">02</span><h3>Introduce your network</h3><p>Connect your contractor clients or subcontractors with FuzedFlow. They receive 10% off their first annual subscription.</p></li>
          <li><span aria-hidden="true">03</span><h3>Share in their success</h3><p>Earn 20% of first-year subscription revenue from successful referrals: cash commission with ProPartner or account credit with TradeConnect.</p></li>
        </ol>
        <p className="ff-referral-note">Our team will confirm eligibility, referral tracking and reward details with you before you get started.</p>
      </div>
    </section>
    <section className="ff-shell ff-section ff-referral-contact">
      <div><p className="ff-eyebrow">Let’s get connected</p><h2>Find your fit.</h2><p>We’ll help you choose the right program and answer your questions.</p></div>
      <div className="ff-referral-contact-actions"><a className="ff-button" href="/contact#contact" data-event="referral_contact">Talk to FuzedFlow <span aria-hidden="true">→</span></a><PhoneLink className="ff-referral-phone"/></div>
    </section>
  </Page>;
}
