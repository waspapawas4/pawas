import { useState } from 'react';
import { Game } from '@/src/data/games';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, CreditCard, Wallet, Smartphone } from 'lucide-react';

interface TopUpDialogProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const denominations = [
  { id: 1, amount: '86 Diamonds', price: 'Rp 20.000' },
  { id: 2, amount: '172 Diamonds', price: 'Rp 40.000' },
  { id: 3, amount: '257 Diamonds', price: 'Rp 60.000' },
  { id: 4, amount: '344 Diamonds', price: 'Rp 80.000' },
  { id: 5, amount: '429 Diamonds', price: 'Rp 100.000' },
  { id: 6, amount: '514 Diamonds', price: 'Rp 120.000' },
  { id: 7, amount: '706 Diamonds', price: 'Rp 160.000' },
  { id: 8, amount: '1050 Diamonds', price: 'Rp 240.000' },
];

const paymentMethods = [
  { id: 'qris', name: 'QRIS', icon: <CreditCard className="h-4 w-4" /> },
  { id: 'dana', name: 'DANA', icon: <Wallet className="h-4 w-4" /> },
  { id: 'gopay', name: 'GoPay', icon: <Wallet className="h-4 w-4" /> },
  { id: 'shopeepay', name: 'ShopeePay', icon: <Wallet className="h-4 w-4" /> },
  { id: 'telkomsel', name: 'Telkomsel', icon: <Smartphone className="h-4 w-4" /> },
];

export default function TopUpDialog({ game, isOpen, onClose }: TopUpDialogProps) {
  const [selectedDenom, setSelectedDenom] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');

  if (!game) return null;

  const handleOrder = () => {
    alert(`Pesanan untuk ${game.name} berhasil dibuat!\nUser ID: ${userId}\nZone ID: ${zoneId}\nMetode: ${selectedPayment}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-zinc-950 border-zinc-800 text-zinc-200 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <img src={game.image} alt={game.name} className="h-10 w-10 rounded-lg object-cover" referrerPolicy="no-referrer" />
            Top Up {game.name}
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Lengkapi data di bawah ini untuk melakukan top up.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Step 1: User ID */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">1</div>
              <h3 className="font-bold text-white">Masukkan User ID</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userId" className="text-xs text-zinc-400 uppercase tracking-wider">User ID</Label>
                <Input
                  id="userId"
                  placeholder="Contoh: 12345678"
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-blue-500"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zoneId" className="text-xs text-zinc-400 uppercase tracking-wider">Zone ID</Label>
                <Input
                  id="zoneId"
                  placeholder="Contoh: 1234"
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-blue-500"
                  value={zoneId}
                  onChange={(e) => setZoneId(e.target.value)}
                />
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 italic">
              *Untuk menemukan User ID Anda, klik pada ikon karakter Anda di dalam game.
            </p>
          </div>

          {/* Step 2: Denominations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">2</div>
              <h3 className="font-bold text-white">Pilih Nominal</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {denominations.map((denom) => (
                <button
                  key={denom.id}
                  onClick={() => setSelectedDenom(denom.id)}
                  className={`relative p-4 rounded-2xl border text-left transition-all ${
                    selectedDenom === denom.id
                      ? 'border-blue-600 bg-blue-600/10'
                      : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                  }`}
                >
                  <p className="text-sm font-bold text-white mb-1">{denom.amount}</p>
                  <p className="text-xs text-blue-400 font-medium">{denom.price}</p>
                  {selectedDenom === denom.id && (
                    <CheckCircle2 className="absolute top-2 right-2 h-4 w-4 text-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Payment */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">3</div>
              <h3 className="font-bold text-white">Pilih Pembayaran</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    selectedPayment === method.id
                      ? 'border-blue-600 bg-blue-600/10'
                      : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-800 rounded-lg text-blue-400">
                      {method.icon}
                    </div>
                    <span className="text-sm font-bold text-white">{method.name}</span>
                  </div>
                  {selectedPayment === method.id && (
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Button
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl"
            disabled={!selectedDenom || !selectedPayment || !userId}
            onClick={handleOrder}
          >
            Beli Sekarang
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
