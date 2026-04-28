"use client";

import { useState } from "react";
import { Search, Landmark, FileText, ArrowRightLeft, ShieldClose, ShieldCheck, CheckCircle2, AlertCircle, Clock, Copy } from "lucide-react";

export default function FinanceModeration() {
  const [finances, setFinances] = useState([
    { id: "MP-9940212", client: "Marcela Silva", plan: "Experiência Premium", value: 99.90, date: "28/Agt 10:14", status: "pago", method: "PIX", gatewayId: "30491823901" },
    { id: "MP-9940211", client: "Roberto Bets", plan: "Pacote Standard", value: 49.90, date: "27/Agt 15:30", status: "chargeback", method: "Cartão (4211)", gatewayId: "30491822812" },
    { id: "MP-9940210", client: "Carlos Eduardo", plan: "Experiência Premium", value: 99.90, date: "27/Agt 08:00", status: "pendente", method: "Boleto", gatewayId: "30491821033" },
    { id: "MP-9940209", client: "Alicia Marques", plan: "Pacote Standard", value: 49.90, date: "26/Agt 21:10", status: "recusado", method: "Cartão (9900)", gatewayId: "30491819999" },
    { id: "MP-9940208", client: "Julia Medeiros", plan: "Experiência Premium", value: 99.90, date: "26/Agt 14:00", status: "pago", method: "PIX", gatewayId: "30491818221" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (id: string, newStatus: string) => {
    setFinances(finances.map(f => f.id === id ? { ...f, status: newStatus } : f));
  };

  const filteredFinances = finances.filter(f => 
    f.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.gatewayId.includes(searchTerm)
  );

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* HEADER OVERVIEW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <Landmark className="text-amber-500" size={32} /> Central Financeira (Gateways)
          </h2>
          <p className="text-zinc-400 mt-2">Fiscalize repasses do Mercado Pago, aprove PIX manuais ou efetue estornos críticos.</p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 min-w-[350px] focus-within:ring-2 focus-within:ring-amber-500/50 transition-all">
          <Search size={18} className="text-zinc-500" />
          <input 
            type="text" 
            placeholder="Buscar por ID, Gateway Log ou Cliente..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white text-sm outline-none w-full placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* PAINEL DE TABELA */}
      <div className="bg-black/20 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-zinc-400 text-xs uppercase tracking-widest border-b border-white/5 whitespace-nowrap">
                <th className="p-6 font-semibold">Nota & Gateway ID</th>
                <th className="p-6 font-semibold">Cliente Final</th>
                <th className="p-6 font-semibold">Venda Realizada</th>
                <th className="p-6 font-semibold">Situação Financeira</th>
                <th className="p-6 font-semibold text-right">Governança (Mercado Pago)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredFinances.map((finance) => (
                <tr key={finance.id} className="hover:bg-white/5 transition-colors group">
                  
                  {/* ID FINANCEIRO */}
                  <td className="p-6">
                    <div className="flex flex-col gap-1">
                      <strong className="text-white text-sm tracking-wide flex items-center gap-2">
                        {finance.id}
                      </strong>
                      <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center gap-1">
                        <Copy size={10} className="hover:text-white cursor-pointer"/> LOG: {finance.gatewayId}
                      </span>
                    </div>
                  </td>

                  {/* CLIENTE & DATA */}
                  <td className="p-6">
                    <p className="text-white font-bold text-sm">{finance.client}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{finance.date}</p>
                  </td>

                  {/* DETALHES DA VENDA */}
                  <td className="p-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-amber-400 font-extrabold text-lg tracking-tight">
                        R$ {finance.value.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1">
                        <ArrowRightLeft size={10}/> {finance.method} • <span className="truncate max-w-[120px]">{finance.plan}</span>
                      </span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="p-6">
                    {finance.status === "pago" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-lg uppercase"><CheckCircle2 size={14}/> Aprovado</span>}
                    {finance.status === "pendente" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1.5 rounded-lg uppercase"><Clock size={14}/> Pendente Webhook</span>}
                    {finance.status === "recusado" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-400/10 border border-rose-400/20 px-3 py-1.5 rounded-lg uppercase"><AlertCircle size={14}/> Recusado P/ Banco</span>}
                    {finance.status === "chargeback" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 bg-rose-500/20 border border-rose-500/40 px-3 py-1.5 rounded-lg uppercase"><ShieldClose size={14}/> Estorno (Fraude)</span>}
                  </td>

                  {/* AÇÕES FINANCEIRAS */}
                  <td className="p-6">
                    <div className="flex justify-end gap-2 opacity-100 lg:opacity-30 group-hover:opacity-100 transition-opacity">
                      
                      <button title="Baixar Visualização da Nota/Invoice" className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        <FileText size={18} />
                      </button>

                      <div className="w-px h-6 bg-white/10 mx-1 self-center"></div>

                      {/* Aprovar Forçado */}
                      {finance.status !== "pago" && (
                        <button onClick={() => toggleStatus(finance.id, "pago")} title="Gatilho de Liberação Forçada (Pago por fora / Bypassar API)" className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                          <ShieldCheck size={18} />
                        </button>
                      )}

                      {/* Executar Reembolso Extra-oficial */}
                      {finance.status === "pago" && (
                        <button onClick={() => toggleStatus(finance.id, "chargeback")} title="Forçar Reembolso (Estornar e Trancar Convite)" className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors">
                          <ShieldClose size={18} />
                        </button>
                      )}

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredFinances.length === 0 && (
            <div className="p-10 text-center text-zinc-500 font-medium">
               Nenhum rastro financeiro encontrado com esta pesquisa.
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
