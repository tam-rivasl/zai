"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface PenguinProps {
  className?: string;
  delay?: string;
  style?: React.CSSProperties;
}

export function Penguin({ className, delay, style }: PenguinProps) {
  return (
    <div 
      className={cn("fixed bottom-8 z-50 pointer-events-none", className)}
      style={{ ...style, animationDelay: delay }}
    >
      <div className="relative w-12 h-12 animate-jump">
        {/* Cuerpo */}
        <div className="absolute inset-0 bg-black rounded-full shadow-lg"></div>
        {/* Panza */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-7 h-8 bg-white rounded-full"></div>
        {/* Ojos */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-white rounded-full">
          <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
        </div>
        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-full">
          <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
        </div>
        {/* Pico */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 clip-path-triangle rotate-180" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        {/* Aletas */}
        <div className="absolute top-5 -left-2 w-3 h-5 bg-black rounded-full -rotate-45"></div>
        <div className="absolute top-5 -right-2 w-3 h-5 bg-black rounded-full rotate-45"></div>
        {/* Patas */}
        <div className="absolute -bottom-1 left-2 w-3 h-2 bg-orange-600 rounded-full"></div>
        <div className="absolute -bottom-1 right-2 w-3 h-2 bg-orange-600 rounded-full"></div>
      </div>
    </div>
  );
}

export function CollectorPenguin({ startX, startY, endX, endY }: { startX: number; startY: number; endX: number; endY: number }) {
  const dx = endX - startX;
  const dy = endY - startY;

  return (
    <div 
      className="fixed z-[100] pointer-events-none animate-collect"
      style={{ 
        left: startX, 
        top: startY,
        '--target-x': `${dx}px`,
        '--target-y': `${dy}px`
      } as React.CSSProperties}
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-black rounded-full"></div>
        <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-6 bg-white rounded-full"></div>
        <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
      </div>
    </div>
  );
}

export function PenguinGroup() {
  return (
    <>
      <Penguin className="animate-walk-slow" delay="0s" />
      <Penguin className="animate-walk-fast" delay="5s" />
      <Penguin className="animate-walk-slow opacity-60 scale-75" delay="15s" />
    </>
  );
}
