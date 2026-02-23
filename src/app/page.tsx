
"use client"

import React, { useState, useEffect } from 'react';
import { PoemSection } from '@/components/PoemSection';
import { PenguinGroup } from '@/components/Penguin';

export default function Home() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`
    }));
    setStars(newStars);
  }, []);

  const handleCollect = (letters: string[]) => {
    // La lógica de recolección se mantiene en segundo plano si fuera necesaria,
    // pero la UI ha sido eliminada por petición del usuario.
    console.log("Letras recolectadas:", letters);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 relative overflow-hidden">
      {/* Estrellas de fondo */}
      {stars.map(star => (
        <div 
          key={star.id} 
          className="star" 
          style={{ 
            top: star.top, 
            left: star.left, 
            width: star.size, 
            height: star.size,
            '--duration': star.duration 
          } as React.CSSProperties} 
        />
      ))}

      <PoemSection onCollectLetters={handleCollect} />

      <footer className="relative z-10 mt-auto pb-8 text-center text-muted-foreground text-xs opacity-30">
        <p>© {new Date().getFullYear()}  • Con amorcito y pingüinitos</p>
      </footer>

      <PenguinGroup />
    </main>
  );
}
