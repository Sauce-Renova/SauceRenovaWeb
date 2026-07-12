"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import CTABanner from "@/components/ui/CTABanner";
import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";

export default function InstalacionPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#1a2235" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

  const pasos = [
    {
      numero: "01",
      titulo: "Consulta inicial",
      descripcion: "Analizamos tu consumo energético y las características de tu vivienda o empresa para diseñar la instalación más eficiente.",
    },
    {
      numero: "02",
      titulo: "Proyecto y permisos",
      descripcion: "Elaboramos el proyecto técnico y gestionamos todos los permisos necesarios ante las administraciones locales y la distribuidora.",
    },
    {
      numero: "03",
      titulo: "Instalación",
      descripcion: "Nuestro equipo de técnicos certificados instala los paneles, el inversor y el sistema de monitorización en el tiempo acordado.",
    },
    {
      numero: "04",
      titulo: "Legalización y puesta en marcha",
      descripcion: "Tramitamos la legalización ante Industria y la conexión con la distribuidora. Tu instalación queda lista para generar energía.",
    },
  ];

  const tipos = [
    {
      titulo: "Residencial",
      descripcion: "Instalaciones para viviendas unifamiliares y pisos. Reduce tu factura hasta un 80% y aumenta el valor de tu propiedad.",
    },
    {
      titulo: "Empresarial",
      descripcion: "Soluciones para pymes y grandes empresas. Reduce tus costes energéticos y mejora tu imagen de marca.",
    },
    {
      titulo: "Comunidades",
      descripcion: "Autoconsumo colectivo para comunidades de vecinos. Reparte el ahorro entre todos los participantes.",
    },
  ];

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: accentAlt,
              marginBottom: 16,
            }}>
              Solar → Instalación
            </p>
            <h1 style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#f5f5dc",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
            }}>
              Instalación<br />de Placas
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(245,245,220,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
            }}>
              Instalamos paneles solares de alta eficiencia para hogares y empresas en toda España. Nos encargamos de todo el proceso, desde el diseño hasta la puesta en marcha.
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
            background: isDark ? "#1a2235" : "#f5f5dc",
            borderRadius: 24,
            padding: 24,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <SolarPanelIllustration isDark={isDark} />
          </div>
        </div>
      </section>

      {/* Tipos */}
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
            ¿Para Quién?
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}>
            {tipos.map((t, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accentAlt}`,
              }}>
                <h3 style={{
                  fontSize: 22,
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

      {/* Proceso */}
      <section style={{ background: isDark ? "#0d1520" : "#1e2d45", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#f5f5dc",
            textTransform: "uppercase",
            marginBottom: 48,
          }}>
            Cómo Trabajamos
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}>
            {pasos.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 24px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                <div style={{
                  fontSize: 48,
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: accentAlt,
                  lineHeight: 1,
                  marginBottom: 16,
                }}>
                  {p.numero}
                </div>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "#f5f5dc",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {p.titulo}
                </h3>
                <p style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "rgba(245,245,220,0.75)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo="¿Quieres instalar placas solares?" color={accentAlt} />
    </main>
  );
}