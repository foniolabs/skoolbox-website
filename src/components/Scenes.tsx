// Hand-built sticker-style scenes with a Nigerian classroom feel: ankara and
// gele, school uniforms, louvre windows with burglar bars, the flag.
// Same thick-ink-outline language as Doodles/Illustrations.

const ink = "#1E1B33";
const hair = "#2A2540";
const green = "#2E7D32";
const greenL = "#66BB6A";
const indigo = "#4F46E5";
const lilac = "#818CF8";
const orange = "#EA580C";
const sun = "#FACC15";
const coral = "#FF6B6B";
const cream = "#FFF7ED";
const wood = "#C08447";
const naija = "#008751";

const skin = {
  teacher: "#8D5524",
  a: "#6B3E26",
  b: "#A0663F",
  c: "#5C3317",
  reader: "#7B4A2A",
};

/** An arm/leg as an outlined rounded stroke: ink underlay, colour on top. */
function Limb({ d, color, width = 10 }: { d: string; color: string; width?: number }) {
  return (
    <>
      <path d={d} stroke={ink} strokeWidth={width + 7} strokeLinecap="round" fill="none" />
      <path d={d} stroke={color} strokeWidth={width} strokeLinecap="round" fill="none" />
    </>
  );
}

function Ear({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return <circle cx={cx} cy={cy} r="5.5" fill={color} stroke={ink} strokeWidth="2.6" />;
}

/** Student seen from behind, sitting at a desk facing the board. */
function Student({
  cx,
  tone,
  hairStyle,
  uniform,
  raisedHand = false,
}: {
  cx: number;
  tone: string;
  hairStyle: "puffs" | "lowcut" | "cornrows";
  uniform: "pinafore" | "shirt";
  raisedHand?: boolean;
}) {
  const hy = 258; // head centre
  return (
    <g>
      {raisedHand && (
        // Waving hand — wobble rotates around the shoulder.
        <g
          className="animate-wobble"
          style={{ transformBox: "view-box", transformOrigin: `${cx + 20}px 296px` }}
        >
          <Limb d={`M${cx + 20} 296 Q${cx + 38} 262 ${cx + 30} 224`} color={tone} width={10} />
          <circle cx={cx + 30} cy={219} r="9" fill={tone} stroke={ink} strokeWidth="3" />
        </g>
      )}

      {/* back of shirt */}
      <path
        d={`M${cx - 34} 302 Q${cx} 284 ${cx + 34} 302 L${cx + 40} 396 L${cx - 40} 396 Z`}
        fill="#fff"
        stroke={ink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {uniform === "pinafore" ? (
        <>
          <Limb d={`M${cx - 17} 296 L${cx - 14} 334`} color={green} width={7} />
          <Limb d={`M${cx + 17} 296 L${cx + 14} 334`} color={green} width={7} />
          <path
            d={`M${cx - 37} 334 L${cx + 37} 334 L${cx + 41} 396 L${cx - 41} 396 Z`}
            fill={green}
            stroke={ink}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <path
          d={`M${cx - 12} 291 L${cx} 302 L${cx + 12} 291`}
          stroke={ink}
          strokeWidth="3"
          fill="none"
          strokeLinejoin="round"
        />
      )}
      {raisedHand && (
        <circle cx={cx + 20} cy={298} r="10" fill="#fff" stroke={ink} strokeWidth="3" />
      )}

      {/* neck, ears, head */}
      <rect x={cx - 6} y={270} width="12" height="20" rx="4" fill={tone} stroke={ink} strokeWidth="3" />
      <Ear cx={cx - 22} cy={hy + 4} color={tone} />
      <Ear cx={cx + 22} cy={hy + 4} color={tone} />
      <circle cx={cx} cy={hy} r="22" fill={hair} stroke={ink} strokeWidth="4" />

      {hairStyle === "puffs" && (
        <>
          <circle cx={cx - 18} cy={hy - 22} r="14" fill={hair} stroke={ink} strokeWidth="3.5" />
          <circle cx={cx + 18} cy={hy - 22} r="14" fill={hair} stroke={ink} strokeWidth="3.5" />
        </>
      )}
      {hairStyle === "cornrows" && (
        <>
          {[-12, 0, 12].map((dx) => (
            <path
              key={dx}
              d={`M${cx + dx} ${hy - 20} Q${cx + dx * 1.3} ${hy} ${cx + dx * 0.6} ${hy + 20}`}
              stroke="#5B547A"
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
            />
          ))}
          <rect x={cx - 4} y={hy + 16} width="8" height="26" rx="4" fill={hair} stroke={ink} strokeWidth="2.5" />
          <circle cx={cx} cy={hy + 44} r="4" fill={sun} stroke={ink} strokeWidth="2" />
        </>
      )}
      {hairStyle === "lowcut" && (
        // Low cut: skin shows at the nape under a short hair cap.
        <path
          d={`M${cx - 19} ${hy + 11} Q${cx} ${hy + 20} ${cx + 19} ${hy + 11} L${cx + 15} ${hy + 17} Q${cx} ${hy + 24} ${cx - 15} ${hy + 17} Z`}
          fill={tone}
        />
      )}
    </g>
  );
}

export function NigerianClassroom({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={className}
      role="img"
      aria-label="A Nigerian classroom: a teacher in an ankara dress and gele points at a chalkboard while holding a tablet running SkoolBox; students in school uniform sit at wooden desks, one with her hand raised"
    >
      <defs>
        <pattern id="sc-ankara" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill={indigo} />
          <circle cx="12" cy="12" r="6" fill={sun} stroke={ink} strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2" fill={orange} />
          {[0, 24].map((x) => [0, 24].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill={lilac} />))}
        </pattern>
        <pattern id="sc-gele" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill={orange} />
          <circle cx="7" cy="7" r="2" fill={cream} />
        </pattern>
        <clipPath id="sc-room">
          <rect x="20" y="20" width="600" height="360" rx="28" />
        </clipPath>
        <clipPath id="sc-window">
          <rect x="48" y="86" width="128" height="150" rx="8" />
        </clipPath>
      </defs>

      {/* sticker drop shadow */}
      <rect x="27" y="27" width="600" height="360" rx="28" fill={ink} />

      <g clipPath="url(#sc-room)">
        {/* wall + floor */}
        <rect x="20" y="20" width="600" height="360" fill={cream} />
        <rect x="20" y="318" width="600" height="62" fill="#F1DEC4" />
        <line x1="20" y1="318" x2="620" y2="318" stroke={ink} strokeWidth="4" />

        {/* louvre window with burglar-proof bars */}
        <rect x="48" y="86" width="128" height="150" rx="8" fill="#BAE6FD" />
        <g clipPath="url(#sc-window)">
          <circle cx="84" cy="114" r="15" fill={sun} stroke={ink} strokeWidth="3" />
          <ellipse cx="112" cy="240" rx="78" ry="34" fill={greenL} stroke={ink} strokeWidth="3" />
          {Array.from({ length: 5 }, (_, i) => (
            <rect
              key={i}
              x="48"
              y={100 + i * 28}
              width="128"
              height="10"
              fill="#E0F2FE"
              fillOpacity="0.65"
              stroke={ink}
              strokeWidth="2"
            />
          ))}
          {[80, 112, 144].map((x) => (
            <line key={x} x1={x} y1="86" x2={x} y2="236" stroke={ink} strokeWidth="3.5" />
          ))}
          <line x1="48" y1="161" x2="176" y2="161" stroke={ink} strokeWidth="3.5" />
        </g>
        <rect x="48" y="86" width="128" height="150" rx="8" fill="none" stroke={ink} strokeWidth="5" />
        <rect x="40" y="234" width="144" height="11" rx="4" fill={wood} stroke={ink} strokeWidth="4" />

        {/* ceiling fan */}
        <line x1="340" y1="20" x2="340" y2="42" stroke={ink} strokeWidth="4" />
        <ellipse cx="276" cy="47" rx="56" ry="7" fill="#CBD5E1" stroke={ink} strokeWidth="3.5" />
        <ellipse cx="404" cy="47" rx="56" ry="7" fill="#CBD5E1" stroke={ink} strokeWidth="3.5" />
        <circle cx="340" cy="47" r="10" fill="#94A3B8" stroke={ink} strokeWidth="4" />

        {/* chalkboard */}
        <rect x="206" y="78" width="268" height="136" rx="10" fill={wood} stroke={ink} strokeWidth="5" />
        <rect x="216" y="88" width="248" height="116" rx="4" fill="#2F5D3A" />
        <g fill="#F8FAFC" fontFamily="inherit">
          <text x="232" y="114" fontSize="16" fontWeight="800">SS2 · Biology</text>
          <text x="232" y="137" fontSize="13" fontWeight="700" opacity="0.85">Photosynthesis</text>
          <text x="232" y="186" fontSize="12" fontWeight="700" opacity="0.9">CO₂ + H₂O → glucose + O₂</text>
        </g>
        <g stroke="#F8FAFC" strokeWidth="2.6" fill="none" strokeLinecap="round" opacity="0.9">
          <path d="M404 166 C402 136 430 124 448 126 C448 154 430 170 404 166 Z" />
          <path d="M406 164 L444 130" />
          <path d="M418 104 v-8 M410 110 l-6 -5 M426 110 l6 -5" />
          <circle cx="418" cy="116" r="5" />
        </g>
        <rect x="226" y="204" width="228" height="8" rx="3" fill="#8B5A2B" stroke={ink} strokeWidth="3" />
        <rect x="252" y="199" width="18" height="5" rx="2" fill="#fff" />

        {/* Nigerian flag */}
        <line x1="546" y1="60" x2="546" y2="140" stroke={ink} strokeWidth="4" strokeLinecap="round" />
        <g stroke={ink} strokeWidth="3">
          <rect x="548" y="64" width="19" height="34" fill={naija} />
          <rect x="567" y="64" width="18" height="34" fill="#fff" />
          <rect x="585" y="64" width="19" height="34" fill={naija} />
        </g>

        {/* times-table poster */}
        <rect x="566" y="152" width="44" height="58" rx="4" fill="#fff" stroke={ink} strokeWidth="3.5" />
        <rect x="566" y="152" width="44" height="12" rx="3" fill={orange} stroke={ink} strokeWidth="3" />
        {[176, 186, 196].map((y) => (
          <line key={y} x1="574" y1={y} x2="602" y2={y} stroke={ink} strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
        ))}

        {/* teacher */}
        <ellipse cx="505" cy="321" rx="50" ry="6" fill={ink} opacity="0.12" />
        <ellipse cx="490" cy="316" rx="12" ry="6" fill={ink} />
        <ellipse cx="520" cy="316" rx="12" ry="6" fill={ink} />
        <path
          d="M481 196 Q505 188 529 196 L548 306 Q505 318 462 306 Z"
          fill="url(#sc-ankara)"
          stroke={ink}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* pointing arm */}
        <Limb d="M484 204 Q462 192 446 178" color={skin.teacher} width={9} />
        <Limb d="M444 176 L436 169" color={skin.teacher} width={4} />
        <circle cx="444" cy="176" r="7" fill={skin.teacher} stroke={ink} strokeWidth="3" />
        <circle cx="482" cy="204" r="11" fill="url(#sc-ankara)" stroke={ink} strokeWidth="3.5" />
        {/* tablet arm */}
        <Limb d="M528 204 Q548 222 540 252" color={skin.teacher} width={9} />
        <rect x="532" y="234" width="40" height="52" rx="6" fill={ink} />
        <rect x="537" y="240" width="30" height="40" rx="3" fill={green} />
        <path d="M543 261 l5 5 10 -12" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="536" cy="258" r="7" fill={skin.teacher} stroke={ink} strokeWidth="3" />
        <circle cx="528" cy="204" r="11" fill="url(#sc-ankara)" stroke={ink} strokeWidth="3.5" />
        {/* head */}
        <rect x="499" y="176" width="12" height="18" rx="4" fill={skin.teacher} stroke={ink} strokeWidth="3" />
        <circle cx="483" cy="170" r="3.6" fill={sun} stroke={ink} strokeWidth="2" />
        <circle cx="527" cy="170" r="3.6" fill={sun} stroke={ink} strokeWidth="2" />
        <circle cx="505" cy="160" r="22" fill={skin.teacher} stroke={ink} strokeWidth="4" />
        <circle cx="497" cy="161" r="2.7" fill={ink} />
        <circle cx="514" cy="161" r="2.7" fill={ink} />
        <path d="M498 170 Q505 176 513 170" stroke={ink} strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <circle cx="491" cy="168" r="3.6" fill={coral} opacity="0.45" />
        <circle cx="519" cy="168" r="3.6" fill={coral} opacity="0.45" />
        {/* gele */}
        <path
          d="M478 153 C464 124 488 104 506 110 C524 98 554 114 539 149 C528 137 491 135 478 153 Z"
          fill="url(#sc-gele)"
          stroke={ink}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M494 120 Q503 132 498 146 M517 112 Q522 128 517 142" stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* desks (behind the students) */}
        <rect x="58" y="300" width="256" height="14" rx="4" fill={wood} stroke={ink} strokeWidth="4" />
        <rect x="334" y="300" width="118" height="14" rx="4" fill={wood} stroke={ink} strokeWidth="4" />

        <Student cx={128} tone={skin.a} hairStyle="puffs" uniform="pinafore" raisedHand />
        <Student cx={250} tone={skin.b} hairStyle="lowcut" uniform="shirt" />
        <Student cx={392} tone={skin.c} hairStyle="cornrows" uniform="pinafore" />
      </g>

      <rect x="20" y="20" width="600" height="360" rx="28" fill="none" stroke={ink} strokeWidth="5" />
    </svg>
  );
}

export function ReadingStudent({ className }: { className?: string }) {
  const tone = skin.reader;
  return (
    <svg
      viewBox="0 0 300 270"
      className={className}
      role="img"
      aria-label="A student in a green school pinafore with afro puffs, sitting on a stack of books and reading"
    >
      <ellipse cx="150" cy="254" rx="122" ry="8" fill={ink} opacity="0.1" />

      {/* book stack */}
      <rect x="40" y="214" width="220" height="36" rx="6" fill={green} stroke={ink} strokeWidth="4" />
      <rect x="232" y="220" width="20" height="24" rx="2" fill={cream} stroke={ink} strokeWidth="2.5" />
      <rect x="58" y="182" width="186" height="32" rx="6" fill={orange} stroke={ink} strokeWidth="4" />
      <rect x="64" y="188" width="18" height="20" rx="2" fill={cream} stroke={ink} strokeWidth="2.5" />
      <rect x="74" y="152" width="156" height="30" rx="6" fill={indigo} stroke={ink} strokeWidth="4" />
      <rect x="206" y="158" width="18" height="18" rx="2" fill={cream} stroke={ink} strokeWidth="2.5" />
      <line x1="100" y1="232" x2="140" y2="232" stroke={cream} strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="198" x2="150" y2="198" stroke={cream} strokeWidth="4" strokeLinecap="round" />

      {/* legs dangling over the front, white socks, black shoes */}
      <Limb d="M136 150 L136 198" color={tone} width={12} />
      <Limb d="M164 150 L164 198" color={tone} width={12} />
      <rect x="128" y="190" width="16" height="12" rx="3" fill="#fff" stroke={ink} strokeWidth="3" />
      <rect x="156" y="190" width="16" height="12" rx="3" fill="#fff" stroke={ink} strokeWidth="3" />
      <ellipse cx="134" cy="208" rx="13" ry="7" fill={ink} />
      <ellipse cx="166" cy="208" rx="13" ry="7" fill={ink} />

      {/* pinafore skirt over the lap */}
      <path d="M112 150 Q150 134 188 150 L184 166 Q150 174 116 166 Z" fill={green} stroke={ink} strokeWidth="4" strokeLinejoin="round" />

      {/* shirt + pinafore bib */}
      <path d="M128 104 Q150 96 172 104 L178 154 L122 154 Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M136 114 L164 114 L168 154 L132 154 Z" fill={green} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <Limb d="M137 114 L133 103" color={green} width={5} />
      <Limb d="M163 114 L167 103" color={green} width={5} />

      {/* open book */}
      <path d="M150 116 L106 107 L106 142 L150 151 L194 142 L194 107 Z" fill={sun} stroke={ink} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M150 113 L111 104 L111 137 L150 146 Z" fill="#fff" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M150 113 L189 104 L189 137 L150 146 Z" fill="#fff" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      {[116, 124, 132].map((y) => (
        <g key={y} stroke={ink} strokeOpacity="0.3" strokeWidth="2.4" strokeLinecap="round">
          <line x1="118" y1={y} x2="142" y2={y + 5} />
          <line x1="158" y1={y + 5} x2="182" y2={y} />
        </g>
      ))}
      <circle cx="108" cy="130" r="7.5" fill={tone} stroke={ink} strokeWidth="3" />
      <circle cx="192" cy="130" r="7.5" fill={tone} stroke={ink} strokeWidth="3" />

      {/* head */}
      <rect x="144" y="84" width="12" height="16" rx="4" fill={tone} stroke={ink} strokeWidth="3" />
      <circle cx="126" cy="40" r="14" fill={hair} stroke={ink} strokeWidth="3.5" />
      <circle cx="174" cy="40" r="14" fill={hair} stroke={ink} strokeWidth="3.5" />
      <circle cx="150" cy="66" r="24" fill={tone} stroke={ink} strokeWidth="4" />
      <path d="M127 60 A24 24 0 0 1 173 60 Q150 49 127 60 Z" fill={hair} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="134" cy="50" r="3.2" fill={orange} />
      <circle cx="166" cy="50" r="3.2" fill={orange} />
      <path d="M138 70 Q142 74 146 70 M154 70 Q158 74 162 70" stroke={ink} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M144 80 Q150 85 156 80" stroke={ink} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="136" cy="78" r="3.6" fill={coral} opacity="0.45" />
      <circle cx="164" cy="78" r="3.6" fill={coral} opacity="0.45" />

      {/* sparkles */}
      <path d="M238 92 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill={sun} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
      <path d="M62 118 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill={orange} />
    </svg>
  );
}
