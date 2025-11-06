import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const accent = '#48e1c4'; // Mint Green

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#0b1220] to-[#0b1220]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0b1220]/40 via-[#0b1220]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
          }}
          className="text-center text-white"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.35)' }}
          >
            Utkarsh Patil
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-3 text-lg md:text-2xl/relaxed font-medium text-[#d9ffef]"
          >
            Student • Curious builder • Lifelong learner
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-[#48e1c4] text-[#0b1220] px-6 py-3 font-semibold shadow-lg shadow-[#48e1c4]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle animated background mint ring */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: `radial-gradient(closest-side, ${accent}, transparent 70%)` }} />
    </section>
  );
}
