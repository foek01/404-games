import React from 'react';
import { RefreshCw, Home } from 'lucide-react';
import { EmailForm } from '../common/EmailForm';

interface GameOverProps {
  score: number;
  onRestart: () => void;
  attempts: number;
}

export function GameOver({ score, onRestart, attempts }: GameOverProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center transform animate-slide-up">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Game Over!</h2>
        <p className="text-lg mb-4 text-gray-600">Score: <span className="text-purple-600 font-bold">{score}</span></p>
        
        <EmailForm gameType="grape" score={score} className="mb-6" />

        {attempts < 2 ? (
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Play Again
          </button>
        ) : (
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <Home className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            Return Home
          </a>
        )}
      </div>
    </div>
  );
}