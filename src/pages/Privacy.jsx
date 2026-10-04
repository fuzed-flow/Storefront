import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Helmet>
        <title>Privacy Policy | Fuzed Flow</title>
        <meta name="description" content="Learn how Fuzed Flow collects, protects, and uses your personal and business data, including our cookie policy." />
        <link rel="canonical" href="https://www.fuzedflow.com/privacy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://www.fuzedflow.com/privacy",
            "description": "Privacy Policy outlining how Fuzed Flow collects, uses, and protects your data.",
            "publisher": {
              "@type": "Organization",
              "name": "Fuzed Flow",
              "url": "https://www.fuzedflow.com"
            }
          })}
        </script>
      </Helmet>

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-xl md:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Fuzed Flow Home">
            <img 
              src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-logo.png" 
              alt="Fuzed Flow Logo" 
              className="h-10 w-auto" 
            />
          </Link>
          <Button asChild variant="ghost" className="rounded-none font-bold">
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 border-b-4 border-primary pb-8">
          <h1 className="font-heading text-4xl uppercase leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-slate-600">The storefront uses first-party web analytics and performance measurement to understand page visits and improve the site. Conversion events record actions such as trial links, demo requests and resource downloads without including form contents. Contact details submitted in a form are used to respond to your request.</p>
          <p className="mt-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Last Updated: August 2026
          </p>
        </div>

        <div className="space-y-10 text-base leading-8 text-muted-foreground">
          <section>
            <p>Fuzed Flow is committed to protecting the personal information that we collect, use, and disclose in the course of providing you with our Service. This Privacy Policy describes how we collect, store, use, and disclose information about identifiable individuals.</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">1. Information We Collect</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Registration Data:</strong> We collect registration data such as your full name, email address, and business contact information to communicate with you about your account.</li>
              <li><strong>Financial Information:</strong> We collect payment credentials in order to provide services and allow Account Owners to pay for their subscriptions. If you use our payment processing features, your credit card and financial information is processed by a third-party payment provider (e.g., Stripe).</li>
              <li><strong>System Logs & Tracking:</strong> Our servers automatically record information created by your use of our Service, which may include your IP address, browser type, operating system, and geographic location to help us diagnose technical issues and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">2. How We Use Your Information</h2>
            <p className="mb-2">Fuzed Flow uses the Personal Information described above to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Provide, operate, maintain, and improve the Service.</li>
              <li>Facilitate account administration, billing, and authentication.</li>
              <li>Investigate, identify, mitigate, and prevent potential or actual fraud or unauthorized access to the Service.</li>
              <li>Monitor and analyze trends and usage in connection with the Service to generate aggregated and anonymized statistics.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">3. Sharing Personal Information</h2>
            <p className="mb-2"><strong>We do not sell your Personal Information to third parties.</strong> We only share your information in the following circumstances:</p>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Sub-Processors:</strong> We work with third-party service providers for cloud hosting, data storage, payment processing, and fraud prevention. These partners are contractually obligated to protect your data.</li>
              <li><strong>As Required by Law:</strong> We may disclose your Personal Information if we believe in good faith that such disclosure is necessary to satisfy any applicable law, regulation, legal process, or governmental request.</li>
              <li><strong>Business Transfers:</strong> If our business is acquired by a third-party, or if we go through a change of control, Personal Information may be transferred to the new controlling entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">4. Cookies and Tracking Technologies</h2>
            <p className="mb-2">We use cookies and similar tracking technologies to provide core functionality and maintain the security of our Service. Specifically, Fuzed Flow relies on essential cookies to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Maintain your active session and authenticate your account access.</li>
              <li>Process secure transactions via our payment providers.</li>
              <li>Remember your basic system preferences and route you to the correct environment.</li>
            </ul>
            <p className="mt-4">Because these cookies are strictly necessary to deliver the Service, they cannot be disabled in our systems. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent; however, if you do not accept essential cookies, you will not be able to log in or use the Fuzed Flow application.</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">5. Data Security and Retention</h2>
            <p>We have implemented administrative, technical, and physical measures designed to safeguard your Personal Information against theft, loss, and unauthorized access. We retain your Personal Information for as long as it remains necessary for the identified purpose for which we have collected it or as required by law.</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">6. Your Privacy Rights</h2>
            <p>Subject to applicable law, you have the right to access, rectify, correct inaccuracies in, and withdraw consent to the collection or processing of your Personal Information. You may withdraw your consent at any time; however, withdrawing consent may result in your inability to continue using the Service.</p>
          </section>
        </div>
      </main>
    </div>
  );
}