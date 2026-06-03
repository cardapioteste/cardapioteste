import { motion } from "motion/react";
import { Beer, Instagram, Flame, GlassWater } from "lucide-react";

interface MenuCapaProps {
  onStartExploring: () => void;
}

export default function MenuCapa({ onStartExploring }: MenuCapaProps) {
  // Generate floating bubbles background (matching beer colors)
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="relative w-full h-full min-h-[620px] flex flex-col justify-between p-6 text-center select-none overflow-hidden">
      {/* Golden Rising Bubbles Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {bubbles.map((_, i) => (
          <div
            key={i}
            className="bubbler-bubble bg-gradient-to-t from-yellow-500/10 to-amber-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              animation: `rise ${Math.random() * 6 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Golden Top Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 z-10" />

      {/* Warm Ambience Top Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-6 relative z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-amber-400/80 font-mono font-bold">
          Boas-vindas • Cardápio Digital
        </span>
        <div className="h-px w-16 bg-amber-500/20 mx-auto mt-2" />
      </motion.div>

      {/* High-Fidelity Logo Recreation Section */}
      <div className="flex flex-col items-center justify-center py-6 my-auto relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          className="relative select-none flex flex-col items-center w-full max-w-sm px-6 py-6"
        >
          {/* 1. Crown Logo SVG Asset based on Uploaded Image */}
          <div className="relative w-28 h-20 mb-1 drop-shadow-[0_4px_16px_rgba(241,168,10,0.4)]">
            <svg
              viewBox="0 0 100 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-amber-500 hover:scale-105 transition-transform duration-300"
            >
              {/* Detailed Gold Crown Path (Symmetric design to match the brand logo) */}
              <path
                d="M50 5 L53 11 L50 14 L47 11 Z"
                fill="#EFBF04"
              />
              <circle cx="50" cy="4" r="2" fill="#FFFFFF" />
              <path
                d="M15 48 C25 46, 35 45, 50 45 C65 45, 75 46, 85 48 L80 18 L64 34 L50 14 L36 34 L20 18 Z"
                fill="url(#crownGold)"
                stroke="#D49200"
                strokeWidth="1.5"
              />
              {/* Fleur-de-lis and jewels details inside the crown */}
              <circle cx="36" cy="34" r="2.5" fill="#FFFFFF" />
              <circle cx="50" cy="14" r="2.5" fill="#FFFFFF" />
              <circle cx="64" cy="34" r="2.5" fill="#FFFFFF" />
              <circle cx="30" cy="22" r="1.5" fill="#FFFFFF" />
              <circle cx="70" cy="22" r="1.5" fill="#FFFFFF" />
              
              {/* Crown Base */}
              <path
                d="M14 47 C24 45, 36 44, 50 44 C64 44, 76 45, 86 47 C87 49, 87 51, 84 53 C74 51, 62 50, 50 50 C38 50, 26 51, 16 53 C13 51, 13 49, 14 47 Z"
                fill="#C68000"
                stroke="#7A4D00"
                strokeWidth="1"
              />
              {/* Gems along the bottom band */}
              <circle cx="20" cy="48.5" r="1.5" fill="#9B2C2C" />
              <circle cx="30" cy="48" r="1.5" fill="#2C5282" />
              <circle cx="40" cy="47" r="1.5" fill="#9B2C2C" />
              <circle cx="50" cy="47" r="1.8" fill="#FFFFFF" />
              <circle cx="60" cy="47" r="1.5" fill="#9B2C2C" />
              <circle cx="70" cy="48" r="1.5" fill="#2C5282" />
              <circle cx="80" cy="48.5" r="1.5" fill="#9B2C2C" />

              <defs>
                <linearGradient id="crownGold" x1="50" y1="5" x2="50" y2="53" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFF2A1" />
                  <stop offset="35%" stopColor="#F9C623" />
                  <stop offset="70%" stopColor="#E09F00" />
                  <stop offset="100%" stopColor="#9C6600" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 2. NOVA ERA styled in large bold arched textured letters */}
          <div className="relative">
            <h1 className="text-4xl sm:text-[46px] font-extrabold tracking-tight text-white uppercase italic select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] leading-tight flex flex-col items-center">
              <span className="bg-clip-text bg-gradient-to-b from-white via-white to-gray-200">
                NOVA ERA
              </span>
            </h1>
          </div>

          {/* 3. CHOPERIA enclosed in a golden banner style */}
          <div className="w-full relative mt-2 flex items-center justify-center">
            {/* Horizontal gold accent brand lines */}
            <div className="h-0.5 w-12 bg-amber-500/80 mr-3" />
            <span className="px-5 py-1 text-base sm:text-lg font-black tracking-[0.25em] text-amber-400 bg-black/60 rounded-lg uppercase border border-amber-500/40 shadow-inner">
              CHOPERIA
            </span>
            <div className="h-0.5 w-12 bg-amber-500/80 ml-3" />
          </div>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-sm sm:text-base text-gray-200 font-medium max-w-xs sm:max-w-md mx-auto italic"
        >
          🍻 Um novo conceito para seu lazer
        </motion.p>

        {/* Categories Quick Preview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-8 p-3 px-6 bg-white/[0.03] backdrop-blur-sm rounded-full border border-white/5 text-xs text-gray-300"
        >
          <span className="flex items-center gap-1.5 font-semibold">
            <Beer className="w-4 h-4 text-amber-400" /> Chopp
          </span>
          <span className="h-2.5 w-px bg-white/10" />
          <span className="flex items-center gap-1.5 font-semibold">
            <Flame className="w-4 h-4 text-amber-400" /> Espetinhos
          </span>
          <span className="h-2.5 w-px bg-white/10" />
          <span className="flex items-center gap-1.5 font-semibold">
            <GlassWater className="w-4 h-4 text-amber-400" /> Drinks
          </span>
        </motion.div>
      </div>

      {/* Bottom Section - INSTAGRAM & BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="pb-6 space-y-6 relative z-10"
      >
        <button
          onClick={onStartExploring}
          className="w-full max-w-xs mx-auto py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-extrabold tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer group"
        >
          <span>Visualizar Cardápio</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </button>

        {/* Social Link */}
        <div className="flex flex-col items-center gap-1">
          <a
            href="https://instagram.com/novaerachoperia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-amber-400 transition-colors duration-300 p-2 group"
          >
            <Instagram className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            <span>Acompanhe nosso perfil oficial</span>
          </a>
          <span className="text-base font-black tracking-widest text-amber-400 font-mono">
            @novaerachoperia
          </span>
        </div>
      </motion.div>
    </div>
  );
}
