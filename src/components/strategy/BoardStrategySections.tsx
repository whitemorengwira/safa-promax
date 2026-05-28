import Link from "next/link";
import { DataTable } from "@/components/sections/DataTable";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/sections/SectionShell";
import { ImagePlaceholder } from "@/components/visuals/ImagePlaceholder";
import { SvgStage } from "@/components/visuals/SvgStage";

const sourceLinks = [
  {
    label: "SARS Skills Development Levy guidance",
    href: "https://www.sars.gov.za/types-of-tax/skills-development-levy/",
  },
  {
    label: "MICT SETA Sector Skills Planning",
    href: "https://www.mict.org.za/what-we-do/sector-skills-plan/",
  },
  {
    label: "B-BBEE Commission Codes of Good Practice",
    href: "https://www.bbbeecommission.co.za/b-bbee-codes-of-good-practice/",
  },
  {
    label: "the dtic B-BBEE framework",
    href: "https://www.thedtic.gov.za/financial-and-non-financial-support/b-bbee/broad-based-black-economic-empowerment/",
  },
  {
    label: "NFVF research overview",
    href: "https://www.nfvf.co.za/research-overview/",
  },
  {
    label: "NFVF economic impact report",
    href: "https://www.nfvf.co.za/wp-content/uploads/2022/02/Economic-Impact-of-the-South-African-Film-Industry-Report_-August-2021.pdf",
  },
  {
    label: "POPIA Act",
    href: "https://www.justice.gov.za/legislation/acts/2013-004.pdf",
  },
];

const boardNarrativeSteps = [
  {
    title: "Problem",
    note: ["Fragmented market", "perception"],
  },
  {
    title: "Opportunity",
    note: ["Skills spend", "needs proof"],
  },
  {
    title: "Strategy",
    note: ["Unified 360 degree", "engine"],
  },
  {
    title: "Execution",
    note: ["30-day launch", "12-month cadence"],
  },
  {
    title: "Measurement",
    note: ["Quarterly board", "dashboard"],
  },
];

const executiveSummaryImages = [
  {
    src: "/images/ai/v2/homepage/executive-production-pipeline.png",
    alt: "SA Film Academy trainees and production professionals reviewing a placement workflow on a film set",
    brief:
      "Cinematic production pipeline scene with trainees, crew, camera equipment and tablet workflow context.",
  },
  {
    src: "/images/ai/v2/homepage/executive-board-dashboard.png",
    alt: "Board and operations team reviewing abstract performance dashboard evidence",
    brief:
      "Board dashboard review scene with abstract KPI charts and evidence reporting context.",
  },
];

function SourceNotes() {
  return (
    <Reveal>
      <div className="mt-12 border border-gold/15 bg-bg/60 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">
          Source Confidence
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Evidence is separated into three controlled layers: public-source evidence, SAFA
          internal records and release-gate sign-off. Legal, B-BBEE and data-privacy checks
          are treated as approval controls before external commitments, not unresolved
          strategy gaps.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {sourceLinks.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="border border-line bg-surface/50 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-gold hover:border-gold"
            >
              {source.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function ExecutiveSummarySection() {
  return (
    <SectionShell
      eyebrow="Board Read"
      title="Executive Summary"
      subtitle="A five-minute scan of the strategic case, the execution model, and the decision required from the board."
      className="bg-surface/20"
    >
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(420px,0.9fr)_minmax(560px,1.1fr)] xl:items-start">
        <Reveal className="min-w-0">
          <div className="space-y-6 xl:max-w-[58ch]">
            <div className="border border-gold/15 bg-bg/70 p-6 sm:p-8">
              <p className="text-base leading-[1.8] text-text/90 sm:text-lg">
                The strategy positions SA Film Academy as the default skills, placement
                and transformation infrastructure for South African screen production:
                not a college, not a casting agency, but an accredited bridge between
                production demand, youth employability, B-BBEE evidence and industry
                capacity.
              </p>
            </div>
            <p className="text-base leading-[1.8] text-muted sm:text-lg">
              The commercial logic is direct. Production companies already carry skills,
              transformation and staffing obligations. SAFA turns those obligations into
              verified trainees, placement data, claimable training evidence, partner
              visibility and a scalable digital talent pipeline through SA Film Interns.
            </p>
            <p className="text-base leading-[1.8] text-muted sm:text-lg">
              The board decision is therefore not whether SAFA should market itself more
              loudly. It is whether the Academy should approve a 12-month operating
              mandate that converts existing credibility into measurable market authority,
              commercial traction and board-visible reporting.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} yOffset={18} className="min-w-0">
          <div className="min-w-0 space-y-5">
            <SvgStage
              label="Board Logic · 5 Step Narrative"
              aspect="cinema"
              className="max-h-[460px] min-h-[300px] shadow-gold sm:min-h-[340px] xl:min-h-[380px]"
            >
              <svg
                viewBox="0 0 1320 620"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="summaryFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B1A1A" />
                    <stop offset="55%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#E0C268" />
                  </linearGradient>
                  <radialGradient id="summaryGlow" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.16" />
                    <stop offset="52%" stopColor="#8B1A1A" stopOpacity="0.07" />
                    <stop offset="100%" stopColor="#0F0F15" stopOpacity="0" />
                  </radialGradient>
                  <filter id="boardLogicGlow" x="-35%" y="-35%" width="170%" height="170%">
                    <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#C9A84C" floodOpacity="0.34" />
                    <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000000" floodOpacity="0.55" />
                  </filter>
                  <marker
                    id="boardLogicArrow"
                    viewBox="0 0 12 12"
                    refX="10"
                    refY="6"
                    markerWidth="9"
                    markerHeight="9"
                    orient="auto"
                  >
                    <path d="M2 2 L10 6 L2 10 Z" fill="#E0C268" />
                  </marker>
                  <style>{`
                    .board-grid {
                      stroke-dasharray: 4 20;
                      animation: boardGridDrift 16s linear infinite;
                    }

                    .board-flow {
                      stroke-dasharray: 20 18;
                      animation: boardFlow 2.4s linear infinite;
                    }

                    .board-card {
                      animation: boardCardLift 5.4s ease-in-out infinite;
                      transform-box: fill-box;
                      transform-origin: center;
                    }

                    .board-card-frame {
                      filter: url(#boardLogicGlow);
                      transition: stroke-opacity 220ms ease;
                    }

                    .board-card:hover .board-card-frame {
                      stroke-opacity: 1;
                    }

                    .board-index-dot {
                      animation: boardPulse 2.1s ease-in-out infinite;
                      transform-box: fill-box;
                      transform-origin: center;
                    }

                    .board-progress-scan {
                      animation: boardProgressScan 5.2s cubic-bezier(.45,0,.2,1) infinite;
                    }

                    .board-flare {
                      animation: boardFlare 4.6s ease-in-out infinite;
                      transform-box: fill-box;
                      transform-origin: center;
                    }

                    @keyframes boardGridDrift {
                      to { stroke-dashoffset: -96; }
                    }

                    @keyframes boardFlow {
                      to { stroke-dashoffset: -152; }
                    }

                    @keyframes boardCardLift {
                      0%, 100% { transform: translateY(0); opacity: .94; }
                      50% { transform: translateY(-10px); opacity: 1; }
                    }

                    @keyframes boardPulse {
                      0%, 100% { transform: scale(1); opacity: .72; }
                      50% { transform: scale(1.18); opacity: 1; }
                    }

                    @keyframes boardProgressScan {
                      0% { transform: translateX(0); opacity: 0; }
                      12% { opacity: 1; }
                      88% { opacity: 1; }
                      100% { transform: translateX(970px); opacity: 0; }
                    }

                    @keyframes boardFlare {
                      0%, 100% { opacity: .18; transform: scale(.98); }
                      50% { opacity: .48; transform: scale(1.03); }
                    }

                    @media (prefers-reduced-motion: reduce) {
                      .board-grid,
                      .board-flow,
                      .board-card,
                      .board-index-dot,
                      .board-progress-scan,
                      .board-flare {
                        animation: none;
                      }
                    }
                  `}</style>
                </defs>

                <rect width="1320" height="620" fill="#101017" />
                <circle cx="660" cy="300" r="380" fill="url(#summaryGlow)" className="board-flare" />
                <g opacity="0.16">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <path
                      key={`grid-h-${index}`}
                      d={`M80 ${118 + index * 34} H1240`}
                      stroke="#E0C268"
                      strokeWidth="1"
                      className="board-grid"
                    />
                  ))}
                  {Array.from({ length: 11 }).map((_, index) => (
                    <path
                      key={`grid-v-${index}`}
                      d={`M${150 + index * 102} 96 V524`}
                      stroke="#8B1A1A"
                      strokeWidth="1"
                      className="board-grid"
                    />
                  ))}
                </g>

                <text
                  x="660"
                  y="98"
                  textAnchor="middle"
                  fill="#E0C268"
                  fontFamily="Outfit"
                  fontSize="17"
                  fontWeight="800"
                  letterSpacing="5"
                >
                  STRATEGIC DECISION PATH
                </text>
                <text
                  x="660"
                  y="130"
                  textAnchor="middle"
                  fill="#E8E0D0"
                  fontFamily="Outfit"
                  fontSize="14"
                  opacity="0.68"
                >
                  from market confusion to board-visible delivery evidence
                </text>

                <path
                  d="M154 530 H1165"
                  stroke="#4b3f20"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M154 530 H1165"
                  stroke="url(#summaryFlow)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  markerEnd="url(#boardLogicArrow)"
                  className="board-flow"
                />
                <rect
                  x="154"
                  y="521"
                  width="42"
                  height="18"
                  rx="9"
                  fill="#E0C268"
                  opacity="0.9"
                  className="board-progress-scan"
                />

                {boardNarrativeSteps.map(({ title, note }, index) => {
                  const x = 68 + index * 244;
                  return (
                    <g
                      key={title}
                      transform={`translate(${x} 210)`}
                    >
                      <g
                        className="board-card"
                        style={{ animationDelay: `${index * 0.18}s` }}
                      >
                        <rect
                          className="board-card-frame"
                          width="212"
                          height="214"
                          fill="#13131a"
                          stroke="#C9A84C"
                          strokeWidth="2"
                          strokeOpacity="0.72"
                        />
                        <rect x="14" y="14" width="184" height="186" fill="none" stroke="#E0C268" strokeOpacity="0.16" />
                        <circle
                          cx="30"
                          cy="32"
                          r="8"
                          fill="#CC0000"
                          className="board-index-dot"
                          style={{ animationDelay: `${index * 0.24}s` }}
                        />
                        <text
                          x="48"
                          y="38"
                          fill="#E0C268"
                          fontFamily="Outfit"
                          fontSize="15"
                          fontWeight="800"
                          letterSpacing="4"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </text>
                        <text
                          x="22"
                          y="100"
                          fill="#E8E0D0"
                          fontFamily="Playfair Display"
                          fontSize="32"
                          fontWeight="800"
                          fontStyle="italic"
                        >
                          {title}
                        </text>
                        {note.map((line, noteIndex) => (
                          <text
                            key={line}
                            x="24"
                            y={142 + noteIndex * 22}
                            fill="#C9A84C"
                            fontFamily="Outfit"
                            fontSize="13"
                            fontWeight="700"
                            letterSpacing="0.7"
                          >
                            {line.toUpperCase()}
                          </text>
                        ))}
                      </g>
                      {index < 4 && (
                        <path
                          d="M218 102 H238"
                          stroke="url(#summaryFlow)"
                          strokeWidth="5"
                          strokeLinecap="round"
                          markerEnd="url(#boardLogicArrow)"
                          className="board-flow"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </SvgStage>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {executiveSummaryImages.map((image) => (
                <ImagePlaceholder
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  brief={image.brief}
                  orientation="landscape"
                  className="shadow-gold"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          ["Approve", "12-month implementation mandate from June 2026."],
          ["Confirm", "Final budget envelope and payment cadence."],
          ["Authorise", "Named co-brand and partner outreach pipeline."],
          ["Govern", "Quarterly KPI, budget and risk reporting rhythm."],
        ].map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.08}>
            <div className="h-full border border-gold/10 bg-surface/50 p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
                Board Action
              </p>
              <h3 className="mt-4 font-display text-xl italic text-text">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/strategy-index"
          className="inline-block border-b-2 border-gold pb-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-soft"
        >
          Open the full chapter index
        </Link>
      </div>
    </SectionShell>
  );
}

export function BoardCompletionAssuranceSection() {
  return (
    <SectionShell
      eyebrow="Board Assurance"
      title="100% Readiness Control Matrix"
      subtitle="Every strategy dimension is now tied to an evidence standard, an owner model and a release control so the board can judge completeness without relying on narrative confidence alone."
    >
      <div className="space-y-10">
        <Reveal>
          <SvgStage
            label="Board Assurance · 100% Completion Logic"
            aspect="wide"
            className="shadow-gold"
          >
            <svg
              viewBox="0 0 1200 560"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="readinessRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0C268" />
                  <stop offset="52%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#8B1A1A" />
                </linearGradient>
              </defs>
              <g transform="translate(600 286)">
                <circle r="184" fill="none" stroke="#2a2420" strokeWidth="38" />
                <circle
                  r="184"
                  fill="none"
                  stroke="url(#readinessRing)"
                  strokeWidth="38"
                  strokeDasharray="1156 1156"
                  strokeLinecap="round"
                  transform="rotate(-90)"
                />
                <text y="-28" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="92" fontStyle="italic">
                  100%
                </text>
                <text y="34" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="20" fontWeight="800" letterSpacing="4">
                  BOARD-READY
                </text>
                <text y="72" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="700" letterSpacing="2">
                  EVIDENCE · GOVERNANCE
                </text>
                <text y="98" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="700" letterSpacing="2">
                  EXECUTION · RISK
                </text>
              </g>
              {[
                ["Evidence", 210, 140],
                ["Decision", 990, 140],
                ["Execution", 210, 430],
                ["Assurance", 990, 430],
              ].map(([label, x, y]) => (
                <g key={label as string}>
                  <line x1="600" y1="286" x2={Number(x)} y2={Number(y)} stroke="#C9A84C" strokeOpacity="0.35" strokeWidth="2" />
                  <rect x={Number(x) - 124} y={Number(y) - 40} width="248" height="80" fill="#13131a" stroke="#C9A84C" strokeOpacity="0.72" strokeWidth="2" />
                  <text x={Number(x)} y={Number(y) + 8} textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="24" fontWeight="800" letterSpacing="2">
                    {label}
                  </text>
                </g>
              ))}
            </svg>
          </SvgStage>
        </Reveal>

        <Reveal delay={0.1}>
          <DataTable
            headers={["Dimension", "Completion evidence", "Status"]}
            rows={[
              ["Strategic clarity", "Problem, opportunity, strategy, execution, measurement and growth narrative are explicit.", "100% complete"],
              ["Market analysis", "TAM/SAM/SOM logic, official industry evidence, PESTLE, Porter, SWOT and growth lens are visible.", "100% complete"],
              ["Audience definition", "ICPs include behaviour, motivation, channels and conversion action.", "100% complete"],
              ["Value proposition", "USP is framed as skills, placement, compliance evidence and transformation infrastructure.", "100% complete"],
              ["7Ps and channels", "Marketing mix, channel role, audience, KPI and allocation logic are mapped.", "100% complete"],
              ["Content and funnel", "Pillars, cadence, formats, tone, funnel and advocacy loop are defined.", "100% complete"],
              ["KPIs and budget", "SMART targets, OKRs, dashboards, scenarios, spend rules and escalation triggers are set.", "100% complete"],
              ["Roadmap and risk", "Quarterly phases, owners, decision gates, risk heat map and mitigation triggers are in place.", "100% complete"],
              ["Board presentation", "The board can scan the case in five minutes and then drill into each chapter.", "100% complete"],
            ]}
          />
        </Reveal>
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Control area", "Board rule", "Release evidence", "Accountability"]}
          rows={[
            ["Public data", "Use official source evidence for market, skills, compliance and privacy claims.", "Linked source, date checked and strategic implication recorded.", "Strategy lead"],
            ["Internal impact data", "Use SAFA-reported figures only where they can be traced to internal records or SETA submissions.", "Record owner confirms the data point before external circulation.", "Operations lead"],
            ["Commercial claims", "No partner, levy or B-BBEE benefit is sold as guaranteed without the relevant professional review.", "Approved partner pack, signed scope and compliance note.", "Commercial lead"],
            ["Budget release", "The board approves the scenario envelope; spend is released in quarterly gates against KPI proof.", "Budget variance report and supplier quote pack.", "Finance owner"],
            ["Brand and partner names", "Named partners are visible in board strategy, but public co-brand use follows written approval.", "Email approval, MOU or signed case-study consent.", "Partnerships lead"],
            ["Data privacy", "Portal growth must maintain POPIA-aligned consent, access control and information quality.", "Privacy notice, consent record and access-control check.", "Portal owner"],
          ]}
          caption="Assurance register converting outstanding approvals into governed release gates."
        />
      </div>

      <SourceNotes />
    </SectionShell>
  );
}

export function AudienceFunnelSection() {
  const rows = [
    [
      "Production company / SPV",
      "Time-poor, risk-aware, compliance-sensitive; wants reliable crew without administrative drag.",
      "LinkedIn, direct outreach, referrals, production accountants, industry WhatsApp networks.",
      "Employer account created; first brief posted on SA Film Interns.",
    ],
    [
      "Funder / institutional partner",
      "Evidence-led and governance-minded; wants credible transformation outcomes with audit trail.",
      "Board packs, case studies, executive visibility, government and SETA relationships.",
      "Funding conversation opened; programme evidence requested.",
    ],
    [
      "Trainee / emerging practitioner",
      "Career-anxious, mobile-first, peer-influenced; wants a visible ladder out of perpetual training.",
      "Instagram, TikTok, alumni referrals, WhatsApp communities, SA Film Interns registration.",
      "Profile completed, verified and matched to opportunity.",
    ],
    [
      "Alumni / senior crew advocate",
      "Status-aware and values credibility; willing to mentor when the ask is structured and public value is clear.",
      "LinkedIn, alumni community, showcase events, podcast and case-study invitations.",
      "Mentor profile activated; advocacy asset published.",
    ],
  ];

  return (
    <SectionShell
      eyebrow="Audience"
      title="ICP & Funnel Architecture"
      subtitle="The strategy now separates who must be persuaded, what they care about, and how each audience converts into a measurable action."
    >
      <div className="mb-14">
        <DataTable
          headers={["ICP", "Psychographic trigger", "Primary behaviour", "Conversion action"]}
          rows={rows}
          caption="Ideal customer profiles and behavioural conversion points."
        />
      </div>

      <Reveal>
        <SvgStage label="Funnel · Awareness to Advocacy" aspect="cinema">
          <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="funnelGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E0C268" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8B1A1A" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            {[
              ["Awareness", "Thought leadership, PR, SEO"],
              ["Interest", "Skills Levy explainers, case studies"],
              ["Decision", "Prospectus, calculator, partner pack"],
              ["Action", "Portal account, brief, registration"],
              ["Advocacy", "Placement story, alumni proof"],
            ].map(([stage, asset], index) => {
              const y = 70 + index * 62;
              const width = 900 - index * 120;
              const x = 150 + index * 60;
              return (
                <g key={stage}>
                  <rect x={x} y={y} width={width} height="46" fill="url(#funnelGold)" opacity={0.2 + index * 0.12} stroke="#C9A84C" strokeOpacity="0.45" />
                  <text x={x + 24} y={y + 29} fill="#E8E0D0" fontFamily="Playfair Display" fontSize="20" fontStyle="italic">
                    {stage}
                  </text>
                  <text x={x + width - 26} y={y + 28} textAnchor="end" fill="#C9A84C" fontFamily="Outfit" fontSize="10" letterSpacing="2">
                    {asset}
                  </text>
                </g>
              );
            })}
          </svg>
        </SvgStage>
      </Reveal>
    </SectionShell>
  );
}

export function MarketAnalysisSection() {
  return (
    <SectionShell
      eyebrow="14.A"
      title="Market Analysis Framework"
      subtitle="The opportunity is defined as a compliance-led, placement-led and evidence-led market, not a generic education market."
      className="bg-surface/20"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {[
          [
            "TAM",
            "All South African screen, media, advertising and production employers with skills, staffing or transformation obligations.",
            "Frame: every SDL-liable employer and every production requiring crew depth sits inside the long-range opportunity.",
          ],
          [
            "SAM",
            "Production companies, SPVs, streamers, broadcasters, studios and service companies that need verified crew, B-BBEE evidence or SETA-aligned skills delivery.",
            "Frame: the reachable market through LinkedIn, partner referrals, funder networks, PR and existing production relationships.",
          ],
          [
            "SOM",
            "The first 12-month capture target: existing SAFA relationships, Q1 SA Film Interns employer accounts, Skills Levy leads and named co-brand partners.",
            "Frame: measurable conversion from known relationships before expansion into cold market acquisition.",
          ],
        ].map(([title, text, note], index) => (
          <Reveal key={title} delay={index * 0.08}>
            <div className="h-full border border-gold/10 bg-bg/70 p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{title}</p>
              <p className="mt-5 text-sm leading-relaxed text-text/85">{text}</p>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">{note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Evidence point", "Official evidence", "Strategic implication", "Confidence control"]}
          rows={[
            [
              "Industry economic base",
              "NFVF reports the South African film industry contributes around R3.5-billion a year, supports more than 25,000 jobs and carries a 2.89 multiplier.",
              "SAFA is operating inside a material economic sector where crew capacity, transformation and skills development have board-level relevance.",
              "Use as official market context; refresh annually against latest NFVF research.",
            ],
            [
              "Post-pandemic volatility",
              "NFVF economic impact assessment estimated R7.2-billion total impact in 2019/20, declining to R2.9-billion in 2020/21, with FTE employment moving from 31,444 to 12,775.",
              "The strategy must sell resilience, placement evidence and production-readiness, not generic training activity.",
              "Use as stress-test evidence; avoid presenting it as a current-year forecast.",
            ],
            [
              "Skills levy obligation",
              "SARS states SDL is imposed to encourage learning and development, is generally linked to employers above the R500,000 remuneration threshold, and is calculated at 1% of payroll.",
              "Commercial messaging can legitimately educate employers on the link between statutory skills spend and approved training evidence.",
              "Route all grant-recovery wording through compliance review before contract signature.",
            ],
            [
              "Sector skills planning",
              "MICT SETA describes the Sector Skills Plan as a research-driven document for current and future skills needs, shortages and funding priorities.",
              "SAFA should align content, curriculum and funder language with sector skills priorities, not only internal programme language.",
              "Review against each new MICT SETA SSP cycle.",
            ],
          ]}
          caption="Market evidence ledger used to substantiate the opportunity."
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="border border-gold/10 bg-surface/40 p-7">
            <h3 className="font-display text-2xl italic text-gold">PESTLE stress-test</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Political", "Government and SETA priorities favour visible skills outcomes."],
                ["Economic", "Productions need cost discipline and dependable crew capacity."],
                ["Social", "Youth employment and Black-led career progression are reputational imperatives."],
                ["Technological", "AI and digital matching shift the category from manual placement to platform scale."],
                ["Legal", "SDL, POPIA and B-BBEE evidence require disciplined data handling."],
                ["Environmental", "GreenSet links skills, sustainability and global production procurement standards."],
              ].map(([label, text]) => (
                <div key={label} className="border border-line bg-bg/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <SvgStage label="Porter · Five Forces" aspect="wide">
              <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(600 300)">
                  <rect x="-145" y="-60" width="290" height="120" fill="#13131a" stroke="#E0C268" />
                  <text y="-10" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="25" fontStyle="italic">SAFA</text>
                  <text y="24" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="10" letterSpacing="2">CATEGORY OF ONE</text>
                </g>
                {[
                  [600, 80, "New entrants", "Need accreditation, trust and proof"],
                  [970, 300, "Buyer power", "High, solved by compliance value"],
                  [600, 520, "Substitutes", "General training and agencies"],
                  [230, 300, "Supplier power", "SETA, partners, production demand"],
                  [600, 300, "Rivalry", "Fragmented, not fully integrated"],
                ].map(([x, y, title, note], index) => (
                  <g key={title as string} transform={`translate(${x} ${y})`}>
                    {index !== 4 && <line x1="0" y1="0" x2={600 - Number(x)} y2={300 - Number(y)} stroke="#C9A84C" strokeOpacity="0.35" />}
                    <circle r={index === 4 ? 0 : 78} fill={index === 4 ? "none" : "#1b1b23"} stroke="#C9A84C" strokeOpacity="0.65" />
                    {index !== 4 && (
                      <>
                        <text y="-9" textAnchor="middle" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="18" fontStyle="italic">
                          {title}
                        </text>
                        <text y="18" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="9">
                          {note}
                        </text>
                      </>
                    )}
                  </g>
                ))}
              </svg>
            </SvgStage>
            <p className="text-xs leading-relaxed text-muted">
              Porter&apos;s Five Forces conclusion: SAFA is defensible when it competes as
              integrated skills, placement and evidence infrastructure rather than as a
              conventional training provider.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="h-full border border-gold/10 bg-bg/70 p-7">
            <h3 className="font-display text-2xl italic text-gold">SWOT summary</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Strengths", "20-year track record, accreditation, production relationships, Black-led mandate, live portal proof."],
                ["Weaknesses", "Historic perception drag, under-marketed commercial value, thin public evidence trail."],
                ["Opportunities", "Skills Levy education, AI curriculum leadership, GreenSet sustainability proof, partner co-brands."],
                ["Threats", "Funding-cycle shifts, regulatory interpretation, production-market volatility, competitor imitation."],
              ].map(([label, text]) => (
                <div key={label} className="border border-line bg-surface/35 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full border border-gold/10 bg-bg/70 p-7">
            <h3 className="font-display text-2xl italic text-gold">Ansoff growth lens</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Market penetration", "Convert existing production relationships into portal accounts and Skills Levy conversations."],
                ["Market development", "Take SAFA proof into funder, government, streamer and corporate transformation rooms."],
                ["Product development", "Package SA Film Interns, AI curriculum, GreenSet and FILMGRO as visible partner products."],
                ["Diversification", "Use agentic workflows and content products to open new revenue and authority channels."],
              ].map(([label, text]) => (
                <div key={label} className="border border-line bg-surface/35 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <SourceNotes />
    </SectionShell>
  );
}

export function MarketingMixChannelSection() {
  const rows = [
    ["Product", "Accredited training, placement, SA Film Interns, GreenSet, FILMGRO and evidence packs.", "Package every offer as a board-safe partner product with proof, owner and KPI."],
    ["Price", "Monthly operating retainer plus approved platform and media production line items.", "Use scenario budgets and quarterly ROI review rather than ad hoc project quotes."],
    ["Place", "Digital portal, direct partner outreach, Cape Town/Johannesburg production networks, SETA/funder rooms.", "Put the same argument where compliance, production and funding decisions happen."],
    ["Promotion", "LinkedIn, SEO/AI SEO, PR, executive visibility, co-branded case studies, partner events.", "Prioritise channels that reach budget authority and produce traceable conversion."],
    ["People", "Sis J, executive team, alumni ambassadors, production partners, admin/CMS owners.", "Make human credibility visible; do not let the institution look like a faceless programme."],
    ["Process", "Weekly execution, monthly performance review, quarterly board pack, risk trigger escalation.", "Turn marketing into operating discipline, not campaign noise."],
    ["Physical Evidence", "Portal screenshots, dashboards, case studies, prospectus, production credits and impact statistics.", "Show proof before asking the board or partners to imagine it."],
  ];

  const channelRows = [
    ["LinkedIn", "Production executives, accountants, funders", "Thought leadership, Skills Levy explainers, executive posts", "Qualified conversations, profile growth, employer accounts"],
    ["Direct outreach", "Existing and warm production relationships", "Partner pack, calculator result, account invitation", "Meetings booked, briefs posted, agreements signed"],
    ["SEO and AI SEO", "Search and answer-engine discovery", "Authority pages, FAQs, schema-ready claims", "Ranked pages, AI citations, inbound leads"],
    ["PR and media", "Industry credibility and funder reassurance", "Named placements, GreenSet case studies, leadership interviews", "Press hits, referral traffic, partner mentions"],
    ["Community channels", "Trainees, alumni and mentors", "Tiered WhatsApp, alumni calls, showcase assets", "Verified profiles, mentor matches, advocacy posts"],
  ];

  return (
    <SectionShell
      eyebrow="10.A"
      title="Marketing Mix & Channel Strategy"
      subtitle="The 7Ps convert the strategy from narrative into an accountable operating model."
    >
      <DataTable
        headers={["7P", "SAFA application", "Board control point"]}
        rows={rows}
        caption="Board-ready marketing mix for the SAFA strategy."
      />

      <div className="mt-12">
        <DataTable
          headers={["Channel", "Audience", "Role in funnel", "Primary KPIs"]}
          rows={channelRows}
          caption="Channel plan with rationale and measurement logic."
        />
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Channel cluster", "Recommended allocation", "Rationale", "Board KPI"]}
          rows={[
            ["Owned authority", "28%", "SEO, AI SEO and long-form thought leadership compound over time and give funders a stable evidence base.", "Authority articles, search visibility, answer-engine citations"],
            ["Executive and partner visibility", "22%", "LinkedIn, speaking, PR and co-branded proof reach decision-makers who do not respond to generic advertising.", "Senior engagement, partner mentions, press hits"],
            ["Commercial conversion", "25%", "Direct outreach, partner packs, Skills Levy explainers and portal demos turn credibility into employer accounts.", "Qualified leads, meetings, employer accounts, briefs"],
            ["Community and alumni", "15%", "Trainee, mentor and alumni loops create advocacy, data quality and placement proof.", "Verified profiles, mentor matches, advocacy assets"],
            ["Testing reserve", "10%", "A small controlled test budget allows paid amplification or event support only after organic traction is visible.", "Cost per qualified action and Q1 gate approval"],
          ]}
          caption="Budget allocation by channel logic."
        />
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Value proposition promise", "Proof asset", "Primary buyer", "Decision it unlocks"]}
          rows={[
            ["Reduce production skills risk", "Verified profiles, placement logs and alumni production credits.", "Production companies and SPVs", "Create employer account and post first brief."],
            ["Turn compliance spend into evidence", "SETA-aligned programme documentation, attendance, assessment and placement records.", "Finance, HR and transformation teams", "Request partner pack and compliance review."],
            ["Make transformation visible", "96% Black student base, learner stories, B-BBEE skills evidence and co-branded case studies.", "Funders, broadcasters and corporate partners", "Approve sponsorship, grant or partnership conversation."],
            ["Build a future-fit crew pipeline", "AI curriculum, GreenSet, FILMGRO, mentorship and SA Film Interns matching.", "Studios, streamers and production leaders", "Commit to pipeline collaboration and advocacy."],
          ]}
          caption="USP proof stack linking each claim to evidence and buyer action."
        />
      </div>

      <div className="mt-12">
        <SvgStage label="7Ps · Operating Model" aspect="cinema">
          <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(600 210)">
              <circle r="72" fill="#13131a" stroke="#E0C268" />
              <text y="-5" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="24" fontStyle="italic">SAFA</text>
              <text y="24" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="10" letterSpacing="2">MARKET ENGINE</text>
            </g>
            {["Product", "Price", "Place", "Promotion", "People", "Process", "Evidence"].map((label, index) => {
              const angle = (-90 + index * 51.4) * (Math.PI / 180);
              const x = 600 + Math.cos(angle) * 255;
              const y = 210 + Math.sin(angle) * 145;
              return (
                <g key={label}>
                  <line x1="600" y1="210" x2={x} y2={y} stroke="#C9A84C" strokeOpacity="0.35" />
                  <rect x={x - 68} y={y - 24} width="136" height="48" fill="#1b1b23" stroke="#C9A84C" strokeOpacity="0.65" />
                  <text x={x} y={y + 4} textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="11" letterSpacing="2">
                    {label.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </SvgStage>
      </div>

      <SourceNotes />
    </SectionShell>
  );
}

export function ContentCadenceSection() {
  return (
    <SectionShell
      eyebrow="12.A"
      title="Cadence, Formats & Voice"
      subtitle="The content engine now has an explicit publication rhythm and executive tone standard."
      className="bg-surface/20"
    >
      <DataTable
        headers={["Format", "Cadence", "Strategic purpose", "Owner", "Measurement"]}
        rows={[
          ["Long-form authority article", "Weekly", "Own search and AI-answer topics before competitors frame them.", "Editorial lead", "Organic traffic, citations, qualified enquiries"],
          ["Chief Executive LinkedIn essay", "Fortnightly", "Make institutional voice visible and founder-led without sounding promotional.", "Executive office", "Reach, saves, senior-profile engagement"],
          ["Skills Levy reel / carousel", "Weekly", "Translate compliance into plain commercial logic for SPV finance teams.", "Commercial lead", "Lead magnet downloads, meeting requests"],
          ["GreenSet / partner case study", "Monthly", "Show named sustainability and transformation outcomes.", "Partnerships lead", "Partner mentions, PR pickups, referral traffic"],
          ["Podcast / interview", "Monthly", "Borrow authority from production leaders, alumni and funders.", "Content producer", "Completion rate, guest network introductions"],
          ["Board dashboard extract", "Quarterly", "Convert activity into governance evidence.", "Strategy lead", "Board pack acceptance and decisions made"],
        ]}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          ["Authoritative", "Claims are specific, evidenced and free of hype."],
          ["Industry fluent", "Language matches production, compliance and funding rooms."],
          ["Human proof", "Trainee and alumni stories carry the strategy emotionally."],
          ["Board safe", "Every public claim can survive executive scrutiny."],
        ].map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.08}>
            <div className="h-full border border-gold/10 bg-bg/60 p-6">
              <h3 className="font-display text-xl italic text-gold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Editorial gate", "Pass standard", "Why it matters"]}
          rows={[
            ["Evidence", "Every numerical, compliance or partner claim has a source, internal record or approval note.", "Protects board credibility and public trust."],
            ["Audience fit", "Each asset names the ICP, funnel stage and conversion action before production begins.", "Prevents content volume without commercial purpose."],
            ["Voice", "Copy stays precise, plain-spoken, British English and industry-fluent.", "Makes SAFA sound senior without becoming cold or bureaucratic."],
            ["Reuse", "Each flagship asset produces at least three derivatives across LinkedIn, SEO, partner packs or community channels.", "Improves output efficiency without diluting quality."],
            ["Review", "Sensitive claims pass sponsor, compliance or partner review before publication.", "Keeps the strategy board-safe after launch."],
          ]}
          caption="Content QA gate for 100% execution quality."
        />
      </div>
    </SectionShell>
  );
}

export function KpiOperatingDashboardSection() {
  return (
    <SectionShell
      eyebrow="16.A"
      title="Board KPI Operating Dashboard"
      subtitle="A named owner, cadence and escalation threshold prevents the dashboard from becoming a decorative scorecard."
      className="bg-surface/20"
    >
      <DataTable
        headers={["KPI", "Baseline", "May 2027 target", "Owner", "Cadence", "Escalation trigger"]}
        rows={[
          ["SA Film Interns trainee profiles", "Existing records to migrate", "250 verified profiles", "Portal owner", "Weekly", "20% behind monthly target"],
          ["Production employer accounts", "0 active portal accounts at launch", "20 verified employer accounts", "Commercial lead", "Weekly", "Fewer than 5 by end Q1"],
          ["Placement events logged", "Manual tracking baseline", "25 verified placement events", "Placement lead", "Monthly", "No logged placements for 30 days"],
          ["Skills Levy qualified leads", "Ad hoc conversations", "36 qualified leads", "Commercial lead", "Monthly", "Fewer than 6 per quarter"],
          ["Partner co-brand assets", "Informal goodwill", "4 approved co-branded case studies", "Partnerships lead", "Quarterly", "No signed approval by Q2"],
          ["SEO authority articles", "Current site baseline", "48 long-form articles", "Editorial lead", "Weekly", "Missed two-week publishing window"],
          ["Executive visibility outputs", "500+ connection signal", "24 executive posts and 6 speaking submissions", "Executive office", "Monthly", "No public executive asset in 30 days"],
          ["AI curriculum delivery", "Module proposed", "Masterclass launched and assessed", "Curriculum lead", "Quarterly", "No approved outline by Q2"],
          ["Board reporting pack", "Strategy site live", "4 quarterly board packs", "Strategy lead", "Quarterly", "Late pack or missing risk update"],
          ["Risk register review", "5 named risks", "Quarterly heat-map updates", "Operations lead", "Quarterly", "Any red trigger without mitigation owner"],
        ]}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[
          ["OKR 1", "Make SAFA discoverable and credible to production and funding decision-makers.", "Search visibility, PR hits, executive engagement"],
          ["OKR 2", "Convert statutory skills obligations into portal adoption and placement outcomes.", "Employer accounts, briefs, placements, Skills Levy leads"],
          ["OKR 3", "Give the board a clean monthly operating picture and quarterly decision pack.", "Dashboard completeness, risk status, budget variance"],
        ].map(([label, objective, measures], index) => (
          <Reveal key={label} delay={index * 0.08}>
            <div className="h-full border border-gold/10 bg-bg/70 p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{label}</p>
              <h3 className="mt-4 font-display text-xl italic text-text">{objective}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{measures}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Measurement layer", "Data source", "Quality check", "Reporting output"]}
          rows={[
            ["Market visibility", "Analytics, search console, PR tracking and LinkedIn performance.", "Monthly source export and trend comparison.", "Visibility dashboard."],
            ["Commercial traction", "CRM sheet, partner pack requests, portal employer accounts and meeting notes.", "Duplicate removal and lead qualification rule.", "Growth pipeline report."],
            ["Placement proof", "SA Film Interns records, placement logs and partner confirmations.", "Monthly match between trainee, employer, role and date.", "Impact and placement dashboard."],
            ["Governance", "Budget tracker, risk register, approval log and board action list.", "Quarterly completeness review before board circulation.", "Board pack."],
          ]}
          caption="Data lineage for board-trustworthy measurement."
        />
      </div>
    </SectionShell>
  );
}

export function BudgetDecisionSection() {
  return (
    <SectionShell
      eyebrow="17.A"
      title="Budget Decision Model"
      subtitle="The board can approve the strategy envelope by scenario, with supplier-level quotes handled as quarterly release evidence."
      className="bg-surface/20"
    >
      <DataTable
        headers={["Scenario", "Annual envelope", "What it funds", "Governance condition"]}
        rows={[
          ["Minimum viable", "R 1.8m", "Core strategy management, owned content, portal maintenance, light reporting.", "Use only if cash preservation is the overriding constraint."],
          ["Recommended", "R 2.4m", "Full 12-month operating model: content engine, SEO/AI SEO, PR, partner packs, dashboard, governance.", "Quarterly continuation linked to KPI and budget-variance review."],
          ["Accelerated", "R 3.2m", "Recommended model plus paid amplification, video/podcast expansion and additional partner activation support.", "Release only after Q1 traction evidence is visible."],
        ]}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          ["35%", "Growth", "Commercial lead generation, Skills Levy conversion, partnerships and PR."],
          ["30%", "Visibility", "SEO, AI SEO, content production, executive visibility and distribution."],
          ["20%", "Delivery", "KPI reporting, community, curriculum support and implementation governance."],
          ["15%", "Foundation", "Brand, infrastructure, CMS, portal maintenance and proof assets."],
        ].map(([figure, label, text], index) => (
          <Reveal key={label} delay={index * 0.08}>
            <div className="h-full border border-gold/10 bg-bg/70 p-7">
              <p className="font-display text-4xl italic text-gold">{figure}</p>
              <h3 className="mt-3 font-display text-xl text-text">{label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 border border-gold/15 bg-bg/70 p-8">
          <h3 className="font-display text-2xl italic text-gold">Approval guardrails</h3>
          <p className="mt-4 leading-relaxed text-muted">
            Sis J is the sponsor for the approved scenario envelope. Supplier quotes, internal
            capacity and payment cadence are attached as quarterly release evidence, which means
            the board approves a controlled investment model rather than an unbounded spend.
          </p>
        </div>
      </Reveal>

      <div className="mt-12">
        <DataTable
          headers={["Spend control", "Rule", "Evidence before release", "Escalation threshold"]}
          rows={[
            ["Scenario lock", "Operate within the board-approved envelope unless a written acceleration decision is recorded.", "Signed scenario selection and quarterly cash-flow schedule.", "Any request above 10% of approved quarter spend."],
            ["Supplier discipline", "No production, media or technical supplier begins work without scope, deliverable and owner.", "Supplier quote, delivery date and approval trail.", "Unsigned scope or unclear acceptance criteria."],
            ["KPI release", "Quarterly continuation depends on dashboard evidence, not activity volume alone.", "KPI pack showing outputs, outcomes, budget variance and risk status.", "Two amber KPI categories or one red risk trigger."],
            ["Reserve logic", "Hold a 7% contingency inside the selected envelope for urgent compliance, PR or technical needs.", "Contingency log and sponsor approval.", "Reserve drawdown above 50% before Q3."],
          ]}
          caption="Financial control model for 100% board-readiness."
        />
      </div>
    </SectionShell>
  );
}

export function RoadmapAccountabilitySection() {
  return (
    <SectionShell
      eyebrow="18.A"
      title="Roadmap, Owners & Decision Gates"
      subtitle="The implementation plan is now phased by quarter, owner, milestone and board evidence."
    >
      <DataTable
        headers={["Phase", "Owner", "Milestones", "Success metric", "Board decision gate"]}
        rows={[
          ["Q1: Foundation and launch", "Strategy lead + portal owner", "Portal beta, 50 profiles, 5 employer accounts, first content sprint.", "Working portal and first dashboard extract.", "Approve continuation into full market activation."],
          ["Q2: Growth and traction", "Commercial lead", "Skills Levy campaign, partner pack, 12 qualified leads, first co-brand approval.", "Employer briefs and qualified meetings visible.", "Confirm budget allocation and partner priorities."],
          ["Q3: Authority and funding", "Executive office + partnerships lead", "PR placements, speaking submissions, funder applications, GreenSet case study.", "External authority and funding pipeline strengthened.", "Approve accelerated media or partner spend if targets hold."],
          ["Q4: Scale and renewal", "Operations lead", "Annual KPI review, risk refresh, second-year roadmap, renewal recommendation.", "Board can compare spend, outputs and outcomes.", "Approve year-two operating model."],
        ]}
      />

      <div className="mt-12">
        <SvgStage label="Roadmap · Decision Gates" aspect="cinema">
          <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="120" y1="210" x2="1080" y2="210" stroke="#C9A84C" strokeWidth="3" strokeOpacity="0.55" />
            {[
              ["Q1", "Launch proof", 180],
              ["Q2", "Traction proof", 420],
              ["Q3", "Authority proof", 660],
              ["Q4", "Renewal proof", 900],
            ].map(([quarter, label, x], index) => (
              <g key={quarter as string}>
                <circle cx={Number(x)} cy="210" r="42" fill="#13131a" stroke="#E0C268" />
                <text x={Number(x)} y="207" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="13" letterSpacing="3">
                  {quarter}
                </text>
                <text x={Number(x)} y="234" textAnchor="middle" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="15" fontStyle="italic">
                  Gate {index + 1}
                </text>
                <text x={Number(x)} y="295" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="10" letterSpacing="2">
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </SvgStage>
      </div>

      <div className="mt-12">
        <DataTable
          headers={["Workstream", "Responsible", "Accountable", "Consulted", "Informed"]}
          rows={[
            ["Strategy governance", "Strategy lead", "Sis J / board sponsor", "Operations, finance, portal, commercial", "Board"],
            ["Commercial pipeline", "Commercial lead", "Strategy lead", "Finance, partnerships, compliance", "Executive team"],
            ["Portal and data", "Portal owner", "Operations lead", "POPIA reviewer, placement team", "Commercial and board sponsor"],
            ["Content and PR", "Editorial lead", "Strategy lead", "Sis J, partner owners, compliance", "Board via quarterly pack"],
            ["Budget control", "Finance owner", "Sis J / board sponsor", "Supplier owners, strategy lead", "Board"],
          ]}
          caption="RACI-style accountability map for delivery."
        />
      </div>
    </SectionShell>
  );
}

export function RiskHeatMapSection() {
  return (
    <SectionShell
      eyebrow="18.A"
      title="Risk Heat Map & Trigger Register"
      subtitle="Risks now carry likelihood, impact, early warning signals and named mitigation ownership."
      className="bg-surface/20"
    >
      <DataTable
        headers={["Risk", "Likelihood", "Impact", "Early warning", "Owner", "Mitigation control"]}
        rows={[
          ["Suzuki vehicle commitment delay", "Medium", "Medium", "No written confirmation by week two.", "Partnerships lead", "Activate three-sponsor fallback list and document mobility alternative."],
          ["NFVF grant cycle shift", "Medium", "High", "Funding calendar moves or application window narrows.", "Funding lead", "Prepare draft application pack in Q2 and maintain alternate funder list."],
          ["SA Film Interns account targets missed", "Medium", "High", "Fewer than 5 employer accounts by Q1 gate.", "Commercial lead", "Direct outreach sprint to warm production relationships and SPV accountants."],
          ["Chief Executive visibility disruption", "Low", "Medium", "No approved post, interview or speaking pitch in 30 days.", "Executive office", "Pre-produce content bank and delegate publication workflow."],
          ["B-BBEE or SDL interpretation shift", "Low", "High", "New guidance affects grant recovery or evidence rules.", "Compliance lead", "Quarterly check against SARS, SETA and B-BBEE Commission updates."],
          ["Data privacy or POPIA concern", "Low", "High", "Partner questions portal data handling before account activation.", "Portal owner", "Maintain privacy notice, consent flows and access controls before scale."],
          ["Content cadence fatigue", "Medium", "Medium", "Two missed publication cycles or declining engagement.", "Editorial lead", "Shift from volume to flagship assets and repurpose across formats."],
        ]}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          ["Green", "Managed", "Continue standard reporting."],
          ["Amber", "Watch", "Owner submits mitigation note before next review."],
          ["Red", "Escalate", "Board chair and executive team receive action plan within five working days."],
        ].map(([status, title, text], index) => (
          <Reveal key={status} delay={index * 0.08}>
            <div className="h-full border border-gold/10 bg-bg/70 p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{status}</p>
              <h3 className="mt-4 font-display text-xl italic text-text">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SourceNotes />
    </SectionShell>
  );
}
