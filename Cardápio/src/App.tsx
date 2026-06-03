import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { MenuItem } from "./types";
import { MENU_ITEMS } from "./data";
import MenuCapa from "./components/MenuCapa";
import MenuPromos from "./components/MenuPromos";
import MenuEspetinhos from "./components/MenuEspetinhos";
import MenuDrinks from "./components/MenuDrinks";

export default function App() {
  // Page number: 1 (Capa), 2 (Promos e Chopes), 3 (Espetinhos), 4 (Drinks & Caipiras)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>(" ");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchHighlightId, setSearchHighlightId] = useState<string | null>(null);
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right">("right");

  // Sequential Page turning logic with direction tracking
  const navigateToPage = (target: number) => {
    if (target < 1 || target > 4) return;
    setTransitionDirection(target > currentPage ? "right" : "left");
    setCurrentPage(target);
  };

  // Auto-flip to page and highlight standard matching item on search selection
  const handleSelectSearchResult = (item: MenuItem) => {
    let targetPage = 2; // Default to promos / draft
    if (item.category === "Espetinho") {
      targetPage = 3;
    } else if (item.category === "Caipirinha" || item.category === "LongNeck") {
      targetPage = 4;
    }

    setTransitionDirection(targetPage > currentPage ? "right" : "left");
    setCurrentPage(targetPage);
    setSearchHighlightId(item.id);
    setSearchTerm("");
    setShowSearchResults(false);

    // Fade highlight element out after a brief moment
    setTimeout(() => {
      setSearchHighlightId(null);
    }, 4500);
  };

  // Search filter
  const filteredSearchItems = searchTerm.trim()
    ? MENU_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  // Slide transition animation variants
  const pageVariants = {
    initial: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "right" ? 120 : -120
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeOut" }
    },
    exit: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "right" ? -120 : 120,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  return (
    <div className="bg-royal-crumpled text-gray-100 min-h-screen font-sans flex flex-col items-center py-4 px-4 sm:py-8 lg:py-12 pb-16">
      {/* Container Envelope */}
      <div className="w-full max-w-2xl bg-[#040d1f]/95 border border-amber-500/15 shadow-2xl rounded-3xl overflow-hidden relative flex flex-col min-h-[640px] md:min-h-[750px]">
        {/* Ambient Top Glow / Design Accents */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

        {/* Global Toolbar Header (Hidden on Cover Page) */}
        {currentPage > 1 && (
          <header className="p-4 bg-black/50 border-b border-white/5 flex flex-col gap-3 relative z-30">
            {/* Top Row with Page title and general navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigateToPage(1)}
                className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Capa</span>
              </button>

              <div className="flex bg-white/5 rounded-full p-1 border border-white/5 select-none">
                <button
                  onClick={() => navigateToPage(2)}
                  className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase cursor-pointer transition-all ${
                    currentPage === 2 ? "bg-amber-500 text-black shadow-sm" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Chopes
                </button>
                <button
                  onClick={() => navigateToPage(3)}
                  className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase cursor-pointer transition-all ${
                    currentPage === 3 ? "bg-amber-500 text-black shadow-sm" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Espetos
                </button>
                <button
                  onClick={() => navigateToPage(4)}
                  className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase cursor-pointer transition-all ${
                    currentPage === 4 ? "bg-amber-500 text-black shadow-sm" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Drinks
                </button>
              </div>

              <div className="text-right text-[10px] font-mono font-semibold text-gray-400 select-none">
                {currentPage} / 4
              </div>
            </div>

            {/* Live Search Bar for instant item locator */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4 text-amber-500/80" />
              </div>
              <input
                type="text"
                placeholder="Buscar chopp, espetinho ou drink..."
                value={searchTerm === " " ? "" : searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearchResults(e.target.value.trim().length > 0);
                }}
                className="w-full bg-white/5 focus:bg-white/10 hover:bg-white/[0.07] border border-white/5 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-all duration-300"
              />

              {/* Instant Search Dropdown Results Overlay */}
              <AnimatePresence>
                {showSearchResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#061026] border border-white/10 rounded-xl shadow-2xl p-2 z-50 max-h-60 overflow-y-auto space-y-1 divide-y divide-white/5"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-wider text-gray-400 p-1">
                      <span>Resultado da pesquisa</span>
                      <button
                        onClick={() => {
                          setSearchTerm("");
                          setShowSearchResults(false);
                        }}
                        className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
                      >
                        Limpar
                      </button>
                    </div>

                    {filteredSearchItems.length === 0 ? (
                      <div className="p-4 text-center text-xs text-gray-400">
                        Nenhum item encontrado para "{searchTerm}"
                      </div>
                    ) : (
                      filteredSearchItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSelectSearchResult(item)}
                          className="w-full p-2.5 hover:bg-white/5 rounded-lg text-left flex justify-between items-center transition-colors cursor-pointer group"
                        >
                          <div className="space-y-0.5" id={`search-item-${item.id}`}>
                            <span className="font-bold text-white text-xs block group-hover:text-amber-400">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-gray-400 block uppercase font-mono">
                              Categorizado em: {item.category === "Draft" ? "Chopes" : item.category === "Promo" ? "Promoção" : item.category === "Espetinho" ? "Espetinho" : "Cervejas/Drinks"}
                            </span>
                          </div>
                          <span className="font-mono text-xs font-bold text-amber-400">
                            {item.price ? `R$ ${item.price.toFixed(2).replace(".", ",")}` : "Ver Valores"}
                          </span>
                        </button>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </header>
        )}

        {/* Dynamic Highlight Notification Toast */}
        {searchHighlightId && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 bg-amber-500 text-black font-extrabold text-xs tracking-wide p-2.5 px-5 rounded-full shadow-xl animate-bounce border border-amber-400 flex items-center gap-1.5 font-sans uppercase">
            <Sparkles className="w-4 h-4 fill-black/25" /> Item localizado no cardápio!
          </div>
        )}

        {/* Core Booklet Multi-Page Views (Render with horizontal slide transitions) */}
        <main className="flex-1 flex flex-col relative z-20 min-h-[500px]">
          <AnimatePresence mode="popLayout" initial={false} custom={transitionDirection}>
            <motion.div
              key={currentPage}
              custom={transitionDirection}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1"
            >
              {currentPage === 1 && (
                <MenuCapa onStartExploring={() => navigateToPage(2)} />
              )}
              {currentPage === 2 && (
                <div className={searchHighlightId ? "animate-pulse border-2 border-dashed border-amber-500 rounded-3xl" : ""}>
                  <MenuPromos />
                </div>
              )}
              {currentPage === 3 && (
                <div className={searchHighlightId ? "animate-pulse border-2 border-dashed border-amber-500 rounded-3xl" : ""}>
                  <MenuEspetinhos />
                </div>
              )}
              {currentPage === 4 && (
                <div className={searchHighlightId ? "animate-pulse border-2 border-dashed border-amber-500 rounded-3xl" : ""}>
                  <MenuDrinks />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Flip Booklet Arrows (Hidden on Cover Page) */}
        {currentPage > 1 && (
          <div className="p-4 bg-black/30 border-t border-white/5 flex items-center justify-between z-30">
            <button
              onClick={() => navigateToPage(currentPage - 1)}
              className="flex items-center gap-1 font-semibold text-xs uppercase tracking-wider text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-amber-400" />
              <span>Anterior</span>
            </button>

            {/* Progress indicators dots */}
            <div className="flex items-center gap-2">
              {[2, 3, 4].map((pNum) => (
                <button
                  key={pNum}
                  onClick={() => navigateToPage(pNum)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                    currentPage === pNum ? "bg-amber-500 w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {currentPage < 4 ? (
              <button
                onClick={() => navigateToPage(currentPage + 1)}
                className="flex items-center gap-1 font-semibold text-xs uppercase tracking-wider text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                <span>Próximo</span>
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </button>
            ) : (
              <button
                onClick={() => navigateToPage(1)}
                className="flex items-center gap-1 font-semibold text-xs uppercase tracking-wider text-amber-400 hover:text-amber-300 cursor-pointer transition-colors"
              >
                <span>Início</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Persistent Footer Credit Indicators for Design Polish */}
      <footer className="mt-8 text-center text-[10px] tracking-widest text-gray-450 uppercase select-none space-y-1">
        <p className="flex items-center justify-center gap-2 font-semibold">
          <span className="text-amber-400">🍻 NOVA ERA CHOPERIA</span>
          <span className="h-1 w-1 bg-amber-500/40 rounded-full" />
          <span className="text-gray-330">CARDÁPIO DIGITAL OFICIAL</span>
        </p>
        <p className="font-mono text-gray-500">PREMIUM LIFESTYLE EXPERIENCE © 2026</p>
      </footer>
    </div>
  );
}
