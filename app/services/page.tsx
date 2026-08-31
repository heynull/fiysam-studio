import ServicesFull from '../../components/ServicesFull';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'Services | Fiysam Studio',
  description: 'Product, design, engineering, and AI/data disciplines for useful software.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-shell bg-deep">
        <Container>
          <div className="mb-10">
            <BackNavigation label="Back to Home" />
          </div>
          <ServicesFull />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
