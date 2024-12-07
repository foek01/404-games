import React from 'react';

interface TrackProps {
  offset: number;
}

export function Track({ offset }: TrackProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Road markings */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-16 bg-yellow-400/90 mx-auto transition-all duration-150"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
            }}
          />
        ))}
      </div>

      {/* Side barriers */}
      <div className="absolute inset-y-0 left-8 w-4 bg-gradient-to-b from-red-600 to-red-500 shadow-lg border-l-2 border-r-2 border-red-700" />
      <div className="absolute inset-y-0 right-8 w-4 bg-gradient-to-b from-red-600 to-red-500 shadow-lg border-l-2 border-r-2 border-red-700" />
      
      {/* 404 Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-gray-800/10 select-none pointer-events-none">
        404
      </div>
    </div>
  );
}