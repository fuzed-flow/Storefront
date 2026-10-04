import React from 'react';
import { Zap } from 'lucide-react';

const APP_URL = 'https://app.fuzedflow.com';

export default function FloatingTrialButton() {
  return (
    <a
      href="/#pricing"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border-2 border-foreground bg-primary px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground shadow-[6px_6px_0_#111111] transition hover:bg-primary/90 md:bottom-8 md:right-8"
    >
      <Zap className="h-4 w-4" /> Start Free Trial
    </a>
  );
}