import fs from 'node:fs';
import path from 'node:path';
import {createServer} from 'vite';
import {features} from './src/data/features.js';
import {resources} from './src/data/resources.js';
import {industries} from './src/data/industries.js';
export const routes=['/','/features','/pricing','/integrations','/resources','/workflow-example','/faq','/contact','/terms','/privacy',...features.map(f=>'/features/'+f.slug),...resources.map(r=>'/resources/'+r.slug),...industries.map(i=>'/industries/'+i.slug)];
const site='https://www.fuzedflow.com';
const template=fs.readFileSync('dist/index.html','utf8').replace(/<title>.*?<\/title>/s,'');
let server;
try{
 server=await createServer({server:{middlewareMode:true},appType:'custom'});
 const {render}=await server.ssrLoadModule('/src/server.jsx');
 for(const route of [...routes,'/404']){
  const {html,head}=render(route);
  if((head.match(/name="description"/g)||[]).length!==1||(html.match(/<h1(?:\s|>)/g)||[]).length!==1||(route!='/404'&&/noindex/.test(head)))throw new Error('Invalid initial HTML: '+route);
  if(!head.includes(site+route))throw new Error('Missing canonical: '+route);
  const result=template.replace('</head>',head+'</head>').replace('<div id="root"></div>','<div id="root">'+html+'</div>');
  const destination=route==='/404'?'dist/404.html':path.join('dist',route,'index.html');
  fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,result);console.log('Prerendered '+route);
 }
 fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+routes.map(route=>`  <url><loc>${site}${route}</loc></url>`).join('\n')+'\n</urlset>\n');
 fs.writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
 console.log(`Verified ${routes.length} indexable pages and a noindex 404.`);
}catch(error){console.error(error);process.exitCode=1;}finally{if(server)await server.close();}
