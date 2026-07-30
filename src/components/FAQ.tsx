"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Does SkoolBox really work without internet?",
    a: "Yes. Lessons, quizzes, presentation mode, and progress tracking run from a local database. Online AI features reconnect when internet is available.",
  },
  {
    q: "Which platforms is SkoolBox available on?",
    a: "SkoolBox is a desktop app for Windows, macOS, and Linux. A school edition for low-cost Android tablets is on the roadmap.",
  },
  {
    q: "Is the curriculum aligned with WAEC and NECO?",
    a: "Yes. SkoolBox follows the Nigerian secondary school curriculum from JSS1 to SS3 and supports WAEC, NECO, and JAMB preparation.",
  },
  {
    q: "How is student data protected?",
    a: "Student data is stored locally on the school's device by default. Schools stay in control of classroom records and exports.",
  },
  {
    q: "Can I import my existing lesson notes?",
    a: "Yes. Teachers can import .docx lesson notes into the planner instead of starting from scratch.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-cream-50">
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.2rem]">
            Questions,{" "}
            <span className="marker text-primary">
              <span>answered.</span>
            </span>
          </h2>
        </div>

        {/* Accordion card */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="sticker-card divide-y-2 divide-ink/10 overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 px-7 py-6 text-left md:px-9"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-bold tracking-tight text-ink transition group-hover:text-primary md:text-xl">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={[
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors",
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-sun text-ink group-hover:bg-primary group-hover:text-white",
                      ].join(" ")}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-6 pr-16 leading-relaxed text-ink/60 md:px-9">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
