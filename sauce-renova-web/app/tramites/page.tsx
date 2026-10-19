"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { tramitesCopy } from "@/lib/i18n/tramites";
import CTABanner from "@/components/ui/CTABanner";

export default function TramitesPage() {
  const { lang } = useLanguage();
  const copy = tramitesCopy[lang];

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const preciosBg = "var(--hero-bg)";
  const accent = "var(--color-blue-mid)";
  const accentAlt = "var(--color-green-dark)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";
  const cardTitleColor = "var(--title-color)";

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(2rem, 9vw, 88px)",
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
            {copy.hero.btnInformacion}
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
            {copy.tramites.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 32 }}>
            {copy.tramites.items.map((t, i) => (
              <div key={i} className="card-hover" style={{
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
            color: "var(--color-cream-text)",
            textTransform: "uppercase",
            marginBottom: 48,
          }}>
            {copy.precios.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
            {copy.precios.items.map((p, i) => (
              <div key={i} className="card-hover" style={{
                background: "var(--on-dark-08)",
                borderRadius: 20,
                padding: "32px 24px",
                border: "1px solid var(--on-dark-15)",
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
                  color: "var(--color-cream-text)",
                  marginBottom: 24,
                }}>
                  {p.precio}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.incluye.map((item, j) => (
                    <li key={j} style={{
                      fontSize: 13,
                      fontStyle: "italic",
                      color: "var(--on-cream-75)",
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

      <CTABanner titulo={copy.ctaBanner} color={accentAlt} />
    </main>
  );
}