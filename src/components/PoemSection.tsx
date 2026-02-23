"use client"

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const poemLines = [
  { text: "Cuando el alma pese y duela vivi, yo estaré ahí", letters: ["E"] },
  { text: "Si la inerca frenética del dolo no saca la búsqeda insacable de dopamna", letters: ["Q", "U"] },
  { text: "No te precpes yo te la brndo, pero acompañada de calma", letters: ["I"] },
  { text: "", isSpacer: true },
  { text: "Anque mi léxco sea básico y seas un idioma antguo", letters: ["E"] },
  { text: "te haré ver cánto e qiero al tacto con gentleza,", letters: ["R", "O"] },
  { text: "Aún estoy a tempo para recorrer tu nverso", letters: ["P", "I"] },
  { text: "y si lo manaco te despoja de la incertidmbre y el luto, ahí estaré corriendo tus pastizales en llamas", letters: ["N", "G"] },
  { text: "no soy buena con las palabras, consejos de vida o motvación, pero seré el mejor amigo del hombre", letters: ["U"] },
  { text: "no necesito nada más que tu presenca para que me tengas oda la vida.", letters: ["I"] },
  { text: "Y si algo no cuerda dale significado uniendolas", letters: [] }
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
                  clickedLines.includes(index) && "line-glow text-primary font-medium",
                  line.letters && line.letters.length > 0 && !clickedLines.includes(index) && "cursor-pointer hover:scale-[1.01]"
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
