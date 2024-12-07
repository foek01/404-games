import React from 'react';

interface ObstacleProps {
  position: number;
}

export function Obstacle({ position }: ObstacleProps) {
  return (
    <div
      className="absolute bottom-0 w-8 h-16"
      style={{ left: `${position}px` }}
    >
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-orange-400 rounded-lg animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-300/30 rounded-lg" />
      </div>
    </div>
  );
}