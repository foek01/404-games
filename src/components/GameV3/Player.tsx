import React from 'react';
import { Ship, Zap } from 'lucide-react';

interface PlayerProps {
  position: number;
  isColliding?: boolean;
}

export function Player({ position, isColliding }: PlayerProps) {
  return (
    <div
      className="absolute bottom-4 transition-all duration-150"
      style={{ left: `${position}px` }}
    >
      {isColliding ? (
        <div className="relative animate-explosion">
          <Ship className="w-8 h-8 text-red-500" />
          <Zap className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
      ) : (
        <Ship className="w-8 h-8 text-teal-400 drop-shadow-glow" />
      )}
    </div>
  );
}