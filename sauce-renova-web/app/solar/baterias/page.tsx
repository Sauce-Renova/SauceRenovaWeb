"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import CTABanner from "@/components/ui/CTABanner";
import BatteryIcon from "@/components/icons/BatteryIcon";

export default function BateriasPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#1a2235" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

  const ventajas = [
    {
      titulo: "Independencia Total",
      descripcion: "Almacena la energía que generas durante el día y úsala por la noche. Reduce tu dependencia de la red eléctrica al mínimo.",
    },
    {
      titulo: "Máximo Ahorro",
      descripcion: "Aprovecha toda la energía que producen tus paneles sin desperdiciar el excedente. Amortiza tu instalación mucho antes.",
    },
    {
      titulo: "Protección ante Apagones",
      descripcion: "Con una batería de respaldo, tu hogar o empresa seguirá funcionando aunque haya un corte en la red eléctrica.",
    },
    {
      titulo: "Larga Vida Útil",
      descripcion: "Trabajamos con baterías de última generación con garantías de hasta 10 años y una vida útil superior a los 6.000 ciclos.",
    },
  ];

  const tipos = [
    {
      titulo: "Baterías de Litio",
      descripcion: "La tecnología más avanzada del mercado. Mayor densidad de energía, ciclos de carga más rápidos y mayor vida útil. Ideales para uso residencial y empresarial.",
    },
    {
      titulo: "Sistemas Híbridos",
      descripcion: "Combinamos placas solares, baterías e inversor híbrido en un único sistema integrado. La solución más eficiente para maximizar el autoconsumo.",
    },
    {
      titulo: "Almacenamiento Industrial",
      descripcion: "Soluciones de gran capacidad para empresas e instalaciones industriales. Reducción significativa de la demanda punta y los costes energéticos.",
    },
  ];

  const faqs = [
    {
      pregunta: "¿Cuánto tarda en amortizarse una batería?",
      respuesta: "Depende del consumo y el tamaño de la instalación, pero en la mayoría de los casos la amortización se produce entre 6 y 10 años.",
    },
    {
      pregunta: "¿Puedo añadir una batería a mi instalación existente?",
      respuesta: "Sí, en la mayoría de los casos es posible añadir baterías a instalaciones ya existentes. Evaluamos tu caso concreto sin compromiso.",
    },
    {
      pregunta: "¿Qué pasa si la batería se llena?",
      respuesta: "Cuando la batería está cargada al 100%, el excedente se vierte a la red eléctrica y recibes una compensación económica por ello.",
    },
    {
      pregunta: "¿Hay ayudas para instalar baterías?",
      respuesta: "Sí, las ayudas europeas Next Generation incluyen subvenciones para la instalación de sistemas de almacenamiento. Te gestionamos todo el proceso.",
    },
  ];

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ background: heroBg, padding: "80px 24px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: accentAlt,
              marginBottom: 16,
            }}>
              Solar → Baterías
            </p>
            <h1 style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#f5f5dc",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
            }}>
              Baterías<br />Solares
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(245,245,220,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
            }}>
              Almacena la energía que generan tus placas solares y úsala cuando más la necesites. Consigue la independencia energética total con nuestros sistemas de almacenamiento de última generación.
            </p>
            <Link href="/contacto" style={{
              background: accentAlt,
              color: "white",
              borderRadius: 50,
              padding: "16px 40px",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}>
              Solicitar presupuesto
            </Link>
          </div>
          <div style={{
            background: isDark ? "#1a2235" : "#f5f5dc",
            borderRadius: 24,
            padding: 48,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <BatteryIcon size={160} color={isDark ? "#9BC97A" : accent} />
          </div>
        </div>
      </section>

      {/* Ventajas */}
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
            Ventajas del Almacenamiento
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
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
      <section style={{ background: isDark ? "#0d1520" : "#1e2d45", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#f5f5dc",
            textTransform: "uppercase",
            marginBottom: 48,
          }}>
            Tipos de Soluciones
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {tipos.map((t, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 24px",
                border: "1px solid rgba(255,255,255,0.15)",
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
                <p style={{ fontSize: 14, fontStyle: "italic", color: "rgba(245,245,220,0.75)", lineHeight: 1.7, margin: 0 }}>
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
            Preguntas Frecuentes
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f, i) => (
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

      <CTABanner titulo="¿Quieres almacenar tu energía solar?" color={accentAlt} />
    </main>
  );
}