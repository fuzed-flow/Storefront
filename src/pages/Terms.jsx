import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Helmet>
        <title>Terms of Service | Fuzed Flow</title>
        <meta name="description" content="Read the Terms of Service and user agreement for Fuzed Flow construction management software." />
        <link rel="canonical" href="https://www.fuzedflow.com/terms" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "url": "https://www.fuzedflow.com/terms",
            "description": "Terms of Service and user agreement for Fuzed Flow construction software.",
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
          <h1 className="font-heading text-4xl uppercase leading-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Last Updated: August 2026
          </p>
        </div>

        <div className="space-y-10 text-base leading-8 text-muted-foreground">
          <section>
            <p><strong>PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY.</strong> By accessing, browsing, and using this website, our mobile application, and our services (collectively, the "Service"), you indicate that you have read and accept these Terms of Service which constitutes a binding legal agreement. You must be at least the age of majority in your jurisdiction of residence to use the Service.</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">1. The Service and Registration</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Account Ownership:</strong> If you register for the Service on behalf of a business organization, that business organization will be the legal and beneficial account owner (the "Account Owner"). The Account Owner is responsible for all activities that occur under their account, including the actions of authorized employees.</li>
              <li><strong>Accuracy:</strong> You must provide your full legal name, a valid email address, and any other information requested in order to complete the signup process.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">2. Fees, Payments, and Cancellations</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Free Trial & Automatic Renewal:</strong> If you sign up for a free trial and do not cancel before the end of the trial period, your subscription will automatically commence and you will be billed starting on the first day following the trial. Your subscription will continue indefinitely and automatically renew until terminated.</li>
              <li><strong>No Refunds:</strong> The Service is billed in advance on a monthly or annual basis and fees are non-refundable. There will be no refunds or credits for partial months of service, upgrade or downgrade refunds, or refunds for months unused with an open account.</li>
              <li><strong>Cancellations:</strong> You are solely responsible for properly canceling your account by logging in and utilizing the cancellation features within your account settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">3. User Content and Acceptable Use</h2>
            <p className="mb-2">You are entirely responsible for all data, text, photographs, and materials you upload to the Service ("User Content"). You agree not to use the Service to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Upload material that is unlawful, defamatory, invasive of another's privacy, or infringes on any intellectual property rights.</li>
              <li>Transmit malicious code, viruses, or any software designed to interrupt or destroy telecommunications equipment.</li>
              <li>Transmit unsolicited or unauthorized advertising, spam, or chain letters.</li>
              <li>Circumvent, reverse engineer, or attempt to access content through means not intentionally made available through the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">4. Marketing Materials and Software Variations</h2>
            <p className="mb-2">Any screenshots, videos, diagrams, or interface designs displayed on the Fuzed Flow marketing website are for promotional and illustrative purposes only. The actual Service interface, available features, and visual layout you experience within the application may vary as we continuously update, optimize, and expand our software.</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">5. Disclaimers and Limitation of Liability</h2>
            <p className="mb-2">THE SERVICE IS PROVIDED "AS IS" AND FUZED FLOW DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. UNDER NO CIRCUMSTANCES SHALL FUZED FLOW BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM YOUR USE OF THE SERVICE.</p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl uppercase text-foreground">6. Dispute Resolution and Arbitration</h2>
            <p><strong>PLEASE READ CAREFULLY:</strong> You agree that any dispute or claim relating in any way to your access or use of the Service will be resolved by binding arbitration, rather than in court. ALL CLAIMS AND DISPUTES MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS. YOU HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY.</p>
          </section>
        </div>
      </main>
    </div>
  );
}