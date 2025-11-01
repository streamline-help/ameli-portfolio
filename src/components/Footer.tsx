import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-bg py-12">
      <div className="mx-auto px-6 sm:px-12 lg:px-24 max-w-[1440px]">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="font-medium mb-2">
              © 2025 Ameli van Zyl • Graphic Designs
            </p>
            <a
              href="mailto:ami1vanzyl@gmail.com"
              className="text-whiteText/80 hover:text-whiteText transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-whiteText focus:ring-offset-2 focus:ring-offset-ink"
            >
              ami1vanzyl@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ameli-van-zyl-34b506261/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-whiteText/20 rounded-full hover:bg-whiteText hover:text-ink transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-whiteText"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/ameli.graphics/profilecard/?igsh=MTY0a3pjdGh0OGx5OQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-whiteText/20 rounded-full hover:bg-whiteText hover:text-ink transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-whiteText"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}