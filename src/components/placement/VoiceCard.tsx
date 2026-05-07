import { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, Square, RotateCcw, ArrowRight } from 'lucide-react';
import { Button, Badge } from '@/components/ui';

interface VoiceCardProps {
  /** Called with the recorded Blob on submit, or null on skip. */
  onSubmit: (blob: Blob | null) => void;
}

type RecordingState = 'idle' | 'recording' | 'stopped';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function VoiceCard({ onSubmit }: VoiceCardProps) {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Revoke object URL when it changes or the component unmounts.
  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  // Clear the interval on unmount.
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startRecording = useCallback(async () => {
    setPermissionError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioUrl(url);
        setRecordingState('stopped');
        // Stop all mic tracks to release the browser indicator.
        stream.getTracks().forEach((t) => t.stop());
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setElapsed(0);
      setRecordingState('recording');

      timerRef.current = setInterval(() => setElapsed((s) => s + 1), 1000);
    } catch {
      setPermissionError(
        'Microphone access was denied. Grant permission in your browser settings, or skip this section.',
      );
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    mediaRecorderRef.current?.stop();
  }, []);

  const reRecord = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setAudioBlob(null);
    setElapsed(0);
    setRecordingState('idle');
  }, [audioUrl]);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle">
          Part 5 of 5
        </span>
        <Badge variant="outline" size="sm">
          Voice Note
        </Badge>
      </div>

      {/* Full bar — this section is always 100% complete once reached. */}
      <div className="w-full h-1.5 bg-paper-sunken rounded-full overflow-hidden mb-10">
        <div className="h-full w-full bg-accent rounded-full" />
      </div>

      <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug mb-3">
        Voice note{' '}
        <span className="font-normal italic text-ink-muted">(optional)</span>
      </h2>
      <p className="text-ink-muted leading-relaxed mb-10">
        Record a short voice note in your target language — introduce yourself, describe
        your day, or say anything that comes naturally. This is reviewed by a teacher and
        never auto-scored.
      </p>

      {/* Permission error */}
      {permissionError && (
        <div className="mb-6 p-4 bg-highlight-soft border border-highlight/30 rounded text-sm text-highlight leading-relaxed">
          {permissionError}
        </div>
      )}

      {/* ── Idle ── */}
      {recordingState === 'idle' && (
        <div className="flex flex-col items-center gap-6 py-8">
          <div className="h-16 w-16 rounded-full bg-accent-soft flex items-center justify-center">
            <Mic size={28} strokeWidth={1.5} className="text-accent" />
          </div>
          <Button
            onClick={startRecording}
            size="lg"
            icon={<Mic size={16} strokeWidth={1.5} />}
            iconPosition="left"
          >
            Start Recording
          </Button>
        </div>
      )}

      {/* ── Recording ── */}
      {recordingState === 'recording' && (
        <div className="flex flex-col items-center gap-6 py-8">
          <div className="flex items-center gap-3">
            {/* Animated red dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-highlight" />
            </span>
            <span className="font-mono text-sm text-ink tabular">
              {formatTime(elapsed)}
            </span>
            <span className="text-sm text-ink-muted">Recording…</span>
          </div>

          <Button
            onClick={stopRecording}
            size="lg"
            variant="secondary"
            icon={<Square size={16} strokeWidth={1.5} />}
            iconPosition="left"
          >
            Stop Recording
          </Button>
        </div>
      )}

      {/* ── Stopped — playback + submit ── */}
      {recordingState === 'stopped' && audioUrl && (
        <div className="space-y-6">
          <audio
            controls
            src={audioUrl}
            className="w-full"
            aria-label="Your recording"
          />

          <div className="flex flex-col items-end gap-3">
            <Button
              onClick={() => audioBlob && onSubmit(audioBlob)}
              disabled={!audioBlob}
              size="lg"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
            >
              Submit Recording
            </Button>

            <button
              type="button"
              onClick={reRecord}
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <RotateCcw size={13} strokeWidth={1.5} />
              Re-record
            </button>
          </div>
        </div>
      )}

      {/* Skip — always visible */}
      <div className="mt-10 pt-6 border-t border-line text-center">
        <button
          type="button"
          onClick={() => onSubmit(null)}
          className="text-sm text-ink-muted hover:text-ink transition-colors"
        >
          Skip this section →
        </button>
      </div>
    </div>
  );
}
