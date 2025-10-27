import { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section>
      <div className="animate-fade-up">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-accent mb-6">
            Let's Create Something Great Together
          </h1>
          <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear about your project, your goals, and how we can bring your vision to life.
            Whether you're looking for a brand refresh, design support, or creative collaboration — let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:divide-x lg:divide-black/10">
          {/* Contact Form */}
          <div className="lg:pr-12">
            <form onSubmit={handleSubmit} className="bg-white/50 p-6 md:p-8 rounded-2xl shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent border-2 border-transparent"
              >
                Send Message
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-2xl animate-fade-up">
                  <p className="text-black text-center">
                    Thank you! Your message has been sent successfully — I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-12 space-y-8">
            <div>
              <h2 className="text-3xl font-script text-accent mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-black mb-1">Email</p>
                    <a
                      href="mailto:ami1vanzyl@gmail.com"
                      className="text-black/70 hover:text-accent transition-colors"
                    >
                      ami1vanzyl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-black mb-1">Phone</p>
                    <a
                      href="tel:+27727431971"
                      className="text-black/70 hover:text-accent transition-colors"
                    >
                      +27 72 743 1971
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-black mb-1">Location</p>
                    <p className="text-black/70">Meyerton, South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-script text-accent mb-4">Follow My Work</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ameli-van-zyl-34b506261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-accent rounded-full hover:bg-white hover:border-2 hover:border-accent transition-all duration-300 group hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white group-hover:text-accent transition-colors" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/ameli.graphics/profilecard/?igsh=MTY0a3pjdGh0OGx5OQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-accent rounded-full hover:bg-white hover:border-2 hover:border-accent transition-all duration-300 group hover:-translate-y-0.5"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white group-hover:text-accent transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}