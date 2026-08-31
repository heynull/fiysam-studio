'use client';

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

      <div className="space-y-20 md:space-y-28">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-t border-border-dark pt-10 md:pt-14 first:border-0 first:pt-0"
            >
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-amber-energy" aria-hidden="true" />
                  <span className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-amber-energy">
                    Service {String(service.id).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-grey-energy text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="mt-6">
                  <h4 className="text-[0.7rem] font-semibold text-amber-energy uppercase tracking-[0.08em] mb-3">
                    Our Process
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, idx) => (
                      <span
                        key={idx}
                        className="text-[0.7rem] px-3 py-1.5 rounded-full bg-card-bg border border-border-dark text-grey-energy"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-card-bg border border-border-dark rounded-lg p-8 md:p-10">
                <h4 className="text-[0.7rem] font-semibold text-amber-energy uppercase tracking-[0.08em] mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[0.875rem] text-light-energy">
                      <span className="text-amber-energy mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border-dark">
                  <a
                    href="/contact"
                    className="text-amber-energy font-medium hover:underline inline-flex items-center gap-2 text-[0.875rem]"
                  >
                    Enquire about this service →
                  </a>
                </div>
              </div>
            </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
