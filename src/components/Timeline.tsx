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
        <div key={index} className="relative pl-8 border-l border-hairline">
          <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent" />
          <p className="text-sm text-ink/60 mb-1">{item.period}</p>
          <h3 className="text-lg font-medium text-ink">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-ink/70 mt-0.5">{item.subtitle}</p>}
        </div>
      ))}
    </div>
  );
}
