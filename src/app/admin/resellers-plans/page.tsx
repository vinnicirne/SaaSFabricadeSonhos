"use client";

import { useState } from "react";
import { Copy, Edit2, CheckCircle2, AlertCircle, PlusCircle, Link as LinkIcon, Save, Store, Briefcase } from "lucide-react";

export default function ResellersPricingDashboard() {
  const [plans, setPlans] = useState([
    {
      id: 3,
      name: "Parceiro Iniciante",
      price: 149.90,
      interval: "por mês",
      features: ["Pode gerar até 10 Convites", "Painel Exclusivo de Controle", "Mural de Recados Ativo", "Marca da Fábrica de Sonhos Fica"],
      mpLink: "https://mpago.la/sub_inic123",
      active: true,
    },
    {
      id: 4,
      name: "Agência Ouro (White-Label)",
      price: 349.90,
      interval: "por mês",
      features: ["Geração de Convites ILIMITADA", "Sem Marca da Plataforma", "Inserção da Própria Logomarca", "Suporte VIP no WhatsApp"],
      mpLink: "https://mpago.la/sub_agencia_pro",
      active: true,
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
      
      <div className="flex items-start justify-between mb-12">
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight flex items-center gap-3">
            <Briefcase size={32} className="text-orange-500" /> Planos de Assinatura (Módulo B2B)
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">Defina o preço das mensalidades da franquia. Planos exclusivos para captar Agências de Eventos e Cerimonialistas garantindo sua Receita Recorrente.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/25 uppercase text-xs tracking-wider whitespace-nowrap text-white">
          <PlusCircle size={18} />
          Nova Franquia
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {plans.map(plan => (
          <div key={plan.id} className="relative bg-black/40 border border-amber-500/20 rounded-3xl p-8 backdrop-blur-md overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              {plan.active ? (
                <span className="absolute top-0 right-0 flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                   <Store size={16} /> Assinatura Ativa
                </span>
              ) : (
                 <span className="absolute top-0 right-0 flex items-center gap-1.5 text-xs font-bold text-rose-300 bg-rose-400/10 border border-rose-400/20 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                   <AlertCircle size={16} /> Inativo
                </span>
              )}
              
              <div className="mb-8 pr-32">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent mt-4 flex items-baseline gap-1">
                  <span className="text-2xl text-amber-400/60 font-medium">R$</span> 
                  {plan.price.toFixed(2).replace('.', ',')}
                  <span className="text-sm text-zinc-500 font-medium ml-2 uppercase tracking-widest">{plan.interval}</span>
                </p>
              </div>
              
              <div className="space-y-4 mb-8 bg-black/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Poderes da Agência</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-amber-100/80 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-amber-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0f0c29]/50 p-5 rounded-2xl border border-amber-500/20 mb-8 border-dashed group-hover:border-amber-500/40 transition-colors">
                <label className="text-xs font-bold text-amber-300 mb-2 flex items-center gap-2 uppercase tracking-wider">
                  <LinkIcon size={14} /> Link Mercado Pago (Assinatura Recorrente)
                </label>
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    value={plan.mpLink} 
                    readOnly 
                    className="bg-black/80 border border-white/5 text-sm text-zinc-300 w-full outline-none px-4 py-3 rounded-xl focus:ring-1 focus:ring-amber-500/50"
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
                <button className="flex justify-center items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-amber-500/5 py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-lg">
                  <Save size={18} /> Salvar Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
