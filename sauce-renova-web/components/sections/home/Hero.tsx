import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";

interface Props {
  isDark: boolean;
}

const t = {
  light: {
    bg: "#f5f5dc",
    accent: "#2857c8",
    textMuted: "#4a5568",
    btnPrimary: "#6b8c3a",
    btnSecondary: "#2857c8",
    bgCard: "#1e2d45",
  },
  dark: {
    bg: "#1a2235",
    accent: "#6b8c3a",
    textMuted: "#a0aec0",
    btnPrimary: "#2857c8",
    btnSecondary: "#6b8c3a",
    bgCard: "#f5f5dc",
  },
};

export default function Hero({ isDark }: Props) {
  const theme = isDark ? t.dark : t.light;

  return (
    <section style={{ background: theme.bg, padding: "0 0 40px" }} id="inicio">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "calc(100vh - 64px)",
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 24px",
        gap: 48,
        alignItems: "center",
      }}>
        <div style={{ paddingTop: 60, paddingBottom: 60 }}>
          <h1 style={{
            fontSize: "clamp(56px, 7vw, 96px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: theme.accent,
            lineHeight: 0.95,
            margin: "0 0 28px",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}>
            Energía<br />Solar<br />para Ti
          </h1>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: theme.textMuted,
            lineHeight: 1.7,
            maxWidth: 500,
            marginBottom: 40,
          }}>
            Instalamos, mantenemos y optimizamos sistemas fotovoltaicos para hogares y empresas en toda España. Ahorra desde el primer día.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button style={{
              background: theme.btnPrimary,
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "16px 32px",
              fontWeight: 800,
              fontSize: 14,
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
              borderRadius: 50,
              padding: "16px 32px",
              fontWeight: 800,
              fontSize: 14,
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
          borderRadius: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 400,
          overflow: "hidden",
          padding: 24,
        }}>
          <SolarPanelIllustration isDark={isDark} />
        </div>
      </div>
    </section>
  );
}