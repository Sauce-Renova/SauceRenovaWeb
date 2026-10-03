"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import CTABanner from "@/components/ui/CTABanner";

export default function ElectricidadPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

  const servicios = [
    { icono: "⚡", titulo: "Instalaciones y reparaciones eléctricas" },
    { icono: "🔌", titulo: "Cambios y aumentos de potencia" },
    { icono: "📋", titulo: "Tramitación y emisión de CIE / Boletín Eléctrico" },
    { icono: "🏠", titulo: "Instalaciones para viviendas, locales y negocios" },
    { icono: "🛠️", titulo: "Adaptación y renovación de instalaciones eléctricas" },
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
            Nuestros Servicios
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}>
            {servicios.map((s, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 20,
                padding: "32px 28px",
                borderLeft: `4px solid ${accent}`,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}>
                <span style={{ fontSize: 30, lineHeight: 1, flexShrink: 0 }}>{s.icono}</span>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: cardTitleColor,
                  textTransform: "none",
                  lineHeight: 1.4,
                  margin: 0,
                }}>
                  {s.titulo}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo="¿Tienes un proyecto en mente?" color={accent} />
    </main>
  );
}