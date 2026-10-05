"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { homeCopy } from "@/lib/i18n/home";

import principalImg from "@/components/illustrations/principal.webp";
import principalOscuroImg from "@/components/illustrations/IMG_PRINCIPAL_oscuro.webp";
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

const heroTheme = {
  light: {
    bg: "#fafad6",
    accent: "#0354bf",
    textMuted: "#4a5568",
    btnPrimary: "#78a83f",
    btnSecondary: "#0354bf",
    bgCard: "#1e2d45",
  },
  dark: {
    bg: "#203147",
    accent: "#78a83f",
    textMuted: "#a0aec0",
    btnPrimary: "#0354bf",
    btnSecondary: "#78a83f",
    bgCard: "#fafad6",
  },
};

const benefitIconsConfig = [
  { iconLight: "hogarVerde", iconDark: "hogarAzul" },
  { iconLight: "empresaVerde", iconDark: "empresaAzul" },
  { iconLight: "comunidadVerde", iconDark: "comunidadAzul" },
  { iconLight: "hotelVerde", iconDark: "hotelAzul" },
];

const benefitIcons: Record<string, typeof hogarAzul> = {
  hogarAzul, hogarVerde, empresaAzul, empresaVerde,
  comunidadAzul, comunidadVerde, hotelAzul, hotelVerde,
};

export default function Home() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const copy = homeCopy[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  const theme = isDark ? heroTheme.dark : heroTheme.light;
  const benefitsBg = isDark ? "#0354bf" : "#78a83f";
  const coverageBg = isDark ? "#203147" : "#fafad6";
  const coverageAccent = isDark ? "#fafad6" : "#78a83f";
  const coverageTextMuted = isDark ? "#a0aec0" : "#4a5568";
  const productsBg = isDark ? "#203147" : "#fafad6";
  const productsAccent = isDark ? "#78a83f" : "#0354bf";
  const productsTextMuted = isDark ? "#a0aec0" : "#4a5568";
  const productsCardBg = isDark ? "#203147" : "#1e2d45";
  const reviewsBgOuter = isDark ? "#203147" : "#fafad6";
  const reviewsBgBox = isDark ? "#78a83f" : "#0354bf";

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  const productBtnStyle = {
    color: "white",
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
    marginTop: "1.5rem",
  };

  const reviewArrowStyle = {
    background: "rgba(255,255,255,0.25)",
    border: "none",
    borderRadius: "50%",
    width: 44,
    height: 44,
    cursor: "pointer",
    flexShrink: 0,
    transition: "background 0.2s",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  } as const;

  return (
    <main>
      {/* Hero */}
      <section style={{ background: theme.bg, minHeight: "auto", display: "flex", flexDirection: "column" }} id="inicio">
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
              color: theme.accent,
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
              color: theme.textMuted,
              lineHeight: 1.6,
              maxWidth: "30rem",
              marginBottom: "2.5rem",
            }}>
              {copy.hero.text}
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button style={{
                background: "#78a83f",
                color: "white",
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
              }}>
                {copy.hero.btnFaq}
              </button>
              <button style={{
                background: "#78a83f",
                color: "white",
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
              }}>
                {copy.hero.btnPresupuesto}
              </button>
            </div>
          </div>

          <div style={{
            background: isDark ? "#203147" : "#fafad6",
            borderRadius: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            aspectRatio: "3 / 4",
            width: "100%",
            padding: 0,
            position: "relative",
            alignSelf: "start",
            marginTop: "0.5vw",
          }}>
            <Image
              src={isDark ? principalOscuroImg : principalImg}
              alt={copy.hero.altPrincipal}
              fill
              style={{ objectFit: "contain", borderRadius: "1.5rem" }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: isDark ? "#203147" : "#fafad6", padding: "0.25rem 0" }} id="solar">
        <div
          className="mx-4 md:mx-10"
          style={{
            background: benefitsBg,
            borderRadius: "2rem",
            padding: "3.5vw 3vw",
            maxWidth: "100%",
          }}
        >
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
            fontWeight: 900,
            fontStyle: "normal",
            color: "#fafad6",
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
              const iconConfig = benefitIconsConfig[i];
              return (
                <div
                  key={i}
                  style={{
                    background: isDark ? "#d1e5ff" : "#afcf89",
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
                    <Image
                      src={benefitIcons[isDark ? iconConfig.iconDark : iconConfig.iconLight]}
                      alt={b.subtitle}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 style={{
                    color: "#1e2d45",
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
                    color: "#1e2d45",
                    fontSize: "clamp(0.85rem, 1vw, 1rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    flex: 1,
                  }}>
                    {b.text}
                  </p>
                  <button style={{
                    background: isDark ? "#0354bf" : "#fafad6",
                    color: isDark ? "#fafad6" : benefitsBg,
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
                  }}>
                    {copy.benefits.btnVerMas}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ background: productsBg, padding: "5vw 5vw" }} id="cargadores">
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
              color: productsAccent,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              lineHeight: 1,
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.products.evHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem", alignItems: "start" }}>
              <div style={{
                background: productsCardBg,
                borderRadius: "1rem",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                position: "relative",
              }}>
                <Image
                  src={isDark ? cargadorOscuroImg : cargadorImg}
                  alt={copy.products.evAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", fontStyle: "italic", lineHeight: 1.75, color: productsTextMuted }}>
                  {copy.products.evText}
                </p>
                <button
                  style={{ ...productBtnStyle, background: productsAccent }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  {copy.products.evBtn}
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
              fontWeight: 900,
              color: productsAccent,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              lineHeight: 1,
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.products.solarHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem", alignItems: "start" }}>
              <div style={{
                background: productsCardBg,
                borderRadius: "1rem",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                position: "relative",
              }}>
                <Image
                  src={isDark ? placasOscuroImg : placasImg}
                  alt={copy.products.solarAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", fontStyle: "italic", lineHeight: 1.75, color: productsTextMuted }}>
                  {copy.products.solarText}
                </p>
                <button
                  style={{ ...productBtnStyle, background: productsAccent }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  {copy.products.solarBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ background: coverageBg, padding: "80px 24px" }} id="tramites">
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
            <Image
              src={isDark ? mapaOscuroImg : mapaImg}
              alt={copy.coverage.mapAlt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: "clamp(20px, 2.4vw, 34px)",
              fontWeight: 900,
              color: coverageAccent,
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
              fontFamily: "var(--font-shrikhand), sans-serif",
            }}>
              {copy.coverage.headingLine1}<br />{copy.coverage.headingLine2}
            </h2>
            <p style={{
              fontSize: 16,
              color: coverageTextMuted,
              lineHeight: 1.7,
              marginBottom: 32,
            }}>
              {copy.coverage.text}
            </p>
            <button
              style={{
                background: coverageAccent,
                color: isDark ? "#203147" : "white",
                border: "none",
                borderRadius: 50,
                padding: "14px 36px",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "transform 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {copy.coverage.btn}
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: reviewsBgOuter, padding: "3vw 5px" }}>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 900,
          color: reviewsBgBox,
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
            background: reviewsBgBox,
            borderRadius: "2rem",
            padding: "2.5vw 2vw",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              className="hidden sm:flex items-center justify-center"
              style={reviewArrowStyle}
              onClick={() => scroll("left")}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
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
                    background: isDark ? "rgba(26,34,53,0.25)" : "rgba(255,255,255,0.18)",
                    borderRadius: 16,
                    padding: "32px 24px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    minHeight: "240px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    flexShrink: 0,
                  }}
                >
                  <div style={{ color: "#f5b942", fontSize: 22 }}>
                    {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                  </div>
                  <p style={{ color: "white", fontSize: 15, lineHeight: 1.75, flex: 1 }}>
                    {r.text}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="hidden sm:flex items-center justify-center"
              style={reviewArrowStyle}
              onClick={() => scroll("right")}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}