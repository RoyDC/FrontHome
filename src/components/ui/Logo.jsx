/**
 * Logo de marca Prymera — "Primero eres tú".
 * Isotipo multicolor (rojo, verde, amarillo) + texto blanco.
 *
 * @param {Object} props
 * @param {number}  [props.size=44]          Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true]    Mostrar el texto "Prymera".
 * @param {'dark'|'light'} [props.variant='dark'] Color del texto.
 * @param {string}  [props.subtitle='Primero eres tú'] Texto secundario.
 */
export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'Primero eres tú',
}) {
  const textColor = variant === 'light' ? '#ffffff' : '#003366'
  const nameSize = Math.round(size * 0.48)
  const subSize = Math.max(9, Math.round(size * 0.24))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* Isotipo Prymera — forma de persona/estrella multicolor */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Prymera"
        role="img"
      >
        {/* Forma principal roja */}
        <path d="M24 4 C20 4, 12 8, 12 16 C12 24, 18 28, 24 28 C30 28, 36 24, 36 16 C36 8, 28 4, 24 4Z" fill="#e53935" />
        {/* Elemento verde */}
        <path d="M16 20 C12 22, 8 28, 10 34 C12 38, 16 40, 20 38 C24 36, 22 30, 16 20Z" fill="#43a047" />
        {/* Elemento amarillo */}
        <path d="M32 20 C36 22, 40 28, 38 34 C36 38, 32 40, 28 38 C24 36, 26 30, 32 20Z" fill="#fdd835" />
        {/* Centro */}
        <circle cx="24" cy="16" r="4" fill="#fff" />
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.3px',
            }}
          >
            Prymera
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: subSize,
                fontWeight: 600,
                fontStyle: 'italic',
                color: variant === 'light' ? '#fdd835' : '#f57f17',
                letterSpacing: '0.2px',
                marginTop: 1,
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
