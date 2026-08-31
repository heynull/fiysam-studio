'use client';

import Link from 'next/link';
import Container from '@/components/Container';

export default function CTABand() {
  return (
    <section className="site-section-compact border-y border-border-dark bg-gradient-to-br from-card-bg to-deep">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something <span className="text-amber-energy">Great?</span>
          </h2>
          <p className="text-grey-energy text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Tell us about the problem you&apos;re working on, its constraints, and
            what a useful first release could look like.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Start Your Project →
          </Link>
        </div>
      </Container>
    </section>
  );
}
