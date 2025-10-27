export default function Footer() {
  return (
    <footer className="bg-cream py-8 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-black font-medium mb-2">
          © 2025 Ameli van Zyl | Graphic Designer
        </p>
        <p className="text-black/70">
          <a 
            href="mailto:ami1vanzyl@gmail.com" 
            className="hover:text-accent transition-colors duration-200"
          >
            ami1vanzyl@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}