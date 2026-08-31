import ContactForm from '../../components/ContactForm';
import BackNavigation from '../../components/BackNavigation';
import Container from '@/components/Container';

export const metadata = {
  title: 'Contact Us | Fiysam Studio',
  description: 'Contact Fiysam Studio about a product question, an existing software challenge, or an early idea.',
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
