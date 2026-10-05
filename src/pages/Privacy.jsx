import React from 'react';
import LegalPage from '@/components/shared/LegalPage';

const sections = [
  {
    id: 'scope',
    title: 'Who we are and who this policy covers',
    content: <>
      <p>Fuzed Flow ("we", "us" or "our") provides subscription software for contractors and trade businesses. This policy explains how we handle personal information through www.fuzedflow.com, app.fuzedflow.com, support, and the related client, employee and contractor portals.</p>
      <p>We offer the service in English to businesses in English-speaking countries worldwide, including Canada, the United States, the United Kingdom, Ireland, Australia and New Zealand, subject to applicable law and provider availability. Your privacy rights depend on the laws that apply to you; this policy does not replace those rights.</p>
      <p>We determine how account, billing, website and support information is used. For personal information a subscribing business puts into its workspace, such as customer and employee records, that business normally determines the purposes of processing and we handle the information to provide the service on its behalf. If your contractor or employer entered your information, contact that business about its records. We can help route a request.</p>
      <p>Contact our privacy team at <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a>. You do not need an account to make a privacy request.</p>
    </>,
  },
  {
    id: 'information',
    title: 'Information we collect and where it comes from',
    content: <>
      <ul>
        <li><strong>Account and business details:</strong> names, email addresses, telephone numbers, company details, account identifiers, roles, permissions and preferences supplied by you or your company administrator.</li>
        <li><strong>Workspace records:</strong> lead and customer contacts, site and billing addresses, quotes, invoices, change orders, files and photographs, project notes and schedules, tasks, time entries, expenses, employment details entered by your company, approvals, client updates and project closeout records.</li>
        <li><strong>Communications:</strong> demo and contact form details, support messages, email and SMS content and recipients, delivery events, and portal responses or approval records.</li>
        <li><strong>Billing and payment records:</strong> subscription and transaction references, billing addresses, tax details, payment status and related accounting records. Stripe processes payment credentials and connected-account verification information through its payment and onboarding services; we do not store full payment card numbers or card security codes in our application database.</li>
        <li><strong>Technical and usage information:</strong> IP addresses, browser and device information, access and security logs, page paths, general location derived from network information, performance measurements and events such as a trial-link click or resource download.</li>
        <li><strong>AI requests:</strong> text you submit for rewriting or help, relevant recent help conversation and the context needed to return an answer, as explained below.</li>
      </ul>
      <p>Information comes from you, your business and its authorized users, people responding to shared documents or portals, enabled service providers, and your browser or device. Provide only information you have the right to share. Avoid unnecessary sensitive information, passwords, payment credentials and government identifiers in free-text fields, support messages or AI requests.</p>
    </>,
  },
  {
    id: 'purposes',
    title: 'How and why we use information',
    content: <>
      <p>We use information to create and secure accounts, provide workspace and portal features, process subscription billing and payment records, deliver communications you request, respond to enquiries, operate selected AI features, investigate problems, prevent misuse and improve service reliability. We also keep records and respond to legal requests where required.</p>
      <p>Where UK or European data protection law applies and we determine the processing purpose, our legal bases are performing our agreement with you, meeting legal obligations, and legitimate interests such as securing and maintaining the service, answering business enquiries and understanding aggregate website use. We consider your interests and rights when relying on legitimate interests. Where processing requires consent, including any marketing or optional tracking that requires it, we obtain that consent separately; you can withdraw it.</p>
      <p>For workspace information we process on a business's behalf, the business is responsible for its lawful basis, notices and instructions. Providing required account or billing details is necessary to supply the relevant service; optional enquiry fields are marked as optional.</p>
    </>,
  },
  {
    id: 'ai',
    title: 'OpenAI features and ChatGPT development tools',
    content: <>
      <h3>AI features you choose in the app</h3>
      <p><strong>AI Rewrite</strong>, available on eligible Professional and Business plans, sends the text in the selected supported field to OpenAI to generate revised wording. The rewrite usage record contains operational details such as company and user identifiers, field category, character counts, status and timing; that usage record does not contain the submitted or rewritten text. Text you save in a quote, invoice, update or other document remains in that document.</p>
      <p><strong>AI Help</strong> sends your question and relevant recent conversation to OpenAI. It uses relevant help articles you are permitted to access to prepare an answer. The current page path helps select those articles. A help question may also be processed to find related guidance. Review what you type and avoid including customer details that are unnecessary for your question.</p>
      <p>OpenAI states that API inputs and outputs are not used to train its models by default, unless the API customer opts in. Provider security logs and other retention can still apply under OpenAI's terms and account settings. See <a href="https://developers.openai.com/api/docs/guides/your-data">OpenAI's API data controls</a>. We do not promise zero retention by the AI provider.</p>
      <h3 className="mt-6">ChatGPT, plugins and integrations used by our team</h3>
      <p>Our team uses OpenAI's ChatGPT and connected apps, plugins or integrations to help plan, develop, test, maintain and support Fuzed Flow. Depending on the permissions granted and the task, these tools may process source code, technical documentation, configuration, deployment information, diagnostic logs, and operational or account information needed to investigate an issue or administer the service.</p>
      <p>When personal information is needed for a development or support task, we limit its use to the task and reduce or redact it where practical. Connected providers receive the information needed for the operation their integration performs. Their terms and privacy practices also apply. ChatGPT's handling of development information depends on the product, account controls and connected service; the API statement above is not a blanket promise about every ChatGPT conversation or third-party plugin.</p>
      <p>Using Fuzed Flow does not connect your personal ChatGPT account or require you to install these development tools. AI assistance does not replace our responsibility for the service. You should check AI output before saving, sending, approving or relying on it.</p>
    </>,
  },
  {
    id: 'providers',
    title: 'Who receives information',
    content: <>
      <p><strong>We do not sell personal information or share it for cross-context behavioural advertising.</strong> We disclose information for the following service and operational purposes:</p>
      <ul>
        <li><strong>Your business and intended recipients:</strong> authorized workspace users, customers, employees, contractors and other recipients selected by your business. Information available to them depends on the relevant role, document, portal or sharing action.</li>
        <li><strong>Supabase:</strong> application database, authentication and file storage.</li>
        <li><strong>Vercel:</strong> website and application hosting, deployment, website analytics and performance measurement.</li>
        <li><strong>Stripe:</strong> subscription billing, online payments, connected-account onboarding, payment records and fraud prevention. Stripe also processes some information for its own legal and payment obligations.</li>
        <li><strong>Resend and Twilio:</strong> email and SMS recipients, message content and delivery information when those communications are used.</li>
        <li><strong>OpenAI:</strong> selected AI requests and the development or support information described above.</li>
        <li><strong>GitHub and connected development tools:</strong> source control, technical collaboration and the information required for authorized development operations.</li>
      </ul>
      <p>We may also disclose information to professional advisers, to comply with applicable law, to protect rights and security, or as part of a business transfer subject to appropriate confidentiality and applicable privacy requirements. An integration you enable may have its own processing purposes and privacy notice. Availability of the SaaS does not mean every payment or messaging feature is supported in every country.</p>
      <p>People with access to a shared document or portal link may see the information made available through that link. Choose recipients carefully and contact support if a link needs to be withdrawn.</p>
    </>,
  },
  {
    id: 'transfers',
    title: 'International processing and data location',
    content: <>
      <p>Our current primary application database is hosted in the United States. Our team and service providers may process information in Canada, the United States and other countries where they operate. These countries may have different privacy laws, and information may be accessible to authorities under their laws. We do not offer a general promise that information stays in your country.</p>
      <p>Where applicable law requires safeguards for an international transfer, we must use a permitted transfer arrangement. Depending on the provider and destination, this may involve a recognized adequacy decision, contractual protections such as standard contractual clauses and any required supplementary measures, or another lawful mechanism. Contact <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a> to ask about the arrangements applicable to your information and how to obtain details of relevant safeguards.</p>
      <p>If your business has particular data residency, employment or regulated-data requirements, contact us before uploading that information so we can establish whether the service is suitable.</p>
    </>,
  },
  {
    id: 'cookies',
    title: 'Cookies, browser storage and website analytics',
    content: <>
      <p>The app and payment services use browser storage or cookies needed for authentication, security and preferences. Blocking that storage can prevent sign-in or payment features from working. Your browser lets you control or remove stored information.</p>
      <p>The public storefront uses Vercel Web Analytics and Speed Insights for aggregate website use and performance. This can include page paths, referrers, browser and device information, approximate location, loading performance and events such as trial links, demo requests and downloads. Our custom conversion events do not include names, email addresses or form contents. Details you submit through a contact form are processed separately to answer your request.</p>
      <p>Vercel describes Web Analytics as using aggregate statistics without third-party cookies. See <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel's analytics privacy information</a>. We do not use these measurements for cross-site advertising. Any optional tracking requiring consent must be subject to a separate choice rather than treated as necessary just because you visit the site.</p>
    </>,
  },
  {
    id: 'retention',
    title: 'Security, retention and deletion',
    content: <>
      <p>We use access permissions, company-based database restrictions, encrypted connections and other safeguards designed to protect information. No online service can guarantee complete security. Protect your account, review authorized users and shared links, and report a suspected security issue to <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a>.</p>
      <p>We retain account and workspace information while needed to provide the service and meet the business's instructions. Retention also depends on the purpose of the record, account status, legal or accounting requirements, unresolved disputes, security needs and backup cycles. We remove or de-identify information when it is no longer needed for those purposes. Copies in backups may remain until those backups are replaced, and providers may have their own retention obligations.</p>
      <p>Subscription cancellation stops billing as confirmed in the billing portal; it is not automatically a request to delete every workspace or transaction record. Contact support for deletion or export assistance. A deletion request may be subject to legal retention requirements and the subscribing business's authority over its records. We explain relevant limitations when responding.</p>
    </>,
  },
  {
    id: 'rights',
    title: 'Your rights and how to exercise them',
    content: <>
      <p>Depending on your location, our role and applicable law, you may request access to your information, a copy of it, correction, deletion, portability or restriction of processing. You may withdraw consent where we rely on it, use an authorized agent where permitted, and complain to a relevant privacy regulator. Some laws also provide a right to appeal a declined request.</p>
      <p><strong>Your right to object:</strong> where applicable, you may object to processing based on legitimate interests and to direct marketing. Contact us to exercise this right. Withdrawing consent does not affect processing already lawfully carried out or records we must retain.</p>
      <ul>
        <li><strong>Canada:</strong> rights may arise under PIPEDA and applicable provincial privacy laws, including access, correction and withdrawal of consent where permitted. You may contact the Office of the Privacy Commissioner of Canada or the relevant provincial authority.</li>
        <li><strong>United Kingdom and Ireland / EEA:</strong> where UK GDPR or EU GDPR applies, rights may include access, rectification, erasure, restriction, objection and data portability. You may complain to the UK Information Commissioner's Office, Ireland's Data Protection Commission, or your local supervisory authority.</li>
        <li><strong>United States:</strong> applicable state laws may provide rights to know, access, correct, delete and obtain portable copies, and rights concerning sale, targeted advertising, certain profiling or sensitive information. We do not sell information or share it for cross-context behavioural advertising. We do not discriminate against you for exercising applicable rights.</li>
        <li><strong>Australia and New Zealand:</strong> applicable privacy laws may provide access, correction and complaint rights, including complaints to the Office of the Australian Information Commissioner or New Zealand's Office of the Privacy Commissioner.</li>
        <li><strong>Other countries:</strong> contact us about rights provided by your applicable local law. The countries listed here do not limit where eligible businesses can use the English-language service.</li>
      </ul>
      <p>Email <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a> with the subject "Privacy request" and tell us what you are requesting and which business or account is involved. We may ask for proportionate information to verify an access or deletion request. Please do not send a password or payment card details. We respond within the period required by applicable law and explain any permitted extension or refusal.</p>
      <p>If the information belongs to a business's customer or employment records, we may need to refer your request to that business or act on its instructions. You can still contact us for help. Marketing choices, account preferences and a business's operational messages are separate; contact the sender or support if you need help stopping a message.</p>
    </>,
  },
  {
    id: 'children',
    title: 'Children and sensitive information',
    content: <>
      <p>The service is intended for business use by adults authorized to act for their organization, not for children to open accounts. Do not knowingly submit children's information unless your business has a lawful reason and appropriate permissions. If you believe a child's information has been collected improperly, contact us.</p>
      <p>Do not use the service for regulated health records or other specially regulated information without first confirming suitability with us. An ordinary subscription does not establish that we have agreed to every sector-specific data requirement.</p>
    </>,
  },
  {
    id: 'changes',
    title: 'Policy changes and contact',
    content: <>
      <p>We update this policy as the service or our practices change and show the current revision date above. Where required, we provide notice of a material change and obtain any additional consent before using information for a new purpose that requires it. Continued use alone is not a substitute for consent where the law requires a separate choice.</p>
      <p>For privacy, international transfer, security or data-processing questions, contact <a href="mailto:support@fuzedflow.com">support@fuzedflow.com</a>. Our <a href="/terms">Terms &amp; Conditions</a> explain subscription and service responsibilities.</p>
    </>,
  },
];

export default function Privacy() {
  return <LegalPage
    title="Privacy Policy"
    description="How Fuzed Flow handles account and workspace data, international processing, OpenAI features, ChatGPT development tools and your privacy rights."
    path="/privacy"
    introduction="How we handle your information, which services help us provide Fuzed Flow, and the choices and rights available to you."
    sections={sections}
    related={{ path: '/terms', label: 'Read Terms & Conditions' }}
  />;
}
