"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Calendar,
  Presentation,
  ClipboardCheck,
  BarChart3,
  WifiOff,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
  tint: string;
  tag?: string;
};

const featured: Feature = {
  title: "AI Tutor",
  desc: "Explains, narrates, and answers students' questions out loud — with teacher-friendly guardrails that keep every response on-topic and curriculum-safe.",
  icon: Brain,
  tint: "bg-primary/10 text-primary",
  tag: "Most loved",
};

const features: Feature[] = [
  {
    title: "Lesson Planner",
    desc: "Turn notes into weekly plans, slides, and classroom prompts in seconds.",
    icon: Calendar,
    tint: "bg-accent-tint text-accent-dark",
  },
  {
    title: "Presentation Mode",
    desc: "Full-screen teaching flow with equations, narration, and quick activities.",
    icon: Presentation,
    tint: "bg-sky/10 text-sky",
  },
  {
    title: "Quiz Builder",
    desc: "Build quizzes fast, auto-grade responses, and return instant feedback.",
    icon: ClipboardCheck,
    tint: "bg-teal/15 text-teal",
  },
  {
    title: "Analytics",
    desc: "See class progress, spot struggling students, and act early.",
    icon: BarChart3,
    tint: "bg-primary/10 text-primary",
  },
  {
    title: "Offline-first",
    desc: "Lessons, quizzes, notes, and records keep working without internet.",
    icon: WifiOff,
    tint: "bg-accent-tint text-accent-dark",
  },
  {
    title: "Smart Notes",
    desc: "Auto-generate summaries and study guides from any lesson content.",
    icon: Sparkles,
    tint: "bg-sky/10 text-sky",
  },
  {
    title: "Curriculum Aligned",
    desc: "Full Nigerian curriculum, JSS1 to SS3, with WAEC and NECO prep.",
    icon: BookOpen,
    tint: "bg-teal/15 text-teal",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="section bg-cream-100">
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Features</p>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.8rem]">
            Everything your
            <br />
            <span className="text-ink/35">classroom needs</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink/60">
            Every module is designed for the way schools actually operate:
            shared devices, mixed connectivity, and busy teachers.
          </p>
        </div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Featured card */}
          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-ink/5 bg-cream-50 p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:col-span-2 sm:flex-row sm:items-stretch sm:gap-8"
          >
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-3">
                <div
                  className={`grid h-16 w-16 place-items-center rounded-2xl ${featured.tint}`}
                >
                  <featured.icon size={30} strokeWidth={2.4} />
                </div>
                {featured.tag && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream-50">
                    {featured.tag}
                  </span>
                )}
              </div>
              <h3 className="mt-6 text-3xl font-bold tracking-tight text-ink">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/60">
                {featured.desc}
              </p>
              <a
                href="#download"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-accent-dark"
              >
                Try the AI Tutor
                <ArrowUpRight size={16} strokeWidth={2.6} />
              </a>
            </div>

            {/* Decorative panel */}
            <div className="relative mt-6 hidden flex-1 overflow-hidden rounded-2xl bg-primary/5 sm:mt-0 sm:block">
              <div className="absolute inset-0 grid place-items-center">
                <Brain
                  size={120}
                  strokeWidth={1.2}
                  className="text-primary/25 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-teal/15 blur-2xl" />
            </div>
          </motion.div>

          {/* Standard cards */}
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-ink/5 bg-cream-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${f.tint}`}
                >
                  <f.icon size={26} strokeWidth={2.5} />
                </motion.div>
                <span className="font-mono text-sm font-bold text-ink/15">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-primary">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink/60">
                {f.desc}
              </p>

              {/* Reveal arrow */}
              <div className="mt-auto flex items-center pt-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink/40 transition-all duration-300 group-hover:bg-primary group-hover:text-cream-50">
                  <ArrowUpRight size={16} strokeWidth={2.6} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
