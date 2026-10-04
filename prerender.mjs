import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const routes = [
  '/',
  '/faq',
  '/contact',
  '/terms',
  '/privacy',
  '/features/lead-management',
  '/features/crm',
  '/features/estimating',
  '/features/smart-templates',
  '/features/project-management',
  '/features/scheduling',
  '/features/daily-logs',
  '/features/time-tracking',
  '/features/change-orders',
  '/features/purchase-orders',
  '/features/inventory-management',
  '/features/employee-portal',
  '/features/hr-management',
  '/features/client-portal',
  '/features/invoicing',
  '/features/expense-tracking',
  '/features/reporting'
];

async function prerender() {
  const server = await preview({ preview: { port: 3000 } });
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
    const html = await page.content();
    
    const targetDir = path.join(process.cwd(), 'dist', route);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html);
    console.log(`✓ Prerendered: ${route}`);
    await page.close();
  }

  await browser.close();
  server.httpServer.close();
  process.exit(0);
}

prerender();