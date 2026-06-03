import { motion } from "motion/react";
import { Sparkles, Calendar, Beer } from "lucide-react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data";

export default function MenuPromos() {
  // Extract Promos and Drafts from MENU_ITEMS
  const promos = MENU_ITEMS.filter((item) => item.category === "Promo");
  const drafts = MENU_ITEMS.filter((item) => item.category === "Draft");

  return (
    <div className="w-full h-full flex flex-col p-6 overflow-y-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-mono tracking-[0.2em] text-amber-500 uppercase">
            Página 2 • Promoções e Chopes
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight mt-1">
          PROMOÇÃO <span className="text-amber-500 font-chalk text-3xl sm:text-4xl lowercase block sm:inline ml-0 sm:ml-2">(toda sexta)</span>
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mt-2" />
      </div>

      {/* Promotions Section */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {promos.map((promo) => (
          <motion.div
            key={promo.id}
            whileHover={{ y: -1 }}
            className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            {/* Visual background badge */}
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-16 h-16 bg-amber-500/10 rotate-45 pointer-events-none" />

            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-black font-extrabold text-[10px] uppercase font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Calendar className="w-3 h-3" /> Sexta-feira
                </span>
                {promo.id === "promo-chopp-espeto" && (
                  <span className="text-[11px] text-amber-400 font-chalk font-bold">Mais pedido 🔥</span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {promo.name}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                {promo.description}
              </p>
            </div>

            <div className="text-left sm:text-right border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0 w-full sm:w-auto">
              <span className="text-[10px] text-gray-400 block uppercase font-mono tracking-wider">Valor Especial</span>
              <span className="text-2xl font-mono font-black text-amber-400">
                R$ {promo.price?.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Craft Beer Image Feature */}
      <div className="mb-8 rounded-xl overflow-hidden relative h-36 border border-white/5 flex items-end">
        <img
          src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&q=80&w=800"
          alt="Frosty Draft Beer pouring"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="relative p-4 w-full z-10 flex flex-col justify-end">
          <span className="text-[9px] uppercase tracking-[0.25em] text-amber-400 font-mono font-bold">Chopes Cremosos</span>
          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">Ecobier & Petra</h3>
          <p className="text-[11px] text-gray-300 italic">Extraídos sob temperatura ideal e pressão perfeita.</p>
        </div>
      </div>

      {/* Draft Beers Section */}
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-4 font-mono flex items-center gap-1.5">
        <Beer className="w-4 h-4 text-amber-500" /> Nossos Chopes de Barril
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {drafts.map((draft) => {
          return (
            <motion.div
              key={draft.id}
              whileHover={{ y: -1 }}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.015] flex flex-col justify-between gap-3"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base tracking-tight">{draft.name}</h4>
                <p className="text-xs text-gray-400 leading-normal">{draft.description}</p>
              </div>

              {/* Clean side-by-side sizes display */}
              <div className="grid grid-cols-2 gap-3 pt-2 mt-1 border-t border-white/5">
                <div className="p-2 py-2.5 rounded-lg bg-black/30 border border-white/5 text-center">
                  <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono font-bold">300ml</span>
                  <span className="text-base font-mono font-bold text-amber-400">
                    R$ {draft.prices?.["300ml"].toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="p-2 py-2.5 rounded-lg bg-black/30 border border-white/5 text-center">
                  <span className="text-[9px] uppercase tracking-wider text-gray-500 block font-mono font-bold">500ml</span>
                  <span className="text-base font-mono font-bold text-amber-400">
                    R$ {draft.prices?.["500ml"].toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
