"use client";

import { useState } from "react";
import { Users, Ticket, TrendingUp, Activity, Archive, DownloadCloud, X, Diamond } from "lucide-react";

export default function AdminOverview() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const stats = [
    { id: "users", label: "Usuários Ativos", value: "3.428", icon: <Users size={20} className="text-blue-400" />, trend: "+12%", bg: "bg-blue-500/10 border-blue-500/20" },
    { id: "active", label: "Convites Rodando", value: "8.902", icon: <Activity size={20} className="text-emerald-400" />, trend: "+24%", bg: "bg-emerald-500/10 border-emerald-500/20" },
    { id: "vip_requests", label: "Briefings VIP", value: "03 Novos", icon: <Diamond size={20} className="text-sky-400" />, trend: "🔥 Ação Exigida", bg: "bg-sky-500/10 border-sky-500/40 animate-pulse shadow-lg shadow-sky-500/20" },
    { id: "revenue", label: "Lucro Estimado", value: "R$ 42.500", icon: <TrendingUp size={20} className="text-pink-400" />, trend: "+18%", bg: "bg-pink-500/10 border-pink-500/20" },
  ];

  const recentInvites = [
    { id: "INV-2901", user: "Marcela Silva", theme: "Princesas Reais", date: "Há 5 min", status: "Ativo", dot: "bg-emerald-400" },
    { id: "INV-2900", user: "Roberto Carlos", theme: "Customizado", date: "Há 12 min", status: "Testando", dot: "bg-yellow-400" },
    { id: "INV-2899", user: "Julia Medeiros", theme: "Patrulha Canina", date: "Há 4 horas", status: "Trancado (Aguardando Pagamento)", dot: "bg-rose-400" },
    { id: "INV-2041", user: "Carlos Eduardo", theme: "Luxo Moderno", date: "Há 6 meses", status: "Inativo/Expirado", dot: "bg-zinc-500" },
  ];

  // Banco de Dados Mockado para o Modal
  const metricDetails: Record<string, any> = {
    users: { 
      title: "Detalhamento: Usuários Ativos", 
      desc: "Clientes acessando a plataforma nos últimos 30 dias.",
      headers: ["Nome do Cliente", "Plano Contratado", "Último Acesso"], 
      data: [
        {name: "Marcela Silva", detail1: "Premium VIP", detail2: "Hoje, 14:02"}, 
        {name: "Roberto Carlos", detail1: "Standard", detail2: "Ontem, 09:12"},
        {name: "Alice Marques", detail1: "Premium VIP", detail2: "03/Ago, 15:45"},
        {name: "Julio Nogueira", detail1: "Free Trial", detail2: "02/Ago, 10:11"},
      ] 
    },
    active: { 
      title: "Convites Rodando (Live)", 
      desc: "Tráfego sendo gerado nos links dos convidados neste momento.",
      headers: ["Identificador (ID)", "Cliques/Visitas", "Status da Rota"], 
      data: [
        {name: "INV-2901 (Festa da Gabi)", detail1: "420 views", detail2: "🟢 Bombando"}, 
        {name: "INV-2900 (15 Anos Joana)", detail1: "15 views", detail2: "🟡 Compartilhando"},
        {name: "INV-2840 (Casamento R&J)", detail1: "1.205 views", detail2: "🟢 Bombando"}
      ] 
    },
    vip_requests: { 
      title: "Solicitações de Estúdio VIP (Realtime)", 
      desc: "Tickets entrantes demandando Orçamento Rápido ou Liberação de Código.",
      headers: ["Cliente Responsável", "Tema da Demanda", "Mesa de Negociação"], 
      data: [
        {name: "Renato Diniz", detail1: "Formatura Dourada (Novo)", detail2: "Orçamento Aberto"},
        {name: "Família Medeiros", detail1: "Casamento no Campo", detail2: "Orçamento Aberto"}, 
        {name: "Joana Alves", detail1: "15 Anos Gatsby (Em Produção)", detail2: "R$ 1.200,00"}
      ] 
    },
    revenue: { 
      title: "Fluxo de Lucro Estimado", 
      desc: "Relatório gerencial de caixa com base em aprovações do Mercado Pago.",
      headers: ["Período (Mês)", "Receita Bruta", "Ticket Médio por Convite"], 
      data: [
        {name: "Agosto (Atual)", detail1: "R$ 15.000,00", detail2: "R$ 69,90"}, 
        {name: "Julho", detail1: "R$ 13.500,00", detail2: "R$ 68,00"},
        {name: "Junho", detail1: "R$ 14.000,00", detail2: "R$ 70,50"}
      ] 
    }
  };

  const currentModaData = selectedMetric ? metricDetails[selectedMetric] : null;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* HEADER MASTER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            📈 Centro de Operações (Master)
          </h2>
          <p className="text-zinc-400 mt-1">Sua visão holística e dados em tempo real da plataforma SaaS.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/10 shadow-lg">
            <Archive size={16} /> Limpar Inativos
          </button>
          <button className="flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/10">
            <DownloadCloud size={16} /> Gerar Relatório
          </button>
        </div>
      </div>

      {/* OVERVIEW CARDS CLICÁVEIS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <button 
            key={idx} 
            onClick={() => setSelectedMetric(stat.id)}
            className={`p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden group text-left cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl hover:shadow-2xl hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500/50 ${stat.bg}`}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none"></div>
            <div className="flex items-start justify-between mb-4">
              <div className="bg-black/30 p-2.5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 flex items-center gap-1 rounded-md bg-white/10 text-white`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-zinc-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-black text-white mt-1 group-hover:text-pink-100 transition-colors">{stat.value}</p>
          </button>
        ))}
      </div>

      {/* MODAL PARA EXIBIR OS DADOS SOLICITADOS PELA TELA */}
      {selectedMetric && currentModaData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedMetric(null)}>
          <div className="bg-[#1a153a] border border-white/10 p-8 rounded-3xl max-w-2xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedMetric(null)} className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-white/5 p-2 rounded-lg hover:bg-rose-500/20 hover:text-rose-400 transition-all">
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-black text-white mb-2">{currentModaData.title}</h3>
            <p className="text-zinc-400 text-sm mb-8">{currentModaData.desc}</p>
            
            <div className="bg-black/30 rounded-2xl border border-white/5 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-zinc-400 text-xs uppercase tracking-wider">
                    {currentModaData.headers.map((header: string, i: number) => (
                      <th key={i} className="p-4 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {currentModaData.data.map((row: any, i: number) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-bold text-white text-sm">{row.name}</td>
                      <td className="p-4 text-zinc-300 text-sm">{row.detail1}</td>
                      <td className="p-4 text-zinc-400 text-sm font-medium">{row.detail2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-all text-sm">
                Baixar Planilha CSV
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REMAINDER OF DASHBOARD (Charts and Live Feed) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* GRÁFICO DE CRESCIMENTO (MOCK CSS) */}
        <div className="lg:col-span-2 bg-black/20 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp size={20} className="text-pink-400" /> Curva de Adoção Mensal
            </h3>
            <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 inline-block rounded border border-emerald-400/20 font-bold uppercase tracking-widest">
              Live Real-Time
            </span>
          </div>

          <div className="h-64 flex items-end justify-between gap-2 p-4 border-b border-l border-white/10 relative">
            <div className="absolute w-full h-full inset-0 flex flex-col justify-between pt-4 pb-4 pointer-events-none">
              {[1,2,3,4].map(line => <div key={line} className="w-full border-t border-white/5"></div>)}
            </div>
            
            {[40, 55, 70, 85, 60, 110, 140].map((h, i) => (
              <div key={i} className="relative flex flex-col items-center justify-end w-full group">
                <div 
                  className="w-full max-w-[40px] bg-gradient-to-t from-pink-600/40 to-purple-500/80 rounded-t-lg group-hover:brightness-125 transition-all duration-500 relative" 
                  style={{ height: `${h}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded transition-opacity shadow-xl pointer-events-none z-10 w-max">
                    +{h * 12} leads
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500 px-4">
            <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul (Atual)</span>
          </div>
        </div>

        {/* FEED DE CONVITES EM TEMPO REAL */}
        <div className="bg-black/20 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity size={20} className="text-blue-400" /> Fluxo Ao Vivo
            </h3>
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            {recentInvites.map((invite, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group cursor-pointer">
                <div className="flex items-center justify-between">
                  <strong className="text-white text-sm tracking-wide">{invite.id}</strong>
                  <span className="text-xs text-zinc-500 font-medium">{invite.date}</span>
                </div>
                <p className="text-xs text-zinc-400"><span className="text-zinc-300 font-semibold">{invite.user}</span> • {invite.theme}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${invite.dot}`}></div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">{invite.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
