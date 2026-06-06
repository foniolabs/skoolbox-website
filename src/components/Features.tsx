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
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
};

const features: Feature[] = [
  {
    title: "AI Tutor",
    desc: "Explains, narrates, and answers students' questions with teacher-friendly guardrails.",
    icon: Brain,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Lesson Planner",
    desc: "Turn existing notes into weekly plans, lesson slides, and classroom prompts.",
    icon: Calendar,
    color: "bg-accent-tint text-accent-dark",
  },
  {
    title: "Presentation Mode",
    desc: "Full-screen teaching flow with equations, narration, and quick class activities.",
    icon: Presentation,
    color: "bg-sky/10 text-sky",
  },
  {
    title: "Quiz Builder",
    desc: "Create quizzes quickly, auto-grade responses, and give students instant feedback.",
    icon: ClipboardCheck,
    color: "bg-teal/15 text-teal",
  },
  {
    title: "Analytics",
    desc: "See class progress, spot struggling students, and plan interventions early.",
    icon: BarChart3,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Offline-first",
    desc: "Core lessons, quizzes, notes, and records keep working without internet.",
    icon: WifiOff,
    color: "bg-accent-tint text-accent-dark",
  },
  {
    title: "Smart Notes",
    desc: "Automatically generate summaries and study guides from any lesson content.",
    icon: Sparkles,
    color: "bg-sky/10 text-sky",
  },
  {
    title: "Curriculum Aligned",
    desc: "All content follows Nigerian curriculum from JSS1 to SS3 including WAEC and NECO prep.",
    icon: BookOpen,
    color: "bg-teal/15 text-teal",
  },
];

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

        {/* 4-column card grid */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="group relative overflow-hidden rounded-[24px] bg-cream-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
            >
              {/* Icon with hover float */}
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                className={`grid h-14 w-14 place-items-center rounded-2xl ${f.color} transition-colors duration-300 group-hover:bg-opacity-20`}
              >
                <f.icon size={26} strokeWidth={2.5} />
              </motion.div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-black tracking-tight text-ink group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                {f.desc}
              </p>

              {/* Decorative background element on hover */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
