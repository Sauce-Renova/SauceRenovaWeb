interface Props {
  isDark: boolean;
}

const reviewsData = [
  { stars: 5, text: "Instalación impecable. El equipo fue muy profesional y resolvieron todas mis dudas antes y después." },
  { stars: 5, text: "Ahorro visible desde el primer mes. Totalmente recomendable para cualquier hogar o empresa." },
  { stars: 5, text: "Rápidos, eficientes y con un precio muy competitivo. La mejor decisión que hemos tomado." },
  { stars: 5, text: "Excelente servicio postventa. Ante cualquier consulta responden al instante. 10/10." },
  { stars: 4, text: "Muy contentos con el resultado. Las placas llevan 6 meses funcionando perfectamente." },
];

export default function Reviews({ isDark }: Props) {
  const bgReviews = isDark ? "#78a83f" : "#0354bf";
  const titleColor = isDark ? "#1a2235" : "white";

  return (
    <section style={{ background: bgReviews, padding: "64px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 900,
          fontStyle: "italic",
          color: titleColor,
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 40,
        }}>
          ¿Qué dicen de nosotros?
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
        }}>
          {reviewsData.map((r, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 16,
              padding: "20px 16px",
              border: "1px solid rgba(255,255,255,0.25)",
            }}>
              <div style={{ color: "#f5b942", fontSize: 16, marginBottom: 8 }}>
                {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
              </div>
              <p style={{ color: "white", fontSize: 13, fontStyle: "italic", lineHeight: 1.6 }}>
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}