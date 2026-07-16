import Image from "next/image";
import hogarAzul from "@/components/illustrations/hogar-azul.svg";
import hogarVerde from "@/components/illustrations/casa-verde.svg";
import empresaAzul from "@/components/illustrations/Empresa-azulsvg.svg";
import empresaVerde from "@/components/illustrations/Empresa-verde.svg";
import comunidadAzul from "@/components/illustrations/comunidad-azul.svg";
import comunidadVerde from "@/components/illustrations/comunidad-verde.svg";
import hotelAzul from "@/components/illustrations/Hotel-azul.svg";
import hotelVerde from "@/components/illustrations/Hotel-verde.svg";

interface Props {
  isDark: boolean;
}

export default function Benefits({ isDark }: Props) {
  const benefitsBg = isDark ? "#0354bf" : "#78a83f";

  const benefits = [
    {
      subtitle: "Casa",
      icon: isDark ? hogarAzul : hogarVerde,
      text: "Reduce tu factura eléctrica hasta un 80% con instalación fotovoltaica en tu hogar.",
    },
    {
      subtitle: "Empresa",
      icon: isDark ? empresaAzul : empresaVerde,
      text: "Genera tu propia energía limpia y vende el excedente a la red eléctrica.",
    },
    {
      subtitle: "Comunidad",
      icon: isDark ? comunidadAzul : comunidadVerde,
      text: "Contribuye al medio ambiente reduciendo tu huella de carbono cada día.",
    },
    {
      subtitle: "Hoteles",
      icon: isDark ? hotelAzul : hotelVerde,
      text: "Almacena energía en baterías de última generación para total autonomía.",
    },
  ];

  return (
    <section style={{ background: isDark ? "#203147" : "#fafad6", padding: "0.25rem 0" }} id="solar">
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
                background: isDark ? "#d1e5ff" : "#afcf89",
                borderRadius: "1.25rem",
                padding: "2.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ width: 72, height: 72, position: "relative" }}>
                <Image
                  src={b.icon}
                  alt={b.subtitle}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
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
                flex: 1,
              }}>
                {b.text}
              </p>
              <button style={{
                background: isDark ? "#0354bf" : "#fafad6",
                color: isDark ? "#fafad6" : benefitsBg,
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
