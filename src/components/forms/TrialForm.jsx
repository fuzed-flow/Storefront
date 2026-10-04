import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Import your Supabase client
import { supabase } from '@/lib/supabase';

const TRADE_TYPES = ['Renovation', 'Home Builder', 'General Contractor', 'Deck Builder', 'Landscaper', 'Trade Company', 'Other'];
const TEAM_SIZES = ['1-5', '6-15', '16-30', '31-50', '50+'];

export default function TrialForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitting(true);
    
    try {
      // Insert trial request directly into Supabase 'leads' table
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            notes: `Trade: ${formData.get('trade_type')} | Team Size: ${formData.get('team_size')}`,
            form_type: 'trial_signup',
            source: 'website_form',
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting trial form:', error);
      window.alert('Something went wrong starting your trial. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-border bg-card p-6 text-center shadow-[8px_8px_0_hsl(var(--primary))]">
        <Rocket className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="font-heading text-xl uppercase">Your Trial Is Starting</h3>
        <p className="mt-3 text-sm text-muted-foreground">Check your email for your trial login details and onboarding guide. You'll be up and running in minutes.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-5 rounded-none border-foreground">Start Another Trial</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-4 md:p-5 shadow-[8px_8px_0_hsl(var(--foreground))] space-y-4">
      <div className="mb-1 flex items-center gap-2">
        <Rocket className="h-5 w-5 text-primary" />
        <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Start Your 14-Day Free Trial</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="trial-name">Full Name *</Label>
          <Input name="name" id="trial-name" required placeholder="Your name" className="rounded-none" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="trial-phone">Phone *</Label>
          <Input name="phone" id="trial-phone" required placeholder="(555) 000-0000" className="rounded-none" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="trial-email">Email *</Label>
          <Input name="email" id="trial-email" type="email" required placeholder="you@company.com" className="rounded-none" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="trial-company">Company</Label>
          <Input name="company" id="trial-company" placeholder="Company name" className="rounded-none" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="trial-trade">Your Trade</Label>
          <select name="trade_type" id="trial-trade" className="h-9 w-full rounded-none border border-input bg-transparent px-3 text-sm">
            <option value="">Select trade...</option>
            {TRADE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="trial-team">Team Size</Label>
          <select name="team_size" id="trial-team" className="h-9 w-full rounded-none border border-input bg-transparent px-3 text-sm">
            <option value="">Select size...</option>
            {TEAM_SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
          </select>
        </div>
      </div>
      <Button type="submit" disabled={submitting} className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
        {submitting ? 'Starting...' : 'Start Free Trial'} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-center text-xs text-muted-foreground">No credit card required. Full access for 14 days.</p>
    </form>
  );
}