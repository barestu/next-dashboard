import React from 'react';
import { cn } from '@/utils/common';

export default function THCell({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'th'>) {
  return (
    <th
      className={cn(
        'p-4 text-xs uppercase text-slate-400 bg-slate-600',
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}
