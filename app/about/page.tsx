import AboutTeam from '../../components/AboutTeam';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'About Us | Fiysam Studio',
  description: 'Learn about Fiysam Studio and its build, ship, and learn philosophy.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-shell bg-deep">
        <Container>
          <div className="mb-10">
            <BackNavigation label="← Back to Home" />
          </div>
          <AboutTeam />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
