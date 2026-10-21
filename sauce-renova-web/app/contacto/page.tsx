"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { contactoCopy } from "@/lib/i18n/contacto";
import { emailValido, telefonoValido } from "@/lib/validarContacto";

const DESTINO = "comercial@saucerenova.com";

const SERVICIOS_URL = ["solar", "mantenimiento", "baterias", "cargadores", "electricidad", "tramites", "promo"];
const PROMO_INDEX = 6;
const PLAN_URL = ["esencial", "rendimiento", "premium"];
const PLAN_IDS = ["esencial", "rendimiento", "premium", "indeciso"];

function ContactForm() {
  const { lang } = useLanguage();
  const copy = contactoCopy[lang];
  const params = useSearchParams();

  const idxPlanUrl = PLAN_URL.indexOf(params.get("plan") ?? "");
  const idxServicioUrl = SERVICIOS_URL.indexOf(params.get("servicio") ?? "");
  const idxServicioInicial = idxPlanUrl >= 0 ? PROMO_INDEX : idxServicioUrl;

  const bg = "var(--bg-service)";
  const heroBg = "var(--hero-bg)";
  const labelColor = "var(--label-color)";
  const textMuted = "var(--text-muted)";
  const titleColor = "var(--title-color)";
  const cardBg = "var(--card-bg)";
  const cardBorder = "var(--card-border)";
  const accent = "var(--color-blue-mid)";
  const accentAlt = "var(--color-green-dark)";

  const [paso, setPaso] = useState(1);
  const [tienePlacas, setTienePlacas] = useState<"si" | "no" | null>(null);
  const [interes, setInteres] = useState<string[]>(() =>
    idxServicioInicial >= 0 ? [copy.opcionesInteres[idxServicioInicial]] : []
  );
  const [plan, setPlan] = useState<number | null>(idxPlanUrl >= 0 ? idxPlanUrl : null);
  const [tipoPropiedad, setTipoPropiedad] = useState<string | null>(null);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok">("idle");
  const [error, setError] = useState<string | null>(null);

  const esPromo = interes.includes(copy.opcionesInteres[PROMO_INDEX]);
  const planOk = !esPromo || plan !== null;
  const puedeSiguiente = interes.length > 0 && planOk;

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

  const listo = tienePlacas !== null && puedeSiguiente && tipoPropiedad !== null;

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (estado === "enviando" || !acepta) return;
    setError(null);

    if (!nombre.trim() || (!telefono.trim() && !email.trim())) {
      setError(copy.errores.campos);
      return;
    }
    if (telefono.trim() && !telefonoValido(telefono)) {
      setError(copy.errores.telefono);
      return;
    }
    if (email.trim() && !emailValido(email)) {
      setError(copy.errores.email);
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          telefono,
          email,
          mensaje,
          tienePlacas: tienePlacas === "si" ? "Sí" : "No",
          interes,
          plan: esPromo && plan !== null ? PLAN_IDS[plan] : "",
          tipoPropiedad,
          aceptaPrivacidad: acepta,
        }),
      });

      if (res.ok) {
        setEstado("ok");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.error === "invalid_phone") setError(copy.errores.telefono);
      else if (data.error === "invalid_email") setError(copy.errores.email);
      else if (data.error === "missing_fields") setError(copy.errores.campos);
      else setError(copy.errores.envio);
    } catch {
      setError(copy.errores.envio);
    }
    setEstado("idle");
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

  const fieldLabelStyle = {
    display: "block",
    fontWeight: 700,
    fontSize: 14,
    color: labelColor,
    marginBottom: 6,
  };

  const inputStyle = {
    width: "100%",
    background: cardBg,
    color: labelColor,
    border: `2px solid ${cardBorder}`,
    borderRadius: 14,
    padding: "12px 16px",
    fontSize: 16,
    fontFamily: "inherit",
    outline: "none",
  };

  const puedeEnviar = acepta && estado !== "enviando";

  return (
    <main style={{ background: bg, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 900,
          fontStyle: "italic",
          color: titleColor,
          textTransform: "uppercase",
          lineHeight: 0.95,
          marginBottom: 16,
          textAlign: "center",
        }}>
          {copy.heading}
        </h1>
        <p style={{
          fontSize: 16,
          fontStyle: "italic",
          color: textMuted,
          lineHeight: 1.7,
          marginBottom: 48,
          textAlign: "center",
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

                {esPromo && (
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontWeight: 700, fontSize: 16, fontStyle: "italic", color: labelColor, marginBottom: 12 }}>
                      {copy.preguntaPlan}
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                      {copy.opcionesPlan.map((opcion, i) => (
                        <button
                          key={opcion}
                          onClick={() => setPlan(i)}
                          style={{
                            ...btnBase,
                            background: plan === i ? accent : "transparent",
                            color: plan === i ? "white" : labelColor,
                          }}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {paso === 2 && (
                  <button
                    onClick={() => setPaso(3)}
                    disabled={!puedeSiguiente}
                    style={{
                      ...btnBase,
                      border: "none",
                      background: puedeSiguiente ? accent : "var(--color-gray-soft)",
                      color: "var(--color-white)",
                      cursor: puedeSiguiente ? "pointer" : "not-allowed",
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

          {listo && estado !== "ok" && (
            <>
              <div style={{ borderTop: `1px solid ${cardBorder}` }} />

              <form onSubmit={enviar} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <p style={pasoLabelStyle}>{copy.datosHeading}</p>
                  <p style={{ fontSize: 14, fontStyle: "italic", color: textMuted, margin: 0 }}>
                    {copy.datosNota}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 16 }}>
                  <div>
                    <label htmlFor="contacto-nombre" style={fieldLabelStyle}>{copy.campos.nombre}</label>
                    <input
                      id="contacto-nombre"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contacto-telefono" style={fieldLabelStyle}>{copy.campos.telefono}</label>
                    <input
                      id="contacto-telefono"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contacto-email" style={fieldLabelStyle}>{copy.campos.email}</label>
                    <input
                      id="contacto-email"
                      type="email"
                      autoComplete="email"
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contacto-mensaje" style={fieldLabelStyle}>{copy.campos.mensaje}</label>
                  <textarea
                    id="contacto-mensaje"
                    rows={4}
                    maxLength={2000}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <p style={{ fontSize: 12, lineHeight: 1.6, color: textMuted, margin: 0, maxWidth: 1200 }}>
                  <strong style={{ color: labelColor }}>{copy.clausula.intro}.</strong>{" "}
                  {copy.clausula.lineas.map(([etiqueta, texto]) => (
                    <span key={etiqueta}>
                      <strong>{etiqueta}:</strong> {texto}{" "}
                    </span>
                  ))}
                  {copy.clausula.masInfo}{" "}
                  <Link href="/legal/privacidad" style={{ color: accent, textDecoration: "underline" }}>
                    {copy.clausula.enlace}
                  </Link>
                  .
                </p>

                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: labelColor, cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={acepta}
                    onChange={(e) => setAcepta(e.target.checked)}
                    style={{ marginTop: 3, width: 18, height: 18, accentColor: accentAlt, flexShrink: 0 }}
                  />
                  <span>
                    {copy.aceptoPre}{" "}
                    <Link href="/legal/privacidad" style={{ color: accent, textDecoration: "underline" }}>
                      {copy.aceptoEnlace}
                    </Link>
                  </span>
                </label>

                {error && (
                  <p role="alert" style={{ fontSize: 14, fontWeight: 700, color: "var(--color-gold)", margin: 0 }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!puedeEnviar}
                  style={{
                    background: puedeEnviar ? accentAlt : "var(--color-gray-soft)",
                    color: "var(--color-white)",
                    border: "none",
                    borderRadius: 50,
                    padding: "16px 40px",
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: puedeEnviar ? "pointer" : "not-allowed",
                    alignSelf: "flex-start",
                    transition: "background 0.2s",
                  }}
                >
                  {estado === "enviando" ? copy.enviando : copy.enviar}
                </button>
              </form>
            </>
          )}

          {estado === "ok" && (
            <div
              role="status"
              style={{
                background: cardBg,
                border: `2px solid ${accentAlt}`,
                borderRadius: 20,
                padding: "28px 28px",
                fontSize: 16,
                fontWeight: 700,
                color: labelColor,
                lineHeight: 1.6,
              }}
            >
              {copy.exito}
            </div>
          )}

          <div style={{
            background: heroBg,
            borderRadius: 20,
            padding: "32px 28px",
            marginTop: 8,
          }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: accentAlt, marginBottom: 12 }}>
              {copy.autoServicioHeading}
            </p>
            <p style={{ fontSize: 15, fontStyle: "italic", color: "var(--on-cream-85)", lineHeight: 1.7, margin: 0 }}>
              {copy.autoServicioPre}{" "}
              <a href={`mailto:${DESTINO}`} style={{ color: "var(--color-cream-text)", textDecoration: "underline" }}>
                {DESTINO}
              </a>
              {" "}{copy.autoServicioOr}{" "}
              <a href="tel:+34613115981" style={{ color: "var(--color-cream-text)", textDecoration: "underline" }}>
                613 115 981
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}