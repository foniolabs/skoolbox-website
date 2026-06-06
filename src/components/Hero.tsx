"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroScene from "./HeroScene";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yScene = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream">
      <div className="container-page flex min-h-screen items-center pb-12 pt-16 md:min-h-[640px] md:pb-10 md:pt-12 lg:min-h-[690px]">
        <div className="grid w-full items-center gap-6 md:grid-cols-12 md:gap-2">
          <motion.div
            style={{ y: yText }}
            className="z-10 text-left md:col-span-5 lg:col-span-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[48px] tracking-tight sm:text-[64px] md:text-[60px] lg:text-[76px]"
            >
              Smart, simple,
              <br />
              magical
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 max-w-[260px] text-[16px] font-bold leading-snug text-ink/62 md:mt-5 md:text-[17px]"
            >
              The app parents love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6"
            >
              <a href="#download" className="btn-primary">
                Explore
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: yScene }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[300px] sm:h-[380px] md:col-span-7 md:h-[420px] lg:col-span-8 lg:h-[510px]"
          >
            <HeroScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
