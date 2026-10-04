import React from 'react';
import {useParams,Link} from 'react-router-dom';
import {industries} from '@/data/industries';
import {features} from '@/data/features';
import Page,{Intro,TrialCTA} from '@/components/shared/Page';
import PageNotFound from '@/lib/PageNotFound';
export default function Industry(){const {slug}=useParams();const industry=industries.find(x=>x.slug===slug);if(!industry)return <PageNotFound/>;return <Page title={industry.title} description={industry.description} path={'/industries/'+slug}><div className="ff-shell"><Intro eyebrow="Built around your work" title={industry.title} description={industry.description}/><section className="ff-example"><p className="ff-eyebrow">Illustrative job</p><h2>{industry.scenario}</h2><ol className="ff-resource-list">{industry.steps.map(x=><li key={x}>{x}</li>)}</ol></section><section className="ff-section"><h2>The workflows behind this job</h2><div className="ff-card-grid">{industry.features.map(s=>features.find(f=>f.slug===s)).map(f=><Link className="ff-card" to={'/features/'+f.slug} key={f.slug}><h3>{f.name}</h3><p>{f.tagline}</p><span>See the steps →</span></Link>)}</div></section><div className="ff-cta-strip"><div><h2>Walk through a job like yours.</h2><p>Try the app or ask the team to show your workflow in a demo.</p></div><TrialCTA/></div></div></Page>;}
