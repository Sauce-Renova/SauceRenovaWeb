"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import CTABanner from "@/components/ui/CTABanner";
import EVChargerIllustration from "@/components/illustrations/EVChargerIllustration";

export default function CargadoresPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "#203147" : "#f5f5dc";
  const heroBg = isDark ? "#0d1520" : "#1e2d45";
  const cardBg = isDark ? "#243050" : "white";
  const accent = "#2857c8";
  const accentAlt = "#6b8c3a";
  const textMuted = isDark ? "#a0aec0" : "#4a5568";
  const titleColor = isDark ? "#9BC97A" : accent;
  const cardTitleColor = isDark ? "#9BC97A" : accent;

  const tipos = [
    {
      titulo: "Vivienda Unifamiliar",
      descripcion: "Carga tu vehículo eléctrico desde casa durante la noche y despiértate siempre con la batería llena. Aprovecha tarifas nocturnas más económicas.",
    },
    {
      titulo: "Garaje Comunitario",
      descripcion: "Instalamos puntos de carga en garajes comunitarios gestionando todos los permisos y normativas necesarias con la comunidad de propietarios.",
    },
    {
      titulo: "Empresa",
      descripcion: "Mejora la imagen de tu empresa y atrae talento ofreciendo puntos de carga a empleados y clientes. Aprovecha los incentivos fiscales disponibles.",
    },
    {
      titulo: "Hotel",
      descripcion: "Ofrece a tus huéspedes un servicio diferencial con puntos de carga para vehículos eléctricos. Un valor añadido que marca la diferencia.",
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
            <h1 style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#f5f5dc",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 24,
            }}>
              Cargadores<br />Eléctricos
            </h1>
            <p style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(245,245,220,0.75)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
            }}>
              Instalamos y legalizamos puntos de recarga para vehículos eléctricos en hogares, garajes comunitarios, empresas y hoteles. Compatibles con todos los modelos del mercado.
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
            background: isDark ? "#203147" : "#f5f5dc",
            borderRadius: 24,
            padding: 24,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <EVChargerIllustration isDark={isDark} />
          </div>
        </div>
      </section>

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
            ¿Dónde Instalamos?
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}>
            {tipos.map((t, i) => (
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
                  {t.titulo}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: isDark ? "#0d1520" : accent, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "white",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Plan MOVES
          </h2>
          <p style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            maxWidth: 700,
            marginBottom: 40,
          }}>
            Gracias al plan MOVES puedes disfrutar de subvenciones y facilidades para la instalación de tu cargador desde solo 395€. Consulta con nosotros si puedes beneficiarte.
          </p>
          <Link href="/contacto" style={{
            background: "white",
            color: accent,
            borderRadius: 50,
            padding: "16px 40px",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
          }}>
            Contáctanos
          </Link>
        </div>
      </section>

      <CTABanner titulo="¿Quieres instalar un cargador?" color={accentAlt} />
    </main>
  );
}