'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';

export default function ServicesFull() {
  return (
    <div>
      <div className="mb-16 md:mb-24">
        <h1 className="page-heading mb-5">
          Product Work, <span className="text-amber-energy">Made Practical</span>
        </h1>
        <p className="body-copy max-w-3xl">
          Product, design, and technical disciplines for taking software from
          an initial question to a deployable release.
        </p>
      </div>

      <div className="border-t border-border-dark">
        {services.map((service, index) => {
          const Icon = service.icon;
          const serviceNumber = String(service.id).padStart(2, '0');

          return (
            <motion.article
              key={service.id}
              aria-labelledby={`service-${service.id}-title`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="grid gap-10 border-b border-border-dark py-12 md:grid-cols-[minmax(0,0.85fr)_minmax(20rem,1.15fr)] md:gap-16 md:py-16 lg:gap-24 lg:py-20"
            >
              <header className="max-w-xl">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.14em] text-amber-energy">
                    {serviceNumber}
                  </span>
                  <Icon className="h-5 w-5 text-grey-energy" aria-hidden="true" />
                </div>
                <h2
                  id={`service-${service.id}-title`}
                  className="font-syne text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white-warm"
                >
                  {service.title}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-grey-energy md:text-[1.0625rem]">
                  {service.fullDescription}
                </p>
              </header>

              <div className="border-t border-border-dark pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10 lg:pl-14">
                <section aria-labelledby={`service-${service.id}-process`}>
                  <h3
                    id={`service-${service.id}-process`}
                    className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-grey-energy"
                  >
                    Process
                  </h3>
                  <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.process.map((step, stepIndex) => (
                      <li key={step} className="flex items-baseline gap-3 text-sm text-light-energy">
                        <span className="text-[0.68rem] font-semibold tracking-[0.08em] text-amber-energy">
                          {String(stepIndex + 1).padStart(2, '0')}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section
                  aria-labelledby={`service-${service.id}-considerations`}
                  className="mt-9 border-t border-border-dark pt-8"
                >
                  <h3
                    id={`service-${service.id}-considerations`}
                    className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-grey-energy"
                  >
                    What this can cover
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-light-energy">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-energy" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="mt-9 border-t border-border-dark pt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-light-energy transition-colors hover:text-amber-energy"
                  >
                    Enquire about this service
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
