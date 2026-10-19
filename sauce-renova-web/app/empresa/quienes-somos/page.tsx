"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { quienesSomosCopy } from "@/lib/i18n/quienesSomos";
import CTABanner from "@/components/ui/CTABanner";

export default function QuienesSomosPage() {
  const { lang } = useLanguage();
  const copy = quienesSomosCopy[lang];

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const accent = "var(--color-blue-mid)";
  const accentAlt = "var(--color-green-dark)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            {copy.hero.btn}
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: titleColor,
            textTransform: "uppercase",
            marginBottom: 32,
          }}>
            {copy.historia.heading}
          </h2>
          {copy.historia.parrafos.map((p, i) => (
            <p key={i} style={{
              fontSize: 16,
              fontStyle: "italic",
              color: textMuted,
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--hero-bg)", padding: "64px 24px" }}>
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ maxWidth: 1200, margin: "0 auto", gap: 24 }}
        >
          {copy.stats.map((s, i) => (
            <div key={i} style={{
              background: "var(--on-dark-08)",
              borderRadius: 20,
              padding: "32px 24px",
              border: "1px solid var(--on-dark-15)",
              textAlign: "center",
            }}>
              <div style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                fontStyle: "italic",
                color: accentAlt,
                lineHeight: 1,
                marginBottom: 12,
              }}>
                {s.valor}
              </div>
              <p style={{
                fontSize: 14,
                fontStyle: "italic",
                color: "var(--on-cream-75)",
                margin: 0,
              }}>
                {s.etiqueta}
              </p>
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
            {copy.valores.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 32 }}>
            {copy.valores.items.map((v, i) => (
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
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {v.titulo}
                </h3>
                <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
                  {v.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: cardBg,
          borderRadius: 20,
          padding: "40px 32px",
          borderLeft: `4px solid ${accent}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}>
          <div style={{ maxWidth: 640 }}>
            <h3 style={{
              fontSize: 22,
              fontWeight: 800,
              fontStyle: "italic",
              color: titleColor,
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              {copy.equipo.titulo}
            </h3>
            <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
              {copy.equipo.texto}
            </p>
          </div>
          <Link href="/empresa/equipo" style={{
            background: accent,
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
            {copy.equipo.btn}
          </Link>
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} textoBtn={copy.ctaBannerBtn} color={accentAlt} />
    </main>
  );
}