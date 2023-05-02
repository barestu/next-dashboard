import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/common';

interface ButtonProps {
  as?: 'button' | 'link';
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  as = 'button',
  href,
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = as === 'button' ? 'button' : Link;
  return (
    <Component
      href={(as === 'link' ? href : undefined) as any}
      type={type}
      className={cn(
        'inline-flex items-center px-5 py-2.5 gap-2',
        'text-white font-medium rounded-lg text-sm leading-normal',
        'bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-300',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
