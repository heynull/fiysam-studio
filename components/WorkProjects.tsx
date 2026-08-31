'use client';

import Link from 'next/link';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectStatusLabels, projects } from '@/lib/projects';

export default function WorkProjects() {
  return (
    <section aria-labelledby="studio-concepts-title">
      <div className="border-t border-border-dark">
        {projects.map((project, index) => {
          const isReversed = index % 2 === 1;

          return (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="grid gap-10 border-b border-border-dark py-14 md:grid-cols-2 md:items-center md:gap-16 md:py-20 lg:gap-24"
            >
              <div className={isReversed ? 'md:order-2' : undefined}>
                <div className="mb-7 flex items-center gap-3">
                  <span className="border border-amber-energy/35 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-amber-energy">
                    {projectStatusLabels[project.status]}
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">
                    {project.type}
                  </span>
                </div>
                <h2 className="font-syne text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white-warm">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-light-energy md:text-[1.0625rem]">
                  {project.shortDescription}
                </p>
                <Link href={`/work/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-light-energy transition-colors hover:text-amber-energy">
                  View concept brief
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <dl className="mt-8 grid gap-7 border-t border-border-dark pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Challenge</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-grey-energy">{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Approach</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-grey-energy">{project.approach}</dd>
                  </div>
                </dl>
              </div>

              <div className={isReversed ? 'md:order-1' : undefined}>
                <div className="relative overflow-hidden border border-border-dark bg-card-bg p-7 md:p-9">
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,42,53,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(30,42,53,0.55)_1px,transparent_1px)] [background-size:2.75rem_2.75rem]" />
                  <div className="relative">
                    <div className="flex items-center justify-between border-b border-border-dark pb-5">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Concept preview</span>
                      <Layers3 className="h-4 w-4 text-amber-energy" aria-hidden="true" />
                    </div>
                    <p className="mt-16 max-w-sm font-syne text-2xl font-bold leading-tight tracking-[-0.035em] text-white-warm md:mt-24 md:text-3xl">
                      {project.type}
                    </p>
                    <div className="mt-16 border-t border-border-dark pt-5 md:mt-24">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Disciplines</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.disciplines.map((discipline) => (
                          <li key={discipline} className="border border-border-dark bg-deep/70 px-3 py-1.5 text-xs text-light-energy">
                            {discipline}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm text-grey-energy">
                  <ArrowUpRight className="h-4 w-4 text-amber-energy" aria-hidden="true" />
                  Development fixture — not client work or a launched product.
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
