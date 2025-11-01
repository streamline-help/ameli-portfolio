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
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-refined group-hover:scale-[1.02]"
        />
        <div
          className={`absolute inset-0 bg-ink transition-opacity duration-300 ${
            isHovered ? 'opacity-15' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="font-display text-3xl md:text-4xl text-whiteText mb-1">{title}</h3>
          {meta && <p className="text-whiteText/90 text-sm">{meta}</p>}
        </div>
      </div>
    </Link>
  );
}
