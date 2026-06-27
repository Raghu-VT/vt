import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const offices = [
  {
    city: 'Hyderabad (HQ)',
    address: '8-2-293/82/A/22/A, G-3, Road No.5, Jubilee Hills, Pillar No. 1572 Hyderabad - 500033, Telangana, India',
    phone: '+91 9248070008',
    email: 'info@venkitravel.com',
    hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
  },
    {
    city: 'South Africa',
    address: 'VENKI TRAVEL PTY LTD @ Sandton, CW-12, Cowork Space, 5 Benmore Rd, Benmore Gardens, Johannesburg, 2196, South Africa E-mail:venkitravelsa@gmail.com, website: www.venkitravel.com',
    phone: '+27-823126688',
    email: 'venkitravelsa@gmail.com',
    hours: 'Mon–Fri: 9:00 AM – 5:00 PM (SAST)',
  },
];

const subjects = [
  'Flight Booking',
  'Hotel Booking',
  'Tour Package Enquiry',
  'Visa Assistance',
  'Travel Insurance',
  'Forex Services',
  'Group Booking',
  'Custom Package',
  'Other',
];

export default function Contact({ onNavigate: _onNavigate }: ContactProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSubmitting(true);
  setError('');

  try {
    const response = await fetch(
      'https://www.venkitravel.com/api/send-contact.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject,
          message: form.message.trim(),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || 'Unable to send your enquiry. Please try again.'
      );
    }

    setSubmitted(true);

    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  } catch (err: any) {
    setError(
      err.message ||
        'Unable to send your enquiry. Please try again later.'
    );
  } finally {
    setSubmitting(false);
  }
};
const data = await res.json();

if (!res.ok || data.error) {
  setError(data.error || "Failed to send message");
} else {
  setSubmitted(true);
  setForm({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
}
    } catch {
      setError('Network error. Please try again or email us at info@venkitravel.com');
    }
    setSubmitting(false);
  };
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Contact Us</h1>
          <p className="text-neutral-200 text-lg">We're here to help you plan your perfect journey</p>
        </div>
      </section>

      {/* Quick contact bar */}
      <div className="bg-primary-900 text-white py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8">
          <a href="tel:+91-92480-70008" className="flex items-center gap-2 text-sm hover:text-secondary-300 transition-colors">
            <Phone size={14} className="text-secondary-400" /> +91-40-2341 1234
          </a>
          <a href="mailto:info@venkitravel.com" className="flex items-center gap-2 text-sm hover:text-secondary-300 transition-colors">
            <Mail size={14} className="text-secondary-400" /> info@venkitravel.com
          </a>
          <span className="flex items-center gap-2 text-sm">
            <Clock size={14} className="text-secondary-400" /> Mon–Sat: 9:00 AM – 7:00 PM
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Form */}
        <div>
          <span className="text-secondary-500 font-medium text-sm uppercase tracking-wider">Send us a message</span>
          <h2 className="font-heading text-3xl font-700 text-primary-900 mt-2 mb-6">Get in Touch</h2>

          {submitted ? (
            <div className="bg-success-50 border border-success-200 rounded-2xl p-8 text-center">
              <CheckCircle size={48} className="text-success-500 mx-auto mb-4" />
              <h3 className="font-heading font-700 text-success-700 text-xl mb-2">Message Sent!</h3>
              <p className="text-success-600">Thank you for reaching out. Our team will contact you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-success-600 underline hover:no-underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Subject *</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition bg-white"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans, dates, and requirements..."
                  className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition resize-none"
                />
              </div>
              {error && <p className="text-error-600 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {submitting ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
              </button>
            </form>
          )}
        </div>

        {/* Office info */}
        <div className="space-y-6">
          <div>
            <span className="text-secondary-500 font-medium text-sm uppercase tracking-wider">Our Offices</span>
            <h2 className="font-heading text-3xl font-700 text-primary-900 mt-2 mb-6">Find Us</h2>
          </div>
          {offices.map((office) => (
            <div key={office.city} className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
              <h3 className="font-heading font-600 text-primary-900 mb-4 text-lg">{office.city}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-neutral-600">
                  <MapPin size={16} className="text-secondary-500 flex-shrink-0 mt-0.5" />
                  {office.address}
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Phone size={16} className="text-secondary-500 flex-shrink-0" />
                  {office.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Mail size={16} className="text-secondary-500 flex-shrink-0" />
                  {office.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Clock size={16} className="text-secondary-500 flex-shrink-0" />
                  {office.hours}
                </div>
              </div>
            </div>
          ))}

                  </div>
      </div>
    </div>
  );
}
