import { useState } from 'react';
import { FileText, Headphones, Video, Link as LinkIcon, Search, type LucideIcon } from 'lucide-react';
import { Card, Input, Badge } from '@/components/ui';
import { RESOURCES } from '@/data/dashboardMock';
import { cn } from '@/lib/cn';
import type { Resource } from '@/types';

const TYPE_ICONS: Record<Resource['type'], LucideIcon> = {
  pdf: FileText,
  audio: Headphones,
  video: Video,
  link: LinkIcon,
};

const TYPE_LABELS: Record<Resource['type'], string> = {
  pdf: 'PDF',
  audio: 'Audio',
  video: 'Video',
  link: 'Link',
};

export function ResourcesPage() {
  const [query, setQuery] = useState('');

  // Group by category
  const filtered = RESOURCES.filter((r) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
  });

  const grouped = filtered.reduce<Record<string, Resource[]>>((acc, r) => {
    (acc[r.category] ||= []).push(r);
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <div className="p-6 md:p-10 max-w-4xl">
      <div className="mb-8">
        <p className="eyebrow mb-2">Resources</p>
        <h1 className="font-display text-3xl text-ink mb-3">Everything in one place</h1>
        <p className="text-ink-muted leading-relaxed">
          Lesson materials, recordings, practice exercises, and outside-class resources curated by instructors.
        </p>
      </div>

      <div className="relative mb-10">
        <Search
          size={16}
          strokeWidth={1.5}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-subtle pointer-events-none"
        />
        <Input
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search resources..."
          className="pl-11"
        />
      </div>

      {categories.length === 0 ? (
        <div className="p-10 text-center text-ink-muted border border-line rounded-md bg-paper-raised">
          No resources match your search.
        </div>
      ) : (
        <div className="space-y-10">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="font-display text-xl text-ink mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {grouped[category].map((resource) => (
                  <ResourceItem key={resource.id} resource={resource} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function ResourceItem({ resource }: { resource: Resource }) {
  const Icon = TYPE_ICONS[resource.type];
  return (
    <Card variant="default" interactive className="p-5 group">
      <button type="button" className="text-left w-full flex items-start gap-4">
        <div
          className={cn(
            'h-10 w-10 shrink-0 rounded flex items-center justify-center border transition-colors',
            'border-line bg-paper-raised group-hover:border-accent',
          )}
        >
          <Icon size={16} strokeWidth={1.5} className="text-accent" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" size="sm">
              {TYPE_LABELS[resource.type]}
            </Badge>
          </div>
          <p className="font-medium text-ink mb-1">{resource.title}</p>
          <p className="text-sm text-ink-muted leading-relaxed">{resource.description}</p>
        </div>
      </button>
    </Card>
  );
}
