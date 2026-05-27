// Per-section supplemental data for the strategy pages
// All data extracted verbatim from protocol/safa-strategy.html

import type { Metric, Card, TimelineEvent, Agent, KPIIndicator, BudgetCategory, BudgetRow } from '@/lib/content/types';

export interface SectionPageData {
  heroImageBrief: string;     // Getty Images search brief
  heroImageAlt: string;       // alt text for image
  metrics?: Metric[];
  cards?: Card[];
  events?: TimelineEvent[];
  agents?: Agent[];
  tableHeaders?: string[];
  tableRows?: (string | number)[][];
  budgetCategories?: BudgetCategory[];
  kpis?: KPIIndicator[];
  diagram?: 'ecosystem' | 'circuit' | 'topiccluster' | 'brandfamily' | 'radar' | 'agentorbit' | 'none';
}

export const pageData: Record<string, SectionPageData> = {
  // Section 02 — The Organisation
  organisation: {
    heroImageBrief: '/images/road-home/road-home-training-000.jpg',
    heroImageAlt: 'SA Film Academy production trainee working on set - Real asset from Road Home PDF',
    diagram: 'none',
    metrics: [
      {
        num: '',
        label: 'Investment',
        figure: 'R60',
        prefix: '',
        suffix: 'm+',
        description: 'In skills development and in-service training, since 2006.',
      },
      {
        num: '',
        label: 'Trainees & Interns',
        figure: '3000',
        prefix: '',
        suffix: '+',
        description: 'Placed across more than 500 local and international productions.',
      },
      {
        num: '',
        label: 'Black Student Base',
        figure: '96',
        prefix: '',
        suffix: '%',
        description: 'With 58% black female representation across the trainee body.',
      },
      {
        num: '',
        label: 'Driving Licences',
        figure: '124',
        prefix: '',
        suffix: '',
        description: 'Granted free through FILMGRO Driving Academy, sponsored by Suzuki.',
      },
    ],
  },

  // Section 03 — The Brand Ecosystem
  ecosystem: {
    heroImageBrief: '/images/road-home/road-home-training-004.jpg',
    heroImageAlt: 'SA Film Academy building - Real asset from Road Home PDF',
    diagram: 'ecosystem',
    cards: [
      {
        num: '01',
        tag: 'Core Entity',
        title: 'SA Film Academy',
        text: 'The MICT SETA-accredited Non-Profit Company that anchors everything — twenty years of placement, compliance and pathway-building.',
      },
      {
        num: '02',
        tag: 'Alumni Advancement',
        title: 'Academy of Creative Excellence (ACE)',
        text: 'The alumni advancement programme for trainees who have completed two to three years and are ready to move into crew positions.',
      },
      {
        num: '03',
        tag: 'CSI Initiative',
        title: 'FILMGRO Driving Academy',
        text: 'The ten-year, Suzuki-sponsored CSI initiative providing free professional driving lessons to trainees and interns.',
      },
      {
        num: '04',
        tag: 'Subsidiary',
        title: 'GreenSet',
        text: 'The sustainability subsidiary contracted by Netflix and international productions for sustainable set management and Eco-Steward training.',
      },
      {
        num: '05',
        tag: 'Digital Platform',
        title: 'SA Film Interns',
        text: 'The new digital portal that automates trainee placement and serves trainees and production companies simultaneously.',
      },
    ],
  },

  // Section 04 — Digital Infrastructure
  infrastructure: {
    heroImageBrief: '/images/road-home/road-home-training-007.jpg',
    heroImageAlt: 'Digital infrastructure and technology stack - Real asset from Road Home PDF',
    diagram: 'circuit',
    tableHeaders: ['Technology', 'Commercial Translation'],
    tableRows: [
      ['Vercel global edge', 'The portal loads as fast for an international production executive in London as it does for a placement coordinator in Johannesburg.'],
      ['Supabase real-time', 'Trainee availability and placement statuses update instantly across all dashboards, ending long email chains.'],
      ['Cloudflare boundary', 'Enterprise-grade security and POPIA-appropriate handling of personal data.'],
      ['Claude API matching', 'Placements scale without scaling the team.'],
      ['Production-grade build discipline', 'Every digital deliverable inherits the same architectural rigour applied to live production systems.'],
    ],
  },

  // Section 05 — The 12-Month Marketing Calendar
  calendar: {
    heroImageBrief: '/images/road-home/road-home-training-008.jpg',
    heroImageAlt: '12-month marketing calendar and timeline - Real asset from Road Home PDF',
    diagram: 'none',
    events: [
      {
        quarter: 'Q1',
        span: 'Jun – Aug 2026',
        theme: 'Foundation, Unification & Launch',
        description: 'Architecture, alignment, and the first visible signal that the new chapter has begun.',
        bullets: [
          'Strategy formally adopted and the implementation rhythm established with the executive team',
          'Brand audit across all five entities to establish a unified visual language',
          'Launch of the GreenSet co-brand integration campaign',
          'Formal SEO baseline audit on safilmacademy.org and the SA Film Interns portal',
        ],
      },
      {
        quarter: 'Q2',
        span: 'Sep – Nov 2026',
        theme: 'Growth, Visibility & Commercial Traction',
        description: 'From quiet authority to commercial signal — the brand starts converting attention into income.',
        bullets: [
          'GreenSet–Netflix case study published as flagship thought-leadership',
          'B-BBEE Skills Levy awareness campaign targeting SPV production accountants',
          'SA Film Interns public launch with the first ten confirmed production-company accounts',
          'FILMGRO Gauteng launch event',
        ],
      },
      {
        quarter: 'Q3',
        span: 'Dec 2026 – Feb 2027',
        theme: 'Authority, Thought Leadership & Funding',
        description: 'The Academy becomes the entity quoted, cited, and approached.',
        bullets: [
          'Agentic funding application pipeline operating weekly',
          'Annual impact report published digitally and distributed',
          'One major industry speaking engagement secured for the Chief Executive',
          'GreenSet blog series on sustainable production practices',
        ],
      },
      {
        quarter: 'Q4',
        span: 'Mar – May 2027',
        theme: 'Scale, Self-Sustainability & Renewal',
        description: 'The infrastructure pays for itself. Strategy renews for year two with a stronger position.',
        bullets: [
          'SA Film Interns commercial launch — full pricing model active',
          'The self-sustainability case modelled publicly',
          'All production-company SLAs reviewed and renewed with SA Film Interns bundling',
          'Twelve-month strategy review initiated and second-year blueprint drafted',
        ],
      },
    ],
  },

  // Section 06 — Agentic AI Marketing Engine
  'agentic-ai': {
    heroImageBrief: '/images/road-home/road-home-training-009.jpg',
    heroImageAlt: 'Agentic AI engine and autonomous workflows - Real asset from Road Home PDF',
    diagram: 'agentorbit',
    agents: [
      {
        tag: 'Agent 01',
        title: 'Weekly Funding Pipeline',
        text: 'Reads funding opportunity databases, scores SAFA against funder criteria, drafts applications.',
      },
      {
        tag: 'Agent 02',
        title: 'Content Studio',
        text: 'Drafts blog posts, case studies, and thought-leadership pieces from trainee placement data.',
      },
      {
        tag: 'Agent 03',
        title: 'Social Media Matching',
        text: 'Monitors mentions, engagement, and hashtags; drafts response templates.',
      },
      {
        tag: 'Agent 04',
        title: 'Trainee Reputation Monitor',
        text: 'Tracks alumnus placements, credits, and career progression across IMDb and LinkedIn.',
      },
      {
        tag: 'Agent 05',
        title: 'Competitive Intelligence',
        text: 'Monitors competitor positioning, pricing, and messaging; flags strategic shifts.',
      },
    ],
  },

  // Section 07 — SEO & AI SEO Strategy
  seo: {
    heroImageBrief: '/images/ai/v2/hero-seo.png',
    heroImageAlt: 'Young Black professional woman analysing SEO performance and data flows in a cinematic production office.',
    diagram: 'topiccluster',
  },

  // Section 08 — Brand Architecture & Identity
  brand: {
    heroImageBrief: '/images/ai/v2/hero-brand.png',
    heroImageAlt: 'Young Black professional man reviewing brand identity and design system in a high-end creative studio.',
    diagram: 'brandfamily',
    cards: [
      {
        num: '1',
        tag: 'Voice Principle',
        title: 'Authoritative Clarity',
        text: 'We speak as an institution with two decades of expertise. No jargon. Direct, measured, confident.',
      },
      {
        num: '2',
        tag: 'Voice Principle',
        title: 'Authentic Leadership',
        text: 'We centre the voices of our team and alumni. Their stories carry more weight than any claim we make.',
      },
      {
        num: '3',
        tag: 'Voice Principle',
        title: 'Commercial Honesty',
        text: 'We are not an NGO performing virtue. We are a sustainable commercial engine driving transformation.',
      },
      {
        num: '4',
        tag: 'Voice Principle',
        title: 'Uncompromising Standards',
        text: 'Every deliverable — from email to website to partner contract — reflects the same production-grade rigour.',
      },
    ],
  },

  // Section 09 — Institutional Voice & Executive Visibility
  leadership: {
    heroImageBrief: '/images/ai/visibility-leadership/hero-portrait.webp',
    heroImageAlt: 'Cinematic executive portrait of a young Black woman leader in the South African film industry.',
    diagram: 'none',
    tableHeaders: ['Window', 'Activation', 'Target Signal'],
    tableRows: [
      ['Q2 2026', 'LinkedIn thought-leadership series on SETA compliance and B-BBEE', 'Position as industry authority on legislative requirements'],
      ['Q3 2026', 'Speaking slot at Cineversary (Cape Town film festival)', 'Establish executive as keynote speaker in the industry'],
      ['Q4 2026', 'Feature interview in The Drum or Adweek on the future of South African talent', 'Third-party credibility and broad media reach'],
    ],
  },

  // Section 10 — B-BBEE & Skills Levy Commercial Strategy
  commercial: {
    heroImageBrief: '/images/ai/growth-commercial/hero-gold-coins.webp',
    heroImageAlt: 'Young Black professionals in a cinematic boardroom discussing B-BBEE scorecard and commercial strategy.',
    diagram: 'none',
    cards: [
      {
        num: '1',
        tag: 'Audience Segment',
        title: 'Production Accountants',
        text: 'They manage budgets and compliance for productions. A 1% skills levy is a line item they must account for and a compliance obligation they must satisfy.',
      },
      {
        num: '2',
        tag: 'Audience Segment',
        title: 'Legal & Compliance Teams',
        text: 'They manage B-BBEE scorecards and transformation reporting for production companies and SPVs. SAFA offers a measurable scoreboard improvement.',
      },
      {
        num: '3',
        tag: 'Audience Segment',
        title: 'Finance Directors',
        text: 'They sign off on skills development spend and transformational initiatives. A return-on-investment case backed by audited outcomes is what moves them.',
      },
    ],
  },

  // Section 11 — Community, Alumni & Stakeholder Engagement
  community: {
    heroImageBrief: '/images/ai/safa-community-hero.png',
    heroImageAlt: 'Young Black film professionals collaborating in a cinematic community workspace.',
    diagram: 'none',
    cards: [
      {
        num: '1',
        tag: 'Programme',
        title: 'Tiered WhatsApp Community',
        text: 'Segmented channels: Tier 1 interns, Tier 2 production trainees, Tier 3 senior trainees, Tier 4 ACE alumni. Opportunity announcements flow to the appropriate tier.',
      },
      {
        num: '2',
        tag: 'Programme',
        title: 'Ambassador Network',
        text: 'ACE alumni given ambassador status. Direct lead generation: they refer new trainees, they speak at events, they mentor juniors.',
      },
      {
        num: '3',
        tag: 'Programme',
        title: 'Mentorship Marketplace',
        text: 'Connect junior trainees with ACE alumni for 1:1 career guidance. Tracked and measured. Builds the narrative of continued support beyond placement.',
      },
      {
        num: '4',
        tag: 'Programme',
        title: 'Showcase & Awards',
        text: 'Annual alumni awards: Best First Placement, Rising HOD, Entrepreneurial Graduate. Nomination-driven, community-voted, heavily promoted.',
      },
      {
        num: '5',
        tag: 'Programme',
        title: 'The Ini Fund',
        text: 'Named micro-grant programme for ACE alumni producing their first short film, awarding up to R10k per project for kit rental.',
      },
      {
        num: '6',
        tag: 'Programme',
        title: 'Alumni Badge & Directory',
        text: 'Digital credential for SA Film Interns: "SAFA Alumni" badge on every ACE graduate profile. Searchable alumni directory on main website.',
      },
    ],
  },

  // Section 12 — Content Marketing & Storytelling Strategy
  content: {
    heroImageBrief: '/images/ai/visibility-content/hero-studio-glow.webp',
    heroImageAlt: 'Young Black professional operating a cinema camera in a high-end content creation studio.',
    diagram: 'none',
    cards: [
      {
        num: '1',
        tag: 'Content Pillar',
        title: 'Skills Legislation',
        text: 'How SETA funding works. B-BBEE scorecard mechanics. The 1% skills levy as a strategic tool, not a tax.',
      },
      {
        num: '2',
        tag: 'Content Pillar',
        title: 'AI in Post-Production',
        text: 'Veo, Kling, Hailuo: tools that are reshaping hiring. What skills matter now. How trainees are trained on these tools.',
      },
      {
        num: '3',
        tag: 'Content Pillar',
        title: 'Sustainability in Film',
        text: 'Netflix sustainability riders. EcoPAs. Green departments. How GreenSet is reshaping productions.',
      },
      {
        num: '4',
        tag: 'Content Pillar',
        title: 'The HOD Pathway',
        text: 'Profiles of trainee progressions to Head of Department. Career arcs. Salary benchmarks. Hiring timelines.',
      },
      {
        num: '5',
        tag: 'Content Pillar',
        title: 'South African Screen Market',
        text: 'Local production spend trends. International production coming to South Africa. Government incentives and policy.',
      },
    ],
  },

  // Section 13 — Partnerships, PR & Media Relations
  partnerships: {
    heroImageBrief: '/images/ai/safa-partnerships-hero.png',
    heroImageAlt: 'Young Black professionals in a cinematic corporate setting discussing strategic partnerships.',
    diagram: 'none',
    cards: [
      {
        num: '1',
        tag: 'Partnership',
        title: 'NFVF (National Film &amp; Video Foundation)',
        text: 'Funding co-signatory for ACE alumni short-film projects.',
      },
      {
        num: '2',
        tag: 'Partnership',
        title: 'DTI (Department of Trade &amp; Industry)',
        text: 'B-BBEE and incentive alignment for productions serviced from South Africa.',
      },
      {
        num: '3',
        tag: 'Partnership',
        title: 'Suzuki FILMGRO',
        text: 'Title sponsorship of the FILMGRO Driving Academy; vehicle donation and geographic expansion.',
      },
      {
        num: '4',
        tag: 'Partnership',
        title: 'Ikasi Media (Rural Outreach)',
        text: 'Partner for extending training reach into secondary towns and rural production hubs.',
      },
      {
        num: '5',
        tag: 'Partnership',
        title: 'Netflix (via GreenSet)',
        text: 'Recurring contracts for sustainable set management and Eco-Steward training on major productions.',
      },
      {
        num: '6',
        tag: 'Partnership',
        title: 'Cineversary Film Festival',
        text: 'Platform for institutional visibility, ACE alumni screenings, and thought-leadership speaking slots.',
      },
    ],
  },

  // Section 14 — Competitive Positioning & Differentiation
  positioning: {
    heroImageBrief: '/images/ai/safa-positioning-hero.png',
    heroImageAlt: 'Young Black professional woman analysing competitive positioning and market landscape.',
    diagram: 'radar',
    tableHeaders: ['Dimension', 'Sector Baseline', 'SA Film Academy Position'],
    tableRows: [
      [
        'SETA Compliance Fluency',
        'Generic HR / compliance interpretation',
        'Specialised MICT SETA expertise carried by every interaction; compliance is a revenue-generating asset, not a cost centre',
      ],
      [
        'B-BBEE Scorecard Mechanics',
        'Claimed compliance; unclear measurement',
        'Audited, publicly reported, measurable improvements to production company scorecards; quantified ROI on every Skills Levy spend',
      ],
      [
        'Production Company Commercial Context',
        'Training provider mentality',
        'Operational peer to production companies; understands production accounting, SPV structures, insurance, crew agreements, union rates',
      ],
      [
        'Trainee Career Pathway',
        'Placement and then???; disappearance',
        'Tiered progression model: intern → production trainee → senior trainee → ACE alumnus → crew → potential HOD; every tier visible and celebrated',
      ],
      [
        'Live Digital Infrastructure',
        'Email-driven manual processes',
        'SA Film Interns placement portal; real-time availability; agentic matching; enterprise-grade security and POPIA compliance',
      ],
      [
        'Agentic AI Execution',
        'Not yet a category',
        'Five autonomous agents running weekly; funding pipeline, content studio, social matching, reputation monitoring, competitive intelligence — reducing manual effort whilst maintaining quality',
      ],
    ],
  },

  // Section 15 — Agentic AI in the Training Curriculum
  curriculum: {
    heroImageBrief: '/images/ai/safa-curriculum-hero.png',
    heroImageAlt: 'Young Black students in a cinematic post-production suite learning AI workflows.',
    diagram: 'none',
    cards: [
      {
        num: '1',
        tag: 'Module',
        title: 'Veo Image Generation',
        text: 'Generative AI for creating cinematic imagery. Aesthetic direction, prompt engineering, iteration cycles.',
      },
      {
        num: '2',
        tag: 'Module',
        title: 'Kling Video Generation',
        text: 'Text-to-video and image-to-video synthesis. Practical use cases in commercial production.',
      },
      {
        num: '3',
        tag: 'Module',
        title: 'Hailuo Motion Capture',
        text: 'AI-driven motion synthesis from text or image. Character animation and visual effects workflows.',
      },
      {
        num: '4',
        tag: 'Module',
        title: 'Runway (Runway ML)',
        text: 'Industry-standard AI creative suite. Green screen synthesis, object removal, style transfer.',
      },
      {
        num: '5',
        tag: 'Module',
        title: 'Prompt Engineering &amp; Iteration',
        text: 'How to brief AI tools. Feedback loops. Quality control. The human judgment layer that AI cannot replace.',
      },
      {
        num: '6',
        tag: 'Module',
        title: 'Agentic Workflows',
        text: 'Chaining AI tools: Kling → Runway → colour grading. Batch processing. Cost optimisation. Time-to-delivery.',
      },
    ],
  },

  // Section 16 — Key Performance Indicators & Measurement Dashboard
  kpis: {
    heroImageBrief: '/images/ai/safa-kpi-hero.png',
    heroImageAlt: 'Young Black professional reviewing a cinematic KPI dashboard and measurement framework.',
    diagram: 'none',
    tableHeaders: ['Indicator', 'Baseline (Jun 2026)', 'Target (May 2027)', 'Owner'],
    tableRows: [
      ['SA Film Interns Registered Trainees', 80, 320, 'SAFA Operations'],
      ['SA Film Interns Registered Production Companies', 5, 40, 'SAFA Operations'],
      ['Live Production Placements (monthly)', 6, 24, 'SA Film Interns Agent'],
      ['Website Visitors (monthly)', 3200, 18000, 'SEO &amp; Content'],
      ['Email Subscribers', 450, 2100, 'Marketing'],
      ['LinkedIn Followers', 1800, 8400, 'Content &amp; Visibility'],
      ['Blog Posts Published (total)', 8, 48, 'Agentic Content Agent'],
      ['Thought-Leadership Speaking Slots', 0, 3, 'Executive Visibility'],
      ['NFVF Funding Applications Submitted', 0, 12, 'Agentic Funding Agent'],
      ['GreenSet Sustainability Contracts', 2, 8, 'GreenSet'],
      ['FILMGRO Licences Issued', 12, 36, 'FILMGRO Academy'],
      ['ACE Alumnus Placements (HOD or Crew)', 3, 12, 'Community Program'],
      ['B-BBEE Scorecard Improvement Clients', 0, 8, 'Commercial'],
      ['Press Mentions &amp; Earned Media', 4, 20, 'PR &amp; Partnerships'],
      ['Alumni Ambassador Network (active)', 12, 45, 'Community Program'],
    ],
  },

  // Section 17 — Budget Framework
  budget: {
    heroImageBrief: '/images/ai/safa-budget-hero.png',
    heroImageAlt: 'Young Black professional woman reviewing a cinematic budget framework and financial plan.',
    diagram: 'none',
    budgetCategories: [
      {
        name: 'Infrastructure & Tools',
        rows: [
          { item: 'Vercel Hosting', value: 'R380/month', notes: 'Global edge deployment' },
          { item: 'Supabase Database', value: 'R450/month', notes: 'Real-time updates, authentication, backups' },
          { item: 'Cloudflare WAF &amp; CDN', value: 'R380/month', notes: 'Security, POPIA compliance, performance' },
          { item: 'Anthropic Claude API', value: 'R3,800/month', notes: 'Agentic workflows and matching engine' },
          { item: 'Social Media Management', value: 'R900/month', notes: 'Scheduling, analytics, monitoring' },
          { item: 'SEO &amp; Analytics Tools', value: 'R1,800/month', notes: 'Ahrefs, GA4, search console integrations' },
        ],
      },
      {
        name: 'Execution & Content Production',
        rows: [
          { item: 'Content Production', value: 'R6,500/month', notes: 'Blog copywriting, research, editing' },
          { item: 'Photo &amp; Video Production', value: 'R4,200/month', notes: 'Stock licensing, bespoke photography, interviews' },
          { item: 'Paid Digital Advertising', value: 'R3,500/month', notes: 'LinkedIn, Google, Facebook campaigns' },
          { item: 'PR &amp; Media Outreach', value: 'R2,800/month', notes: 'Press release distribution, journalist relations' },
        ],
      },
      {
        name: 'Team &amp; Management',
        rows: [
          { item: 'Strategy &amp; Management', value: 'R8,000–12,500/month', notes: 'Senior oversight, campaign strategy, stakeholder reporting' },
        ],
      },
    ],
  },

  // Section 18 — Implementation Commencement
  implementation: {
    heroImageBrief: '/images/ai/delivery-implementation/clapperboard-action.webp',
    heroImageAlt: 'Young Black film professionals in a cinematic project launch and implementation kickoff.',
    diagram: 'none',
    metrics: [
      {
        num: '1',
        label: 'TRACK',
        figure: '3',
        prefix: 'Simultaneous Activation',
        suffix: 'Tracks',
        description: 'Three parallel workstreams launching June 1st, closing the month with reportable deliverables.',
      },
      {
        num: '2',
        label: 'TIMELINE',
        figure: '30',
        prefix: 'Days to',
        suffix: 'First Placement',
        description: 'SA Film Interns open beta closes with the first confirmed trainee–production company placement logged.',
      },
      {
        num: '3',
        label: 'CONTENT',
        figure: '8',
        prefix: 'SEO Blog Posts',
        suffix: 'Published',
        description: 'Agentic content studio operational. First week of June sees 8 blog posts live on safilmacademy.org.',
      },
      {
        num: '4',
        label: 'PARTNERSHIPS',
        figure: '5',
        prefix: 'Employer Accounts',
        suffix: 'Active',
        description: 'Five production companies signed and actively posting roles to SA Film Interns by end of June.',
      },
    ],
    cards: [
      {
        num: 'TRACK 01',
        tag: 'Activation',
        title: 'SA Film Interns Platform',
        text: 'Open beta with 50 trainee profiles migrated. First 5 employer accounts activated. First confirmed placement event logged by June 30.',
      },
      {
        num: 'TRACK 02',
        tag: 'Activation',
        title: 'Content Pipeline at Cadence',
        text: '8 SEO blog posts. 1 State of Industry report. GreenSet co-brand launch campaign. Agentic content agent operational.',
      },
      {
        num: 'TRACK 03',
        tag: 'Activation',
        title: 'Brand &amp; Voice Launch',
        text: 'GreenSet co-brand integration live. Chief Executive LinkedIn strategy activated. First thought-leadership piece published.',
      },
    ],
  },
};
