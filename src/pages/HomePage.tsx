import React from 'react';
import { Grape, Rocket, Ship, Wand2 } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-indigo-900">
          404 Game Collection
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Turn those frustrating 404 moments into fun gaming experiences!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GameCard
            href="/grape"
            icon={<Grape className="w-12 h-12 text-purple-500" />}
            title="Grape Jump"
            description="Help the grape bounce over obstacles in this classic platformer."
            controls="SPACE / Click to jump"
          />
          <GameCard
            href="/space"
            icon={<Rocket className="w-12 h-12 text-indigo-500" />}
            title="Space Thrust"
            description="Navigate your spaceship through the cosmic obstacles."
            controls="SPACE / Click to thrust"
          />
          <GameCard
            href="/asteroid"
            icon={<Ship className="w-12 h-12 text-teal-500" />}
            title="Asteroid Dodge"
            description="Dodge falling asteroids in this intense arcade game."
            controls="LEFT/RIGHT arrows"
          />
          <GameCard
            href="/snake"
            icon={<Wand2 className="w-12 h-12 text-emerald-500" />}
            title="404 Snake"
            description="Guide the snake through the grid collecting points."
            controls="LEFT/RIGHT arrows"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">About This Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These games were created to make 404 error pages more enjoyable. Feel free to use them
            in your own projects! Each game includes an optional email collection feature for
            marketing purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

interface GameCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  controls: string;
}

function GameCard({ href, icon, title, description, controls }: GameCardProps) {
  return (
    <a
      href={href}
      className="block bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-gradient-to-b from-indigo-50 to-purple-50 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          <span className="font-medium">Controls:</span> {controls}
        </div>
      </div>
    </a>
  );
}