import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {blogPosts, blogPath} from '../../src/data/blog.js';

const read = route => fs.readFileSync(path.join('dist', route, 'index.html'), 'utf8');
const meta = (html, name) => [...html.matchAll(/<meta\s[^>]*>/g)].filter(([tag]) => tag.includes(`name="${name}"`));

test('blog articles expose complete content, canonical URLs and article metadata before JavaScript', () => {
  for (const post of blogPosts) {
    const route = blogPath(post), html = read(route);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.equal(meta(html, 'description').length, 1);
    assert.equal(meta(html, 'robots').length, 1);
    assert.ok(html.includes(`rel="canonical" href="https://www.fuzedflow.com${route}"`));
    assert.ok(html.includes('content="index,follow,max-image-preview:large"'));
    assert.ok(html.includes('property="og:type" content="article"'));
    assert.ok(html.includes(`property="og:image" content="https://www.fuzedflow.com${post.hero}"`));
    assert.ok(html.includes('A better way to evaluate contractor software'));
    assert.ok(html.includes('name="email"') && html.includes('Ask the FuzedFlow team'));
    assert.ok(!html.includes('Loading Fuzed Flow'));
    const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(match => JSON.parse(match[1])['@graph']);
    const article = graphs.find(item => item['@type'] === 'BlogPosting');
    assert.equal(article.headline, post.title);
    assert.equal(article.dateModified, post.dateModified);
    assert.equal(article.author.url, 'https://www.fuzedflow.com/about');
    assert.equal(article.mainEntityOfPage['@id'], 'https://www.fuzedflow.com' + route);
    assert.ok(graphs.some(item => item['@type'] === 'BreadcrumbList'));
    for (const [, href] of html.matchAll(/href="(\/(?!\/)[^"?#]*)(?:[?#][^"]*)?"/g)) {
      assert.ok(fs.existsSync(path.join('dist', href, 'index.html')) || fs.existsSync(path.join('dist', href)), `Broken internal link: ${href}`);
    }
  }
});

test('blog articles can be discovered from the index, contextual links and sitemap', () => {
  const index = read('/blog');
  const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
  assert.ok(index.includes('name="robots" content="index,follow,max-image-preview:large"'));
  for (const post of blogPosts) {
    const route = blogPath(post);
    assert.ok(index.includes(`href="${route}"`));
    assert.ok(read('/about').includes(`href="${route}"`));
    assert.ok(read('/workflow-example').includes(`href="${route}"`));
    assert.ok(sitemap.includes(`<loc>https://www.fuzedflow.com${route}</loc><lastmod>${post.dateModified}</lastmod>`));
  }
  assert.ok(read('/').includes('href="/blog"'));
  assert.ok(sitemap.includes('<loc>https://www.fuzedflow.com/blog</loc>'));
});

test('existing pages retain their own metadata after article SEO support is added', () => {
  const html = read('/referrals');
  assert.equal(meta(html, 'description').length, 1);
  assert.ok(html.includes('property="og:type" content="website"'));
  assert.ok(!html.includes('property="article:published_time"'));
  assert.ok(html.includes('rel="canonical" href="https://www.fuzedflow.com/referrals"'));
});
