"use client";

import { motion } from "motion/react";

export default function Template({ children }) {
  return (
    <>
      {/* Luxury Split Curtain + Brand Monogram Overlay (0.85s total) */}
      <div className="pointer-events-none fixed inset-0 z-50 flex flex-col">
        {/* Top Curtain Panel */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.55,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="relative flex-1 bg-forest border-b border-copper/50"
        />

        {/* Bottom Curtain Panel */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 0.55,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="relative flex-1 bg-forest border-t border-copper/50"
        />

        {/* Center Monogram & Copper Accent Line */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.94 }}
          transition={{
            duration: 0.3,
            delay: 0.18,
            ease: "easeOut",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 font-heading text-base sm:text-lg font-bold tracking-[0.22em]">
            <span className="text-ivory">SERVICE</span>
            <span className="text-copper">MARQUE</span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1.5px] w-28 bg-gradient-to-r from-transparent via-copper to-transparent"
          />
        </motion.div>
      </div>

      {/* Smooth Editorial Content Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}