import React from 'react';
import Page, { Intro } from './Page';

export const LEGAL_UPDATED = '2026-10-05';

export default function LegalPage({ title, description, path, introduction, sections, related }) {
  return (
    <Page
      title={title}
      description={description}
      path={path}
      schema={[{
        '@type': 'WebPage',
        name: title,
        url: `https://www.fuzedflow.com${path}`,
        description,
        dateModified: LEGAL_UPDATED,
        inLanguage: 'en',
        publisher: { '@type': 'Organization', name: 'Fuzed Flow', url: 'https://www.fuzedflow.com' },
      }]}
    >
      <article className="ff-shell ff-article pb-16">
        <Intro eyebrow="Your service, data and rights" title={title} description={introduction} />
        <p className="text-sm font-semibold text-slate-600">
          Last updated: <time dateTime={LEGAL_UPDATED}>October 5, 2026</time>
        </p>
        <div className="ff-plan-note mt-6">
          Questions about this page? <a className="!ml-0 underline underline-offset-4" href="mailto:support@fuzedflow.com">support@fuzedflow.com</a>
          <a className="mt-2 inline-block underline underline-offset-4 sm:mt-0" href={related.path}>{related.label}</a>
        </div>
        <nav aria-label={`${title} sections`} className="my-10 border-y border-slate-200 py-6">
          <h2 className="mb-4 text-lg font-bold">On this page</h2>
          <ol className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a className="inline-block py-1 underline decoration-slate-300 underline-offset-4 hover:decoration-amber-600" href={`#${section.id}`}>
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-10 text-base leading-8 text-slate-600 [&_a]:font-semibold [&_a]:text-slate-900 [&_a]:underline [&_a]:underline-offset-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900 [&_li]:pl-1 [&_p+p]:mt-4 [&_strong]:text-slate-900 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6">
          {sections.map((section, index) => (
            <section id={section.id} key={section.id} className="scroll-mt-32 border-b border-slate-200 pb-10 last:border-0">
              <h2 className="mb-5 font-heading text-2xl leading-tight text-slate-950 sm:text-3xl">
                {index + 1}. {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </article>
    </Page>
  );
}
