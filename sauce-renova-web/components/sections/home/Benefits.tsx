import HomeIcon from "@/components/icons/HomeIcon";
import BoltIcon from "@/components/icons/BoltIcon";
import LeafIcon from "@/components/icons/LeafIcon";
import BatteryIcon from "@/components/icons/BatteryIcon";

interface Props {
  isDark: boolean;
}

export default function Benefits({ isDark }: Props) {
  const benefitsBg = isDark ? "#2857c8" : "#6b8c3a";
  const benefitsCard = isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.15)";
  const benefitsCardHover = isDark ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.25)";
  const iconColor = isDark ? "#6b8c3a" : "#2857c8";

  const benefits = [
    { icon: <HomeIcon size={52} color={iconColor} />, text: "Reduce tu factura eléctrica hasta un 80% con instalación fotovoltaica en tu hogar." },
    { icon: <BoltIcon size={52} color={iconColor} />, text: "Genera tu propia energía limpia y vende el excedente a la red eléctrica." },
    { icon: <LeafIcon size={52} color={isDark ? "#2857c8" : "#6b8c3a"} />, text: "Contribuye al medio ambiente reduciendo tu huella de carbono cada día." },
    { icon: <BatteryIcon size={52} color={iconColor} />, text: "Almacena energía en baterías de última generación para total autonomía." },
  ];

  return (
    <section style={{ background: benefitsBg, padding: "64px 24px" }} id="solar">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "white",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          marginBottom: 40,
        }}>
          Beneficios de la Energía Solar
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: benefitsCard,
                borderRadius: 20,
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 16,
                transition: "background 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = benefitsCardHover;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = benefitsCard;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {b.icon}
              <p style={{ color: "white", fontSize: 14, fontStyle: "italic", lineHeight: 1.6, opacity: 0.9 }}>
                {b.text}
              </p>
              <button style={{
                background: isDark ? "#f5f5dc" : "white",
                color: benefitsBg,
                border: "none",
                borderRadius: 50,
                padding: "10px 24px",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: "auto",
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