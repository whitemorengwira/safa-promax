import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    // Redirect all /strategy/* routes to their canonical tab-based equivalents
    { source: "/strategy/organisation", destination: "/foundation/organisation", permanent: true },
    { source: "/strategy/ecosystem", destination: "/foundation/ecosystem", permanent: true },
    { source: "/strategy/infrastructure", destination: "/foundation/infrastructure", permanent: true },
    { source: "/strategy/brand", destination: "/foundation/brand", permanent: true },
    { source: "/strategy/calendar", destination: "/visibility/calendar", permanent: true },
    { source: "/strategy/agentic-ai", destination: "/growth/agentic-ai", permanent: true },
    { source: "/strategy/seo", destination: "/visibility/seo", permanent: true },
    { source: "/strategy/leadership", destination: "/visibility/leadership", permanent: true },
    { source: "/strategy/commercial", destination: "/growth/commercial", permanent: true },
    { source: "/strategy/community", destination: "/delivery/community", permanent: true },
    { source: "/strategy/content", destination: "/visibility/content", permanent: true },
    { source: "/strategy/partnerships", destination: "/growth/partnerships", permanent: true },
    { source: "/strategy/positioning", destination: "/growth/positioning", permanent: true },
    { source: "/strategy/curriculum", destination: "/delivery/curriculum", permanent: true },
    { source: "/strategy/kpis", destination: "/delivery/kpis", permanent: true },
    { source: "/strategy/budget", destination: "/delivery/budget", permanent: true },
    { source: "/strategy/implementation", destination: "/delivery/implementation", permanent: true },
  ],
};

export default nextConfig;
