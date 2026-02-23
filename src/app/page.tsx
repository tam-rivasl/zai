"use client"

import React, { useState, useEffect } from 'react';
import { PoemSection } from '@/components/PoemSection';
import { VerseGenerator } from '@/components/VerseGenerator';
import { SavedVerses } from '@/components/SavedVerses';
import { Penguin } from '@/components/Penguin';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [savedVerses, setSavedVerses] = useState<string[]>([]);
  const { toast } = useToast();

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('alma-lirica-verses');
    if (stored) {
      try {
        setSavedVerses(JSON.parse(stored));
      } catch (e) {
        console.error("Error loading saved verses");
      }
    }
  }, []);

  const saveToStorage = (newVerses: string[]) => {
    setSavedVerses(newVerses);
    localStorage.setItem('alma-lirica-verses', JSON.stringify(newVerses));
  };

  const handleSave = (text: string) => {
    if (savedVerses.includes(text)) {
      toast({
        description: "Este verso ya está en tu colección.",
      });
      return;
    }
    const updated = [text, ...savedVerses];
    saveToStorage(updated);
    toast({
      description: "Verso guardado con éxito.",
    });
  };

  const handleRemove = (index: number) => {
    const updated = savedVerses.filter((_, i) => i !== index);
    saveToStorage(updated);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-12">
      <header className="relative z-10 text-center mb-8 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-2">
          Alma Lírica
        </h1>
        <p className="text-muted-foreground italic max-w-md mx-auto">
          Un refugio digital donde las palabras curan y la tecnología acompaña.
        </p>
      </header>

      <PoemSection onSaveLine={handleSave} />
      
      <VerseGenerator onSaveVerse={handleSave} />

      <SavedVerses verses={savedVerses} onRemove={handleRemove} />

      <footer className="relative z-10 mt-auto py-12 text-center text-muted-foreground text-xs opacity-50">
        <p>© {new Date().getFullYear()} Alma Lírica • Hecho con gentileza</p>
      </footer>

      <Penguin />
      <Toaster />
    </main>
  );
}
