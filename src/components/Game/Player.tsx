import React from 'react';
import { Grape } from 'lucide-react';

interface PlayerProps {
  position: number;
  isJumping: boolean;
}

export function Player({ position, isJumping }: PlayerProps) {
  return (
    <div
      className="absolute left-8 transition-transform"
      style={{ bottom: `${position}px` }}
    >
      <Grape className="w-8 h-8 text-purple-600 filter drop-shadow-lg transform hover:scale-110 transition-transform duration-300" />
    </div>
  );
}