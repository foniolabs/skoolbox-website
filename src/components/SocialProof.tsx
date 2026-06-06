"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  { label: "Presentations", icon: Presentation, startX: -550, startY: 0, endX: -340, endY: -20, color: "#3B82F6", scale: 1 },
  { label: "Class Roster", icon: Users, startX: -180, startY: 380, endX: -260, endY: 180, color: "#6366F1", scale: 1 },
  { label: "School Admin", icon: School, startX: -300, startY: -400, endX: -300, endY: -160, color: "#EC4899", scale: 1 },
];

const bRight = [
  { label: "Lesson Plans", icon: Calendar, startX: 550, startY: -280, endX: 340, endY: -80, color: "#14B8A6", scale: 1 },
  { label: "Quizzes", icon: ClipboardCheck, startX: 550, startY: -60, endX: 360, endY: 60, color: "#F97316", scale: 1 },
  { label: "Offline Mode", icon: WifiOff, startX: 500, startY: 220, endX: 320, endY: 200, color: "#06B6D4", scale: 1 },
];

const allBadges = [...bInside, ...bLeft, ...bRight];

const logos = [
  "Greenwood",
  "FGC Abuja",
  "Loyola Jesuit",
  "Corona Schools",
  "Lagos Model",
  "Atlantic Hall",
  "British Intl.",
  "Chrisland",
];

function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[500px] perspective-1000">
      <div className="relative pt-[60%]">
        {/* Screen */}
        <div className="absolute inset-0 rounded-t-2xl border-4 border-ink/10 bg-ink p-1.5 shadow-2xl">
          <div className="h-full w-full overflow-hidden rounded-lg bg-cream-50 relative">
            {/* Mock content */}
            <div className="p-4 space-y-4">
              <div className="h-8 w-32 rounded-md bg-primary/10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-lg bg-ink/5" />
                <div className="h-24 rounded-lg bg-ink/5" />
              </div>
              <div className="h-20 rounded-lg bg-primary/5 border border-primary/10" />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Base */}
        <div className="absolute -bottom-4 left-1/2 -ml-[55%] h-4 w-[110%] rounded-b-xl bg-ink/90 shadow-xl" />
        <div className="absolute -bottom-5 left-1/2 -ml-[15%] h-1.5 w-[30%] rounded-b-full bg-ink/20" />
      </div>
    </div>
  );
}

export default function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const loopedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section ref={containerRef} className="relative bg-cream min-h-[350vh]">
      {/* Sticky wrapper */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-page pb-20 pt-8 lg:pt-16">
          {/* Centered heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="display text-4xl md:text-6xl lg:text-[4.8rem] leading-[1.02]">
              You teach the class&mdash;
              <br />
              <span className="text-ink/40 italic font-medium">we support the flow</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-ink/60">
              Discover, plan, present, quiz, and track all classroom activity in
              one place
            </p>
          </div>

          {/* Laptop + Floating Badges Showcase */}
          <div className="relative mt-20 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
            {/* Central Laptop */}
            <div className="relative z-10 w-full max-w-lg scale-90 md:scale-100 lg:scale-110">
              <LaptopMockup />
            </div>

            {/* Floating Badges (Desktop only) */}
            <div className="absolute inset-0 pointer-events-none overflow-visible hidden md:block z-20">
              {allBadges.map((b, i) => {
                const start = 0.1 + (i * 0.05);
                const end = start + 0.2;
                
                // Opacity 
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start - 0.05, start, 0.8, 0.9], [0, 1, 1, 0]);
                
                // Movement
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const moveProg = useTransform(scrollYProgress, [start, end], [0, 1]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const x = useTransform(moveProg, [0, 1], [b.startX, b.endX]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(moveProg, [0, 1], [b.startY, b.endY]);
                
                // Dynamic scaling for "inside screen" badges
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const s = useTransform(moveProg, [0, 1], [1, b.scale]);
                
                return (
                  <motion.div
                    key={i}
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
                    <div 
                      className="flex items-center gap-4 rounded-full bg-white px-7 py-4 shadow-card-hover border border-white/50 backdrop-blur-sm group transition-transform"
                    >
                      <div 
                        className="flex items-center justify-center rounded-full p-2"
                        style={{ backgroundColor: `${b.color}15`, color: b.color }}
                      >
                        <b.icon size={22} strokeWidth={2.5} />
                      </div>
                      <span className="text-[16px] font-bold text-ink/80 whitespace-nowrap">
                        {b.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile alternative */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 md:hidden px-4">
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

        {/* Infinite Logo Marquee - Fixed at bottom of section */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden marquee-mask opacity-40 grayscale hover:opacity-100 transition-all duration-500">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {loopedLogos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="text-xl font-black tracking-tighter text-ink/40 md:text-2xl whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacing for scroll */}
      <div className="h-[200vh]" />
    </section>
  );
}
