'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Build',
    description: 'Start with a real problem and make the smallest useful thing.',
  },
  {
    title: 'Ship',
    description: 'Move useful work into the world so it can be tested in context.',
  },
  {
    title: 'Learn',
    description: 'Use what happens next to decide what needs to change.',
  },
  {
    title: 'Decide',
    description: 'Double down on what works. Shut down what does not.',
  },
];

export default function AboutTeam() {
  return (
    <div>
      <div className="mb-14 md:mb-16">
        <h1 className="page-heading mb-5">
          A Studio for <span className="text-amber-energy">Building and Learning</span>
        </h1>
        <p className="body-copy max-w-3xl">
          Fiysam Studio is a Lagos-based product studio. We work on software
          ideas, client engagements, and Studio ventures through a build, ship,
          and learn approach.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card-bg border border-border-dark rounded-lg p-8"
            >
              <h4 className="font-bold text-amber-energy text-lg mb-2">{principle.title}</h4>
              <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
