"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { cargadoresCopy } from "@/lib/i18n/cargadores";
import CTABanner from "@/components/ui/CTABanner";
import EVChargerIllustration from "@/components/illustrations/EVChargerIllustration";

export default function CargadoresPage() {
  const { lang } = useLanguage();
  const copy = cargadoresCopy[lang];

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const accent = "var(--color-blue-mid)";
  const accentAlt = "var(--color-green-dark)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";
  const cardTitleColor = "var(--title-color)";

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
              maxWidth: 500,
              marginBottom: 40,
            }}>
              {copy.hero.intro1}
              <Link href="/solar" style={{ color: "inherit", textDecoration: "underline" }}>
                {copy.hero.solarLinkText}
              </Link>
              {copy.hero.intro2}
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
          <div style={{
            background: "var(--bg-service)",
            borderRadius: 24,
            padding: 24,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <EVChargerIllustration />
          </div>
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
            {copy.donde.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 32 }}>
            {copy.donde.tipos.map((t, i) => (
              <div key={i} className="card-hover" style={{
                background: cardBg,
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accent}`,
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

      <section style={{ background: "var(--plan-bg)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "var(--color-white)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            {copy.planMoves.heading}
          </h2>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "var(--on-dark-90)",
            lineHeight: 1.7,
            maxWidth: 700,
            marginBottom: 40,
          }}>
            {copy.planMoves.descripcion}
          </p>
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
            {copy.planMoves.btnContacto}
          </Link>
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} color={accentAlt} />
    </main>
  );
}