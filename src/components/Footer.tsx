import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-whiteText py-16">
      <div className="mx-auto px-6 sm:px-12 lg:px-24 max-w-[1440px]">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="font-light mb-2 tracking-wide">
              © 2025 Ameli van Zyl • Graphic Designs
            </p>
            <a
              href="mailto:ami1vanzyl@gmail.com"
              className="text-whiteText/70 hover:text-accent transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-dark"
            >
              ami1vanzyl@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ameli-van-zyl-34b506261/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-whiteText/40 hover:text-accent transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/ameli.graphics/profilecard/?igsh=MTY0a3pjdGh0OGx5OQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-whiteText/40 hover:text-accent transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}