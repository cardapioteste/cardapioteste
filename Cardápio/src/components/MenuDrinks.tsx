import { useState } from "react";
import { motion } from "motion/react";
import { GlassWater } from "lucide-react";
import { MENU_ITEMS } from "../data";

const FLAVOR_COLORS: { [key: string]: { bg: string; text: string; glow: string; slice: string } } = {
  "Limão": { bg: "bg-lime-500", text: "text-lime-450", glow: "rgba(132, 204, 22, 0.4)", slice: "bg-lime-650" },
  "Morango": { bg: "bg-red-500", text: "text-red-400", glow: "rgba(239, 68, 68, 0.4)", slice: "bg-red-600" },
  "Maracujá": { bg: "bg-amber-500", text: "text-amber-400", glow: "rgba(245, 158, 11, 0.4)", slice: "bg-amber-600" },
  "Kiwi": { bg: "bg-emerald-500", text: "text-emerald-400", glow: "rgba(16, 185, 129, 0.4)", slice: "bg-emerald-600" },
  "Abacaxi": { bg: "bg-yellow-400", text: "text-yellow-400", glow: "rgba(250, 204, 21, 0.4)", slice: "bg-yellow-500" }
};

export default function MenuDrinks() {
  const caipirinhaItem = MENU_ITEMS.find((item) => item.category === "Caipirinha");
  const longNecks = MENU_ITEMS.filter((item) => item.category === "LongNeck");

  const [selectedFlavor, setSelectedFlavor] = useState<string>("Limão");

  return (
    <div className="w-full h-full flex flex-col p-6 overflow-y-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <GlassWater className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-mono tracking-[0.2em] text-amber-500 uppercase">
            Página 4 • Caipirinhas e Long Necks
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight mt-1">
          DRINKS & CERVEJAS
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mt-2" />
      </div>

      {/* Caipirinha Interactive Lab */}
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-4 font-mono flex items-center gap-1.5">
        🍹 Caipirinhas Especiais <span className="text-[10px] text-gray-500 lowercase font-sans font-normal">(500ml)</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Interactive drink preview - 5 columns */}
        <div className="md:col-span-5 p-4 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
          {/* Bubbles / ice chips rendering */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
            <div className="absolute top-1/3 right-1/3 w-3.5 h-3.5 bg-white/40 rotate-45 transform" />
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>

          <div className="relative">
            {/* Ice glass container */}
            <div className="w-24 h-36 border-2 border-white/40 rounded-b-2xl rounded-t-sm relative flex items-end p-1 overflow-hidden backdrop-blur-[1px]">
              {/* Dynamic drink fluid */}
              <motion.div
                layout
                animate={{
                  height: "85%",
                  boxShadow: `inset 0 -20px 40px -10px ${FLAVOR_COLORS[selectedFlavor].glow}, 0 0 15px ${FLAVOR_COLORS[selectedFlavor].glow}`
                }}
                className={`w-full rounded-b-xl relative transition-colors duration-500 ${FLAVOR_COLORS[selectedFlavor].bg}`}
              >
                {/* Ice cubes inside drink */}
                <div className="absolute top-2 left-2 w-5 h-5 bg-white/30 border border-white/40 rotate-12 rounded-sm" />
                <div className="absolute top-8 right-2 w-4 h-4 bg-white/40 border border-white/45 -rotate-12 rounded-sm" />
                <div className="absolute bottom-4 left-3 w-6 h-6 bg-white/20 border border-white/30 rotate-45 rounded-sm" />

                {/* Slices / fruit bits based on selection */}
                <div className={`absolute bottom-3 right-3 w-3 h-3 rounded-full ${FLAVOR_COLORS[selectedFlavor].slice} opacity-80`} />
                <div className={`absolute top-1/2 left-1/4 w-3.5 h-2.5 rounded-full ${FLAVOR_COLORS[selectedFlavor].slice} opacity-90 rotate-45`} />
              </motion.div>

              {/* Glass Rim Lime */}
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-lime-400 bg-lime-500/80 rotate-12 flex items-center justify-center">
                <div className="w-px h-full bg-lime-600" />
                <div className="w-full h-px bg-lime-600 absolute" />
              </div>
            </div>

            {/* Drinking Straw */}
            <div className="absolute -top-8 left-1/2 -ml-0.5 w-1 h-44 bg-red-500/80 -rotate-[15deg] origin-bottom shadow-md" />
          </div>

          <div className="mt-4 text-center">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Caipirinha Selecionada</span>
            <p className="font-serif font-bold text-lg text-white">
              Sabor {selectedFlavor}
            </p>
            <span className="text-sm font-mono font-bold text-amber-400 mt-0.5 block">
              R$ 25,00
            </span>
          </div>
        </div>

        {/* Customization controls - 7 columns */}
        <div className="md:col-span-7 flex flex-col justify-between p-1">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                {caipirinhaItem?.description}
              </p>
              <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-2">
                Consulte nossos sabores:
              </span>
            </div>

            {/* Flavor Pills selection */}
            <div className="flex flex-wrap gap-2">
              {caipirinhaItem?.options?.map((flavor) => {
                const isActive = selectedFlavor === flavor;
                return (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`p-2 px-4 rounded-xl border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "border-amber-500 bg-amber-500/10 text-amber-400 font-bold scale-[1.03]"
                        : "border-white/10 bg-white/5 text-gray-405 hover:border-white/20"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${FLAVOR_COLORS[flavor].bg} shadow-sm`} />
                    <span>{flavor}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Elegant Display Container highlighting premium qualities instead of adding order form */}
          <div className="border-t border-white/5 pt-4 mt-6">
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-center flex flex-col justify-center">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">Consumação no Local</span>
              <p className="text-xl font-mono font-black text-white mt-1">R$ 25,00</p>
              <span className="text-[10px] text-gray-400 mt-0.5">Disponível em copo premium de vidro de 500ml</span>
            </div>
          </div>
        </div>
      </div>

      {/* Longnecks Section */}
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-4 font-mono flex items-center gap-1.5 mt-4">
        🍺 Cervejas Long Neck
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {longNecks.map((beer) => {
          // Visual styling for distinct beers
          let labelStyle = "bg-green-500/10 text-green-400 border-green-500/20";
          let circleColor = "bg-green-500";
          if (beer.id === "ln-corona") {
            labelStyle = "bg-amber-500/10 text-amber-400 border-amber-500/20";
            circleColor = "bg-amber-400";
          } else if (beer.id === "ln-bud") {
            labelStyle = "bg-red-500/10 text-red-500 border-red-500/20";
            circleColor = "bg-red-500";
          }

          return (
            <motion.div
              key={beer.id}
              whileHover={{ y: -1 }}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.015] flex flex-col justify-between gap-4"
            >
              <div className="space-y-1">
                <span className={`inline-flex items-center gap-1 text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded-md border ${labelStyle}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${circleColor}`} />
                  {beer.id === "ln-heineken" ? "Malte Premium" : beer.id === "ln-corona" ? "Leve com Limão" : "Suave Bud"}
                </span>
                <h4 className="font-bold text-white text-sm tracking-tight">{beer.name}</h4>
                <p className="text-[11px] text-gray-500 leading-normal">{beer.description}</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-[9px] text-gray-400 uppercase font-mono">Trincando de Gelada</span>
                <span className="text-base font-mono font-bold text-amber-400">
                  R$ {beer.price?.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
