'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: '📋',
    title: 'Product Strategy',
    description: 'We help you validate ideas, define product roadmaps, and build MVPs that launch fast and scale well.',
    fullDescription: 'From idea validation to market launch, we guide you through every stage of product development. We conduct market research, define user personas, prioritize features, and create a clear roadmap that aligns with your business goals.',
    benefits: [
      'Idea validation and market research',
      'Product roadmap and feature prioritization',
      'MVP strategy and launch planning',
      'User persona development',
    ],
    process: [
      'Discovery Workshop',
      'Market Research & Analysis',
      'Product Roadmap Creation',
      'MVP Definition',
    ],
  },
  {
    id: 2,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, functional interfaces designed with users in mind. From wireframes to polished prototypes.',
    fullDescription: 'Our design process puts users first. We create intuitive interfaces that are not only beautiful but also functional and accessible. From research to prototyping, we ensure every pixel serves a purpose.',
    benefits: [
      'User-centered design approach',
      'Accessible and inclusive interfaces',
      'Interactive prototypes',
      'Design systems and component libraries',
    ],
    process: [
      'User Research',
      'Wireframing',
      'Visual Design',
      'Prototyping & Testing',
    ],
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Full-Stack Development',
    description: 'End-to-end development using modern frameworks. Clean code, scalable architecture, and reliable deployment.',
    fullDescription: 'We build robust, scalable applications using the latest technologies. Our development process emphasizes clean code, comprehensive testing, and seamless deployment to ensure your product performs reliably at scale.',
    benefits: [
      'Modern frameworks (Next.js, React, Node.js)',
      'Scalable architecture',
      'CI/CD pipeline setup',
      'Performance optimization',
    ],
    process: [
      'Technical Architecture Design',
      'Agile Development',
      'Testing & QA',
      'Deployment & Monitoring',
    ],
  },
  {
    id: 4,
    icon: '🤖',
    title: 'AI & Data Solutions',
    description: 'Leverage AI and data analytics to build smarter products. Integrate machine learning into your applications.',
    fullDescription: 'We help you harness the power of AI and data to create intelligent products. From predictive analytics to natural language processing, we integrate cutting-edge AI capabilities that give your product a competitive edge.',
    benefits: [
      'Predictive analytics and insights',
      'Natural language processing (NLP)',
      'Computer vision solutions',
      'Data pipeline and ETL setup',
    ],
    process: [
      'Data Assessment',
      'Model Selection & Training',
      'AI Integration',
      'Continuous Improvement',
    ],
  },
  {
    id: 5,
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on every device.',
    fullDescription: 'We build mobile apps that users love. Whether you need native iOS/Android or cross-platform solutions, we deliver high-performance applications with intuitive interfaces and seamless functionality.',
    benefits: [
      'Native iOS (Swift) and Android (Kotlin)',
      'Cross-platform (React Native, Flutter)',
      'App Store optimization',
      'Offline-first capabilities',
    ],
    process: [
      'Platform Selection',
      'UI/UX Design',
      'Development',
      'App Store Submission',
    ],
  },
  {
    id: 6,
    icon: '🔧',
    title: 'DevOps & Cloud',
    description: 'Reliable infrastructure, automated deployments, and cloud solutions that keep your product running smoothly.',
    fullDescription: 'We set up robust cloud infrastructure and DevOps practices that ensure your application is always available, scalable, and secure. From AWS to Azure, we handle the heavy lifting so you can focus on building great products.',
    benefits: [
      'Cloud infrastructure (AWS, GCP, Azure)',
      'CI/CD pipeline implementation',
      'Monitoring and alerting',
      'Security and compliance',
    ],
    process: [
      'Infrastructure Assessment',
      'Cloud Migration/Setup',
      'Pipeline Configuration',
      'Monitoring & Maintenance',
    ],
  },
];

export default function ServicesFull() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-[60px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          What We <span className="text-amber-energy">Build</span>
        </h1>
        <p className="section-sub text-base md:text-lg max-w-3xl">
          We design and develop software products that solve real problems.
          From strategy to deployment, we partner with you to build products
          that users love and businesses grow with.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border-t border-border-dark pt-12 first:border-0 first:pt-0"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <span className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-amber-energy">
                    Service {String(service.id).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-grey-energy text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="mt-6">
                  <h4 className="text-[0.7rem] font-semibold text-amber-energy uppercase tracking-[0.08em] mb-3">
                    Our Process
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, idx) => (
                      <span
                        key={idx}
                        className="text-[0.7rem] px-3 py-1.5 rounded-full bg-card-bg border border-border-dark text-grey-energy"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-card-bg border border-border-dark rounded-lg p-8">
                <h4 className="text-[0.7rem] font-semibold text-amber-energy uppercase tracking-[0.08em] mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[0.875rem] text-light-energy">
                      <span className="text-amber-energy mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border-dark">
                  <a
                    href="/contact"
                    className="text-amber-energy font-medium hover:underline inline-flex items-center gap-2 text-[0.875rem]"
                  >
                    Enquire about this service →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}