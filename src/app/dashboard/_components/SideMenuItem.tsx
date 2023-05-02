'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/utils/common';

export default function SideMenuItem({
  href,
  icon,
  title,
  childs,
}: {
  href?: string;
  icon: any;
  title: string;
  childs?: { href: string; title: string }[];
}) {
  const Component = childs ? 'button' : Link;
  const hasChild = Boolean(childs?.length);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Component
        href={(!hasChild ? href : undefined) as any}
        type={hasChild ? 'button' : undefined}
        className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setOpen(!open)}
      >
        <span>{icon}</span>
        <span className="ml-3 flex-grow text-left">{title}</span>
        {hasChild && (
          <FiChevronDown
            size={24}
            className={cn(
              'transition-transform ease-in-out duration-150',
              open && 'rotate-180'
            )}
          />
        )}
      </Component>

      {hasChild && open && (
        <div>
          {childs?.map((child, idx) => (
            <Link
              key={idx}
              href={child.href}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-[30px]">{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
