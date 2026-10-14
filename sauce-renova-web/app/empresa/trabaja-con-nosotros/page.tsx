"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { trabajaConNosotrosCopy } from "@/lib/i18n/trabajaConNosotros";
import CTABanner from "@/components/ui/CTABanner";

export default function TrabajaConNosotrosPage() {
  const { lang } = useLanguage();
  const copy = trabajaConNosotrosCopy[lang];

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
            marginBottom: 40,
          }}>
            {copy.hero.intro}
          </p>
          <a href="#ofertas" style={{
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
          </a>
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
            {copy.porqueUnirte.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
            {copy.porqueUnirte.items.map((item, i) => (
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
                  {item.titulo}
                </h3>
                <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: titleColor,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            {copy.ofertas.heading}
          </h2>
          <p style={{
            fontSize: 16,
            fontStyle: "italic",
            color: textMuted,
            marginBottom: 40,
            maxWidth: 700,
          }}>
            {copy.ofertas.subtitulo}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32, marginBottom: 48 }}>
            {copy.ofertas.puestos.map((puesto) => (
              <div key={puesto.id} style={{
                background: cardBg,
                borderRadius: 20,
                padding: "36px 32px",
                borderLeft: `4px solid ${accentAlt}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 800,
                    color: "var(--card-title)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 12,
                  }}>
                    <span>{puesto.ubicacion}</span>
                    <span>{puesto.tipo}</span>
                  </div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: titleColor,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}>
                    {puesto.titulo}
                  </h3>
                  <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, marginBottom: 24 }}>
                    {puesto.descripcion}
                  </p>
                </div>
                <Link href="/contacto" style={{
                  background: accentAlt,
                  color: "var(--color-white)",
                  borderRadius: 50,
                  padding: "12px 28px",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  alignSelf: "flex-start",
                }}>
                  {copy.ofertas.btnInscribirse}
                </Link>
              </div>
            ))}
          </div>

          <div style={{
            background: "var(--hero-bg)",
            borderRadius: 20,
            padding: "40px 32px",
            border: "1px solid var(--on-dark-15)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}>
            <h3 style={{
              fontSize: 22,
              fontWeight: 800,
              fontStyle: "italic",
              color: "var(--color-cream-text)",
              textTransform: "uppercase",
              margin: 0,
            }}>
              {copy.ofertas.candidaturaEspontanea.titulo}
            </h3>
            <p style={{
              fontSize: 15,
              fontStyle: "italic",
              color: "var(--on-cream-75)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 700,
            }}>
              {copy.ofertas.candidaturaEspontanea.texto}
            </p>
            <div>
              <Link href="/contacto" style={{
                background: accentAlt,
                color: "var(--color-white)",
                borderRadius: 50,
                padding: "14px 32px",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                marginTop: 8,
              }}>
                {copy.ofertas.candidaturaEspontanea.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} textoBtn={copy.ctaBannerBtn} color={accentAlt} />
    </main>
  );
}