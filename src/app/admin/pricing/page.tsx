"use client";

import { useState } from "react";
import { Copy, Edit2, CheckCircle2, AlertCircle, PlusCircle, Link as LinkIcon, Save, Users, Store } from "lucide-react";

interface Plan {
  id: number;
  name: string;
  price: number;
  interval?: string;
  features: string[];
  mpLink: string;
  active: boolean;
}

// Mock B2C
const b2cPlans: Plan[] = [
  {
    id: 1,
    name: "Pacote Standard",
    price: 49.90,
    features: ["Acesso válido por 30 dias", "Galeria de Áudio Básica", "1 Tema Base", "Sem Mural de Mensagens", "Logotipo 'Fábrica de Sonhos' Fixo"],
    mpLink: "https://mpago.la/1a2b3c",
    active: true,
  },
  {
    id: 2,
    name: "Experiência Premium",
    price: 99.90,
    features: ["Acesso Vitalício ao Convite", "Mural de Recados em Tempo Real", "Áudios Premium e Efeitos", "Apenas 1 Convite", "Logotipo Discreto"],
    mpLink: "https://mpago.la/4d5e6f",
    active: true,
  }
];

// Mock B2B (Resellers)
const b2bPlans: Plan[] = [
  {
    id: 3,
    name: "Revendedor Iniciante",
    price: 149.90,
    interval: "por mês",
    features: ["Até 10 Convites/mês", "Mural de Recados Incluído", "Painel de Gestão Próprio", "Suporte Prioritário"],
    mpLink: "https://mpago.la/sub_inic123",
    active: true,
  },
  {
    id: 4,
    name: "Agência White-Label",
    price: 349.90,
    interval: "por mês",
    features: ["Convites ILIMITADOS", "Sem Marca d'água (White-Label)", "Link Personalizado do Cliente", "Seu Logo no Rodapé", "Acesso a API"],
    mpLink: "https://mpago.la/sub_agencia_pro",
    active: true,
  }
];


export default function PricingDashboard() {
  const [tab, setTab] = useState("B2C");
  
  const currentPlans = tab === "B2C" ? b2cPlans : b2bPlans;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Gestão de Checkouts</h2>
          <p className="text-zinc-400 text-lg max-w-xl">Configure os links do Mercado Pago. Segregue vendas unitárias de assinaturas recorrentes B2B.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-pink-500/25 uppercase text-xs tracking-wider whitespace-nowrap">
          <PlusCircle size={18} />
          Criar Checkout
        </button>
      </div>

      {/* ABAS DE NAVEGAÇÃO B2C / B2B */}
      <div className="flex p-1 bg-black/40 border border-white/10 rounded-2xl w-max mb-10">
        <button 
          onClick={() => setTab("B2C")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${tab === "B2C" ? "bg-white/10 text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
        >
          <Users size={16} /> Venda Única (Cliente Final)
        </button>
        <button 
          onClick={() => setTab("B2B")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${tab === "B2B" ? "bg-amber-500/20 text-amber-400 shadow-lg border border-amber-500/10" : "text-zinc-500 hover:text-zinc-300"}`}
        >
          <Store size={16} /> Revendedores (Assinatura B2B)
        </button>
      </div>

      {/* RENDERIZAÇÃO DOS CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-500">
        {currentPlans.map(plan => (
          <div key={plan.id} className={`relative bg-black/20 border rounded-3xl p-8 backdrop-blur-md overflow-hidden group transition-all duration-300
            ${tab === "B2B" ? "border-amber-500/20 hover:border-amber-500/50" : "border-white/10 hover:border-pink-500/30"}
          `}>
            
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${tab === "B2B" ? "from-amber-500/5 to-orange-500/5" : "from-pink-500/5 to-purple-500/5"}`}></div>
            
            <div className="relative z-10">
              {plan.active ? (
                <span className="absolute top-0 right-0 flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                   <CheckCircle2 size={16} /> {tab === "B2B" ? "Assinatura Live" : "Ativo no Front"}
                </span>
              ) : (
                 <span className="absolute top-0 right-0 flex items-center gap-1.5 text-xs font-bold text-rose-300 bg-rose-400/10 border border-rose-400/20 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                   <AlertCircle size={16} /> Inativo
                </span>
              )}
              
              <div className="mb-8 pr-32">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className={`text-5xl font-black bg-clip-text text-transparent mt-4 flex items-baseline gap-1 bg-gradient-to-r ${tab === "B2B" ? "from-amber-300 to-orange-400" : "from-pink-300 to-purple-400"}`}>
                  <span className={`text-2xl font-medium ${tab === "B2B" ? "text-amber-400/60" : "text-pink-400/60"}`}>R$</span> 
                  {plan.price.toFixed(2).replace('.', ',')}
                  {plan.interval && <span className="text-sm text-zinc-500 font-medium ml-2 uppercase tracking-widest">{plan.interval}</span>}
                </p>
              </div>
              
              <div className="space-y-4 mb-8 bg-black/40 p-6 rounded-2xl border border-white/5">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Recursos Liberados</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tab === "B2B" ? "bg-amber-500/20" : "bg-pink-500/20"}`}>
                        <CheckCircle2 size={14} className={tab === "B2B" ? "text-amber-400" : "text-pink-400"} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0f0c29]/50 p-5 rounded-2xl border border-white/10 mb-8 border-dashed group-hover:border-white/20 transition-colors">
                <label className={`text-xs font-bold mb-2 flex items-center gap-2 uppercase tracking-wider ${tab === "B2B" ? "text-amber-300" : "text-pink-300"}`}>
                  <LinkIcon size={14} /> Link Mercado Pago {tab === "B2B" && "(Recorrente)"}
                </label>
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    value={plan.mpLink} 
                    readOnly 
                    className={`bg-black/80 border border-white/5 text-sm text-zinc-300 w-full outline-none px-4 py-3 rounded-xl focus:ring-1 ${tab === "B2B" ? "focus:ring-amber-500/50" : "focus:ring-pink-500/50"}`}
                  />
                  <button title="Copiar Link" className="text-zinc-400 hover:text-white p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 px-4 rounded-xl text-sm font-bold transition-colors">
                  <Edit2 size={18} /> Editar Privilégios
                </button>
                <button className={`flex justify-center items-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-lg border ${
                    tab === "B2B" 
                    ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-amber-500/5" 
                    : "bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border-pink-500/30 shadow-pink-500/5"
                  }`}>
                  <Save size={18} /> Salvar Automação
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
