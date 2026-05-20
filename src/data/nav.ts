export interface NavItem {
  name: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface Pillar {
  title: string;
  slug: string;
  description: string;
  icon: string;
  subpages: PillarItem[];
}

export interface PillarItem {
  name: string;
  href: string;
  description: string;
}

export const mainNavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Smart Tools", href: "/smart-tools" },
  { name: "Contact", href: "/contact" },
];

export const strategySections: NavItem[] = [
  { name: "02 The Organisation", href: "/foundation/organisation" },
  { name: "03 Brand Ecosystem", href: "/foundation/ecosystem" },
  { name: "04 Digital Infrastructure", href: "/foundation/infrastructure" },
  { name: "05 12-Month Calendar", href: "/visibility/calendar" },
  { name: "06 Agentic AI Engine", href: "/growth/agentic-ai" },
  { name: "07 SEO & AI SEO", href: "/visibility/seo" },
  { name: "08 Brand Architecture", href: "/foundation/brand" },
  { name: "09 Executive Visibility", href: "/visibility/leadership" },
  { name: "10 B-BBEE & Skills Levy", href: "/growth/commercial" },
  { name: "11 Community & Alumni", href: "/delivery/community" },
  { name: "12 Content Marketing", href: "/visibility/content" },
  { name: "13 Partnerships & PR", href: "/growth/partnerships" },
  { name: "14 Competitive Position", href: "/growth/positioning" },
  { name: "15 AI in Curriculum", href: "/delivery/curriculum" },
  { name: "16 KPIs & Dashboard", href: "/delivery/kpis" },
  { name: "17 Budget Framework", href: "/delivery/budget" },
  { name: "18 Implementation", href: "/delivery/implementation" },
];

export const corePillars: Pillar[] = [
  {
    title: "Foundation",
    slug: "foundation",
    description: "Organisation, Ecosystem, Infrastructure, Brand",
    icon: "🏛️",
    subpages: [
      { name: "The Organisation", href: "/foundation/organisation", description: "SAFA's mission, investment, and trainee base" },
      { name: "Brand Ecosystem", href: "/foundation/ecosystem", description: "Five entities, one architecture" },
      { name: "Digital Infrastructure", href: "/foundation/infrastructure", description: "Technology backbone and systems" },
      { name: "Brand Architecture & Identity", href: "/foundation/brand", description: "Visual identity and messaging" },
    ],
  },
  {
    title: "Visibility",
    slug: "visibility",
    description: "Calendar, SEO, Leadership, Content",
    icon: "👁️",
    subpages: [
      { name: "12-Month Marketing Calendar", href: "/visibility/calendar", description: "Campaign timeline and milestones" },
      { name: "SEO & AI SEO Strategy", href: "/visibility/seo", description: "Search engine optimisation strategy" },
      { name: "Institutional Voice & Executive Visibility", href: "/visibility/leadership", description: "Leadership positioning and PR" },
      { name: "Content Marketing & Storytelling", href: "/visibility/content", description: "Storytelling and narrative" },
    ],
  },
  {
    title: "Growth Engine",
    slug: "growth-engine",
    description: "Agentic AI, B-BBEE, Partnerships, Positioning",
    icon: "⚙️",
    subpages: [
      { name: "Agentic AI Marketing Engine", href: "/growth/agentic-ai", description: "Autonomous marketing systems" },
      { name: "B-BBEE & Skills Levy Commercial Strategy", href: "/growth/commercial", description: "Commercial value proposition" },
      { name: "Partnerships, PR & Media Relations", href: "/growth/partnerships", description: "Strategic alliances and media" },
      { name: "Competitive Positioning & Differentiation", href: "/growth/positioning", description: "Market differentiation" },
    ],
  },
  {
    title: "Delivery",
    slug: "delivery",
    description: "Community, Curriculum, KPIs, Budget, Implementation",
    icon: "📊",
    subpages: [
      { name: "Community, Alumni & Stakeholder Engagement", href: "/delivery/community", description: "Stakeholder engagement" },
      { name: "Agentic AI in the Training Curriculum", href: "/delivery/curriculum", description: "Educational innovation" },
      { name: "KPI Dashboard & Measurement", href: "/delivery/kpis", description: "Metrics and performance tracking" },
      { name: "Budget Framework", href: "/delivery/budget", description: "Financial planning and allocation" },
      { name: "Implementation Commencement", href: "/delivery/implementation", description: "Execution roadmap" },
    ],
  },
];
