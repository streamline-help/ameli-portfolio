import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  description?: string;
}

export default function ProjectCard({ title, category, image, slug, description }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1">
        <div className="aspect-square bg-gray-200 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          {description && (
            <p className="text-black/70 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}