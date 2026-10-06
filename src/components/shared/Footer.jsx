import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import PhoneLink from './PhoneLink';

function TikTokIcon({ className }) {
  return <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M15.38 2.25c.45 2.8 2.04 4.47 4.87 4.64v3.18a8.4 8.4 0 0 1-4.8-1.54v6.42a6.3 6.3 0 1 1-5.47-6.25v3.24a3.16 3.16 0 1 0 2.3 3.02V2.25h3.1Z" /></svg>;
}

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@fuzedflow', Icon: TikTokIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/FuzedFlow/', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/fuzedflow/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fuzed-flow-874138431/', Icon: Linkedin },
];

export default function Footer() {
  return <footer className="ff-footer">
    <div className="ff-shell grid gap-8 py-14 md:grid-cols-4">
      <div>
        <img width="160" height="56" className="h-14 w-auto" src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-storefront-logo.svg" alt="Fuzed Flow" />
        <p className="mt-5 text-white/70">From the first enquiry to the final walkthrough. One workspace for the office, project manager and crew.</p>
        <nav aria-label="Fuzed Flow social media" className="ff-social-links">
          {socialLinks.map(({ label, href, Icon }) => <a key={label} className="ff-social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow Fuzed Flow on ${label}`}>
            <Icon className="h-5 w-5" />
          </a>)}
        </nav>
      </div>
      <div><h2>Explore</h2>{[['Features', '/features'], ['Pricing', '/pricing'], ['Integrations & migration', '/integrations'], ['Resources', '/resources'], ['Product questions', '/faq']].map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <div><h2>Your work</h2>{[['Renovation contractors', 'renovation-contractors'], ['General contractors', 'general-contractors'], ['Home builders', 'home-builders']].map(([label, href]) => <a key={href} href={`/industries/${href}`}>{label}</a>)}<a href="/features/client-updates">Client project updates</a><a href="/features/project-closeouts">Project closeouts</a><a href="/workflow-example">See a worked job example</a></div>
      <div><h2>Get in touch</h2><PhoneLink /><a href="/contact#demo">Book a demo</a><a href="/contact">Contact</a><a href="/terms">Terms & conditions</a><a href="/privacy">Privacy policy</a></div>
    </div>
    <div className="ff-shell border-t border-white/20 py-6 text-sm text-white/60">© {new Date().getFullYear()} Fuzed Flow · Subscription prices in USD</div>
  </footer>;
}
