// Hand-built, brand-colored line-art illustrations for the feature carousel.
// Vector + transparent so they scale crisply and animate inside the cards.

// Storybook palette: indigo lead, lilac support, warm orange accent, green brand.
const ink = "#1E1B33";
const purple = "#4F46E5"; // indigo (kept var name to minimize churn below)
const purpleL = "#818CF8"; // lilac
const green = "#2E7D32";
const greenL = "#66BB6A";
const accent = "#EA580C";

const base = {
  viewBox: "0 0 128 128",
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

const line = {
  stroke: ink,
  strokeWidth: 3.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type IllustrationName =
  | "ai-tutor"
  | "lesson-planner"
  | "presentation"
  | "quiz"
  | "analytics"
  | "offline"
  | "notes"
  | "curriculum";

const illustrations: Record<IllustrationName, React.ReactNode> = {
  "ai-tutor": (
    <>
      <line x1="64" y1="26" x2="64" y2="40" {...line} />
      <circle cx="64" cy="22" r="5" fill={purple} {...line} />
      <rect x="32" y="40" width="64" height="52" rx="16" fill={purpleL} fillOpacity="0.25" {...line} />
      <rect x="24" y="58" width="8" height="18" rx="4" fill={purpleL} {...line} />
      <rect x="96" y="58" width="8" height="18" rx="4" fill={purpleL} {...line} />
      <circle cx="52" cy="62" r="5" fill={ink} />
      <circle cx="76" cy="62" r="5" fill={ink} />
      <path d="M50 76 Q64 86 78 76" {...line} />
      <path d="M102 26 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill={accent} />
    </>
  ),
  "lesson-planner": (
    <>
      <line x1="46" y1="24" x2="46" y2="38" {...line} />
      <line x1="82" y1="24" x2="82" y2="38" {...line} />
      <rect x="28" y="32" width="72" height="68" rx="12" fill="#FAF9F6" {...line} />
      <path d="M28 46 v-2 a12 12 0 0 1 12 -12 h48 a12 12 0 0 1 12 12 v2 z" fill={purple} />
      <g fill={purpleL} fillOpacity="0.45">
        <rect x="40" y="56" width="12" height="10" rx="3" />
        <rect x="58" y="56" width="12" height="10" rx="3" />
        <rect x="76" y="56" width="12" height="10" rx="3" />
        <rect x="40" y="74" width="12" height="10" rx="3" />
        <rect x="76" y="74" width="12" height="10" rx="3" />
      </g>
      <rect x="58" y="74" width="12" height="10" rx="3" fill={green} fillOpacity="0.2" stroke={green} strokeWidth="2" />
      <path d="M60 79 l2.5 2.5 4 -5" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  presentation: (
    <>
      <rect x="22" y="30" width="84" height="56" rx="10" fill="#FAF9F6" {...line} />
      <line x1="36" y1="44" x2="68" y2="44" stroke={purpleL} strokeWidth="3.4" strokeLinecap="round" />
      <rect x="36" y="58" width="9" height="16" rx="2.5" fill={purpleL} />
      <rect x="51" y="50" width="9" height="24" rx="2.5" fill={purple} />
      <rect x="66" y="62" width="9" height="12" rx="2.5" fill={greenL} />
      <line x1="64" y1="86" x2="64" y2="96" {...line} />
      <line x1="48" y1="98" x2="80" y2="98" {...line} />
      <path d="M92 58 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill={accent} />
    </>
  ),
  quiz: (
    <>
      <rect x="32" y="30" width="64" height="74" rx="10" fill="#FAF9F6" {...line} />
      <rect x="52" y="22" width="24" height="14" rx="5" fill={purpleL} {...line} />
      <rect x="42" y="50" width="12" height="12" rx="3" fill={green} fillOpacity="0.2" stroke={green} strokeWidth="2.5" />
      <path d="M44.5 56 l2.5 2.5 4.5 -5" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="60" y1="56" x2="86" y2="56" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <rect x="42" y="72" width="12" height="12" rx="3" fill={green} fillOpacity="0.2" stroke={green} strokeWidth="2.5" />
      <path d="M44.5 78 l2.5 2.5 4.5 -5" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="60" y1="78" x2="86" y2="78" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  analytics: (
    <>
      <path d="M34 28 V96 H102" {...line} />
      <rect x="46" y="68" width="12" height="28" rx="3" fill={purpleL} />
      <rect x="64" y="56" width="12" height="40" rx="3" fill={purple} />
      <rect x="82" y="44" width="12" height="52" rx="3" fill={green} fillOpacity="0.7" />
      <path d="M46 64 L70 52 L90 40" stroke={accent} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="64" r="3.5" fill={accent} />
      <circle cx="70" cy="52" r="3.5" fill={accent} />
      <circle cx="90" cy="40" r="3.5" fill={accent} />
    </>
  ),
  offline: (
    <>
      <rect x="44" y="26" width="40" height="76" rx="11" fill="#FAF9F6" {...line} />
      <line x1="58" y1="34" x2="70" y2="34" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <line x1="64" y1="50" x2="64" y2="74" stroke={green} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M55 65 l9 9 9 -9" stroke={green} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 32 a9 9 0 0 1 14 0" stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="89" y1="24" x2="107" y2="42" stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
    </>
  ),
  notes: (
    <>
      <rect x="36" y="28" width="56" height="72" rx="10" fill="#FAF9F6" {...line} />
      <line x1="48" y1="48" x2="80" y2="48" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="60" x2="80" y2="60" stroke={purpleL} strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="72" x2="70" y2="72" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M84 22 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill={accent} />
      <path d="M38 82 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill={purple} />
    </>
  ),
  curriculum: (
    <>
      <path d="M64 36 L98 50 L64 64 L30 50 Z" fill={purple} {...line} />
      <path d="M44 57 V72 a20 8 0 0 0 40 0 V57" fill={purpleL} fillOpacity="0.3" {...line} />
      <line x1="98" y1="50" x2="98" y2="70" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="98" cy="72" r="3.5" fill={accent} />
      <rect x="40" y="84" width="48" height="14" rx="3" fill={greenL} fillOpacity="0.4" {...line} />
      <line x1="64" y1="84" x2="64" y2="98" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
};

export default function Illustration({
  name,
  className,
}: {
  name: IllustrationName;
  className?: string;
}) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      {illustrations[name]}
    </svg>
  );
}
