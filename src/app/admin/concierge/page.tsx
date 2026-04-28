"use client";

import { useState } from "react";
import { Diamond, CheckCircle2, Clock, Inbox, Code, FileArchive, Link as LinkIcon, UploadCloud, MessageSquareText, Search } from "lucide-react";

export default function VIPStudio() {
  const [briefings, setBriefings] = useState([
    { id: "VIP-001", client: "Família Medeiros", event: "Casamento no Campo", date: "24/Set", status: "analise", budget: "Sob Consulta" },
    { id: "VIP-002", client: "15 Anos Joana", event: "Festa Temática (Gatsby)", date: "12/Out", status: "producao", budget: "R$ 1.200,00" },
    { id: "VIP-003", client: "Corporate TechX", event: "Conferência", date: "05/Nov", status: "entregue", budget: "R$ 3.500,00" }
  ]);

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-10">
      
      {/* HEADER OVERVIEW */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight flex items-center gap-3">
            <Diamond className="text-sky-400" size={36} /> Estúdio VIP (High-Ticket)
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">Receba briefings milionários. Desenvolva fora da caixa (CSS Personalizado/React) e hospede a arte exclusiva diretamente na conta do cliente.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/25 uppercase text-xs tracking-wider whitespace-nowrap text-white">
          <UploadCloud size={18} />
          Entregar Código ao Cliente
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Painel Esquerdo - Briefings Entrantes */}
        <div className="lg:col-span-1 bg-black/30 border border-white/5 rounded-3xl p-6 backdrop-blur-md">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
             <Inbox size={20} className="text-zinc-400" /> Fila de Briefings
           </h3>
           
           <div className="space-y-4">
             {briefings.map(b => (
               <div key={b.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/30 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-500">{b.id}</span>
                    {b.status === 'analise' && <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">Em Análise</span>}
                    {b.status === 'producao' && <span className="text-[10px] uppercase font-bold text-sky-400 bg-sky-400/10 px-2 py-1 rounded">Programando</span>}
                    {b.status === 'entregue' && <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Entregue</span>}
                  </div>
                  <h4 className="text-white font-bold">{b.client}</h4>
                  <p className="text-zinc-400 text-xs mt-1">{b.event} • {b.date}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Painel Direito - Área de Trabalho / Entrega Mágica */}
        <div className="lg:col-span-2 space-y-6">
           
           {/* Visualizador de Pedido */}
           <div className="bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] border border-sky-500/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
             {/* Design de fundo */}
             <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Diamond size={200} />
             </div>

             <div className="relative z-10 flex items-start justify-between">
               <div>
                  <h3 className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-1">Briefing Selecionado</h3>
                  <h2 className="text-4xl font-black text-white mb-2">15 Anos Joana (Gatsby)</h2>
                  <p className="text-zinc-400 text-sm">A cliente deseja um projeto com fontes Art Déco, animação em partículas douradas e roleta JS.</p>
               </div>
               <div className="text-right">
                  <p className="text-xs text-zinc-500 font-bold uppercase mb-1">Mesa de Negociação</p>
                  <p className="text-2xl font-black text-emerald-400">R$ 1.200,00</p>
               </div>
             </div>

             <div className="mt-8 flex gap-3">
               <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm text-white font-bold flex items-center gap-2 transition-all">
                 <MessageSquareText size={16} /> Ler Respostas do Formulário
               </button>
             </div>
           </div>

           {/* Motor de Entrega Personalizada */}
           <div className="bg-black/30 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
             <h3 className="text-xl font-bold text-white mb-6">Como deseja entregar a obra prima?</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Opção 1: Sobrescrever CSS */}
                <div className="bg-white/5 border border-white/10 hover:border-sky-500/50 rounded-2xl p-6 transition-colors cursor-pointer group">
                   <Code className="text-sky-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                   <h4 className="text-white font-bold text-lg mb-2">Injetar Código Customizado</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">Liberar uma caixa de texto na conta da cliente para o React renderizar seu script HTML/CSS e JS único por cima de um tema base.</p>
                </div>

                {/* Opção 2: URL Externa Bypass */}
                <div className="bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-2xl p-6 transition-colors cursor-pointer group">
                   <LinkIcon className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                   <h4 className="text-white font-bold text-lg mb-2">Vincular URL Externa</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">Você programou o convite numa pasta separada? Cole o link puro aqui e a Fábrica de Sonhos atuará apenas como uma Ponto de Acesso pro cliente.</p>
                </div>

             </div>
           </div>

        </div>

      </div>

    </div>
  )
}
