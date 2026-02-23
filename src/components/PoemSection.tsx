"use client"

import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const poemLines = [
  "Cuando el alma pese",
  "y duela vivir, yo estaré ahí.",
  "Si la inercia frenética del dolor",
  "no sacia la búsqueda insaciable de dopamina,",
  "no te preocupes, yo te la brindo,",
  "pero acompañada de calma.",
  "Aunque mi léxico sea básico y seas un idioma antiguo,",
  "te haré ver cuánto te quiero al tacto con gentileza.",
  "Aún estoy a tiempo para recorrer tu universo.",
  "Y si lo maniaco te despoja de la incertidumbre y el luto,",
  "ahí estaré corriendo tus pastizales en llamas.",
  "No soy buena con las palabras, pero seré el mejor amigo del hombre.",
  "No necesito nada más que tu presencia para que me tengas toda la vida.",
  "Y si sientes que algo anda mal, la búsqueda siempre tendrá respuesta."
];

interface PoemSectionProps {
  onSaveLine: (line: string) => void;
}

export function PoemSection({ onSaveLine }: PoemSectionProps) {
  return (
    <section className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 lg:py-24 text-center">
      <div className="glass-panel p-8 md:p-12 rounded-2xl">
        <div className="space-y-4">
          {poemLines.map((line, index) => (
            <div key={index} className="group relative">
              <p className="text-lg md:text-xl font-light poem-line leading-relaxed">
                {line}
              </p>
              <button
                onClick={() => onSaveLine(line)}
                className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:text-white"
                title="Guardar verso"
              >
                <Heart size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
