import Image from "next/image";
import cargadorImg from "@/components/illustrations/cargador-ve.webp";
import cargadorOscuroImg from "@/components/illustrations/Cargador-ve-oscuro.webp";
import placasImg from "@/components/illustrations/placas-y-baterias.webp";
import placasOscuroImg from "@/components/illustrations/placas-y-baterias-oscuro.webp";

interface Props {
  isDark: boolean;
}

export default function Products({ isDark }: Props) {
  const bg = isDark ? "#203147" : "#fafad6";
  const accent = isDark ? "#78a83f" : "#0354bf";
  const accentAlt = isDark ? "#78a83f" : "#0354bf";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const cardBg = isDark ? "#203147" : "#1e2d45";

  const btnStyle = {
    color: "white",
    border: "none",
    borderRadius: "9999px",
    padding: "0.85em 2.2em",
    fontWeight: 800,
    fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "transform 0.15s",
    display: "inline-block",
    marginTop: "1.5rem",
  };

  return (
    <section style={{ background: bg, padding: "5vw 5vw" }} id="cargadores">
      <div style={{
        maxWidth: "90rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5vw",
      }}>
        {/* Cargadores VE */}
        <div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
            fontWeight: 900,
            color: accent,
            textTransform: "uppercase",
            marginBottom: "1.25rem",
            lineHeight: 1,
            fontFamily: "var(--font-shrikhand), sans-serif",
          }}>
            Cargadores VE
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
            <div style={{
              background: cardBg,
              borderRadius: "1rem",
              aspectRatio: "3 / 4",
              overflow: "hidden",
              position: "relative",
            }}>
              <Image
                src={isDark ? cargadorOscuroImg : cargadorImg}
                alt="Cargador VE"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", fontStyle: "italic", lineHeight: 1.75, color: textMuted }}>
                Instalamos puntos de recarga para vehículos eléctricos en garajes, comunidades de vecinos y empresas. Soluciones compatibles con todos los modelos del mercado.
              </p>
              <button
                style={{ ...btnStyle, background: accent }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Ver Más
              </button>
            </div>
          </div>
        </div>

        {/* Placas y Baterías */}
        <div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
            fontWeight: 900,
            color: accentAlt,
            textTransform: "uppercase",
            marginBottom: "1.25rem",
            lineHeight: 1,
            fontFamily: "var(--font-shrikhand), sans-serif",
          }}>
            Placas y Baterías
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
            <div style={{
              background: cardBg,
              borderRadius: "1rem",
              aspectRatio: "3 / 4",
              overflow: "hidden",
              position: "relative",
            }}>
              <Image
                src={isDark ? placasOscuroImg : placasImg}
                alt="Placas y Baterías"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", fontStyle: "italic", lineHeight: 1.75, color: textMuted }}>
                Suministramos e instalamos placas solares de alta eficiencia y baterías de almacenamiento para maximizar tu independencia energética.
              </p>
              <button
                style={{ ...btnStyle, background: accentAlt }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Ver Más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
