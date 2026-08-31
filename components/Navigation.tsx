'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/Container';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-obsidian/85 backdrop-blur-[14px] border-b border-border-dark' : 'bg-transparent'
      }`}>
        <Container className="flex items-center justify-between py-4 md:py-5">
          <Link href="/" className="font-syne font-extrabold text-[1.1rem] md:text-[1.35rem] tracking-[-0.02em] text-white-warm">
            FIYSAM <span className="text-amber-energy">STUDIO</span>
          </Link>

          <ul className="hidden md:flex gap-6 lg:gap-9 list-none items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-grey-energy text-sm font-medium tracking-[0.04em] uppercase hover:text-white-warm transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-amber-energy text-obsidian px-[22px] py-2.5 rounded font-bold text-sm hover:bg-[#f0b030] transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="z-50 text-white-warm md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </nav>

      {/* Mobile Navigation Menu */}
      <div id="mobile-navigation" aria-hidden={!isMobileMenuOpen} inert={!isMobileMenuOpen} className={`fixed top-0 left-0 right-0 bottom-0 bg-deep z-40 transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-white-warm text-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-amber-energy text-obsidian px-8 py-3 rounded font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </>
  );
}
