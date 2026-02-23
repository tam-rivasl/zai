"use client"

import React from 'react';

export function Penguin() {
  return (
    <div className="fixed bottom-12 left-0 z-50 animate-walk pointer-events-none opacity-80 lg:opacity-100">
      <div className="relative w-8 h-8">
        {/* Cabeza */}
        <div className="absolute w-1 h-1 bg-black" style={{ top: '4px', left: '8px' }}></div>
        <div className="absolute w-1 h-1 bg-black" style={{ top: '4px', left: '12px' }}></div>
        <div className="absolute w-1 h-1 bg-black" style={{ top: '4px', left: '16px' }}></div>

        <div className="absolute w-1 h-1 bg-black" style={{ top: '8px', left: '4px' }}></div>
        <div className="absolute w-1 h-1 bg-white" style={{ top: '8px', left: '8px' }}></div>
        <div className="absolute w-1 h-1 bg-white" style={{ top: '8px', left: '12px' }}></div>
        <div className="absolute w-1 h-1 bg-black" style={{ top: '8px', left: '16px' }}></div>

        <div className="absolute w-1 h-1 bg-black" style={{ top: '12px', left: '4px' }}></div>
        <div className="absolute w-1 h-1 bg-white" style={{ top: '12px', left: '8px' }}></div>
        <div className="absolute w-1 h-1 bg-white" style={{ top: '12px', left: '12px' }}></div>
        <div className="absolute w-1 h-1 bg-black" style={{ top: '12px', left: '16px' }}></div>

        {/* Cuerpo */}
        <div className="absolute w-1 h-1 bg-black" style={{ top: '16px', left: '8px' }}></div>
        <div className="absolute w-1 h-1 bg-white" style={{ top: '16px', left: '12px' }}></div>

        {/* Patas */}
        <div className="absolute w-1 h-1 bg-orange-500" style={{ top: '20px', left: '8px' }}></div>
        <div className="absolute w-1 h-1 bg-orange-500" style={{ top: '20px', left: '12px' }}></div>
      </div>
    </div>
  );
}
