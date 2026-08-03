import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-black text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-foreground">Page Not Found</h2>
      <p className="mt-2 max-w-md text-sm text-on-surface-variant">
        The marketplace page or item you are looking for might have been moved or does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
      >
        Return to Marketplace
      </Link>
    </div>
  );
}
