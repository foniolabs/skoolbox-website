"use client";

import { motion } from "framer-motion";

// Facts that are true today (see FAQ) instead of user counts — a row of
// zeros reads as "nobody uses this", and 0.0 reads as a bad rating.
type Fact = { value: string; label: string; note: string };

const facts: Fact[] = [
  { value: "Pry 5–SS3", label: "Primary & secondary", note: "Nigerian curriculum, one app" },
  { value: "WAEC · NECO", label: "Exam preparation", note: "plus JAMB practice" },
  { value: "Offline", label: "No internet needed", note: "lessons, quizzes and tracking" },
];

export default function Stats() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="eyebrow">Built for your school</span>
          <h2 className="display mt-5 text-4xl md:text-5xl lg:text-6xl">
            Made for how Nigerian
            <br />
            schools <span className="text-primary">really work</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold text-ink/60">
            Now piloting with our first partner school &mdash; and ready for
            yours.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl font-black tracking-tight text-ink md:text-5xl lg:text-6xl">
                {f.value}
              </div>
              <div className="mt-3 text-base font-semibold text-ink/65">
                {f.label}
              </div>
              <div className="mt-0.5 text-sm text-ink/55">{f.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
