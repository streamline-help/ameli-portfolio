import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { ArrowLeft } from 'lucide-react';

interface ProjectData {
  title: string;
  role: string;
  category: string;
  timeline: string;
  tagline?: string;
  heroImage: string;
  overview: string;
  objectives: string;
  details: {
    role: string;
    tools: string;
    timeline: string;
    category: string;
  };
  process: {
    concept: string;
    development: string;
    outcome: string;
  };
  gallery: string[];
  reflection: string;
  keyTakeaways?: string[];
}

const projectsData: Record<string, ProjectData> = {
  'jimmys-burger-bar': {
    title: "Jimmy's Burger Bar",
    role: "Lead Graphic Designer",
    category: "Brand Identity | Print | Social Media",
    timeline: "2024 – Present",
    tagline: "Bold branding for a bold burger experience",
    heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&h=900&fit=crop",
    overview: "Jimmy's Burger Bar needed a fresh, energetic brand identity that would stand out in the competitive fast-casual dining space. The goal was to create a visual system that felt approachable yet premium, capturing the essence of quality ingredients and bold flavors.",
    objectives: "Develop a comprehensive brand identity including logo, color palette, typography, packaging design, and social media templates that would resonate with a young, food-conscious audience while maintaining broad appeal.",
    details: {
      role: "Lead Designer",
      tools: "Photoshop, Illustrator",
      timeline: "2024 – Present",
      category: "Branding, Print, Social Media"
    },
    process: {
      concept: "Research began with analyzing successful burger brands and identifying visual gaps in the local market. The creative direction focused on bold typography, vibrant colors, and playful illustrations that communicate fun without sacrificing sophistication.",
      development: "Key visual decisions included creating a custom logotype with rounded, friendly letterforms, establishing a warm color palette centered around reds and yellows, and developing a flexible design system that works across print menus, packaging, signage, and digital platforms.",
      outcome: "The brand identity successfully positions Jimmy's as a modern, quality-focused burger destination. Social media engagement increased significantly, and the cohesive visual language strengthened brand recognition across all customer touchpoints."
    },
    gallery: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=800&fit=crop"
    ],
    reflection: "This project allowed me to explore the balance between playful brand personality and professional execution. Working closely with the client taught me valuable lessons about translating business values into compelling visual narratives.",
    keyTakeaways: [
      "Collaboration with stakeholders strengthens final outcomes",
      "Flexible design systems ensure consistency across platforms",
      "Bold creative decisions can differentiate brands in crowded markets"
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug || ''] || projectsData['jimmys-burger-bar'];

  return (
    <div className="bg-cream min-h-screen">
      <Section className="py-8 md:py-12 space-y-12 md:space-y-20">
        {/* Hero Section */}
        <div className="animate-fade-up space-y-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="aspect-video md:aspect-[21/9] bg-white/50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-script text-accent">
              {project.title}
            </h1>
            <div className="text-sm md:text-base text-black/70 space-y-1">
              <p className="font-semibold">Role: {project.role}</p>
              <p>Category: {project.category}</p>
              <p>Timeline: {project.timeline}</p>
            </div>
            {project.tagline && (
              <p className="text-base md:text-lg italic text-black/60 pt-2">
                {project.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="animate-fade-up">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-script text-accent mb-2 text-center">
              Project Overview
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-black">
                Overview & Objectives
              </h3>
              <p className="text-black/70 leading-relaxed">{project.overview}</p>
              <p className="text-black/70 leading-relaxed">{project.objectives}</p>
            </div>

            <div className="bg-white/50 p-6 md:p-8 rounded-2xl shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="border-b border-black/10 pb-3">
                  <p className="text-sm font-semibold text-accent mb-1">Role</p>
                  <p className="text-black/80">{project.details.role}</p>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <p className="text-sm font-semibold text-accent mb-1">Tools</p>
                  <p className="text-black/80">{project.details.tools}</p>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <p className="text-sm font-semibold text-accent mb-1">Timeline</p>
                  <p className="text-black/80">{project.details.timeline}</p>
                </div>
                <div className="pb-3">
                  <p className="text-sm font-semibold text-accent mb-1">Category</p>
                  <p className="text-black/80">{project.details.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Process Section */}
        <div className="animate-fade-up">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-script text-accent mb-2 text-center">
              The Creative Process
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-3">
                <div className="inline-block bg-accent text-black text-sm font-bold px-4 py-1 rounded-full">
                  01
                </div>
                <h3 className="text-2xl font-bold text-black">Concept & Research</h3>
                <p className="text-black/70 leading-relaxed">{project.process.concept}</p>
              </div>
              <div className="order-1 md:order-2 h-64 bg-white/50 rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 bg-white/50 rounded-2xl"></div>
              <div className="space-y-3">
                <div className="inline-block bg-accent text-black text-sm font-bold px-4 py-1 rounded-full">
                  02
                </div>
                <h3 className="text-2xl font-bold text-black">Design Development</h3>
                <p className="text-black/70 leading-relaxed">{project.process.development}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-3">
                <div className="inline-block bg-accent text-black text-sm font-bold px-4 py-1 rounded-full">
                  03
                </div>
                <h3 className="text-2xl font-bold text-black">Outcome</h3>
                <p className="text-black/70 leading-relaxed">{project.process.outcome}</p>
              </div>
              <div className="order-1 md:order-2 h-64 bg-white/50 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="animate-fade-up">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-script text-accent mb-2 text-center">
              Project Gallery
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-white/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Outcome & Reflection Section */}
        <div className="animate-fade-up">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-script text-accent mb-2 text-center">
              Results & Reflection
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/50 p-6 md:p-8 rounded-2xl shadow-md">
              <p className="text-base md:text-lg text-black/80 leading-relaxed italic">
                {project.reflection}
              </p>
            </div>

            {project.keyTakeaways && project.keyTakeaways.length > 0 && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 text-center">
                  Key Takeaways
                </h3>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  {project.keyTakeaways.map((takeaway, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-black/70"
                    >
                      <span className="text-accent font-bold text-xl">•</span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-fade-up text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent border-2 border-transparent"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </Section>
    </div>
  );
}