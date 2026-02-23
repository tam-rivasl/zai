
"use client"

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const poemLines = [
  { text: "Cando el alama pese y duela vivir, yo estaré ahí", letters: ["U"] },
  { text: "Si la inercia frenéica del dolor no sacia la búsqueda insaciable de dopamina", letters: ["T"] },
  { text: "No te preocups yo te la brindo, pero acompañada de calma", letters: ["E"] },
  { text: "", isSpacer: true },
  { text: "Aunque mi léxico sea básico y seas un idioma antiguo", letters: [] },
  { text: "te hare ver cuanto te uiero al tacto con Gentileza, A Un estoy a tiemo para recorer tu universo", letters: ["Q", "P", "R"] },
  { text: "y si lo manaco te despoja de la incertidmbre y el luto, ahí estaré corriendo tus pastizales en llamas", letters: ["I", "U"] },
  { text: "no soy buena con las palabras, consejos de vida o motivacón, pro seré el mejor amigo del hombre", letters: ["I", "E"] },
  { text: "no necesto nada mas que tu presecia para que me tengas tda la vida y si algo no cuerda dale sinificado uniéndolas", letters: ["I", "N", "O", "G"] }
];

interface PoemSectionProps {
  onCollectLetters: (letters: string[]) => void;
}

export function PoemSection({ onCollectLetters }: PoemSectionProps) {
  const [clickedLines, setClickedLines] = useState<number[]>([]);

  const handleLineClick = (index: number, letters: string[]) => {
    if (!letters || letters.length === 0 || clickedLines.includes(index)) return;
    
    setClickedLines(prev => [...prev, index]);
    onCollectLetters(letters);
  };

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 text-center">
      <div className="glass-panel p-8 md:p-16 rounded-[2.5rem] overflow-hidden relative">
        <div className="space-y-4 md:space-y-6">
          {poemLines.map((line, index) => {
            const isClickable = line.letters && line.letters.length > 0 && !clickedLines.includes(index);
            
            return line.isSpacer ? (
              <div key={index} className="h-8" />
            ) : (
              <div 
                key={index} 
                className={cn(
                  "poem-line group",
                  clickedLines.includes(index) && "line-glow text-primary font-medium",
                  isClickable && "clickable cursor-pointer hover:scale-[1.01]"
                )}
                onClick={() => handleLineClick(index, line.letters || [])}
              >
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  {line.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
