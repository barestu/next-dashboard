import React from 'react';
import { cn } from '@/utils/common';

interface TextfieldProps extends React.ComponentPropsWithoutRef<'input'> {
  prepend?: React.ReactNode;
}

export default function Textfield({ prepend, ...props }: TextfieldProps) {
  return (
    <div className="form-control">
      <div className="relative">
        {prepend && (
          <div className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-400">
            {prepend}
          </div>
        )}

        <input
          className={cn(
            'bg-slate-700 rounded-md p-2 border border-slate-400/30 text-slate-400 text-sm',
            'focus:outline-none focus:outline-emerald-400',
            prepend && 'pl-10'
          )}
          {...props}
        />
      </div>
    </div>
  );
}
