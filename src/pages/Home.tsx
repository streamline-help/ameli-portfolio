import { Link } from 'react-router-dom';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import ProjectTile from '../components/ProjectTile';

const featuredProjects = [
  {
    title: "Jimmy's Burger Bar",
    meta: "Brand Identity",
    image: "/images/projects/jimmys/cover.webp",
    href: "/work/jimmys-burger-bar"
  },
  {
    title: "Habitat: Cosmic Oasis",
    meta: "Advertising / Event",
    image: "/images/projects/habitat/cover.webp",
    href: "/work/habitat-cosmic-oasis"
  },
  {
    title: "JJ Glassworks",
    meta: "Brand Identity",
    image: "/images/projects/jj-glassworks/cover.webp",
    href: "/work/jj-glassworks"
  }
];

export default function Home() {
  return (
    <div className="bg-bg">
      <section className="min-h-[85vh] flex items-center">
        <Container className="py-20 md:py-32">
          <InViewFade className="max-w-3xl">
            <h1 className="altTitle text-[clamp(44px,7vw,116px)] leading-[0.95] tracking-[-0.01em] mb-6">
              Design with purpose.
            </h1>
            <p className="text-lg md:text-xl text-ink/70 leading-relaxed mb-10 max-w-[55ch]">
              Brand identity, print, and digital—crafted with clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/work"
                className="px-8 py-3 border border-chocolateCosmos text-chocolateCosmos rounded-full hover:bg-chocolateCosmos hover:text-bg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 text-ink hover:text-chocolateCosmos transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
              >
                Contact
              </Link>
            </div>
          </InViewFade>
        </Container>
      </section>

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
              className="inline-block px-8 py-3 border border-chocolateCosmos text-chocolateCosmos rounded-full hover:bg-chocolateCosmos hover:text-bg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
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
                  src="/images/about/portrait.webp"
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
                className="inline-block text-chocolateCosmos underline underline-offset-4 hover:text-rosewood transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
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
                className="px-10 py-4 bg-chocolateCosmos text-bg rounded-full hover:bg-rosewood transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
              >
                Get in touch
              </Link>
              <Link
                to="/work"
                className="px-10 py-4 border border-chocolateCosmos text-chocolateCosmos rounded-full hover:bg-chocolateCosmos hover:text-bg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
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
