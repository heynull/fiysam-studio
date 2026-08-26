'use client';

import Link from 'next/link';

export default function CTABand() {
  return (
    <section className="bg-gradient-to-br from-card-bg to-deep border-t border-border-dark border-b border-border-dark px-6 md:px-[60px] py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Build Something <span className="text-amber-energy">Great?</span>
        </h2>
        <p className="text-grey-energy text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Let's talk about your idea. We'll help you turn it into a product that
          users love and your business grows with.
        </p>
        <Link href="/contact" className="btn-primary inline-block">
          Start Your Project →
        </Link>
      </div>
    </section>
  );
}