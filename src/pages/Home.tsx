import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const featuredProjects = [
  {
    title: "Jimmy's Burger Bar",
    category: "Brand Identity",
    description: "Full identity system for a new restaurant — logo, menus, packaging, uniforms, social.",
    image: "/images/projects/jimmys/cover.webp",
    link: "/projects/jimmys-burger-bar"
  },
  {
    title: "Habitat — Cosmic Oasis",
    category: "Advertising / Event",
    description: "Poster + social campaign for a festival concept with bold illustration.",
    image: "/images/projects/habitat/cover.webp",
    link: "/projects/habitat-cosmic-oasis"
  },
  {
    title: "JJ Glassworks",
    category: "Brand Identity",
    description: "Logo redesign and brand refresh for a local glassworks company.",
    image: "/images/projects/jj-glassworks/cover.webp",
    link: "/projects/jj-glassworks"
  }
];

export default function Home() {
  const collageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (prefersReducedMotion.current || !collageRef.current) return;

    const handleScroll = () => {
      if (!collageRef.current) return;
      const scrolled = window.scrollY;
      const parallaxOffset = scrolled * 0.15;
      collageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cream">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <svg
          className="absolute top-4 right-4 md:top-12 md:right-12 w-16 h-16 md:w-20 md:h-20 opacity-40 hidden md:block"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 45 Q 35 15, 55 25 T 85 55"
            stroke="#E64519"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className="absolute bottom-12 left-8 w-12 h-12 md:w-16 md:h-16 opacity-30 hidden md:block"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 80 Q 40 55, 60 65 T 80 25"
            stroke="#6FA0BD"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-[clamp(2.5rem,6vw,5rem)] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-left animate-fade-up">
              <h1 className="font-script text-[clamp(2.4rem,4.5vw+1rem,5rem)] text-accent mb-6 leading-tight">
                Design with Purpose
              </h1>
              <p className="text-[clamp(1rem,1.2vw+0.8rem,1.125rem)] text-black leading-relaxed mb-8 max-w-[60ch]">
                Every colour, font, and interaction serves a clear objective — not just aesthetics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  to="/portfolio"
                  className="inline-block px-8 py-4 bg-accent text-black rounded-full font-medium transition-all duration-300 hover:bg-transparent hover:text-accent hover:ring-2 hover:ring-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-center"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 text-accent rounded-full font-medium border-2 border-accent transition-all duration-300 hover:bg-accent hover:text-black focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-center"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Ai', 'Ps', 'Id', 'Pr', 'Ae'].map((app) => (
                  <span
                    key={app}
                    className="px-3 py-1 text-xs font-medium bg-black/5 text-black rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div ref={collageRef} className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-lg mx-auto">
                <div
                  className="absolute top-0 left-0 w-3/5 aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                  style={{ zIndex: 3 }}
                >
                  <img
                    src="/images/hero/work-1.webp"
                    alt="Featured design work"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute top-12 right-0 w-3/5 aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
                  style={{ zIndex: 2 }}
                >
                  <img
                    src="/images/hero/work-2.webp"
                    alt="Featured design work"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="relative w-4/5 aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl mt-[60%] mx-auto transform hover:scale-105 transition-transform duration-500"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src="/images/hero/work-3.webp"
                    alt="Featured design work"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-script text-4xl md:text-6xl text-accent mb-4">Featured Projects</h2>
            <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
              A quick look at selected work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.link}
                to={project.link}
                className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-px bg-black/10 my-3" />
                  <p className="text-sm text-black/70 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center animate-fade-up">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 text-accent rounded-full font-medium border-2 border-accent transition-all duration-300 hover:bg-accent hover:text-black focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/about/portrait.webp"
                    alt="Ameli van Zyl portrait"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-script text-4xl md:text-6xl text-accent mb-6">About Me</h2>
              <p className="text-lg md:text-xl text-black leading-relaxed mb-8 max-w-[60ch] mx-auto lg:mx-0">
                I create purposeful, detail-driven design that's clear, engaging, and brand-true.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-accent text-black rounded-full font-medium transition-all duration-300 hover:bg-transparent hover:text-accent hover:ring-2 hover:ring-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
