export interface NavItem {
  name: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
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
