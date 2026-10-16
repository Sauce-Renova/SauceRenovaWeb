"use client";

import { useLanguage } from "@/context/LanguageContext";
import { preguntasFrecuentesCopy } from "@/lib/i18n/preguntasFrecuentes";
import CTABanner from "@/components/ui/CTABanner";

export default function PreguntasFrecuentesPage() {
  const { lang } = useLanguage();
  const copy = preguntasFrecuentesCopy[lang];

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
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
          }}>
            {copy.hero.intro}
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {copy.preguntas.map((p, i) => (
            <details key={i} style={{
              background: cardBg,
              borderRadius: 20,
              padding: "24px 32px",
              borderLeft: `4px solid ${accentAlt}`,
            }}>
              <summary style={{
                cursor: "pointer",
                fontSize: 18,
                fontWeight: 800,
                fontStyle: "italic",
                color: titleColor,
              }}>
                {p.pregunta}
              </summary>
              <p style={{
                fontSize: 15,
                fontStyle: "italic",
                color: textMuted,
                lineHeight: 1.7,
                margin: "16px 0 0",
              }}>
                {p.respuesta}
              </p>
            </details>
          ))}
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} textoBtn={copy.ctaBannerBtn} color={accentAlt} />
    </main>
  );
}