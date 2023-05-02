import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({
  className,
  items,
}: {
  className?: string;
  items: { href: string; title: string }[];
}) {
  return (
    <div className={className}>
      <ul className="flex text-sm">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx === items.length - 1 ? (
              <li>
                <span className="text-gray-400">{item.title}</span>
              </li>
            ) : (
              <li className="after:content-['/'] after:mx-2">
                <Link href={item.href} className="hover:opacity-80">
                  {item.title}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
