import React from 'react';
import { Player } from './Player';
import { Obstacle } from './Obstacle';
import { GameOver } from './GameOver';
import { useGameLogic } from './useGameLogic';

export function Game() {
  const {
    playerPos,
    obstaclePos,
    isJumping,
    score,
    gameOver,
    attempts,
    jump,
    reset
  } = useGameLogic();

  return (
    <div
      className="relative w-full h-48 border-b-4 border-purple-600 cursor-pointer bg-gradient-to-b from-purple-50/50 to-transparent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      onClick={jump}
    >
      <div className="absolute top-4 right-4 text-lg font-bold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-fade-in">
        Score: {score}
      </div>
      <Player position={playerPos} isJumping={isJumping} />
      <Obstacle position={obstaclePos} />
      {gameOver && <GameOver score={score} onRestart={reset} attempts={attempts} />}
    </div>
  );
}