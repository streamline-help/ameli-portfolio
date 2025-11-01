import Container from '../components/Container';
import InViewFade from '../components/InViewFade';
import Timeline from '../components/Timeline';
import { ExternalLink } from 'lucide-react';

const experienceTimeline = [
  {
    period: 'January 2025 – Present',
    title: 'JJ Glassworks',
    subtitle: 'Logo & Branding'
  },
  {
    period: 'June 2024 – Present',
    title: "Jimmy's Burger Bar",
    subtitle: 'Branding & Social'
  }
];

const educationTimeline = [
  {
    period: '2023 – Current',
    title: 'BA Graphic Design',
    subtitle: 'EDUVOS'
  }
];

const softwareSkills = ['Ai', 'Ps', 'Id', 'Pr', 'Ae', 'Figma'];

export default function About() {
  return (
    <div className="bg-bg">
      <section className="py-20 md:py-32">
        <Container>
          <InViewFade>
            <h1 className="h1 text-center mb-16">About Me</h1>
          </InViewFade>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-5xl mx-auto mb-24">
            <InViewFade delay={100}>
              <div className="w-80 h-80 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                  alt="Ameli van Zyl"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </InViewFade>

            <InViewFade delay={200}>
              <p className="text-lg text-ink/80 leading-relaxed mb-6">
                I'm Ameli van Zyl, a graphic designer completing my BA in Graphic Design at EDUVOS. I craft visually striking, detail-driven design that balances creativity with clear purpose.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed mb-6">
                My focus is on refined, high-quality work that communicates effectively and leaves a lasting impression.
              </p>
            </InViewFade>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto mb-24">
            <InViewFade>
              <h2 className="h2 mb-8">Experience</h2>
              <Timeline items={experienceTimeline} />
            </InViewFade>

            <InViewFade delay={150}>
              <h2 className="h2 mb-8">Education</h2>
              <Timeline items={educationTimeline} />
              <a
                href="https://www.eduvos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-chocolateCosmos hover:text-rosewood transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-4"
                className="relative inline-flex items-center gap-2 mt-6 text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:after:w-full"
              >
                Visit EDUVOS <ExternalLink size={16} />
              </a>
            </InViewFade>
          </div>

          <InViewFade className="max-w-5xl mx-auto mb-24">
            <h2 className="h2 mb-8 text-center">Software</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {softwareSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 border border-hairline text-ink text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </InViewFade>

          <InViewFade className="max-w-3xl mx-auto text-center border-t border-hairline pt-16">
            <h2 className="h2 mb-6">Contact</h2>
            <div className="space-y-3 text-lg">
              <p>
                <a
                  href="tel:+27727431971"
                  className="relative text-ink transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:text-accent hover:after:w-full"
                >
                  072 743 1971
                </a>
              </p>
              <p>
                <a
                  href="mailto:ami1vanzyl@gmail.com"
                  className="relative text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:text-accentHover"
                >
                  ami1vanzyl@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/ameli-van-zyl-34b506261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-ink transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-refined hover:text-accent hover:after:w-full"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <p className="text-sm text-ink/60 mt-8 italic">
              Open to creative collaborations and full-time design roles.
            </p>
          </InViewFade>
        </Container>
      </section>
    </div>
  );
}
