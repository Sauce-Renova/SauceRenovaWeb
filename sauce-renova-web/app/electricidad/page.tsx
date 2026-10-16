"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { electricidadCopy } from "@/lib/i18n/electricidad";
import CTABanner from "@/components/ui/CTABanner";

export default function ElectricidadPage() {
  const { lang } = useLanguage();
  const copy = electricidadCopy[lang];

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const accent = "var(--color-blue-mid)";
  const accentAlt = "var(--color-green-dark)";
  const titleColor = "var(--title-color)";
  const cardTitleColor = "var(--title-color)";

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(48px, 6vw, 88px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "var(--color-cream-text)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: 24,
          }}>
            {copy.hero.titleLine1}<br />{copy.hero.titleLine2}
          </h1>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "var(--on-cream-75)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 40,
          }}>
            {copy.hero.intro}
          </p>
          <Link href="/contacto" style={{
            background: accentAlt,
            color: "var(--color-white)",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 32 }}>
            {copy.servicios.map((s, i) => (
              <div key={i} className="card-hover" style={{
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

      <CTABanner titulo={copy.ctaBanner} color={accent} />
    </main>
  );
}