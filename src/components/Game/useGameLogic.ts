import { useState, useEffect, useCallback } from 'react';

const GRAVITY = 0.6;
const JUMP_FORCE = 12;
const BASE_SPEED = 10;
const SPEED_INCREASE = 0.9; // Speed increase per 10 points

export function useGameLogic() {
  const [playerPos, setPlayerPos] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstaclePos, setObstaclePos] = useState(window.innerWidth);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const jump = useCallback(() => {
    if (!isJumping && !gameOver) {
      setVelocity(JUMP_FORCE);
      setIsJumping(true);
    }
  }, [isJumping, gameOver]);

  const reset = useCallback(() => {
    setPlayerPos(0);
    setVelocity(0);
    setIsJumping(false);
    setObstaclePos(window.innerWidth);
    setScore(0);
    setGameOver(false);
    setAttempts(prev => prev + 1);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [jump]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setPlayerPos((prev) => {
        const newPos = prev + velocity;
        if (newPos <= 0) {
          setIsJumping(false);
          return 0;
        }
        return newPos;
      });

      setVelocity((prev) => prev - GRAVITY);

      setObstaclePos((prev) => {
        const currentSpeed = BASE_SPEED + (Math.floor(score / 10) * SPEED_INCREASE);
        if (prev <= -50) {
          setScore((s) => s + 1);
          return window.innerWidth;
        }
        return prev - currentSpeed;
      });

      // Collision detection
      if (
        obstaclePos < 60 &&
        obstaclePos > 0 &&
        playerPos < 64
      ) {
        setGameOver(true);
      }
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [gameOver, obstaclePos, playerPos, velocity]);

  return {
    playerPos,
    obstaclePos,
    isJumping,
    score,
    gameOver,
    attempts,
    jump,
    reset
  };
}