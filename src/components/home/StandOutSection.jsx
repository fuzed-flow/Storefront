import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, ImagePlus, Library, Copy, FileSignature } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Quotes in Minutes',
    description: 'Generate professional estimates in minutes, not hours. Send your bids out before the competition even leaves the driveway.'
  },
  {
    icon: Layers,
    title: 'Flexible & Scalable',
    description: 'From quick one-page estimates to complex, multi-phase project proposals, our quoting engine adapts to your exact needs.'
  },
  {
    icon: ImagePlus,
    title: 'Fully Personalized',
    description: 'Win more jobs with branded quotes featuring project photos, contract attachments, and custom line-item breakdowns.'
  },
  {
    icon: Library,
    title: 'Smart Price Book & Templates',
    description: 'Save custom line items, materials, project phase templates and full quote templates.'
  },
  {
    icon: Copy,
    title: '1-Click Duplication',
    description: 'Never start from scratch. Instantly duplicate past quotes for similar jobs and tweak the details in seconds.'
  },
  {
    icon: FileSignature,
    title: 'Digital Approvals',
    description: 'Let clients review, approve, and sign off on your quotes directly from their phone or computer.'
  }
];

export default function StandOutSection() {
  return (
    <section className="border-b border-border bg-foreground px-4 py-20 text-background md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Why We Stand Out</p>
          <h2 className="font-heading text-3xl uppercase leading-tight text-white md:text-5xl">The Ultimate Quoting Engine</h2>
          <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">Win more bids with tools designed specifically for how contractors price and pitch jobs.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/15 bg-white/5 p-6 md:p-8 transition-colors hover:border-primary"
              >
                <Icon className="mb-5 h-8 w-8 text-primary" />
                <h3 className="font-heading text-xl uppercase text-white mb-3">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}