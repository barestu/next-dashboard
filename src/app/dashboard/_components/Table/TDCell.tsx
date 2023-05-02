import React from 'react';
import { cn } from '@/utils/common';

export default function TDCell({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'td'>) {
  return (
    <td className={cn('p-3 text-sm whitespace-nowrap', className)} {...props}>
      {children}
    </td>
  );
}
