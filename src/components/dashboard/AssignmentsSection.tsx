import { useState, useRef } from 'react';
import { Check, Clock, Mic, PenLine, BookOpen, Upload, ArrowRight } from 'lucide-react';
import { Badge, Button, Textarea } from '@/components/ui';
import { ASSIGNMENTS } from '@/data/dashboardMock';
import { formatShortDate } from '@/lib/dates';
import type { Assignment } from '@/types';
import { cn } from '@/lib/cn';

const TYPE_ICONS: Record<Assignment['type'], typeof PenLine> = {
  writing: PenLine,
  speaking: Mic,
  reading: BookOpen,
};

export function AssignmentsSection({ courseId }: { courseId: string }) {
  const assignments = ASSIGNMENTS.filter((a) => a.courseId === courseId);
  const pending = assignments.filter((a) => a.status === 'pending');
  const completed = assignments.filter((a) => a.status !== 'pending');

  return (
    <section className="mb-6">
      <div className="flex items-baseline justify-between mb-5">
        <p className="eyebrow text-accent">Assignments</p>
        <div className="flex gap-3 text-2xs uppercase tracking-wider text-ink-subtle">
          <span>
            <span className="tabular text-ink font-medium">{pending.length}</span> pending
          </span>
          <span>·</span>
          <span>
            <span className="tabular text-ink font-medium">{completed.length}</span> complete
          </span>
        </div>
      </div>

      <div className="border border-line rounded-md bg-paper-raised overflow-hidden">
        {assignments.map((assignment, idx) => (
          <AssignmentItem
            key={assignment.id}
            assignment={assignment}
            isLast={idx === assignments.length - 1}
          />
        ))}
        {assignments.length === 0 && (
          <div className="p-8 text-center text-ink-muted">
            No assignments yet for this course.
          </div>
        )}
      </div>
    </section>
  );
}

function AssignmentItem({ assignment, isLast }: { assignment: Assignment; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [submission, setSubmission] = useState('');
  const [submitted, setSubmitted] = useState(assignment.status !== 'pending');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const Icon = TYPE_ICONS[assignment.type];

  function handleSubmit() {
    if (!submission.trim() && !fileName) return;
    setSubmitted(true);
    setExpanded(false);
  }

  return (
    <div className={cn('transition-colors', !isLast && 'border-b border-line')}>
      <button
        type="button"
        onClick={() => assignment.status === 'pending' && setExpanded((v) => !v)}
        className={cn(
          'w-full p-5 text-left',
          'flex items-start gap-4',
          'md:grid md:grid-cols-12 md:items-center md:gap-4',
          assignment.status === 'pending' && 'hover:bg-paper cursor-pointer',
          assignment.status !== 'pending' && 'cursor-default',
        )}
      >
        {/* Status icon — shrink-0 on mobile, col-span-1 on desktop */}
        <div className="shrink-0 md:col-span-1">
          <div
            className={cn(
              'h-9 w-9 rounded flex items-center justify-center border',
              submitted
                ? 'bg-accent text-paper border-accent'
                : 'bg-paper border-line text-ink-muted',
            )}
          >
            {submitted ? <Check size={14} strokeWidth={2} /> : <Icon size={14} strokeWidth={1.5} />}
          </div>
        </div>

        {/*
          Wrapper: flex column on mobile (title above, date+status below).
          md:contents removes the box on desktop so children join the grid directly.
        */}
        <div className="flex-1 min-w-0 flex flex-col gap-2 md:contents">
          {/* Title block */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xs uppercase tracking-wider text-ink-subtle">Week {assignment.week}</span>
              <Badge variant="outline" size="sm">
                {assignment.type}
              </Badge>
            </div>
            <p className="font-medium text-ink">{assignment.title}</p>
            {!expanded && (
              <p className="text-sm text-ink-muted mt-1 line-clamp-1">{assignment.description}</p>
            )}
          </div>

          {/*
            Date + status: flex row on mobile (space-between), contents on desktop
            so each child becomes its own grid cell.
          */}
          <div className="flex items-center justify-between md:contents">
            <div className="flex items-center gap-1.5 text-sm text-ink-muted md:col-span-2">
              <Clock size={12} strokeWidth={1.5} />
              <span className="tabular">{formatShortDate(assignment.dueDate)}</span>
            </div>
            <div className="md:col-span-2 md:flex md:justify-end">
              {submitted ? (
                <Badge variant="accent" size="sm">
                  {assignment.status === 'graded' ? 'Graded' : 'Submitted'}
                </Badge>
              ) : (
                <Badge variant="highlight" size="sm">
                  Pending
                </Badge>
              )}
            </div>
          </div>
        </div>
      </button>

      {expanded && !submitted && (
        <div className="px-5 pb-5 pt-0 border-t border-line mt-0 md:ml-[calc(8.333%)] lg:ml-0">
          <div className="lg:pl-[calc(8.333%)]">
            <p className="text-sm text-ink-muted leading-relaxed mb-4">{assignment.description}</p>
            <Textarea
              name={`submission-${assignment.id}`}
              label="Your submission"
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              rows={5}
              placeholder="Type or paste your submission here..."
            />
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Button
                size="md"
                onClick={handleSubmit}
                disabled={!submission.trim() && !fileName}
                icon={<ArrowRight size={14} strokeWidth={1.5} />}
              >
                Submit
              </Button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-2 px-5 h-11 text-sm text-ink-muted hover:text-ink border border-line rounded transition-colors"
              >
                <Upload size={14} strokeWidth={1.5} />
                {fileName ?? 'Upload file instead'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setFileName(file.name);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
