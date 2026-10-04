import {
  Hammer, Building2, HardHat, Ruler, Shovel, Truck,
  Zap, Clock3, CalendarDays, TrendingUp, DollarSign, MessageSquareText,
  Users, BriefcaseBusiness, FileText, Library,
  Layers3, ClipboardCheck, Timer, FileCheck2, ShoppingCart, Package, IdCard,
  Smartphone, UserCheck, Landmark
} from 'lucide-react';

export const trades = [
  ['Renovation Companies', Hammer],
  ['Home Builders', Building2],
  ['General Contractors', HardHat],
  ['Deck Builders', Ruler],
  ['Landscapers', Shovel],
  ['Trade Companies', Truck]
];

export const painPoints = [
  ['Lost Leads', 'Inquiries disappear between calls, texts, emails, and handwritten notes.', Zap],
  ['Missed Follow-Ups', 'No clear next step means profitable work slips through the cracks.', Clock3],
  ['Scheduling Chaos', 'Crews, subcontractors, and clients never have the same plan.', CalendarDays],
  ['Budget Overruns', 'Costs drift before anyone sees the warning signs.', TrendingUp],
  ['Invoice Delays', 'Finished jobs wait too long before money is collected.', DollarSign],
  ['Poor Client Communication', 'Clients ask for updates because they cannot see progress.', MessageSquareText]
];

export const featureGroups = [
  {
    phase: "1. Win the Job",
    items: [
      ['Lead Management', 'Track inquiries and opportunities.', Users],
      ['CRM', 'Manage clients and prospects.', BriefcaseBusiness],
      ['Estimating', 'Build professional quotes in minutes.', FileText],
      ['Smart Templates', 'Save line items, materials, and phases to drop into future quotes.', Library],
    ]
  },
  {
    phase: "2. Build & Track",
    items: [
      ['Project Management', 'Track jobs from start to finish.', Layers3],
      ['Scheduling', 'Assign crews and subcontractors.', CalendarDays],
      ['Daily Logs', 'Document progress from the field.', ClipboardCheck],
      ['Time Tracking', 'Employees clock in and out from mobile devices.', Timer],
      ['Change Orders', 'Approve changes digitally.', FileCheck2],
      ['Purchase Orders', 'Create and track vendor orders.', ShoppingCart],
      ['Inventory Management', 'Track materials and equipment on hand.', Package],
      ['Employee Portal', 'Centralize schedules, docs, and HR.', IdCard],
    ]
  },
  {
    phase: "3. Back Office & Growth",
    items: [
      ['Client Portal', 'Keep clients updated in real time.', Smartphone],
      ['Invoicing', 'Send invoices and collect payments.', DollarSign],
      ['HR Management', 'Manage employee records, roles, and crew assignments.', UserCheck],
      ['Reporting', 'Know your numbers instantly.', Landmark]
    ]
  }
];

export const steps = [
  'Capture Leads', 'Create Estimates', 'Convert to Projects', 
  'Manage Crews and Schedules', 'Track Progress', 'Get Paid Faster'
];

export const comparison = [
  'Lead Management', 'Estimating', 'Project Management', 
  'Scheduling', 'Client Portal', 'Timesheets', 
  'Construction Workflows', 'Change Orders', 'Job Costing'
];

export const testimonials = [
  ['Our project management is finally organized.', 'Sarah K.', 'Custom Home Builder'],
  ["We've increased our close rate by keeping leads from slipping through the cracks.", 'Devin R.', 'General Contractor']
];

export const DEFAULT_PLANS = [
  {
    name: 'Starter',
    desc: 'For Small Contractors',
    price: '$21',
    period: 'Billed annually or $29.99 month-to-month',
    highlight: false,
    badge: null,
    bullets: [
      { text: '1 User License', included: true },
      { text: '+$29/mo per additional user', included: true },
      { text: 'Up to 5 active projects', included: true },
      { text: 'Lead tracking', included: true },
      { text: 'Estimating tools', included: true },
      { text: 'Invoicing & payment collection', included: true },
      { text: 'Client portal with live updates', included: true },
      { text: 'Project dashboard', included: true },
      { text: 'Email support', included: true },
      { text: 'Employee Portal and HR', included: false },
      { text: 'Change orders', included: false },
      { text: 'Advanced reporting', included: false },
    ],
    cta: 'Start Free Trial',
    ctaHref: 'https://app.fuzedflow.com/signup?plan=price_1U8Qw1IfI96QPT6l00XC0BWp',
  },
  {
    name: 'Professional',
    desc: 'For Growing Businesses',
    price: '$49',
    period: 'Billed annually or $59.99 month-to-month',
    highlight: true,
    badge: 'Most Popular — Best Value',
    proHighlights: [
      'Save 10+ hours every week on admin',
      'Full HR, time tracking, and employee portal',
      'Instantly convert change orders into invoices',
      'Keep clients happy with a live portal',
    ],
    bullets: [
      { text: 'Up to 3 User Licenses', included: true },
      { text: '+$29/mo per additional user', included: true },
      { text: 'Unlimited active projects', included: true },
      { text: 'Employee Portal and HR', included: true },
      { text: 'Change orders', included: true },
      { text: 'Advanced reporting', included: true },
    ],
    cta: 'Subscribe Now',
    ctaHref: 'https://app.fuzedflow.com/signup?plan=price_1U8QqYIfI96QPT6lPvUwTQwl',
  },
  {
    name: 'Business',
    desc: 'Complete system for established crews',
    price: '$129',
    period: 'Billed annually or $159.99 month-to-month',
    highlight: false,
    badge: null,
    bullets: [
      { text: 'Up to 10 User Licenses', included: true },
      { text: '+$29/mo per additional user', included: true },
      { text: 'Everything in Professional', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Advanced permissions', included: true },
      { text: 'Custom reporting', included: true },
    ],
    cta: 'Start Free Trial',
    ctaHref: 'https://app.fuzedflow.com/signup?plan=price_1U8Qw1IfI96QPT6l00XC0BWp',
  },
  {
    name: 'Enterprise',
    desc: 'For Larger Construction Companies',
    price: 'Custom',
    period: '',
    highlight: false,
    badge: null,
    bullets: [
      { text: 'Custom user configurations', included: true },
      { text: 'Everything in Business', included: true },
      { text: 'Custom onboarding & training', included: true },
      { text: 'Priority phone & chat support', included: true },
      { text: 'Deidicated Customer Support', included: true },
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
];