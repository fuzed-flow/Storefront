import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
export function TrialCTA({label='Start a 14-day trial'}) {return <a className="ff-button" href="/pricing" data-event="trial_cta">{label}<span aria-hidden="true"> →</span></a>;}
export function Intro({eyebrow,title,description}) {return <div className="ff-intro"><p className="ff-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="ff-lead">{description}</p></div>;}
export default function Page({title,description,path,children,schema=[],noindex=false}) {return <div className="min-h-screen flex flex-col bg-white text-slate-950"><SEO {...{title,description,path,schema,noindex}}/><Header/><main id="main-content" className="flex-1">{children}</main><Footer/></div>;}
