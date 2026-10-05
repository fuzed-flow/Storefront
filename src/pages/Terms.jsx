import React from 'react';
import LegalPage from '@/components/shared/LegalPage';

const sections = [
  {
    id: 'agreement',
    title: 'Your agreement with Fuzed Flow',
    content: <>
      <p>These Terms &amp; Conditions ("Terms") govern your account and use of the Fuzed Flow subscription service, related portals and www.fuzedflow.com (the "Service"). "Fuzed Flow", "we", "us" and "our" refer to the provider of the Service. By creating an account, purchasing a subscription or using the authenticated Service, you agree to these Terms. If you act for a business, you confirm you have authority to bind that business.</p>
      <p>Fuzed Flow is intended for contractors and trade businesses. You must be at least the age of majority where you live and authorized to use the account. The Service is offered in English to businesses in English-speaking countries worldwide, including Canada, the United States, the United Kingdom, Ireland, Australia and New Zealand, subject to legal and provider restrictions.</p>
      <p>A separate written agreement expressly agreed with us may contain additional or overriding terms. Our <a href="/privacy">Privacy Policy</a> explains how personal information is processed. Accepting these Terms is not consent to every optional use of personal information.</p>
    </>,
  },
  {
    id: 'accounts',
    title: 'Accounts, access and plan limits',
    content: <>
      <p>The subscribing business is the account owner and is responsible for accurate registration and billing information, authorized users, access permissions and activity in its workspace. Keep credentials secure, remove access when someone leaves, and tell us promptly about suspected unauthorized use.</p>
      <p>Your subscription provides access to the features, users, active project allowance and other limits of the plan you choose. Paid add-ons and usage limits apply as displayed in the relevant plan or billing screen. Do not bypass plan, permission, security or AI usage limits.</p>
      <p>Roles and shared links affect who can view or act on records. Review recipients and permissions before sharing a quote, invoice, project update, approval, closeout or portal link.</p>
    </>,
  },
  {
    id: 'billing',
    title: 'Prices, billing currency and taxes',
    content: <>
      <p>Current subscription prices and plan terms are shown on our <a href="/pricing">pricing page</a> and at checkout. Subscription charges are in <strong>United States dollars (USD)</strong> unless a different currency is expressly displayed at checkout. Monthly or annual billing, the amount charged and any add-on fees are shown before you subscribe. Your bank or payment provider may apply conversion or foreign transaction charges.</p>
      <p>Applicable GST/HST, VAT, sales tax and other taxes may be added as shown at checkout or on an invoice. Having a billing address outside Canada does <strong>not</strong> automatically make a subscription tax-free. Tax treatment depends on applicable rules, your location and any valid tax information or exemption. Provide accurate billing and tax details.</p>
      <p>Stripe processes subscription payments. You authorize the recurring charges and any agreed add-ons for your chosen billing cycle. If a payment fails, access may be restricted or suspended, subject to applicable notice requirements. A future price change must be communicated before it applies to a renewal where required; these Terms do not by themselves change an existing subscription price.</p>
    </>,
  },
  {
    id: 'trials',
    title: '14-day trials, renewal and referral offers',
    content: <>
      <p>The current standard trial is <strong>14 days</strong> as shown at checkout. Unless you cancel before the trial ends, your subscription begins paid recurring billing when the trial ends, subject to any valid promotion applied at checkout. A subscription automatically renews for its selected monthly or annual period until cancelled.</p>
      <p>Current first-month-free referral offers are for eligible new subscribers to <strong>monthly Starter, Professional or Business plans</strong>. When accepted at checkout, the existing 14-day trial is followed by the first monthly billing period free, then normal monthly pricing. The offers apply to monthly subscriptions and preserve the existing 14-day trial. Eligibility, application and any other displayed promotion conditions must be satisfied.</p>
      <p>Check the trial end, promotion and recurring amount before completing checkout. A promotional discount does not expand plan entitlements or include additional paid users or separately charged services unless expressly stated.</p>
    </>,
  },
  {
    id: 'cancellation',
    title: 'Cancellation, refunds and data',
    content: <>
      <p>Manage or cancel your subscription through the billing management features in the app. If you cannot access them, contact <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a> for assistance. Check the confirmation and effective cancellation date. To avoid the next recurring charge, cancel before the renewal date; for a trial, cancel before its end.</p>
      <p>Fees are billed in advance. Except where required by law or expressly agreed by us, we do not provide refunds or credits for unused time or a change of mind. This policy does not limit statutory refunds, cooling-off rights or remedies available under applicable consumer law.</p>
      <p>Cancellation of a subscription, deletion of a user and deletion of a business workspace are separate actions. Export records you need and ask support about export or deletion assistance. Retention, backups and any records we must keep are addressed in the <a href="/privacy#retention">Privacy Policy</a>.</p>
    </>,
  },
  {
    id: 'content',
    title: 'Your data, documents and business responsibilities',
    content: <>
      <p>You retain your rights in the records, text, photographs, files and other content you provide ("Customer Content"). You give us the permissions needed to host, process, transmit and display that content to supply the Service and carry out your instructions, including selected communications, payments and AI requests.</p>
      <p>You are responsible for having the authority and lawful basis to upload customer, employee and contractor information, providing required privacy notices, and selecting appropriate recipients. Obtain any permissions required for messages, photographs, employment records and other personal information.</p>
      <p>Check quotes, prices, measurements, tax calculations, payment status, schedules, approvals, signatures and closeout records before acting on them. Fuzed Flow records and supports workflows; it does not perform your building work, inspect a site, provide professional tax or legal advice, or guarantee that a document is legally sufficient in every jurisdiction. A recorded approval, delivered message or completed checklist is not a guarantee of a signed contract, regulatory compliance or payment.</p>
      <p>The service's regional settings do not make it a certified local payroll, accounting or regulatory system. You remain responsible for your business's employment, tax, construction, messaging and recordkeeping obligations.</p>
    </>,
  },
  {
    id: 'ai',
    title: 'AI features and AI-assisted development',
    content: <>
      <p>Where your plan and permissions allow, AI Help and AI Rewrite use OpenAI to assist with app guidance or wording. Requests and relevant context are processed as described in our <a href="/privacy#ai">Privacy Policy</a>. Do not submit content you are not authorized to share with the relevant provider.</p>
      <p>AI output can be inaccurate, incomplete or inappropriate. Review facts, names, amounts, dates, tone and commitments before saving, sending or relying on it. AI output does not itself approve work, accept a contract, make a professional decision or confirm legal compliance. Usage limits apply.</p>
      <p>We also use OpenAI's ChatGPT and connected plugins, apps or integrations to assist our team's development, testing, maintenance and support. That use does not create a contract between you and OpenAI or transfer our responsibility for operating Fuzed Flow. Connected tools and providers may have their own terms and data practices.</p>
    </>,
  },
  {
    id: 'integrations',
    title: 'Integrations, payments and communications',
    content: <>
      <p>Features using Stripe, Supabase, Vercel, Resend, Twilio, OpenAI or another connected provider depend on that provider's availability and relevant terms. Connecting your own payment account or another service may require a separate agreement, verification, fees or permissions. Not all integrations are available in every country or on every plan. See our <a href="/integrations">current integration status</a>.</p>
      <p>Your business is responsible for its customer transactions, refunds, disputes, payout account and communications. A customer's payment to your business is separate from your Fuzed Flow subscription. Payment processing and payout timing are subject to the relevant provider's rules.</p>
      <p>You choose message recipients and must comply with applicable anti-spam, marketing-consent and messaging requirements. Delivery can fail or be delayed; a send action is not proof that someone received or accepted a document. Disconnecting an integration does not necessarily remove records already lawfully held by that provider.</p>
    </>,
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use and intellectual property',
    content: <>
      <p>Do not use the Service to break the law, infringe others' rights, send unauthorized messages, upload malicious code, harass others, interfere with operation, access another company's information, or bypass authentication, permissions or plan limits. Do not reverse engineer or misuse the Service except where applicable law expressly permits it.</p>
      <p>Fuzed Flow and its licensors retain rights in the software, service design, trademarks and original materials we provide. Your subscription grants permission to use the Service for your business during the applicable subscription; it does not transfer ownership of the software or give you permission to resell access without our agreement. Your Customer Content remains yours.</p>
    </>,
  },
  {
    id: 'availability',
    title: 'Availability, changes and suspension',
    content: <>
      <p>We maintain and develop the Service, but interruptions can occur for maintenance, faults, third-party outages or events outside our reasonable control. Screenshots and worked examples are illustrative; they do not promise that every screen or feature will be identical to an example. Available features are described by the current plan and app.</p>
      <p>We may restrict or suspend access where reasonably needed to address unpaid fees, a material breach, unlawful use or a security threat. Where practical and legally required, we provide notice and an opportunity to resolve the issue. Urgent security or legal action may require immediate restriction. Contact support for help resolving an access issue or retrieving records where permitted.</p>
      <p>We publish updated Terms with a revision date. Material changes to your contractual terms will be notified as required by law before they apply. If a change requires separate agreement or consent, posting a new page alone is not a substitute.</p>
    </>,
  },
  {
    id: 'rights',
    title: 'Mandatory rights and limits of responsibility',
    content: <>
      <p><strong>Nothing in these Terms excludes or restricts a right, guarantee, remedy or liability that cannot lawfully be excluded or restricted.</strong> This includes applicable consumer protections in Canada, the United States, the United Kingdom, Ireland / the EEA, Australia, New Zealand and other places where the Service is offered. Business use does not automatically remove every statutory protection.</p>
      <p>Subject to those mandatory rights, we do not guarantee uninterrupted or error-free operation, a particular business outcome, or the accuracy of customer-entered or AI-generated information. To the extent permitted by applicable law, we exclude responsibility for indirect or consequential losses such as lost profits arising from use of the Service. This does not exclude liability for fraud, wilful misconduct, gross negligence or any other liability that applicable law requires us to retain.</p>
      <p>If Australian Consumer Law applies, statutory consumer guarantees and the remedies for a service failure remain available. If UK, Irish or other applicable law provides cancellation, digital-service or unfair-contract protections, those protections also remain available. Any term inconsistent with a mandatory protection applies only to the extent lawful; the remaining Terms continue to apply.</p>
    </>,
  },
  {
    id: 'disputes',
    title: 'Questions and disputes',
    content: <>
      <p>Contact <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a> with service, billing or contractual concerns so we can try to resolve them. Include the account or company concerned and a description of the issue; do not send a password or payment card details.</p>
      <p>If a dispute cannot be resolved, the courts, law and complaint procedures with jurisdiction under applicable law remain available. These Terms do not impose mandatory arbitration or require you to waive a statutory right to bring a claim, use an applicable collective procedure, contact a regulator or seek remedies in a court available to you under mandatory local law.</p>
    </>,
  },
];

export default function Terms() {
  return <LegalPage
    title="Terms & Conditions"
    description="Fuzed Flow subscription terms covering USD billing, 14-day trials, monthly referral offers, AI features, integrations and mandatory local rights."
    path="/terms"
    introduction="The terms for using Fuzed Flow, managing your subscription and working responsibly with your business records."
    sections={sections}
    related={{ path: '/privacy', label: 'Read Privacy Policy' }}
  />;
}
