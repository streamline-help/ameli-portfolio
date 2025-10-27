import Section from '../components/Section';
import Button from '../components/Button';
import { Palette, Film, PenTool, Box, ExternalLink, Music, Book, Camera } from 'lucide-react';

export default function About() {
  const softwareSkills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Figma'
  ];

  const expertiseAreas = [
    {
      icon: <Camera size={32} />,
      title: 'Photo Editing',
      description: 'Professional color correction, compositing, and retouching for brand visuals and campaigns.'
    },
    {
      icon: <Film size={32} />,
      title: 'Video Editing',
      description: 'Creating dynamic, story-driven edits optimized for social media and marketing.'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Illustration',
      description: 'Conceptual and digital artwork for branding, packaging, and storytelling.'
    },
    {
      icon: <Box size={32} />,
      title: '3D Design',
      description: 'Visualizing products and environments with precision and creative flair.'
    }
  ];

  return (
    <Section>
      <div className="space-y-16 md:space-y-24">
        {/* Hero Section */}
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-script text-accent mb-8 md:mb-12 text-center">
            About Me
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-full overflow-hidden bg-white/50 max-w-sm mx-auto shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
                  alt="Ameli van Zyl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                I'm <strong>Ameli van Zyl</strong>, a dedicated graphic designer currently completing my{' '}
                <strong>BA in Graphic Design at EDUVOS</strong>. I'm passionate about crafting visually striking
                and detail-driven designs that balance creativity with clear purpose. My focus is on producing
                refined, high-quality work that communicates effectively and leaves a lasting impression.
              </p>
              <Button to="/portfolio">View My Portfolio</Button>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-script text-accent mb-8 text-center">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent">June 2024 – Present</p>
                <h3 className="text-xl font-bold text-black">Jimmy's Burger Bar</h3>
                <p className="text-black/70 leading-relaxed">
                  Lead designer responsible for <strong>brand identity and social media design</strong>,
                  ensuring consistent and engaging visual communication across all platforms.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent">January 2025 – Present</p>
                <h3 className="text-xl font-bold text-black">JJ Glassworks</h3>
                <p className="text-black/70 leading-relaxed">
                  Overseeing the <strong>logo redesign and full brand refresh</strong>, focusing on a modern
                  yet timeless visual identity that strengthens the company's overall image.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Software Proficiency */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-script text-accent mb-8 text-center">
            Software Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-4">
            {softwareSkills.map((software) => (
              <div
                key={software}
                className="bg-white/50 p-6 rounded-xl text-center border-2 border-transparent hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <p className="font-semibold text-black text-sm md:text-base">{software}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-black/60 italic">
            Proficient in Adobe Creative Suite and digital design tools.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-script text-accent mb-8 text-center">
            Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 space-y-3"
              >
                <div className="text-accent">{area.icon}</div>
                <h3 className="text-xl font-bold text-black">{area.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-script text-accent mb-8 text-center">
            Education
          </h2>
          <div className="max-w-2xl mx-auto bg-white/50 p-8 rounded-xl text-center space-y-4">
            <p className="text-sm font-semibold text-accent">2023 – Present</p>
            <h3 className="text-2xl font-bold text-black">BA Graphic Design — EDUVOS</h3>
            <p className="text-black/70 italic">Currently completing final year of studies.</p>
            <a
              href="https://www.eduvos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
            >
              Visit EDUVOS <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Interests */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-script text-accent mb-8 text-center">
            Interests
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center gap-6 text-accent mb-6">
              <Palette size={32} className="animate-fade-up" />
              <Music size={32} className="animate-fade-up" style={{ animationDelay: '0.1s' }} />
              <Film size={32} className="animate-fade-up" style={{ animationDelay: '0.2s' }} />
              <Book size={32} className="animate-fade-up" style={{ animationDelay: '0.3s' }} />
            </div>
            <p className="text-base md:text-lg text-black/80 leading-relaxed text-center">
              Beyond design, I draw inspiration from <strong>art, music, film, and literature</strong>.
              In my spare time, I explore <strong>watercolour illustration</strong>, creating custom greeting
              cards and artworks that celebrate life's special moments. This personal creative practice keeps
              my eye sharp for color, composition, and emotional storytelling.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-script text-accent mb-2 text-center">
            Contact
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="space-y-2">
              <p className="text-lg text-black/80">
                📞{' '}
                <a href="tel:+27727431971" className="hover:text-accent transition-colors">
                  072 743 1971
                </a>
              </p>
              <p className="text-lg text-black/80">
                ✉️{' '}
                <a
                  href="mailto:ami1vanzyl@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  ami1vanzyl@gmail.com
                </a>
              </p>
              <p className="text-lg text-black/80">
                🔗{' '}
                <a
                  href="https://www.linkedin.com/in/ameli-van-zyl-34b506261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  linkedin.com/in/ameli-van-zyl-34b506261
                </a>
              </p>
            </div>
            <p className="text-sm text-black/60 italic pt-4">
              Always open to creative collaborations, freelance opportunities, or full-time design roles.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}