# Content Library

All content for the SA Film Academy website is extracted from the master strategy document and organized here as TypeScript constants.

## Files

### `sections.ts`
Main content file containing all 18 sections (1 hero + 17 strategy sections) extracted verbatim from `protocol/safa-strategy.html`.

**Exports:**
- `HERO` — Hero/landing section
- `SECTION_ORG` through `SECTION_RESOLUTION` — 17 numbered strategy sections
- `ALL_SECTIONS[]` — Array of all 17 strategy sections
- `sectionIndex` — Record lookup map for ID-based access

## Usage

### Import a Single Section
```typescript
import { SECTION_ORG } from '@/lib/content/sections';

export default function OrgPage() {
  return (
    <article>
      <h1>{SECTION_ORG.title}</h1>
      <p>{SECTION_ORG.subtitle}</p>
      <div>{SECTION_ORG.content}</div>
    </article>
  );
}
```

### Loop Through All Sections
```typescript
import { ALL_SECTIONS } from '@/lib/content/sections';

export default function StrategyIndex() {
  return (
    <nav>
      {ALL_SECTIONS.map(section => (
        <a key={section.id} href={`/strategy/${section.id}`}>
          {section.num}. {section.title}
        </a>
      ))}
    </nav>
  );
}
```

### Lookup by ID
```typescript
import { sectionIndex } from '@/lib/content/sections';

const org = sectionIndex.org;
const budget = sectionIndex.budget;
```

## Data Structure

```typescript
interface StrategySection {
  id: string;           // 'org', 'ecosystem', etc.
  num: string;          // '02', '03', etc.
  title: string;        // Main heading
  subtitle: string;     // Subheading/kicker
  content: string;      // Full content text
}
```

## Compliance Notes

- **Rule A:** All text is 100% verbatim from source HTML. No editing, paraphrasing, or summarization.
- **Rule F:** British English throughout (programme, organisation, colour, etc.). No em dashes.
- **Generated:** Automatically from `protocol/safa-strategy.html` via extraction script.
- **Build Status:** Passes TypeScript strict mode and Next.js build.

## Next Steps

This content is ready to be wrapped in layout components and route handlers during Phase 3 section development.
