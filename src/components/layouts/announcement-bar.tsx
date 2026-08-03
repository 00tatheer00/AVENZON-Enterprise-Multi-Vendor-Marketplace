import * as React from 'react';
import Link from 'next/link';

interface AnnouncementBarProps {
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export function AnnouncementBar({
  message = '🚀 Verified Enterprise Marketplace — Express Global Shipping Available',
  linkText = 'Learn More',
  linkHref = '/about',
}: AnnouncementBarProps) {
  return (
    <div className="w-full bg-primary py-2 px-4 text-center text-xs font-medium text-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-2">
        <span>{message}</span>
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="underline underline-offset-2 hover:opacity-90 transition-opacity"
          >
            {linkText} →
          </Link>
        )}
      </div>
    </div>
  );
}
