import { motion } from "motion/react";
import { Flame, Sparkles } from "lucide-react";
import { MENU_ITEMS } from "../data";

export default function MenuEspetinhos() {
  // Filter skewers out of MENU_ITEMS
  const skewers = MENU_ITEMS.filter((item) => item.category === "Espetinho");

  // Divide skewers by price
  const premiumSkewers = skewers.filter((item) => item.price === 12.00);
  const standardSkewers = skewers.filter((item) => item.price === 10.00);

  return (
    <div className="w-full h-full flex flex-col p-6 overflow-y-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-mono tracking-[0.2em] text-amber-500 uppercase font-bold">
            Página 3 • Espetinhos
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight mt-1 flex items-center gap-2">
          CHURRASCO NA BRASA
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mt-2" />
      </div>

      {/* Hero BBQ Image Section */}
      <div className="mb-8 rounded-xl overflow-hidden relative h-44 border border-white/5 flex items-end shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
          alt="Espetinhos suculentos na brasa com fogos ao fundo"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55] transition-transform duration-700 hover:scale-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Glow overlay to simulate flame flicker */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-amber-600/10 mix-blend-color-dodge animate-pulse" style={{ animationDuration: "3s" }} />

        <div className="relative p-4 w-full z-10">
          <div className="flex items-center gap-1.5 bg-amber-500 text-black font-extrabold text-[10px] uppercase font-mono px-2 py-0.5 rounded-md w-fit mb-2 shadow-lg">
            <Flame className="w-3.5 h-3.5 fill-black animate-bounce" /> Assados na Hora
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Espetinhos Premium na Brasa</h3>
          <p className="text-xs text-gray-200">Grelhados em churrasqueira a carvão e servidos quentinhos.</p>
        </div>
      </div>

      {/* Skewers List classified by Pricing brackets */}
      <div className="space-y-8">
        {/* PREMIUM SKEWERS SECTION - R$ 12,00 */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
            <h4 className="font-serif font-bold text-base sm:text-lg text-amber-400 flex items-center gap-1.5">
              <span>Espetinhos Especiais</span>
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/10" />
            </h4>
            <span className="font-mono font-black text-amber-400 bg-amber-400/5 px-2.5 py-1 rounded-lg text-xs sm:text-sm border border-amber-400/10">
              R$ 12,00 <span className="text-[10px] text-gray-400 uppercase font-mono font-normal">cada</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {premiumSkewers.map((skew) => (
              <motion.div
                key={skew.id}
                whileHover={{ x: 2 }}
                className="p-3.5 rounded-xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.035] flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <h5 className="font-bold text-white text-sm sm:text-base tracking-tight">{skew.name}</h5>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    {skew.description}
                  </p>
                </div>
                <div className="font-mono text-xs font-bold text-gray-400 bg-white/5 p-1 px-2 rounded">
                  R$ 12,00
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STANDARD SKEWERS SECTION - R$ 10,00 */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
            <h4 className="font-serif font-bold text-base sm:text-lg text-amber-400 flex items-center gap-1.5">
              <span>Espetinhos Tradicionais</span>
            </h4>
            <span className="font-mono font-black text-amber-400 bg-amber-400/5 px-2.5 py-1 rounded-lg text-xs sm:text-sm border border-amber-400/10">
              R$ 10,00 <span className="text-[10px] text-gray-400 uppercase font-mono font-normal">cada</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standardSkewers.map((skew) => (
              <motion.div
                key={skew.id}
                whileHover={{ x: 2 }}
                className="p-3.5 rounded-xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.035] flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <h5 className="font-bold text-white text-sm sm:text-base tracking-tight">{skew.name}</h5>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    {skew.description}
                  </p>
                </div>
                <div className="font-mono text-xs font-bold text-gray-400 bg-white/5 p-1 px-2 rounded">
                  R$ 10,00
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Pairing Tip Box */}
      <div className="mt-8 p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-gray-300 leading-normal flex items-start gap-2">
        <Flame className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Harmonização do Chefe:</strong> Os nossos espetinhos assados na brasa combinam perfeitamente com o <strong>Chopp Ecobier</strong> ou <strong>Petra bem gelado</strong>! Experimente.
        </span>
      </div>
    </div>
  );
}
