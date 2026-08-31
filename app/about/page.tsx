import AboutTeam from '../../components/AboutTeam';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';

export const metadata = {
  title: 'About Us | Fiysam Studio',
  description: 'Learn about Fiysam Studio and its build, ship, and learn philosophy.',
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 md:px-[60px] pt-32 pb-16 md:pt-40 md:pb-20 bg-deep min-h-screen">
        <div className="mb-6">
          <BackNavigation label="← Back to Home" />
        </div>
        <AboutTeam />
      </section>
      <CTABand />
    </>
  );
}
