import Link from "next/link";

export default function ElectricidadPage() {
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = "#4a5568";

  const servicios = [
    {
      titulo: "Ingeniería Fotovoltaica",
      descripcion: "Diseñamos y dimensionamos tu instalación desde cero. Preinformes, proyectos, estudios de producción y consumo, tramitación de permisos y legalizaciones.",
    },
    {
      titulo: "Integración de Placas",
      descripcion: "Integramos las placas solares en tu edificación de forma estética y eficiente, combinando rendimiento y diseño arquitectónico.",
    },
    {
      titulo: "Autoconsumo Fotovoltaico",
      descripcion: "Genera tu propia energía y reduce tu dependencia de la red eléctrica. Soluciones para hogares, empresas y comunidades de vecinos.",
    },
    {
      titulo: "Legalización de Instalaciones",
      descripcion: "Gestionamos todos los trámites necesarios: permisos de obra, boletines, ayudas europeas Next Generation, IBI y punto de acceso y conexión.",
    },
  ];

  return (
    <main style={{ background: "#f5f5dc", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "#1e2d45", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(48px, 6vw, 88px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#f5f5dc",
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: 24,
          }}>
            Electricidad<br />Solar
          </h1>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "rgba(245,245,220,0.75)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 40,
          }}>
            Ofrecemos soluciones completas en ingeniería fotovoltaica para hogares y empresas. Nos encargamos de todo, desde el diseño hasta la legalización.
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}>
            {servicios.map((s, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accent}`,
              }}>
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: accent,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {s.titulo}
                </h3>
                <p style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  color: textMuted,
                  lineHeight: 1.7,
                }}>
                  {s.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: accent, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <h2 style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "white",
            textTransform: "uppercase",
            margin: 0,
          }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <Link href="/contacto" style={{
            background: "white",
            color: accent,
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