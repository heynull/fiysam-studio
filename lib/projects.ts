export type ProjectStatus = 'concept' | 'client' | 'venture';

export interface StudioProject {
  slug: string;
  title: string;
  type: string;
  status: ProjectStatus;
  shortDescription: string;
  challenge: string;
  approach: string;
  disciplines: string[];
  technology?: string[];
}

export const projects: StudioProject[] = [
  {
    slug: 'nuru-ledger',
    title: 'Nuru Ledger',
    type: 'Financial operations platform',
    status: 'concept',
    shortDescription: 'A fictional workspace for bringing invoices, payment requests, and a daily cash position into one focused view.',
    challenge: 'Financial operations can become fragmented when records, payment requests, and decisions live across separate tools and conversations.',
    approach: 'A concept for a clear daily operating view: what needs attention, what is moving, and which records need follow-up.',
    disciplines: ['Product thinking', 'UI/UX', 'Full-stack engineering'],
  },
  {
    slug: 'relay-grid',
    title: 'Relay Grid',
    type: 'Logistics operations software',
    status: 'concept',
    shortDescription: 'A fictional operations console for teams coordinating delivery runs, exceptions, and hand-offs across a moving network.',
    challenge: 'Operational teams need a shared view of the work in motion without turning every update into another message or spreadsheet.',
    approach: 'A concept for surfacing active runs, blocked tasks, and the next operational decision in a calm, structured interface.',
    disciplines: ['Product thinking', 'UI/UX', 'Engineering'],
  },
  {
    slug: 'brief-signal',
    title: 'Brief Signal',
    type: 'AI-enabled business tool',
    status: 'concept',
    shortDescription: 'A fictional briefing tool that turns scattered business notes into a reviewable starting point for a team conversation.',
    challenge: 'Teams often spend more time gathering context than discussing the decision that context should support.',
    approach: 'A concept for combining supplied notes, source references, and human review into a concise working brief.',
    disciplines: ['Product thinking', 'AI and data', 'UI/UX', 'Engineering'],
  },
];

export const projectStatusLabels: Record<ProjectStatus, string> = {
  concept: 'Studio Concept',
  client: 'Client Work',
  venture: 'Studio Venture',
};
