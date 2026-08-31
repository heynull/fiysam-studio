'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { previewServices } from '@/lib/services';

export default function ServicesPreview() {
  return (
    <section className="py-[100px] bg-obsidian">
      <div className="grid md:grid-cols-2 gap-[60px] items-center">
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Product Work
            <br />
            <span className="text-amber-energy">From Idea to Release</span>
          </h2>
          <p className="section-sub text-sm md:text-base">
            A practical set of product, design, and technical disciplines for
            shaping and shipping software.
          </p>
          <div className="mt-8">
            <Link href="/services" className="btn-ghost">
              Explore Our Services →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-dark border border-border-dark rounded-lg overflow-hidden">
          {previewServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card-bg p-6 md:p-8 hover:bg-[#141E28] transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-amber-energy mb-4" aria-hidden="true" />
                <h3 className="text-[1rem] font-bold mb-2">{service.title}</h3>
                <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light">{service.description}</p>
                <span className="block mt-4 text-amber-energy text-[1.2rem] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
