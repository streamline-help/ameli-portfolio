import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const instagramPosts = [
  { id: 1, src: '/images/projects/jimmys/ig-1.webp', alt: "Jimmy's Burger Bar Instagram post 1" },
  { id: 2, src: '/images/projects/jimmys/ig-2.webp', alt: "Jimmy's Burger Bar Instagram post 2" },
  { id: 3, src: '/images/projects/jimmys/ig-3.webp', alt: "Jimmy's Burger Bar Instagram post 3" },
  { id: 4, src: '/images/projects/jimmys/ig-4.webp', alt: "Jimmy's Burger Bar Instagram post 4" },
];

const sauces = [
  { id: 1, src: '/images/projects/jimmys/sauce-tomato.webp', alt: "Jimmy's Burger Bar sauce bottle — Tomato", name: 'Tomato' },
  { id: 2, src: '/images/projects/jimmys/sauce-salad.webp', alt: "Jimmy's Burger Bar sauce bottle — Salad", name: 'Salad' },
  { id: 3, src: '/images/projects/jimmys/sauce-house.webp', alt: "Jimmy's Burger Bar sauce bottle — House", name: 'House' },
  { id: 4, src: '/images/projects/jimmys/sauce-jalapeno.webp', alt: "Jimmy's Burger Bar sauce bottle — Jalapeño", name: 'Jalapeño' },
];

const merchandise = [
  { id: 1, src: '/images/projects/jimmys/merch-shirt.webp', alt: "Jimmy's Burger Bar branded t-shirt" },
  { id: 2, src: '/images/projects/jimmys/merch-chef-coat.webp', alt: "Jimmy's Burger Bar chef coat" },
  { id: 3, src: '/images/projects/jimmys/merch-cap.webp', alt: "Jimmy's Burger Bar branded cap" },
  { id: 4, src: '/images/projects/jimmys/merch-hoodie.webp', alt: "Jimmy's Burger Bar hoodie" },
  { id: 5, src: '/images/projects/jimmys/merch-apron.webp', alt: "Jimmy's Burger Bar apron" },
];

function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % instagramPosts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + instagramPosts.length) % instagramPosts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % instagramPosts.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % instagramPosts.length;
      slides.push(instagramPosts[index]);
    }
    return slides;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-4 md:gap-6 justify-center items-center">
        {getVisibleSlides().map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="bg-cream rounded-3xl shadow-lg overflow-hidden aspect-[9/16] transition-transform duration-300 hover:scale-105">
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevious}
        aria-label="Previous Instagram post"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:left-4 bg-cream rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Instagram post"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:right-4 bg-cream rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}

export default function JimmysBurgerBar() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="relative">
        <svg
          className="absolute top-4 right-4 md:top-8 md:right-12 w-16 h-16 md:w-24 md:h-24 opacity-60"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 50 Q 30 10, 50 30 T 90 50"
            stroke="#E64519"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16 max-w-7xl mx-auto animate-fade-up">
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-accent mb-6">
            Jimmy's Burger Bar
          </h1>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-lg md:text-xl text-black leading-relaxed">
                Designed the full brand identity for a new bar. Built a bold, energetic look that helped establish early recognition and a strong visual brand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#082C3A] mb-2">Services</h3>
                <p className="text-sm text-black">Branding, Merchandise, Social Media, Print</p>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#082C3A] mb-2">Industry</h3>
                <p className="text-sm text-black">Fast Food / Restaurant</p>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#082C3A] mb-2">Year</h3>
                <p className="text-sm text-black">2024–Present</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-7 md:h-10 bg-[#082C3A] w-full" />
      </div>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#082C3A] mb-4">Objectives</h2>
            <p className="text-black leading-relaxed">
              Create a distinctive brand identity that captures the vibrant energy of a modern burger bar while maintaining approachability. The design needed to work across multiple touchpoints—from social media to physical merchandise—and instantly communicate quality and personality.
            </p>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#082C3A] mb-1">Role</h3>
                <p className="text-black">Lead Graphic Designer</p>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#082C3A] mb-1">Tools</h3>
                <p className="text-black">Illustrator, Photoshop, InDesign</p>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#082C3A] mb-1">Deliverables</h3>
                <p className="text-black">Logo, Menus, Packaging, Uniforms, Social Templates, Signage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-script text-4xl md:text-6xl text-cream text-center mb-12">
            Instagram Posts
          </h2>
          <InstagramCarousel />
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16 relative">
        <svg
          className="absolute top-8 left-4 w-12 h-12 opacity-40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 80 Q 40 60, 60 70 T 80 20"
            stroke="#6FA0BD"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-8 right-4 w-12 h-12 opacity-40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 20 Q 60 40, 40 30 T 20 80"
            stroke="#6FA0BD"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-script text-5xl md:text-7xl text-accent leading-tight">
              Sauce
            </h2>
            <h2 className="font-script text-5xl md:text-7xl text-accent leading-tight">
              Collection
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-[#082C3A] mt-2">Burger Bar</p>
          </div>

          <div className="bg-[#6FA0BD] rounded-[36px] p-8 md:p-16 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {sauces.map((sauce) => (
                <div
                  key={sauce.id}
                  className="transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={sauce.src}
                    alt={sauce.alt}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 rounded-[36px] overflow-hidden shadow-2xl">
            <div className="bg-accent p-8 md:p-12 lg:p-16 flex flex-col justify-center text-cream order-2 md:order-1">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Menu</h2>
              <p className="text-lg leading-relaxed">
                An easy-to-read restaurant menu designed to keep the spotlight on the food. Clean layout, fresh illustration accents, and a touch of personality to match the brand.
              </p>
            </div>
            <div className="order-1 md:order-2 relative overflow-hidden bg-[#082C3A]">
              <img
                src="/images/projects/jimmys/menu-hero.webp"
                alt="Jimmy's Burger Bar menu design"
                loading="lazy"
                className="w-full h-full object-cover md:scale-110 md:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-script text-4xl md:text-6xl text-accent mb-12">
            Merchandise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchandise.map((item) => (
              <div
                key={item.id}
                className="bg-[#6FA0BD] rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#0C1B45] shadow-lg" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-[#082C3A]">Navy</p>
                  <p className="text-sm text-black font-mono">#0C1B45</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#5E75AF] shadow-lg" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-[#082C3A]">Blue</p>
                  <p className="text-sm text-black font-mono">#5E75AF</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-200 shadow-lg" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-[#082C3A]">White</p>
                  <p className="text-sm text-black font-mono">#FFFFFF</p>
                </div>
              </div>
            </div>

            <div className="bg-[#6FA0BD] rounded-[28px] p-8 shadow-xl">
              <img
                src="/images/projects/jimmys/cap.webp"
                alt="Jimmy's Burger Bar branded cap showcase"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(2.5rem,6vw,5rem)] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream rounded-full font-medium transition-all duration-300 hover:bg-transparent hover:text-accent hover:ring-2 hover:ring-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <Link
            to="/projects/habitat-cosmic-oasis"
            className="group inline-flex items-center gap-2 px-8 py-4 text-accent rounded-full font-medium border-2 border-transparent transition-all duration-300 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Next Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
