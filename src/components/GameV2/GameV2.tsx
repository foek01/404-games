import React from 'react';
import { Player } from './Player';
import { Obstacle } from './Obstacle';
import { GameOver } from './GameOver';
import { useGameLogic } from './useGameLogic';

export function GameV2() {
  const {
    playerPos,
    obstaclePos,
    isThrusting,
    score,
    gameOver,
    attempts,
    thrust,
    reset
  } = useGameLogic();

  return (
    <div
      className="relative w-full h-48 border-4 border-indigo-600 cursor-pointer bg-gradient-to-b from-indigo-900 to-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      onClick={thrust}
    >
      <div className="absolute top-4 right-4 text-lg font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-fade-in text-white">
        Score: {score}
      </div>
      <Player position={playerPos} isThrusting={isThrusting} />
      <Obstacle position={obstaclePos} />
      {gameOver && <GameOver score={score} onRestart={reset} attempts={attempts} />}
      
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}