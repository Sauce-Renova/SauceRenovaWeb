import Link from "next/link";

interface Props {
  titulo: string;
  href?: string;
  textoBtn?: string;
  color?: string;
}

export default function CTABanner({
  titulo,
  href = "/contacto",
  textoBtn = "Contáctanos",
  color = "#6b8c3a",
}: Props) {
  return (
    <section style={{ background: color, padding: "64px 24px" }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
      }}>
        <h2 style={{
          fontSize: "clamp(24px, 3vw, 40px)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "white",
          textTransform: "uppercase",
          margin: 0,
        }}>
          {titulo}
        </h2>
        <Link href={href} style={{
          background: "white",
          color: color,
          borderRadius: 50,
          padding: "16px 40px",
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          display: "inline-block",
        }}>
          {textoBtn}
        </Link>
      </div>
    </section>
  );
}