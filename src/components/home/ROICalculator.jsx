import React, { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const roiMetrics = ['Save 10+ Hours Weekly', 'Close More Jobs', 'Reduce Admin Work', 'Improve Cash Flow', 'Increase Team Accountability'];

export default function ROICalculator() {
  const [projects, setProjects] = useState([12]);
  const [hourlyRate, setHourlyRate] = useState([65]);
  const hoursSaved = useMemo(() => Math.max(10, projects[0] * 3), [projects]);
  const revenueRecovered = useMemo(() => hoursSaved * hourlyRate[0], [hoursSaved, hourlyRate]);

  return (
    <section id="trial" className="border-b border-border px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">ROI</p>
          <h2 className="font-heading text-3xl uppercase leading-tight md:text-5xl">How Much Time and Money Are You Losing Every Week?</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">Use Fuzed Flow to reduce admin drag, move faster, and keep your team accountable.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {roiMetrics.map(metric => <div key={metric} className="border border-border p-5"><Check className="mb-3 h-5 w-5 text-primary" /><p className="font-bold">{metric}</p></div>)}
          </div>
        </div>
        <div className="border-2 border-foreground bg-primary p-7 text-primary-foreground shadow-[12px_12px_0_#111111]">
          <p className="font-heading text-2xl uppercase">Monthly Projects</p>
          <div className="my-6"><Slider value={projects} onValueChange={setProjects} min={3} max={60} step={1} /></div>
          <p className="font-heading text-2xl uppercase">Your Hourly Rate</p>
          <div className="my-6"><Slider value={hourlyRate} onValueChange={setHourlyRate} min={25} max={150} step={5} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background p-4 sm:p-5 text-foreground"><p className="text-xs sm:text-sm">Projects</p><p className="font-heading text-3xl sm:text-4xl">{projects[0]}</p></div>
            <div className="bg-foreground p-4 sm:p-5 text-background"><p className="text-xs sm:text-sm">Hours Saved</p><p className="font-heading text-3xl sm:text-4xl">{hoursSaved}+</p></div>
          </div>
          <div className="mt-4 bg-background p-4 sm:p-5 text-foreground">
            <p className="text-xs sm:text-sm">Revenue Recovered / Month</p>
            <p className="font-heading text-3xl sm:text-4xl">${revenueRecovered.toLocaleString()}+</p>
          </div>
        </div>
      </div>
    </section>
  );
}