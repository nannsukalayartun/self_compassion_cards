import React, { useState } from 'react';
import sampleCards from './sampleCards';
import FloatingAnimations from './FloatingAnimations';

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const themes = Array.from({ length: 25 }, (_, i) => `Theme ${i + 1}`);

  const handleThemeClick = () => {
    const randomCard =
      sampleCards[Math.floor(Math.random() * sampleCards.length)];
    setSelectedCard(randomCard);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Music (soft, loop) */}
      <audio autoPlay loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/15/audio_8bdc4a2a6f.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Decorations */}
      <FloatingAnimations />

      <h1 className="text-4xl font-bold mb-8 text-pink-600 drop-shadow-lg z-10">
        🌸 Self-Compassion Box 🌸
      </h1>

      {/* Themes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 z-10">
        {themes.map((theme, index) => (
          <button
            key={index}
            onClick={handleThemeClick}
            className="w-28 h-28 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition flex items-center justify-center text-sm font-semibold text-gray-700"
          >
            {theme}
          </button>
        ))}
      </div>

      {/* Card Popup */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full relative text-center">
            <img
              src={selectedCard.image}
              alt="Card"
              className="w-full h-48 object-cover rounded-xl mb-4"
              draggable="false"
            />
            <p className="text-gray-700 text-lg font-medium">
              {selectedCard.text}
            </p>
            <button
              onClick={() => setSelectedCard(null)}
              className="mt-4 px-4 py-2 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
