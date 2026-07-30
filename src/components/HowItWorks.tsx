"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Sparkle, Star, Squiggle } from "./Doodles";

// Flat sticker-style schoolhouse scene.
function Schoolhouse() {
  const ink = "#1E1B33";
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full max-w-xl overflow-visible" aria-hidden="true">
      {/* sun */}
      <circle cx="58" cy="56" r="26" fill="#FACC15" stroke={ink} strokeWidth="4" />
      {/* trees */}
      <g>
        <rect x="44" y="232" width="10" height="40" rx="4" fill="#7A4B2B" stroke={ink} strokeWidth="4" />
        <circle cx="49" cy="222" r="30" fill="#66BB6A" stroke={ink} strokeWidth="4" />
        <rect x="368" y="240" width="10" height="34" rx="4" fill="#7A4B2B" stroke={ink} strokeWidth="4" />
        <circle cx="373" cy="232" r="24" fill="#2E7D32" stroke={ink} strokeWidth="4" />
      </g>
      {/* school body */}
      <rect x="110" y="150" width="200" height="124" rx="10" fill="#EEF2FF" stroke={ink} strokeWidth="5" />
      {/* roof */}
      <path d="M96 150 L210 86 L324 150 Z" fill="#4F46E5" stroke={ink} strokeWidth="5" strokeLinejoin="round" />
      {/* clock */}
      <circle cx="210" cy="124" r="13" fill="#fff" stroke={ink} strokeWidth="4" />
      <path d="M210 124v-7M210 124l5 3" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      {/* flag */}
      <line x1="210" y1="86" x2="210" y2="60" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M210 62 l22 6 -22 8 Z" fill="#EA580C" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      {/* door */}
      <path d="M186 274 v-40 a24 24 0 0 1 48 0 v40 Z" fill="#EA580C" stroke={ink} strokeWidth="5" />
      <circle cx="224" cy="252" r="3.5" fill="#fff" />
      {/* windows */}
      <g fill="#FACC15" stroke={ink} strokeWidth="4">
        <rect x="130" y="182" width="34" height="34" rx="5" />
        <rect x="256" y="182" width="34" height="34" rx="5" />
      </g>
      <path d="M147 182v34M130 199h34M273 182v34M256 199h34" stroke={ink} strokeWidth="3" />
      {/* ground */}
      <line x1="40" y1="274" x2="382" y2="274" stroke={ink} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white section">
      <Squiggle className="absolute left-[8%] top-[14%] h-6 w-24 text-secondary/40" />
      <Star className="absolute right-[10%] top-[22%] h-6 w-6 text-accent animate-wobble" />
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.8rem]">
            Built for the{" "}
            <span className="marker text-primary">
              <span>modern classroom</span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-ink/65">
            for bringing AI into classrooms and transforming how teachers teach
          </p>
        </div>

        {/* Sticker schoolhouse illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-14 flex max-w-2xl items-end justify-center"
        >
          <Sparkle className="absolute left-[18%] top-2 h-6 w-6 text-accent animate-float-gentle" />
          <Sparkle className="absolute right-[22%] top-10 h-4 w-4 text-secondary animate-float-gentle [animation-delay:0.6s]" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full"
          >
            <Schoolhouse />
          </motion.div>
        </motion.div>

        {/* Sub-heading */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="display text-3xl text-ink md:text-5xl">
            Install. Setup. Teach.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold text-ink/65 md:text-lg">
            SkoolBox is your school&rsquo;s technology partner, offering tools
            that are built-to-context. Our technology is customised at the very
            core, to overcome bottlenecks in education delivery.
          </p>
          <a
            href="#features"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            Explore Features
            <ArrowRight size={16} strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </section>
  );
}
