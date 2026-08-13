// Compact horizontal lock-up used in Header/Footer.
// The 3-bar mark is inlined SVG (scales cleanly, single fill via currentColor
// so it inverts on dark backgrounds when needed).
type LogoProps = {
  /** total height in px; width auto */
  size?: number;
  /** true = wordmark hidden, only the P-bar mark shown */
  markOnly?: boolean;
  /** color for the mark (defaults to currentColor). accepts any css color */
  color?: string;
  className?: string;
};

export function Logo({
  size = 22,
  markOnly = false,
  color,
  className,
}: LogoProps) {
  const c1 = color ?? "#2B3448";
  const c2 = color ?? "#4A5A7A";
  const c3 = color ?? "#6B7A93";
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.4 }}
    >
      {/* 3-bar P mark, viewBox tuned to the source SVG's mark area */}
      <svg
        aria-hidden
        viewBox="0 0 76 76"
        width={size}
        height={size}
        style={{ display: "block", flex: "none" }}
      >
        <rect x="0" y="0" width="22" height="76" fill={c1} />
        <rect x="29" y="0" width="46" height="34" fill={c2} />
        <rect x="29" y="40" width="46" height="36" fill={c3} />
      </svg>
      {!markOnly && (
        <span
          style={{
            fontSize: size * 0.6,
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: color ?? "inherit",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          PRIMARY SYSTEM
        </span>
      )}
    </span>
  );
}
