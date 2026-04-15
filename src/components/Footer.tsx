import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="text-2xl font-bold tracking-tighter text-white">
              WZZ<span className="text-blue-500">STORE</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed">
              WZZSTORE adalah platform top up game termurah, tercepat, dan terpercaya di Indonesia. 
              Kami menyediakan layanan top up untuk berbagai game populer dengan proses otomatis 24 jam.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600 transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Menu Cepat</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lacak Pesanan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Daftar Harga</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Game Populer</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Mobile Legends</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Fire</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PUBG Mobile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Genshin Impact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>Email: support@wzzstore.com</li>
              <li>WhatsApp: +62 812 3456 7890</li>
              <li>Jam Operasional: 24 Jam</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2024 WZZSTORE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
