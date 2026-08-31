'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkGrid from '../components/WorkGrid';
import ServicesPreview from '../components/ServicesPreview';

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
            A Lagos-based software product studio for organizations building
            useful tools for real operating needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/work" className="btn-primary text-center">
              Explore Studio Focus →
            </Link>
            <Link href="/contact" className="btn-ghost text-center justify-center">
              Let&apos;s Talk
            </Link>
          </motion.div>

        </div>
      </section>

      <WorkGrid />
      <ServicesPreview />
    </>
  );
}
