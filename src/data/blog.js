export const blogPosts = [
  {
    "slug": "what-makes-a-contractor-quote-stand-out",
    "title": "What Makes a Contractor Quote Stand Out? More Than Just the Price",
    "seoTitle": "What Makes a Contractor Quote Stand Out?",
    "description": "Create professional contractor quotes with your logo, colours, hero image, clear room-by-room scope, optional upgrades, product details and supporting documents.",
    "excerpt": "Make your quote a better introduction to your business with personal branding, clear scope, client options and supporting documents. Included on every FuzedFlow plan.",
    "category": "Quoting & proposals",
    "datePublished": "2026-11-12",
    "dateModified": "2026-11-12",
    "author": "FuzedFlow",
    "hero": "/images/blog/what-makes-a-contractor-quote-stand-out-1440.webp",
    "heroBase": "/images/blog/what-makes-a-contractor-quote-stand-out",
    "heroAlt": "FuzedFlow’s quote builder displayed on a laptop beside plans and a tape measure.",
    "heroCaption": "FuzedFlow’s quote builder in a jobsite setting. Illustrative scene created using the supplied product screenshot.",
    "lead": "Give clients a clear scope, relevant project photos and a professional proposal that feels like your business. These quoting tools are included on every plan.",
    "guideNote": "This guide describes FuzedFlow’s quoting workflows and plan availability. The examples and hero scene are illustrative; the in-article quote-builder image is the supplied product screenshot."
  },
  {
    "slug": "choosing-contractor-software-5-questions",
    "title": "Choosing Contractor Software? Ask These 5 Questions Before Signing Up",
    "seoTitle": "Choosing Contractor Software? 5 Questions to Ask",
    "description": "Compare contractor software costs, support, data exports, quoting, progress billing and mobile usability with five practical questions before signing up.",
    "excerpt": "A low monthly price only matters if the software works for your business. Test costs, support, access to records, quoting and jobsite usability before committing.",
    "category": "Choosing contractor software",
    "datePublished": "2026-11-10",
    "dateModified": "2026-11-10",
    "author": "FuzedFlow",
    "hero": "/images/blog/choosing-contractor-software-5-questions-1440.webp",
    "heroBase": "/images/blog/choosing-contractor-software-5-questions",
    "heroAlt": "A renovation contractor considers software on a laptop and phone beside a five-item checklist at a kitchen jobsite.",
    "heroCaption": "A contractor evaluates software against the needs of a real job. AI-generated illustrative image.",
    "lead": "Before you commit, check the total cost, available support, access to your records and how the software handles a real job."
  },
  {
    "slug": "from-lead-to-project-closeout",
    "title": "From First Enquiry to Final Walkthrough: A Contractor’s Guide to FuzedFlow",
    "seoTitle": "From Lead to Project Closeout with FuzedFlow",
    "description": "Follow a bathroom renovation in FuzedFlow from lead capture and quote approval to client updates, deficiency photos, trade assignments, and final payment.",
    "excerpt": "Follow one bathroom renovation from capturing a lead on your phone to checking the last touch-ups and getting paid.",
    "category": "Contractor workflows",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "author": "FuzedFlow",
    "hero": "/images/blog/from-lead-to-project-closeout-1440.webp",
    "heroBase": "/images/blog/from-lead-to-project-closeout",
    "heroAlt": "A renovation contractor taps New Lead in FuzedFlow on a phone during a site visit."
  },
  {
    slug: 'what-makes-fuzedflow-different',
    title: 'What makes FuzedFlow different?',
    seoTitle: 'What Makes FuzedFlow Different for Contractors?',
    description: 'See how FuzedFlow connects phased quotes, client updates, approvals and photo closeouts, with a practical renovation example and a software trial checklist.',
    excerpt: 'A closer look at the work between winning a job and finishing it: clear scope, useful client updates, recorded decisions and a better final walkthrough.',
    category: 'Contractor workflows',
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    author: 'FuzedFlow',
    hero: '/images/blog/what-makes-fuzedflow-different-1440.webp',
    heroBase: '/images/blog/what-makes-fuzedflow-different',
    heroAlt: 'A renovation contractor and homeowner review plans and material samples beside a laptop.',
  },
];

export const blogPath = post => `/blog/${post.slug}`;
export const formatBlogDate = date => new Intl.DateTimeFormat('en-CA', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T12:00:00Z`));
