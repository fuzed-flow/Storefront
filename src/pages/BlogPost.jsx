import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Page from '@/components/shared/Page';
import BlogImage from '@/components/shared/BlogImage';
import DemoForm from '@/components/forms/DemoForm';
import PhoneLink from '@/components/shared/PhoneLink';
import PageNotFound from '@/lib/PageNotFound';
import { blogPosts, blogPath, formatBlogDate } from '@/data/blog';

const site = 'https://www.fuzedflow.com';
const sections = [
  ['the-difference', 'The difference: follow the whole job'],
  ['clearer-quotes', 'Quotes that explain the work'],
  ['client-updates', 'Client updates with a next step'],
  ['changes-and-closeout', 'Changes and closeout with a record'],
  ['worked-example', 'A renovation example'],
  ['fit-and-plans', 'Who it fits and what to check'],
  ['trial-checklist', 'A practical trial checklist'],
  ['questions', 'Common questions'],
];

function ArticleContent() {
  return <>
    <section id="the-difference">
      <h2>The difference: follow the whole job</h2>
      <p>A renovation produces more than tasks. It produces a scope, choices, photos, approvals, updates, invoices and a final list of items to finish. When those records live in separate spreadsheets, email threads and phones, the hard part is often working out which decision belongs to which version of the job.</p>
      <p>FuzedFlow is built around that sequence. Start with a lead and quote, prepare the project, record what happens on site, share reviewed updates, and finish with a documented closeout. The point is to keep the job understandable as it moves between the office, the project manager, the crew and the client.</p>
      <p>Many construction tools offer estimating, scheduling or invoicing. Our approach puts particular attention on the handoffs between them: what the homeowner approved, what changed, what the client needs to know next, and what still needs to be completed.</p>
      <p>For a side-by-side look at everyday record keeping, see <Link to="/compare/spreadsheets">FuzedFlow versus spreadsheets</Link>.</p>
    </section>

    <section id="clearer-quotes">
      <h2>Quotes that explain the work before the price</h2>
      <p>A single line that says “bathroom renovation” leaves a homeowner with questions. Does it include waterproofing? Which fixtures are allowed for? What happens if they choose a different tile?</p>
      <p>In <Link to="/features/estimating">FuzedFlow’s estimating and quoting workflow</Link>, you can organize the scope into phases, add priced line items and supporting photos, and present optional items or phases for the client to select. Material and labour costs remain useful to your team while the client reviews the proposed scope and price.</p>
      <p>For example, separate demolition, rough-ins, waterproofing, tile and finishing. Keep the agreed base scope clear and offer a premium fixture package as an option. The client’s selected options update the approval total, so the choice belongs to the quote record.</p>
      <p><Link to="/features/smart-templates">Reusable templates</Link> and pricebook items give familiar work a starting point. You still review the quantities, current supplier prices, allowances and site conditions on each new job.</p>
      <figure className="ff-blog-product-image">
        <img src="https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/screenshots/contractor-estimating-software-quote-builder.webp" width="1440" height="830" loading="lazy" decoding="async" alt="FuzedFlow quote builder showing quote setup, project phases and prices."/>
        <figcaption>Product screenshot: the estimate builder organizes the work into phases and line items. <Link to="/features/estimating">Explore estimating →</Link></figcaption>
      </figure>
    </section>

    <section id="client-updates">
      <h2>Client updates that answer “what happens next?”</h2>
      <p>A busy site can make visible progress while the homeowner still feels uninformed. A useful update explains what was completed, what is coming next, and whether the client needs to make a decision or provide access.</p>
      <p><Link to="/features/client-updates">Client project updates</Link> give those details a consistent structure. Prepare a draft, review a branded PDF, publish the update to the <Link to="/features/client-portal">Client Portal</Link>, then share it by email or text link. Your company controls which portal sections are shown.</p>
      <div className="ff-blog-note-example">
        <p className="ff-eyebrow">An illustrative update</p>
        <h3>The rough site note</h3><p>“Plumbing done. Waiting on electrical inspection. Drywall next. Need vanity choice.”</p>
        <h3>The version a homeowner can act on</h3><p>“The plumbing rough-in is complete. We are waiting for the electrical inspection before drywall begins. Please confirm your vanity selection so we can check the dimensions before the next stage.”</p>
      </div>
      <p>On Professional and Business, <Link to="/features/ai-rewrite">AI Rewrite with Undo</Link> can help improve supported text fields. The contractor supplies the facts and reviews the result before saving or sending. It is useful for wording; it cannot confirm that an inspection passed or that a trade will arrive.</p>
      <p>Internal <Link to="/features/daily-logs">daily logs</Link> serve a different purpose. They preserve site details such as completed work, blockers, crew and photos. A client update is the reviewed message you choose to share.</p>
    </section>

    <section id="changes-and-closeout">
      <h2>Changes and closeout deserve a clear record</h2>
      <p>A requested extra should not disappear into a text conversation. On Professional and Business, <Link to="/features/change-orders">change orders</Link> let you describe the changed work, price it separately, share it for approval and convert agreed work into an invoice. That makes the extra easier to distinguish from the original quote.</p>
      <p>The same attention to detail matters at the final walkthrough. “A few touch-ups” is hard to assign. A photo of the paint repair, a description, a responsible subcontractor and a status give everyone something concrete to work from.</p>
      <p><Link to="/features/project-closeouts">Project closeouts and deficiency checklists</Link> support Quick Photo Capture or a Guided Walkthrough. Add trade categories, descriptions, subcontractors and optional due dates. Track items through Open, In Progress, Ready for Review and Complete. Share the reviewed client checklist and send each subcontractor a PDF package containing their assigned items.</p>
      <p>This is a practical difference for renovation work: the workflow gives the last small items the same visibility as the work that won the job.</p>
    </section>

    <section id="worked-example">
      <h2>What that looks like on one bathroom renovation</h2>
      <p>The following is an illustrative workflow, not a customer case study or a claim about results.</p>
      <ol className="ff-blog-job-steps">
        <li><strong>Agree on scope.</strong> Quote demolition, rough-ins, waterproofing, tile and finishing as separate phases. Offer the premium fixture package as an optional item.</li>
        <li><strong>Prepare the job.</strong> Create the project plan and track selected quote materials marked for project material tracking. Share the relevant drawings and trade scope.</li>
        <li><strong>Record the site work.</strong> Save rough-in photos and note the decision or inspection needed before closing the wall.</li>
        <li><strong>Communicate the next stage.</strong> Publish a client update explaining completed work, upcoming work and the vanity selection still needed.</li>
        <li><strong>Document an extra.</strong> If the homeowner adds an outlet, prepare a separate change order for approval on a plan that includes change orders.</li>
        <li><strong>Finish the small items.</strong> Photograph a grout repair and a paint touch-up, assign them to the relevant trades and review completion.</li>
      </ol>
      <p>The value is the continuity of the record: a decision has somewhere to live, an update has a purpose, and a deficiency has an owner. <Link to="/workflow-example">Follow the full worked renovation example</Link> for the connected steps through invoicing.</p>
    </section>

    <section id="fit-and-plans">
      <h2>Who FuzedFlow fits—and what to check first</h2>
      <p>FuzedFlow is aimed at small and growing contractors who handle both customer-facing documents and on-site coordination. That includes <Link to="/industries/renovation-contractors">renovation contractors</Link>, general contractors, home builders and trade businesses.</p>
      <p>It is especially relevant when the same project moves between an owner who quotes, a project manager who coordinates trades, and a homeowner who needs clear updates. Start with the handoff that currently creates the most repeated questions or missing information.</p>
      <h3>Check the plan against the workflow</h3>
      <p>All plans include estimating, client updates, branded PDFs, the Client Portal and photo closeout tools. Professional and Business add change orders, employee and time-tracking tools, and AI Rewrite in supported fields. AI Rewrite has usage limits. Review <Link to="/pricing">current plans, user allowances and project limits</Link> before choosing.</p>
      <h3>Check the connections you rely on</h3>
      <p>FuzedFlow supports Stripe payments and selected CSV import and export workflows. Accounting connections and external calendar sync have their own availability status. If a specific connection is essential to your business, check the <Link to="/integrations">current integrations page</Link> and discuss the actual records you need to move before committing.</p>
    </section>

    <section id="trial-checklist">
      <h2>A better way to evaluate contractor software</h2>
      <p>Use the 14-day trial to follow one realistic job. A feature list is easier to judge when you can see how your own scope, decisions and client communication fit together.</p>
      <ul className="ff-blog-checklist">
        <li>Build a phased quote with one optional upgrade. Is the included work easy to understand?</li>
        <li>Review entered costs and the estimated margin. Are the assumptions accurate?</li>
        <li>Open the client view. Can you clearly see the documents and actions you intended to share?</li>
        <li>Draft an update covering completed work, upcoming work and a client decision.</li>
        <li>Create a sample closeout item with a photo, an assigned trade and a completion status.</li>
        <li>Check the plan limits, team permissions and any essential integration.</li>
      </ul>
      <p>Use the <Link to="/resources/contractor-estimate-checklist">contractor estimate checklist</Link> and <Link to="/resources/project-closeout-checklist">project closeout checklist</Link> as starting points. For this trial, sample contacts and fictional job details let you explore without involving a real homeowner.</p>
    </section>

    <section id="questions">
      <h2>Common questions</h2>
      <h3>What is FuzedFlow?</h3><p>FuzedFlow is construction management software for contractors and trade businesses. It brings lead records, estimating, project coordination, client documents, updates, invoices and closeout records into one workspace.</p>
      <h3>Are client updates and photo closeouts included on Starter?</h3><p>Yes. Client updates, branded PDFs, portal sharing and photo deficiency checklists are included on all plans. Starter has its own user and active-project limits; <Link to="/pricing">compare the current plans</Link> for the details.</p>
      <h3>Does AI Rewrite send the message for me?</h3><p>No. You choose AI Rewrite in a supported field, review the revised wording, and save or send through the normal workflow. Undo restores the previous text. AI Rewrite is included on Professional and Business, subject to usage limits.</p>
      <h3>What should I bring to a demo?</h3><p>Bring an example of your quote structure, a typical client update and the way you currently track unfinished items. Remove private client details if they are not needed. The team can then walk through the parts that matter to your business.</p>
    </section>
  </>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) return <PageNotFound/>;
  const path = blogPath(post);
  const author = { '@type': 'Organization', '@id': `${site}/#organization`, name: post.author, url: `${site}/about` };
  const schema = [
    { '@type': 'BreadcrumbList', itemListElement: [['Home', '/'], ['Blog', '/blog'], [post.title, path]].map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item: site + item })) },
    { '@type': 'BlogPosting', '@id': `${site}${path}#article`, headline: post.title, description: post.description,
      url: site + path, mainEntityOfPage: { '@type': 'WebPage', '@id': site + path },
      datePublished: post.datePublished, dateModified: post.dateModified,
      author, publisher: { ...author, url: site, logo: { '@type': 'ImageObject', url: 'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-logo.png' } },
      image: { '@type': 'ImageObject', url: site + post.hero, width: 1440, height: 810, caption: 'Illustrative renovation planning scene.' },
      articleSection: post.category, inLanguage: 'en-CA', isPartOf: { '@type': 'Blog', '@id': `${site}/blog#blog`, url: `${site}/blog`, name: 'The FuzedFlow blog' },
    },
  ];

  return <Page title={post.seoTitle} description={post.description} path={path} schema={schema} seo={{ image: site + post.hero, imageAlt: post.heroAlt, imageWidth: 1440, imageHeight: 810, type: 'article', publishedTime: `${post.datePublished}T12:00:00-06:00`, modifiedTime: `${post.dateModified}T12:00:00-06:00` }}>
    <article>
      <header className="ff-blog-heading ff-blog-article-heading"><div className="ff-shell">
        <nav className="ff-blog-breadcrumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li><Link to="/blog">Blog</Link></li><li aria-current="page">{post.title}</li></ol></nav>
        <p className="ff-eyebrow">{post.category}</p><h1>{post.title}</h1>
        <p className="ff-lead">The useful difference is in the handoffs: from a clear quote to an informed client and a documented final walkthrough.</p>
        <p className="ff-blog-meta">By <Link to="/about" rel="author">{post.author}</Link> · <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time></p>
      </div></header>
      <figure className="ff-shell ff-blog-hero-image"><BlogImage post={post} eager/><figcaption>A clearer conversation starts with a shared understanding of the work. Illustrative image.</figcaption></figure>
      <div className="ff-shell ff-blog-reading-layout">
        <aside className="ff-blog-toc"><nav aria-label="In this article"><h2>In this article</h2><ol>{sections.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol></nav></aside>
        <div className="ff-blog-prose">
          <div className="ff-blog-answer"><h2>What makes FuzedFlow different?</h2><p>FuzedFlow connects the records contractors use to win and finish work: phased quotes with client options, reviewed project updates, approval records and photo-based deficiency checklists. Its emphasis is the path from agreed scope to a clear handover, with plan-specific tools for the office and crew.</p></div>
          <ArticleContent/>
          <section className="ff-blog-author" aria-label="About the author"><h2>About this guide</h2><p>Written by <Link to="/about">FuzedFlow</Link> from our product workflow guides and current plan descriptions. This is our own product perspective. The renovation example is illustrative; the estimate-builder image is a product screenshot.</p><p>Product details can change. See the linked feature guides, <Link to="/pricing">pricing</Link> and <Link to="/integrations">integration status</Link> for the current details.</p></section>
        </div>
      </div>
    </article>
    <section id="ask-about-fuzedflow" className="ff-band ff-blog-enquiry"><div className="ff-shell ff-section ff-blog-enquiry-grid">
      <div><p className="ff-eyebrow">Bring your next job</p><h2>See how your workflow fits.</h2><p>Tell us how you quote, update clients and close out work. We’ll help you explore the relevant parts of FuzedFlow.</p><p>Call <PhoneLink className="font-bold underline underline-offset-4"/> or send your question.</p><Link to="/pricing" className="ff-button">Compare plans & start a trial <span aria-hidden="true">→</span></Link></div>
      <div><h3>Ask the FuzedFlow team</h3><DemoForm kind="contact" initialMessage="I read ‘What makes FuzedFlow different?’ and would like to discuss how it fits my business."/></div>
    </div></section>
  </Page>;
}
