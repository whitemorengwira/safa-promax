// Parse raw section content strings into renderable block types
export interface ContentBlock {
  type: 'paragraph' | 'subheading' | 'label' | 'skip';
  text: string;
}

/**
 * Parse a section's raw content into typed blocks for rendering.
 * - Double-newline splits → separate paragraphs
 * - Lines matching /^\d+\.\d+\s/ → subheading (e.g., "11.1 Community Programme")
 * - Lines matching /^(Quarter|TRACK|Agent)\s\d/i → label (section structural text)
 * - Short all-caps lines (< 50 chars) → skip (SVG diagram labels)
 * - Everything else → paragraph
 */
export function parseContent(rawContent: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = rawContent.split('\n');

  let currentParagraph = '';

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip empty lines between paragraphs
    if (!trimmed) {
      if (currentParagraph.trim()) {
        blocks.push({ type: 'paragraph', text: currentParagraph.trim() });
        currentParagraph = '';
      }
      continue;
    }

    // Subheading: lines like "11.1 Community Programme"
    if (/^\d+\.\d+\s/.test(trimmed)) {
      if (currentParagraph.trim()) {
        blocks.push({ type: 'paragraph', text: currentParagraph.trim() });
        currentParagraph = '';
      }
      blocks.push({ type: 'subheading', text: trimmed });
      continue;
    }

    // Label: section structure text like "Quarter 1" or "TRACK 01"
    if (/^(Quarter|TRACK|Agent|Agent \d)\s/i.test(trimmed)) {
      if (currentParagraph.trim()) {
        blocks.push({ type: 'paragraph', text: currentParagraph.trim() });
        currentParagraph = '';
      }
      blocks.push({ type: 'label', text: trimmed });
      continue;
    }

    // Skip SVG diagram labels: short all-caps text (usually < 50 chars, common pattern in extracted HTML)
    if (trimmed.length < 50 && trimmed === trimmed.toUpperCase() && /^[A-Z0-9\s·\-]+$/.test(trimmed)) {
      // Could be a diagram label like "Architecture · Site Plan" or "SETA COMPLIANCE FLUENCY"
      // Check if it looks like a label vs. a real paragraph
      if (trimmed.includes('·') || trimmed.includes('–') || trimmed.length < 30) {
        if (currentParagraph.trim()) {
          blocks.push({ type: 'paragraph', text: currentParagraph.trim() });
          currentParagraph = '';
        }
        blocks.push({ type: 'skip', text: trimmed });
        continue;
      }
    }

    // Accumulate as paragraph
    if (currentParagraph) {
      currentParagraph += ' ' + trimmed;
    } else {
      currentParagraph = trimmed;
    }
  }

  // Flush remaining paragraph
  if (currentParagraph.trim()) {
    blocks.push({ type: 'paragraph', text: currentParagraph.trim() });
  }

  return blocks;
}

/**
 * Extract the first N blocks of a given type from parsed content.
 * Useful for splitting intro copy from data sections.
 */
export function extractFirstBlocks(blocks: ContentBlock[], count: number, type: 'paragraph' = 'paragraph'): ContentBlock[] {
  const result: ContentBlock[] = [];
  let found = 0;

  for (const block of blocks) {
    if (block.type === type) {
      result.push(block);
      found++;
      if (found >= count) break;
    } else if (block.type !== 'skip') {
      result.push(block);
    }
  }

  return result;
}
