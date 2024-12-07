import React from 'react';

interface ObstacleProps {
  x: number;
  y: number;
}

export function Obstacle({ x, y }: ObstacleProps) {
  return (
    <div
      className="absolute w-6 h-6"
      style={{ 
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className="w-full h-full relative animate-spin-slow">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-lg" />
      </div>
    </div>
  );
}