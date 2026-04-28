"use client";

import { useState } from "react";
import { Search, ShieldAlert, Key, Trash2, Ban, CheckCircle2, UserX, UserCheck, Mail, ShieldCheck } from "lucide-react";

export default function UsersModeration() {
  const [users, setUsers] = useState([
    { id: "USR-001", name: "Marcela Silva", email: "marcela.silva@email.com", plan: "🌟 Premium VIP", invites: 3, status: "ativo" },
    { id: "USR-002", name: "Roberto Carlos", email: "robertobets@email.com", plan: "Standard", invites: 1, status: "ativo" },
    { id: "USR-003", name: "Julia Medeiros", email: "juju.med@email.com", plan: "Free Trial", invites: 0, status: "suspenso" },
    { id: "USR-004", name: "Hacker Invader", email: "anon_bot@dark.net", plan: "Hacker", invites: 50, status: "banido" },
    { id: "USR-005", name: "Carlos Eduardo", email: "cadu.eventos@email.com", plan: "🌟 Premium VIP", invites: 12, status: "ativo" },
    { id: "USR-B2B-1", name: "Festa & Cia", email: "agencia@festacia.com", plan: "👑 Agência White-Label (B2B)", invites: 412, status: "ativo" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (id: string, newStatus: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: newStatus } : u));
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      
      {/* HEADER OVERVIEW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={32} /> Moderação de Clientes
          </h2>
          <p className="text-zinc-400 mt-2">Suspenda convites inadimplentes, encerre contas maliciosas ou reinicie senhas.</p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 min-w-[300px] focus-within:ring-2 focus-within:ring-blue-500/50 transition-all">
          <Search size={18} className="text-zinc-500" />
          <input 
            type="text" 
            placeholder="Buscar por nome ou e-mail..." 
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
              <tr className="bg-white/5 text-zinc-400 text-xs uppercase tracking-widest border-b border-white/5">
                <th className="p-6 font-semibold">Cliente</th>
                <th className="p-6 font-semibold">Plano</th>
                <th className="p-6 font-semibold text-center">Convites Gerados</th>
                <th className="p-6 font-semibold">Status de Acesso</th>
                <th className="p-6 font-semibold text-right">Armas de Moderação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                  
                  {/* CLIENTE INFO */}
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{user.name}</p>
                        <p className="text-zinc-500 text-xs flex items-center gap-1 mt-0.5"><Mail size={10}/> {user.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* PLANO */}
                  <td className="p-6">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      user.plan.includes("VIP") ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-white/5 text-zinc-300 border-white/10"
                    }`}>
                      {user.plan}
                    </span>
                  </td>

                  {/* CONVITES GERADOS */}
                  <td className="p-6 text-center">
                    <div className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-white/5 text-white font-black text-sm border border-white/5">
                      {user.invites}
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="p-6">
                    {user.status === "ativo" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md uppercase"><CheckCircle2 size={14}/> Autorizado</span>}
                    {user.status === "suspenso" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md uppercase"><ShieldAlert size={14}/> Inadimplente</span>}
                    {user.status === "banido" && <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-400/10 px-2 py-1 rounded-md uppercase"><Ban size={14}/> Banido</span>}
                  </td>

                  {/* AÇÕES DE MODERAÇÃO */}
                  <td className="p-6">
                    <div className="flex justify-end gap-2 opacity-100 lg:opacity-30 group-hover:opacity-100 transition-opacity">
                      
                      {/* Botoes de Status Rápido */}
                      {user.status !== "ativo" && (
                        <button onClick={() => toggleStatus(user.id, "ativo")} title="Restaurar Conta Libre" className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                          <UserCheck size={18} />
                        </button>
                      )}
                      
                      {user.status === "ativo" && (
                        <button onClick={() => toggleStatus(user.id, "suspenso")} title="Suspender por Falta de Pagamento" className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors">
                          <UserX size={18} />
                        </button>
                      )}

                      <button title="Forçar Redefinição de Senha" className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Key size={18} />
                      </button>

                      <div className="w-px h-6 bg-white/10 mx-1 self-center"></div>

                      <button onClick={() => toggleStatus(user.id, "banido")} title="Banir Dispositivo (Shadowban)" className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors">
                        <Ban size={18} />
                      </button>

                      <button onClick={() => deleteUser(user.id)} title="Excluir Usuário e Dados (LGPD)" className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredUsers.length === 0 && (
            <div className="p-10 text-center text-zinc-500 font-medium">
              Nenhum cliente encotrado com esse filtro.
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
