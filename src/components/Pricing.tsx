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
    <section id="pricing" className="section bg-cream">
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.2rem]">
            Affordable.
            <br />
            <span className="text-ink/50">In Naira.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-ink/60">
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
            className="relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-cream-50 p-8 shadow-card md:p-10"
          >
            {/* Decorative floating elements */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/8" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-accent/10" />

            <div className="relative z-10">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10">
                <Sparkles size={28} className="text-primary" />
              </div>
              <h3 className="mt-8 text-3xl font-black tracking-tight text-ink md:text-4xl">
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
              className="flex items-center gap-6 rounded-[24px] bg-ink px-8 py-10 text-white md:px-10"
            >
              <div className="text-4xl md:text-5xl">✦✦</div>
              <div>
                <div className="text-5xl font-black tracking-tight md:text-6xl">
                  450+
                </div>
                <div className="mt-1 text-lg font-semibold text-white/60">
                  schools across Nigeria
                </div>
              </div>
            </motion.div>

            {/* Pill tags card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-[24px] bg-cream-50 p-8 shadow-card"
            >
              <div className="flex flex-wrap gap-3">
                {pillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/10 px-5 py-2.5 text-sm font-semibold text-ink/70 transition hover:border-primary/30 hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing tiers below bento */}
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={[
                "relative flex flex-col rounded-[24px] p-7 shadow-card transition-shadow hover:shadow-soft md:p-8",
                i === 1
                  ? "bg-ink text-white"
                  : "border border-primary/10 bg-cream-50 text-ink",
              ].join(" ")}
            >
              {i === 1 && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ink">
                  <Sparkles size={12} /> Popular
                </div>
              )}
              <div>
                <div
                  className={`text-[11px] font-bold uppercase tracking-[0.25em] ${
                    i === 1 ? "text-accent-light" : "text-primary"
                  }`}
                >
                  {t.name}
                </div>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-black tracking-tight md:text-5xl">
                    {t.price}
                  </span>
                </div>
                <div
                  className={`mt-1 text-xs ${
                    i === 1 ? "text-white/55" : "text-ink/50"
                  }`}
                >
                  {t.period}
                </div>
                <p
                  className={`mt-3 text-sm ${
                    i === 1 ? "text-white/75" : "text-ink/65"
                  }`}
                >
                  {t.blurb}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={`flex gap-3 text-sm ${
                      i === 1 ? "text-white/85" : "text-ink/80"
                    }`}
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        i === 1 ? "text-accent-light" : "text-primary"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={[
                  "mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:scale-[1.03]",
                  i === 1
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-ink text-white hover:bg-ink/85",
                ].join(" ")}
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
