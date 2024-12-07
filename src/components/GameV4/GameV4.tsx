import React from 'react';
import { useGameLogic } from './useGameLogic';
import { GameOver } from './GameOver';

export function GameV4() {
  const {
    snake,
    food,
    score,
    gameOver,
    showGameOver,
    attempts,
    changeDirection,
    reset,
    gridSize
  } = useGameLogic();

  const cellSize = 16; // pixels
  const gridSizePx = gridSize * cellSize;

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto flex justify-center"
      style={{ height: `${gridSizePx}px` }}
    >
      <div className="relative border-4 border-emerald-600 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-lg overflow-hidden">
        {/* Score */}
        <div className="absolute top-4 right-4 text-lg font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-fade-in text-white z-10">
          Score: {score}
        </div>

        {/* Game grid */}
        <div 
          className="relative"
          style={{ 
            width: `${gridSizePx}px`,
            height: `${gridSizePx}px`
          }}
        >
          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={`${segment.x}-${segment.y}`}
              className={`absolute bg-emerald-400 rounded-sm transition-transform duration-150 ${
                index === 0 ? 'bg-emerald-300' : ''
              }`}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                left: segment.x * cellSize,
                top: segment.y * cellSize,
                boxShadow: index === 0 ? '0 0 8px rgba(52, 211, 153, 0.5)' : 'none'
              }}
            />
          ))}

          {/* Food */}
          <div
            className="absolute bg-red-400 rounded-full animate-pulse"
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              left: food.x * cellSize,
              top: food.y * cellSize,
              boxShadow: '0 0 8px rgba(248, 113, 113, 0.5)'
            }}
          />
        </div>

        {/* Touch controls */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-20 opacity-0">
          <div onTouchStart={() => changeDirection({ x: 0, y: -1 })} />
          <div onTouchStart={() => changeDirection({ x: 0, y: 1 })} />
          <div onTouchStart={() => changeDirection({ x: -1, y: 0 })} />
          <div onTouchStart={() => changeDirection({ x: 1, y: 0 })} />
        </div>

        {/* Game Over Modal */}
        {showGameOver && (
          <GameOver score={score} onRestart={reset} attempts={attempts} />
        )}
      </div>
    </div>
  );
}