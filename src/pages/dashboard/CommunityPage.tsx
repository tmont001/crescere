import { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, Textarea, Button, Badge } from '@/components/ui';
import { PostCard } from '@/components/dashboard/PostCard';
import { COMMUNITY_POSTS, DASHBOARD_COURSES } from '@/data/dashboardMock';
import { useUser } from '@/context/UserContext';
import { cn } from '@/lib/cn';
import type { CommunityPost } from '@/types';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'french', label: '🇫🇷 French' },
  { id: 'spanish', label: '🇪🇸 Spanish' },
] as const;

type FilterId = typeof FILTERS[number]['id'];

const CURRENT_PROMPT = 'Share a situation this week where you used your target language outside of class.';

export function CommunityPage() {
  const primaryLanguage = DASHBOARD_COURSES[0]?.language ?? 'spanish';
  const { name } = useUser();

  const [filter, setFilter] = useState<FilterId>('all');
  const [draft, setDraft] = useState('');
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);

  const filtered = filter === 'all' ? posts : posts.filter((p) => p.language === filter);

  function handlePost() {
    if (!draft.trim()) return;
    const newPost: CommunityPost = {
      id: `p-${Date.now()}`,
      author: name,
      authorRole: 'Spanish A2 · Cohort 14',
      prompt: CURRENT_PROMPT,
      content: draft,
      timestamp: new Date().toISOString(),
      replies: 0,
      language: primaryLanguage,
    };
    setPosts([newPost, ...posts]);
    setDraft('');
  }

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <div className="mb-8">
        <p className="eyebrow mb-2">Community</p>
        <h1 className="font-display text-3xl text-ink mb-3">Share and learn together</h1>
        <p className="text-ink-muted leading-relaxed">
          Respond to this week's prompt or read what others in your cohort are sharing.
        </p>
      </div>

      {/* Current prompt + composer */}
      <Card variant="raised" className="p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="accent" size="sm">This week's prompt</Badge>
        </div>
        <p className="font-display text-2xl text-ink leading-snug mb-5">"{CURRENT_PROMPT}"</p>
        <Textarea
          name="post"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={4}
          placeholder="Share your response..."
        />
        <div className="mt-4 flex justify-end">
          <Button
            onClick={handlePost}
            disabled={!draft.trim()}
            icon={<Send size={14} strokeWidth={1.5} />}
            iconPosition="left"
          >
            Post
          </Button>
        </div>
      </Card>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              'px-4 py-2 rounded text-sm font-medium transition-all border',
              filter === f.id
                ? 'bg-ink text-paper border-ink'
                : 'bg-paper-raised text-ink-muted border-line hover:text-ink hover:border-ink/30',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {filtered.length === 0 && (
          <div className="p-10 text-center text-ink-muted border border-line rounded-md bg-paper-raised">
            No posts yet for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
