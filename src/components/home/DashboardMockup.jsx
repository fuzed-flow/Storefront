import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function DashboardMockup({ title = 'Command Center', compact = false }) {
  return (
    <div className="group relative border-2 border-foreground bg-white p-3 shadow-[14px_14px_0_hsl(var(--primary))] cursor-crosshair">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Fuzed Flow</p>
          <h3 className="font-heading text-lg uppercase">{title}</h3>
        </div>
        <div className="flex gap-1.5"><span className="h-3 w-3 bg-primary" /><span className="h-3 w-3 bg-foreground" /><span className="h-3 w-3 bg-muted" /></div>
      </div>
      <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <div className="border border-border bg-muted p-4">
            <div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold">Active Projects</span><span className="bg-primary px-2 py-1 text-xs font-black text-primary-foreground">18 LIVE</span></div>
            {[70, 48, 86].map((value, index) => <div key={index} className="mb-3 h-3 bg-white"><motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} className="h-full bg-foreground" /></div>)}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Estimates', 'Invoices', 'Time Tracking', 'Client Portal'].map((item, index) => <div key={item} className="border border-border p-3 transition group-hover:border-primary"><p className="text-xs text-muted-foreground">{item}</p><p className="mt-2 text-xl font-black">{index === 0 ? '$84K' : index === 1 ? '$31K' : index === 2 ? '142h' : '96%'}</p></div>)}
          </div>
        </div>
        {!compact && (
          <div className="border border-border p-3">
            <p className="mb-3 text-sm font-bold">Crew Schedule</p>
            {['Framing Crew', 'Electrical', 'Inspection', 'Invoice Sent'].map((item, index) => <div key={item} className="mb-2 flex items-center gap-2"><span className="h-8 w-1.5 bg-primary" /><span className="flex-1 border border-border px-3 py-2 text-sm">{item}</span><Check className="h-4 w-4" /></div>)}
          </div>
        )}
      </div>
      <div className="absolute right-6 top-20 hidden border border-foreground bg-primary px-3 py-2 text-xs font-bold text-primary-foreground shadow-lg transition md:block md:opacity-0 md:group-hover:opacity-100">Hover modules to see job status fast.</div>
    </div>
  );
}