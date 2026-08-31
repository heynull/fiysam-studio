'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/Container';
import ServicesPreview from '@/components/ServicesPreview';

const philosophy = ['Build', 'Ship', 'Learn', 'Decide'];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[78svh] items-end overflow-hidden py-20 md:min-h-[44rem] md:py-24">
        <div className="hero-grid-lines absolute inset-0" />
        <div className="pointer-events-none absolute -right-48 top-0 h-[32rem] w-[32rem] bg-[radial-gradient(circle,rgba(232,160,32,0.06)_0%,transparent_68%)] md:-right-24 md:h-[44rem] md:w-[44rem]" />

        <Container className="relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-grey-energy"
          >
            <span className="h-px w-8 bg-amber-energy" />
            Fiysam Studio / Lagos, Nigeria
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="display-heading max-w-4xl"
          >
            Build. Ship.
            <br />
            <span className="text-amber-energy">Learn.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 grid max-w-4xl gap-6 border-t border-border-dark pt-6 md:mt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:gap-12"
          >
            <p className="body-copy text-light-energy">
              A product studio for organizations and ideas that need useful
              software.
            </p>
            <p className="body-copy text-grey-energy">
              We work across client engagements and Studio ventures, starting
              with the smallest useful step.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10"
          >
            <Link href="/contact" className="btn-primary text-center">
              Tell Us What You&apos;re Building →
            </Link>
            <Link href="/services" className="btn-ghost justify-center text-center">
              Explore Product Work
            </Link>
          </motion.div>
        </Container>
      </section>

      <section className="site-section border-y border-border-dark bg-deep">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-grey-energy">
                Studio proposition
              </p>
              <p className="mt-5 max-w-sm text-base leading-7 text-grey-energy md:text-lg">
                The Studio exists to make, test, and improve useful software.
              </p>
            </div>

            <div>
              <h2 className="section-heading max-w-4xl">
                Make the useful thing. Then let reality <span className="text-amber-energy">shape it.</span>
              </h2>
              <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4">
                {philosophy.map((step, index) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="border-t border-border-dark pt-4"
                  >
                    <span className="text-xs font-semibold tracking-[0.12em] text-amber-energy">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 font-syne text-xl font-bold">{step}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <ServicesPreview />

      <section className="site-section-compact border-t border-border-dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end lg:gap-20">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-grey-energy">
                Start with the problem
              </p>
              <h2 className="section-heading mt-5 max-w-3xl">
                Bring us the question before you have all the answers.
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-md text-base leading-7 text-grey-energy md:text-lg">
                Begin with the context, constraints, and the smallest useful next step.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Start a Conversation →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
