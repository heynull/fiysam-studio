import ServicesFull from '../../components/ServicesFull';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'Our Services | Fiysam Studio',
  description: 'We build software products for businesses across Africa. Product strategy, UI/UX design, full-stack development, and AI solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-shell bg-deep">
        <Container>
          <div className="mb-10">
            <BackNavigation label="← Back to Home" />
          </div>
          <ServicesFull />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
