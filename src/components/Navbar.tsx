import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#334155] bg-[#1e293b]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-[70px] items-center justify-between px-10">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-extrabold tracking-tighter text-[#22d3ee]">
            WZZSTORE
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94a3b8]">
            <a href="/" className="text-[#22d3ee] uppercase tracking-wider">Beranda</a>
            <a href="/track" className="hover:text-[#f8fafc] transition-colors uppercase tracking-wider">Lacak Pesanan</a>
            <a href="/calc" className="hover:text-[#f8fafc] transition-colors uppercase tracking-wider">Kalkulator ML</a>
            <a href="/contact" className="hover:text-[#f8fafc] transition-colors uppercase tracking-wider">Hubungi Kami</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
            <Input
              type="search"
              placeholder="Cari game atau voucher..."
              className="pl-10 bg-[#0f172a] border-[#334155] text-[#94a3b8] text-xs h-9 focus-visible:ring-[#22d3ee]"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#334155]">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#334155]">
            <Menu className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex bg-[#22d3ee] hover:bg-[#0891b2] text-[#0f172a] font-bold rounded-lg px-6 h-10">
            Masuk
          </Button>
        </div>
      </div>
    </nav>
  );
}
