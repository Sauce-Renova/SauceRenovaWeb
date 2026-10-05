"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { contactoCopy } from "@/lib/i18n/contacto";

const DESTINO = "comercial@saucerenova.com";

export default function ContactPage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const copy = contactoCopy[lang];

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const labelColor = isDark ? "#f5f5dc" : "#1e2d45";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : "#2857c8";
  const cardBg = isDark ? "#243050" : "white";
  const cardBorder = isDark ? "#3a4d6b" : "#e2e8f0";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";

  const [paso, setPaso] = useState(1);
  const [tienePlacas, setTienePlacas] = useState<"si" | "no" | null>(null);
  const [interes, setInteres] = useState<string[]>([]);
  const [tipoPropiedad, setTipoPropiedad] = useState<string | null>(null);

  const elegirPlacas = (valor: "si" | "no") => {
    setTienePlacas(valor);
    setPaso(2);
  };

  const toggleInteres = (opcion: string) => {
    setInteres((prev) =>
      prev.includes(opcion) ? prev.filter((o) => o !== opcion) : [...prev, opcion]
    );
  };

  const elegirPropiedad = (valor: string) => {
    setTipoPropiedad(valor);
  };

  const listo = tienePlacas !== null && interes.length > 0 && tipoPropiedad !== null;

  const buildMailtoHref = () => {
    const subject = copy.mail.subject;
    const body = [
      `${copy.mail.tienePlacas}: ${tienePlacas === "si" ? copy.mail.si : copy.mail.no}`,
      `${copy.mail.interesadoEn}: ${interes.join(", ")}`,
      `${copy.mail.tipoPropiedad}: ${tipoPropiedad}`,
      "",
      `${copy.mail.nombre}: `,
      `${copy.mail.telefono}: `,
      `${copy.mail.comentario}: `,
    ].join("\n");
    return `mailto:${DESTINO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const btnBase = {
    borderRadius: 50,
    padding: "10px 22px",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    border: `2px solid ${accent}`,
    transition: "background 0.2s, color 0.2s",
  };

  const pasoLabelStyle = {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: accentAlt,
    marginBottom: 8,
  };

  return (
    <main style={{ background: bg, padding: "80px 24px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 900,
          fontStyle: "italic",
          color: titleColor,
          textTransform: "uppercase",
          lineHeight: 0.95,
          marginBottom: 16,
        }}>
          {copy.heading}
        </h1>
        <p style={{
          fontSize: 16,
          fontStyle: "italic",
          color: textMuted,
          lineHeight: 1.7,
          marginBottom: 48,
        }}>
          {copy.intro}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Paso 1 */}
          <div>
            <p style={pasoLabelStyle}>{copy.pasoLabel(1)}</p>
            <label style={{ display: "block", fontWeight: 800, fontSize: 18, fontStyle: "italic", color: labelColor, marginBottom: 16 }}>
              {copy.pregunta1}
            </label>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => elegirPlacas("si")}
                style={{
                  ...btnBase,
                  background: tienePlacas === "si" ? accent : "transparent",
                  color: tienePlacas === "si" ? "white" : labelColor,
                }}
              >
                {copy.opcion1Si}
              </button>
              <button
                onClick={() => elegirPlacas("no")}
                style={{
                  ...btnBase,
                  background: tienePlacas === "no" ? accent : "transparent",
                  color: tienePlacas === "no" ? "white" : labelColor,
                }}
              >
                {copy.opcion1No}
              </button>
            </div>
          </div>

          {paso >= 2 && (
            <>
              <div style={{ borderTop: `1px solid ${cardBorder}` }} />

              {/* Paso 2 */}
              <div>
                <p style={pasoLabelStyle}>{copy.pasoLabel(2)}</p>
                <label style={{ display: "block", fontWeight: 800, fontSize: 18, fontStyle: "italic", color: labelColor, marginBottom: 16 }}>
                  {copy.pregunta2}
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                  {copy.opcionesInteres.map((opcion) => {
                    const activo = interes.includes(opcion);
                    return (
                      <button
                        key={opcion}
                        onClick={() => toggleInteres(opcion)}
                        style={{
                          ...btnBase,
                          border: `2px solid ${activo ? accentAlt : cardBorder}`,
                          background: activo ? accentAlt : cardBg,
                          color: activo ? "white" : textMuted,
                        }}
                      >
                        {opcion}
                      </button>
                    );
                  })}
                </div>
                {paso === 2 && (
                  <button
                    onClick={() => setPaso(3)}
                    disabled={interes.length === 0}
                    style={{
                      ...btnBase,
                      border: "none",
                      background: interes.length > 0 ? accent : "#a0aec0",
                      color: "white",
                      cursor: interes.length > 0 ? "pointer" : "not-allowed",
                    }}
                  >
                    {copy.siguiente}
                  </button>
                )}
              </div>
            </>
          )}

          {paso >= 3 && (
            <>
              <div style={{ borderTop: `1px solid ${cardBorder}` }} />

              {/* Paso 3 */}
              <div>
                <p style={pasoLabelStyle}>{copy.pasoLabel(3)}</p>
                <label style={{ display: "block", fontWeight: 800, fontSize: 18, fontStyle: "italic", color: labelColor, marginBottom: 16 }}>
                  {copy.pregunta3}
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {copy.opcionesPropiedad.map((opcion) => (
                    <button
                      key={opcion}
                      onClick={() => elegirPropiedad(opcion)}
                      style={{
                        ...btnBase,
                        background: tipoPropiedad === opcion ? accent : "transparent",
                        color: tipoPropiedad === opcion ? "white" : labelColor,
                      }}
                    >
                      {opcion}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <a
            href={listo ? buildMailtoHref() : undefined}
            aria-disabled={!listo}
            style={{
              background: listo ? accentAlt : "#a0aec0",
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "16px 40px",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              cursor: listo ? "pointer" : "not-allowed",
              pointerEvents: listo ? "auto" : "none",
              alignSelf: "flex-start",
              transition: "background 0.2s",
            }}
          >
            {copy.abrirCorreo}
          </a>

          <div style={{
            background: heroBg,
            borderRadius: 20,
            padding: "32px 28px",
            marginTop: 8,
          }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: accentAlt, marginBottom: 12 }}>
              {copy.autoServicioHeading}
            </p>
            <p style={{ fontSize: 15, fontStyle: "italic", color: "rgba(245,245,220,0.85)", lineHeight: 1.7, margin: 0 }}>
              {copy.autoServicioPre}{" "}
              <a href={`mailto:${DESTINO}`} style={{ color: "#f5f5dc", textDecoration: "underline" }}>
                {DESTINO}
              </a>
              {" "}{copy.autoServicioOr}{" "}
              <a href="tel:+34613115981" style={{ color: "#f5f5dc", textDecoration: "underline" }}>
                613 115 981
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}