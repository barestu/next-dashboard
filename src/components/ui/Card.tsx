import React from 'react';

interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-slate-800 text-white rounded-md p-3">{children}</div>
  );
}
