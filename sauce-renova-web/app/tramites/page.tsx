"use client";

import { useTheme } from "@/context/ThemeContext";
import CTABanner from "@/components/ui/CTABanner";
import Link from "next/link";

export default function TramitesPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const preciosBg = isDark ? "#0d1520" : "#1e2d45";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

  const tramites = [
    {
      titulo: "Permiso de Obra",
      descripcion: "Gestionamos el permiso de obra necesario para tu sistema fotovoltaico, cumpliendo con todas las regulaciones locales.",
    },
    {
      titulo: "Legalización (Boletín)",
      descripcion: "Tramitamos la legalización técnica de la instalación fotovoltaica ante Industria de forma rápida y sin complicaciones.",
    },
    {
      titulo: "Ayudas Europeas",
      descripcion: "Gestionamos las ayudas Next Generation para reducir los costes de tu instalación. Incluye ayudas por placas, baterías y cargadores.",
    },
    {
      titulo: "IBI",
      descripcion: "Tramitamos la deducción del IBI según el ayuntamiento correspondiente. En comunidades de propietarios el precio es por participante.",
    },
    {
      titulo: "Punto de Acceso y Conexión",
      descripcion: "Gestionamos el permiso de acceso y conexión con la distribuidora para que puedas inyectar el exceso de energía a la red eléctrica.",
    },
    {
      titulo: "Certificación Energética",
      descripcion: "Evaluamos y certificamos la eficiencia energética de tu vivienda, otorgándole una calificación de la A a la G.",
    },
  ];

  const precios = [
    { rango: "Hasta 10 kW", precio: "950€", incluye: ["Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visita técnica"] },
    { rango: "10 - 25 kW", precio: "1.600€", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "Ayudas Europeas", "IBI", "Punto de acceso y conexión", "Visitas de obra", "OCA"] },
    { rango: "25 - 50 kW", precio: "2.200€", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "Ayudas Europeas", "IBI", "Punto de acceso y conexión", "Visitas de obra", "OCA"] },
    { rango: "+100 kW", precio: "2,5% presupuesto", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "Ayudas Europeas", "IBI", "Punto de acceso y conexión", "Visitas de obra", "OCA"] },
  ];

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
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
            Trámites y<br />Legalizaciones
          </h1>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "rgba(245,245,220,0.75)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 40,
          }}>
            Nos encargamos de toda la burocracia para que tú solo tengas que disfrutar del ahorro. Gestionamos permisos, legalizaciones y ayudas europeas en toda España.
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
            Solicitar información
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: titleColor,
            textTransform: "uppercase",
            marginBottom: 48,
          }}>
            Qué Gestionamos
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}>
            {tramites.map((t, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accent}`,
              }}>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: cardTitleColor,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {t.titulo}
                </h3>
                <p style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  color: textMuted,
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {t.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: preciosBg, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#f5f5dc",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Tarifas
          </h2>
          <p style={{
            fontSize: 15,
            fontStyle: "italic",
            color: "rgba(245,245,220,0.6)",
            marginBottom: 48,
          }}>
            Precios para la Comunidad Valenciana. Para otras provincias consultar precio.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}>
            {precios.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 24px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                <div style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: accentAlt,
                  marginBottom: 8,
                }}>
                  {p.rango}
                </div>
                <div style={{
                  fontSize: 32,
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "#f5f5dc",
                  marginBottom: 24,
                }}>
                  {p.precio}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.incluye.map((item, j) => (
                    <li key={j} style={{
                      fontSize: 13,
                      fontStyle: "italic",
                      color: "rgba(245,245,220,0.75)",
                      paddingLeft: 16,
                      position: "relative",
                    }}>
                      <span style={{ position: "absolute", left: 0, color: accentAlt }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo="¿Necesitas gestionar tus trámites?" color={accentAlt} />
    </main>
  );
}