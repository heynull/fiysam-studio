import WorkProjects from '../../components/WorkProjects';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'Our Work | Fiysam Studio',
  description: 'Studio Concept projects: fictional development fixtures for Fiysam Studio.',
};

export default function WorkPage() {
  return (
    <>
      <section className="page-shell bg-deep">
        <Container>
          <div className="mb-10">
            <BackNavigation label="← Back to Home" />
          </div>
          <div className="mb-14 md:mb-16">
            <p className="section-label">Work</p>
            <h1 id="studio-concepts-title" className="page-heading mb-5">Studio Concepts</h1>
            <p className="body-copy max-w-2xl text-grey-energy">
              Fictional development fixtures for exploring product direction and
              interface ideas. They are not client projects or launched products.
            </p>
          </div>
          <WorkProjects />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
