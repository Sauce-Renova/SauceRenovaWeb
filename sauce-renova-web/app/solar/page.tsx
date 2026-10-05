"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import CTABanner from "@/components/ui/CTABanner";
import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";
import { solarCopy } from "@/lib/i18n/solar";

export default function SolarPage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const copy = solarCopy[lang];

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accentAlt;

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            gap: 48,
            alignItems: "center",
          }}
        >
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
              {copy.heroTitleLine1}<br />{copy.heroTitleLine2}
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(245,245,220,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
            }}>
              {copy.heroText}
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
              {copy.ctaPresupuesto}
            </Link>
          </div>
          <div style={{
            background: isDark ? "#203147" : "#f5f5dc",
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

      {/* Beneficios */}
      <section style={{ padding: "56px 24px 0" }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            gap: "12px 32px",
          }}
        >
          {copy.beneficios.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: accentAlt, fontWeight: 900, fontSize: 16, lineHeight: 1.6 }}>✓</span>
              <span style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.6 }}>
                {b}
              </span>
            </div>
          ))}
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
            {copy.serviciosHeading}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 32 }}
          >
            {copy.servicios.map((s, i) => (
              <div key={i} style={{
                background: cardBg,
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
                  color: cardTitleColor,
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
                  color: cardTitleColor,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginTop: "auto",
                }}>
                  {copy.verMas}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo={copy.ctaBannerTitulo} textoBtn={copy.ctaBannerBoton} color={accentAlt} />
    </main>
  );
}