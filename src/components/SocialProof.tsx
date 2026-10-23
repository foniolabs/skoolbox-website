"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Calendar,
  Presentation,
  ClipboardCheck,
  BarChart3,
  WifiOff,
  Sparkles,
  BookOpen,
  Users,
  School,
} from "lucide-react";

const bInside = [
  { label: "AI Tutor", icon: Brain, startX: -450, startY: -220, endX: -40, endY: -60, color: "#10B981", scale: 0.65 },
  { label: "Analytics", icon: BarChart3, startX: 500, startY: 280, endX: 60, endY: 30, color: "#F59E0B", scale: 0.65 },
  { label: "Smart Notes", icon: Sparkles, startX: -180, startY: -380, endX: -50, endY: 20, color: "#8B5CF6", scale: 0.65 },
  { label: "Curriculum", icon: BookOpen, startX: 250, startY: -380, endX: 40, endY: -30, color: "#EF4444", scale: 0.65 },
];

const bLeft = [
  { label: "Presentations", icon: Presentation, startX: -550, startY: 0, endX: -430, endY: -10, color: "#3B82F6", scale: 1 },
  { label: "Class Roster", icon: Users, startX: -180, startY: 380, endX: -400, endY: 170, color: "#6366F1", scale: 1 },
  { label: "School Admin", icon: School, startX: -300, startY: -400, endX: -400, endY: -190, color: "#EC4899", scale: 1 },
];

const bRight = [
  { label: "Lesson Plans", icon: Calendar, startX: 550, startY: -280, endX: 430, endY: -110, color: "#14B8A6", scale: 1 },
  { label: "Quizzes", icon: ClipboardCheck, startX: 550, startY: -60, endX: 450, endY: 40, color: "#F97316", scale: 1 },
  { label: "Offline Mode", icon: WifiOff, startX: 500, startY: 220, endX: 420, endY: 180, color: "#06B6D4", scale: 1 },
];

const allBadges = [
  ...bInside.map((b) => ({ ...b, inside: true })),
  ...bLeft.map((b) => ({ ...b, inside: false })),
  ...bRight.map((b) => ({ ...b, inside: false })),
];

// Real screens from the desktop app (captured at 1440×900 from its browser
// demo mode with the built-in sample class).
const screens = [
  { key: "dashboard", tab: "Dashboard", src: "/screens/dashboard.png", alt: "SkoolBox dashboard showing class score, mastery groups and each student's progress" },
  { key: "assess", tab: "Quizzes", src: "/screens/assess.png", alt: "SkoolBox assessments page with ready-made quizzes for Mathematics, English and Basic Science" },
  { key: "monitor", tab: "Progress", src: "/screens/monitor.png", alt: "SkoolBox student monitoring with a 30-day score trend chart and strengths" },
  { key: "quiz", tab: "Quiz player", src: "/screens/quiz.png", alt: "A student answering an algebra question in the SkoolBox quiz player, with read-aloud and hint buttons" },
];

function LaptopMockup({ active }: { active: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px] perspective-1000">
      <div className="relative pt-[62.5%]">
        {/* Screen (16:10, matching the captures) */}
        <div className="absolute inset-0 rounded-t-2xl border-[3px] border-ink bg-ink p-1.5 shadow-sticker">
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-cream-50">
            {screens.map((s, i) => (
              <Image
                key={s.key}
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 768px) 560px, 92vw"
                className={`object-cover object-top transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== active}
              />
            ))}
          </div>
        </div>
        {/* Base */}
        <div className="absolute -bottom-4 left-1/2 -ml-[55%] h-4 w-[110%] rounded-b-xl bg-ink/90 shadow-xl" />
        <div className="absolute -bottom-5 left-1/2 -ml-[15%] h-1.5 w-[30%] rounded-b-full bg-ink/20" />
      </div>
    </div>
  );
}

function FlyingBadge({
  badge: b,
  index,
  progress,
}: {
  badge: (typeof allBadges)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.1 + index * 0.05;
  const end = start + 0.2;

  // "Inside" badges fade as they land so they don't cover the screenshot.
  const opacity = useTransform(
    progress,
    b.inside ? [start - 0.05, start, end - 0.04, end] : [start - 0.05, start, 0.8, 0.9],
    [0, 1, 1, 0],
  );

  // Movement
  const moveProg = useTransform(progress, [start, end], [0, 1]);
  const x = useTransform(moveProg, [0, 1], [b.startX, b.endX]);
  const y = useTransform(moveProg, [0, 1], [b.startY, b.endY]);

  // Dynamic scaling for "inside screen" badges
  const s = useTransform(moveProg, [0, 1], [1, b.scale]);

  return (
    <motion.div
      style={{
        x,
        y,
        opacity,
        scale: s,
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="absolute"
    >
      <div className="flex items-center gap-4 rounded-full border-2 border-ink bg-white px-7 py-4 shadow-sticker-sm">
        <div
          className="flex items-center justify-center rounded-full p-2"
          style={{ backgroundColor: `${b.color}22`, color: b.color }}
        >
          <b.icon size={22} strokeWidth={2.5} />
        </div>
        <span className="whitespace-nowrap text-[16px] font-bold text-ink/80">{b.label}</span>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screen, setScreen] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    // Scroll-pinned on large screens only; on mobile it's a normal section (the
    // badges don't animate there, so pinning just added empty scrolling).
    <section ref={containerRef} className="relative mt-24 bg-cream-50 xl:min-h-[240vh]">
      {/* Sticky wrapper (pt clears the 84px sticky header) */}
      <div className="flex flex-col justify-center py-12 xl:sticky xl:top-0 xl:h-screen xl:overflow-hidden xl:py-0 xl:pt-[84px]">
        <div className="container-page xl:pb-12">
          {/* Centered heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="display text-4xl md:text-6xl lg:text-[4.8rem] leading-[1.04]">
              You teach the class&mdash;
              <br />
              <span className="text-primary">we support the flow</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-ink/65">
              Discover, plan, present, quiz, and track all classroom activity in
              one place
            </p>
          </div>

          {/* Laptop + Floating Badges Showcase */}
          <div className="relative mt-12 flex flex-col items-center justify-center md:mt-14 xl:min-h-[400px] xl:flex-row">
            {/* Central Laptop */}
            <div className="relative z-10 w-full max-w-[560px]">
              <LaptopMockup active={screen} />
              {/* Screen switcher (above the badges layer so it stays clickable) */}
              <div
                role="group"
                aria-label="Choose an app screen"
                className="relative z-30 mt-9 flex flex-wrap justify-center gap-2"
              >
                {screens.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setScreen(i)}
                    aria-pressed={screen === i}
                    className={`min-h-[40px] rounded-full border-2 border-ink px-4 text-[13px] font-bold transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] ${
                      screen === i
                        ? "bg-ink text-white"
                        : "bg-white text-ink shadow-sticker-sm hover:-translate-y-0.5 hover:bg-sun"
                    }`}
                  >
                    {s.tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Badges (xl+ only — they sit ~450px either side of centre) */}
            <div className="absolute inset-0 pointer-events-none overflow-visible hidden xl:block z-20">
              {allBadges.map((b, i) => (
                <FlyingBadge key={b.label} badge={b} index={i} progress={scrollYProgress} />
              ))}
            </div>

            {/* Mobile alternative */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 xl:hidden px-4">
              {allBadges.map((b, i) => (
                <div
                  key={`mobile-${i}`}
                  className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm border border-ink/5"
                >
                  <b.icon size={18} className="text-primary" strokeWidth={2.5} style={{ color: b.color }} />
                  <span className="text-[14px] font-bold text-ink/80">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Spacing for scroll (desktop pin only) */}
      <div className="hidden h-[140vh] xl:block" />
    </section>
  );
}
