import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import TopUpDialog from './components/TopUpDialog';
import { games, Game } from './data/games';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Flame, Gamepad2, Smartphone, Monitor, Ticket } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredGames = games.filter((game) => {
    const matchesTab = activeTab === 'all' || game.category === activeTab;
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] selection:bg-[#22d3ee]/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="container mx-auto px-10 py-8">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-[#f8fafc] whitespace-nowrap">Populer Sekarang</h2>
            <div className="flex-1 h-[1px] bg-[#334155]" />
            
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#94a3b8]" />
              <Input
                placeholder="Cari game..."
                className="pl-9 bg-[#0f172a] border-[#334155] rounded-lg h-9 text-xs focus-visible:ring-[#22d3ee]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="bg-transparent border-b border-[#334155] rounded-none p-0 h-10 w-full justify-start gap-8">
              <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#22d3ee] data-[state=active]:bg-transparent data-[state=active]:text-[#22d3ee] px-0 h-10 text-xs font-bold uppercase tracking-widest">
                Semua
              </TabsTrigger>
              <TabsTrigger value="mobile" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#22d3ee] data-[state=active]:bg-transparent data-[state=active]:text-[#22d3ee] px-0 h-10 text-xs font-bold uppercase tracking-widest">
                Mobile
              </TabsTrigger>
              <TabsTrigger value="pc" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#22d3ee] data-[state=active]:bg-transparent data-[state=active]:text-[#22d3ee] px-0 h-10 text-xs font-bold uppercase tracking-widest">
                PC
              </TabsTrigger>
              <TabsTrigger value="voucher" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#22d3ee] data-[state=active]:bg-transparent data-[state=active]:text-[#22d3ee] px-0 h-10 text-xs font-bold uppercase tracking-widest">
                Voucher
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {filteredGames.map((game) => (
                <div key={game.id} onClick={() => handleGameClick(game)}>
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-[#94a3b8] text-sm">Game tidak ditemukan. Coba kata kunci lain.</p>
            </div>
          )}
        </section>

        {/* Features Strip */}
        <section className="mt-8 py-6 px-10 bg-[#1e293b] border-t border-[#334155] flex justify-around">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full" />
            <span className="text-[13px] font-medium text-[#94a3b8]">Layanan 24/7 Nonstop</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full" />
            <span className="text-[13px] font-medium text-[#94a3b8]">Pembayaran Otomatis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full" />
            <span className="text-[13px] font-medium text-[#94a3b8]">Terpercaya di Indonesia</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full" />
            <span className="text-[13px] font-medium text-[#94a3b8]">Legal & Aman 100%</span>
          </div>
        </section>
      </main>

      <TopUpDialog
        game={selectedGame}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      <Footer />
    </div>
  );
}


