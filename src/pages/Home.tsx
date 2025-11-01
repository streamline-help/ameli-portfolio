import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: "Jimmy's Burger Bar",
    meta: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    href: '/work/jimmys-burger-bar',
  },
  {
    title: 'Habitat: Cosmic Oasis',
    meta: 'Advertising / Event',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    href: '/work/habitat-cosmic-oasis',
  },
  {
    title: 'JJ Glassworks',
    meta: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=600&fit=crop',
    href: '/work/jj-glassworks',
  },
  {
    title: 'Studio Creative',
    meta: 'Packaging',
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?w=800&h=600&fit=crop',
    href: '/work/studio-creative',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero - CREAM */}
      <section className="section band--cream fade-in">
        <div className="container">
          <div className="kicker">We don't do cookie-cutter</div>
          <div className="h2" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            Where <span style={{ color: 'var(--bg-red)' }}>Creativity</span> Meets{' '}
            <span style={{ color: 'var(--bg-red)', fontFamily: 'Aesthetic Moment' }}>Conversion</span>
          </div>
          <p className="copy" style={{ marginBottom: 'var(--space-6)' }}>
            I craft visually striking, detail-driven design with a commercial brain. My work blends strategic thinking
            with expressive design—mixing illustration, motion graphics and refined typography to build brands that
            look polished and feel memorable.
          </p>
          <a href="#work" className="btn-outline">
            Learn more
          </a>
        </div>
      </section>

      {/* Featured Work - RED */}
      <section className="section band--red fade-in" id="work">
        <div className="container">
          <div className="kicker" style={{ color: 'rgba(255,255,255,.85)' }}>
            [ What I do ]
          </div>
          <div className="h2" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            Elevating ideas to New Heights
          </div>
          <div className="grid" style={{ marginBottom: 'var(--space-6)' }}>
            {featuredProjects.map((project, i) => (
              <figure key={i} className="polaroid project-tile">
                <img src={project.image} alt={project.title} />
                <figcaption>{project.meta}</figcaption>
              </figure>
            ))}
          </div>
          <a href="/work" className="btn-white">
            See all projects
          </a>
        </div>
      </section>

      {/* About Preview - CREAM */}
      <section className="section band--cream fade-in">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-6)',
              alignItems: 'center',
            }}
          >
            <div className="img-frame">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Ameli van Zyl"
              />
            </div>
            <div>
              <div className="h2" style={{ marginBottom: 'var(--space-4)' }}>About Me</div>
              <p className="copy" style={{ marginBottom: 'var(--space-6)' }}>
                I create purposeful, detail-driven design that's clear, engaging, and brand-true. Through this mix of
                creativity and strategy, I aim to design brands that not only look good but also tell a story and leave
                a lasting impression.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - RED */}
      <section className="section band--red fade-in">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="h2" style={{ marginBottom: 'var(--space-6)' }}>Let's work together</div>
          <p className="copy" style={{ marginBottom: 'var(--space-6)' }}>
            Ready to transform your brand? Get in touch to discuss your project.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-white">
              Get in touch
            </Link>
            <Link to="/work" className="btn-white">
              View all work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
