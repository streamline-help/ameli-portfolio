interface FilterChipsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterChips({ filters, activeFilter, onFilterChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 text-sm border border-line rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-chocolateCosmos focus:ring-offset-2 ${
              isActive
                ? 'text-accent bg-accent/5 border-accent'
                : 'text-ink bg-bg hover:border-ink/30'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
