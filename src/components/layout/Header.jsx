import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LogOut, UserCog, Eye, EyeOff, ChevronDown, Home, Wallet, CreditCard, ArrowRightLeft, FileText } from 'lucide-react'
import { useHBAuth } from '../../hooks/useHBAuth.js'
import { useUI } from '../../context/UIContext.jsx'
import Logo from '../ui/Logo.jsx'

const TABS = [
  { label: 'Inicio', icon: Home, to: '/inicio', match: ['/inicio'] },
  { label: 'Cuentas', icon: Wallet, to: '/cuentas/ahorro', match: ['/cuentas/ahorro'] },
  { label: 'Préstamos', icon: CreditCard, to: '/cuentas/credito', match: ['/cuentas/credito'] },
  { label: 'Operaciones', icon: ArrowRightLeft, to: '/operaciones', match: ['/operaciones', '/creditos/solicitar'] },
]

export default function Header() {
  const { user, logout } = useHBAuth()
  const { hideAmounts, toggleHideAmounts } = useUI()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuUser, setMenuUser] = useState(false)

  useEffect(() => { setMenuUser(false) }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  const iniciales = (user?.nombre || 'C')
    .split(/[\s,]+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join('').toUpperCase()

  const isActive = (tab) => tab.match.some((m) => location.pathname.startsWith(m))

  return (
    <header className="hb-auth-header">
      {/* Top bar oscura */}
      <div className="hb-auth-topbar">
        <div className="hb-auth-topbar-inner">
          <button className="hb-auth-brand" onClick={() => navigate('/inicio')} aria-label="Inicio">
            <Logo size={38} variant="light" subtitle="Primero eres tú" />
          </button>

          <div className="hb-auth-topbar-right">
            <button className="hb-auth-hide" onClick={toggleHideAmounts} title="Ocultar importes">
              {hideAmounts ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>Ocultar importes</span>
              <span className={`hb-auth-switch ${hideAmounts ? 'on' : ''}`}>
                <span className="hb-auth-switch-dot" />
              </span>
            </button>

            <div className="hb-auth-user-wrap">
              <button className="hb-auth-user" onClick={() => setMenuUser((v) => !v)}>
                <span className="hb-auth-avatar">{iniciales}</span>
                <span className="hb-auth-user-text">
                  <strong>{user?.nombre || 'Cliente'}</strong>
                  <small>{user?.codcliente}</small>
                </span>
                <ChevronDown size={14} />
              </button>
              {menuUser && (
                <div className="hb-auth-user-menu">
                  <button onClick={() => navigate('/inicio')}>
                    <UserCog size={16} /> Actualiza tus datos
                  </button>
                  <button onClick={handleLogout}>
                    <LogOut size={16} /> Salir
                  </button>
                </div>
              )}
            </div>

            <button className="hb-auth-logout" onClick={handleLogout}>
              <LogOut size={16} /> Salir
            </button>
          </div>
        </div>
      </div>

      {/* Barra de navegación con iconos */}
      <nav className="hb-auth-nav">
        <div className="hb-auth-nav-inner">
          {TABS.map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.to}
                className={`hb-auth-nav-item ${isActive(t) ? 'active' : ''}`}
                onClick={() => navigate(t.to)}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span>{t.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
