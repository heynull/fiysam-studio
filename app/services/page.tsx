import ServicesFull from '../../components/ServicesFull';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';

export const metadata = {
  title: 'Our Services | Fiysam Studio',
  description: 'We build software products for businesses across Africa. Product strategy, UI/UX design, full-stack development, and AI solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 md:px-[60px] pt-32 pb-16 md:pt-40 md:pb-20 bg-deep min-h-screen">
        <div className="mb-6">
          <BackNavigation label="← Back to Home" />
        </div>
        <ServicesFull />
      </section>
      <CTABand />
    </>
  );
}