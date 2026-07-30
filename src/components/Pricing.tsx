"use client";

import { motion } from "framer-motion";
import {
  Brain,
  WifiOff,
  ClipboardCheck,
  Calendar,
  BarChart3,
  Presentation,
  BookOpen,
  Sparkles,
  Check,
} from "lucide-react";
import { Star } from "./Doodles";

const pillTags = [
  "AI Tutor",
  "Offline Mode",
  "Quiz Builder",
  "Lesson Planner",
  "Analytics",
  "Curriculum",
  "Presentation",
  "Smart Notes",
];

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    blurb: "For individual teachers and self-learners.",
    cta: "Get started",
    features: [
      "Full offline app on 1 device",
      "Up to 30 students",
      "Core subjects and curriculum",
      "Basic AI tutor when online",
    ],
  },
  {
    name: "School",
    price: "₦2,500",
    period: "per teacher / month",
    blurb: "For schools rolling out across classrooms.",
    cta: "Start 14-day trial",
    features: [
      "Unlimited students per class",
      "All subjects and lesson planner",
      "AI tutor with voice narration",
      "Class and student analytics",
    ],
  },
  {
    name: "District",
    price: "Custom",
    period: "Volume pricing",
    blurb: "For state programs and multi-school deployments.",
    cta: "Talk to us",
    features: [
      "Everything in School",
      "Bulk device provisioning",
      "Custom curriculum integration",
      "Dedicated success manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-secondary-50 section">
      <Star className="absolute left-[7%] top-[12%] h-6 w-6 text-sun animate-wobble" />
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.2rem]">
            Affordable.{" "}
            <span className="marker text-primary">
              <span>In Naira.</span>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-ink/65">
            Start free, upgrade when your school is ready.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Left card: big reward/value card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sticker-card relative flex flex-col justify-between overflow-hidden p-8 md:p-10"
          >
            {/* Decorative floating elements */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/10" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-accent/15" />

            <div className="relative z-10">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-sun">
                <Sparkles size={28} className="text-ink" />
              </div>
              <h3 className="display mt-8 text-3xl text-ink md:text-4xl">
                Great tools for
                <br />
                every classroom
              </h3>
              <p className="mt-4 max-w-md text-base text-ink/60">
                From AI-powered tutoring to offline quizzes, SkoolBox brings
                everything a school needs into one quiet workflow.
              </p>
            </div>

            <a href="#features" className="btn-primary mt-8 w-fit">
              Explore
            </a>
          </motion.div>

          {/* Right column: stat card + pill tags */}
          <div className="grid gap-5">
            {/* Dark stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-center gap-6 rounded-[28px] border-2 border-ink bg-secondary px-8 py-10 text-white shadow-sticker md:px-10"
            >
              <div className="flex gap-1 text-sun">
                <Star className="h-9 w-9 md:h-11 md:w-11" />
                <Star className="h-7 w-7 self-end md:h-9 md:w-9" />
              </div>
              <div>
                <div className="display text-3xl tracking-tight md:text-4xl">
                  Built for
                  <br />
                  Nigerian classrooms
                </div>
              </div>
            </motion.div>

            {/* Pill tags card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="sticker-card p-8"
            >
              <div className="flex flex-wrap gap-3">
                {pillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-ink bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-sun"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Talk to us card */}
        <div className="mx-auto mt-12 max-w-md">
          {tiers
            .filter((t) => t.name === "District")
            .map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="sticker-card relative flex flex-col bg-white p-7 text-ink md:p-8"
              >
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary">
                    {t.name}
                  </div>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="display text-4xl tracking-tight md:text-5xl">
                      {t.price}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-ink/50">{t.period}</div>
                  <p className="mt-3 text-sm text-ink/65">{t.blurb}</p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ink/80">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                        strokeWidth={3}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-center rounded-full border-2 border-ink bg-primary px-6 py-3.5 text-sm font-extrabold tracking-tight text-white shadow-sticker-sm transition-all duration-150 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                >
                  {t.cta}
                </a>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
