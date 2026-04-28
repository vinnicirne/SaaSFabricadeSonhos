"use client";

import { Settings, Shield, Webhook, Database, Server } from "lucide-react";

export default function GlobalSettings() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <Settings className="text-zinc-500" size={32} /> Central do Sistema
          </h2>
          <p className="text-zinc-400 mt-2">Variáveis de ambiente, integrações de APIs e Webhooks globais.</p>
        </div>
      </div>

      <div className="space-y-6">
        
        {/* BLOCO 1: BANCO DE DADOS */}
        <div className="bg-black/30 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
             <Database className="text-emerald-400" size={24} />
             <h3 className="text-xl font-bold text-white">Nó do Servidor (Supabase)</h3>
          </div>
          <div className="space-y-4">
             <div>
               <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">URL da API do Supabase</label>
               <input type="text" value="https://xihkdfdlwfwaxfckhjnl.supabase.co" readOnly className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-400 font-mono text-sm outline-none" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Service Role Key (Master)</label>
               <input type="password" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..." readOnly className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-400 font-mono text-sm outline-none" />
             </div>
          </div>
        </div>

        {/* BLOCO 2: GATEWAY E INTEGRAÇÕES */}
        <div className="bg-black/30 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
             <Webhook className="text-blue-400" size={24} />
             <h3 className="text-xl font-bold text-white">Integrações Extras</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">API Pixabay (Músicas)</label>
               <input type="password" value="444102-acb882..." readOnly className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-400 font-mono text-sm outline-none" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Mercado Pago Webhook</label>
               <input type="text" value="https://api.mercadopago.com/..." readOnly className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-400 font-mono text-sm outline-none" />
             </div>
          </div>
        </div>

      </div>

    </div>
  )
}
