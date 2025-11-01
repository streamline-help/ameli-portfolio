import { useState, useEffect } from 'react';

interface EditorialTwoToneHeroProps {
  images: string[];
  title?: string;
  subtitle?: string;
}

export default function EditorialTwoToneHero({
  images = [],
  title = 'Ameli van Zyl',
  subtitle = 'Chase Perfection. Create Excellence.',
}: EditorialTwoToneHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-[85vh] grid lg:grid-cols-2">
      {/* Left: Image with crossfade */}
      <div className="relative overflow-hidden bg-gradient-to-br from-line/30 to-transparent">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Right: Editorial Typography */}
      <div className="flex items-center justify-center p-12 md:p-20 bg-bg">
        <div className="max-w-xl space-y-8">
          <h1 className="font-alt text-6xl md:text-8xl lg:text-9xl leading-none text-ink tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 font-light tracking-wide leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}


