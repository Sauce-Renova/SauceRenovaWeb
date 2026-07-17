"use client";

import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faFacebook, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { isDark } = useTheme();

  const footerBg = isDark
    ? "linear-gradient(135deg, #0d1520 0%, #2857c8 100%)"
    : "linear-gradient(135deg, #6b8c3a 0%, #2857c8 100%)";

  const columns = [
    {
      heading: "Nosotros",
      content: (
        <>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontStyle: "italic", lineHeight: 1.7 }}>
            Empresa especializada en energía solar fotovoltaica, cargadores para vehículos eléctricos y gestión de trámites con la administración.
          </p>
          {[
            { icon: faPhone, text: "123 456 789" },
            { icon: faWhatsapp, text: "987 654 321" },
            { icon: faEnvelope, text: "info@saucerenova.com" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.9)", fontSize: 14, fontStyle: "italic", marginTop: 10 }}>
              <FontAwesomeIcon icon={c.icon} style={{ width: 16, height: 16 }} />
              <span>{c.text}</span>
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: faInstagram, label: "Instagram" },
            { icon: faFacebook, label: "Facebook" },
            { icon: faTiktok, label: "TikTok" },
            { icon: faXTwitter, label: "Twitter / X" },
            { icon: faYoutube, label: "YouTube" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.85)", fontSize: 14, fontStyle: "italic", cursor: "pointer" }}>
              <FontAwesomeIcon icon={s.icon} style={{ width: 16, height: 16 }} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <footer style={{ background: footerBg, padding: "60px 24px 32px", transition: "background 0.4s" }} id="contacto">
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
        © 2026 Sauce Renova. Todos los derechos reservados.
      </p>
    </footer>
  );
}