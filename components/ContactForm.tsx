'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'studio@fiysam.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 800 000 0000',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri, 8AM – 6PM WAT',
  },
];

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
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll get back to you within 24 hours.' });
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
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-[60px] items-start max-w-6xl mx-auto">
      {/* Left - Contact Info */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build <span className="text-amber-energy">Something Great</span>
        </h1>
        <p className="text-grey-energy text-[0.95rem] mb-10 max-w-md leading-relaxed">
          Have a project in mind? Let's talk about it. We'll help you turn your
          idea into a product that users love.
        </p>

        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-md bg-amber-energy/5 border border-amber-energy/20 flex items-center justify-center text-amber-energy flex-shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[0.7rem] text-grey-energy uppercase tracking-[0.08em] font-medium">{item.label}</p>
                <p className="text-[0.9rem] text-white-warm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Form */}
      <form onSubmit={handleSubmit} className="bg-card-bg border border-border-dark rounded-lg p-8 md:p-10">
        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded text-sm ${
            submitStatus.type === 'success'
              ? 'bg-green-900/30 text-green-400 border border-green-700'
              : 'bg-red-900/30 text-red-400 border border-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-4 py-3 text-white-warm text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
              placeholder="John Doe"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-4 py-3 text-white-warm text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
              placeholder="john@company.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-4 py-3 text-white-warm text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
              placeholder="Your Company"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy mb-2">
              Service Needed *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-4 py-3 text-white-warm text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
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
            <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-grey-energy mb-2">
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-deep border border-border-dark rounded px-4 py-3 text-white-warm text-[0.875rem] outline-none focus:border-amber-energy transition-colors resize-none"
              placeholder="Tell us about your project, timeline, and goals..."
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-center flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message →'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}