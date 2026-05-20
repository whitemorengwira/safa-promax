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
  { name: "02 The Organisation", href: "/strategy/organisation" },
  { name: "03 Brand Ecosystem", href: "/strategy/ecosystem" },
  { name: "04 Digital Infrastructure", href: "/strategy/infrastructure" },
  { name: "05 12-Month Calendar", href: "/strategy/calendar" },
  { name: "06 Agentic AI Engine", href: "/strategy/agentic-ai" },
  { name: "07 SEO & AI SEO", href: "/strategy/seo" },
  { name: "08 Brand Architecture", href: "/strategy/brand" },
  { name: "09 Executive Visibility", href: "/strategy/leadership" },
  { name: "10 B-BBEE & Skills Levy", href: "/strategy/commercial" },
  { name: "11 Community & Alumni", href: "/strategy/community" },
  { name: "12 Content Marketing", href: "/strategy/content" },
  { name: "13 Partnerships & PR", href: "/strategy/partnerships" },
  { name: "14 Competitive Position", href: "/strategy/positioning" },
  { name: "15 AI in Curriculum", href: "/strategy/curriculum" },
  { name: "16 KPIs & Dashboard", href: "/strategy/kpis" },
  { name: "17 Budget Framework", href: "/strategy/budget" },
  { name: "18 Implementation", href: "/strategy/implementation" },
];

export const corePillars: Pillar[] = [
  {
    title: "Foundation",
    slug: "foundation",
    description: "Organisation, Ecosystem, Infrastructure",
    icon: "🏛️",
    subpages: [
      { name: "The Organisation", href: "/strategy/organisation", description: "SAFA's mission, investment, and trainee base" },
      { name: "Brand Ecosystem", href: "/strategy/ecosystem", description: "Five entities, one architecture" },
      { name: "Digital Infrastructure", href: "/strategy/infrastructure", description: "Technology backbone and systems" },
      { name: "12-Month Calendar", href: "/strategy/calendar", description: "Campaign timeline and milestones" },
    ],
  },
  {
    title: "Visibility",
    slug: "visibility",
    description: "SEO, AI, Brand Architecture, Leadership",
    icon: "👁️",
    subpages: [
      { name: "Agentic AI Engine", href: "/strategy/agentic-ai", description: "Autonomous marketing systems" },
      { name: "SEO & AI SEO", href: "/strategy/seo", description: "Search engine optimisation strategy" },
      { name: "Brand Architecture", href: "/strategy/brand", description: "Visual identity and messaging" },
      { name: "Executive Visibility", href: "/strategy/leadership", description: "Leadership positioning and PR" },
    ],
  },
  {
    title: "Growth Engine",
    slug: "growth-engine",
    description: "B-BBEE, Skills Levy, Community, Content",
    icon: "⚙️",
    subpages: [
      { name: "B-BBEE & Skills Levy", href: "/strategy/commercial", description: "Commercial value proposition" },
      { name: "Community & Alumni", href: "/strategy/community", description: "Stakeholder engagement" },
      { name: "Content Marketing", href: "/strategy/content", description: "Storytelling and narrative" },
      { name: "Partnerships & PR", href: "/strategy/partnerships", description: "Strategic alliances and media" },
    ],
  },
  {
    title: "Delivery",
    slug: "delivery",
    description: "Positioning, Curriculum, KPIs, Budget, Implementation",
    icon: "📊",
    subpages: [
      { name: "Competitive Position", href: "/strategy/positioning", description: "Market differentiation" },
      { name: "AI in Curriculum", href: "/strategy/curriculum", description: "Educational innovation" },
      { name: "KPIs & Dashboard", href: "/strategy/kpis", description: "Metrics and performance tracking" },
      { name: "Budget Framework", href: "/strategy/budget", description: "Financial planning and allocation" },
      { name: "Implementation", href: "/strategy/implementation", description: "Execution roadmap" },
    ],
  },
];
