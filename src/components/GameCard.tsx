import { motion } from 'motion/react';
import { Game } from '@/src/data/games';
import { Card } from '@/components/ui/card';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="group relative overflow-hidden border-[#334155] bg-[#1e293b] hover:border-[#22d3ee] transition-all cursor-pointer rounded-xl p-4 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-[#334155] rounded-[20px] mb-3 flex items-center justify-center font-extrabold text-2xl text-[#22d3ee] shadow-lg overflow-hidden">
          <img
            src={game.image}
            alt={game.name}
            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <h3 className="text-sm font-bold text-[#f8fafc] mb-1 line-clamp-1">
          {game.name}
        </h3>
        <p className="text-[11px] font-medium text-[#94a3b8] uppercase tracking-wider">
          {game.publisher}
        </p>
        
        {game.id === 'mlbb' && (
          <div className="absolute top-2 right-2 bg-[#f43f5e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
            HOT
          </div>
        )}
      </Card>
    </motion.div>
  );
}
