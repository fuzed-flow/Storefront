import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const APP_URL = 'https://app.fuzedflow.com';

const navItems = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-4 md:px-6">
        
        {/* LEFT: Logo container */}
        <div className="flex flex-1 justify-start">
          <a href="/" className="flex items-center inline-block" aria-label="Fuzed Flow Home">
            {/* Removed the p-1.5 class so the border hugs the logo tightly */}
            <img 
              src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-storefront-logo.svg" 
              alt="Fuzed Flow Logo" 
              className="h-14 w-auto border-2 border-yellow-500" 
            />
          </a>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex flex-none items-center justify-center gap-8">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-white/70 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT (Desktop): Adjusted CTA Hierarchy */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-3">
          <Button asChild variant="ghost" className="rounded-none font-bold text-white/70 hover:bg-white/10 hover:text-white">
            <a href={`${APP_URL}/login`}>Log in</a>
          </Button>
          <Button asChild variant="outline" className="rounded-none border-white bg-transparent text-white hover:bg-white hover:text-black">
            <a href="/#demo">Book Demo</a>
          </Button>
          <Button asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
            <a href="/#pricing">Start Free Trial</a>
          </Button>
        </div>

        {/* RIGHT (Mobile): Menu Button */}
        <div className="flex flex-1 items-center justify-end gap-3 md:hidden">
          <Button asChild variant="ghost" size="sm" className="font-bold px-3 text-white/70 hover:bg-white/10 hover:text-white">
            <a href={`${APP_URL}/login`}>Log in</a>
          </Button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle navigation" 
            aria-expanded={mobileOpen}
            className="p-1 text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black px-4 py-5 md:hidden shadow-lg absolute w-full left-0">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 font-bold text-white/90 hover:text-white">
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild variant="outline" className="rounded-none border-white bg-transparent text-white font-bold hover:bg-white hover:text-black">
              <a href="/#demo" onClick={() => setMobileOpen(false)}>Book Demo</a>
            </Button>
            <Button asChild className="rounded-none bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-sm">
              <a href="/#pricing" onClick={() => setMobileOpen(false)}>Start Free Trial</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}