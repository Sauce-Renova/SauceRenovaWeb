"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#1a2235" : "#f5f5dc";
  const labelColor = isDark ? "#f5f5dc" : "#1e2d45";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : "#2857c8";
  const inputBg = isDark ? "#243050" : "white";
  const inputBorder = isDark ? "#3a4d6b" : "#e2e8f0";
  const inputColor = isDark ? "#f5f5dc" : "#1e2d45";

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: `2px solid ${inputBorder}`,
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
    background: inputBg,
    color: inputColor,
  };

  return (
    <main style={{ background: bg, minHeight: "100vh", padding: "80px 24px" }}>
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
          Contáctanos
        </h1>
        <p style={{
          fontSize: 16,
          fontStyle: "italic",
          color: textMuted,
          lineHeight: 1.7,
          marginBottom: 48,
        }}>
          Cuéntanos tu proyecto y nos ponemos en contacto contigo lo antes posible.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: labelColor, marginBottom: 8 }}>
              Nombre
            </label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: labelColor, marginBottom: 8 }}>
                Teléfono
              </label>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="666 666 666"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: labelColor, marginBottom: 8 }}>
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: labelColor, marginBottom: 8 }}>
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos qué necesitas..."
              rows={6}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            style={{
              background: status === "loading" ? "#a0aec0" : "#6b8c3a",
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "16px 40px",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              alignSelf: "flex-start",
              transition: "background 0.2s, transform 0.15s",
            }}
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "ok" && (
            <p style={{ color: "#6b8c3a", fontWeight: 700, fontSize: 15 }}>
              ✓ Mensaje enviado correctamente. Nos pondremos en contacto pronto.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#e53e3e", fontWeight: 700, fontSize: 15 }}>
              ✗ Ha habido un error al enviar. Inténtalo de nuevo o contáctanos directamente.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}