import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";

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
    <section style={{ background: theme.bg }} id="inicio">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "4% 4%",
        gap: "4%",
        alignItems: "center",
      }}>
        <div style={{ padding: "4% 0" }}>
          <h1 style={{
            fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
            fontWeight: 900,
            color: theme.accent,
            lineHeight: 1,
            margin: "0 0 1.5rem",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-shrikhand), sans-serif",
          }}>
            Ahorro<br />desde el primer rayo
          </h1>
          <p style={{
            fontSize: "clamp(0.9rem, 1.2vw, 1.125rem)",
            color: theme.textMuted,
            lineHeight: 1.7,
            maxWidth: "32rem",
            marginBottom: "2.5rem",
          }}>
            Instalamos, mantenemos y optimizamos sistemas fotovoltaicos para hogares y empresas en toda España. Ahorra desde el primer día.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button style={{
              background: theme.btnPrimary,
              color: "white",
              border: "none",
              borderRadius: "9999px",
              padding: "1em 2em",
              fontWeight: 800,
              fontSize: "clamp(0.7rem, 0.9vw, 0.875rem)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}>
              Preguntas Frecuentes
            </button>
            <button style={{
              background: theme.btnSecondary,
              color: "white",
              border: "none",
              borderRadius: "9999px",
              padding: "1em 2em",
              fontWeight: 800,
              fontSize: "clamp(0.7rem, 0.9vw, 0.875rem)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}>
              Presupuesto
            </button>
          </div>
        </div>

        <div style={{
          background: theme.bgCard,
          borderRadius: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          padding: "5%",
        }}>
          <SolarPanelIllustration isDark={isDark} />
        </div>
      </div>
    </section>
  );
}
