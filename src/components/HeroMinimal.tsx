import React from 'react';

export default function HeroMinimal() {
  return (
    <section className="max-w-[1300px] mx-auto px-6 lg:px-10 pt-[6vh] pb-[4vh]">
      {/* Name + subline stacked like your screenshot */}
      <div>
        <h1 className="title-display">Ameli van Zyl</h1>
        <div className="subtitle-script mt-[-10px]">Graphic Designer</div>
      </div>

      {/* Quote + image split (layout block below your header) */}
      <div className="mt-[6vh] grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-8 items-start">
        <div>
          <div className="quote-caps">
            Chase Perfection.
            <br />
            Create Excellence.
          </div>
          <a href="/work" className="btn-outline mt-5">
            See my work
          </a>
        </div>
        <div className="aspect-[16/10] bg-black/8 rounded-[12px]" aria-hidden></div>
      </div>
    </section>
  );
}
