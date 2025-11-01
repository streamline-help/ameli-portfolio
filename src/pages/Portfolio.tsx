import { useState } from 'react';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import ProjectTile from '../components/ProjectTile';
import FilterChips from '../components/FilterChips';

const projects = [
  {
    title: "Jimmy's Burger Bar",
    meta: "Brand Identity",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    href: "/work/jimmys-burger-bar",
    category: "Brand Identity"
  },
  {
    title: "Chicken Shop Date",
    meta: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&h=600&fit=crop",
    href: "/work/chicken-shop-date",
    category: "Social"
  },
  {
    title: "Habitat: Cosmic Oasis",
    meta: "Advertising / Event",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    href: "/work/habitat-cosmic-oasis",
    category: "Print"
  },
  {
    title: "Extra — Chew Good",
    meta: "Advertising / Social",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&h=600&fit=crop",
    href: "/work/extra-chew-good",
    category: "Social"
  },
  {
    title: "JJ Glassworks",
    meta: "Brand Identity",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=600&fit=crop",
    href: "/work/jj-glassworks",
    category: "Brand Identity"
  },
  {
    title: "Social Anxiety",
    meta: "Awareness Campaign",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
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
            <h1 className="h1 text-accent text-center mb-6">Work</h1>
            <p className="text-center text-lg text-ink/70 mb-12 max-w-2xl mx-auto font-light">
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

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {filteredProjects.map((project, index) => (
              <InViewFade key={project.href} delay={index * 100}>
                <ProjectTile {...project} />
              </InViewFade>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
