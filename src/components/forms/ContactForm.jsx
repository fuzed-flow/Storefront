import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShieldCheck, MessageSquareText, Phone, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PhoneLink from '@/components/shared/PhoneLink';

// Import your Supabase client
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitting(true);

    try {
      // Insert contact inquiry directly into Supabase 'leads' table
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
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="flex items-center">
            <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-logo.png" alt="Fuzed Flow" className="h-10 w-auto" />
          </Link>
          <Button asChild variant="outline" className="rounded-none border-foreground">
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
        </nav>
      </header>

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
                  <p className="font-bold"><PhoneLink /></p>
                </div>
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
                <h3 className="font-heading text-2xl uppercase">Message Sent</h3>
                <p className="mt-4 text-muted-foreground">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-none border-foreground">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border bg-card p-6 sm:p-10 shadow-[12px_12px_0_hsl(var(--primary))] space-y-6">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquareText className="h-6 w-6 text-primary" />
                  <p className="font-heading text-xl uppercase">Send Us a Message</p>
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
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input name="email" id="contact-email" type="email" placeholder="Your email address" className="rounded-none" />
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
    </div>
  );
}
