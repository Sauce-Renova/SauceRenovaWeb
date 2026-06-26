import EVChargerIllustration from "@/components/illustrations/EVChargerIllustration";
import BatteryIcon from "@/components/icons/BatteryIcon";
import HomeIcon from "@/components/icons/HomeIcon";

interface Props {
  isDark: boolean;
}

export default function Products({ isDark }: Props) {
  const accent = isDark ? "#78a83f" : "#0354bf";
  const accentAlt = isDark ? "#0354bf" : "#78a83f";
  const bgCard = isDark ? "#fafad6" : "#1e2d45";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const btnSecondary = isDark ? "#78a83f" : "#0354bf";

  const verMasStyle = {
    color: "white",
    border: "none",
    borderRadius: 50,
    padding: "12px 28px",
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    display: "inline-block",
    marginTop: 16,
    transition: "transform 0.15s",
  };

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }} id="cargadores">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        marginTop: 40,
      }}>
        {/* Cargadores VE */}
        <div>
          <h2 style={{
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: accent,
            textTransform: "uppercase",
            marginBottom: 16,
            lineHeight: 1,
          }}>
            Cargadores VE
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            <div style={{
              background: bgCard,
              borderRadius: 16,
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
              <EVChargerIllustration isDark={isDark} />
            </div>
            <div>
              <p style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.7, color: textMuted }}>
                Instalamos puntos de recarga para vehículos eléctricos en garajes, comunidades de vecinos y empresas. Soluciones compatibles con todos los modelos del mercado.
              </p>
              <button
                style={{ ...verMasStyle, background: btnSecondary }}
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
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: accentAlt,
            textTransform: "uppercase",
            marginBottom: 16,
            lineHeight: 1,
          }}>
            Placas y Baterías
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            <div style={{
              background: isDark ? "#fafad6" : "#1e2d45",
              borderRadius: 16,
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
              <div style={{ padding: 24, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
                <BatteryIcon size={64} color={isDark ? "#1e2d45" : "#fafad6"} />
                <HomeIcon size={56} color="#78a83f" />
              </div>
            </div>
            <div>
              <p style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.7, color: textMuted }}>
                Suministramos e instalamos placas solares de alta eficiencia y baterías de almacenamiento para maximizar tu independencia energética.
              </p>
              <button
                style={{ ...verMasStyle, background: accentAlt }}
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