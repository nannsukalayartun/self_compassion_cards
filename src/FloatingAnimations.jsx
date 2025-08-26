import React from 'react';

export default function FloatingAnimations() {
  const items = Array.from({ length: 16 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, idx) => {
        const size = 20 + Math.floor(Math.random() * 70);
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 15;
        const shapes = ['🌸','🫧','✨','🌼'];
        const emoji = shapes[idx % shapes.length];
        return (
          <div
            key={idx}
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              bottom: `-${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: 'translateY(0)'
            }}
            className="absolute flex items-center justify-center text-xl animate-float"
            aria-hidden="true"
          >
            <span style={{fontSize: Math.max(12, size/2)}}>{emoji}</span>
          </div>
        );
      })}
    </div>
  );
}
