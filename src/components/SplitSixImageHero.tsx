import { useEffect, useRef } from 'react';
import './SplitSixImageHero.css';

interface SplitSixImageHeroProps {
  images: string[];
  title?: string;
  quote?: string;
  intervalMs?: number;
  align?: 'center' | 'bottom-left';
  titleClass?: string;
}

export default function SplitSixImageHero({
  images,
  title = 'Ameli van Zyl',
  quote = 'Chase perfection. Create excellence.',
  intervalMs = 6500,
  align = 'bottom-left',
  titleClass,
}: SplitSixImageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const leftImages = Array.from(
      containerRef.current.querySelectorAll('.shero6__pane[data-side="left"] .shero6__img')
    );
    const rightImages = Array.from(
      containerRef.current.querySelectorAll('.shero6__pane[data-side="right"] .shero6__img')
    );

    if (leftImages.length === 0 || rightImages.length === 0) return;

    let currentLeftIndex = 0;
    let currentRightIndex = 0;
    let isLeftTurn = true;

    const showLeft = (index: number) => {
      leftImages.forEach((el, k) => {
        el.classList.toggle('is-active', k === index);
      });
    };

    const showRight = (index: number) => {
      rightImages.forEach((el, k) => {
        el.classList.toggle('is-active', k === index);
      });
    };

    const prefersReducedMotion = window.matchMedia(
      '(prefers-motion: reduce)'
    ).matches;

    showLeft(0);
    showRight(0);

    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (isLeftTurn) {
        currentLeftIndex = (currentLeftIndex + 1) % leftImages.length;
        showLeft(currentLeftIndex);
      } else {
        currentRightIndex = (currentRightIndex + 1) % rightImages.length;
        showRight(currentRightIndex);
      }
      isLeftTurn = !isLeftTurn;
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  const alignClass =
    align === 'center' ? 'shero6__overlay--center' : 'shero6__overlay--bottom-left';
  const titleClassFinal = titleClass ? `shero6__title ${titleClass}` : 'shero6__title';

  return (
    <section
      ref={containerRef}
      className="shero6"
      aria-label="Featured work"
    >
      <div className="shero6__bg"></div>

      <div className="shero6__grid">
        {/* Left pane: cycles images[0], images[2], images[4] */}
        <div className="shero6__pane" data-side="left">
          <img
            className="shero6__img is-active"
            src={images[0]}
            alt="Project image 1"
          />
          <img className="shero6__img" src={images[2]} alt="Project image 3" />
          <img className="shero6__img" src={images[4]} alt="Project image 5" />
        </div>

        {/* Right pane: cycles images[1], images[3], images[5] */}
        <div className="shero6__pane" data-side="right">
          <img
            className="shero6__img is-active"
            src={images[1]}
            alt="Project image 2"
          />
          <img className="shero6__img" src={images[3]} alt="Project image 4" />
          <img className="shero6__img" src={images[5]} alt="Project image 6" />
        </div>
      </div>

      <div className={`shero6__overlay ${alignClass}`}>
        <h1 className={titleClassFinal}>{title}</h1>
        <p className="shero6__quote">{quote}</p>
      </div>
    </section>
  );
}
