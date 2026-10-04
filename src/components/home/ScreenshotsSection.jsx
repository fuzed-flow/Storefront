import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const STATIC_SCREENSHOTS = [
  {
    id: 1,
    title: 'Command Dashboard',
    description: 'Get a bird\'s-eye view of your entire construction business in real-time.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/fuzed-flow-construction-dashboard.webp',
    alt: 'Fuzed Flow construction business dashboard showing active projects, revenue, and tasks'
  },
  {
    id: 2,
    title: 'Project Workspace',
    description: 'Track progress, manage daily logs, and oversee site details from one central hub.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-project-management-workspace.webp',
    alt: 'Construction project management workspace showing site details, budget, and daily logs'
  },
  {
    id: 3,
    title: 'Scheduling Timeline',
    description: 'Visual Gantt-style timeline to manage crews, phases, and keep projects on track.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-project-scheduling-timeline.webp',
    alt: 'Contractor scheduling software timeline view managing crew allocations and project phases'
  },
  {
    id: 4,
    title: 'Estimating & Quoting',
    description: 'Build professional, accurate quotes in minutes using phases and templates.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-estimating-software-quote-builder.webp',
    alt: 'Construction estimating software interface building a detailed contractor quote'
  },
  {
    id: 5,
    title: 'Lead CRM',
    description: 'Kanban boards to track client inquiries from the first call to a signed contract.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-lead-tracking-crm.webp',
    alt: 'Contractor CRM software showing a kanban board of sales leads and project pipelines'
  },
  {
    id: 6,
    title: 'Purchase Orders',
    description: 'Streamline material ordering and track supplier expenses seamlessly.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-purchase-order-management.webp',
    alt: 'Purchase order management screen for construction materials and vendor tracking'
  },
  {
    id: 7,
    title: 'Crew Timesheets',
    description: 'Easy time tracking for field crews to log hours and locations accurately.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/construction-crew-time-tracking-timesheets.webp',
    alt: 'Construction crew timesheet software for tracking worker hours and labor costs'
  },
  {
    id: 8,
    title: 'Invoicing & Billing',
    description: 'Generate invoices directly from quotes, track change orders, and get paid faster.',
    image_url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-invoicing-and-billing-software.webp',
    alt: 'Contractor invoicing and billing software showing invoice statuses and payment tracking'
  }
];

const AUTO_SLIDE_INTERVAL = 4000;

export default function ScreenshotsSection() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const closeLightbox = useCallback(() => setSelected(null), []);
  const count = STATIC_SCREENSHOTS.length;

  const next = useCallback(() => {
    setIndex(prev => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex(prev => (prev - 1 + count) % count);
  }, [count]);

  // Auto-slide every 4 seconds, paused on hover or when lightbox open
  useEffect(() => {
    if (paused || selected || count <= 1) return;
    timerRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, selected, next, count]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected, closeLightbox]);

  const currentItem = STATIC_SCREENSHOTS[index];

  return (
    <section className="border-b border-border bg-foreground px-4 py-20 text-background md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">Screenshots</p>
          <h2 className="font-heading text-3xl uppercase leading-tight md:text-5xl">Built Like a Field Command Center</h2>
          <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">Large, clear views for dashboards, estimates, scheduling, portals, and financial reporting.</p>
        </div>

        <div
          className="mt-12 relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border-2 border-white/20 bg-white/5 text-white transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="relative w-full max-w-4xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full"
                >
                  <button type="button" onClick={() => setSelected(currentItem)} className="group relative block w-full border-2 border-white/20 bg-white p-2 shadow-[14px_14px_0_hsl(var(--primary))] transition hover:border-primary cursor-zoom-in">
                    {/* 👇 Updated to use the new SEO 'alt' property instead of just the title */}
                    <img src={currentItem.image_url} alt={currentItem.alt} loading="lazy" className="w-full h-auto" />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                      <span className="opacity-0 transition group-hover:opacity-100 border-2 border-white bg-foreground px-4 py-2 text-xs font-black uppercase tracking-wider text-background">Click to enlarge</span>
                    </span>
                  </button>
                  
                  <p className="mt-5 border-l-4 border-primary pl-4 font-heading text-xl uppercase">{currentItem.title}</p>
                  <p className="mt-2 pl-4 text-sm text-white/60">{currentItem.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              aria-label="Next screenshot"
              className="z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border-2 border-white/20 bg-white/5 text-white transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
            {STATIC_SCREENSHOTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-2 transition-all ${i === index ? 'w-8 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/30 bg-white/10 text-white hover:bg-white/20" onClick={closeLightbox} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-full w-full flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              {/* 👇 Updated to use the new SEO 'alt' property in the modal as well */}
              <img src={selected.image_url} alt={selected.alt} loading="lazy" className="max-h-[88vh] w-auto max-w-full object-contain shadow-2xl" />
              <div className="mt-4 text-center">
                <p className="font-heading text-xl uppercase text-white">{selected.title}</p>
                {selected.description && <p className="mt-1 text-sm text-white/60">{selected.description}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}