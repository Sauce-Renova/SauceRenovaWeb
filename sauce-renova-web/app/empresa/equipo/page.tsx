"use client";

import { useLanguage } from "@/context/LanguageContext";
import { equipoCopy } from "@/lib/i18n/equipo";
import CTABanner from "@/components/ui/CTABanner";

export default function EquipoPage() {
  const { lang } = useLanguage();
  const copy = equipoCopy[lang];

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
            color: "var(--card-title)",
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
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 32 }}>
            {copy.miembros.map((m, i) => (
              <div key={i} className="card-hover" style={{
                background: cardBg,
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accentAlt}`,
              }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--bg-service)",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontStyle: "italic",
                  fontWeight: 900,
                  color: "var(--card-title)",
                }}>
                  {m.nombre.charAt(0)}
                </div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}>
                  {m.nombre}
                </h3>
                <p style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--card-title)",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>
                  {m.cargo}
                </p>
                <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} textoBtn={copy.ctaBannerBtn} color={accentAlt} />
    </main>
  );
}