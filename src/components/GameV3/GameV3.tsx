import React from 'react';
import { Player } from './Player';
import { Obstacle } from './Obstacle';
import { GameOver } from './GameOver';
import { useGameLogic } from './useGameLogic';

export function GameV3() {
  const {
    playerX,
    obstacles,
    score,
    gameOver,
    showGameOver,
    isColliding,
    attempts,
    moveLeft,
    moveRight,
    reset
  } = useGameLogic();

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto h-48 border-4 border-teal-600 cursor-pointer bg-gradient-to-b from-teal-900 to-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      onTouchStart={(e) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        if (x < rect.width / 2) {
          moveLeft();
        } else {
          moveRight();
        }
      }}
    >
      <div className="absolute top-4 right-4 text-lg font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-fade-in text-white">
        Score: {score}
      </div>
      
      <Player position={playerX} isColliding={isColliding} />
      
      {obstacles.map((obstacle, index) => (
        <Obstacle key={index} x={obstacle.x} y={obstacle.y} />
      ))}
      
      {showGameOver && <GameOver score={score} onRestart={reset} attempts={attempts} />}
      
      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}