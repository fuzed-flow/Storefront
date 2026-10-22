import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {features} from '../../src/data/features.js';

const strengthenedSlugs=['expense-tracking','estimating','reporting'];

test('priority feature pages have unique, complete search descriptions',()=>{
 const selected=strengthenedSlugs.map(slug=>features.find(feature=>feature.slug===slug));
 assert.ok(selected.every(Boolean));
 assert.equal(new Set(selected.map(feature=>feature.seoTitle)).size,selected.length);
 assert.equal(new Set(selected.map(feature=>feature.description)).size,selected.length);
 for(const feature of selected){
  assert.ok(feature.description.length>=110&&feature.description.length<=160,`${feature.slug} description length`);
  assert.match(feature.description,/[.!?]$/,`${feature.slug} description ends cleanly`);
  assert.equal(feature.dateModified,'2026-10-21');
 }
});

test('priority feature pages contain substantive, app-specific content',()=>{
 for(const slug of strengthenedSlugs){
  const feature=features.find(item=>item.slug===slug);
  assert.ok(feature.benefits.length>=3,`${slug} benefits`);
  assert.ok(feature.detailSections.length>=4,`${slug} detail sections`);
  assert.ok(feature.faq.length>=4,`${slug} FAQs`);
  const detailWords=JSON.stringify(feature.detailSections).split(/\s+/).length;
  assert.ok(detailWords>=225,`${slug} detail word count`);
 }
});

test('automatic feature descriptions truncate only at a word boundary',async()=>{
 const component=await readFile(new URL('../../src/pages/FeatureDetail.jsx',import.meta.url),'utf8');
 assert.doesNotMatch(component,/overview\.slice\(0,95\)/);
 assert.ok(component.includes(".replace(/\\s+\\S*$/,'')"));
});
