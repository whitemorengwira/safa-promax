'use client';

import { useState, useEffect } from 'react';
import { Reveal } from '@/components/motion/Reveal';

export function EcoStewardROI() {
  const [productionDays, setProductionDays] = useState<number>(20);
  const [crewSize, setCrewSize] = useState<number>(50);
  const [wasteReduction, setWasteReduction] = useState<number>(0);
  const [carbonSavings, setCarbonSavings] = useState<number>(0);
  const [costSavings, setCostSavings] = useState<number>(0);

  useEffect(() => {
    // Simplified ROI logic for GreenSet Eco-Stewards
    // 1 Eco-Steward per 50 crew members
    const stewardsNeeded = Math.ceil(crewSize / 50);
    
    // Savings estimates:
    // - Waste reduction: ~15kg per person per day
    // - Carbon: ~2.5kg CO2e per person per day through better logistics/waste
    // - Cost: ~R250 per person per day (catering waste, water, electricity)
    
    const totalWaste = crewSize * productionDays * 15 * 0.4; // 40% reduction
    const totalCarbon = crewSize * productionDays * 2.5 * 0.3; // 30% reduction
    const totalCost = crewSize * productionDays * 250 * 0.15; // 15% cost saving
    
    setWasteReduction(totalWaste);
    setCarbonSavings(totalCarbon);
    setCostSavings(totalCost);
  }, [productionDays, crewSize]);

  const formatNumber = (val: number) => new Intl.NumberFormat('en-ZA').format(Math.round(val));
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(val);

  return (
    <div className="bg-surface border border-line p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display text-gold">GreenSet Eco-Steward ROI</h3>
            <p className="text-text/80 text-sm leading-relaxed">
              Deploying SAFA-trained Eco-Stewards isn't just a sustainability choice—it's a commercial one. Calculate the projected environmental and financial impact of a GreenSet-managed production.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-[10px] font-body font-semibold uppercase tracking-widest text-gold-soft">
                Production Duration (Days)
              </label>
              <input 
                type="number"
                value={productionDays}
                onChange={(e) => setProductionDays(Number(e.target.value))}
                className="w-full bg-bg-deep border border-line px-4 py-3 text-text font-body focus:outline-none focus:border-gold"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-body font-semibold uppercase tracking-widest text-gold-soft">
                Total Crew & Cast Size
              </label>
              <input 
                type="number"
                value={crewSize}
                onChange={(e) => setCrewSize(Number(e.target.value))}
                className="w-full bg-bg-deep border border-line px-4 py-3 text-text font-body focus:outline-none focus:border-gold"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Reveal className="p-6 bg-bg-deep border border-line flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted">Projected Waste Diverted</span>
            <div className="text-4xl font-display text-gold-soft">{formatNumber(wasteReduction)} <span className="text-sm italic">kg</span></div>
            <p className="text-[9px] text-muted uppercase tracking-widest">Landfill avoidance through active sorting</p>
          </Reveal>

          <Reveal delay={0.1} className="p-6 bg-bg-deep border border-line flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted">Carbon Emissions Saved</span>
            <div className="text-4xl font-display text-gold-soft">{formatNumber(carbonSavings)} <span className="text-sm italic">kg CO2e</span></div>
            <p className="text-[9px] text-muted uppercase tracking-widest">Logistics and resource optimisation</p>
          </Reveal>

          <Reveal delay={0.2} className="p-6 bg-gold/5 border border-gold/20 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-gold">Projected Operational Saving</span>
            <div className="text-4xl font-display text-gold">{formatCurrency(costSavings)}</div>
            <p className="text-[9px] text-gold/60 uppercase tracking-widest">Catering, water, and resource efficiency</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
