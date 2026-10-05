"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { instalacionCopy } from "@/lib/i18n/instalacion";
import CTABanner from "@/components/ui/CTABanner";
import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";

export default function InstalacionPage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const copy = instalacionCopy[lang];

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

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
            <p style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: accentAlt,
              marginBottom: 16,
            }}>
              {copy.hero.breadcrumb}
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
              {copy.hero.titleLine1}<br />{copy.hero.titleLine2}
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(245,245,220,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
            }}>
              {copy.hero.intro}
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
              {copy.hero.btnPresupuesto}
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
            {copy.tipos.heading}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 32 }}
          >
            {copy.tipos.items.map((t, i) => (
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
            {copy.proceso.heading}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: 24 }}
          >
            {copy.proceso.pasos.map((p, i) => (
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

      <CTABanner titulo={copy.ctaBanner} color={accentAlt} />
    </main>
  );
}