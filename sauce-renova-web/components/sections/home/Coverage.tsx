interface Props {
  isDark: boolean;
}

const SpainMap = ({ color = "#6b8c3a", strokeColor = "#f5f5dc" }) => (
  <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 320 }}>
    <path
      d="M60,80 L80,60 L120,55 L160,50 L200,55 L240,60 L260,80 L265,110 L255,140 L230,160 L200,170 L160,175 L130,170 L100,160 L70,140 L55,115 Z"
      fill={color} stroke={strokeColor} strokeWidth="2" opacity="0.85"
    />
    <ellipse cx="60" cy="190" rx="18" ry="10" fill={color} stroke={strokeColor} strokeWidth="2" opacity="0.85" />
    <ellipse cx="245" cy="100" rx="12" ry="7" fill={color} stroke={strokeColor} strokeWidth="2" opacity="0.85" />
    <circle cx="180" cy="120" r="5" fill="#2857c8" />
    <path d="M180,115 L180,100" stroke="#2857c8" strokeWidth="2" />
    <circle cx="150" cy="140" r="5" fill="#2857c8" />
    <path d="M150,135 L150,120" stroke="#2857c8" strokeWidth="2" />
    <circle cx="160" cy="110" r="5" fill="#2857c8" />
    <path d="M160,105 L160,90" stroke="#2857c8" strokeWidth="2" />
  </svg>
);

export default function Coverage({ isDark }: Props) {
  const bg = isDark ? "#1a2235" : "#f5f5dc";
  const accentAlt = isDark ? "#2857c8" : "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";

  return (
    <section style={{ background: bg, padding: "80px 24px" }} id="tramites">
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SpainMap
            color={isDark ? "#2857c8" : "#6b8c3a"}
            strokeColor={isDark ? "#1a2235" : "#f5f5dc"}
          />
        </div>
        <div>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: accentAlt,
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: 24,
          }}>
            Trabajamos en<br />toda España
          </h2>
          <p style={{
            fontSize: 16,
            fontStyle: "italic",
            color: textMuted,
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            Con instalaciones en más de 15 provincias, gestionamos todos los trámites con las distribuidoras eléctricas y las administraciones locales. Tú solo disfruta del ahorro.
          </p>
          <button
            style={{
              background: accentAlt,
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "14px 36px",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "transform 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Otros Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}