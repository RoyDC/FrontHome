import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import Logo from '../ui/Logo.jsx'

const COLS = [
  {
    title: 'Productos',
    links: ['Cuenta de Ahorros', 'Depósito a Plazo Fijo', 'Crédito de Consumo', 'Crédito Microempresa', 'Cambio Dólares', 'SOAT'],
  },
  {
    title: 'Prymera',
    links: ['Nosotros', 'Trabaja con nosotros', 'Memoria anual', 'Sostenibilidad', 'Sala de prensa'],
  },
  {
    title: 'Ayuda',
    links: ['Centro de ayuda', 'Ubícanos', 'Reclamos', 'Transparencia', 'Tasas y tarifas'],
  },
]

export default function PublicFooter() {
  return (
    <footer className="lp-footer" id="footer">
      <div className="lp-footer-inner">
        <div className="lp-footer-brand">
          <Logo size={44} variant="light" subtitle="BANCA DIGITAL" />
          <p>Somos una institución financiera fundada en el Perú en 1997. Nuestro principal objetivo sigue siendo asegurar la continuidad y éxito de tu negocio.</p>
          <div className="lp-social">
            <a href="https://www.facebook.com/CajaPrymera" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/company/prymera/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><Linkedin size={18} /></a>
            <a href="#footer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#footer" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        {COLS.map((c) => (
          <div className="lp-footer-col" key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map((l) => (
                <li key={l}><a href="#footer">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lp-footer-col">
          <h4>Contacto</h4>
          <ul className="lp-contact">
            <li><Phone size={15} /> Banca telefónica: (01) 311-9000</li>
            <li><Mail size={15} /> contacto@prymera.pe</li>
            <li><MapPin size={15} /> Av. Los Andes 123, Lima</li>
          </ul>
        </div>
      </div>

      <div className="lp-footer-bottom">
        <div className="lp-footer-bottom-inner">
          <span>© {new Date().getFullYear()} Prymera — Banca por Internet. Supervisado por la SBS.</span>
          <div className="lp-footer-legal-links">
            <a href="#footer">Política de privacidad</a>
            <a href="#footer">Términos y condiciones</a>
            <a href="#footer">Libro de reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
