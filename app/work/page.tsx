import WorkGrid from '../../components/WorkGrid';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';

export const metadata = {
  title: 'Our Work | Fiysam Studio',
  description: 'Explore Fiysam Studio\'s evolving product directions and areas of focus.',
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-deep">
        <div className="mb-6">
          <BackNavigation label="← Back to Home" />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Work</h1>
          <p className="text-grey-energy max-w-2xl">
            A working map of product domains for future Studio ventures and
            client engagements.
          </p>
        </div>
        <WorkGrid />
      </section>
      <CTABand />
    </>
  );
}
