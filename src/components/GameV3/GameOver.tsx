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
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <div className="bg-teal-900/80 p-8 rounded-lg shadow-xl text-center transform animate-slide-up border border-teal-500">
        <h2 className="text-2xl font-bold mb-4 text-white">Asteroid Strike!</h2>
        <p className="text-lg mb-4 text-teal-200">Score: <span className="text-white font-bold">{score}</span></p>
        
        <EmailForm gameType="asteroid" score={score} className="mb-6" />

        {attempts < 2 ? (
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>
        ) : (
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <Home className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            Return Home
          </a>
        )}
      </div>
    </div>
  );
}