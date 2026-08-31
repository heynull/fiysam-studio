import WorkGrid from '../../components/WorkGrid';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'Our Work | Fiysam Studio',
  description: 'Explore Fiysam Studio\'s evolving product directions and areas of focus.',
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
            <h1 className="page-heading mb-5">Our Work</h1>
            <p className="body-copy max-w-2xl text-grey-energy">
              A working map of product domains for future Studio ventures and
              client engagements.
            </p>
          </div>
          <WorkGrid />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
