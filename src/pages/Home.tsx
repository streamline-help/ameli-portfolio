import { Link } from 'react-router-dom';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import ProjectTile from '../components/ProjectTile';
import SplitSixImageHero from '../components/SplitSixImageHero';

const jimmysImages = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=1000&fit=crop',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=1000&fit=crop',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=1000&fit=crop',
  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=1000&fit=crop',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=1000&fit=crop',
  'https://images.unsplash.com/photo-1615719413546-198b25453f85?w=800&h=1000&fit=crop',
];

const featuredProjects = [
  {
    title: "Jimmy's Burger Bar",
    meta: "Brand Identity",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    href: "/work/jimmys-burger-bar"
  },
  {
    title: "Habitat: Cosmic Oasis",
    meta: "Advertising / Event",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    href: "/work/habitat-cosmic-oasis"
  },
  {
    title: "JJ Glassworks",
    meta: "Brand Identity",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=600&fit=crop",
    href: "/work/jj-glassworks"
  }
];

export default function Home() {
  return (
    <div className="bg-bg">
      <SplitSixImageHero
        images={jimmysImages}
        title="Ameli van Zyl"
        quote="Chase perfection. Create excellence."
        titleClass="altTitle"
        align="center-middle"
      />

      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 text-center mb-4">Featured Projects</h2>
            <p className="text-center text-ink/60 mb-16 max-w-2xl mx-auto">
              A quick look at selected work.
            </p>
          </InViewFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {featuredProjects.map((project, index) => (
              <InViewFade key={project.href} delay={index * 100}>
                <ProjectTile {...project} />
              </InViewFade>
            ))}
          </div>

          <InViewFade className="text-center">
            <Link
              to="/work"
              className="inline-block px-7 py-3 border-2 border-accent text-accent rounded-lg font-medium tracking-wide transition-all duration-200 ease-refined hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
            >
              View All Work
            </Link>
          </InViewFade>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-t border-hairline">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
            <InViewFade>
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                  alt="Ameli van Zyl"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </InViewFade>

            <InViewFade delay={150}>
              <h2 className="h2 mb-6">About Me</h2>
              <p className="text-lg text-ink/70 leading-relaxed mb-8 max-w-[50ch]">
                I create purposeful, detail-driven design that's clear, engaging, and brand-true.
              </p>
              <Link
                to="/about"
                className="relative inline-block text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:after:w-full"
              >
                Learn More
              </Link>
            </InViewFade>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-t border-hairline bg-hairline/30">
        <Container>
          <InViewFade className="text-center">
            <h2 className="h2 mb-8">Let's work together.</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-7 py-3 bg-accent text-white rounded-lg font-medium tracking-wide transition-all duration-200 ease-refined hover:bg-accentHover hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                Get in touch
              </Link>
              <Link
                to="/work"
                className="px-7 py-3 border-2 border-accent text-accent rounded-lg font-medium tracking-wide transition-all duration-200 ease-refined hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                View all work
              </Link>
            </div>
          </InViewFade>
        </Container>
      </section>
    </div>
  );
}
