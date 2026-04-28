import { ReactNode } from 'react';
import { Home, CreditCard, LayoutTemplate, Settings, Palette, Wand2, Users, Ticket, Landmark, Store, Briefcase, Diamond } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f0c29] text-white flex font-sans">
      {/* Sidebar Luxuosa */}
      <aside className="w-72 bg-black/40 border-r border-white/5 p-6 flex flex-col gap-8 backdrop-blur-xl shrink-0 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
            <span className="font-bold text-lg text-white">✨</span>
          </div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Fábrica de Sonhos
          </h1>
        </div>
        
        <nav className="flex flex-col gap-3 flex-1">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 pl-2">Menu Principal</div>
          
          <a href="/admin" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Home size={20} className="text-zinc-500" /> Visão Geral
          </a>

          <a href="/admin/users" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Users size={20} className="text-blue-400" /> Gestão de Clientes
          </a>

          <a href="/admin/invites" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Ticket size={20} className="text-emerald-400" /> Gestão de Convites
          </a>

          <a href="/admin/finance" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Landmark size={20} className="text-amber-400" /> Central Financeira
          </a>

          <div className="text-xs font-semibold text-amber-500/80 uppercase tracking-widest mb-2 pl-2 mt-6 border-t border-white/10 pt-6">B2B & White-Label</div>

          <a href="/admin/resellers" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Store size={20} className="text-amber-400" /> Rede de Revendedores
          </a>

          <a href="/admin/resellers-plans" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
             <Briefcase size={20} className="text-orange-400" /> Planos de Assinatura
          </a>

          <div className="text-xs font-semibold text-sky-400/80 uppercase tracking-widest mb-2 pl-2 mt-6 border-t border-white/10 pt-6">Serviços High-Ticket</div>

          <a href="/admin/concierge" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
             <Diamond size={20} className="text-sky-400" /> Estúdio VIP (Custom)
          </a>
          
          {/* Menu Ativo */}
          <a href="/admin/pricing" className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/10 text-pink-400 border border-pink-500/20 shadow-lg shadow-pink-500/10 font-medium translate-x-1 transition-transform">
            <CreditCard size={20} className="text-pink-400" /> Gestão de Planos
          </a>
          
          
          <a href="/admin/builder" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Wand2 size={20} className="text-pink-500" /> Fábrica de Sonhos
          </a>

          <a href="/admin/themes" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium">
            <Palette size={20} className="text-zinc-500" /> Temas e Cores
          </a>
          
          <a href="/admin/settings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-zinc-400 hover:text-white font-medium mt-auto">
            <Settings size={20} className="text-zinc-500" /> Configurações Gerais
          </a>
        </nav>
      </aside>

      {/* Main Content com gradiente premium */}
      <main className="flex-1 p-10 h-screen overflow-y-auto bg-gradient-to-br from-[#0f0c29] via-[#1a153a] to-[#302b63]">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
