'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Container from '@/components/Container';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
];

function isCurrentPath(pathname: string, path: string) {
  return pathname === path || pathname.startsWith(`${path}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMobileMenuOpen]);

  const contactIsCurrent = pathname === '/contact';

  return (
    <nav className="fixed inset-x-0 top-3 z-[100]" aria-label="Primary navigation">
      <Container>
        <div
          className={`relative mx-auto flex w-full max-w-full items-center justify-between rounded-full border px-4 py-3 transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 md:w-fit md:gap-8 md:px-6 lg:px-7 ${
            isScrolled
              ? 'border-[#314050] bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(17,24,32,0.97)_58%,rgba(13,17,23,0.97))] shadow-[0_12px_30px_rgba(0,0,0,0.3)] backdrop-blur-md'
              : 'border-[#293846] bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(17,24,32,0.95)_58%,rgba(13,17,23,0.96))] shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md'
          }`}
        >
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className="font-syne text-[1rem] font-extrabold tracking-[-0.035em] text-white-warm sm:text-[1.1rem] md:mr-2"
          >
            FIYSAM <span className="text-amber-energy">STUDIO</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isCurrent = isCurrentPath(pathname, item.path);

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`relative rounded-full px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-amber-energy after:transition-transform ${
                    isCurrent
                      ? 'text-white-warm after:scale-x-100'
                      : 'text-grey-energy after:scale-x-0 hover:text-light-energy'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            aria-current={contactIsCurrent ? 'page' : undefined}
            className="hidden min-h-11 items-center rounded-full bg-amber-energy px-5 py-2.5 text-sm font-bold text-obsidian transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#f0b030] hover:shadow-[0_6px_18px_rgba(232,160,32,0.18)] active:translate-y-px md:ml-2 md:inline-flex"
          >
            Contact
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-light-energy transition-colors duration-200 hover:bg-obsidian/60 hover:text-white-warm active:bg-obsidian md:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div
            id="mobile-navigation"
            aria-hidden={!isMobileMenuOpen}
            inert={!isMobileMenuOpen}
            className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] z-10 overflow-hidden rounded-[1.35rem] border border-[#314050] bg-[linear-gradient(135deg,#1b2731,#111820_58%,#0d1117)] p-1.5 shadow-[0_18px_38px_rgba(0,0,0,0.42)] transition-[opacity,transform] duration-200 md:hidden ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
            }`}
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const isCurrent = isCurrentPath(pathname, item.path);

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    aria-current={isCurrent ? 'page' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex min-h-11 items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isCurrent ? 'bg-card-bg text-white-warm' : 'text-grey-energy hover:bg-card-bg hover:text-light-energy'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-1 border-t border-border-dark pt-1">
                <Link
                  href="/contact"
                  aria-current={contactIsCurrent ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex min-h-11 items-center justify-center rounded-xl bg-amber-energy px-4 py-3 text-sm font-bold text-obsidian transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#f0b030] hover:shadow-[0_6px_18px_rgba(232,160,32,0.18)] active:translate-y-px"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
