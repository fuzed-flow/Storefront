import React from 'react';
import { Link } from 'react-router-dom';
import Page from '@/components/shared/Page';
import BlogImage from '@/components/shared/BlogImage';
import { blogPosts, blogPath, formatBlogDate } from '@/data/blog';

const site = 'https://www.fuzedflow.com';

export default function Blog() {
  const schema = [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site}/blog` },
    ] },
    { '@type': 'Blog', '@id': `${site}/blog#blog`, url: `${site}/blog`, name: 'The FuzedFlow blog',
      description: 'Practical guides to contractor software, clearer quotes, client communication and project closeouts.',
      publisher: { '@type': 'Organization', name: 'FuzedFlow', url: site },
      blogPost: blogPosts.map(post => ({ '@type': 'BlogPosting', headline: post.title, url: site + blogPath(post),
        datePublished: post.datePublished, dateModified: post.dateModified, image: site + post.hero,
        author: { '@type': 'Organization', name: post.author, url: `${site}/about` } })),
    },
  ];

  return <Page title="Contractor Software & Workflow Blog" description="Practical FuzedFlow articles on contractor quoting, client communication, project records and photo closeouts. Explore workflows you can test on a real job." path="/blog" schema={schema}>
    <section className="ff-blog-heading"><div className="ff-shell">
      <p className="ff-eyebrow">Ideas for the work between jobs</p>
      <h1>The FuzedFlow blog.</h1>
      <p className="ff-lead">Clearer quotes. Better conversations. A more organized job.<br/>Practical guides for contractors who do the work.</p>
    </div></section>
    <div className="ff-shell ff-section">
      <p className="ff-eyebrow">Latest article</p>
      {blogPosts.map(post => <article className="ff-blog-feature" key={post.slug}>
        <Link to={blogPath(post)} aria-label={`Read ${post.title}`} className="ff-blog-feature-image"><BlogImage post={post} eager sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1240px) 55vw, 660px"/></Link>
        <div className="ff-blog-feature-copy">
          <p className="ff-eyebrow">{post.category}</p>
          <h2><Link to={blogPath(post)}>{post.title}</Link></h2>
          <p>{post.excerpt}</p>
          <p className="ff-blog-meta"><time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time> · By <Link to="/about">{post.author}</Link></p>
          <Link to={blogPath(post)} className="ff-button">Read the article <span aria-hidden="true">→</span></Link>
        </div>
      </article>)}
      <section className="ff-blog-more"><h2>Put an idea to work.</h2><p>Use a checklist on your next quote, or explore how the whole job connects.</p><div className="ff-topic-links"><Link to="/resources/contractor-estimate-checklist">Contractor estimate checklist →</Link><Link to="/workflow-example">Follow a worked renovation →</Link><Link to="/contact#demo">Ask for a walkthrough →</Link></div></section>
    </div>
  </Page>;
}
