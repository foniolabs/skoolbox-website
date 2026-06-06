"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-cream">
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display text-4xl md:text-6xl lg:text-[4.8rem]">
            Trusted by 450+ schools
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-ink/60">
            for bringing AI into classrooms and transforming how teachers teach
          </p>
        </div>

        {/* Decorative school illustration (CSS geometric) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-14 flex h-[320px] max-w-2xl items-end justify-center md:h-[400px]"
        >
          {/* Building blocks with floating animation */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-end gap-1"
          >
            {/* Left tower */}
            <div className="relative">
              <div className="h-36 w-20 rounded-t-lg bg-primary/20 md:h-48 md:w-28" />
              <div className="absolute -top-3 left-1/2 h-6 w-12 -translate-x-1/2 rounded-t-lg bg-primary/30 md:w-16" />
              {/* Windows */}
              <div className="absolute left-3 top-8 grid grid-cols-2 gap-2 md:left-5 md:top-12">
                <div className="h-4 w-3 rounded-t-full bg-primary/15 md:h-5 md:w-4" />
                <div className="h-4 w-3 rounded-t-full bg-primary/15 md:h-5 md:w-4" />
                <div className="h-4 w-3 rounded-t-full bg-primary/15 md:h-5 md:w-4" />
                <div className="h-4 w-3 rounded-t-full bg-primary/15 md:h-5 md:w-4" />
              </div>
            </div>

            {/* Center main building */}
            <div className="relative -mx-2">
              <div className="h-44 w-32 rounded-t-lg bg-primary/15 md:h-56 md:w-44" />
              {/* Pillars */}
              <div className="absolute bottom-0 left-4 flex gap-4 md:left-6 md:gap-6">
                <div className="h-16 w-2 bg-primary/25 md:h-20 md:w-3" />
                <div className="h-16 w-2 bg-primary/25 md:h-20 md:w-3" />
                <div className="h-16 w-2 bg-primary/25 md:h-20 md:w-3" />
                <div className="h-16 w-2 bg-primary/25 md:h-20 md:w-3" />
              </div>
              {/* Pediment triangle */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="h-0 w-0 border-l-[50px] border-r-[50px] border-b-[24px] border-l-transparent border-r-transparent border-b-primary/20 md:border-l-[70px] md:border-r-[70px] md:border-b-[30px]" />
              </div>
              {/* Door */}
              <div className="absolute bottom-0 left-1/2 h-10 w-8 -translate-x-1/2 rounded-t-full bg-primary/25 md:h-14 md:w-10" />
            </div>

            {/* Right tower */}
            <div className="relative">
              <div className="h-28 w-20 rounded-t-lg bg-primary/20 md:h-40 md:w-28" />
              <div className="absolute left-3 top-8 grid grid-cols-2 gap-2 md:left-5 md:top-10">
                <div className="h-4 w-3 rounded-t-full bg-primary/15 md:h-5 md:w-4" />
                <div className="h-4 w-3 rounded-t-full bg-primary/15 md:h-5 md:w-4" />
              </div>
            </div>
          </motion.div>

          {/* Decorative trees */}
          <div className="absolute bottom-0 left-8 md:left-16">
            <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 md:h-20 md:w-20" />
            <div className="mx-auto -mt-1 h-6 w-1.5 bg-primary/20 md:h-8" />
          </div>
          <div className="absolute bottom-0 right-8 md:right-16">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 md:h-16 md:w-16" />
            <div className="mx-auto -mt-1 h-5 w-1.5 bg-primary/20 md:h-7" />
          </div>

          {/* Sparkle decorations with pulse */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-1/4 top-8 text-2xl text-accent md:top-12 md:text-3xl"
          >
            ✦
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            className="absolute right-1/3 top-16 text-sm text-accent/50 md:top-20"
          >
            ✦
          </motion.div>
        </motion.div>

        {/* Sub-heading */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="text-3xl font-black tracking-tight text-ink md:text-5xl">
            Install. Setup. Teach.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-ink/60 md:text-lg">
            SkoolBox is your school&rsquo;s technology partner, offering tools
            that are built-to-context. Our technology is customised at the very
            core, to overcome bottlenecks in education delivery.
          </p>
          <a
            href="#features"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            Explore Features
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
