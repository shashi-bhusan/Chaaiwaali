import { useState, useEffect } from 'react';
import { User, Mail, MapPin, Phone, MessageSquare, Loader2 } from 'lucide-react';

const WEB3FORMS_KEY = '4c57069f-447a-409a-bc1a-794ce51525ec';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Inquiry from Chaaiwaali Website',
          from_name: 'Chaaiwaali Website',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Unable to send your inquiry. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full border border-[var(--navy)]/20 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[var(--navy)] outline-none focus:border-[var(--gold)] transition-colors rounded-sm';

  return (
    <div className="bg-[var(--ivory)] min-h-[80vh]">
      {/* Header */}
      <section className="bg-[var(--navy)] py-10 sm:py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm tracking-wider uppercase text-[var(--gold)] mb-2 sm:mb-3">
            Have Questions?
          </p>
          <h1 className="serif-heading text-3xl sm:text-4xl md:text-5xl text-[var(--ivory)]">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-[var(--ivory)]/70 mt-3 sm:mt-4 max-w-lg mx-auto">
            Our team will be happy to listen to you and resolve your queries.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--gold)]" />
              </div>
              <h2 className="serif-heading text-2xl sm:text-3xl text-[var(--navy)] mb-3 sm:mb-4">
                Thank you for reaching out
              </h2>
              <p className="text-base sm:text-lg text-[var(--navy)]/70 max-w-md mx-auto">
                We have received your inquiry and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[var(--navy)]/10 p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] mb-1.5 sm:mb-2">
                    <User className="w-4 h-4 text-[var(--gold)]" />
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] mb-1.5 sm:mb-2">
                    <Mail className="w-4 h-4 text-[var(--gold)]" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] mb-1.5 sm:mb-2">
                    <MapPin className="w-4 h-4 text-[var(--gold)]" />
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] mb-1.5 sm:mb-2">
                    <Phone className="w-4 h-4 text-[var(--gold)]" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+44 1234 567890"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] mb-1.5 sm:mb-2">
                  <MessageSquare className="w-4 h-4 text-[var(--gold)]" />
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className={`${inputClass} resize-vertical`}
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <div className="pt-1 sm:pt-2 text-center">
                <button type="submit" className="btn-primary inline-flex items-center gap-2" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 text-sm text-[var(--navy)]/50">
            <MapPin className="w-4 h-4" />
            <span>Glasgow, UK</span>
          </div>
        </div>
      </section>
    </div>
  );
}
