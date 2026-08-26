'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkGrid from '../components/WorkGrid';
import ServicesPreview from '../components/ServicesPreview';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-32 pb-20 md:pt-[140px] md:pb-20 relative overflow-hidden">
        <div className="hero-grid-lines absolute inset-0 pointer-events-none" />
        <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,160,32,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-amber-energy mb-6 px-3.5 py-1.5 border border-amber-energy/30 rounded"
          >
            <span className="w-1.5 h-1.5 bg-amber-energy rounded-full animate-pulse-slow" />
            Software Product Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] font-extrabold leading-[1.05] tracking-[-0.03em]"
          >
            Build Products That
            <br />
            <span className="text-amber-energy">Move Africa Forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.05rem] text-grey-energy leading-[1.7] max-w-[480px] mt-6 mb-11 font-light"
          >
            We design and develop software products for businesses across Africa.
            From idea to launch — we build tools that solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/work" className="btn-primary text-center">
              View Our Work →
            </Link>
            <Link href="/contact" className="btn-ghost text-center justify-center">
              Let's Talk
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 md:gap-16 mt-16 pt-8 border-t border-border-dark"
          >
            <div>
              <div className="font-syne text-[1.8rem] font-extrabold text-amber-energy leading-none">10+</div>
              <div className="text-[0.85rem] text-grey-energy">Products Built</div>
            </div>
            <div>
              <div className="font-syne text-[1.8rem] font-extrabold text-amber-energy leading-none">4+</div>
              <div className="text-[0.85rem] text-grey-energy">Years Building</div>
            </div>
            <div>
              <div className="font-syne text-[1.8rem] font-extrabold text-amber-energy leading-none">100%</div>
              <div className="text-[0.85rem] text-grey-energy">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      <WorkGrid />
      <ServicesPreview />
    </>
  );
}