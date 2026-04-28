"use client";

import { ChevronRight, Sparkles, Smartphone, Gift, Link, PenTool, Zap, CheckCircle2 } from "lucide-react";
import NextLink from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans overflow-x-hidden selection:bg-pink-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* HEADER NAVBAR */}
      <header className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="font-black text-xl tracking-tight text-white">Fábrica de Sonhos</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#b2b" className="hover:text-orange-400 transition-colors">Para Agências</a>
            <a href="#pricing" className="hover:text-white transition-colors">Preços</a>
          </nav>

          <div className="flex items-center gap-4">
             <NextLink href="/admin" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">
               Acesso Restrito
             </NextLink>
             <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
               Criar Convite
             </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">A nova era dos eventos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            O seu evento merece mais <br className="hidden md:block" /> 
            que um simples <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">descartável.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Abandone o papel e os PDFs sem graça. Crie experiências interativas impressionantes com contagem regressiva, mural de recados e trilha sonora imersiva em menos de 5 minutos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pink-500/25">
              Começar Meu Convite Grátis <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-colors">
              Ver Exemplo de Demonstração
            </button>
          </div>
        </div>
      </section>

      {/* RECURSOS PRINCIPAIS */}
      <section id="features" className="relative z-10 py-24 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Mágica em cada detalhe</h2>
            <p className="text-zinc-400">Desenvolvido para emocionar seus convidados desde o primeiro clique.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-pink-500/50 transition-colors group">
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={28} className="text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Responsivo</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Design impecável desenhado primeiramente para as telas de celular, com transições fluídas.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gift size={28} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gestão de Presentes</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Chega de perguntar tamanho. Sugira listas de presentes ou integre chave Pix de forma elegante.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-sky-500/50 transition-colors group">
              <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenTool size={28} className="text-sky-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mural de Recados</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Um espaço secreto com banco de dados em tempo real para os convidados deixarem mimos antes da festa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B / AGÊNCIAS */}
      <section id="b2b" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">
                Para Desenvolvedores & Agências
             </div>
             <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
               Torne-se dono do seu próprio faturamento recorrente.
             </h2>
             <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
               Acesso direto a um ecossistema White-Label. Monte layouts, suprima nossa marca e revenda links interativos de casamentos por mais de R$ 500 reais mantendo 100% dos lucros.
             </p>
             
             <ul className="space-y-4 mb-10">
               <li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                 <CheckCircle2 className="text-amber-500" size={20} /> Painel Administrativo Exclusivo
               </li>
               <li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                 <CheckCircle2 className="text-amber-500" size={20} /> Deploy sob domínios personalizados
               </li>
               <li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                 <CheckCircle2 className="text-amber-500" size={20} /> Suporte Engine (Estúdio VIP Custom)
               </li>
             </ul>

             <button className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 uppercase tracking-widest text-xs">
               Conhecer Planos de Franquia <Zap size={16} />
             </button>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-zinc-800 to-black rounded-3xl border border-white/10 p-2 shadow-2xl overflow-hidden relative">
                {/* Mockup visual focado no Admin */}
                <div className="w-full h-full bg-[#0a0a0a] rounded-2xl p-4 flex flex-col relative overflow-hidden">
                   <div className="h-6 w-full border-b border-white/10 flex items-center gap-1.5 px-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                   </div>
                   <div className="flex gap-4 h-full">
                     <div className="w-16 h-full bg-white/5 rounded-lg border border-white/5"></div>
                     <div className="flex-1 flex flex-col gap-4">
                       <div className="h-20 w-full bg-amber-500/10 border border-amber-500/20 rounded-xl"></div>
                       <div className="h-full w-full bg-gradient-to-br from-purple-500/5 to-transparent border border-white/5 rounded-xl"></div>
                     </div>
                   </div>
                   {/* Blur overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black py-12 px-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-6 opacity-50">
          <Sparkles size={20} className="text-white" />
        </div>
        <p className="text-zinc-500 text-sm font-medium">© 2026 Fábrica de Sonhos. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-6 text-zinc-600 text-xs">
          <a href="#" className="hover:text-zinc-300">Termos de Serviço</a>
          <a href="#" className="hover:text-zinc-300">Privacidade</a>
          <a href="#" className="hover:text-zinc-300">Contato</a>
        </div>
      </footer>
    </div>
  );
}
