import Link from 'next/link';
import Container from '@/components/Container';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-deep py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-block font-syne text-2xl font-extrabold tracking-[-0.04em] text-white-warm md:text-[1.8rem]">
              FIYSAM<span className="text-amber-energy">.</span>
              <span className="ml-2 text-sm font-semibold tracking-[0.16em] text-grey-energy">STUDIO</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-grey-energy md:text-base">
              A product studio based in Lagos, Nigeria.
            </p>
          </div>

          <div>
            <h5 className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-grey-energy">Navigation</h5>
            <ul className="space-y-3.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-[0.875rem] text-light-energy transition-colors hover:text-amber-energy md:text-base">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-grey-energy">Services</h5>
            <ul className="space-y-3.5">
              <li><Link href="/services" className="text-[0.875rem] text-light-energy transition-colors hover:text-amber-energy md:text-base">Product Strategy</Link></li>
              <li><Link href="/services" className="text-[0.875rem] text-light-energy transition-colors hover:text-amber-energy md:text-base">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-[0.875rem] text-light-energy transition-colors hover:text-amber-energy md:text-base">Development</Link></li>
              <li><Link href="/services" className="text-[0.875rem] text-light-energy transition-colors hover:text-amber-energy md:text-base">AI & Data</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-grey-energy">Studio</h5>
            <p className="max-w-xs text-[0.875rem] leading-relaxed text-light-energy md:text-base">Based in Lagos, Nigeria.</p>
            <Link href="/contact" className="mt-5 inline-flex text-[0.875rem] text-light-energy transition-colors hover:text-amber-energy md:text-base">
              Start a conversation
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border-dark pt-6 text-[0.78rem] text-grey-energy md:mt-16 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Fiysam Studio. All rights reserved.</span>
          <span className="text-grey-energy/60">Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </Container>
    </footer>
  );
}
