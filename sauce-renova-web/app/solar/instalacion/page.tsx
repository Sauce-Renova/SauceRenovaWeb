"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { instalacionCopy } from "@/lib/i18n/instalacion";
import CTABanner from "@/components/ui/CTABanner";
import SolarPanelIllustration from "@/components/illustrations/SolarPanelIllustration";

export default function InstalacionPage() {
  const { lang } = useLanguage();
  const copy = instalacionCopy[lang];
  const [abierta, setAbierta] = useState<number | null>(null);
  const [ultima, setUltima] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const accentAlt = "var(--color-green-dark)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";
  const cardTitleColor = "var(--title-color)";

  const parrafosDe = (i: number): readonly string[] => copy.tipos.items[i].masInfo;

  const alternar = (i: number) => {
    if (abierta === i) {
      setAbierta(null);
      return;
    }
    setAbierta(i);
    if (parrafosDe(i).length === 0) return;
    setUltima(i);
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: reducir ? "auto" : "smooth", block: "nearest" });
    }, 380);
  };

  const panelItem = copy.tipos.items[ultima];
  const parrafos = parrafosDe(ultima);
  const panelAbierto = abierta !== null && parrafosDe(abierta).length > 0;

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
              {copy.hero.intro}
            </p>
            <Link href="/contacto?servicio=solar" style={{
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
            <SolarPanelIllustration />
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
            {copy.tipos.items.map((t, i) => {
              const open = abierta === i;
              const enTarjeta = parrafosDe(i).length === 0;
              return (
                <div
                  key={i}
                  className="card-hover"
                  onClick={() => alternar(i)}
                  style={{
                    background: cardBg,
                    borderRadius: 20,
                    padding: "40px 32px",
                    borderLeft: `4px solid ${accentAlt}`,
                    cursor: "pointer",
                    boxShadow: open ? `0 0 0 2px ${accentAlt}` : undefined,
                  }}
                >
                  <h3 style={{
                    fontSize: 22,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: cardTitleColor,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}>
                    <button
                      type="button"
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: 0,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        font: "inherit",
                        color: "inherit",
                        textTransform: "inherit",
                      }}
                    >
                      <span>{t.titulo}</span>
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

                  {enTarjeta && (
                    <div
                      inert={!open}
                      style={{
                        display: "grid",
                        gridTemplateRows: open ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.35s ease",
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ paddingTop: 24 }}>
                          <Link
                            href="/contacto?servicio=solar"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              background: accentAlt,
                              color: "var(--color-white)",
                              borderRadius: 50,
                              padding: "14px 32px",
                              fontWeight: 800,
                              fontSize: 13,
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              textDecoration: "none",
                              textAlign: "center",
                              display: "inline-block",
                            }}
                          >
                            {t.btn}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            ref={panelRef}
            inert={!panelAbierto}
            style={{
              display: "grid",
              gridTemplateRows: panelAbierto ? "1fr" : "0fr",
              transition: "grid-template-rows 0.35s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div style={{ paddingTop: 32 }}>
                <div style={{
                  background: cardBg,
                  borderRadius: 20,
                  padding: "32px",
                  borderLeft: `4px solid ${accentAlt}`,
                }}>
                  <p style={{
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--card-title)",
                    margin: "0 0 12px",
                  }}>
                    {panelItem.titulo}
                  </p>
                  {parrafos.map((parrafo, j) => (
                    <p key={j} style={{
                      fontSize: 15,
                      fontStyle: "italic",
                      color: textMuted,
                      lineHeight: 1.7,
                      margin: j === 0 ? 0 : "12px 0 0",
                    }}>
                      {parrafo}
                    </p>
                  ))}
                  <Link href="/contacto?servicio=solar" style={{
                    background: accentAlt,
                    color: "var(--color-white)",
                    borderRadius: 50,
                    padding: "14px 32px",
                    fontWeight: 800,
                    fontSize: 13,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "inline-block",
                    marginTop: 24,
                  }}>
                    {panelItem.btn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
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
            {copy.proceso.heading}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: 24 }}
          >
            {copy.proceso.pasos.map((p, i) => (
              <div key={i} className="card-hover" style={{
                background: "var(--on-dark-08)",
                borderRadius: 20,
                padding: "32px 24px",
                border: "1px solid var(--on-dark-15)",
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
                  color: "var(--color-cream-text)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {p.titulo}
                </h3>
                <p style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "var(--on-cream-75)",
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