'use client';

import * as React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Unhandled Marketplace Exception:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold text-error">System Exception</h1>
        <p className="mt-2 text-sm text-outline">
          A critical error occurred while rendering the application.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-primary px-6 py-2.5 font-medium text-white shadow-sm"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
