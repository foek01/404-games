import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface EmailFormProps {
  gameType: 'grape' | 'space' | 'asteroid';
  score: number;
  className?: string;
}

export function EmailForm({ gameType, score, className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send this to your backend
    console.log('Email submitted:', {
      email,
      gameType,
      score,
      timestamp: new Date().toISOString()
    });

    setSubmitted(true);
    setError('');
  };

  if (submitted) {
    return (
      <div className={`text-center text-white ${className}`}>
        <p className="text-green-500 dark:text-green-400">
          Thanks! Check your email for your discount code.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="text-sm mb-2 text-white">
        Want a discount code? Enter your email:
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg border border-white/20 bg-black/20 text-white placeholder-white/50 backdrop-blur-sm"
        />
        {error && <p className="text-red-300 text-sm">{error}</p>}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors backdrop-blur-sm"
        >
          <Send className="w-4 h-4" />
          Get Discount Code
        </button>
      </form>
    </div>
  );
}