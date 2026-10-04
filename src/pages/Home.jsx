import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Check, ShieldCheck, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

// Shared Layout Components
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

// Home Specific Components
import ROICalculator from '@/components/home/ROICalculator';
import ScreenshotsSection from '@/components/home/ScreenshotsSection';
import DashboardMockup from '@/components/home/DashboardMockup';
import AutomationsSection from '@/components/home/AutomationsSection';
import DemoForm from '@/components/forms/DemoForm';
import StandOutSection from '@/components/home/StandOutSection';

// Extracted Data Constants
import {
  trades,
  painPoints,
  featureGroups,
  steps,
  comparison,
  testimonials,
  DEFAULT_PLANS
} from '@/components/home/constants';

function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</p>}
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  
  const [isAnnual, setIsAnnual] = useState(true); // Defaults to Annual to show the best price

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-muted">
        <motion.div className="h-full bg-primary" style={{ scaleX: 1, transformOrigin: 'left' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2 }} />
      </div>

<Helmet>
  {/* Standard SEO */}
  <title>Fuzed Flow | Construction Business Management Software</title>
  <meta name="description" content="Fuzed Flow helps contractors manage leads, estimates, projects, schedules, crews, and invoices from one clean platform." />
  
  {/* 👇 NEW: The Canonical Link for the Homepage */}
  <link rel="canonical" href="https://www.fuzedflow.com/" />
  
  {/* 1. Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fuzed Flow",
      "url": "https://www.fuzedflow.com",
      "logo": "https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-logo.png",
      "description": "Run your entire construction business from one platform."
    })}
  </script>

  {/* 2. Software Application Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fuzed Flow",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web browser, iOS, Android",
      "description": "All-in-one construction business management software for estimating, scheduling, project management, and invoicing.",
      "url": "https://www.fuzedflow.com",
      "offers": {
        "@type": "Offer",
        "price": "29.00",
        "priceCurrency": "USD",
        "description": "Starter plan billed monthly."
      }
    })}
  </script>
</Helmet>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="top" className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px]">
          <div className="mx-auto max-w-7xl px-4 pt-16 md:px-6 md:pt-20">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center text-center">
              
              {/* 1. Sleeker, Modern Pill Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                <ShieldCheck className="h-4 w-4" /> Built by trades, for trades
              </div>
              
              {/* 2. Removed 'uppercase' for massive readability gains */}
              <h1 className="font-heading text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl max-w-4xl text-foreground">
                Run Your Entire Construction Business From One Platform
              </h1>
              
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Fuzed Flow helps contractors manage leads, estimates, projects, schedules, crews, invoices, and client communication — all in one clean place.
              </p>
              
              {/* 3. Replicated Header CTA Hierarchy */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto">
                <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-14 px-8 text-base">
                  <a href="/#pricing">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground/5 h-14 px-8 text-base">
                  <a href="#demo">Book a Demo</a>
                </Button>
              </div>
              <p className="mt-5 text-sm font-medium text-muted-foreground">14-day free trial. Cancel anytime.</p>
            </motion.div>
          </div>

          {/* 4. Mockup is now pulled higher up the screen */}
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-6 md:pb-24">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <DashboardMockup />
            </motion.div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="border-b border-border bg-primary px-4 py-12 md:px-6 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center gap-1 text-foreground">
              {Array.from({ length: 5 }).map((_, i) => <BadgeCheck key={i} className="h-6 w-6" />)}
            </div>
            <h2 className="font-heading text-2xl uppercase leading-tight md:text-4xl">
              “Fuzed Flow replaced multiple messy tools for us. We finally have clarity.”
            </h2>
            <p className="mt-6 font-black text-lg text-foreground">— Gary B., LBProjects</p>
          </div>
        </section>

        {/* SUPPORTED TRADES */}
        <section className="border-b border-border bg-muted/60 px-4 py-10 md:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="sr-only">Supported Trades</h2>
            <p className="mb-6 text-center text-sm font-black uppercase tracking-[0.28em]" aria-hidden="true">Built for Contractors</p>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-6">
              {trades.map(([label, Icon]) => <div key={label} className="bg-background p-5 text-center"><Icon className="mx-auto mb-3 h-7 w-7 text-primary" /><p className="text-sm font-bold">{label}</p></div>)}
            </div>
          </div>
        </section>

        <StandOutSection />

        {/* PAIN POINTS */}
        <section className="border-b border-border px-4 py-20 md:px-6" id="pain-points">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Still Running Your Business With Spreadsheets, Text Messages and Sticky Notes?" subtitle="Fuzed Flow centralizes your workflow so nothing slips through the cracks." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {painPoints.map(([title, text, Icon], index) => <motion.div key={title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group border border-border border-t-red-600 border-t-4 bg-background p-6 transition hover:border-t-primary hover:bg-foreground hover:text-background"><Icon className="mb-6 h-8 w-8 text-red-600 transition group-hover:text-primary" /><h3 className="font-heading text-xl uppercase">{title}</h3><p className="mt-3 leading-7 text-muted-foreground transition group-hover:text-white/70">{text}</p></motion.div>)}
            </div>
          </div>
        </section>

        {/* GROUPED FEATURES */}
        <section id="features" className="border-b border-border bg-muted/50 px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Everything Your Construction Business Needs" subtitle="From first call to final invoice, every workflow is connected and field-ready." />
            
            <div className="mt-16 space-y-12">
              {featureGroups.map((group) => (
                <div key={group.phase}>
                  <h3 className="mb-6 text-lg font-black uppercase tracking-[0.2em] text-primary">{group.phase}</h3>
                  <div className="grid gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-4">
                    {group.items.map(([title, text, Icon]) => {
                      // Dynamically generate the URL slug from the title (e.g., "Lead Management" -> "lead-management")
                      const featureSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                      
                      return (
                        <Link 
                          key={title} 
                          to={`/features/${featureSlug}`}
                          className="group block bg-background p-6 transition hover:bg-primary cursor-pointer"
                        >
                          <Icon className="mb-5 h-7 w-7" />
                          <h4 className="font-heading text-lg uppercase">{title}</h4>
                          <p className="mt-3 leading-7 text-muted-foreground transition group-hover:text-primary-foreground/80">
                            {text}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AutomationsSection />

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="border-b border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="How It Works" subtitle="A clean operating system for the way construction companies actually move work forward." />
            <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {steps.map((step, index) => <div key={step} className="relative border border-border bg-background p-5"><span className="text-xs font-black text-primary">STEP {index + 1}</span><p className="mt-4 font-heading text-sm uppercase md:text-lg">{step}</p>{index < steps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-7 w-7 bg-background text-primary lg:block" />}</div>)}
            </div>
          </div>
        </section>

        <ScreenshotsSection />

        {/* COMPARISON TABLE */}
        <section className="border-b border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Built Specifically for Construction Companies" />
            <div className="mt-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground md:hidden">
                ← Swipe to compare →
              </p>
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[500px] md:min-w-[720px] border-collapse text-left text-sm md:text-base">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="p-3 md:p-5">Feature</th>
                      <th className="bg-primary p-3 md:p-5 text-primary-foreground">Fuzed Flow</th>
                      <th className="p-3 md:p-5">Generic CRM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(feature => (
                      <tr key={feature} className="border-t border-border">
                        <td className="p-3 font-bold md:p-5">{feature}</td>
                        <td className="bg-primary/20 p-3 md:p-5"><Check className="h-5 w-5 text-foreground" /></td>
                        <td className="p-3 text-muted-foreground md:p-5"><X className="h-5 w-5 text-muted-foreground" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-b border-border bg-muted/50 px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Contractors Are Getting Organized" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:max-w-4xl mx-auto">
              {testimonials.map(([quote, name, role]) => <div key={quote} className="border border-border bg-background p-7 shadow-[8px_8px_0_hsl(var(--primary))]"><div className="mb-6 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <BadgeCheck key={i} className="h-5 w-5" />)}</div><p className="text-xl font-bold leading-8">“{quote}”</p><p className="mt-6 font-black">{name}</p><p className="text-sm text-muted-foreground">{role}</p></div>)}
            </div>
          </div>
        </section>

        <ROICalculator />

        {/* PRICING */}
        <section id="pricing" className="border-b border-border bg-muted/50 px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Simple Plans for Construction Teams" subtitle="Choose the operating system that matches your stage of growth. No hidden fees." />
            
            {/* 👇 NEW: The Monthly / Annual Toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-8 w-16 cursor-pointer border-2 border-foreground bg-background transition-colors focus:outline-none"
                role="switch"
                aria-checked={isAnnual}
              >
                <span
                  className={`inline-block h-6 w-6 transform bg-primary transition-transform ${
                    isAnnual ? 'translate-x-8' : 'translate-x-0.5'
                  } mt-0.5`}
                />
              </button>
              <span className={`text-sm font-bold flex items-center gap-2 transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annually 
                <span className="bg-primary/20 text-primary border border-primary px-2 py-0.5 text-xs uppercase tracking-wider">Save up to 25%</span>
              </span>
            </div>

            {/* 3-Column Grid for Standard Plans */}
            <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-3 items-stretch">
              {DEFAULT_PLANS.slice(0, 3).map((plan) => {
                
                const displayPrice = isAnnual ? plan.price : plan.monthlyPrice;
                const billingText = isAnnual
                  ? `Billed annually ($${plan.annualTotal.toLocaleString('en-US')} USD/year)`
                  : 'Billed monthly';
                const priceId = plan.priceIds[isAnnual ? 'annual' : 'monthly'];
                const checkoutLink = `https://app.fuzedflow.com/signup?plan=${priceId}`;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col bg-background ${plan.highlight ? 'border-4 border-primary shadow-[8px_8px_0_#111111] md:shadow-[16px_16px_0_#111111]' : 'border border-border'}`}
                  >
                    {plan.badge && (
                      <div className="bg-primary px-5 py-2 text-center text-xs font-black uppercase tracking-[0.18em] text-primary-foreground">
                        {plan.badge}
                      </div>
                    )}
                    <div className="p-5 md:p-7 flex flex-col flex-1">
                      <h3 className="font-heading text-2xl md:text-3xl uppercase">{plan.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                      
                      {/* Updated Dynamic Price Stacking */}
                      <div className="my-4 md:my-6 flex flex-col gap-1">
                        <div className="flex items-end gap-1">
                          <span className="font-heading text-4xl md:text-5xl">{displayPrice}</span>
                          <span className="mb-1 text-xl font-bold text-muted-foreground">/mo USD</span>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">{billingText}</span>
                      </div>

                      {plan.highlight && plan.proHighlights && (
                        <div className="mb-4 md:mb-6 border border-primary bg-primary/10 p-3 md:p-4 space-y-2">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-primary mb-3">Why Teams Choose Professional</p>
                          {plan.proHighlights.map(h => (
                            <div key={h} className="flex items-start gap-2">
                              <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-xs md:text-sm font-bold">{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <ul className="space-y-2 md:space-y-2.5 flex-1">
                        {plan.bullets.map(item => (
                          <li key={item.text} className={`flex items-start gap-2.5 text-xs md:text-sm ${item.included ? '' : 'text-muted-foreground'}`}>
                            {item.included
                              ? <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              : <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />}
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className={`mt-8 w-full rounded-none ${plan.highlight ? 'bg-primary text-primary-foreground shadow-[4px_4px_0_#111111] hover:bg-primary/90' : 'bg-foreground text-background hover:bg-foreground/90'}`}
                      >
                        {/* Dynamic Checkout Link Injected Here */}
                        <a href={checkoutLink}>{plan.cta} <ArrowRight className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Custom Plan Banner for Larger Teams */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 border border-border bg-background p-8 md:p-12 shadow-[8px_8px_0_hsl(var(--primary))] lg:mt-16"
            >
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="text-center md:text-left max-w-2xl">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Custom Plans</p>
                  <h3 className="font-heading text-3xl md:text-4xl uppercase">Have a larger team?</h3>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Let's build a custom plan. We offer custom user configurations, advanced API integrations, priority support, and hands-on onboarding for large-scale operations.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto shrink-0 rounded-none bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                >
                  <a href="tel:+18005550000">Contact Sales <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </motion.div>

            <p className="mt-12 text-center text-sm text-muted-foreground">All plans include a 14-day free trial. Cancel before your trial ends and you won't be charged.</p>
          </div>
        </section>

        {/* DEMO SECTION */}
        <section id="demo" className="border-b border-border bg-muted/50 px-4 py-20 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Book a Demo</p>
              <h2 className="font-heading text-4xl uppercase leading-tight md:text-5xl">See Fuzed Flow in Action</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Get a 1-on-1 walkthrough tailored specifically to your construction business. We'll show you exactly how to streamline your estimating, scheduling, and invoicing so you can stop doing admin work at night.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Custom tailored walkthrough for your trade',
                  'Live Q&A with a construction product expert',
                  'See real project and quote templates in action',
                  'Zero pressure, no commitment required',
                  'Cancel anytime during your trial'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold">
                    <Check className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><DemoForm /></div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}