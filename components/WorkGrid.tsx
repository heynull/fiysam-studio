'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'PayFlow',
    category: 'Fintech',
    description: 'Payment infrastructure for African businesses. Process payments, manage invoices, and track transactions in real-time.',
    image: '💳',
    tags: ['Next.js', 'Node.js', 'Paystack'],
  },
  {
    id: 2,
    title: 'AgriConnect',
    category: 'Agritech',
    description: 'Connecting farmers directly to buyers. Supply chain tracking, price discovery, and logistics management.',
    image: '🌾',
    tags: ['React Native', 'Python', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'HealthTrack',
    category: 'Healthtech',
    description: 'Patient management system for clinics and hospitals. Appointment scheduling, electronic health records, and telemedicine.',
    image: '🏥',
    tags: ['React', 'Django', 'AWS'],
  },
  {
    id: 4,
    title: 'EduSmart',
    category: 'Edtech',
    description: 'Learning management platform for schools. Course creation, student assessments, and progress tracking.',
    image: '📚',
    tags: ['Next.js', 'Firebase', 'Tailwind'],
  },
  {
    id: 5,
    title: 'LogiTrack',
    category: 'Logistics',
    description: 'Real-time fleet management and delivery tracking system for logistics companies.',
    image: '🚚',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 6,
    title: 'MarketHub',
    category: 'E-commerce',
    description: 'Multi-vendor marketplace platform with inventory management, payment processing, and analytics.',
    image: '🛒',
    tags: ['Next.js', 'Stripe', 'Redis'],
  },
];

export default function WorkGrid() {
  return (
    <section className="py-[100px] bg-deep">
      <div className="mb-[60px]">
        <div className="section-label">Our Work</div>
        <h2 className="section-title">
          Products We've Built
          <br />
          <span className="text-amber-energy">That Make a Difference</span>
        </h2>
        <p className="section-sub text-sm md:text-base max-w-2xl">
          Each project represents a partnership with ambitious founders and businesses
          looking to solve real problems with technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark rounded-lg overflow-hidden">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group bg-card-bg p-8 md:p-9 hover:bg-[#141E28] transition-colors duration-300 cursor-default relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-amber-energy/5 border border-amber-energy/20 rounded-md flex items-center justify-center mb-6 text-[1.4rem]">
              {project.image}
            </div>
            <div className="flex items-start justify-between mb-2">
              <span className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-amber-energy">
                {project.category}
              </span>
              <Link
                href={`/work/${project.id}`}
                className="text-grey-energy hover:text-amber-energy transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
            <h3 className="text-[1.15rem] font-bold mb-3 tracking-[-0.01em] group-hover:text-amber-energy transition-colors">
              {project.title}
            </h3>
            <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[0.7rem] px-2.5 py-1 rounded-full bg-deep border border-border-dark text-grey-energy"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="block mt-6 text-amber-energy text-[1.2rem] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/work" className="btn-primary inline-flex items-center gap-2">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}