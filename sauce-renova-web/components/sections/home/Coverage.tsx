import Image from "next/image";
import mapaImg from "@/components/illustrations/mapa.webp";
import mapaOscuroImg from "@/components/illustrations/mapa-oscuro.webp";

interface Props {
  isDark: boolean;
}

export default function Coverage({ isDark }: Props) {
  const bg = isDark ? "#203147" : "#fafad6";
  const accentAlt = isDark ? "#fafad6" : "#78a83f";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";

  return (
    <section style={{ background: bg, padding: "80px 24px" }} id="tramites">
      <div style={{
        maxWidth: 1200,
        marginLeft: 0,
        marginRight: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: 64,
        alignItems: "center",
      }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
          <Image
            src={isDark ? mapaOscuroImg : mapaImg}
            alt="Mapa de cobertura"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h2 style={{
            fontSize: "clamp(20px, 2.4vw, 34px)",
            fontWeight: 900,
            color: accentAlt,
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: 24,
            fontFamily: "var(--font-shrikhand), sans-serif",
          }}>
            El dinero no crece de los árboles,<br />pero el ahorro en sauce sí.
          </h2>
          <p style={{
            fontSize: 16,
            color: textMuted,
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            Cada instalación, cada mantenimiento y cada proyecto nos han enseñado que hacer las cosas bien es la mejor garantía. Porque cuando eliges energía Sauce Renova, también eliges la tranquilidad de estar en buenas manos. Conoce algunos de nuestros proyectos y descubre por qué cada vez más personas apuestan por la economía del sol.
          </p>
          <button
            style={{
              background: accentAlt,
              color: isDark ? "#203147" : "white",
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
