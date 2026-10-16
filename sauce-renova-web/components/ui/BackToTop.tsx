"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { backToTopCopy } from "@/lib/i18n/backToTop";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

export default function BackToTop() {
  const { lang } = useLanguage();
  const copy = backToTopCopy[lang];
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subir = () => {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducir ? "auto" : "smooth" });
  };

  const transform = !visible
    ? "translateY(16px)"
    : hover
      ? "translateY(-4px) scale(1.08)"
      : "translateY(0)";

  return (
    <button
      type="button"
      aria-label={copy.aria}
      onClick={subir}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={visible ? 0 : -1}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: "none",
        background: "linear-gradient(135deg, var(--nav-from), var(--nav-to))",
        boxShadow: "var(--shadow-card)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 50,
        opacity: visible ? 1 : 0,
        transform,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.25s ease",
      }}
    >
      <ArrowUpIcon size={26} color="var(--color-white)" />
    </button>
  );
}