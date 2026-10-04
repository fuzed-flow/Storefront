import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

async function loadPlans() {
  const source = await readFile(new URL('../../src/components/home/constants.js', import.meta.url), 'utf8');
  const importMatch = source.match(/import \{([\s\S]*?)\} from 'lucide-react';/);
  const context = Object.fromEntries(importMatch[1].split(',').map(s => [s.trim(), {}]));
  const script = source.replace(importMatch[0], '').replace(/export const /g, 'const ') + '\n globalThis.plans = DEFAULT_PLANS;';
  const sandbox = vm.createContext(context);
  new vm.Script(script).runInContext(sandbox);
  return JSON.parse(JSON.stringify(sandbox.plans));
}

test('pricing toggles show original Stripe amounts and select the corresponding USD cycle', async () => {
  const plans = await loadPlans();
  const home = await readFile(new URL('../../src/pages/Home.jsx', import.meta.url), 'utf8');
  const start = home.indexOf('                const displayPrice =');
  const end = home.indexOf('                return (', start);
  assert.ok(start >= 0 && end > start);
  const renderPricing = new Function('plan', 'isAnnual',
    home.slice(start, end) + 'return { displayPrice, billingText, checkoutLink };');
  const expected = [
    { monthly: '$29', annual: '$21', total: 252 },
    { monthly: '$59', annual: '$49', total: 588 },
    { monthly: '$159', annual: '$129', total: 1548 },
  ];
  for (let i = 0; i < 3; i++) {
    for (const isAnnual of [false, true]) {
      const plan = plans[i];
      const result = renderPricing(plan, isAnnual);
      assert.equal(result.displayPrice, isAnnual ? expected[i].annual : expected[i].monthly);
      const url = new URL(result.checkoutLink);
      assert.equal(url.origin, 'https://app.fuzedflow.com');
      assert.equal(url.searchParams.get('plan'), plan.priceIds[isAnnual ? 'annual' : 'monthly']);
      if (isAnnual) assert.ok(result.billingText.includes(expected[i].total.toLocaleString('en-US') + ' USD/year'));
    }
  }
  assert.match(home, />\/mo USD<\/span>/);
  assert.match(home, /14-day free trial/);
});

test('the legacy checkout entrypoint offers all three plans with the same USD IDs', async () => {
  const plans = await loadPlans();
  const entry = await readFile(new URL('../../base44/functions/create-checkout-session/entry.ts', import.meta.url), 'utf8');
  const map = JSON.parse(entry.match(/const PRICE_MAP = (\{[\s\S]*?\n\});/)[1]);
  for (const plan of plans.slice(0, 3)) {
    assert.deepEqual(map[plan.name.toLowerCase()], plan.priceIds);
  }
});
