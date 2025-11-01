import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProjectTileProps {
  title: string;
  meta?: string;
  image: string;
  href: string;
  alt?: string;
}

export default function ProjectTile({ title, meta, image, href, alt }: ProjectTileProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={href}
      className="group block relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-line/30">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'grayscale-0 scale-[1.02]' : 'grayscale'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="font-display text-2xl md:text-3xl text-whiteText mb-1 font-normal tracking-tight">
            {title}
          </h3>
          {meta && <p className="text-whiteText/90 text-sm font-light tracking-wide">{meta}</p>}
        </div>
      </div>
    </Link>
  );
}
