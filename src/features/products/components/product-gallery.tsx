'use client';

import * as React from 'react';
import Image from 'next/image';
import { RotateCw, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Hero */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm group">
        <Image
          src={images[selectedIndex] || images[0]}
          alt={`${title} view ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <Button variant="outline" size="sm" className="glass-panel gap-1.5 text-xs font-semibold rounded-full shadow-md">
            <RotateCw className="h-4 w-4 text-primary" /> 360° View
          </Button>
          <Button variant="outline" size="sm" className="glass-panel gap-1.5 text-xs font-semibold rounded-full shadow-md">
            <PlayCircle className="h-4 w-4 text-primary" /> Video
          </Button>
        </div>
      </div>

      {/* Thumbnail Bar */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              selectedIndex === idx
                ? 'border-primary shadow-md'
                : 'border-outline-variant/30 hover:border-outline'
            }`}
            aria-label={`View product image ${idx + 1}`}
          >
            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
