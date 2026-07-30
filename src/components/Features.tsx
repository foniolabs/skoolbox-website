"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Illustration, { type IllustrationName } from "./Illustrations";
import { Star, Dots } from "./Doodles";

type Feature = {
  title: string;
  desc: string;
  art: IllustrationName;
  panel: string;
  tag?: string;
  cta?: string;
};

// Four vertical columns that auto-scroll up / down in alternating directions.
const columns: Feature[][] = [
  [
    {
      title: "AI Tutor",
      desc: "Explains, narrates, and answers students' questions out loud — with teacher-friendly guardrails that keep every response curriculum-safe.",
      art: "ai-tutor",
      panel: "bg-secondary-100",
      tag: "Most loved",
      cta: "Try the AI Tutor",
    },
    {
      title: "Analytics",
      desc: "See class progress, spot struggling students, and act early.",
      art: "analytics",
      panel: "bg-secondary-100",
    },
  ],
  [
    {
      title: "Lesson Planner",
      desc: "Turn notes into weekly plans, slides, and classroom prompts in seconds.",
      art: "lesson-planner",
      panel: "bg-accent-tint",
    },
    {
      title: "Offline-first",
      desc: "Lessons, quizzes, notes, and records keep working without internet.",
      art: "offline",
      panel: "bg-accent-tint",
    },
  ],
  [
    {
      title: "Presentation Mode",
      desc: "Full-screen teaching flow with equations, narration, and quick activities.",
      art: "presentation",
      panel: "bg-sky/20",
    },
    {
      title: "Smart Notes",
      desc: "Auto-generate summaries and study guides from any lesson content.",
      art: "notes",
      panel: "bg-sky/20",
    },
  ],
  [
    {
      title: "Quiz Builder",
      desc: "Build quizzes fast, auto-grade responses, and return instant feedback.",
      art: "quiz",
      panel: "bg-primary-100",
    },
    {
      title: "Curriculum Aligned",
      desc: "Full Nigerian curriculum, JSS1 to SS3, with WAEC and NECO prep.",
      art: "curriculum",
      panel: "bg-primary-100",
    },
  ],
];

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="sticker-card mb-5 flex w-full flex-col p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <h3 className="display text-lg tracking-tight text-ink sm:text-xl">
          {f.title}
        </h3>
        {f.tag && (
          <span className="shrink-0 rounded-full border-2 border-ink bg-sun px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-ink">
            {f.tag}
          </span>
        )}
      </div>

      {/* Animated illustration panel */}
      <div
        className={`relative mb-5 grid place-items-center overflow-hidden rounded-2xl border-2 border-ink py-9 ${f.panel}`}
      >
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-secondary/15 blur-2xl" />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
          className="relative"
        >
          <Illustration name={f.art} className="h-24 w-24" />
        </motion.div>
      </div>

      <p className="text-[14.5px] leading-relaxed text-ink/60">{f.desc}</p>

      {f.cta && (
        <a
          href="#download"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-accent-dark"
        >
          {f.cta}
          <ArrowUpRight size={16} strokeWidth={2.6} />
        </a>
      )}
    </motion.div>
  );
}

function CarouselColumn({
  items,
  reverse,
}: {
  items: Feature[];
  reverse?: boolean;
}) {
  // Items are duplicated; each card carries its own bottom margin so the two
  // stacked copies are identical blocks and the -50% translate loops seamlessly.
  return (
    <div className="marquee-mask-y group relative h-[600px] overflow-hidden">
      <div
        className={`flex flex-col group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-vertical-reverse" : "animate-marquee-vertical"
        }`}
      >
        {[...items, ...items].map((f, i) => (
          <FeatureCard key={`${f.title}-${i}`} f={f} i={i % items.length} />
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-secondary-50 section">
      <Star className="absolute right-[8%] top-[12%] h-7 w-7 text-accent animate-wobble" />
      <Dots className="absolute left-[5%] top-[20%] h-14 w-14 text-secondary/25" />
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Everything in one app</span>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.8rem]">
            Everything your{" "}
            <span className="marker text-primary">
              <span>classroom</span>
            </span>{" "}
            needs
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-relaxed text-ink/65">
            Every module is designed for the way schools actually operate:
            shared devices, mixed connectivity, and busy teachers.
          </p>
        </div>

        {/* Vertical carousel: columns scroll up / down in alternating directions */}
        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {columns.map((col, ci) => (
            <CarouselColumn key={ci} items={col} reverse={ci % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
