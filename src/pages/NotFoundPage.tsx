import React from 'react';
import { Game } from '../components/Game/Game';
import { GameV2 } from '../components/GameV2/GameV2';
import { GameV3 } from '../components/GameV3/GameV3';
import { GameV4 } from '../components/GameV4/GameV4';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  const path = window.location.pathname;
  const isSpace = path === '/space';
  const isAsteroid = path === '/asteroid';
  const isGrape = path === '/grape';
  const isSnake = path === '/snake';

  if (!isSpace && !isAsteroid && !isGrape && !isSnake) {
    window.location.href = '/grape';
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-purple-800">404: Page Not Found</h1>
        <p className="text-center text-gray-600 mb-8">
          {isAsteroid
            ? "Oops! You've drifted into an asteroid field! Can you dodge the incoming rocks?"
            : isSnake
            ? "Oops! This page has been eaten by a snake! Help it grow by collecting the red dots!"
            : isSpace
            ? "Oops! Looks like this spaceship got lost in the cosmos. Help guide it back home!"
            : "Oops! The page you're looking for has gone grape-picking. While you're here, why not play a quick game?"
          }
        </p>
        
        <div className="mb-8">
          {isAsteroid ? <GameV3 /> : isSpace ? <GameV2 /> : isSnake ? <GameV4 /> : <Game />}
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p className="mb-4">
            {isAsteroid
              ? "Use LEFT/RIGHT arrow keys or tap sides to move!"
              : isSnake
              ? "Use arrow keys to control the snake!"
              : isSpace
              ? "Press SPACE or click/tap to thrust the spaceship up!"
              : "Press SPACE or click/tap to make the grape jump!"
            }
          </p>
          <div className="space-x-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Return Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}