// Reusable hand-drawn doodle decorations for the Storybook art direction.
// Each is a small, transparent SVG that scales with its className (give it a
// width/height + color via `text-*` since strokes/fills use currentColor where
// noted). Sprinkle them around headings, cards, and section corners.

type DoodleProps = {
  className?: string;
  style?: React.CSSProperties;
};

const stroke = {
  fill: "none" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Four-point sparkle / twinkle. Uses currentColor.
export function Sparkle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 1c1.2 6 3.8 8.8 10 10-6.2 1.2-8.8 4-10 10-1.2-6-3.8-8.8-10-10 6.2-1.2 8.8-4 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Loopy underline swoosh — sits under a heading word. Uses currentColor.
export function Swoosh({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 24" className={className} style={style} aria-hidden="true">
      <path
        d="M4 14c34-11 92-13 132-6 18 3 38 9 60 2"
        stroke="currentColor"
        strokeWidth="5"
        {...stroke}
      />
    </svg>
  );
}

// Wavy squiggle line. Uses currentColor.
export function Squiggle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 24" className={className} style={style} aria-hidden="true">
      <path
        d="M4 12c8-12 18-12 26 0s18 12 26 0 18-12 26 0 18 12 26 0"
        stroke="currentColor"
        strokeWidth="4"
        {...stroke}
      />
    </svg>
  );
}

// Curvy hand-drawn arrow that points down-right. Uses currentColor.
export function Arrow({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} aria-hidden="true">
      <path
        d="M10 12c30 6 50 24 56 52"
        stroke="currentColor"
        strokeWidth="5"
        {...stroke}
      />
      <path
        d="M48 60c8 4 14 5 18 4M66 64c0-6 1-12 4-18"
        stroke="currentColor"
        strokeWidth="5"
        {...stroke}
      />
    </svg>
  );
}

// Little 5-point star outline. Uses currentColor.
export function Star({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 2.5 14.9 9l7 .6-5.3 4.6L18.2 21 12 17.2 5.8 21l1.6-6.8L2 9.6 9 9l3-6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Scatter of dots in a triangle. Uses currentColor.
export function Dots({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true">
      <g fill="currentColor">
        {[
          [8, 8],
          [28, 8],
          [48, 8],
          [8, 28],
          [28, 28],
          [48, 28],
          [8, 48],
          [28, 48],
          [48, 48],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" />
        ))}
      </g>
    </svg>
  );
}

// Organic blob — use as a colored backdrop behind illustrations/icons.
// Set the color with a `text-*` class (uses currentColor).
export function Blob({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true">
      <path
        fill="currentColor"
        d="M44.5-58C58 -47 69 -34 73 -19c4 15 1 33 -8 47 -9 14 -25 24 -42 29 -17 5 -36 5 -50 -3C-41 45 -50 28 -55 10c-5 -18 -6 -38 2 -52 8 -14 25 -22 41 -27 16 -5 43 -2 56.5 11Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
