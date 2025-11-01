import React from 'react';

export default function HeroMinimal() {
  return (
    <section className="section band--cream">
      <div className="container">
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h1 className="display">Ameli van Zyl</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
          <div>
            <div className="h2" style={{ marginBottom: 'var(--space-4)' }}>
              Where <span style={{ color: 'var(--bg-red)' }}>Creativity</span> Meets{' '}
              <span style={{ color: 'var(--bg-red)', fontFamily: 'Aesthetic Moment' }}>Conversion</span>
            </div>
            <p className="copy" style={{ marginBottom: 'var(--space-4)' }}>
              I craft visually striking, detail-driven design with a commercial brain. My work blends strategic thinking
              with expressive design—mixing illustration, motion graphics and refined typography to build brands that
              look polished and feel memorable.
            </p>
            <a href="/work" className="btn-outline">
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
