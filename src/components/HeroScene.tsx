"use client";

import { motion } from "framer-motion";

// Storybook hero scene: a friendly teacher presenting at a board, surrounded by
// floating "sticker" UI cards (AI tutor, quiz, progress) and doodle accents.
// Flat vector + transparent so it scales crisply inside the hero.

const ink = "#1E1B33";
const indigo = "#4F46E5";
const lilac = "#818CF8";
const indigoTint = "#E0E7FF";
const green = "#2E7D32";
const greenL = "#66BB6A";
const orange = "#EA580C";
const sun = "#FACC15";
const coral = "#FF6B6B";
const paper = "#FFFFFF";

const float = (delay: number, dist = 12) => ({
  animate: { y: [0, -dist, 0] },
  transition: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay },
});

export default function HeroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-end">
      <motion.svg
        viewBox="0 0 620 560"
        role="img"
        aria-label="A teacher presenting a lesson with SkoolBox, surrounded by AI tutor, quiz and progress cards"
        className="h-full w-full max-w-[640px] overflow-visible"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ---- backdrop blobs + sun ---- */}
        <path
          d="M150 70c70-40 210-50 280 10s70 190 10 250-200 80-280 30S40 250 60 180 90 100 150 70Z"
          fill={indigoTint}
        />
        <g>
          <circle cx="118" cy="118" r="42" fill={sun} stroke={ink} strokeWidth="4" />
          <g stroke={sun} strokeWidth="6" strokeLinecap="round">
            <line x1="118" y1="44" x2="118" y2="60" />
            <line x1="62" y1="62" x2="74" y2="74" />
            <line x1="44" y1="118" x2="60" y2="118" />
            <line x1="174" y1="62" x2="162" y2="74" />
          </g>
        </g>

        {/* ---- whiteboard / lesson board ---- */}
        <g>
          <rect x="300" y="120" width="250" height="180" rx="22" fill={paper} stroke={ink} strokeWidth="5" />
          {/* mini chart */}
          <rect x="330" y="220" width="26" height="50" rx="6" fill={lilac} stroke={ink} strokeWidth="4" />
          <rect x="368" y="196" width="26" height="74" rx="6" fill={green} stroke={ink} strokeWidth="4" />
          <rect x="406" y="240" width="26" height="30" rx="6" fill={coral} stroke={ink} strokeWidth="4" />
          {/* abc text lines */}
          <line x1="330" y1="156" x2="430" y2="156" stroke={ink} strokeWidth="6" strokeLinecap="round" />
          <line x1="330" y1="178" x2="400" y2="178" stroke={indigo} strokeWidth="6" strokeLinecap="round" />
          {/* a+b doodle on the right of board */}
          <text x="470" y="200" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="40" fill={orange}>
            A+
          </text>
          {/* board stand legs */}
          <line x1="340" y1="300" x2="320" y2="360" stroke={ink} strokeWidth="6" strokeLinecap="round" />
          <line x1="510" y1="300" x2="530" y2="360" stroke={ink} strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* ---- teacher character ---- */}
        <g>
          {/* pointing arm */}
          <path d="M250 300c30-20 55-40 70-78" stroke={ink} strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M250 300c30-20 55-40 70-78" stroke={orange} strokeWidth="9" fill="none" strokeLinecap="round" />
          {/* body / dress */}
          <path d="M196 300c0-30 24-54 54-54s54 24 54 54v92c0 8-6 14-14 14h-80c-8 0-14-6-14-14Z" fill={indigo} stroke={ink} strokeWidth="5" />
          <path d="M222 312h56" stroke={lilac} strokeWidth="6" strokeLinecap="round" />
          {/* hand */}
          <circle cx="322" cy="220" r="13" fill="#F2C6A0" stroke={ink} strokeWidth="4" />
          {/* neck + head */}
          <rect x="240" y="218" width="20" height="22" fill="#F2C6A0" stroke={ink} strokeWidth="4" />
          <circle cx="250" cy="194" r="34" fill="#F2C6A0" stroke={ink} strokeWidth="5" />
          {/* hair (bun + crown) */}
          <path d="M216 192c-2-26 18-44 40-42 24 2 38 20 36 42-10-10-22-14-38-14s-28 4-38 14Z" fill={ink} />
          <circle cx="250" cy="150" r="11" fill={ink} />
          {/* face */}
          <circle cx="240" cy="194" r="3.4" fill={ink} />
          <circle cx="262" cy="194" r="3.4" fill={ink} />
          <path d="M242 206c5 5 11 5 16 0" stroke={ink} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <circle cx="231" cy="202" r="4.5" fill={coral} opacity="0.55" />
          <circle cx="270" cy="202" r="4.5" fill={coral} opacity="0.55" />
        </g>

        {/* ---- ground line ---- */}
        <path d="M150 408c90-14 320-14 380 0" stroke={ink} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.35" />

        {/* ---- floating sticker card: AI Tutor chat ---- */}
        <motion.g {...float(0)}>
          <rect x="60" y="180" width="172" height="92" rx="18" fill={paper} stroke={ink} strokeWidth="5" />
          <path d="M92 272l-6 26 30-18Z" fill={paper} stroke={ink} strokeWidth="5" />
          <circle cx="92" cy="214" r="16" fill={green} stroke={ink} strokeWidth="4" />
          <path d="M85 214c0-6 14-6 14 0M92 214v8" stroke={paper} strokeWidth="3" strokeLinecap="round" />
          <line x1="120" y1="206" x2="206" y2="206" stroke={ink} strokeWidth="6" strokeLinecap="round" />
          <line x1="120" y1="224" x2="186" y2="224" stroke={lilac} strokeWidth="6" strokeLinecap="round" />
        </motion.g>

        {/* ---- floating sticker card: quiz / correct ---- */}
        <motion.g {...float(1.1)}>
          <rect x="430" y="350" width="150" height="96" rx="18" fill={paper} stroke={ink} strokeWidth="5" />
          <circle cx="466" cy="384" r="14" fill={green} stroke={ink} strokeWidth="4" />
          <path d="M460 384l4 5 8-9" stroke={paper} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="492" y1="384" x2="560" y2="384" stroke={ink} strokeWidth="6" strokeLinecap="round" />
          <circle cx="466" cy="416" r="14" fill={indigoTint} stroke={ink} strokeWidth="4" />
          <line x1="492" y1="416" x2="544" y2="416" stroke={lilac} strokeWidth="6" strokeLinecap="round" />
        </motion.g>

        {/* ---- floating sticker: progress ring ---- */}
        <motion.g {...float(0.6, 9)}>
          <circle cx="540" cy="120" r="40" fill={paper} stroke={ink} strokeWidth="5" />
          <circle cx="540" cy="120" r="26" fill="none" stroke={indigoTint} strokeWidth="9" />
          <circle
            cx="540"
            cy="120"
            r="26"
            fill="none"
            stroke={orange}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="163"
            strokeDashoffset="48"
            transform="rotate(-90 540 120)"
          />
          <text x="540" y="126" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="18" fill={ink}>
            70%
          </text>
        </motion.g>

        {/* ---- books stack ---- */}
        <g>
          <rect x="150" y="372" width="86" height="20" rx="5" fill={coral} stroke={ink} strokeWidth="4" />
          <rect x="158" y="354" width="86" height="20" rx="5" fill={sun} stroke={ink} strokeWidth="4" />
          <rect x="150" y="336" width="86" height="20" rx="5" fill={greenL} stroke={ink} strokeWidth="4" />
        </g>

        {/* ---- doodle sparkles ---- */}
        <motion.g
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
        >
          <path d="M300 70c1 7 4 10 11 11-7 1-10 4-11 11-1-7-4-10-11-11 7-1 10-4 11-11Z" fill={sun} />
          <path d="M470 330c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8Z" fill={indigo} />
          <path d="M120 320c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8Z" fill={orange} />
        </motion.g>
      </motion.svg>
    </div>
  );
}
