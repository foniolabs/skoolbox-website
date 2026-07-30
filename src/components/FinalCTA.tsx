"use client";

import { motion } from "framer-motion";
import { ShieldCheck, WifiOff } from "lucide-react";
import { Sparkle } from "./Doodles";

export default function FinalCTA() {
  return (
    <section id="download" className="bg-cream-50 pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[40px] border-2 border-ink bg-[#f9943b] px-8 py-20 text-center text-ink shadow-sticker md:px-16 md:py-28"
        >
          {/* Circular 3D Icon + decorative cluster - straddling the top edge.
              Outer div owns the centering/edge offset; the inner motion.div only
              handles the entrance animation so Framer Motion's inline transform
              doesn't clobber the -translate-x/y centering. */}
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
            {/* Decorative dots + sparkles scattered around the circle */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Soft pink dot, upper-left */}
              <div className="absolute -left-[130px] -top-[80px] h-5 w-5 rounded-full bg-pink-300" />
              {/* Purple dot, upper-right */}
              <div className="absolute left-[120px] -top-[90px] h-3.5 w-3.5 rounded-full bg-secondary" />
              {/* Gray dot, left */}
              <div className="absolute -left-[170px] top-[10px] h-2.5 w-2.5 rounded-full bg-ink/25" />
              {/* Purple dot, far-left mid */}
              <div className="absolute -left-[120px] top-[40px] h-2.5 w-2.5 rounded-full bg-secondary-light" />
              {/* Purple dot, right mid */}
              <div className="absolute left-[170px] top-[30px] h-2.5 w-2.5 rounded-full bg-secondary-light" />
              {/* Gray dot, lower-right */}
              <div className="absolute left-[150px] top-[95px] h-2.5 w-2.5 rounded-full bg-ink/25" />

              {/* Gold sparkles */}
              <Sparkle className="absolute left-[150px] -top-[60px] h-6 w-6 text-ink animate-float-gentle" />
              <Sparkle className="absolute -left-[120px] top-[70px] h-6 w-6 text-ink animate-float-gentle [animation-delay:1.2s]" />
            </div>

            <div className="relative h-40 w-40 md:h-52 md:w-52 rounded-full bg-white flex items-center justify-center shadow-platform border-[3px] border-ink">
              <motion.img
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="/3d/education-icon.png"
                alt="3D graduation cap"
                className="h-[75%] w-[75%] object-contain"
              />
            </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center pt-32 md:pt-44">
            <h2 className="display mx-auto max-w-4xl text-center text-4xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Teaching isn&rsquo;t easy,
              <br />
              learning should be.
            </h2>

            <div className="mt-10 flex justify-center gap-6 text-[13px] font-bold tracking-tight text-ink/65">
              <span className="inline-flex items-center gap-2">
                <WifiOff size={14} /> OFFLINE-FIRST
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} /> LOCAL DATA
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
