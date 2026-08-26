import Link from 'next/link';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { 
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: 'https://twitter.com/fiysamstudio',
    label: 'Twitter/X'
  },
  { 
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.306.762-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.825.578C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    href: 'https://github.com/fiysamstudio',
    label: 'GitHub'
  },
  { 
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://linkedin.com/company/fiysamstudio',
    label: 'LinkedIn'
  },
  { 
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:studio@fiysam.com',
    label: 'Email'
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-border-dark px-6 md:px-[60px] pt-[60px] pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[60px] mb-[60px] max-w-6xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="font-syne font-extrabold text-[1.35rem] tracking-[-0.02em] text-white-warm">
            FIYSAM <span className="text-amber-energy">STUDIO</span>
          </Link>
          <p className="text-[0.875rem] text-grey-energy leading-[1.7] mt-4 max-w-xs font-light">
            We build software products that move Africa forward.
            Product strategy, design, and development.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-grey-energy mb-5">Navigation</h5>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Quick Links */}
        <div>
          <h5 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-grey-energy mb-5">Services</h5>
          <ul className="space-y-3">
            <li><Link href="/services" className="text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">Product Strategy</Link></li>
            <li><Link href="/services" className="text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">UI/UX Design</Link></li>
            <li><Link href="/services" className="text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">Development</Link></li>
            <li><Link href="/services" className="text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">AI & Data</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-grey-energy mb-5">Get in Touch</h5>
          <p className="text-[0.875rem] text-light-energy font-light mb-3">
            Lagos, Nigeria
          </p>
          <a
            href="mailto:studio@fiysam.com"
            className="text-[0.875rem] text-amber-energy hover:underline font-light"
          >
            studio@fiysam.com
          </a>
          <div className="flex gap-3 mt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-card-bg border border-border-dark flex items-center justify-center text-grey-energy hover:text-amber-energy hover:border-amber-energy transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border-dark text-[0.78rem] text-grey-energy max-w-6xl mx-auto">
        <span>© {new Date().getFullYear()} Fiysam Studio. All rights reserved.</span>
        <span className="text-grey-energy/60">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}