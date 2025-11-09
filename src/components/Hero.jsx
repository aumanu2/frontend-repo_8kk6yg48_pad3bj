import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-zinc-900"
          >
            Hi, I’m Pragya — a Creative Designer who blends imagination with interface.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-zinc-700"
          >
            From colors and shapes to meaningful user journeys — I craft stories through design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#eecfd6] px-6 py-3 text-zinc-900 shadow-sm transition hover:shadow-md"
            >
              <span className="text-sm font-medium">View My Work</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6b07a] bg-white/80 px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-white"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">Let’s Connect</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute -left-20 top-20 h-64 w-64 rotate-12 rounded-full bg-gradient-to-tr from-[#eecfd6]/60 via-[#f5e7d6]/60 to-[#8dd3cc]/60 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute -right-20 bottom-10 h-72 w-72 -rotate-12 rounded-full bg-gradient-to-tr from-[#8dd3cc]/60 via-[#f5e7d6]/60 to-[#e6c98b]/60 blur-3xl"
      />
    </section>
  );
};

export default Hero;
