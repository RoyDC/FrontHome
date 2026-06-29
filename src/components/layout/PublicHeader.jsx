import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Menu, X, Facebook, Linkedin, TrendingUp, PiggyBank, ShieldCheck, BadgeDollarSign } from 'lucide-react'
import Logo from '../ui/Logo.jsx'

const PERSONA_TABS = [
  { label: 'Personas', active: true },
  { label: 'Empresas', active: false },
  { label: 'Pymes', active: false },
]

const SECONDARY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '#blog' },
  { label: 'Ubícanos', href: '#footer' },
]

const MAIN_NAV = [
  { label: 'Créditos', icon: TrendingUp },
  { label: 'Ahorros', icon: PiggyBank },
  { label: 'Otros', icon: ShieldCheck },
  { label: 'Cambio Dólares', icon: BadgeDollarSign },
]

export default function PublicHeader() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="lp-header">
      {/* Top bar — Personas / Empresas / Pymes + Home / Blog / Ubícanos / Social */}
      <div className="lp-topbar">
        <div className="lp-topbar-inner">
          <div className="lp-topbar-left">
            {PERSONA_TABS.map((t) => (
              <a
                key={t.label}
                href="#productos"
                className={t.active ? 'active' : ''}
              >
                {t.label}
              </a>
            ))}
          </div>
          <div className="lp-topbar-right">
            {SECONDARY_LINKS.map((n) => (
              <a key={n.label} href={n.href}>{n.label}</a>
            ))}
            <a href="https://www.facebook.com/CajaPrymera" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://www.linkedin.com/company/prymera/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav — Logo + Créditos / Ahorros / Otros / Cambio Dólares */}
      <div className="lp-nav">
        <button className="lp-brand" onClick={() => navigate('/')} aria-label="Prymera — Inicio">
          <Logo size={48} variant="light" subtitle="Primero eres tú" />
        </button>

        <nav className="lp-main-nav">
          {MAIN_NAV.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.label} href="#productos" className="lp-main-nav-item">
                <Icon size={22} strokeWidth={1.8} />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        <button
          className="lp-burger"
          aria-label="Menú"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lp-mobile-menu">
          {MAIN_NAV.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.label} href="#productos" className="lp-mobile-item" onClick={() => setMobileOpen(false)}>
                <Icon size={20} /> {item.label}
              </a>
            )
          })}
          <button className="lp-cta" style={{ marginTop: 8, width: '100%', justifyContent: 'center' }} onClick={() => { navigate('/login'); setMobileOpen(false); }}>
            <Lock size={16} /> Banca por Internet
          </button>
        </div>
      )}
    </header>
  )
}
