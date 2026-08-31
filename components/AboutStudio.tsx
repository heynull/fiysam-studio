'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const approach = [
  ['01', 'Start with the real question', 'We clarify the problem, the people involved, and what a useful first release needs to make possible.'],
  ['02', 'Make the right thing visible', 'Product decisions, interface design, and technical choices are worked through together rather than in isolation.'],
  ['03', 'Release with room to learn', 'We shape work into a practical release, then use what it reveals to guide the next decision.'],
] as const;

const disciplines = ['Product thinking', 'UI/UX design', 'Engineering', 'AI and data, where appropriate'];

export default function AboutStudio() {
  return (
    <div>
      <header className="max-w-4xl">
        <p className="section-label">About Studio</p>
        <h1 className="page-heading max-w-3xl">
          A place to make <span className="text-amber-energy">useful software</span> real.
        </h1>
        <p className="body-copy mt-7 max-w-2xl text-light-energy">
          Fiysam Studio is a Lagos-based product studio. We work with organizations and explore Studio ventures through focused product, design, and engineering work.
        </p>
      </header>

      <section className="mt-20 grid gap-10 border-t border-border-dark pt-10 md:mt-28 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-14">
        <h2 className="section-heading text-white-warm">Why Studio exists</h2>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-light-energy md:text-xl">
            Useful ideas deserve more than a slide deck or a long handoff. Studio exists to give promising product questions a clear path from early thinking to something people can use.
          </p>
          <p className="mt-6 text-base leading-relaxed text-grey-energy">
            That may mean working alongside a client team, examining a new venture direction, or finding the smallest form a product needs before more time and energy are committed.
          </p>
        </div>
      </section>

      <section className="mt-20 md:mt-28" aria-labelledby="approach-title">
        <div className="max-w-2xl">
          <p className="section-label">Approach</p>
          <h2 id="approach-title" className="section-heading">A practical way through product work.</h2>
        </div>
        <ol className="mt-10 border-t border-border-dark md:mt-14">
          {approach.map(([number, title, description]) => (
            <motion.li
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="grid gap-4 border-b border-border-dark py-7 sm:grid-cols-[4rem_minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-8 md:py-9"
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-amber-energy">{number}</span>
              <h3 className="font-syne text-xl font-bold tracking-[-0.03em] text-white-warm md:text-2xl">{title}</h3>
              <p className="text-sm leading-relaxed text-grey-energy md:text-base">{description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 border-t border-border-dark pt-10 md:mt-28 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-14" aria-labelledby="disciplines-title">
        <div>
          <p className="section-label">Working together</p>
          <h2 id="disciplines-title" className="section-heading">The disciplines in the room.</h2>
        </div>
        <div className="border-l border-border-dark pl-6 md:pl-10">
          <p className="max-w-xl text-base leading-relaxed text-light-energy md:text-lg">
            The work brings the product question, the experience, and the technical path into the same conversation.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {disciplines.map((discipline) => (
              <li key={discipline} className="border-b border-border-dark pb-4 text-sm font-medium text-light-energy md:text-base">
                {discipline}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 border-t border-border-dark pt-10 md:mt-28 md:pt-14">
        <div className="max-w-2xl">
          <p className="section-label">Start a conversation</p>
          <h2 className="section-heading">Have a problem worth exploring?</h2>
          <p className="mt-5 text-base leading-relaxed text-grey-energy md:text-lg">
            Tell us what you are trying to make clearer, easier, or more useful.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
            Tell us what you&apos;re building
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
