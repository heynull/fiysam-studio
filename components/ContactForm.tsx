'use client';

import { useState } from 'react';
import { LoaderCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for getting in touch.' });
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
      <header className="max-w-xl">
        <p className="section-label">Contact</p>
        <h1 className="page-heading mb-6">
          Start with the <span className="text-amber-energy">real question.</span>
        </h1>
        <p className="body-copy max-w-md text-light-energy">
          Get in touch about a new product, an existing software challenge, or an idea that needs a clearer first step.
        </p>
        <div className="mt-10 border-t border-border-dark pt-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-grey-energy">A useful note can include</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-grey-energy">
            <li>Your current situation or product idea</li>
            <li>The people or team involved</li>
            <li>What needs to become clearer next</li>
          </ul>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="border-t border-border-dark pt-8 md:border-l md:pt-0 md:pl-10 lg:pl-14" aria-describedby="contact-form-helper">
        <div className="mb-8">
          <h2 className="font-syne text-2xl font-bold tracking-[-0.035em] text-white-warm md:text-3xl">Tell us some context.</h2>
          <p id="contact-form-helper" className="mt-3 text-sm leading-relaxed text-grey-energy">Fields marked with an asterisk are required.</p>
        </div>
        {submitStatus.type && (
          <div className={`mb-6 border p-4 text-sm ${
            submitStatus.type === 'success'
              ? 'bg-green-900/30 text-green-400 border border-green-700'
              : 'bg-red-900/30 text-red-400 border border-red-700'
          }`} role={submitStatus.type === 'error' ? 'alert' : 'status'} aria-live="polite">
            {submitStatus.message}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-border-dark bg-card-bg px-4 py-3.5 text-[0.9375rem] text-white-warm outline-none transition-colors placeholder:text-grey-energy/70 focus:border-amber-energy"
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-border-dark bg-card-bg px-4 py-3.5 text-[0.9375rem] text-white-warm outline-none transition-colors placeholder:text-grey-energy/70 focus:border-amber-energy"
              placeholder="you@company.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-border-dark bg-card-bg px-4 py-3.5 text-[0.9375rem] text-white-warm outline-none transition-colors placeholder:text-grey-energy/70 focus:border-amber-energy"
              placeholder="Organization or team (optional)"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy">
              Service Needed *
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-border-dark bg-card-bg px-4 py-3.5 text-[0.9375rem] text-white-warm outline-none transition-colors focus:border-amber-energy"
              required
              disabled={isSubmitting}
            >
              <option value="">Select a service...</option>
              <option>Product Strategy</option>
              <option>UI/UX Design</option>
              <option>Full-Stack Development</option>
              <option>AI & Data Solutions</option>
              <option>Mobile App Development</option>
              <option>DevOps & Cloud</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy">
              Project Details *
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              aria-describedby="message-helper"
              className="w-full resize-none border border-border-dark bg-card-bg px-4 py-3.5 text-[0.9375rem] text-white-warm outline-none transition-colors placeholder:text-grey-energy/70 focus:border-amber-energy"
              placeholder="What are you trying to make clearer, easier, or more useful?"
              required
              disabled={isSubmitting}
            />
            <p id="message-helper" className="mt-2 text-xs leading-relaxed text-grey-energy">A short outline is enough to begin the conversation.</p>
          </div>

          <button
            type="submit"
            className="btn-primary flex w-full items-center justify-center gap-2 text-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                Send message
                <Send className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
