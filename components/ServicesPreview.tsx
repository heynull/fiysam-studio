'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { previewServices } from '@/lib/services';
import Container from '@/components/Container';

export default function ServicesPreview() {
  return (
    <section className="site-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-grey-energy">
              Product work
            </p>
            <h2 className="section-heading mt-5 max-w-md">
              Product work, made <span className="text-amber-energy">practical.</span>
            </h2>
            <p className="body-copy mt-6 max-w-md text-grey-energy">
              Product decisions, interface design, software delivery, and the
              foundations around a release.
            </p>
            <Link href="/services" className="btn-ghost mt-8">
              Explore Product Work →
            </Link>
          </div>

          <ol className="border-t border-border-dark">
            {previewServices.map((service, index) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="grid gap-4 border-b border-border-dark py-8 md:grid-cols-[3.5rem_minmax(0,0.7fr)_minmax(0,1fr)] md:gap-8 md:py-10"
              >
                <span className="font-syne text-sm font-bold text-amber-energy">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-syne text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-xl text-sm leading-6 text-grey-energy md:text-base">
                  {service.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
