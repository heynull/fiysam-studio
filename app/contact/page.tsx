import ContactForm from '../../components/ContactForm';
import BackNavigation from '../../components/BackNavigation';

export const metadata = {
  title: 'Contact Us | Fiysam Studio',
  description: 'Let\'s build something great together. Reach out to Fiysam Studio for your software product needs.',
};

export default function ContactPage() {
  return (
    <section className="px-6 md:px-[60px] pt-32 pb-16 md:pt-40 md:pb-20 bg-deep min-h-screen">
      <div className="mb-6">
        <BackNavigation label="← Back to Home" />
      </div>
      <ContactForm />
    </section>
  );
}