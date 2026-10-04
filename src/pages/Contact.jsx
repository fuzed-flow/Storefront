import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, MessageSquareText, Mail, Phone, Map, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Helmet } from 'react-helmet-async'

// Import your Supabase client
import { supabase } from '@/lib/supabase';

// Update with your actual SaaS App URL
const APP_URL = 'https://app.fuzedflow.com';

// Notice the added '/' before the anchors so they route back to the home page!
const navItems = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' } 
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu state moved here

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            notes: formData.get('message'), 
            form_type: 'contact_inquiry',
            source: 'website_contact_page',
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      window.alert('Something went wrong sending your message. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
  <title>Contact Us | Fuzed Flow Support & Sales</title>
  <meta name="description" content="Get in touch with the Fuzed Flow team. We provide dedicated support and sales assistance for construction companies looking to streamline their business." />
  
  {/* The Canonical Link for the Contact Page */}
  <link rel="canonical" href="https://www.fuzedflow.com/contact" />
  
  {/* ContactPage, ContactPoint, and Local Address Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Fuzed Flow",
      "description": "Get in touch with the Fuzed Flow team for sales inquiries, customer support, or custom enterprise plans.",
      "url": "https://www.fuzedflow.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Fuzed Flow",
        "url": "https://www.fuzedflow.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4440 75 Ave SE Bay 1",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "postalCode": "T2C 2H8",
          "addressCountry": "CA"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-800-555-0000", /* 👈 Don't forget to update this to your real number! */
            "contactType": "customer support",
            "areaServed": ["US", "CA", "GB", "AU"],
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+1-800-555-0000", /* 👈 And this one! */
            "contactType": "sales",
            "areaServed": ["US", "CA", "GB", "AU"],
            "availableLanguage": "English"
          }
        ]
      }
    })}
  </script>
</Helmet>
      {/* Global Header */}
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Get in Touch</p>
            <h1 className="font-heading text-4xl uppercase leading-tight md:text-5xl">Let's talk about your workflow.</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have questions about Fuzed Flow? Need help picking the right plan for your crew? Send us a message and our team will get back to you within one business day.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-muted/50">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted-foreground">Call Us</p>
                  <p className="font-bold">(555) 018-2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-muted/50">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted-foreground">Social</p>
                  <p className="font-bold">LinkedIn · Facebook · YouTube</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {submitted ? (
              <div className="border border-border bg-card p-10 text-center shadow-[12px_12px_0_hsl(var(--primary))]">
                <ShieldCheck className="mx-auto mb-4 h-16 w-16 text-primary" />
                <h2 className="font-heading text-2xl uppercase">Message Sent</h2>
                <p className="mt-4 text-muted-foreground">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-none border-foreground">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border bg-card p-6 sm:p-10 shadow-[12px_12px_0_hsl(var(--primary))] space-y-6">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquareText className="h-6 w-6 text-primary" />

// And update the Form Title (around line 109):
<h2 className="font-heading text-xl uppercase m-0">Send Us a Message</h2>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input name="name" id="contact-name" required placeholder="Your name" className="rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone *</Label>
                    <Input name="phone" id="contact-phone" required placeholder="(555) 000-0000" className="rounded-none" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-message">How can we help? *</Label>
                  <Textarea name="message" id="contact-message" required placeholder="Tell us what you need..." className="min-h-[150px] rounded-none" />
                </div>
                
                <Button type="submit" disabled={submitting} className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                  {submitting ? 'Sending...' : 'Send Message'} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
      
    </div>
  );
}