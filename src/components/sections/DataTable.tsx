import { Reveal } from '@/components/motion/Reveal';

interface DataTableProps {
  headers: string[];
  rows?: (string | number)[][];
  categories?: {
    name: string;
    rows: (string | number)[][];
  }[];
  caption?: string;
  className?: string;
}

export function DataTable({
  headers,
  rows,
  categories,
  caption,
  className = '',
}: DataTableProps) {
  return (
    <Reveal className={className}>
      <div className="overflow-x-auto border border-line">
        <table className="w-full font-body text-sm">
          {caption && (
            <caption className="text-xs text-muted italic p-3 border-b border-line">
              {caption}
            </caption>
          )}

          <thead>
            <tr className="bg-surface-2 border-b border-line">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="text-gold eyebrow text-xs font-semibold px-4 py-3 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {categories ? (
              // Grouped budget-style table with category headers
              <>
                {categories.map((category, cidx) => (
                  <tbody key={cidx}>
                    <tr className="bg-surface border-t border-line-strong">
                      <td
                        colSpan={headers.length}
                        className="text-gold-soft font-semibold px-4 py-3 text-sm"
                      >
                        {category.name}
                      </td>
                    </tr>

                    {category.rows.map((row, ridx) => (
                      <tr
                        key={ridx}
                        className={`border-b border-line ${
                          ridx % 2 === 0 ? 'bg-bg' : 'bg-surface'
                        } hover:bg-surface-2 transition`}
                      >
                        {row.map((cell, cidx) => (
                          <td
                            key={cidx}
                            className={`px-4 py-3 ${
                              cidx === 0 ? 'text-text font-500' : 'text-muted'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </>
            ) : (
              // Simple ungrouped table
              <>
                {rows?.map((row, ridx) => (
                  <tr
                    key={ridx}
                    className={`border-b border-line ${
                      ridx % 2 === 0 ? 'bg-bg' : 'bg-surface'
                    } hover:bg-surface-2 transition`}
                  >
                    {row.map((cell, cidx) => (
                      <td
                        key={cidx}
                        className={`px-4 py-3 ${
                          cidx === 0 ? 'text-text font-500' : 'text-muted'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
