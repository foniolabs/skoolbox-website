"use client";

import { motion } from "framer-motion";

const float = {
  y: [0, -10, 0],
  transition: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
};

const drift = {
  y: [0, -7, 0],
  rotate: [0, 2, 0],
  transition: { duration: 5.6, repeat: Infinity, ease: "easeInOut" },
};

export default function HeroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-end">
      <motion.svg
        viewBox="0 0 760 500"
        role="img"
        aria-label="Animated SkoolBox learning world"
        className="h-full w-full max-w-[760px] overflow-visible"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <filter id="softShadow" x="-20%" y="-30%" width="150%" height="170%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#28221a" floodOpacity="0.18" />
          </filter>
          <linearGradient id="greenTop" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#66BB6A" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
          <linearGradient id="orangeTop" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFB74D" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
          <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7ED8CF" />
            <stop offset="100%" stopColor="#328C87" />
          </linearGradient>
          <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.6" fill="#FFD166" opacity="0.95" />
          </pattern>
        </defs>

        <ellipse cx="402" cy="402" rx="286" ry="45" fill="#D7D3C8" opacity="0.58" />

        <g filter="url(#softShadow)">
          <g>
            <ellipse cx="356" cy="354" rx="232" ry="64" fill="#493A37" />
            <path d="M124 354c0 34 104 62 232 62s232-28 232-62v38c0 35-104 64-232 64s-232-29-232-64z" fill="#332B2D" />
            <ellipse cx="356" cy="344" rx="232" ry="64" fill="#25632D" />
            <ellipse cx="356" cy="336" rx="214" ry="52" fill="#DCEEDF" />
            <path d="M160 335c54-29 334-29 392 0-47 35-337 36-392 0z" fill="#64BEB6" />
            <path d="M180 337c42-21 286-23 351 0-56 24-291 24-351 0z" fill="#95E2D9" opacity="0.78" />
          </g>

          <g transform="translate(250 122)">
            <path d="M0 88c0 27 38 49 85 49s85-22 85-49v118c0 27-38 49-85 49S0 233 0 206z" fill="#2E7D32" />
            <path d="M12 104c24 18 121 18 146 0v94c-25 18-122 18-146 0z" fill="url(#dots)" opacity="0.72" />
            <ellipse cx="85" cy="88" rx="85" ry="49" fill="#174B20" />
            <ellipse cx="85" cy="80" rx="74" ry="40" fill="url(#greenTop)" />
            <ellipse cx="85" cy="75" rx="48" ry="24" fill="#FFB74D" />
          </g>

          <g transform="translate(430 150)">
            <path d="M0 76c0 25 36 45 80 45s80-20 80-45v96c0 25-36 45-80 45S0 197 0 172z" fill="#3A943E" />
            <path d="M12 89c23 15 114 15 136 0v76c-24 15-113 15-136 0z" fill="url(#dots)" opacity="0.7" />
            <ellipse cx="80" cy="76" rx="80" ry="45" fill="#1B5E20" />
            <ellipse cx="80" cy="69" rx="69" ry="36" fill="url(#greenTop)" />
            <ellipse cx="80" cy="64" rx="45" ry="22" fill="#FFB74D" />
          </g>
        </g>

        <motion.g animate={float} transform="translate(300 52)">
          <line x1="44" y1="88" x2="44" y2="138" stroke="#4A342C" strokeWidth="7" strokeLinecap="round" />
          <circle cx="44" cy="52" r="49" fill="#F2E8CF" stroke="#8B6F61" strokeWidth="5" />
          <path d="M15 48c22 7 39 3 58-11M22 70c16-9 34-9 58 0" stroke="#8B6F61" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M40 7c14 28 13 58 0 90M6 53h76" stroke="#8B6F61" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          <circle cx="26" cy="29" r="6" fill="#88B65F" />
          <circle cx="63" cy="70" r="7" fill="#42A5F5" />
          <circle cx="57" cy="25" r="5" fill="#FF8F00" />
        </motion.g>

        <motion.g animate={drift} transform="translate(510 80)">
          <circle cx="57" cy="57" r="47" fill="url(#orangeTop)" stroke="#654C24" strokeWidth="5" />
          <path d="M57 17v80M17 57h80" stroke="#8A4D12" strokeWidth="4" opacity="0.42" />
          <circle cx="38" cy="40" r="5" fill="#4B3821" />
          <circle cx="76" cy="39" r="5" fill="#4B3821" />
          <path d="M42 70c12 10 25 10 31 0" stroke="#4B3821" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M58 2c12 17 26 26 43 30" stroke="#4B3821" strokeWidth="5" fill="none" strokeLinecap="round" />
        </motion.g>

        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "650px 236px" }}
        >
          <path d="M626 326 650 136l74 190" stroke="#342B3A" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M651 139 706 188h-62" stroke="#342B3A" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M706 188v57" stroke="#342B3A" strokeWidth="4" strokeLinecap="round" />
          <path d="M696 245c10 3 17 11 18 22" stroke="#FF8F00" strokeWidth="5" fill="none" strokeLinecap="round" />
        </motion.g>

        <g transform="translate(78 182)">
          <path d="M111 2c-19 18-34 42-45 72l-17 48" stroke="#B87879" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M68 79c-21 0-38 10-53 30" stroke="#332B2D" strokeWidth="7" fill="none" strokeLinecap="round" />
          <circle cx="119" cy="0" r="16" fill="#7A4438" />
          <path d="M102 17c21-8 36 0 43 20" stroke="#F0CFBF" strokeWidth="18" fill="none" strokeLinecap="round" />
          <path d="M108 34c-7 44 5 86 38 126" stroke="#FFB74D" strokeWidth="18" fill="none" strokeLinecap="round" />
          <path d="M146 160c21 23 45 27 74 13" stroke="#B87879" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M124 151c-12 28-35 47-70 57" stroke="#B87879" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M50 209c-14 6-29 7-44 3" stroke="#332B2D" strokeWidth="7" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(254 325)">
          <rect x="0" y="0" width="104" height="54" rx="7" fill="#332B2D" />
          <rect x="9" y="8" width="86" height="36" rx="4" fill="#DCEEDF" />
          <path d="M19 25h54M19 34h36" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(548 330)">
          <ellipse cx="92" cy="45" rx="92" ry="39" fill="#443B36" />
          <path d="M0 45c0 21 41 38 92 38s92-17 92-38v28c0 21-41 39-92 39S0 94 0 73z" fill="#332B2D" />
          <ellipse cx="92" cy="38" rx="92" ry="39" fill="url(#water)" />
          <path d="M34 35c29-13 88-12 120 1" stroke="#C8FFF7" strokeWidth="8" opacity="0.55" strokeLinecap="round" />
        </g>

        <motion.g
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.92, 1.08, 0.92] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M210 112h20M220 102v20M620 92h18M629 83v18M606 290h16M614 282v16" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
          <circle cx="248" cy="260" r="5" fill="#FF8F00" />
          <circle cx="594" cy="178" r="4" fill="#FF8F00" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
