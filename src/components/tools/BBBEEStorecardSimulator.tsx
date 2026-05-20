'use client';

import { useState, useEffect } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { DataTable } from '@/components/sections/DataTable';

export function BBBEEStorecardSimulator() {
  const [leviableAmount, setLeviableAmount] = useState<number>(10000000);
  const [currentSpend, setCurrentSpend] = useState<number>(0);
  const [safaInvestment, setSafaInvestment] = useState<number>(250000);
  
  const [targetSpend, setTargetSpend] = useState<number>(0);
  const [pointsEarned, setPointsEarned] = useState<number>(0);
  const [bonusPoints, setBonusPoints] = useState<number>(0);

  useEffect(() => {
    // Skills Development target is typically 6% of leviable amount
    const target = leviableAmount * 0.06;
    setTargetSpend(target);

    // Calculate points (simplified logic for simulator)
    const totalSpend = currentSpend + safaInvestment;
    const rawPoints = (totalSpend / target) * 20; // 20 points for Skills Development
    setPointsEarned(Math.min(rawPoints, 20));

    // Bonus points for absorption (simplified)
    if (safaInvestment > 100000) {
      setBonusPoints(5);
    } else {
      setBonusPoints(0);
    }
  }, [leviableAmount, currentSpend, safaInvestment]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(val);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display text-gold">B-BBEE Skills Pillar Simulator</h3>
            <p className="text-text/80 leading-relaxed">
              The Skills Development pillar is often the most difficult to achieve. By partnering with SAFA, you can optimize your spend through accredited training that delivers both points and real-world production value.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-[10px] font-body font-semibold uppercase tracking-widest text-gold-soft">
                Annual Leviable Amount (Payroll)
              </label>
              <input 
                type="number"
                value={leviableAmount}
                onChange={(e) => setLeviableAmount(Number(e.target.value))}
                className="w-full bg-surface border border-line px-4 py-3 text-text font-body focus:outline-none focus:border-gold"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-body font-semibold uppercase tracking-widest text-gold-soft">
                Current Skills Spend (Excl. SAFA)
              </label>
              <input 
                type="number"
                value={currentSpend}
                onChange={(e) => setCurrentSpend(Number(e.target.value))}
                className="w-full bg-surface border border-line px-4 py-3 text-text font-body focus:outline-none focus:border-gold"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-body font-semibold uppercase tracking-widest text-gold">
                Proposed SAFA Investment
              </label>
              <input 
                type="range" 
                min="0" 
                max="1000000" 
                step="10000"
                value={safaInvestment}
                onChange={(e) => setSafaInvestment(Number(e.target.value))}
                className="w-full h-2 bg-surface-2 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between items-center">
                <span className="text-xl font-display text-gold">{formatCurrency(safaInvestment)}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="space-y-6">
          <div className="bg-surface border border-line p-8 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted">6% Target Spend</span>
                <div className="text-2xl font-display text-text">{formatCurrency(targetSpend)}</div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted">Total Projected Spend</span>
                <div className="text-2xl font-display text-gold-soft">{formatCurrency(currentSpend + safaInvestment)}</div>
              </div>
            </div>

            <div className="pt-8 border-t border-line">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-gold">Projected Pillar Points</span>
                <div className="text-5xl font-display text-gold">{(pointsEarned + bonusPoints).toFixed(2)} <span className="text-sm italic text-muted">/ 25.00</span></div>
              </div>
              
              <div className="w-full h-1 bg-surface-2 overflow-hidden">
                <div 
                  className="h-full bg-gold transition-all duration-1000 ease-out"
                  style={{ width: `${((pointsEarned + bonusPoints) / 25) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-bg-deep border border-line">
                <span className="block text-[9px] font-body font-semibold uppercase tracking-widest text-muted mb-1">Core Points</span>
                <span className="text-lg font-display text-text">{pointsEarned.toFixed(2)}</span>
              </div>
              <div className="p-4 bg-bg-deep border border-line">
                <span className="block text-[9px] font-body font-semibold uppercase tracking-widest text-muted mb-1">Bonus Points</span>
                <span className="text-lg font-display text-text">{bonusPoints.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-red/30 bg-red/5">
            <p className="text-xs text-text/70 leading-relaxed italic">
              "Strategic investment in SAFA's accredited programs allows for the simultaneous achievement of Skills Development targets and Enterprise Development goals through our unique institutional structure."
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <DataTable 
          headers={['B-BBEE Element', 'Weighting', 'SAFA Contribution', 'Strategic Value']}
          rows={[
            ['Skills Development', '20 Points', 'Accredited Training', 'Direct Pillar Points'],
            ['Enterprise Development', '5 Points', 'Institutional Support', 'Supply Chain Transformation'],
            ['Socio-Economic Dev', '5 Points', 'Academy Bursaries', 'Community Impact'],
            ['Absorption Bonus', '5 Points', 'Placement Pipeline', 'Maximum Score Optimization'],
          ]}
        />
      </Reveal>
    </div>
  );
}
