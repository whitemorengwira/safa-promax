'use client';

import { useState, useEffect } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { DataTable } from '@/components/sections/DataTable';

export function SkillsLevyCalculator() {
  const [annualPayroll, setAnnualPayroll] = useState<number>(5000000);
  const [levyAmount, setLevyAmount] = useState<number>(0);
  const [mandatoryGrant, setMandatoryGrant] = useState<number>(0);
  const [discretionaryGrant, setDiscretionaryGrant] = useState<number>(0);
  const [totalRecovery, setTotalRecovery] = useState<number>(0);

  useEffect(() => {
    // SDL is 1% of annual payroll
    const sdl = annualPayroll * 0.01;
    // Indicative mandatory grant model: confirm current SETA rules before use.
    const mg = sdl * 0.20;
    // Discretionary grant potential is indicative and approval-dependent.
    const dg = sdl * 0.495;
    
    setLevyAmount(sdl);
    setMandatoryGrant(mg);
    setDiscretionaryGrant(dg);
    setTotalRecovery(mg + dg);
  }, [annualPayroll]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(val);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal className="space-y-6">
          <h3 className="text-2xl font-display text-gold">Calculate Your Strategic Recovery</h3>
          <p className="text-text/80 leading-relaxed">
            Every South African company with an annual payroll exceeding R500,000 is mandated to pay a 1% Skills Development Levy (SDL). Most see this as a tax. We see it as a strategic budget for transformation.
          </p>
          
          <div className="space-y-4 pt-4">
            <label className="block text-xs font-body font-semibold uppercase tracking-widest text-gold-soft">
              Annual Total Payroll (ZAR)
            </label>
            <input 
              type="range" 
              min="500000" 
              max="50000000" 
              step="100000"
              value={annualPayroll}
              onChange={(e) => setAnnualPayroll(Number(e.target.value))}
              className="w-full h-2 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-gold"
            />
            <div className="flex justify-between items-center">
              <span className="text-2xl font-display text-text">{formatCurrency(annualPayroll)}</span>
              <input 
                type="number"
                value={annualPayroll}
                onChange={(e) => setAnnualPayroll(Number(e.target.value))}
                className="bg-surface border border-line px-4 py-2 text-gold font-body focus:outline-none focus:border-gold w-40"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="bg-surface border border-line p-8 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          
          <div className="space-y-2">
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted">Annual SDL Contribution</span>
            <div className="text-4xl font-display text-text">{formatCurrency(levyAmount)}</div>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-line pt-8">
            <div className="space-y-1">
              <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted">Indicative Mandatory Grant</span>
              <div className="text-xl font-display text-gold-soft">{formatCurrency(mandatoryGrant)}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted">Discretionary Potential</span>
              <div className="text-xl font-display text-gold-soft">{formatCurrency(discretionaryGrant)}</div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/20 p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-body font-semibold uppercase tracking-widest text-gold">Total Potential Recovery</span>
              <span className="text-2xl font-display text-gold">{formatCurrency(totalRecovery)}</span>
            </div>
            <p className="text-[10px] text-gold/60 mt-2 uppercase tracking-wider">
              *Indicative only; subject to current SETA rules, successful WSP/ATR submission and discretionary grant approval.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <DataTable 
          headers={['Recovery Stream', 'Percentage', 'Requirement', 'SAFA Role']}
          rows={[
            ['Mandatory Grant', 'Indicative 20%', 'WSP/ATR Submission', 'Compliance Documentation'],
            ['Discretionary Grant', 'Up to 49.5%', 'Pivotal Skills Training', 'Accredited Training Partner'],
            ['B-BBEE Skills Spend', 'Targeted', '6% of Leviable Amount', 'Scorecard Optimisation'],
          ]}
          caption="The SA Film Academy acts as your strategic partner in preparing the evidence required for recovery streams through accredited, high-impact film industry training."
        />
      </Reveal>
    </div>
  );
}
