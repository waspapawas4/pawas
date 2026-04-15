export interface Game {
  id: string;
  name: string;
  publisher: string;
  image: string;
  category: 'mobile' | 'pc' | 'console' | 'voucher';
}

export const games: Game[] = [
  {
    id: 'mlbb',
    name: 'Mobile Legends',
    publisher: 'Moonton',
    image: 'https://www.exitlag.com/blog/wp-content/uploads/2025/01/MLBB_-everything-you-need-to-know-about-heroes-and-gameplay.webp',
    category: 'mobile',
  },
  {
    id: 'ff',
    name: 'Free Fire',
    publisher: 'Garena',
    image: 'https://picsum.photos/seed/freefire/400/600',
    category: 'mobile',
  },
  {
    id: 'pubgm',
    name: 'PUBG Mobile',
    publisher: 'Tencent Games',
    image: 'https://picsum.photos/seed/pubgm/400/600',
    category: 'mobile',
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    publisher: 'HoYoverse',
    image: 'https://picsum.photos/seed/genshin/400/600',
    category: 'mobile',
  },
  {
    id: 'valorant',
    name: 'Valorant',
    publisher: 'Riot Games',
    image: 'https://picsum.photos/seed/valorant/400/600',
    category: 'pc',
  },
  {
    id: 'steam',
    name: 'Steam Wallet',
    publisher: 'Valve',
    image: 'https://picsum.photos/seed/steam/400/600',
    category: 'voucher',
  },
  {
    id: 'roblox',
    name: 'Roblox',
    publisher: 'Roblox Corporation',
    image: 'https://picsum.photos/seed/roblox/400/600',
    category: 'pc',
  },
  {
    id: 'codm',
    name: 'COD Mobile',
    publisher: 'Activision',
    image: 'https://picsum.photos/seed/codm/400/600',
    category: 'mobile',
  },
];
