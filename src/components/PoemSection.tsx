"use client"

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const poemLines = [
  { text: "Cuando el alma Pese y duela vivir, yo estaré ahí", letters: ["E"] },
  { text: "Si la inercia frenética del dolor no sacia la búsqueda insaciable de dopamina", letters: ["Q", "U"] },
  { text: "No te preocupes yo te la brindo, pero acompañada de calma", letters: ["I"] },
  { text: "", isSpacer: true },
  { text: "Aunque mi léxico sea básico y seas un idioma antiguo", letters: ["E"] },
  { text: "te haré ver cuánto e quiero al tacto con gentileza, Aún estoy a tiempo para recorrer tu universo", letters: ["R", "O"] },
  { text: "y si lo maniaco te despoja de la incertdumbre y el luto, ahí estaré corriendo tus pastizales en llamas", letters: ["P", "I"] },
  { text: "no soy buena con las palabras, consejos de vida o motivación, pero sere el mejor amigo del hombre", letters: ["N", "G"] },
  { text: "no necesito nada mas que tu presencia para que me tengas oda la vida.", letters: ["U", "I"] }
];

interface PoemSectionProps {
  onCollectLetters: (letters: string[]) => void;
}

export function PoemSection({ onCollectLetters }: PoemSectionProps) {
  const [clickedLines, setClickedLines] = useState<number[]>([]);

  const handleLineClick = (index: number, letters: string[]) => {
    if (clickedLines.includes(index) || !letters.length) return;
    
    setClickedLines(prev => [...prev, index]);
    onCollectLetters(letters);
  };

  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 text-center">
      <div className="glass-panel p-8 md:p-16 rounded-[2.5rem] overflow-hidden relative">
        <div className="space-y-4 md:space-y-6">
          {poemLines.map((line, index) => (
            line.isSpacer ? (
              <div key={index} className="h-8" />
            ) : (
              <div 
                key={index} 
                className={cn(
                  "poem-line group",
                  clickedLines.includes(index) && "line-glow text-primary font-medium"
                )}
                onClick={() => handleLineClick(index, line.letters || [])}
              >
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  {line.text}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}