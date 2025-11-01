import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--bg-cream)] text-[var(--ink)]">
      {/* Intro */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-[8vh] pb-[6vh] grid lg:grid-cols-[1fr_1.1fr] gap-[var(--gap)] items-start">
        <h1 className="font-[Polaroid_Script] text-[clamp(44px,8vw,104px)] leading-[0.9] tracking-[-0.01em]">
          Ameli van Zyl
        </h1>
        <p className="text-[clamp(16px,1.6vw,20px)] leading-[1.65] text-[var(--ink)]/90">
          I focus on marketing and branding design, creating visual identities and campaigns that connect with audiences in meaningful ways. My work blends strategic thinking with expressive design—mixing illustration, motion graphics and refined typography to build brands that look polished and feel memorable.
        </p>
      </section>

      {/* Split block: image placeholder + CTA */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-[8vh] grid lg:grid-cols-[1fr_1.05fr] gap-[var(--gap)] items-center">
        <div className="aspect-[4/3] bg-black/5 rounded-[var(--radius)]" aria-hidden />
        <div className="flex flex-col gap-4">
          <p className="text-[clamp(16px,1.5vw,18px)] text-[var(--ink-muted)]">
            Through this mix of creativity and strategy, I aim to design brands that not only look good but also tell a story and leave a lasting impression.
          </p>
          <Link
            to="/work"
            className="inline-flex h-11 w-fit items-center justify-center rounded-[999px] border border-[var(--brand-deep)] px-6 text-[15px] font-medium text-[var(--brand-deep)] transition-colors hover:bg-[var(--brand-deep)] hover:text-[var(--bg-cream)]"
          >
            See my work
          </Link>
        </div>
      </section>

      {/* Skills + Tool Icons */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-[8vh] grid lg:grid-cols-2 gap-[var(--gap)]">
        <div>
          <h2 className="font-[Polaroid_Script] text-[clamp(36px,6vw,72px)] leading-[0.95] mb-4">My Skills</h2>
          <ul className="space-y-2 text-[clamp(16px,1.4vw,18px)]">
            <li>Branding & Visual Identity</li>
            <li>Print & Packaging Design</li>
            <li>Advertising & Campaign Design</li>
            <li>Motion Graphics / Video Editing</li>
            <li>Social Media</li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-4 place-items-start">
          {['Pr', 'Ai', 'Ae', 'Ps', 'Id'].map((k) => (
            <div
              key={k}
              className="h-16 w-16 rounded-[12px] bg-[var(--ink)] text-[var(--bg-cream)] grid place-items-center text-xl font-bold"
            >
              {k}
            </div>
          ))}
        </div>
      </section>

      {/* Education + Interests */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-[8vh] grid lg:grid-cols-2 gap-[var(--gap)]">
        <div>
          <h2 className="font-[Polaroid_Script] text-[clamp(36px,6vw,72px)] leading-[0.95] mb-3">My Education</h2>
          <p className="font-semibold">Bachelor of Arts in Graphic Design</p>
          <p>EDUVOS 2023–2025 • Top Achiever 2024</p>
          <a
            href="https://www.eduvos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-10 items-center justify-center rounded-[999px] border border-[var(--ink)]/20 px-5 text-[14px] hover:border-[var(--ink)]/40"
          >
            Visit EDUVOS ↗
          </a>
        </div>
        <div>
          <h2 className="font-[Polaroid_Script] text-[clamp(36px,6vw,72px)] leading-[0.95] mb-3">My Interests</h2>
          <p className="text-[var(--ink-muted)]">
            Beyond design, I draw inspiration from art, music, film and literature. I enjoy watercolour
            illustration—creating custom pieces that celebrate special moments and keep my eye sharp for color,
            composition and emotional storytelling.
          </p>
        </div>
      </section>

      {/* Experience grid */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-[12vh]">
        <h2 className="font-[Polaroid_Script] text-[clamp(36px,6vw,72px)] leading-[0.95] mb-6">
          My Experience
        </h2>
        <div className="grid lg:grid-cols-2 gap-[var(--gap)]">
          <article className="space-y-3">
            <div className="aspect-[4/3] bg-black/5 rounded-[var(--radius)]" aria-hidden />
            <h3 className="text-[clamp(20px,2.2vw,28px)] font-semibold">Jimmy's Burger Bar</h3>
            <p className="text-[var(--ink-muted)]">June 2024 – Present</p>
            <p className="text-[15px] leading-[1.7]">
              Lead designer responsible for the brand's visual identity and ongoing marketing content across
              digital and print.
            </p>
            <Link
              to="/work/jimmys-burger-bar"
              className="inline-flex h-10 items-center justify-center rounded-[999px] border border-[var(--brand-deep)] px-5 text-[14px] text-[var(--brand-deep)] hover:bg-[var(--brand-deep)] hover:text-[var(--bg-cream)]"
            >
              View
            </Link>
          </article>

          <article className="space-y-3">
            <div className="aspect-[4/3] bg-black/5 rounded-[var(--radius)]" aria-hidden />
            <h3 className="text-[clamp(20px,2.2vw,28px)] font-semibold">JJ Glassworks</h3>
            <p className="text-[var(--ink-muted)]">January 2025 – Present</p>
            <p className="text-[15px] leading-[1.7]">
              Brand refresh & modernisation—updating key identity elements while preserving recognisable brand
              equity.
            </p>
            <Link
              to="/work/jj-glassworks"
              className="inline-flex h-10 items-center justify-center rounded-[999px] border border-[var(--brand-deep)] px-5 text-[14px] text-[var(--brand-deep)] hover:bg-[var(--brand-deep)] hover:text-[var(--bg-cream)]"
            >
              View
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
