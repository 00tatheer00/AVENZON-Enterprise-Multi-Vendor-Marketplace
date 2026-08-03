import * as React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchHeaderProps {
  query?: string;
  totalResults?: number;
  aiSuggestions?: string[];
}

export function SearchHeader({
  query = 'Wireless Headphones',
  totalResults = 248,
  aiSuggestions = ['Over-Ear Noise Cancelling', 'Audiophile Grade', 'Spatial Audio Supported'],
}: SearchHeaderProps) {
  return (
    <div className="w-full border-b border-outline-variant/30 bg-surface-container-low/50 py-8">
      <div className="mx-auto max-w-[1280px] px-6">
        <h1 className="text-3xl font-bold text-foreground">
          Results for <span className="text-primary">&quot;{query}&quot;</span>
        </h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Found {totalResults} premium results matching your criteria.
        </p>

        {aiSuggestions.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Filters:
            </span>
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="rounded-full border border-outline-variant/40 bg-surface-container px-3.5 py-1 text-xs font-medium text-foreground hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
