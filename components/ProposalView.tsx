
import React, { useState } from 'react';

interface ProposalViewProps {
  noCount: number;
  phrases: string[];
  onYesClick: () => void;
  onNoClick: () => void;
}

export const ProposalView: React.FC<ProposalViewProps> = ({ noCount, phrases, onYesClick, onNoClick }) => {
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  const handleNoHover = () => {
    const newTop = Math.random() * 80 + 10;
    const newLeft = Math.random() * 80 + 10;
    setButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
    onNoClick();
  };

  const getYesButtonText = () => 'Sim';
  const yesButtonSize = 20 + noCount * 8;
  const yesButtonFontSize = 1 + noCount * 0.2;

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
      <img
        src="https://media1.tenor.com/m/gUiu1zyxfzYAAAAC/bear-kiss-bear-kisses.gif"
        alt="Cute bears kissing"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg mb-8"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-8 animate-pulse">
        Quer namorar comigo? 💖
      </h1>
      <div className="relative w-full h-48 flex items-center justify-center">
        <button
          onClick={onYesClick}
          style={{ width: `${yesButtonSize}px`, height: `${yesButtonSize}px`, fontSize: `${yesButtonFontSize}rem` }}
          className="absolute bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-xl"
        >
          {getYesButtonText()}
        </button>
        <button
          onMouseEnter={handleNoHover}
          onClick={handleNoHover} // For mobile users
          style={{ top: buttonPosition.top, left: buttonPosition.left, transform: 'translate(-50%, -50%)' }}
          className="absolute bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-linear shadow-lg"
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </button>
      </div>
    </div>
  );
};
