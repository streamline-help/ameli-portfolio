import { Link } from 'react-router-dom';
import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const instagramPosts = [
  { id: 1, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=1000&fit=crop', alt: "Jimmy's Instagram post 1" },
  { id: 2, src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=1000&fit=crop', alt: "Jimmy's Instagram post 2" },
  { id: 3, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=1000&fit=crop', alt: "Jimmy's Instagram post 3" },
  { id: 4, src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=1000&fit=crop', alt: "Jimmy's Instagram post 4" },
];

const sauces = [
  { id: 1, src: 'https://images.unsplash.com/photo-1572449102576-55faa12c2c70?w=400&h=600&fit=crop', alt: 'Tomato', name: 'Tomato' },
  { id: 2, src: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=600&fit=crop', alt: 'Salad', name: 'Salad' },
  { id: 3, src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=600&fit=crop', alt: 'House', name: 'House' },
  { id: 4, src: 'https://images.unsplash.com/photo-1596097639314-8f1fe9320db1?w=400&h=600&fit=crop', alt: 'Jalapeño', name: 'Jalapeño' },
];

const merchandise = [
  { id: 1, src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop', alt: 'T-shirt' },
  { id: 2, src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop', alt: 'Chef coat' },
  { id: 3, src: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop', alt: 'Cap' },
  { id: 4, src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop', alt: 'Hoodie' },
  { id: 5, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop', alt: 'Apron' },
];

export default function JimmysBurgerBar() {
  return (
    <div className="bg-bg">
      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <InViewFade>
            <h1 className="h1 mb-8">Jimmy's Burger Bar</h1>
          </InViewFade>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
            <InViewFade delay={100}>
              <p className="text-lg text-ink/80 leading-relaxed">
                Designed the full brand identity for a new bar. Built a bold, energetic look that helped establish early recognition and a strong visual brand.
              </p>
            </InViewFade>

            <InViewFade delay={200}>
              <div className="grid grid-cols-3 gap-8 text-sm">
                <div>
                  <p className="font-medium text-ink mb-1">Services</p>
                  <p className="text-ink/60">Branding, Print, Social</p>
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">Year</p>
                  <p className="text-ink/60">2025</p>
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">Industry</p>
                  <p className="text-ink/60">Fast Food</p>
                </div>
              </div>
            </InViewFade>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <InViewFade>
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&h=900&fit=crop"
                alt="Jimmy's Burger Bar hero"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </InViewFade>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-12">Instagram</h2>
          </InViewFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {instagramPosts.map((post, index) => (
              <InViewFade key={post.id} delay={index * 80}>
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    src={post.src}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </InViewFade>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-6 text-center">Sauce Collection</h2>
            <p className="text-center text-ink/60 mb-12 max-w-2xl mx-auto">
              Custom bottle design for signature sauces.
            </p>
          </InViewFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {sauces.map((sauce, index) => (
              <InViewFade key={sauce.id} delay={index * 80}>
                <div className="text-center">
                  <div className="aspect-[3/4] mb-4 overflow-hidden">
                    <img
                      src={sauce.src}
                      alt={sauce.alt}
                      loading="lazy"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm text-ink/70">{sauce.name}</p>
                </div>
              </InViewFade>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <InViewFade>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop"
                  alt="Menu design"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </InViewFade>

            <InViewFade delay={150}>
              <h2 className="h2 mb-6">Menu</h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                An easy-to-read restaurant menu designed to keep the spotlight on the food. Clean layout, fresh illustration accents, and a touch of personality to match the brand.
              </p>
            </InViewFade>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <InViewFade>
            <h2 className="h2 mb-12">Merchandise</h2>
          </InViewFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {merchandise.map((item, index) => (
              <InViewFade key={item.id} delay={index * 80}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </InViewFade>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 border-b border-hairline">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
            <InViewFade>
              <h2 className="h2 mb-8">Color</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded bg-[#0C1B45]" />
                  <div>
                    <p className="font-medium text-ink">Navy</p>
                    <p className="text-sm text-ink/60">#0C1B45</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded bg-[#5E75AF]" />
                  <div>
                    <p className="font-medium text-ink">Blue</p>
                    <p className="text-sm text-ink/60">#5E75AF</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded bg-white border border-hairline" />
                  <div>
                    <p className="font-medium text-ink">White</p>
                    <p className="text-sm text-ink/60">#FFFFFF</p>
                  </div>
                </div>
              </div>
            </InViewFade>

            <InViewFade delay={150}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop"
                  alt="Cap showcase"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </InViewFade>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <InViewFade className="max-w-3xl mx-auto mb-16">
            <h2 className="h2 mb-6">Outcome</h2>
            <p className="text-lg text-ink/70 leading-relaxed">
              The brand identity successfully positions Jimmy's as a modern, quality-focused burger destination. Social media engagement increased significantly, and the cohesive visual language strengthened brand recognition across all customer touchpoints.
            </p>
          </InViewFade>

          <InViewFade>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12 border-t border-hairline">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-chocolateCosmos hover:text-rosewood transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
              >
                <ArrowLeft size={20} />
                Back to Work
              </Link>

              <Link
                to="/work/habitat-cosmic-oasis"
                className="inline-flex items-center gap-2 text-chocolateCosmos hover:text-rosewood transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
              >
                Next Project
                <ArrowRight size={20} />
              </Link>
            </div>
          </InViewFade>
        </Container>
      </section>
    </div>
  );
}
