"use client";

import { useState } from "react";
import { Search, ExternalLink, MessageSquareOff, Trash2, PowerOff, CheckCircle2, Ticket, ShieldBan, ShieldCheck } from "lucide-react";

export default function InvitesModeration() {
  const [invites, setInvites] = useState([
    { id: "INV-2900", title: "Festa de 15 Anos - Emilly", client: "Marcela Silva", slug: "/c/15-anos-emilly", views: 240, status: "online", muralActive: true },
    { id: "INV-2845", title: "Casamento Bruno e Ju", client: "Carlos Eduardo", slug: "/c/casamento-bruno-ju", views: 1205, status: "online", muralActive: false },
    { id: "INV-2801", title: "Formatura Medicina", client: "Roberto Bets", slug: "/c/formatura-med-rob", views: 15, status: "bloqueado", muralActive: true },
    { id: "INV-2750", title: "Chá de Fraldas Lucas", client: "Alicia Marques", slug: "/c/cha-lucas", views: 80, status: "online", muralActive: true },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleInviteStatus = (id: string, currentStatus: string) => {
    setInvites(invites.map(inv => inv.id === id ? { ...inv, status: currentStatus === "online" ? "bloqueado" : "online" } : inv));
  };

  const toggleMural = (id: string) => {
    setInvites(invites.map(inv => inv.id === id ? { ...inv, muralActive: !inv.muralActive } : inv));
  };

  const deleteInvite = (id: string) => {
    setInvites(invites.filter(inv => inv.id !== id));
  };

  const filteredInvites = invites.filter(inv => 
    inv.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    inv.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      
      {/* HEADER OVERVIEW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <Ticket className="text-emerald-500" size={32} /> Moderação de Convites 
          </h2>
          <p className="text-zinc-400 mt-2">Controle os acessos públicos, derrube URLs indevidas ou bloqueie murais tóxicos.</p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 min-w-[300px] focus-within:ring-2 focus-within:ring-emerald-500/50 transition-all">
          <Search size={18} className="text-zinc-500" />
          <input 
            type="text" 
            placeholder="Buscar por Título ou ID (INV-XX)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white text-sm outline-none w-full placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* Tabela de Convites */}
      <div className="bg-black/20 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-zinc-400 text-xs uppercase tracking-widest border-b border-white/5">
                <th className="p-6 font-semibold">Título do Evento & Slug</th>
                <th className="p-6 font-semibold">Cliente Dono</th>
                <th className="p-6 font-semibold text-center">Tráfego (Views)</th>
                <th className="p-6 font-semibold">Status Pblico</th>
                <th className="p-6 font-semibold text-right">Armas de Moderação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInvites.map((invite) => (
                <tr key={invite.id} className="hover:bg-white/5 transition-colors group">
                  
                  {/* TITLE & URL */}
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center font-bold text-emerald-400">
                        <span className="text-xs">VIP</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{invite.title}</p>
                        <a href="#" className="text-zinc-500 hover:text-emerald-400 text-xs flex items-center gap-1 mt-0.5 transition-colors">
                          <ExternalLink size={10}/> seudominio.com{invite.slug}
                        </a>
                      </div>
                    </div>
                  </td>

                  {/* CLIENTE */}
                  <td className="p-6 text-sm font-semibold text-zinc-300">
                    {invite.client}
                  </td>

                  {/* VIEWS */}
                  <td className="p-6 text-center">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1 text-white font-bold text-sm border border-white/5">
                      🔥 {invite.views}
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="p-6">
                    {invite.status === "online" ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg uppercase">
                        <CheckCircle2 size={14}/> No Ar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-400/10 px-3 py-1.5 rounded-lg uppercase">
                        <ShieldBan size={14}/> Página Offline (404)
                      </span>
                    )}
                  </td>

                  {/* AÇÕES DE MODERAÇÃO DE CONVITE */}
                  <td className="p-6">
                    <div className="flex justify-end gap-2 opacity-100 lg:opacity-30 group-hover:opacity-100 transition-opacity">
                      
                      <button title="Acessar o link do Convite ao Vivo" className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        <ExternalLink size={18} />
                      </button>

                      {/* Mural de Recados Toggle */}
                      <button 
                        onClick={() => toggleMural(invite.id)} 
                        title={invite.muralActive ? "Desativar Mural de Recados Publíco (Anti-Spam)" : "Reativar Mural de Recados"}
                        className={`p-2 rounded-lg transition-colors ${invite.muralActive ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'}`}
                      >
                         {invite.muralActive ? <MessageSquareOff size={18} /> : <ShieldCheck size={18} />}
                      </button>

                      <div className="w-px h-6 bg-white/10 mx-1 self-center"></div>

                      {/* Derrubar URL Global */}
                      <button 
                        onClick={() => toggleInviteStatus(invite.id, invite.status)} 
                        title={invite.status === 'online' ? "Derrubar URL Oficial (Modo Manutenção)" : "Restaurar URL Dinâmica"} 
                        className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${invite.status === 'online' ? 'bg-rose-500/10 text-rose-400 hover:bg-rose-500/20' : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'}`}
                      >
                        <PowerOff size={18} /> 
                      </button>

                      {/* Excluir DB */}
                      <button onClick={() => deleteInvite(invite.id)} title="Lixeiro Espacial (Destruir Convite)" className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredInvites.length === 0 && (
            <div className="p-10 text-center text-zinc-500 font-medium">
              Nenhuma URL de convite encontrada no sistema.
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
