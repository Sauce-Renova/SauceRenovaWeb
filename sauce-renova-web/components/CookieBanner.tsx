"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { cookieBannerCopy } from "@/lib/i18n/cookieBanner";

const STORAGE_KEY = "cookieNoticeSeen";

export default function CookieBanner() {
  const { lang } = useLanguage();
  const copy = cookieBannerCopy[lang];
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (seen) return;
    setVisible(true);
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setEntered(false);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={copy.title}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        background: "var(--hero-bg)",
        borderTop: "1px solid var(--on-dark-15)",
        boxShadow: "var(--shadow-card)",
        padding: "1.5rem 5vw",
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
        transformOrigin: "bottom center",
        transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div
        className="flex flex-col sm:flex-row sm:items-center"
        style={{ maxWidth: "90rem", margin: "0 auto", gap: "1.25rem" }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-shrikhand), sans-serif",
              fontSize: "clamp(1.25rem, 1.8vw, 1.75rem)",
              color: "var(--color-cream)",
              margin: "0 0 0.5rem",
            }}
          >
            {copy.title}
          </p>
          <p
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 1rem)",
              lineHeight: 1.6,
              color: "var(--on-dark-90)",
              margin: 0,
            }}
          >
            {copy.text}{" "}
            <Link
              href="/legal/cookies"
              style={{ color: "var(--color-green-pale)", textDecoration: "underline", fontWeight: 600 }}
            >
              {copy.more}
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={accept}
          style={{
            background: "var(--color-green)",
            color: "var(--color-white)",
            border: "none",
            borderRadius: "9999px",
            padding: "0.85em 2.2em",
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "transform 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}