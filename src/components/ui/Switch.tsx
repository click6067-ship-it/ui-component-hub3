import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <div
            className={clsx(
              'w-11 h-6 rounded-full transition-all duration-200',
              'bg-bg-tertiary border-2 border-border-primary',
              'peer-checked:bg-brand-primary peer-checked:border-brand-primary',
              'peer-focus:ring-2 peer-focus:ring-brand-primary/30',
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
              'group-hover:border-border-hover',
              className
            )}
          />
          <div
            className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 pointer-events-none peer-checked:translate-x-5"
          />
        </div>
        {label && (
          <span className="text-sm text-text-primary select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

