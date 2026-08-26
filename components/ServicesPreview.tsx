'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: '📋',
    title: 'Product Strategy',
    description: 'We help you validate ideas, define product roadmaps, and build MVPs that launch fast and scale well.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, functional interfaces designed with users in mind. From wireframes to polished prototypes.',
  },
  {
    icon: '⚡',
    title: 'Full-Stack Development',
    description: 'End-to-end development using modern frameworks. Clean code, scalable architecture, and reliable deployment.',
  },
  {
    icon: '🤖',
    title: 'AI & Data Solutions',
    description: 'Leverage AI and data analytics to build smarter products. Integrate machine learning into your apps.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-[100px] bg-obsidian">
      <div className="grid md:grid-cols-2 gap-[60px] items-center">
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Software Products
            <br />
            <span className="text-amber-energy">Built to Last</span>
          </h2>
          <p className="section-sub text-sm md:text-base">
            From ideation to launch and beyond — we partner with you to build
            products that solve real problems and drive business growth.
          </p>
          <div className="mt-8">
            <Link href="/services" className="btn-ghost">
              Explore Our Services →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-dark border border-border-dark rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card-bg p-6 md:p-8 hover:bg-[#141E28] transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-[1rem] font-bold mb-2">{service.title}</h3>
              <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light">{service.description}</p>
              <span className="block mt-4 text-amber-energy text-[1.2rem] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}