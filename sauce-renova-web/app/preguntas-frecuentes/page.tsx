"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { preguntasFrecuentesCopy } from "@/lib/i18n/preguntasFrecuentes";
import CTABanner from "@/components/ui/CTABanner";

export default function PreguntasFrecuentesPage() {
  const { lang } = useLanguage();
  const copy = preguntasFrecuentesCopy[lang];
  const [abierta, setAbierta] = useState<number | null>(null);

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
          {copy.preguntas.map((p, i) => {
            const open = abierta === i;
            return (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 20,
                borderLeft: `4px solid ${accentAlt}`,
                overflow: "hidden",
              }}>
                <button
                  type="button"
                  onClick={() => setAbierta(open ? null : i)}
                  aria-expanded={open}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "24px 32px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    fontSize: 18,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: titleColor,
                  }}
                >
                  <span>{p.pregunta}</span>
                  <span aria-hidden="true" style={{
                    flexShrink: 0,
                    fontSize: 28,
                    lineHeight: 1,
                    color: "var(--card-title)",
                    transform: open ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  display: "grid",
                  gridTemplateRows: open ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.35s ease",
                }}>
                  <div style={{ overflow: "hidden" }} aria-hidden={!open}>
                    <p style={{
                      fontSize: 15,
                      fontStyle: "italic",
                      color: textMuted,
                      lineHeight: 1.7,
                      margin: 0,
                      padding: "0 32px 24px",
                    }}>
                      {p.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} textoBtn={copy.ctaBannerBtn} color={accentAlt} />
    </main>
  );
}