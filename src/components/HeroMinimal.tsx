import React from 'react';
import './HeroMinimal.css';

export default function HeroMinimal() {
  return (
    <section className="hero-min">
      <div className="hero-min__top">
        <h1 className="title hero-min__name">Ameli van Zyl</h1>
        <div className="hero-min__role altTitle">Graphic Designer</div>
      </div>

      <div className="hero-min__grid">
        <div className="hero-min__quote title">
          CHASE PERFECTION.<br/>CREATE EXCELLENCE.
        </div>

        <div className="hero-min__image" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop" alt="" />
        </div>
      </div>

      <div className="hero-min__cta">
        <a className="btn btn--accent" href="/work">See my work</a>
      </div>
      <hr />
    </section>
  );
}

