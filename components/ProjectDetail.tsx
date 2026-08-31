import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';
import { projectStatusLabels, type StudioProject } from '@/lib/projects';

interface ProjectDetailProps {
  project: StudioProject;
  nextProject: StudioProject;
}

export default function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <article>
      <header className="max-w-4xl">
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <span className="border border-amber-energy/35 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-amber-energy">
            {projectStatusLabels[project.status]}
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">
            {project.type}
          </span>
        </div>
        <h1 className="page-heading max-w-3xl">{project.title}</h1>
        <p className="body-copy mt-7 max-w-2xl text-light-energy">{project.shortDescription}</p>
        <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-grey-energy">
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-energy" aria-hidden="true" />
          This is fictional Studio Concept content created as a development fixture. It is not client work or a launched product.
        </p>
      </header>

      <section className="mt-20 grid gap-10 border-t border-border-dark pt-10 md:mt-28 md:grid-cols-2 md:gap-16 md:pt-14" aria-label="Project context">
        <div>
          <p className="section-label">Challenge</p>
          <p className="max-w-xl text-lg leading-relaxed text-light-energy md:text-xl">{project.challenge}</p>
        </div>
        <div className="border-l border-border-dark pl-6 md:pl-10">
          <p className="section-label">Approach</p>
          <p className="max-w-xl text-base leading-relaxed text-grey-energy md:text-lg">{project.approach}</p>
        </div>
      </section>

      <section className="mt-20 md:mt-28" aria-label="Visual placeholders">
        <div className="relative min-h-[22rem] overflow-hidden border border-border-dark bg-card-bg p-7 md:min-h-[32rem] md:p-10">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,42,53,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(30,42,53,0.55)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />
          <div className="relative flex h-full min-h-[18.5rem] flex-col justify-between border border-border-dark bg-deep/80 p-6 md:min-h-[27rem] md:p-9">
            <div className="flex items-center justify-between border-b border-border-dark pb-5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Visual placeholder 01</span>
              <Layers3 className="h-4 w-4 text-amber-energy" aria-hidden="true" />
            </div>
            <div>
              <p className="font-syne text-2xl font-bold tracking-[-0.035em] text-white-warm md:text-4xl">Product interface</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-energy">Reserved for a real product screenshot or prototype when this concept becomes an active project.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[18rem] border border-border-dark bg-card-bg p-7 md:min-h-[22rem] md:p-9">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Visual placeholder 02</p>
            <div className="mt-10 border-t border-border-dark pt-5">
              <p className="font-syne text-xl font-bold tracking-[-0.03em] text-white-warm md:text-2xl">Workflow or system view</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-energy">A second space for an annotated flow, interface state, or technical artifact.</p>
            </div>
          </div>
          <aside className="border-t border-border-dark pt-7 md:pt-9" aria-labelledby="disciplines-title">
            <p id="disciplines-title" className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Disciplines</p>
            <ul className="mt-5 space-y-3">
              {project.disciplines.map((discipline) => (
                <li key={discipline} className="border-b border-border-dark pb-3 text-sm text-light-energy">{discipline}</li>
              ))}
            </ul>
            {project.technology && project.technology.length > 0 && (
              <div className="mt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">Technology</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technology.map((technology) => (
                    <li key={technology} className="border border-border-dark px-3 py-1.5 text-xs text-light-energy">{technology}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <nav className="mt-20 flex flex-col gap-6 border-t border-border-dark pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-28" aria-label="Project navigation">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-light-energy transition-colors hover:text-amber-energy">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All Studio Concepts
        </Link>
        <Link href={`/work/${nextProject.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-light-energy transition-colors hover:text-amber-energy">
          Next: {nextProject.title}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
