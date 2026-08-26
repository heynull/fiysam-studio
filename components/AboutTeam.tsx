'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Moses Ajila',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 4+ years of experience building products for businesses across Africa. Passionate about using technology to solve real problems.',
    initials: 'MA',
  },
  {
    name: 'Sarah Adebayo',
    role: 'Product Designer',
    bio: 'Product designer focused on creating intuitive, accessible interfaces that users love. Experienced in working with startups and scaling products.',
    initials: 'SA',
  },
  {
    name: 'Tunde Ogunlade',
    role: 'Senior Developer',
    bio: 'Backend specialist with expertise in building scalable APIs and cloud infrastructure. Committed to writing clean, maintainable code.',
    initials: 'TO',
  },
  {
    name: 'Chioma Nwosu',
    role: 'Project Manager',
    bio: 'Ensures projects stay on track and teams work efficiently. Brings clarity and structure to complex product development processes.',
    initials: 'CN',
  },
];

const values = [
  {
    title: 'Quality Over Speed',
    description: 'We believe in building products that last. We prioritize clean code, thoughtful design, and robust systems over quick fixes.',
  },
  {
    title: 'User First',
    description: 'Every product we build starts with understanding the user. We design for people, not just features.',
  },
  {
    title: 'Africa First',
    description: 'We build for African businesses and users. We understand the unique challenges and opportunities of the African market.',
  },
  {
    title: 'Continuous Learning',
    description: 'We stay curious and keep learning. Technology evolves quickly, and we evolve with it.',
  },
];

export default function AboutTeam() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Building Products That <span className="text-amber-energy">Move Africa</span>
        </h1>
        <p className="section-sub text-base md:text-lg max-w-3xl">
          We're a product studio based in Nigeria, building software that solves
          real problems for businesses across Africa. We partner with founders
          and companies to turn ideas into products that users love.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card-bg border border-border-dark rounded-lg p-8"
            >
              <h4 className="font-bold text-amber-energy text-lg mb-2">{value.title}</h4>
              <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card-bg border border-border-dark rounded-lg p-8 flex gap-4 md:gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-amber-energy/10 border border-amber-energy/20 flex items-center justify-center text-amber-energy font-bold text-sm flex-shrink-0">
                {member.initials}
              </div>
              <div>
                <h4 className="font-bold text-[1rem]">{member.name}</h4>
                <p className="text-[0.7rem] text-amber-energy font-medium uppercase tracking-[0.08em] mb-2">
                  {member.role}
                </p>
                <p className="text-[0.875rem] text-grey-energy leading-[1.65] font-light">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}