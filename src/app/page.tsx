
"use client"

import React, { useState, useEffect, useRef } from 'react';
import { PoemSection } from '@/components/PoemSection';
import { PenguinGroup } from '@/components/Penguin';
import { cn } from '@/lib/utils';

const TARGET_PHRASE = "TE QUIERO PINGUI";

export default function Home() {
  const [collectedLetters, setCollectedLetters] = useState<string[]>([]);
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);
  const messageRef = useRef<HTMLDivElement>(null);

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
    setCollectedLetters(prev => [...prev, ...letters]);
  };

  const getDisplayLetter = (index: number) => {
    const char = TARGET_PHRASE[index];
    if (char === " ") return " ";
    
    const targetChar = char;
    // Contamos cuántas veces aparece este carácter en el target antes de esta posición para manejar repetidas
    const countInTargetBefore = TARGET_PHRASE.slice(0, index).split("").filter(c => c === targetChar).length;
    const countInCollected = collectedLetters.filter(c => c === targetChar).length;
    
    return countInCollected > countInTargetBefore ? char : "";
  };

  const hasStarted = collectedLetters.length > 0;

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

      {/* Recolector de Mensaje Oculto - Aparece solo al empezar la recolección */}
      <div 
        ref={messageRef}
        className={cn(
          "mt-auto mb-32 z-20 flex flex-col items-center gap-6 transition-all duration-1000",
          hasStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        )}
      >
        <p className="text-muted-foreground text-sm uppercase tracking-widest opacity-50">
          Mensaje Recolectado
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-6">
          {TARGET_PHRASE.split("").map((char, i) => (
            char === " " ? (
              <div key={i} className="w-4 md:w-8" />
            ) : (
              <div 
                key={i} 
                className={cn(
                  "letter-slot",
                  getDisplayLetter(i) && "letter-filled"
                )}
              >
                {getDisplayLetter(i)}
              </div>
            )
          ))}
        </div>
      </div>

      <footer className="relative z-10 mt-auto pb-8 text-center text-muted-foreground text-xs opacity-30">
        <p>© {new Date().getFullYear()} Alma Lírica • Con amor y pingüinos</p>
      </footer>

      <PenguinGroup />
    </main>
  );
}
