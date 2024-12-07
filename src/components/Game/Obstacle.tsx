import React from 'react';

interface ObstacleProps {
  position: number;
}

export function Obstacle({ position }: ObstacleProps) {
  return (
    <div
      className="absolute bottom-0 w-4 h-16 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg shadow-lg animate-pulse"
      style={{ left: `${position}px` }}
    />
  );
}