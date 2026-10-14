"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { bateriasCopy } from "@/lib/i18n/baterias";
import CTABanner from "@/components/ui/CTABanner";
import BatteryIcon from "@/components/icons/BatteryIcon";

export default function BateriasPage() {
  const { lang } = useLanguage();
  const copy = bateriasCopy[lang];

  const [conInstalacion, setConInstalacion] = useState(true);

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const accent = "var(--color-blue-mid)";
  const accentAlt = "var(--color-green-dark)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";
  const cardTitleColor = "var(--title-color)";

  const ventajas = conInstalacion ? copy.ventajas.conInstalacion : copy.ventajas.sinInstalacion;

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
              color: "var(--color-cream-text)",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
            }}>
              {copy.hero.title}
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "var(--on-cream-75)",
              lineHeight: 1.7,
              maxWidth: 500,
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
          <div style={{
            background: "var(--bg-service)",
            borderRadius: 24,
            padding: 48,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <BatteryIcon size={160} color="var(--title-color)" />
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
          }}>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: titleColor,
              textTransform: "uppercase",
              margin: 0,
            }}>
              {copy.ventajas.heading}
            </h2>

            <div style={{
              display: "inline-flex",
              background: cardBg,
              borderRadius: 50,
              padding: 4,
              border: "1px solid var(--toggle-border)",
            }}>
              <button
                onClick={() => setConInstalacion(true)}
                style={{
                  background: conInstalacion ? accent : "transparent",
                  color: conInstalacion ? "white" : textMuted,
                  border: "none",
                  borderRadius: 50,
                  padding: "10px 20px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {copy.ventajas.toggleCon}
              </button>
              <button
                onClick={() => setConInstalacion(false)}
                style={{
                  background: !conInstalacion ? accent : "transparent",
                  color: !conInstalacion ? "white" : textMuted,
                  border: "none",
                  borderRadius: 50,
                  padding: "10px 20px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {copy.ventajas.toggleSin}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 32 }}>
            {ventajas.map((v, i) => (
              <div key={i} style={{
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

      {/* Tipos */}
      <section style={{ background: "var(--hero-bg)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "var(--color-cream-text)",
            textTransform: "uppercase",
            marginBottom: 48,
          }}>
            {copy.tipos.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
            {copy.tipos.items.map((t, i) => (
              <div key={i} style={{
                background: "var(--on-dark-08)",
                borderRadius: 20,
                padding: "32px 24px",
                border: "1px solid var(--on-dark-15)",
              }}>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: accentAlt,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {t.titulo}
                </h3>
                <p style={{ fontSize: 14, fontStyle: "italic", color: "var(--on-cream-75)", lineHeight: 1.7, margin: 0 }}>
                  {t.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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
            {copy.faqs.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {copy.faqs.items.map((f, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 16,
                padding: "32px",
                borderLeft: `4px solid ${accentAlt}`,
              }}>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: cardTitleColor,
                  marginBottom: 8,
                }}>
                  {f.pregunta}
                </h3>
                <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
                  {f.respuesta}
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