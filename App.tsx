
import React, { useState, useCallback } from 'react';
import { ProposalView } from './components/ProposalView';
import { AcceptedView } from './components/AcceptedView';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [relationshipStartDate, setRelationshipStartDate] = useState<Date | null>(null);

  const phrases = [
    "Não",
    "Tem certeza?",
    "Pensa bem...",
    "Por favorzinho!",
    "Ah, qual é!",
    "Só uma chance!",
    "Clica no sim, vai!",
    "Eu sei que você quer!",
    "Não faz isso comigo...",
    "Coraçãozinho vai quebrar!",
    "Última chance!",
  ];

  const handleNoClick = () => {
    setNoCount((prevCount) => prevCount + 1);
  };

  const handleYesClick = useCallback(() => {
    setIsAccepted(true);
    setRelationshipStartDate(new Date());
  }, []);

  return (
    <div className="bg-pink-100 min-h-screen w-full flex flex-col items-center justify-center p-4">
      {isAccepted ? (
        <AcceptedView 
          startDate={relationshipStartDate}
        />
      ) : (
        <ProposalView
          noCount={noCount}
          phrases={phrases}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
        />
      )}
    </div>
  );
};

export default App;
