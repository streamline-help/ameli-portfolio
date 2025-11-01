interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-accent">
          <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-accent" />
          <p className="text-sm text-ink/60 mb-1 font-light tracking-wide">{item.period}</p>
          <h3 className="text-lg font-normal text-ink">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-ink/70 mt-1 font-light">{item.subtitle}</p>}
        </div>
      ))}
    </div>
  );
}
