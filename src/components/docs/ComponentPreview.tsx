import { ReactNode, useState } from 'react';
import { Eye, Code2 } from 'lucide-react';
import { CopyButton } from './CopyButton';
import clsx from 'clsx';

interface ComponentPreviewProps {
  children: ReactNode;
  title?: string;
  description?: string;
  code?: string;
}

export function ComponentPreview({
  children,
  title,
  description,
  code,
}: ComponentPreviewProps) {
  const [view, setView] = useState<'preview' | 'code'>('preview');

  return (
    <div className="mb-8">
      {title && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-text-primary mb-2">{title}</h2>
          {description && (
            <p className="text-text-secondary">{description}</p>
          )}
        </div>
      )}
      <div className="rounded-xl border border-border-primary overflow-hidden">
        {/* Toolbar */}
        {code && (
          <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary bg-bg-secondary">
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-bg-tertiary">
              <button
                onClick={() => setView('preview')}
                className={clsx(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150',
                  view === 'preview'
                    ? 'bg-bg-primary text-text-primary shadow-sm'
                    : 'text-text-tertiary hover:text-text-secondary'
                )}
              >
                <Eye className="w-3.5 h-3.5" />
                Preview
              </button>
              <button
                onClick={() => setView('code')}
                className={clsx(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150',
                  view === 'code'
                    ? 'bg-bg-primary text-text-primary shadow-sm'
                    : 'text-text-tertiary hover:text-text-secondary'
                )}
              >
                <Code2 className="w-3.5 h-3.5" />
                Code
              </button>
            </div>
            {view === 'code' && <CopyButton text={code} />}
          </div>
        )}

        {/* Content */}
        {view === 'preview' ? (
          <div className="min-h-[200px] p-12 bg-bg-primary flex items-center justify-center">
            <div className="w-full flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          </div>
        ) : (
          <pre className="p-4 overflow-x-auto bg-bg-code" style={{ fontSize: '13px', lineHeight: '1.6' }}>
            <code className="text-sm font-mono text-text-primary">
              {code?.trim()}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
