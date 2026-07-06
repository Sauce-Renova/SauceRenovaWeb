import HomeIcon from "@/components/icons/HomeIcon";
import BoltIcon from "@/components/icons/BoltIcon";
import LeafIcon from "@/components/icons/LeafIcon";
import BatteryIcon from "@/components/icons/BatteryIcon";

interface Props {
  isDark: boolean;
}

export default function Benefits({ isDark }: Props) {
  const benefitsBg = isDark ? "#0354bf" : "#78a83f";
  const iconColor = isDark ? "#78a83f" : "#0354bf";

  const benefits = [
    { icon: <HomeIcon size={56} color={iconColor} />, subtitle: "Casa", text: "Reduce tu factura eléctrica hasta un 80% con instalación fotovoltaica en tu hogar." },
    { icon: <BoltIcon size={56} color={iconColor} />, subtitle: "Empresa", text: "Genera tu propia energía limpia y vende el excedente a la red eléctrica." },
    { icon: <LeafIcon size={56} color={isDark ? "#0354bf" : "#78a83f"} />, subtitle: "Comunidad", text: "Contribuye al medio ambiente reduciendo tu huella de carbono cada día." },
    { icon: <BatteryIcon size={56} color={iconColor} />, subtitle: "Hoteles", text: "Almacena energía en baterías de última generación para total autonomía." },
  ];

  return (
    /* Fondo crema exterior, la caja verde flota con margen */
    <section style={{ background: isDark ? "#1a2235" : "#fafad6", padding: "0.25rem 0" }} id="solar">
      <div style={{
        background: benefitsBg,
        borderRadius: "2rem",
        padding: "3.5vw 3vw",
        maxWidth: "100%",
        margin: "0 40px",
      }}>
        <h2 style={{
          fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
          fontWeight: 900,
          fontStyle: "normal",
          color: "#fafad6",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          marginBottom: "2.5vw",
          fontFamily: "var(--font-shrikhand), sans-serif",
        }}>
          Beneficios de la Energía Solar
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5vw",
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: "#afcf89",
                borderRadius: "1.25rem",
                padding: "2.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1.25rem",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div>{b.icon}</div>
              <h3 style={{
                color: "#1e2d45",
                fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontFamily: "var(--font-poppins), sans-serif",
                margin: 0,
              }}>
                {b.subtitle}
              </h3>
              <p style={{
                color: "#1e2d45",
                fontSize: "clamp(0.85rem, 1vw, 1rem)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: 1.6,
                opacity: 0.92,
                flex: 1,
              }}>
                {b.text}
              </p>
              <button style={{
                background: "#fafad6",
                color: benefitsBg,
                border: "none",
                borderRadius: "9999px",
                padding: "0.75em 2em",
                fontWeight: 700,
                fontSize: "clamp(0.75rem, 0.85vw, 0.875rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: "auto",
                fontStyle: "normal",
              }}>
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
