import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#0f172a] py-10">
      <div className="container relative mx-auto px-10">
        <div className="flex bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155] rounded-2xl overflow-hidden h-[240px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-3 text-[12px] font-bold tracking-widest text-[#22d3ee] uppercase bg-[#22d3ee]/10 rounded-full">
                PROMO MINGGU INI
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#f8fafc] mb-2"
            >
              Weekly Diamond Pass
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#94a3b8] text-base mb-6"
            >
              Mulai dari Rp 26.500. Proses instan 1 detik otomatis!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button className="bg-[#22d3ee] hover:bg-[#0891b2] text-[#0f172a] h-10 px-6 rounded-lg font-bold text-sm">
                Top Up Sekarang
              </Button>
            </motion.div>
          </div>
          
          <div className="hidden md:flex w-[400px] bg-gradient-to-br from-[#22d3ee] to-[#0891b2] opacity-20 relative items-center justify-center">
            <div className="text-[120px] font-black text-white select-none">WZZ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
