import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BellRing, 
  Mail, 
  MessageSquare, 
  ToggleRight, 
  ToggleLeft, 
  Settings2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mockup Toggle Switch Component for the UI
const MockToggle = ({ label, active, onClick }) => (
  <div 
    className="flex cursor-pointer items-center justify-between border border-border bg-background p-3 transition hover:border-primary"
    onClick={onClick}
    role="switch"
    aria-checked={active}
  >
    <span className="text-sm font-bold">{label}</span>
    {active ? (
      <ToggleRight className="h-6 w-6 text-primary" />
    ) : (
      <ToggleLeft className="h-6 w-6 text-muted-foreground" />
    )}
  </div>
);

// Mockup Number Input for the UI
const MockNumberInput = ({ label, value, suffix }) => (
  <div className="flex items-center justify-between border-b border-border py-2">
    <span className="text-sm text-muted-foreground">{label}</span>
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-12 items-center justify-center border border-border bg-muted text-sm font-bold">
        {value}
      </div>
      <span className="text-xs font-bold uppercase text-muted-foreground">{suffix}</span>
    </div>
  </div>
);

export default function AutomationsSection() {
  // Interactive states for the mockup to make it feel alive
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [quoteFollowUp, setQuoteFollowUp] = useState(true);
  const [invoiceReminders, setInvoiceReminders] = useState(true);

  return (
    <section className="border-b border-border px-4 py-20 md:px-6 bg-muted/30" id="automations">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Put Your Business on Autopilot</p>
          <h2 className="font-heading text-3xl uppercase leading-tight md:text-5xl">
            Never Miss a Follow-Up or Late Payment Again
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            Get instant alerts when clients open your quotes, change orders, and invoices. Set up custom email and SMS automations so you can focus on building, while Fuzed Flow handles the chasing.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* SEO Optimized Text Column */}
          <div className="flex flex-col gap-6">
            <article className="border border-border bg-background p-6 shadow-[4px_4px_0_hsl(var(--primary))]">
              <div className="mb-4 flex items-center gap-3">
                <BellRing className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl uppercase">Instant Read Receipts</h3>
              </div>
              <p className="text-muted-foreground leading-7">
                Know exactly when a client views your Quote, Change Order, or Invoice. Strike while the iron is hot and close deals faster.
              </p>
            </article>

            <article className="border border-border bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <Settings2 className="h-6 w-6 text-foreground" />
                <h3 className="font-heading text-xl uppercase">Smart Automations</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span><strong>Quote Follow-ups:</strong> Schedule a <em>First Check-in</em> and a <em>Final Push</em> based on how many days have passed since sending.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span><strong>Invoice Collections:</strong> Automatically send a <em>Pre-Due Reminder</em>, followed by escalating <em>Late Notices</em> to ensure you get paid.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span><strong>Change Orders:</strong> Nudge clients to approve variations so your crew isn't left waiting.</span>
                </li>
              </ul>
            </article>
          </div>

          {/* Interactive UI Mockup (Great for engagement & Lighthouse) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-2 border-foreground bg-background shadow-[12px_12px_0_#111111] overflow-hidden"
            aria-hidden="true" // Hide from screen readers as it's a visual mockup; the text column already handles accessibility/SEO
          >
            <div className="border-b-2 border-foreground bg-muted p-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Notification Settings</span>
            </div>
            
            <div className="p-6">
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-foreground">Delivery Methods</h4>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <MockToggle label="Email Alerts" active={emailEnabled} onClick={() => setEmailEnabled(!emailEnabled)} />
                <MockToggle label="SMS Alerts" active={smsEnabled} onClick={() => setSmsEnabled(!smsEnabled)} />
              </div>

              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-foreground">Active Workflows</h4>
              
              <div className="mb-4 border border-border p-4">
                <MockToggle label="Quote Follow-ups" active={quoteFollowUp} onClick={() => setQuoteFollowUp(!quoteFollowUp)} />
                {quoteFollowUp && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 pl-2">
                    <MockNumberInput label="First Check-in" value="3" suffix="Days Later" />
                    <MockNumberInput label="Final Push" value="7" suffix="Days Later" />
                  </motion.div>
                )}
              </div>

              <div className="border border-border p-4">
                <MockToggle label="Invoice Collections" active={invoiceReminders} onClick={() => setInvoiceReminders(!invoiceReminders)} />
                {invoiceReminders && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 pl-2">
                    <MockNumberInput label="Pre-Due Reminder" value="2" suffix="Days Before" />
                    <MockNumberInput label="Late Notice #1" value="1" suffix="Days Late" />
                    <MockNumberInput label="Late Notice #2" value="5" suffix="Days Late" />
                  </motion.div>
                )}
              </div>

              <Button className="mt-8 w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                Save Automations
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}