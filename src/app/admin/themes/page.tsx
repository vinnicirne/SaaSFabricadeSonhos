"use client";

import { Palette, Wand2, PaintBucket, PlusCircle, LayoutTemplate } from "lucide-react";

export default function ThemesManagement() {
  const themes = [
    { id: "tm-1", name: "Patrulha Canina", type: "Infantil", usedBy: 1420 },
    { id: "tm-2", name: "Princesas Reais", type: "Infantil", usedBy: 853 },
    { id: "tm-3", name: "Luxo Neon", type: "15 Anos / Adulto", usedBy: 3402 },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <Palette className="text-pink-500" size={32} /> Gestão de Temas e UI
          </h2>
          <p className="text-zinc-400 mt-2">Crie paletas de cores, edite as fontes dos convites ou adicione novos temas dinâmicos no banco.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg text-sm">
          <PlusCircle size={18} /> Novo Tema Dinnâmico
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {themes.map(theme => (
          <div key={theme.id} className="bg-black/30 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-pink-500/50 transition-all">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <LayoutTemplate className="text-zinc-400 group-hover:text-pink-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
            <p className="text-xs text-zinc-500 font-semibold uppercase">{theme.type}</p>
            <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
              <span className="text-xs text-zinc-400">Em uso por <strong className="text-white">{theme.usedBy}</strong> convites</span>
              <button className="text-pink-400 text-sm font-bold hover:text-pink-300">Editar CSS 🎨</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
