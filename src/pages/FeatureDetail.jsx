import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
  Users,
  BriefcaseBusiness,
  FileText,
  Layers3,
  CalendarDays,
  ClipboardCheck,
  Timer,
  Smartphone,
  FileCheck2,
  DollarSign,
  BarChart3,
  Landmark,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { features } from '@/data/features';
import Header from '@/components/shared/Header'; // Add this
import Footer from '@/components/shared/Footer'; // Add this

const APP_URL = 'https://app.fuzedflow.com';

const iconMap = {
  Users,
  BriefcaseBusiness,
  FileText,
  Layers3,
  CalendarDays,
  ClipboardCheck,
  Timer,
  Smartphone,
  FileCheck2,
  DollarSign,
  BarChart3,
  Landmark
};

export default function FeatureDetail() {
  const { slug } = useParams();
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    const found = features.find(f => f.slug === slug);
    setFeature(found || null);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!feature) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <Helmet>
          <title>Feature Not Found | Fuzed Flow</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="text-center">
          <h1 className="font-heading text-3xl uppercase">Feature Not Found</h1>
          <p className="mt-4 text-muted-foreground">The feature page you are looking for does not exist.</p>
          <Button asChild className="mt-6 rounded-none bg-primary text-primary-foreground">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[feature.iconName] || Users;
  const currentIndex = features.findIndex(f => f.slug === slug);
  const nextFeature = features[(currentIndex + 1) % features.length];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Helmet>
        {/* Dynamic Title & Meta Description */}
        <title>{`${feature.name} Construction Software | Fuzed Flow`}</title>
        <meta name="description" content={feature.tagline || feature.overview} />
        <link rel="canonical" href={`https://www.fuzedflow.com/features/${feature.slug}`} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${feature.name} | Fuzed Flow Construction Software`} />
        <meta property="og:description" content={feature.tagline || feature.overview} />
        <meta property="og:url" content={`https://www.fuzedflow.com/features/${feature.slug}`} />
        <meta property="og:type" content="website" />

        {/* Dynamic Schema Graph: BreadcrumbList, ItemPage & HowTo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.fuzedflow.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Features",
                    "item": "https://www.fuzedflow.com/#features"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": feature.name,
                    "item": `https://www.fuzedflow.com/features/${feature.slug}`
                  }
                ]
              },
              {
                "@type": "ItemPage",
                "@id": `https://www.fuzedflow.com/features/${feature.slug}`,
                "url": `https://www.fuzedflow.com/features/${feature.slug}`,
                "name": `${feature.name} for Construction Contractors`,
                "description": feature.overview,
                "isPartOf": {
                  "@type": "SoftwareApplication",
                  "name": "Fuzed Flow",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, iOS, Android",
                  "url": "https://www.fuzedflow.com"
                }
              },
              {
                "@type": "HowTo",
                "name": `How to use ${feature.name} in Fuzed Flow`,
                "description": feature.tagline,
                "step": feature.howItWorks.map((stepText, index) => ({
                  "@type": "HowToStep",
                  "position": index + 1,
                  "text": stepText
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/40 px-4 py-4 md:px-6">
          <div className="mx-auto flex max-w-5xl items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/#features" className="hover:text-foreground">Features</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-bold text-foreground">{feature.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] px-4 py-20 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border-2 border-foreground bg-primary shadow-[6px_6px_0_#111111]">
                <Icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Fuzed Flow Feature</p>
              <h1 className="font-heading text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">{feature.name}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{feature.tagline}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
                <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground shadow-[6px_6px_0_#111111] hover:bg-primary/90">
                  <Link to="/#demo">Book a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-2 border-foreground">
                  <a href={`${APP_URL}/signup`}>Start Free Trial</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-b border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Overview</p>
            <h2 className="font-heading text-2xl uppercase leading-tight md:text-4xl">What is {feature.name}?</h2>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">{feature.overview}</p>
            
            {feature.slug === 'crm' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-lead-tracking-crm.webp" alt="Fuzed Flow CRM — Clients table view" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'lead-management' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-sales-lead-tracker.webp" alt="Fuzed Flow Lead Management — Lead Tracker Kanban board" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'daily-logs' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-daily-site-report.webp" alt="Fuzed Flow Daily Logs — Project Notes table view" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'change-orders' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-change-order-management.webp" alt="Fuzed Flow Change Orders — Change Orders table view" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'expense-tracking' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-purchase-order-management.webp" alt="Fuzed Flow Expense Tracking — My Expenses table view" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'client-portal' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-app-client-portal.webp" alt="Fuzed Flow Client Portal dashboard" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'estimating' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-estimating-software-quote-builder.webp" alt="Fuzed Flow Estimating — Quote Builder interface" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'scheduling' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-project-scheduling-timeline.webp" alt="Fuzed Flow Scheduling — Projects timeline view" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'project-management' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-project-management-workspace.webp" alt="Fuzed Flow Project Management — Active projects dashboard" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'invoicing' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-invoicing-and-billing-software.webp" alt="Fuzed Flow Invoicing — Invoices & Payments dashboard" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'time-tracking' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-crew-time-tracking-timesheets.webp" alt="Fuzed Flow Time Tracking — My Time Sheets dashboard" className="w-full" loading="lazy" />
              </motion.div>
            )}
            
            {/* NEW FEATURES BELOW */}
            {feature.slug === 'smart-templates' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/professional-quote-templates-software.webp" alt="Fuzed Flow Smart Templates" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'purchase-orders' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-purchase-order-management.webp" alt="Fuzed Flow Purchase Orders" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'inventory-management' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-inventory-tracking-system.webp" alt="Fuzed Flow Inventory Management" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'employee-portal' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/field-employee-management-portal.webp" alt="Fuzed Flow Employee Portal" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'hr-management' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/trade-business-hr-management.webp" alt="Fuzed Flow HR Management" className="w-full" loading="lazy" />
              </motion.div>
            )}
            {feature.slug === 'reporting' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 border border-border shadow-[8px_8px_0_hsl(var(--primary))]">
                <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-company-reporting-analysis.webp" alt="Fuzed Flow Reporting — Reports & Analytics dashboard" className="w-full" loading="lazy" />
              </motion.div>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="border-b border-border bg-muted/50 px-4 py-20 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Benefits</p>
              <h2 className="font-heading text-2xl uppercase leading-tight md:text-4xl">Why It Matters</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {feature.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-border border-t-primary border-t-4 bg-background p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-primary"><TrendingUp className="h-5 w-5 text-primary-foreground" /></div>
                    <h3 className="font-heading text-lg uppercase">{benefit.title}</h3>
                  </div>
                  <p className="leading-7 text-muted-foreground">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-b border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">How It Works</p>
              <h2 className="font-heading text-2xl uppercase leading-tight md:text-4xl">Step by Step</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {feature.howItWorks.map((step, index) => (
                <div key={index} className="relative border border-border bg-background p-6">
                  <span className="text-xs font-black text-primary">STEP {index + 1}</span>
                  <p className="mt-4 leading-7">{step}</p>
                  {index < feature.howItWorks.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-6 w-6 bg-background text-primary lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-b border-border bg-foreground px-4 py-20 text-background md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Capabilities</p>
              <h2 className="font-heading text-2xl uppercase leading-tight md:text-4xl">Everything Included</h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/60">A complete toolkit built specifically for construction workflows.</p>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {feature.capabilities.map((cap, index) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-3 border border-white/15 bg-white/5 p-4"
                >
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-bold">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="border-b border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Connected Workflow</p>
            <h2 className="font-heading text-2xl uppercase leading-tight md:text-4xl">Works Together With</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{feature.name} connects seamlessly with the rest of the Fuzed Flow platform, so data flows automatically between modules.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {feature.integrations.map(int => {
                const intFeature = features.find(f => f.name === int);
                return (
                  <Link
                    key={int}
                    to={intFeature ? `/features/${intFeature.slug}` : '/#features'}
                    className="inline-flex items-center gap-2 border border-border bg-background px-4 py-3 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="font-bold text-sm">{int}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary px-4 py-20 text-primary-foreground md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ShieldCheck className="mx-auto mb-6 h-12 w-12" />
            <h2 className="font-heading text-3xl uppercase leading-tight md:text-5xl">Put {feature.name} to Work</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">See how Fuzed Flow's {feature.name} can save you time and grow your construction business.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Button asChild size="lg" className="rounded-none bg-foreground text-background shadow-[6px_6px_0_rgba(0,0,0,0.2)] hover:bg-foreground/90">
                <Link to="/#demo">Book a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={`${APP_URL}/signup`}>Start Free Trial</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Next Feature */}
        <section className="border-t border-border bg-muted/40 px-4 py-10 md:px-6">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <Link to={`/features/${nextFeature.slug}`} className="flex items-center gap-3 border border-border bg-background px-5 py-3 transition hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Next Feature</p>
                <p className="font-heading text-sm uppercase">{nextFeature.name}</p>
              </div>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}