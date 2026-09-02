import Link from 'next/link';
import { X } from 'lucide-react';
import Container from '@/components/Container';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

type SocialLink = {
  name: 'X' | 'Instagram' | 'LinkedIn';
  url: string | null;
};

// Replace null values only with verified Fiysam Studio profile URLs.
const socialLinks: SocialLink[] = [
  { name: 'X', url: null },
  { name: 'Instagram', url: null },
  { name: 'LinkedIn', url: null },
];

function SocialIcon({ name }: Pick<SocialLink, 'name'>) {
  if (name === 'X') {
    return <X className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />;
  }

  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.75" />
        <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="6.25" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M5.25 10.25v7.5M10.25 17.75v-4.2a3.3 3.3 0 0 1 6.5 0v4.2M10.25 10.25v7.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-deep py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-block font-syne text-2xl font-extrabold tracking-[-0.04em] text-white-warm md:text-[1.8rem]">
              FIYSAM <span className="text-amber-energy">STUDIO</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-grey-energy md:text-base">
              A product studio based in Lagos, Nigeria.
            </p>
            <div className="mt-6 flex items-center gap-2" aria-label="Fiysam Studio social profiles">
              {socialLinks.map(({ name, url }) => {
                const sharedClasses = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-dark text-grey-energy transition-colors duration-200';

                return url ? (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`${sharedClasses} cursor-pointer hover:border-amber-energy hover:text-amber-energy`}
                  >
                    <SocialIcon name={name} />
                  </a>
                ) : (
                  <span
                    key={name}
                    aria-label={`${name} profile URL pending`}
                    role="img"
                    title={`${name} profile URL pending`}
                    className={`${sharedClasses} cursor-default opacity-70`}
                  >
                    <SocialIcon name={name} />
                  </span>
                );
              })}
            </div>
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
          <span className="text-grey-energy/60">Crafted by Fiysam Studio</span>
        </div>
      </Container>
    </footer>
  );
}
