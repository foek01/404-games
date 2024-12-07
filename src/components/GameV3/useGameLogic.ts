import { useState, useEffect, useCallback } from 'react';

interface Obstacle {
  x: number;
  y: number;
}

const PLAYER_SPEED = 20;
const OBSTACLE_SPEED = 3;
const SPAWN_INTERVAL = 800;
const PLAYER_WIDTH = 32;
const OBSTACLE_WIDTH = 24;
const GAME_HEIGHT = 192; // Height of game area (48px * 4)
const SCORE_INCREMENT = 10;

export function useGameLogic() {
  const [playerX, setPlayerX] = useState(window.innerWidth / 2);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isColliding, setIsColliding] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const moveLeft = useCallback(() => {
    if (!gameOver) {
      setPlayerX(x => Math.max(0, x - PLAYER_SPEED));
    }
  }, [gameOver]);

  const moveRight = useCallback(() => {
    if (!gameOver) {
      setPlayerX(x => Math.min(window.innerWidth - PLAYER_WIDTH, x + PLAYER_SPEED));
    }
  }, [gameOver]);

  const reset = useCallback(() => {
    setPlayerX(window.innerWidth / 2);
    setObstacles([]);
    setScore(0);
    setGameOver(false);
    setShowGameOver(false);
    setIsColliding(false);
    setAttempts(prev => prev + 1);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') moveLeft();
      if (e.key === 'ArrowRight') moveRight();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveLeft, moveRight]);

  // Spawn obstacles
  useEffect(() => {
    if (gameOver) return;

    const spawnObstacle = () => {
      const gameWidth = Math.min(window.innerWidth, 768);
      // Spawn 2-3 asteroids at once
      const numAsteroids = Math.floor(Math.random() * 2) + 2;
      const newAsteroids = Array.from({ length: numAsteroids }, () => ({
        x: Math.random() * (gameWidth - OBSTACLE_WIDTH),
        y: -OBSTACLE_WIDTH - Math.random() * 50 // Stagger vertical positions
      }));
      setObstacles(prev => [...prev, ...newAsteroids]);
    };

    const spawnInterval = setInterval(spawnObstacle, SPAWN_INTERVAL);
    return () => clearInterval(spawnInterval);
  }, [gameOver]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setObstacles(prev => {
        const newObstacles = prev
          .map(obstacle => ({
            ...obstacle,
            y: obstacle.y + OBSTACLE_SPEED
          }))
          .filter(obstacle => obstacle.y < GAME_HEIGHT);

        // Check collisions
        const playerHitbox = {
          left: playerX,
          right: playerX + PLAYER_WIDTH,
          top: GAME_HEIGHT - 48,
          bottom: GAME_HEIGHT - 16
        };

        const collision = newObstacles.some(obstacle => {
          const obstacleHitbox = {
            left: obstacle.x,
            right: obstacle.x + OBSTACLE_WIDTH,
            top: obstacle.y,
            bottom: obstacle.y + OBSTACLE_WIDTH
          };

          return !(
            playerHitbox.left > obstacleHitbox.right ||
            playerHitbox.right < obstacleHitbox.left ||
            playerHitbox.top > obstacleHitbox.bottom ||
            playerHitbox.bottom < obstacleHitbox.top
          );
        });

        if (collision) {
          setGameOver(true);
          setIsColliding(true);
          // Delay showing the game over modal
          setTimeout(() => setShowGameOver(true), 1000);
        }

        return newObstacles;
      });

      // Score for dodged asteroids
      setObstacles(prev => {
        const passedObstacles = prev.filter(o => o.y >= GAME_HEIGHT);
        if (passedObstacles.length > 0 && !gameOver) {
          setScore(s => s + (passedObstacles.length * SCORE_INCREMENT));
        }
        return prev.filter(o => o.y < GAME_HEIGHT);
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [gameOver, playerX]);

  return {
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
  };
}