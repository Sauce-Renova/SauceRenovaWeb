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
  const bgOuter = isDark ? "#1a2235" : "#fafad6";
  const bgBox = isDark ? "#78a83f" : "#0354bf";
  const titleColor = bgBox;
  const cardBg = isDark ? "rgba(26,34,53,0.25)" : "rgba(255,255,255,0.18)";

  return (
    <section style={{ background: bgOuter, padding: "3vw 5px" }}>
      <h2 style={{
        fontSize: "clamp(28px, 3.5vw, 48px)",
        fontWeight: 900,
        color: titleColor,
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: 24,
        fontFamily: "var(--font-shrikhand), sans-serif",
      }}>
        ¿Qué dicen de nosotros?
      </h2>
      <div style={{
        background: bgBox,
        borderRadius: "2rem",
        padding: "2.5vw 2vw",
        maxWidth: "90rem",
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
        }}>
          {reviewsData.map((r, i) => (
            <div key={i} style={{
              background: cardBg,
              borderRadius: 16,
              padding: "20px 16px",
              border: "1px solid rgba(255,255,255,0.25)",
            }}>
              <div style={{ color: "#f5b942", fontSize: 16, marginBottom: 8 }}>
                {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
              </div>
              <p style={{ color: "white", fontSize: 13, lineHeight: 1.6 }}>
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
