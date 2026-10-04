import {track} from '@vercel/analytics';
export function trackEvent(name,properties={}) {
 if(typeof window==='undefined'||window.__PRERENDER__)return;
 // Never include form values, names, email addresses or other personal data.
 window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:name,...properties});
 try{track(name,properties);}catch{/* Analytics must not interrupt the workflow. */}
}
