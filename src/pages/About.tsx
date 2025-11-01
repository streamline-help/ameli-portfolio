import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Camera, Video, Palette, Box } from 'lucide-react';

const experienceTimeline = [
  {
    period: 'June 2024 – Present',
    title: "Jimmy's Burger Bar",
    subtitle: 'Lead designer for brand identity and social media design, ensuring consistent, engaging visual communication across platforms.'
  },
  {
    period: 'January 2025 – Present',
    title: 'JJ Glassworks',
    subtitle: 'Overseeing logo redesign and a full brand refresh, focused on a modern yet timeless identity that strengthens the company\'s image.'
  }
];

const softwareSkills = [
  'Adobe Photoshop',
  'Adobe Illustrator', 
  'Adobe InDesign',
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Figma'
];

const expertiseCards = [
  {
    icon: Camera,
    title: 'Photo Editing',
    description: 'Professional color correction, compositing, and retouching for campaigns.'
  },
  {
    icon: Video,
    title: 'Video Editing', 
    description: 'Dynamic, story-driven edits for social and marketing.'
  },
  {
    icon: Palette,
    title: 'Illustration',
    description: 'Conceptual & digital artwork for branding, packaging, and storytelling.'
  },
  {
    icon: Box,
    title: '3D Design',
    description: 'Visualizing products and environments with precision and flair.'
  }
];

export default function About() {
  return (
    <div className="bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-14 md:py-20">
        <div className="about__container">
          <h1 className="section-title text-center mb-12">About Me</h1>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Ameli van Zyl portrait"
                className="about__avatar"
                loading="lazy"
              />
            </div>

            {/* Intro Content */}
            <div className="text-center lg:text-left space-y-6">
              <p className="text-lg leading-relaxed text-ink">
                I'm Ameli van Zyl, a dedicated graphic designer currently completing my BA in Graphic Design at EDUVOS. I craft visually striking, detail-driven work that balances creativity with clear purpose. My focus is refined, high-quality design that communicates effectively and leaves a lasting impression.
              </p>
              
              <Link to="/portfolio" className="btn-accent">
                View My Portfolio
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-14 md:py-20 border-t border-gray-100">
        <div className="about__container">
          <h2 className="section-title">Experience</h2>
          
          <div className="timeline max-w-3xl">
            {experienceTimeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-ink-2 uppercase tracking-wide">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="text-ink-2 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Skills Section */}
      <section className="py-14 md:py-20 border-t border-gray-100">
        <div className="about__container">
          <h2 className="section-title">Software Skills</h2>
          
          <div className="flex flex-wrap justify-center lg:justify-start mb-4">
            {softwareSkills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-ink-2 text-center lg:text-left">
            Proficient in Adobe Creative Suite and digital design tools.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-14 md:py-20 border-t border-gray-100">
        <div className="about__container">
          <h2 className="section-title">Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseCards.map((item, index) => (
              <div key={index} className="card">
                <div className="card-icon">
                  <item.icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-14 md:py-20 border-t border-gray-100">
        <div className="about__container">
          <h2 className="section-title">Education</h2>
          
          <div className="card max-w-2xl">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-ink-2 uppercase tracking-wide">
                2023 – Present
              </p>
              <h3 className="text-xl font-bold text-ink">
                <span className="border-b-2 border-accent">BA Graphic Design</span> — EDUVOS
              </h3>
              <p className="text-ink-2 mb-4">Currently completing final year of studies.</p>
              <a
                href="https://www.eduvos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link inline-flex items-center gap-2"
              >
                Visit EDUVOS <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-14 md:py-20 border-t border-gray-100">
        <div className="about__container">
          <h2 className="section-title">Interests</h2>
          
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-ink text-center lg:text-left">
              Beyond design, I draw inspiration from <strong>art</strong>, <strong>music</strong>, <strong>film</strong>, and <strong>literature</strong>. I explore watercolour illustration, creating custom greeting cards and artworks that celebrate special moments—keeping my eye sharp for color, composition, and emotional storytelling. 🎨 📚 🎬
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 md:py-20 border-t border-gray-100">
        <div className="about__container">
          <h2 className="section-title">Contact</h2>
          
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <span className="text-ink-2">📞</span>
              <a href="tel:+27727431971" className="contact-link">
                072 743 1971
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-ink-2">✉️</span>
              <a href="mailto:ami1vanzyl@gmail.com" className="contact-link">
                ami1vanzyl@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-ink-2">💼</span>
              <a
                href="https://linkedin.com/in/ameli-van-zyl-34b506261"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/ameli-van-zyl-34b506261
              </a>
            </div>
          </div>
          
          <p className="text-sm text-ink-2 mt-8 max-w-md">
            Always open to creative collaborations, freelance opportunities, or full-time design roles.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="about__container">
          <p className="text-sm text-ink-2 text-center">
            © 2025 Ameli van Zyl | Graphic Designer · ami1vanzyl@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}