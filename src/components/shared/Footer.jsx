import React from 'react';
import { Phone, Mail, Map } from 'lucide-react';

const APP_URL = 'https://app.fuzedflow.com';

export default function Footer() {
  return (
    <footer className="bg-black bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:56px_56px] px-4 py-12 text-background md:px-6 mt-auto">
      <div className="mx-auto grid max-w-7xl gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3">
            <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-storefront-logo.svg" alt="Fuzed Flow" className="h-20 w-20" className="h-14 w-auto border-2 border-yellow-500" />          
          </div>
          <p className="mt-5 max-w-sm text-white/60">All-in-one construction business management for contractors who want clarity, speed, and growth.</p>
        </div>

        {/* Platform Links */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-2 font-bold text-white">Platform</p>
          <a href="/#features" className="text-white/70 hover:text-primary">Features</a>
          <a href="/#pricing" className="text-white/70 hover:text-primary">Pricing</a>
          <a href="/#demo" className="text-white/70 hover:text-primary">Book a Demo</a>
          <a href="/contact" className="text-white/70 hover:text-primary">Contact Us</a>
          <a href="/faq" className="text-white/70 hover:text-primary">FAQ</a>
          <a href={`${APP_URL}/login`} className="text-white/70 hover:text-primary">Login</a>
        </div>

        {/* Industries List */}
<div className="flex flex-col gap-2 text-sm">
  <p className="mb-2 font-bold text-white">Industries</p>
  <p className="text-white/70">General Contractors</p>
  <p className="text-white/70">Home Builders</p>
  <p className="text-white/70">Renovation Companies</p>
  <p className="text-white/70">Deck Builders</p>
  <p className="text-white/70">Landscapers</p>
</div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-2 font-bold text-white">Legal</p>
          <a href="/terms" className="text-white/70 hover:text-primary">Terms & Conditions</a>
          <a href="/privacy" className="text-white/70 hover:text-primary">Privacy Policy</a>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-white/70 text-sm flex flex-col items-start">
          <p className="mb-2 font-bold text-white">Get in Touch</p>
          <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary shrink-0" /> (555) 018-2024</p>
          <p className="flex items-center gap-3"><Map className="h-4 w-4 text-primary shrink-0" /> LinkedIn · Facebook</p>
          
          <a href="/contact" className="mt-4 inline-flex h-10 items-center justify-center bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
        </div>

      </div>
    </footer>
  );
}