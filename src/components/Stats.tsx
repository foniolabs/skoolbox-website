"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = { value: number; suffix: string; decimals?: number; label: string; note: string };

const stats: Stat[] = [
  { value: 450, suffix: "+", label: "Schools", note: "across Nigerian states" },
  { value: 10, suffix: "k+", label: "Learners", note: "teachers and students" },
  { value: 4.8, suffix: "", decimals: 1, label: "Rating", note: "average app feedback" },
];

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-5xl font-black tracking-tight text-ink md:text-7xl">
                <CountUp to={s.value} decimals={s.decimals} />
                <span className="text-primary">{s.suffix}</span>
              </div>
              <div className="mt-2 text-base font-semibold text-ink/55">
                {s.label}
              </div>
              <div className="mt-0.5 text-sm text-ink/40">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
