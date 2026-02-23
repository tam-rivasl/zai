"use client"

import React from 'react';
import { Trash2, Bookmark, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SavedVersesProps {
  verses: string[];
  onRemove: (index: number) => void;
}

export function SavedVerses({ verses, onRemove }: SavedVersesProps) {
  if (verses.length === 0) return null;

  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-24">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <Bookmark size={20} />
          <h2 className="text-xl font-medium">Mis Versos Guardados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {verses.map((verse, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-xl group relative hover:border-primary/30 transition-colors"
            >
              <Quote size={24} className="text-primary/20 absolute top-4 left-4" />
              <p className="text-base font-light italic leading-relaxed pl-6 pr-6">
                {verse}
              </p>
              <button
                onClick={() => onRemove(index)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
