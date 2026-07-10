import Link from "next/link";
import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";

export default function SolarPage() {
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = "#4a5568";

  const servicios = [
    {
      titulo: "Instalación",
      descripcion: "Montamos tus placas solares con los mejores materiales del mercado. Soluciones para hogares, empresas y comunidades de vecinos.",
      href: "/solar/instalacion",
    },
    {
      titulo: "Mantenimiento",
      descripcion: "Mantenemos tu instalación en óptimas condiciones para garantizar el máximo rendimiento a lo largo del tiempo.",
      href: "/solar/mantenimiento",
    },
    {
      titulo: "Baterías",
      descripcion: "Almacena la energía que generas y úsala cuando más la necesites. Total independencia energética.",
      href: "/solar/baterias",
    },
  ];

  return (
    <main style={{ background: "#f5f5dc", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "#1e2d45", padding: "80px 24px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>
          <div>
            <h1 style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#f5f5dc",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
            }}>
              Energía<br />Solar
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(245,245,220,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
            }}>
              Instalamos, mantenemos y optimizamos sistemas fotovoltaicos para hogares y empresas en toda España. Ahorra desde el primer día.
            </p>
            <Link href="/contacto" style={{
              background: accentAlt,
              color: "white",
              borderRadius: 50,
              padding: "16px 40px",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}>
              Solicitar presupuesto
            </Link>
          </div>
          <div style={{
            background: "#f5f5dc",
            borderRadius: 24,
            padding: 24,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <SolarPanelIllustration isDark={false} />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: accent,
            textTransform: "uppercase",
            marginBottom: 48,
          }}>
            Nuestros Servicios
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}>
            {servicios.map((s, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accentAlt}`,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}>
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: accentAlt,
                  textTransform: "uppercase",
                  margin: 0,
                }}>
                  {s.titulo}
                </h3>
                <p style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  color: textMuted,
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {s.descripcion}
                </p>
                <Link href={s.href} style={{
                  color: accentAlt,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginTop: "auto",
                }}>
                  Ver más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: accentAlt, padding: "64px 24px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}>
          <h2 style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "white",
            textTransform: "uppercase",
            margin: 0,
          }}>
            ¿Listo para empezar a ahorrar?
          </h2>
          <Link href="/contacto" style={{
            background: "white",
            color: accentAlt,
            borderRadius: 50,
            padding: "16px 40px",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
          }}>
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  );
}