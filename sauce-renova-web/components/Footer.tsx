export default function Footer() {
  const bgFooter = "linear-gradient(135deg, #78a83f 0%, #0354bf 100%)";

  const columns = [
    {
      heading: "Nosotros",
      content: (
        <>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontStyle: "italic", lineHeight: 1.7 }}>
            Empresa especializada en energía solar fotovoltaica, cargadores para vehículos eléctricos y gestión de trámites con la administración.
          </p>
          {[
            { icon: "📞", text: "666 666 666" },
            { icon: "💬", text: "666 666 666" },
            { icon: "✉️", text: "info@solar.com" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.9)", fontSize: 14, fontStyle: "italic", marginTop: 8 }}>
              {c.icon} <span>{c.text}</span>
            </div>
          ))}
        </>
      ),
    },
    {
      heading: "Empresa",
      content: (
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontStyle: "italic", lineHeight: 1.7 }}>
          Quiénes somos<br />Nuestro equipo<br />Proyectos realizados<br />Trabaja con nosotros
        </p>
      ),
    },
    {
      heading: "Legal",
      content: (
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontStyle: "italic", lineHeight: 1.7 }}>
          Aviso legal<br />Política de privacidad<br />Política de cookies<br />Términos de servicio
        </p>
      ),
    },
    {
      heading: "Redes",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {["📷 Instagram", "👤 Facebook", "🎵 TikTok", "𝕏 Twitter / X", "▶️ YouTube"].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.85)", fontSize: 14, fontStyle: "italic", cursor: "pointer" }}>
              {s}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <footer style={{ background: bgFooter, padding: "60px 24px 32px" }} id="contacto">
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
        gap: 40,
        marginBottom: 48,
      }}>
        {columns.map((col, i) => (
          <div key={i}>
            <div style={{
              color: "white",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              {col.heading}
            </div>
            {col.content}
          </div>
        ))}
      </div>
      <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "0 0 20px" }} />
      <p style={{
        maxWidth: 1200,
        margin: "0 auto",
        color: "rgba(255,255,255,0.6)",
        fontSize: 13,
        fontStyle: "italic",
        textAlign: "center",
      }}>
        © 2025 Solar Energy. Todos los derechos reservados.
      </p>
    </footer>
  );
}