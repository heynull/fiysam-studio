import {
  Brain,
  CloudCog,
  ClipboardList,
  Palette,
  Smartphone,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: ClipboardList,
    title: 'Product Strategy',
    description: 'Product framing, discovery, prioritization, and MVP planning for teams deciding what to build next.',
    fullDescription: 'A structured starting point for defining a product direction: the problem to address, the people involved, the scope of an initial release, and the decisions needed before build work begins.',
    benefits: [
      'Problem framing and opportunity definition',
      'Feature prioritization and product roadmaps',
      'MVP scope and release planning',
      'User and stakeholder considerations',
    ],
    process: [
      'Discovery',
      'Research and framing',
      'Prioritization',
      'MVP definition',
    ],
  },
  {
    id: 2,
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interface and experience design from user flows and wireframes to prototypes and design systems.',
    fullDescription: 'Design work that turns product requirements into understandable journeys and interfaces, with attention to hierarchy, usability, accessibility, and the details needed for implementation.',
    benefits: [
      'User flows and information architecture',
      'Wireframes and interface design',
      'Interactive prototypes',
      'Reusable design patterns',
    ],
    process: [
      'Research',
      'Wireframing',
      'Interface design',
      'Prototype and review',
    ],
  },
  {
    id: 3,
    icon: Zap,
    title: 'Full-Stack Development',
    description: 'Web application development across interfaces, APIs, integrations, data flows, and deployment workflows.',
    fullDescription: 'End-to-end product implementation for web software, covering the application interface, server-side functionality, integrations, data handling, and the path from a working build to a deployable release.',
    benefits: [
      'Application architecture and implementation',
      'Frontend and backend development',
      'Third-party service integrations',
      'Testing and release preparation',
    ],
    process: [
      'Technical planning',
      'Implementation',
      'Testing and review',
      'Release preparation',
    ],
  },
  {
    id: 4,
    icon: Brain,
    title: 'AI & Data Solutions',
    description: 'AI and data features considered where they are useful to a product, workflow, or decision-making process.',
    fullDescription: 'An exploration of data, automation, and AI-assisted product features in the context of a real user need. The appropriate approach depends on the available data, product constraints, and the problem being addressed.',
    benefits: [
      'Data-informed product features',
      'Workflow automation opportunities',
      'Natural-language interfaces',
      'Data pipeline considerations',
    ],
    process: [
      'Problem assessment',
      'Data review',
      'Prototype and integration',
      'Evaluation',
    ],
  },
  {
    id: 5,
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Mobile product planning and development for native or cross-platform app experiences.',
    fullDescription: 'Mobile work that considers device context, platform conventions, interaction patterns, and the practical choices between native and cross-platform implementation.',
    benefits: [
      'Platform and architecture decisions',
      'Mobile interface implementation',
      'Cross-platform product considerations',
      'Release planning',
    ],
    process: [
      'Platform Selection',
      'UI/UX Design',
      'Development',
      'Release preparation',
    ],
  },
  {
    id: 6,
    icon: CloudCog,
    title: 'DevOps & Cloud',
    description: 'Deployment workflows, cloud environments, monitoring, and operational considerations for software products.',
    fullDescription: 'The technical foundations around a product release: environment setup, deployment automation, observability, and operational practices suited to the product’s requirements and stage.',
    benefits: [
      'Cloud environment planning',
      'Deployment workflow design',
      'Monitoring and alerting considerations',
      'Security and access considerations',
    ],
    process: [
      'Requirements review',
      'Environment setup',
      'Deployment workflow',
      'Operational review',
    ],
  },
];

export const previewServices = services.slice(0, 4);
