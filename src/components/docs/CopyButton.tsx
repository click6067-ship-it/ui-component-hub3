import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard } from '@/utils/clipboard';
import clsx from 'clsx';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={clsx(
        'px-3 py-1.5 text-xs font-medium rounded-md border flex items-center gap-1.5 transition-all duration-200',
        copied
          ? 'bg-brand-success/15 border-brand-success/30 text-brand-success'
          : 'bg-bg-hover border-border-primary text-text-secondary hover:bg-bg-active hover:text-text-primary'
      )}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          Copy
        </>
      )}
    </button>
  );
}
