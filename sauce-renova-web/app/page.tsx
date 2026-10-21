"use client";

import Link from "next/link";
import ThemedImage from "@/components/ui/ThemedImage";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeCopy } from "@/lib/i18n/home";

import principalImg from "@/components/illustrations/principal.webp";
import principalOscuroImg from "@/components/illustrations/principalOscuro.webp";
import hogarAzul from "@/components/illustrations/hogar-azul.svg";
import hogarVerde from "@/components/illustrations/casa-verde.svg";
import empresaAzul from "@/components/illustrations/Empresa-azulsvg.svg";
import empresaVerde from "@/components/illustrations/Empresa-verde.svg";
import comunidadAzul from "@/components/illustrations/comunidad-azul.svg";
import comunidadVerde from "@/components/illustrations/comunidad-verde.svg";
import hotelAzul from "@/components/illustrations/Hotel-azul.svg";
import hotelVerde from "@/components/illustrations/Hotel-verde.svg";
import cargadorImg from "@/components/illustrations/cargador-ve.webp";
import cargadorOscuroImg from "@/components/illustrations/Cargador-ve-oscuro.webp";
import placasImg from "@/components/illustrations/placas-y-baterias.webp";
import placasOscuroImg from "@/components/illustrations/placas-y-baterias-oscuro.webp";
import mapaImg from "@/components/illustrations/mapa.webp";
import mapaOscuroImg from "@/components/illustrations/mapa-oscuro.webp";

const benefitIcons = [
  { light: hogarVerde, dark: hogarAzul },
  { light: empresaVerde, dark: empresaAzul },
  { light: comunidadVerde, dark: comunidadAzul },
  { light: hotelVerde, dark: hotelAzul },
];

export default function Home() {
  const { lang } = useLanguage();
  const copy = homeCopy[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  const productBtnStyle = {
    color: "var(--color-white)",
    border: "none",
    borderRadius: "9999px",
    padding: "0.85em 2.2em",
    fontWeight: 800,
    fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "transform 0.15s",
    display: "inline-block",
    textDecoration: "none",
    textAlign: "center" as const,
    marginTop: "1.5rem",
  };

  const reviewArrowStyle = {
    background: "var(--on-dark-25)",
    border: "none",
    borderRadius: "50%",
    width: 44,
    height: 44,
    cursor: "pointer",
    flexShrink: 0,
    transition: "background 0.2s",
    color: "var(--color-white)",
    fontSize: 20,
    fontWeight: "bold",
  } as const;

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-page)", minHeight: "auto", display: "flex", flexDirection: "column" }} id="inicio">
        <div
          className="grid grid-cols-1 lg:grid-cols-[55fr_45fr]"
          style={{
            flex: 1,
            minHeight: "auto",
            maxWidth: "100%",
            padding: "1.5vw 5vw 2vw 6vw",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
              fontWeight: 900,
              color: "var(--accent)",
              lineHeight: 1.0,
              margin: "0 0 1rem",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.hero.titleLine1}<br />{copy.hero.titleLine2}
            </h1>
            <p style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "30rem",
              marginBottom: "2.5rem",
            }}>
              {copy.hero.text}
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/preguntas-frecuentes" style={{
                background: "var(--color-green)",
                color: "var(--color-white)",
                border: "none",
                borderRadius: "9999px",
                padding: "1.4em 2em",
                fontWeight: 400,
                fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-poppins), sans-serif",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}>
                {copy.hero.btnFaq}
              </Link>
              <Link href="/contacto" style={{
                background: "var(--color-green)",
                color: "var(--color-white)",
                border: "none",
                borderRadius: "9999px",
                padding: "1.4em 2em",
                fontWeight: 400,
                fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-poppins), sans-serif",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}>
                {copy.hero.btnPresupuesto}
              </Link>
            </div>
          </div>

          <div style={{
            background: "var(--bg-page)",
            borderRadius: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            aspectRatio: "3 / 4",
            width: "82%",
            padding: 0,
            position: "relative",
            alignSelf: "start",
            marginTop: "0.5vw",
          }}>
            <ThemedImage
              light={principalImg}
              dark={principalOscuroImg}
              alt={copy.hero.altPrincipal}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              loading="eager"
              style={{ objectFit: "contain", borderRadius: "1.5rem" }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "var(--bg-page)", padding: "0.25rem 0" }} id="solar">
        <div
          className="mx-4 md:mx-10"
          style={{
            background: "var(--band-bg)",
            borderRadius: "2rem",
            padding: "3.5vw 3vw",
            maxWidth: "100%",
          }}
        >
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
            fontWeight: 900,
            fontStyle: "normal",
            color: "var(--color-cream)",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            marginBottom: "2.5vw",
            fontFamily: "var(--font-shrikhand), sans-serif",
          }}>
            {copy.benefits.heading}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "1.5vw" }}
          >
            {copy.benefits.items.map((b, i) => {
              const icon = benefitIcons[i];
              return (
                <div
                  key={i}
                  style={{
                    background: "var(--band-card)",
                    borderRadius: "1.25rem",
                    padding: "2.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ width: 72, height: 72, position: "relative" }}>
                    <ThemedImage
                      light={icon.light}
                      dark={icon.dark}
                      alt={b.subtitle}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 style={{
                    color: "var(--color-navy-800)",
                    fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-poppins), sans-serif",
                    margin: 0,
                  }}>
                    {b.subtitle}
                  </h3>
                  <p style={{
                    color: "var(--color-navy-800)",
                    fontSize: "clamp(0.85rem, 1vw, 1rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    flex: 1,
                  }}>
                    {b.text}
                  </p>
                  <Link href="/solar" style={{
                    background: "var(--band-btn-bg)",
                    color: "var(--band-btn-text)",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "0.75em 2em",
                    fontWeight: 700,
                    fontSize: "clamp(0.75rem, 0.85vw, 0.875rem)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    marginTop: "auto",
                    fontStyle: "normal",
                    textDecoration: "none",
                  }}>
                    {copy.benefits.btnVerMas}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ background: "var(--bg-page)", padding: "5vw 5vw" }} id="cargadores">
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            maxWidth: "90rem",
            margin: "0 auto",
            gap: "5vw",
          }}
        >
          <div>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
              fontWeight: 900,
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              lineHeight: 1,
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.products.evHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem", alignItems: "start" }}>
              <div style={{
                background: "var(--product-card)",
                borderRadius: "1rem",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                position: "relative",
              }}>
                <ThemedImage
                  light={cargadorImg}
                  dark={cargadorOscuroImg}
                  alt={copy.products.evAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", fontStyle: "italic", lineHeight: 1.75, color: "var(--text-muted)" }}>
                  {copy.products.evText}
                </p>
                <Link
                  href="/cargadores"
                  style={{ ...productBtnStyle, background: "var(--accent)" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  {copy.products.evBtn}
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
              fontWeight: 900,
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              lineHeight: 1,
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.products.solarHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem", alignItems: "start" }}>
              <div style={{
                background: "var(--color-navy-800)",
                borderRadius: "1rem",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                position: "relative",
              }}>
                <ThemedImage
                  light={placasImg}
                  dark={placasOscuroImg}
                  alt={copy.products.solarAlt}
                  fill
                  sizes="(min-width: 1200px) 400px, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", fontStyle: "italic", lineHeight: 1.75, color: "var(--text-muted)" }}>
                  {copy.products.solarText}
                </p>
                <Link
                  href="/solar"
                  style={{ ...productBtnStyle, background: "var(--accent)" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  {copy.products.solarBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ background: "var(--bg-page)", padding: "80px 24px" }} id="tramites">
        <div style={{
          maxWidth: 1200,
          marginLeft: 0,
          marginRight: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 64,
          alignItems: "center",
        }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
            <ThemedImage
              light={mapaImg}
              dark={mapaOscuroImg}
              alt={copy.coverage.mapAlt}
              fill
              sizes="(min-width: 1200px) 400px, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: "clamp(20px, 2.4vw, 34px)",
              fontWeight: 900,
              color: "var(--accent-2)",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.coverage.headingLine1}<br />{copy.coverage.headingLine2}
            </h2>
            <p style={{
              fontSize: 16,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}>
              {copy.coverage.text}
            </p>
            <Link
              href="/empresa/proyectos"
              style={{
                background: "var(--accent-2)",
                color: "var(--on-accent-2)",
                borderRadius: 50,
                padding: "14px 36px",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "transform 0.15s",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {copy.coverage.btn}
            </Link>
          </div>
        </div>
      </section>

      {/* TODO: AÑADIR REVIEWS REALES */}
      {/* Reviews */}
      <section style={{ background: "var(--bg-page)", padding: "3vw 5px" }}>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 900,
          color: "var(--accent)",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 24,
          fontFamily: "var(--font-shrikhand), sans-serif",
        }}>
          {copy.reviews.heading}
        </h2>
        <div
          className="mx-4 md:mx-10"
          style={{
            background: "var(--accent)",
            borderRadius: "2rem",
            padding: "2.5vw 2vw",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              className="hidden sm:flex items-center justify-center"
              style={reviewArrowStyle}
              onClick={() => scroll("left")}
              onMouseEnter={e => e.currentTarget.style.background = "var(--on-dark-40)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--on-dark-25)"}
            >
              ‹
            </button>

            <div
              ref={scrollRef}
              className="flex flex-col sm:flex-row gap-4 overflow-visible sm:overflow-x-auto"
              style={{
                paddingBottom: "0.5rem",
                scrollbarWidth: "none",
                flex: 1,
              }}
            >
              {copy.reviews.items.map((r, i) => (
                <div
                  key={i}
                  className="w-full sm:min-w-[280px] sm:max-w-[280px]"
                  style={{
                    background: "var(--review-card-bg)",
                    borderRadius: 16,
                    padding: "32px 24px",
                    border: "1px solid var(--on-dark-25)",
                    minHeight: "240px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    flexShrink: 0,
                  }}
                >
                  <div style={{ color: "var(--color-gold)", fontSize: 22 }}>
                    {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                  </div>
                  <p style={{ color: "var(--color-white)", fontSize: 15, lineHeight: 1.75, flex: 1 }}>
                    {r.text}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="hidden sm:flex items-center justify-center"
              style={reviewArrowStyle}
              onClick={() => scroll("right")}
              onMouseEnter={e => e.currentTarget.style.background = "var(--on-dark-40)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--on-dark-25)"}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}