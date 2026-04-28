"use client";

import { useState } from "react";
import { User, Calendar, MapPin, Music, Sparkles, Image as ImageIcon, Headphones, ChevronRight, Wand2 } from "lucide-react";

export default function DreamFactoryBuilder() {
  const [step, setStep] = useState(1);

  const themes = [
    { id: 'neon', name: 'Luxo Moderno (Neon)', color: 'from-pink-500 to-purple-600', icon: '✨' },
    { id: 'patrulha', name: 'Patrulha Canina', color: 'from-blue-500 to-red-500', icon: '🐾' },
    { id: 'princesa', name: 'Princesas Reais', color: 'from-rose-400 to-pink-300', icon: '👑' },
    { id: 'custom', name: 'Em Branco (Custom)', color: 'from-zinc-600 to-zinc-400', icon: '🎨' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-pink-500/20 p-3 rounded-2xl border border-pink-500/30">
          <Wand2 className="text-pink-400" size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">A Fábrica de Sonhos</h2>
          <p className="text-zinc-400 text-lg">Onde a magia acontece: construa o convite ajustando as propriedades ativas do projeto.</p>
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="flex items-center gap-2 mt-10 mb-8 border-b border-white/10 pb-6 overflow-x-auto">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-all ${step >= item ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/40' : 'bg-white/5 text-zinc-500'}`}>
              {item}
            </div>
            {item < 4 && <div className={`w-12 h-1 rounded-full ${step > item ? 'bg-pink-500/50' : 'bg-white/5'}`}></div>}
          </div>
        ))}
      </div>

      <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        
        {/* STEP 1: DADOS */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">📝 1. Detalhes Principais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1 flex items-center gap-2"><User size={14}/> Nome do Aniversariante</label>
                <input type="text" placeholder="Ex: Emilly Angell" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all font-medium placeholder:text-zinc-600" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1 flex items-center gap-2"><Calendar size={14}/> Idade a Celebrar</label>
                <input type="number" placeholder="Ex: 13" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all font-medium placeholder:text-zinc-600" />
              </div>

              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1 flex items-center gap-2"><MapPin size={14}/> Link do Google Maps</label>
                <input type="text" placeholder="Cole o link do endereço gerado no Maps" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all font-medium placeholder:text-zinc-600" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: TEMAS */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Sparkles size={24}/> 2. Escolha o Tema Base</h3>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {themes.map((theme) => (
                 <button key={theme.id} className="group relative text-left bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 transition-all overflow-hidden focus:ring-2 focus:ring-pink-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="text-4xl mb-3">{theme.icon}</div>
                    <h4 className="font-bold text-lg text-white">{theme.name}</h4>
                    <p className="text-zinc-500 text-sm mt-1">Carrega todas as cores, ícones e constelações automaticamente do banco.</p>
                 </button>
               ))}
             </div>
          </div>
        )}

        {/* STEP 3: MÚSICA & PIXABAY */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
             <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><Headphones size={24}/> 3. Galeria Pixabay (Trilha Sonora)</h3>
             <p className="text-zinc-400 text-sm mb-6">Busque a trilha sonora cinematográfica diretamente do catálogo mundial gratuito.</p>
             
             <div className="flex gap-3 mb-6">
               <input type="text" placeholder="Ex: Epic Trailer, Happy Kids..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50" />
               <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-all border border-white/10">Buscar Sons</button>
             </div>

             {/* Mock Resultados Pixabay */}
             <div className="space-y-3">
               <div className="flex items-center justify-between bg-black/40 border border-pink-500/50 p-4 rounded-xl cursor-pointer ring-1 ring-pink-500/50">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400">▶️</div>
                   <div>
                     <p className="text-white font-bold text-sm">Cinematic Fairy Tale Magic</p>
                     <p className="text-zinc-500 text-xs">Por: JohnDoe_Audio • Pixabay</p>
                   </div>
                 </div>
                 <div className="text-xs text-pink-400 font-bold bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">Selecionada</div>
               </div>

               <div className="flex items-center justify-between bg-white/5 border border-white/5 hover:border-white/20 p-4 rounded-xl cursor-pointer transition-colors">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-white/20">▶️</div>
                   <div>
                     <p className="text-zinc-300 font-bold text-sm">Kids Happy Morning Tune</p>
                     <p className="text-zinc-600 text-xs">Por: MusicMakerD • Pixabay</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        )}

        {/* STEP 4: Checkout */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center py-10">
             <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6">
                <CheckCircle2 size={48} className="text-white" />
             </div>
             <h3 className="text-3xl font-black text-white mb-4">Convite Gerado com Sucesso!</h3>
             <p className="text-zinc-400 max-w-sm mx-auto mb-8">Todos os dados foram injetados no Tema "Luxo Moderno" e unidos à trilha sonora do Pixabay.</p>
             <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-black shadow-xl shadow-pink-500/20 text-lg transition-all w-full md:w-auto">
               Abrir Pré-Visualização Mágica ✨
             </button>
          </div>
        )}

      </div>

      {/* Controles de Voltar/Avancar */}
      <div className="flex justify-between mt-6">
        <button 
          onClick={() => setStep(Math.max(1, step - 1))}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
        >
          Voltar
        </button>
        <button 
          onClick={() => setStep(Math.min(4, step + 1))}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all ${step === 4 ? 'hidden' : 'bg-white text-black hover:bg-zinc-200'}`}
        >
          {step === 3 ? 'Gerar Convite Final' : 'Próxima Etapa'} <ChevronRight size={16} />
        </button>
      </div>

    </div>
  )
}
