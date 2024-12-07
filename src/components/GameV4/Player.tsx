import React from 'react';
import { Car } from 'lucide-react';

interface PlayerProps {
  position: number;
  isColliding?: boolean;
}

export function Player({ position, isColliding }: PlayerProps) {
  return (
    <div
      className="absolute bottom-8 transition-all duration-150"
      style={{ left: `${position}px` }}
    >
      {isColliding ? (
        <div className="relative animate-explosion">
          <Car className="w-12 h-12 text-red-500 transform rotate-90" />
          <div className="absolute inset-0 animate-pulse bg-orange-500/50 rounded-full" />
        </div>
      ) : (
        <Car className="w-12 h-12 text-red-500 transform rotate-90 drop-shadow-glow-red" />
      )}
    </div>
  );
}