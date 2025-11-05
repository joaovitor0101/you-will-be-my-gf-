import React, { useState, useEffect } from 'react';

interface AcceptedViewProps {
  startDate: Date | null;
}

const TimeCounter: React.FC<{ startDate: Date }> = ({ startDate }) => {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      <div className="bg-white/50 p-4 rounded-lg shadow-md">
        <div className="text-4xl font-bold text-pink-700">{pad(elapsed.days)}</div>
        <div className="text-sm text-pink-500">Dias</div>
      </div>
      <div className="bg-white/50 p-4 rounded-lg shadow-md">
        <div className="text-4xl font-bold text-pink-700">{pad(elapsed.hours)}</div>
        <div className="text-sm text-pink-500">Horas</div>
      </div>
      <div className="bg-white/50 p-4 rounded-lg shadow-md">
        <div className="text-4xl font-bold text-pink-700">{pad(elapsed.minutes)}</div>
        <div className="text-sm text-pink-500">Minutos</div>
      </div>
      <div className="bg-white/50 p-4 rounded-lg shadow-md">
        <div className="text-4xl font-bold text-pink-700">{pad(elapsed.seconds)}</div>
        <div className="text-sm text-pink-500">Segundos</div>
      </div>
    </div>
  );
};


export const AcceptedView: React.FC<AcceptedViewProps> = ({ startDate }) => {
  return (
    <div className="text-center p-6 bg-white/70 rounded-2xl shadow-2xl max-w-3xl w-full backdrop-blur-sm overflow-y-auto max-h-screen">
       <audio src="https://cdn.pixabay.com/audio/2022/02/14/audio_20b4a42c31.mp3" autoPlay loop />
      
      <div className="flex justify-center items-center gap-4 mb-4">
        <img src="https://media.tenor.com/b_f536p-uJkAAAAC/capybara-i-love-you.gif" alt="Cute capybara with a heart" className="w-20 h-20" />
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600">Agora é pra valer! 💖</h1>
        <img src="https://media.tenor.com/b_f536p-uJkAAAAC/capybara-i-love-you.gif" alt="Cute capybara with a heart" className="w-20 h-20 scale-x-[-1]" />
      </div>

      <div className="text-left text-lg text-gray-700 mb-6 space-y-4 px-4 md:px-8 italic">
        <p>Prometo sempre te fazer a pessoa mais feliz dia após dia. Você entrou na minha vida quando eu menos esperava e hoje faz parte de algo muito maior. O começo de uma história que é totalmente guiada por Deus. ❤️</p>
        <p>Quero sempre que você saiba que pode contar comigo para tudo, que, além de parceiros de vida, sejamos companheiros, melhores amigos, confidentes.</p>
        <p>Você faz meu coração sorrir de uma forma única. Você transforma os dias mais comuns nos dias mais especiais. ✨</p>
        <p>Que eu possa sempre ver teu sorriso, teu olhar, ter teu carinho e parceria.</p>
        <p className="font-bold text-right text-xl text-pink-600">Te amo, Anelise!</p>
      </div>
      
      <p className="text-lg text-gray-700 mb-6 font-semibold">
        Este é o nosso contador do amor, começando agora:
      </p>

      {startDate && <TimeCounter startDate={startDate} />}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">E um presente para celebrar nosso começo:</h2>
        
        <div className="text-left text-md text-gray-600 mb-4 space-y-2 px-4 md:px-8">
            <blockquote className="border-l-4 border-pink-200 pl-4 py-2 italic">
                <p>"⁴ O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. ⁵ Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. ⁶ O amor não se alegra com a injustiça, mas se alegra com a verdade. ⁷ Tudo sofre, tudo crê, tudo espera, tudo suporta."</p>
                <footer className="font-semibold not-italic text-right text-sm mt-2">- 1 Coríntios 13:4-7</footer>
            </blockquote>
        </div>
        <div className="text-left text-md text-gray-600 mb-8 space-y-2 px-4 md:px-8">
             <blockquote className="border-l-4 border-pink-200 pl-4 py-2 italic">
                <p>"Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe."</p>
                <footer className="font-semibold not-italic text-right text-sm mt-2">- Mateus 19:6</footer>
            </blockquote>
        </div>
      </div>
    </div>
  );
};
