import Image from "next/image";
import principalImg from "@/components/illustrations/principal.webp";

interface Props {
  isDark: boolean;
}

const t = {
  light: {
    bg: "#fafad6",
    accent: "#0354bf",
    textMuted: "#4a5568",
    btnPrimary: "#78a83f",
    btnSecondary: "#0354bf",
    bgCard: "#1e2d45",
  },
  dark: {
    bg: "#1a2235",
    accent: "#78a83f",
    textMuted: "#a0aec0",
    btnPrimary: "#0354bf",
    btnSecondary: "#78a83f",
    bgCard: "#fafad6",
  },
};

export default function Hero({ isDark }: Props) {
  const theme = isDark ? t.dark : t.light;

  return (
    <section style={{ background: theme.bg, minHeight: "75vh", display: "flex", flexDirection: "column" }} id="inicio">
      <div style={{
        display: "grid",
        gridTemplateColumns: "55fr 45fr",
        flex: 1,
        minHeight: "75vh",
        maxWidth: "100%",
        padding: "4vw 5vw 2vw 6vw",
        gap: "4vw",
        alignItems: "center",
      }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
            fontWeight: 900,
            color: theme.accent,
            lineHeight: 1.0,
            margin: "0 0 1rem",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-shrikhand), sans-serif",
          }}>
            Ahorro<br />desde el primer rayo
          </h1>
          <p style={{
            fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
            color: theme.textMuted,
            lineHeight: 1.6,
            maxWidth: "30rem",
            marginBottom: "2.5rem",
          }}>
            Elegir la energía solar es apostar por un futuro con menos gastos, más independencia y un mayor control sobre lo que pagas cada mes. Es convertir cada mañana en una oportunidad para ahorrar, aumentar el valor de tu vivienda y contribuir a un modelo energético más sostenible.
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button style={{
              background: "#78a83f",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              padding: "1.4em 2em",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "var(--font-poppins), sans-serif",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}>
              Preguntas Frecuentes
            </button>
            <button style={{
              background: "#78a83f",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              padding: "1.4em 2em",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "var(--font-poppins), sans-serif",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}>
              Presupuesto
            </button>
          </div>
        </div>

        <div style={{
          background: "#fafad6",
          borderRadius: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1 / 1",
          width: "100%",
          padding: 0,
          position: "relative",
        }}>
          <Image
            src={principalImg}
            alt="Ilustración principal"
            fill
            style={{ objectFit: "contain", borderRadius: "1.5rem" }}
          />
        </div>
      </div>
    </section>
  );
}