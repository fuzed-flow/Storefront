import React,{lazy,Suspense,useEffect} from 'react';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/react';
import ScrollToTop from './components/ScrollToTop';
import {trackEvent} from './lib/analytics';
const Home=lazy(()=>import('./pages/Home'));
const FeatureDetail=lazy(()=>import('./pages/FeatureDetail'));
const Features=lazy(()=>import('./pages/Features'));
const Pricing=lazy(()=>import('./pages/Pricing'));
const Integrations=lazy(()=>import('./pages/Integrations'));
const Resources=lazy(()=>import('./pages/Resources'));
const Industry=lazy(()=>import('./pages/Industry'));
const WorkflowExample=lazy(()=>import('./pages/WorkflowExample'));
const FAQ=lazy(()=>import('./pages/FAQ'));
const Contact=lazy(()=>import('./pages/Contact'));
const Terms=lazy(()=>import('./pages/Terms'));
const Privacy=lazy(()=>import('./pages/Privacy'));
const PageNotFound=lazy(()=>import('./lib/PageNotFound'));
function Events(){const location=useLocation();useEffect(()=>{trackEvent('page_view',{path:location.pathname});},[location.pathname]);useEffect(()=>{const click=e=>{const target=e.target.closest('[data-event]');if(target)trackEvent(target.dataset.event,{...(target.dataset.plan?{plan:target.dataset.plan,cycle:target.dataset.cycle}:{}),...(target.dataset.resource?{resource:target.dataset.resource}:{})});};document.addEventListener('click',click);return()=>document.removeEventListener('click',click);},[]);return null;}
export default function App(){return <HelmetProvider><BrowserRouter><ScrollToTop/><Events/><Suspense fallback={<div role="status" className="p-10">Loading Fuzed Flow…</div>}><Routes><Route path="/" element={<Home/>}/><Route path="/features" element={<Features/>}/><Route path="/features/:slug" element={<FeatureDetail/>}/><Route path="/pricing" element={<Pricing/>}/><Route path="/integrations" element={<Integrations/>}/><Route path="/resources" element={<Resources/>}/><Route path="/resources/:slug" element={<Resources/>}/><Route path="/industries/:slug" element={<Industry/>}/><Route path="/workflow-example" element={<WorkflowExample/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/contact" element={<Contact/>}/><Route path="/terms" element={<Terms/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="*" element={<PageNotFound/>}/></Routes></Suspense>{!window.__PRERENDER__&&<><Analytics/><SpeedInsights/></>}</BrowserRouter></HelmetProvider>;}
