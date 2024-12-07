import React from 'react';
import { Rocket } from 'lucide-react';

interface PlayerProps {
  position: number;
  isThrusting: boolean;
}

export function Player({ position, isThrusting }: PlayerProps) {
  return (
    <div
      className="absolute left-8 transition-transform"
      style={{ bottom: `${position}px` }}
    >
      <div className="relative">
        <Rocket className="w-8 h-8 text-white transform -rotate-45" />
        {isThrusting && (
          <div className="absolute -bottom-2 right-0 w-4 h-4">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-pulse transform rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
}