import ContactForm from '../../components/ContactForm';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'Contact Us | Fiysam Studio',
  description: 'Let\'s build something great together. Reach out to Fiysam Studio for your software product needs.',
};

export default function ContactPage() {
  return (
    <section className="page-shell bg-deep">
      <Container>
        <div className="mb-10">
          <BackNavigation label="← Back to Home" />
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
