export const blogPosts = [
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
