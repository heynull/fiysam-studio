'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  Sprout,
  HeartPulse,
  GraduationCap,
  Truck,
  ShoppingCart,
} from 'lucide-react';

const capabilities = [
  {
    id: 1,
    title: 'Fintech',
    description: 'Payment infrastructure, digital wallets, and financial tools for African businesses and consumers.',
    icon: CreditCard,
  },
  {
    id: 2,
    title: 'Agritech',
    description: 'Supply chain tracking, price discovery, and logistics management for agricultural value chains.',
    icon: Sprout,
  },
  {
    id: 3,
    title: 'Healthtech',
    description: 'Patient management, appointment scheduling, electronic health records, and telemedicine platforms.',
    icon: HeartPulse,
  },
  {
    id: 4,
    title: 'Edtech',
    description: 'Learning management platforms, course creation tools, student assessments, and progress tracking.',
    icon: GraduationCap,
  },
  {
    id: 5,
    title: 'Logistics',
    description: 'Real-time fleet management, delivery tracking, and route optimization for logistics companies.',
    icon: Truck,
  },
  {
    id: 6,
    title: 'E-commerce',
    description: 'Multi-vendor marketplaces, inventory management, payment processing, and analytics dashboards.',
    icon: ShoppingCart,
  },
];

export default function WorkGrid() {
  return (
    <section className="pt-0">
      <div className="mb-12 md:mb-16">
        <div className="section-label">Studio Focus</div>
        <h2 className="section-title">
          Product Domains
          <br />
          <span className="text-amber-energy">We&apos;re Exploring</span>
        </h2>
        <p className="section-sub text-sm md:text-base max-w-2xl">
          A working map of product domains we are exploring for future Studio
          ventures and client engagements. This is not a portfolio of completed work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark rounded-lg overflow-hidden">
        {capabilities.map((capability, index) => {
          const IconComponent = capability.icon;
          return (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-card-bg p-8 md:p-9 relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-amber-energy/5 border border-amber-energy/20 rounded-md flex items-center justify-center mb-6 text-amber-energy">
                <IconComponent className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <span className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-amber-energy">
                  {capability.title}
                </span>
              </div>
              <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light mb-4">
                {capability.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
