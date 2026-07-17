"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import CTABanner from "@/components/ui/CTABanner";

export default function MantenimientoPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

  const beneficios = [
    {
      titulo: "Máximo Rendimiento",
      descripcion: "Una instalación limpia y bien mantenida produce hasta un 25% más de energía que una descuidada. Maximizamos tu retorno de inversión.",
    },
    {
      titulo: "Detección Temprana",
      descripcion: "Identificamos y solucionamos problemas antes de que se conviertan en averías graves, evitando costosas reparaciones.",
    },
    {
      titulo: "Mayor Vida Útil",
      descripcion: "Un mantenimiento regular puede extender la vida útil de tu instalación más allá de los 25 años estimados por el fabricante.",
    },
    {
      titulo: "Tranquilidad Total",
      descripcion: "Con nuestro servicio de mantenimiento periódico, tú solo te preocupas de disfrutar del ahorro en tu factura.",
    },
  ];

  const incluye = [
    {
      titulo: "Limpieza de Paneles",
      descripcion: "Eliminamos el polvo, hojas, excrementos de aves y cualquier suciedad que reduzca la eficiencia de tus placas.",
    },
    {
      titulo: "Revisión Eléctrica",
      descripcion: "Comprobamos el estado del cableado, conexiones, inversor y cuadro eléctrico para garantizar un funcionamiento seguro.",
    },
    {
      titulo: "Análisis de Producción",
      descripcion: "Revisamos los datos de producción y los comparamos con los valores esperados para detectar posibles pérdidas de rendimiento.",
    },
    {
      titulo: "Informe Técnico",
      descripcion: "Tras cada visita te entregamos un informe detallado del estado de tu instalación y las acciones realizadas.",
    },
  ];

  const pasos = [
    { numero: "01", titulo: "Contacto", descripcion: "Nos describes tu instalación y acordamos la frecuencia de mantenimiento más adecuada para tu caso." },
    { numero: "02", titulo: "Presupuesto", descripcion: "Te enviamos un presupuesto detallado adaptado al tamaño y características de tu instalación." },
    { numero: "03", titulo: "Visita", descripcion: "Nuestro técnico se desplaza a tu instalación en la fecha acordada, adaptándonos a tu horario." },
    { numero: "04", titulo: "Informe", descripcion: "Recibes un informe completo con el estado de tu instalación y recomendaciones para optimizar el rendimiento." },
  ];

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
            Solar → Mantenimiento
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
            Mantenimiento<br />Solar
          </h1>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "rgba(245,245,220,0.75)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 40,
          }}>
            Mantenemos tu instalación en óptimas condiciones para garantizar el máximo rendimiento a lo largo del tiempo. Revisiones periódicas, limpieza y asistencia técnica especializada.
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
            Solicitar mantenimiento
          </Link>
        </div>
      </section>

      {/* Beneficios */}
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
            Por Qué Mantener tu Instalación
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {beneficios.map((b, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 20,
                padding: "40px 32px",
                borderLeft: `4px solid ${accentAlt}`,
              }}>
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: cardTitleColor,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {b.titulo}
                </h3>
                <p style={{ fontSize: 15, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
                  {b.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
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
            Qué Incluye
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {incluye.map((item, i) => (
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
                  {item.titulo}
                </h3>
                <p style={{ fontSize: 14, fontStyle: "italic", color: "rgba(245,245,220,0.75)", lineHeight: 1.7, margin: 0 }}>
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
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
            Cómo Funciona
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {pasos.map((p, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 20,
                padding: "32px 24px",
                borderTop: `4px solid ${accent}`,
              }}>
                <div style={{
                  fontSize: 48,
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: accent,
                  lineHeight: 1,
                  marginBottom: 16,
                }}>
                  {p.numero}
                </div>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: cardTitleColor,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                  {p.titulo}
                </h3>
                <p style={{ fontSize: 14, fontStyle: "italic", color: textMuted, lineHeight: 1.7, margin: 0 }}>
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner titulo="¿Necesitas mantenimiento para tu instalación?" color={accentAlt} />
    </main>
  );
}