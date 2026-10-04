import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, ShieldCheck, Users, Building2, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Import your Supabase client
import { supabase } from '@/lib/supabase';

const TRADE_TYPES = ['Renovation', 'Home Builder', 'General Contractor', 'Deck Builder', 'Landscaper', 'Trade Company', 'Other'];
const TEAM_SIZES = ['1-5', '6-15', '16-30', '31-50', '50+'];

export default function DemoForm({ compact = false, dark = false }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitting(true);

    try {
      // Insert demo request directly into Supabase 'leads' table
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            // Combine trade, team size, preferred date, and message into the 'notes' column
            notes: `Trade: ${formData.get('trade_type')} | Team Size: ${formData.get('team_size')} | Preferred Date: ${formData.get('preferred_date')} | Message: ${formData.get('message')}`,
            form_type: 'demo_request',
            source: 'website_form',
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting demo form:', error);
      window.alert('Something went wrong submitting your request. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`border ${dark ? 'border-white/15 bg-white/5' : 'border-border bg-card'} p-6 text-center shadow-[8px_8px_0_hsl(var(--foreground))]`}>
        <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="font-heading text-xl uppercase">Demo Request Received</h3>
        <p className={`mt-3 text-sm ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>We'll confirm your demo time within one business day. Check your inbox for a calendar invite.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className={`mt-5 rounded-none ${dark ? 'border-white text-white' : 'border-foreground'}`}>Request Another Demo</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`border ${dark ? 'border-white/15 bg-white/5' : 'border-border bg-card'} p-4 md:p-5 shadow-[8px_8px_0_hsl(var(--foreground))] ${compact ? 'space-y-3' : 'space-y-4'}`}>
      <div className="mb-1 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />
        <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Book Your Personalized Demo</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="demo-name" className={dark ? 'text-white' : ''}>Full Name *</Label>
          <Input name="name" id="demo-name" required placeholder="Your name" className="rounded-none" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-phone" className={dark ? 'text-white' : ''}>Phone *</Label>
          <Input name="phone" id="demo-phone" required placeholder="(555) 000-0000" className="rounded-none" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="demo-email" className={dark ? 'text-white' : ''}>Email</Label>
          <Input name="email" id="demo-email" type="email" placeholder="you@company.com" className="rounded-none" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-company" className={dark ? 'text-white' : ''}>Company</Label>
          <Input name="company" id="demo-company" placeholder="Company name" className="rounded-none" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="demo-trade" className={dark ? 'text-white' : ''}>Your Trade</Label>
          <select name="trade_type" id="demo-trade" className={`h-9 w-full rounded-none border border-input px-3 text-sm ${dark ? 'bg-white/5 text-white' : 'bg-transparent'}`}>
            <option value="">Select trade...</option>
            {TRADE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-team" className={dark ? 'text-white' : ''}>Team Size</Label>
          <select name="team_size" id="demo-team" className={`h-9 w-full rounded-none border border-input px-3 text-sm ${dark ? 'bg-white/5 text-white' : 'bg-transparent'}`}>
            <option value="">Select size...</option>
            {TEAM_SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="demo-date" className={dark ? 'text-white' : ''}>Preferred Demo Date</Label>
        <Input name="preferred_date" id="demo-date" type="date" className="rounded-none" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="demo-message" className={dark ? 'text-white' : ''}>What would you like to see in the demo?</Label>
        <Textarea name="message" id="demo-message" placeholder="Tell us about your current workflow challenges..." className="rounded-none min-h-[80px]" />
      </div>
      <Button type="submit" disabled={submitting} className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
        {submitting ? 'Booking...' : 'Book My Demo'} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}