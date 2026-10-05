import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { plans } from '../../src/data/plans.js';

test('current pricing preserves original USD amounts, users, project caps and Stripe cycle IDs', () => {
  const expected = [
    { id: 'starter', monthly: 29, annual: 252, users: 1, projects: '5 active projects', monthlyId: 'price_1UMs7VIfI96QPT6lT0RLG9JI', annualId: 'price_1UMs8KIfI96QPT6lP4aiTEwb' },
    { id: 'professional', monthly: 59, annual: 588, users: 3, projects: 'Unlimited active projects', monthlyId: 'price_1UMs8NIfI96QPT6l4fb4CV40', annualId: 'price_1UMs8SIfI96QPT6lCL8Uxd7b' },
    { id: 'business', monthly: 159, annual: 1548, users: 10, projects: 'Unlimited active projects', monthlyId: 'price_1UMs8VIfI96QPT6lKDent3gP', annualId: 'price_1UMs8ZIfI96QPT6liR9UtHga' },
  ];
  assert.equal(plans.length, expected.length);
  for (const [index, { includes: includedFeatures, name, ...actual }] of plans.entries()) {
    assert.deepEqual(actual, expected[index]);
    assert.ok(name && includedFeatures.length);
  }
});

test('the legacy checkout entrypoint retains the same current USD IDs', async () => {
  const entry = await readFile(new URL('../../base44/functions/create-checkout-session/entry.ts', import.meta.url), 'utf8');
  const map = JSON.parse(entry.match(/const PRICE_MAP = (\{[\s\S]*?\n\});/)[1]);
  for (const plan of plans) {
    assert.deepEqual(map[plan.id], { monthly: plan.monthlyId, annual: plan.annualId });
  }
});
