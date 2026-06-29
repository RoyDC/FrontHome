import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CreditCard, Wallet, PiggyBank, Send, Smartphone, ShieldCheck,
  TrendingUp, Clock, MapPin, ArrowRight, Lock, BadgePercent, Briefcase,
  Quote, Landmark, BadgeDollarSign,
} from 'lucide-react'
import PublicHeader from '../components/layout/PublicHeader.jsx'
import PublicFooter from '../components/layout/PublicFooter.jsx'
import bannerAuto from '../assets/Banner-AutoPrymera-2025.04.07_0.png'
import bannerEstafas from '../assets/22.png'
import bannerAlcancia from '../assets/Joven-con-alcancía-2025-04-04.png'
import bannerNoAdeudo from '../assets/Banners-NoAdeudo-2025.03.21.png'
import bannerDni from '../assets/Banner-Pago-con-Nro-de-DNI.jpg'

const PRODUCTOS = [
  { icon: PiggyBank, color: '#003366', titulo: 'Cuenta de Ahorros', desc: 'Maneja tu dinero sin costo de mantenimiento y gana intereses todos los días.' },
  { icon: Wallet, color: '#0066cc', titulo: 'Cuenta Sueldo', desc: 'Recibe tu sueldo, retira sin comisiones y accede a beneficios exclusivos.' },
  { icon: BadgePercent, color: '#e8a317', titulo: 'Crédito de Consumo', desc: 'El efectivo que necesitas con tasas preferenciales y cuotas a tu medida.' },
  { icon: Briefcase, color: '#00a9a5', titulo: 'Crédito Microempresa', desc: 'Impulsa tu negocio con financiamiento ágil pensado para emprendedores.' },
  { icon: Send, color: '#2e7d32', titulo: 'Transferencias', desc: 'Mueve tu dinero entre tus cuentas al instante, las 24 horas del día.' },
  { icon: CreditCard, color: '#c62828', titulo: 'Tarjeta de Débito', desc: 'Paga y compra en todo el país, en tiendas y por internet, con total seguridad.' },
]

const BENEFICIOS = [
  { icon: Smartphone, titulo: '100% Digital', desc: 'Abre productos y opera desde tu celular, sin ir a una agencia.' },
  { icon: ShieldCheck, titulo: 'Seguro y protegido', desc: 'Tus operaciones viajan cifradas y bajo supervisión de la SBS.' },
  { icon: Clock, titulo: 'Disponible 24/7', desc: 'Consulta saldos, paga cuotas y transfiere a cualquier hora.' },
  { icon: MapPin, titulo: 'Cobertura nacional', desc: 'Presencia en todo el país, inspirados en la fuerza de los Andes.' },
]

const TESTIMONIOS = [
  { nombre: 'María García', rol: 'Emprendedora', texto: 'Con el crédito de Prymera pude ampliar mi negocio. El proceso fue rápido y sin papeleo innecesario.', initials: 'MG' },
  { nombre: 'Carlos López', rol: 'Cliente desde 2018', texto: 'La cuenta de ahorros me ha permitido organizar mis finanzas. Los intereses son competitivos.', initials: 'CL' },
  { nombre: 'Ana Martínez', rol: 'Gerente de empresa', texto: 'El confirming nos ha ayudado a mejorar nuestra liquidez. Prymera entiende las necesidades de las empresas.', initials: 'AM' },
]

const SLIDES = [
  {
    title: '¡Hasta 5.25% TREA!',
    subtitle: 'Depósito a Plazo Fijo',
    cta: 'Conocer más',
    image: bannerAlcancia,
  },
  {
    title: 'Crédito Vehicular',
    subtitle: 'Tasa Preferencial + regalo',
    cta: 'Ver más',
    image: bannerAuto,
  },
  {
    title: 'Constancias de No Adeudo',
    subtitle: 'Infórmate aquí',
    cta: 'Ver más',
    image: bannerNoAdeudo,
  },
  {
    title: 'Paga fácil con tu DNI',
    subtitle: 'Yape, BCP, BBVA, KASNET',
    cta: 'Ver más',
    image: bannerDni,
  },
  {
    title: 'Cuídate de las estafas',
    subtitle: 'NO solicitamos dinero ni contraseñas',
    cta: 'Conocer más',
    image: bannerEstafas,
  },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[currentSlide]

  return (
    <div className="lp-page">
      <PublicHeader />

      {/* ===== HERO — Carrusel Prymera ===== */}
      <section className="lp-hero">
        <div className="lp-hero-bg" />

        {/* Imagen del slide como fondo completo */}
        <img
          src={slide.image}
          alt={slide.title}
          className="lp-hero-bg-img"
        />

        <div className="lp-hero-inner">
          <div className="lp-hero-content">
            <h1 className="lp-hero-title">{slide.title}</h1>
            <p className="lp-hero-subtitle">{slide.subtitle}</p>
            <button className="lp-hero-btn" onClick={() => navigate('/login')}>
              {slide.cta}
            </button>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="lp-hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`lp-hero-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Curva inferior */}
        <div className="lp-hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z" fill="#fff"/>
          </svg>
        </div>
      </section>

      {/* ===== "Primero eres tú" — Blog cards ===== */}
      <section className="lp-section" style={{ paddingTop: 48 }}>
        <div className="lp-section-head">
          <h2 style={{ color: 'var(--hb-primary)' }}>Primero eres tú</h2>
        </div>
        <div className="lp-blog-grid">
          <article className="lp-blog-card" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
            <div className="lp-blog-img" style={{ background: 'linear-gradient(135deg, #003366, #0066cc)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PiggyBank size={64} color="rgba(255,255,255,0.3)" />
            </div>
            <div className="lp-blog-body">
              <span className="lp-blog-tag">Créditos</span>
              <h3>Crédito de Consumo</h3>
              <p>El efectivo que necesitas con tasas preferenciales y cuotas a tu medida.</p>
            </div>
          </article>
          <article className="lp-blog-card" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
            <div className="lp-blog-img" style={{ background: 'linear-gradient(135deg, #e8a317, #f57f17)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={64} color="rgba(255,255,255,0.3)" />
            </div>
            <div className="lp-blog-body">
              <span className="lp-blog-tag">Ahorros</span>
              <h3>Depósito a Plazo Fijo</h3>
              <p>Hasta 5.25% TREA. Haz crecer tu dinero con total seguridad.</p>
            </div>
          </article>
          <article className="lp-blog-card" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
            <div className="lp-blog-img" style={{ background: 'linear-gradient(135deg, #00a9a5, #2e7d32)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={64} color="rgba(255,255,255,0.3)" />
            </div>
            <div className="lp-blog-body">
              <span className="lp-blog-tag">Negocios</span>
              <h3>Crédito Microempresa</h3>
              <p>Impulsa tu negocio con financiamiento ágil pensado para emprendedores.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== PRODUCTOS ===== */}
      <section className="lp-section" style={{ background: '#f5f7fa' }} id="productos">
        <div className="lp-section-head">
          <h2>Nuestros Productos</h2>
          <p>Encuentra tus productos en Prymera</p>
        </div>
        <div className="lp-products">
          {PRODUCTOS.map((p) => {
            const Icon = p.icon
            return (
              <article className="lp-product" key={p.titulo}>
                <span className="lp-product-icon" style={{ background: `${p.color}15`, color: p.color }}>
                  <Icon size={28} />
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
                <button className="lp-product-link" onClick={() => navigate('/login')}>
                  Conócelo <ArrowRight size={15} />
                </button>
              </article>
            )
          })}
        </div>
      </section>

      {/* ===== PROMO ===== */}
      <section className="lp-promo">
        <div className="lp-promo-inner">
          <div>
            <span className="lp-promo-tag"><TrendingUp size={15} /> Producto Destacado</span>
            <h2>Solicita tu crédito 100% en línea</h2>
            <p>Sin papeleos ni colas. Pide tu crédito desde tu Banca por Internet y recibe una respuesta al instante.</p>
          </div>
          <button className="lp-btn lp-btn-light" onClick={() => navigate('/login')}>
            Solicitar ahora <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="lp-section" id="beneficios">
        <div className="lp-section-head">
          <h2>¿Por qué Prymera?</h2>
          <p>Una banca cercana, segura y hecha para el Perú.</p>
        </div>
        <div className="lp-benefits">
          {BENEFICIOS.map((b) => {
            const Icon = b.icon
            return (
              <div className="lp-benefit" key={b.titulo}>
                <span className="lp-benefit-icon"><Icon size={26} /></span>
                <h3>{b.titulo}</h3>
                <p>{b.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="lp-section" style={{ background: '#f5f7fa' }}>
        <div className="lp-section-head">
          <h2>¿Qué dicen de nosotros?</h2>
          <p>Conoce las experiencias de nuestros clientes.</p>
        </div>
        <div className="lp-testimonials">
          {TESTIMONIOS.map((t) => (
            <div className="lp-testimonial" key={t.nombre}>
              <Quote size={24} style={{ color: 'var(--hb-primary)', marginBottom: 12, opacity: 0.3 }} />
              <p className="lp-testimonial-text">{t.texto}</p>
              <div className="lp-testimonial-author">
                <div className="lp-testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="lp-testimonial-name">{t.nombre}</div>
                  <div className="lp-testimonial-role">{t.rol}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
