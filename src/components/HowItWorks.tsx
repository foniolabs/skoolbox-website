"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Sparkle, Star, Squiggle } from "./Doodles";
import { NigerianClassroom } from "./Scenes";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white section">
      <Squiggle className="absolute left-[8%] top-[14%] h-6 w-24 text-secondary/40" />
      <Star className="absolute right-[10%] top-[22%] h-6 w-6 text-accent animate-wobble" />
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.8rem]">
            Built for the{" "}
            <span className="marker text-primary">
              <span>modern classroom</span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-ink/65">
            for bringing AI into classrooms and transforming how teachers teach
          </p>
        </div>

        {/* Nigerian classroom illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-14 flex max-w-3xl items-end justify-center"
        >
          <Sparkle className="absolute left-[18%] top-2 h-6 w-6 text-accent animate-float-gentle" />
          <Sparkle className="absolute right-[22%] top-10 h-4 w-4 text-secondary animate-float-gentle [animation-delay:0.6s]" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full"
          >
            <NigerianClassroom className="h-auto w-full overflow-visible" />
          </motion.div>
        </motion.div>

        {/* Sub-heading */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="display text-3xl text-ink md:text-5xl">
            Install. Setup. Teach.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold text-ink/65 md:text-lg">
            SkoolBox is your school&rsquo;s technology partner, offering tools
            that are built-to-context. Our technology is customised at the very
            core, to overcome bottlenecks in education delivery.
          </p>
          <a
            href="#features"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            Explore Features
            <ArrowRight size={16} strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </section>
  );
}
