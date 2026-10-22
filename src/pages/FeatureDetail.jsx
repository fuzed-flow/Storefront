import React from 'react';
import {useParams,Link} from 'react-router-dom';
import {features} from '@/data/features';
import Page,{Intro,TrialCTA} from '@/components/shared/Page';
import PageNotFound from '@/lib/PageNotFound';

export default function FeatureDetail(){
 const {slug}=useParams();
 const f=features.find(x=>x.slug===slug);
 if(!f)return <PageNotFound/>;
 const sentenceName=f.slug==='ai-rewrite'?f.name:f.name.toLowerCase();
 const fallbackDescription=`${f.tagline} ${f.overview}`;
 const metaDescription=f.description||(fallbackDescription.length<=155?fallbackDescription:`${fallbackDescription.slice(0,152).replace(/\s+\S*$/,'')}…`);
 const questions=[{question:`What can I do with ${sentenceName}?`,answer:f.overview},{question:`Which plans include ${sentenceName}?`,answer:f.plan},...(f.faq||[])];
 const webpage={'@type':'WebPage',name:f.name,description:f.overview,url:'https://www.fuzedflow.com/features/'+slug,about:{'@type':'SoftwareApplication',name:'Fuzed Flow',applicationCategory:'BusinessApplication',operatingSystem:'Web browser'}};
 if(f.dateModified)webpage.dateModified=f.dateModified;
 const schema=[
  {'@type':'BreadcrumbList',itemListElement:[['Home','/'],['Features','/features'],[f.name,'/features/'+slug]].map(([name,path],i)=>({'@type':'ListItem',position:i+1,name,item:'https://www.fuzedflow.com'+path}))},
  webpage,
  {'@type':'FAQPage',mainEntity:questions.map(q=>({'@type':'Question',name:q.question,acceptedAnswer:{'@type':'Answer',text:q.answer}}))},
 ];

 return <Page title={f.seoTitle||`${f.name} for contractors`} description={metaDescription} path={'/features/'+slug} schema={schema}>
  <div className="ff-shell">
   <Intro eyebrow={f.group} title={f.headline||f.tagline} description={f.overview}/>
   <div className="ff-plan-note"><strong>Plan availability:</strong> {f.plan} <Link to="/pricing">Compare plans →</Link></div>

   {f.benefits&&<section className="ff-section" aria-labelledby="feature-benefits">
    <p className="ff-eyebrow">Why it matters</p>
    <h2 id="feature-benefits">{f.benefitTitle}</h2>
    <div className="ff-card-grid">{f.benefits.map(benefit=><article className="ff-card" key={benefit.title}><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
   </section>}

   {f.image&&<figure className="ff-feature-figure">
    <img src={f.image.src} alt={f.image.alt} width="1440" height="830" loading="eager" decoding="async"/>
    <figcaption>{f.image.caption}</figcaption>
   </figure>}

   <section className="ff-section">
    <h2>How to use {sentenceName}</h2>
    <ol className="ff-step-grid">{f.howItWorks.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span><p>{step}</p></li>)}</ol>
   </section>

   <section className="ff-example">
    <p className="ff-eyebrow">Worked example</p>
    <h2>What this looks like on a job</h2>
    <p>{f.example}</p>
    <p className="text-sm mt-4">Illustrative workflow. Prices and scope are examples, not customer results.</p>
   </section>

   {f.detailSections&&<section className="ff-section" aria-labelledby="feature-details">
    <p className="ff-eyebrow">A closer look</p>
    <h2 id="feature-details">How {sentenceName} fits the contractor workflow</h2>
    <div className="ff-feature-details">{f.detailSections.map(section=><article className="ff-feature-detail" key={section.title}>
     <h3>{section.title}</h3>
     {section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
     {section.items&&<ul className="ff-check-list">{section.items.map(item=><li key={item}>{item}</li>)}</ul>}
    </article>)}</div>
   </section>}

   <section className="ff-section">
    <h2>Questions about {sentenceName}</h2>
    {questions.map(q=><details className="ff-faq" key={q.question}><summary>{q.question}</summary><p>{q.answer}</p></details>)}
   </section>

   <section className="ff-section">
    <h2>Connected contractor workflows</h2>
    <div className="ff-card-grid">{f.related.map(relatedSlug=>features.find(x=>x.slug===relatedSlug)).filter(Boolean).map(x=><Link className="ff-card" key={x.slug} to={'/features/'+x.slug}><h3>{x.name}</h3><p>{x.tagline}</p><span>Explore workflow →</span></Link>)}</div>
    <p className="mt-5"><Link to="/integrations">See external integrations and CSV migration →</Link></p>
   </section>

   <div className="ff-cta-strip"><div><h2>See the workflow with your own job.</h2><p>Choose a plan or request a walkthrough with the Fuzed Flow team.</p></div><TrialCTA/></div>
  </div>
 </Page>;
}
