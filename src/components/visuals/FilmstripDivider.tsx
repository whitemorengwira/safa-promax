"use client";

/**
 * FilmstripDivider component.
 * Renders the custom sprocket-hole celluloid filmstrip divider
 * from the strategy deck to separate major sections.
 */
export function FilmstripDivider() {
  return (
    <div
      className="filmstrip w-full relative my-16 bg-bg-deep overflow-hidden"
      aria-hidden="true"
      style={{
        height: "56px",
        borderTop: "2px solid var(--surface-2)",
        borderBottom: "2px solid var(--surface-2)",
      }}
    />
  );
}
