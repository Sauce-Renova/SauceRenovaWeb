"use client";
import { useRef } from "react";

interface Props {
  isDark: boolean;
}

const reviewsData = [
  { stars: 5, text: "Instalación impecable. El equipo fue muy profesional y resolvieron todas mis dudas antes y después." },
  { stars: 5, text: "Ahorro visible desde el primer mes. Totalmente recomendable para cualquier hogar o empresa." },
  { stars: 5, text: "Rápidos, eficientes y con un precio muy competitivo. La mejor decisión que hemos tomado." },
  { stars: 5, text: "Excelente servicio postventa. Ante cualquier consulta responden al instante. 10/10." },
  { stars: 4, text: "Muy contentos con el resultado. Las placas llevan 6 meses funcionando perfectamente." },
  { stars: 5, text: "El proceso fue sencillo y el equipo resolvió todos nuestros trámites. Sin complicaciones." },
  { stars: 5, text: "Desde el primer día notamos la diferencia en la factura. Muy recomendables." },
  { stars: 4, text: "Profesionales y puntuales. La instalación quedó perfecta y el trato fue excelente." },
];

export default function Reviews({ isDark }: Props) {
  const bgOuter = isDark ? "#203147" : "#fafad6";
  const bgBox = isDark ? "#78a83f" : "#0354bf";
  const titleColor = bgBox;
  const cardBg = isDark ? "rgba(26,34,53,0.25)" : "rgba(255,255,255,0.18)";
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  const arrowStyle = {
    background: "rgba(255,255,255,0.25)",
    border: "none",
    borderRadius: "50%",
    width: 44,
    height: 44,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.2s",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  } as const;

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
        margin: "0 40px",
      }}>
        {/* Flechas + scroll */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            style={arrowStyle}
            onClick={() => scroll("left")}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
          >
            ‹
          </button>

          <div ref={scrollRef} style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            paddingBottom: "0.5rem",
            scrollbarWidth: "none",
            flex: 1,
          }}>
            {reviewsData.map((r, i) => (
              <div key={i} style={{
                background: cardBg,
                borderRadius: 16,
                padding: "32px 24px",
                border: "1px solid rgba(255,255,255,0.25)",
                minWidth: "280px",
                maxWidth: "280px",
                minHeight: "240px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                flexShrink: 0,
              }}>
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
            style={arrowStyle}
            onClick={() => scroll("right")}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
