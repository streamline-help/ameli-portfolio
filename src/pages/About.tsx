import { Link } from 'react-router-dom';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import Timeline from '../components/Timeline';
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
    <div className="bg-bg">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <Container>
          <InViewFade>
            <h1 className="h1 text-center mb-16">About Me</h1>
          </InViewFade>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Profile Image */}
            <InViewFade>
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                      alt="Ameli van Zyl portrait"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Palette className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </InViewFade>

            {/* Intro Content */}
            <InViewFade delay={150}>
              <div className="text-center lg:text-left space-y-6">
                <p className="text-lg leading-relaxed text-ink/80">
                  I'm Ameli van Zyl, a dedicated graphic designer currently completing my BA in Graphic Design at EDUVOS. I craft visually striking, detail-driven work that balances creativity with clear purpose. My focus is refined, high-quality design that communicates effectively and leaves a lasting impression.
                </p>
                
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-white rounded-lg font-medium tracking-wide transition-all duration-200 ease-refined hover:bg-accentHover hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  View My Portfolio
                  <ArrowRight size={18} />
                </Link>
              </div>
            </InViewFade>
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-12">Experience</h2>
          </InViewFade>
          
          <InViewFade delay={100}>
            <div className="max-w-3xl">
              <Timeline items={experienceTimeline} />
            </div>
          </InViewFade>
        </Container>
      </section>

      {/* Software Skills Section */}
      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-8">Software Skills</h2>
          </InViewFade>
          
          <InViewFade delay={100}>
            <div className="flex flex-wrap gap-3 mb-6">
              {softwareSkills.map((skill, index) => (
                <InViewFade key={skill} delay={index * 50}>
                  <span className="px-4 py-2 bg-hairline/50 text-ink rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-200 cursor-default">
                    {skill}
                  </span>
                </InViewFade>
              ))}
            </div>
            
            <p className="text-sm text-ink/60 max-w-2xl">
              Proficient in Adobe Creative Suite and digital design tools for comprehensive visual communication.
            </p>
          </InViewFade>
        </Container>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-12">Expertise</h2>
          </InViewFade>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseCards.map((item, index) => (
              <InViewFade key={index} delay={index * 100}>
                <div className="bg-white border border-hairline rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{item.description}</p>
                </div>
              </InViewFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-12">Education</h2>
          </InViewFade>
          
          <InViewFade delay={100}>
            <div className="bg-white border border-hairline rounded-2xl p-8 max-w-2xl shadow-sm">
              <div className="space-y-3">
                <p className="text-sm font-medium text-accent uppercase tracking-wide">
                  2023 – Present
                </p>
                <h3 className="text-xl font-semibold text-ink">
                  <span className="border-b-2 border-accent pb-1">BA Graphic Design</span> — EDUVOS
                </h3>
                <p className="text-ink/70 mb-4">Currently completing final year of studies.</p>
                <a
                  href="https://www.eduvos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accentHover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
                >
                  Visit EDUVOS <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </InViewFade>
        </Container>
      </section>

      {/* Interests Section */}
      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-8">Interests</h2>
          </InViewFade>
          
          <InViewFade delay={100}>
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-ink/80">
                Beyond design, I draw inspiration from <strong className="text-accent">art</strong>, <strong className="text-accent">music</strong>, <strong className="text-accent">film</strong>, and <strong className="text-accent">literature</strong>. I explore watercolour illustration, creating custom greeting cards and artworks that celebrate special moments—keeping my eye sharp for color, composition, and emotional storytelling. 🎨 📚 🎬
              </p>
            </div>
          </InViewFade>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 border-t border-hairline bg-hairline/30">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-12 text-center">Let's Connect</h2>
          </InViewFade>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <InViewFade delay={100}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-ink/60 mb-1">Phone</p>
                    <a
                      href="tel:+27727431971"
                      className="text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
                    >
                      072 743 1971
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-ink/60 mb-1">Email</p>
                    <a
                      href="mailto:ami1vanzyl@gmail.com"
                      className="text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
                    >
                      ami1vanzyl@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💼</span>
                  </div>
                  <div>
                    <p className="text-sm text-ink/60 mb-1">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/ameli-van-zyl-34b506261"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
                    >
                      linkedin.com/in/ameli-van-zyl-34b506261
                    </a>
                  </div>
                </div>
              </div>
            </InViewFade>

            <InViewFade delay={200}>
              <div className="bg-white border border-hairline rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-ink mb-4">Available for</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-ink/80">Creative collaborations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-ink/80">Freelance opportunities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-ink/80">Full-time design roles</span>
                  </li>
                </ul>
              </div>
            </InViewFade>
          </div>
        </Container>
      </section>
    </div>
  );
}