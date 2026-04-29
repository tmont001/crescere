import { MessageSquare, Heart } from 'lucide-react';
import { Card } from '@/components/ui';
import type { CommunityPost } from '@/types';

export function PostCard({ post }: { post: CommunityPost }) {
  const relativeTime = formatRelative(post.timestamp);

  return (
    <Card variant="default" className="p-6">
      {/* Author */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-full bg-accent-soft flex items-center justify-center shrink-0">
          <span className="font-display text-sm text-accent">{post.author.charAt(0)}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-ink truncate">{post.author}</p>
          <p className="text-2xs uppercase tracking-wider text-ink-subtle truncate">
            {post.authorRole}
          </p>
        </div>
        <span className="text-2xs uppercase tracking-wider text-ink-subtle shrink-0">
          {relativeTime}
        </span>
      </div>

      {/* Prompt */}
      <div className="mb-3 pb-3 border-b border-line">
        <p className="text-2xs uppercase tracking-wider text-ink-subtle mb-1">In response to</p>
        <p className="font-display italic text-ink text-[0.9375rem]">"{post.prompt}"</p>
      </div>

      {/* Content */}
      <p className="text-ink leading-relaxed mb-5">{post.content}</p>

      {/* Footer */}
      <div className="flex items-center gap-5 pt-4 border-t border-line text-sm text-ink-muted">
        <button className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
          <MessageSquare size={14} strokeWidth={1.5} />
          <span>
            <span className="tabular">{post.replies}</span> replies
          </span>
        </button>
        <button className="inline-flex items-center gap-1.5 hover:text-highlight transition-colors">
          <Heart size={14} strokeWidth={1.5} />
          <span>Like</span>
        </button>
      </div>
    </Card>
  );
}

function formatRelative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return 'just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}
