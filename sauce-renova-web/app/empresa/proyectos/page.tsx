"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { proyectosCopy } from "@/lib/i18n/proyectos";
import CTABanner from "@/components/ui/CTABanner";

export default function ProyectosPage() {
  const { lang } = useLanguage();
  const copy = proyectosCopy[lang];

  const [filtro, setFiltro] = useState<string>("todos");

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const cardBg = "var(--card-bg)";
  const accentAlt = "var(--color-green-dark)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";

  const proyectosFiltrados = filtro === "todos"
    ? copy.items
    : copy.items.filter((item) => item.categoria === filtro);

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

      <section style={{ padding: "60px 24px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            { key: "todos", label: copy.filtros.todos },
            { key: "residencial", label: copy.filtros.residencial },
            { key: "industrial", label: copy.filtros.industrial },
            { key: "cargadores", label: copy.filtros.cargadores },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltro(f.key)}
              style={{
                background: filtro === f.key ? accentAlt : cardBg,
                color: filtro === f.key ? "var(--color-white)" : titleColor,
                border: `1px solid ${filtro === f.key ? accentAlt : "var(--card-border)"}`,
                borderRadius: 30,
                padding: "10px 24px",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32 }}>
            {proyectosFiltrados.map((item) => (
              <div key={item.id} style={{
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
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 12,
                    fontSize: 13,
                    fontWeight: 800,
                    color: "var(--card-title)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    <span>{item.ubicacion}</span>
                    <span>{item.potencia}</span>
                  </div>
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
                  <p style={{
                    fontSize: 15,
                    fontStyle: "italic",
                    color: textMuted,
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}>
                    {item.descripcion}
                  </p>
                </div>
                <div style={{
                  background: "var(--bg-service)",
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: titleColor,
                }}>
                  {item.ahorroEstimado}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo={copy.ctaBanner} textoBtn={copy.ctaBannerBtn} color={accentAlt} />
    </main>
  );
}