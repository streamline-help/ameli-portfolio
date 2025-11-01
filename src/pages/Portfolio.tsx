import { useState } from 'react';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import ProjectTile from '../components/ProjectTile';
import FilterChips from '../components/FilterChips';

const projects = [
  {
    title: "Jimmy's Burger Bar",
    meta: "Brand Identity",
    image: "/images/jimmys.webp",
    href: "/work/jimmys-burger-bar",
    category: "Brand Identity"
  },
  {
    title: "Chicken Shop Date",
    meta: "Motion Graphics",
    image: "/images/chicken-shop-date.webp",
    href: "/work/chicken-shop-date",
    category: "Social"
  },
  {
    title: "Habitat: Cosmic Oasis",
    meta: "Advertising / Event",
    image: "/images/habitat.webp",
    href: "/work/habitat-cosmic-oasis",
    category: "Print"
  },
  {
    title: "Extra — Chew Good",
    meta: "Advertising / Social",
    image: "/images/extra.webp",
    href: "/work/extra-chew-good",
    category: "Social"
  },
  {
    title: "JJ Glassworks",
    meta: "Brand Identity",
    image: "/images/jj-glassworks.webp",
    href: "/work/jj-glassworks",
    category: "Brand Identity"
  },
  {
    title: "Social Anxiety",
    meta: "Awareness Campaign",
    image: "/images/social-anxiety.webp",
    href: "/work/social-anxiety",
    category: "Print"
  }
];

const filters = ['All', 'Brand Identity', 'Print', 'Social'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-bg">
      <section className="py-20 md:py-32">
        <Container>
          <InViewFade>
            <h1 className="h1 text-center mb-6">Work</h1>
            <p className="text-center text-lg text-ink/60 mb-12 max-w-2xl mx-auto">
              A selection of projects exploring branding, advertising, and creative design.
            </p>
          </InViewFade>

          <InViewFade delay={100} className="mb-16">
            <FilterChips
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </InViewFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <InViewFade key={project.href} delay={index * 80}>
                <ProjectTile {...project} />
              </InViewFade>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
