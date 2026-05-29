import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

interface TwoColLayoutProps {
  left: ReactNode;
  right: ReactNode;
  flip?: boolean;
  gap?: 'default' | 'wide';
  className?: string;
  visualRatio?: '50-50' | '70-30' | '30-70';
  promoteInlineVisuals?: boolean;
}

function isEmptyNode(node: ReactNode): boolean {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return true;
  }

  if (typeof node === 'string') {
    return node.trim().length === 0;
  }

  if (Array.isArray(node)) {
    return node.every(isEmptyNode);
  }

  return false;
}

function isPromotableVisual(node: ReactNode): node is ReactElement {
  if (!isValidElement(node)) {
    return false;
  }

  const typeName =
    typeof node.type === 'function'
      ? node.type.name
      : typeof node.type === 'object' && node.type !== null && 'displayName' in node.type
      ? String((node.type as { displayName?: string }).displayName)
      : '';

  return node.type === ImagePlaceholder || typeName === 'ImagePlaceholder';
}

function extractPromotedVisuals(node: ReactNode): {
  content: ReactNode;
  visuals: ReactElement[];
} {
  if (isPromotableVisual(node)) {
    return { content: null, visuals: [node] };
  }

  if (!isValidElement(node)) {
    return { content: node, visuals: [] };
  }

  const props = node.props as { children?: ReactNode };

  if (props.children === undefined) {
    return { content: node, visuals: [] };
  }

  const visuals: ReactElement[] = [];
  const nextChildren = Children.map(props.children, (child) => {
    const extracted = extractPromotedVisuals(child);
    visuals.push(...extracted.visuals);
    return extracted.content;
  });

  if (isEmptyNode(nextChildren)) {
    return { content: null, visuals };
  }

  return {
    content: cloneElement(node as ReactElement<{ children?: ReactNode }>, undefined, nextChildren),
    visuals,
  };
}

export function TwoColLayout({
  left,
  right,
  flip = false,
  gap = 'default',
  className = '',
  visualRatio = '50-50',
  promoteInlineVisuals = true,
}: TwoColLayoutProps) {
  const gapClass = gap === 'wide' ? 'gap-10 lg:gap-16' : 'gap-8 lg:gap-12';
  const ratioClass =
    visualRatio === '70-30' ? 'lg:grid-cols-12' :
    visualRatio === '30-70' ? 'lg:grid-cols-12' :
    'lg:grid-cols-2';
  const shouldPromote = promoteInlineVisuals && visualRatio !== '50-50';
  const promoted = shouldPromote ? extractPromotedVisuals(left) : { content: left, visuals: [] };
  const visualContent =
    promoted.visuals.length > 0 ? (
      <div className="safa-visual-stack">
        <div className="safa-visual-stack__primary">{right}</div>
        <div className="safa-visual-stack__secondary">
          {promoted.visuals.map((visual, index) => (
            <div className="safa-visual-stack__item" key={`promoted-visual-${index}`}>
              {visual}
            </div>
          ))}
        </div>
      </div>
    ) : (
      right
    );

  return (
    <div className={`safa-two-col grid grid-cols-1 ${ratioClass} ${gapClass} items-start ${className}`}>
      <div className={`safa-two-col__copy ${
        visualRatio === '70-30' ? 'lg:col-span-5' :
        visualRatio === '30-70' ? 'lg:col-span-7' :
        ''
      } ${flip ? 'lg:order-last' : ''}`}>
        {promoted.content}
      </div>

      <div className={`safa-two-col__visual ${
        visualRatio === '70-30' ? 'lg:col-span-7' :
        visualRatio === '30-70' ? 'lg:col-span-5' :
        ''
      } ${flip ? 'lg:order-first' : ''}`}>
        {visualContent}
      </div>
    </div>
  );
}
