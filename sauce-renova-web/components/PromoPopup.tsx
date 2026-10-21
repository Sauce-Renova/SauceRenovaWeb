"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { promoCopy } from "@/lib/i18n/promo";
import { promocionDelDia, type Promocion } from "@/lib/promociones";

const SESSION_KEY = "promoClosed";

export default function PromoPopup() {
  const { lang } = useLanguage();
  const copy = promoCopy[lang];
  const [promo, setPromo] = useState<Promocion | null>(null);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {}
    const elegida = promocionDelDia();
    if (!elegida) return;
    let raf = 0;
    const timer = setTimeout(() => {
      setPromo(elegida);
      setVisible(true);
      raf = requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    }, 600);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  const cerrar = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
    setEntered(false);
    setTimeout(() => setVisible(false), 400);
  };

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible || !promo) return null;

  const ratio = promo.imagen.width / promo.imagen.height;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={copy.aria}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        overflow: "hidden",
        background: "rgba(13, 21, 32, 0.7)",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `min(100%, calc((100dvh - 2rem) * ${ratio}))`,
          transform: entered ? "translateY(0) scale(1)" : "translateY(24px) scale(0.94)",
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Image
          src={promo.imagen}
          alt={promo.alt[lang]}
          sizes="100vw"
          priority
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: "1.5rem",
            boxShadow: "var(--shadow-card)",
          }}
        />
        <button
          type="button"
          aria-label={copy.cerrar}
          onClick={cerrar}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, var(--nav-from), var(--nav-to))",
            boxShadow: "var(--shadow-card)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transform: hover ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.25s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="var(--color-white)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}