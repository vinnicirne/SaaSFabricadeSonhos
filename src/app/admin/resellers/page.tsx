"use client";

import { useState } from "react";
import { Store, Search, Link as LinkIcon, PowerOff, RefreshCw, BarChart3, Crown } from "lucide-react";

export default function ResellersNetwork() {
  const [resellers, setResellers] = useState([
    { id: "AG-100", business: "Festa & Cia Cerimonial", owner: "Amanda Costa", plan: "Agência White-Label", mrr: "R$ 349,90", invitesGen: 412, status: "Aprovado" },
    { id: "AG-101", business: "Design Kids Pro", owner: "Lucas Ferraz", plan: "Iniciante", mrr: "R$ 149,90", invitesGen: 8, status: "Aprovado" },
    { id: "AG-102", business: "Casamentos SP", owner: "Grupo Noivas", plan: "Agência White-Label", mrr: "R$ 349,90", invitesGen: 154, status: "Inadimplente" },
  ]);

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <Store className="text-amber-500" size={32} /> Rede de Revendedores (B2B)
          </h2>
          <p className="text-zinc-400 mt-2">Fiscalize as agências e cerimonialistas que geram receita recorrente MRR para você.</p>
        </div>
      </div>

      <div className="bg-black/40 border border-amber-500/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-amber-500/5 text-amber-500/70 text-xs uppercase tracking-widest border-b border-amber-500/10">
                <th className="p-6 font-semibold">Empresa / Agência</th>
                <th className="p-6 font-semibold">Plano Assinado</th>
                <th className="p-6 font-semibold text-center">MRR Gerado</th>
                <th className="p-6 font-semibold text-center">Produção</th>
                <th className="p-6 font-semibold text-right">Governança</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {resellers.map((agency) => (
                <tr key={agency.id} className="hover:bg-amber-500/5 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center font-bold text-amber-500">
                        <Crown size={16} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{agency.business}</p>
                        <p className="text-zinc-500 text-xs mt-0.5">Resp: {agency.owner}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-sm font-semibold text-zinc-300">
                    {agency.plan}
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-emerald-400 font-bold">{agency.mrr}/mês</span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1 text-white font-bold text-sm border border-white/10">
                      {agency.invitesGen} Convites
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-end gap-2 opacity-100 lg:opacity-30 group-hover:opacity-100 transition-opacity">
                      <button title="Bloquear Revenda (Falta de Pagamento)" className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors">
                        <PowerOff size={18} />
                      </button>
                      <button title="Ver Relatório de Vendas do Parceiro" className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors">
                        <BarChart3 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
