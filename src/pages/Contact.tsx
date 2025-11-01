import { useState } from 'react';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import { Linkedin, Instagram } from 'lucide-react';

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
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-bg">
      <section className="py-20 md:py-32">
        <Container>
          <InViewFade>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="h1 mb-6">Get in Touch</h1>
              <a
                href="mailto:ami1vanzyl@gmail.com"
                className="relative text-2xl md:text-3xl text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:text-accentHover"
              >
                ami1vanzyl@gmail.com
              </a>
            </div>
          </InViewFade>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
            <InViewFade delay={100}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg border border-hairline rounded focus:ring-2 focus:ring-chocolateCosmos focus:border-transparent transition-all duration-200 outline-none"
                    className="w-full px-4 py-3 bg-bg border border-hairline rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg border border-hairline rounded focus:ring-2 focus:ring-chocolateCosmos focus:border-transparent transition-all duration-200 outline-none"
                    className="w-full px-4 py-3 bg-bg border border-hairline rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-bg border border-hairline rounded focus:ring-2 focus:ring-chocolateCosmos focus:border-transparent transition-all duration-200 resize-none outline-none"
                    className="w-full px-4 py-3 bg-bg border border-hairline rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-7 py-3 rounded-lg font-medium tracking-wide transition-all duration-200 ease-refined hover:bg-accentHover hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-ink text-center text-sm">
                      Thank you — I'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </InViewFade>

            <InViewFade delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-ink mb-4">Social</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/ameli-van-zyl-34b506261/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center border border-hairline rounded-full hover:bg-chocolateCosmos hover:text-bg hover:border-chocolateCosmos transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos"
                      className="w-11 h-11 flex items-center justify-center border border-hairline rounded-full hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 ease-refined hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/ameli.graphics/profilecard/?igsh=MTY0a3pjdGh0OGx5OQ%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center border border-hairline rounded-full hover:bg-chocolateCosmos hover:text-bg hover:border-chocolateCosmos transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos"
                      className="w-11 h-11 flex items-center justify-center border border-hairline rounded-full hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 ease-refined hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-ink mb-4">Other</h3>
                  <div className="space-y-2 text-ink/70">
                    <p>
                      <a
                        href="tel:+27727431971"
                        className="relative hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:after:w-full"
                      >
                        072 743 1971
                      </a>
                    </p>
                    <p>Meyerton, South Africa</p>
                  </div>
                </div>
              </div>
            </InViewFade>
          </div>
        </Container>
      </section>
    </div>
  );
}
