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

  const contactLinks = [
    { icon: faPhone, text: "613 115 981", href: "tel:+34613115981" },
    { icon: faWhatsapp, text: "613 115 981", href: "https://wa.me/34613115981" },
    { icon: faEnvelope, text: "comercial@saucerenova.com", href: "mailto:comercial@saucerenova.com" },
  ];

  const socialLinks = [
    { icon: faInstagram, label: "Instagram" },
    { icon: faFacebook, label: "Facebook" },
    { icon: faTiktok, label: "TikTok" },
    { icon: faXTwitter, label: "Twitter / X" },
    { icon: faYoutube, label: "YouTube" },
  ];

  const empresaItems = ["Quiénes somos", "Nuestro equipo", "Proyectos realizados", "Trabaja con nosotros"];
  const legalItems = ["Aviso legal", "Política de privacidad", "Política de cookies", "Términos de servicio"];

  const headingStyle = {
    color: "white",
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: 16,
  };

  const subHeadingStyle = {
    color: "rgba(255,255,255,0.7)",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginTop: 20,
    marginBottom: 10,
  };

  const listTextStyle = { color: "rgba(255,255,255,0.8)", fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 };

  const contactLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 10,
    textDecoration: "none",
  };

  const columns = [
    {
      heading: "Nosotros",
      content: (
        <>
          <p style={listTextStyle}>
            Empresa especializada en energía solar fotovoltaica, cargadores para vehículos eléctricos y gestión de trámites con la administración.
          </p>
          {contactLinks.map((c, i) => (
            <a key={i} href={c.href} style={contactLinkStyle}>
              <FontAwesomeIcon icon={c.icon} style={{ width: 16, height: 16 }} />
              <span>{c.text}</span>
            </a>
          ))}
        </>
      ),
    },
    {
      heading: "Empresa",
      content: <p style={listTextStyle}>{empresaItems.join(" · ")}</p>,
    },
    {
      heading: "Legal",
      content: <p style={listTextStyle}>{legalItems.join(" · ")}</p>,
    },
    {
      heading: "Redes",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {socialLinks.map((s, i) => (
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
      {/* Desktop: 4 columnas */}
      <div
        className="hidden md:grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
        }}
      >
        {columns.map((col, i) => (
          <div key={i}>
            <div style={headingStyle}>{col.heading}</div>
            {col.content}
          </div>
        ))}
      </div>

      {/* Móvil: 2 columnas fusionadas */}
      <div
        className="grid md:hidden"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <div>
          <div style={headingStyle}>Contacto</div>
          {contactLinks.map((c, i) => (
            <a key={i} href={c.href} style={contactLinkStyle}>
              <FontAwesomeIcon icon={c.icon} style={{ width: 16, height: 16 }} />
              <span>{c.text}</span>
            </a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            {socialLinks.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.85)", fontSize: 14, fontStyle: "italic" }}>
                <FontAwesomeIcon icon={s.icon} style={{ width: 16, height: 16 }} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={headingStyle}>Información</div>
          <div style={{ ...subHeadingStyle, marginTop: 0 }}>Empresa</div>
          <p style={listTextStyle}>{empresaItems.join(" · ")}</p>
          <div style={subHeadingStyle}>Legal</div>
          <p style={listTextStyle}>{legalItems.join(" · ")}</p>
        </div>
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