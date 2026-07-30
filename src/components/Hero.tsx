"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import HeroScene from "./HeroScene";
import { Star, Squiggle, Dots, Arrow } from "./Doodles";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yScene = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary-50">
      {/* scattered doodles */}
      <Star className="absolute left-[6%] top-[22%] h-7 w-7 text-sun animate-float-slow" />
      <Dots className="absolute right-[4%] top-[14%] h-16 w-16 text-secondary/30" />
      <Squiggle className="absolute bottom-[14%] left-[12%] hidden h-6 w-28 text-coral md:block" />
      <Star className="absolute bottom-[24%] right-[40%] h-5 w-5 text-accent animate-wobble" />

      <div className="container-page flex min-h-screen items-center pb-24 pt-32 md:min-h-[720px] md:pb-20 md:pt-16 lg:min-h-[820px]">
        <div className="grid w-full items-center gap-6 md:grid-cols-12 md:gap-2">
          <motion.div
            style={{ y: yText }}
            className="z-10 text-left md:col-span-5 lg:col-span-5"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              <Sparkles size={13} strokeWidth={2.6} />
              Built for Nigerian classrooms
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="display mt-5 text-[46px] leading-[1.0] tracking-tight sm:text-[60px] md:text-[58px] lg:text-[74px]"
            >
              Teaching that
              <br />
              feels like{" "}
              <span className="marker text-primary">
                <span>magic</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[400px] text-[17px] font-semibold leading-relaxed text-ink/70 md:text-[18px]"
            >
              Plan lessons, teach with an AI tutor, quiz your class, and track
              every student — all in one playful app that works even offline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#features" className="btn-primary">
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-ink/55"
            >
              <Arrow className="h-8 w-8 -scale-x-100 text-accent" />
              No internet? No problem — works fully offline.
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: yScene }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[320px] sm:h-[400px] md:col-span-7 md:h-[460px] lg:col-span-7 lg:h-[540px]"
          >
            <HeroScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
