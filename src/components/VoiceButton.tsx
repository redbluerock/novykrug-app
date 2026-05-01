'use client';
import { useState } from 'react';

export default function VoiceButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVoice = () => {
    setIsPlaying(!isPlaying);
    // В будущем здесь будет логика воспроизведения аудио:
    // const audio = new Audio('/greeting.mp3');
    // if (!isPlaying) audio.play(); else audio.pause();
  };

  return (
    <button 
      onClick={toggleVoice}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 border ${
        isPlaying 
        ? 'bg-blue-600 text-white border-blue-500 scale-105' 
        : 'bg-gray-900 text-white border-gray-800 hover:bg-gray-800 hover:scale-105'
      }`}
    >
      {isPlaying ? (
        <div className="flex gap-1 h-5 items-center">
          <div className="w-1 bg-white h-full animate-[bounce_1s_infinite] rounded-full"></div>
          <div className="w-1 bg-white h-3/4 animate-[bounce_1s_infinite_0.2s] rounded-full"></div>
          <div className="w-1 bg-white h-full animate-[bounce_1s_infinite_0.4s] rounded-full"></div>
        </div>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <span className="font-medium whitespace-nowrap">
        {isPlaying ? "Слушаем..." : "Голос автора"}
      </span>
    </button>
  );
}
