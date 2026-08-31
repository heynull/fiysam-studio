import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BackNavigation from '@/components/BackNavigation';
import Container from '@/components/Container';
import ProjectDetail from '@/components/ProjectDetail';
import { getNextProject, getProjectBySlug, projects } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | Fiysam Studio' };
  }

  return {
    title: `${project.title} | Fiysam Studio Concept`,
    description: `${project.title} is fictional Studio Concept content for Fiysam Studio development.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-shell bg-deep">
      <Container>
        <div className="mb-10">
          <BackNavigation label="Back to Studio Concepts" />
        </div>
        <ProjectDetail project={project} nextProject={getNextProject(project.slug)} />
      </Container>
    </section>
  );
}
