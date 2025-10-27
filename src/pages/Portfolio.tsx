import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Jimmy's Burger Bar",
      category: "Brand Identity",
      image: "/images/jimmys.webp",
      slug: "jimmys-burger-bar",
      description: "Complete brand identity design for a new restaurant — from logo to packaging."
    },
    {
      title: "Chicken Shop Date",
      category: "Motion Graphics",
      image: "/images/chicken-shop-date.webp",
      slug: "chicken-shop-date",
      description: "Fun, fast-paced animated intro sequence inspired by the YouTube series."
    },
    {
      title: "Habitat Cosmic Oasis",
      category: "Advertising / Event",
      image: "/images/habitat.webp",
      slug: "habitat-cosmic-oasis",
      description: "Promotional social campaign and poster design for a festival concept."
    },
    {
      title: "Extra — Chew Good",
      category: "Advertising / Social",
      image: "/images/extra.webp",
      slug: "extra-chew-good",
      description: "Campaign expanding Orbit's \"Chew Good\" concept for Gen Z audiences."
    },
    {
      title: "JJ Glassworks",
      category: "Brand Identity",
      image: "/images/jj-glassworks.webp",
      slug: "jj-glassworks",
      description: "Rebrand for a local glass company — modernizing its logo and materials."
    },
    {
      title: "Social Anxiety",
      category: "Awareness Campaign",
      image: "/images/social-anxiety.webp",
      slug: "social-anxiety",
      description: "Mental-health awareness project with posters and tip cards."
    }
  ];

  return (
    <Section>
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-script text-accent mb-6">My Work</h1>
        <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
          A selection of projects exploring branding, advertising, and creative design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
}