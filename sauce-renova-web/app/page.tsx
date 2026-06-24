"use client";

import { useState, useEffect } from "react";

// ─── THEME TOKENS ────────────────────────────────────────────────────────────
const theme = {
  light: {
    bg: "#f5f5dc",
    bgCard: "#1e2d45",
    bgSection: "#6b8c3a",
    bgNav: "linear-gradient(90deg, #6b8c3a 0%, #1e2d45 100%)",
    bgReviews: "#2857c8",
    bgFooter: "linear-gradient(135deg, #6b8c3a 0%, #2857c8 100%)",
    text: "#1e2d45",
    textLight: "#f5f5dc",
    textMuted: "#4a5568",
    accent: "#2857c8",
    accentAlt: "#6b8c3a",
    btnPrimary: "#6b8c3a",
    btnSecondary: "#2857c8",
    cardBg: "#f5f5dc",
    benefitsBg: "#6b8c3a",
    benefitsCard: "rgba(255,255,255,0.15)",
    benefitsCardHover: "rgba(255,255,255,0.25)",
  },
  dark: {
    bg: "#1a2235",
    bgCard: "#f5f5dc",
    bgSection: "#2857c8",
    bgNav: "linear-gradient(90deg, #2857c8 0%, #1a2235 100%)",
    bgReviews: "#6b8c3a",
    bgFooter: "linear-gradient(135deg, #1a2235 0%, #2857c8 100%)",
    text: "#f5f5dc",
    textLight: "#f5f5dc",
    textMuted: "#a0aec0",
    accent: "#6b8c3a",
    accentAlt: "#2857c8",
    btnPrimary: "#2857c8",
    btnSecondary: "#6b8c3a",
    cardBg: "#243050",
    benefitsBg: "#2857c8",
    benefitsCard: "rgba(255,255,255,0.1)",
    benefitsCardHover: "rgba(255,255,255,0.2)",
  },
};

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const SunIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const HomeIcon = ({ size = 48, color = "#2857c8" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M8 32 L32 10 L56 32" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <path d="M14 27 L14 54 L50 54 L50 27" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="24" y="38" width="16" height="16" rx="2" stroke={color} strokeWidth="3" fill="none" />
    {/* Solar panels on roof */}
    <rect x="20" y="22" width="8" height="6" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5" />
    <rect x="30" y="18" width="8" height="6" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5" />
  </svg>
);

const BoltIcon = ({ size = 48, color = "#2857c8" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <polygon points="36,4 16,36 30,36 28,60 48,28 34,28" fill={color} opacity="0.25" stroke={color} strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

const LeafIcon = ({ size = 48, color = "#6b8c3a" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M12 52 C12 52 16 28 36 20 C52 14 56 8 56 8 C56 8 58 28 44 38 C34 46 12 52 12 52Z" fill={color} opacity="0.25" stroke={color} strokeWidth="3" />
    <path d="M12 52 C18 42 30 34 42 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const BatteryIcon = ({ size = 48, color = "#2857c8" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="6" y="18" width="46" height="28" rx="4" stroke={color} strokeWidth="3" />
    <rect x="52" y="24" width="6" height="16" rx="2" fill={color} opacity="0.5" />
    <rect x="12" y="24" width="10" height="16" rx="2" fill={color} opacity="0.4" />
    <rect x="26" y="24" width="10" height="16" rx="2" fill={color} opacity="0.4" />
    <rect x="40" y="24" width="6" height="16" rx="2" fill={color} opacity="0.2" />
  </svg>
);

const CarIcon = ({ size = 48, color = "#2857c8" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M8 36 L14 22 L50 22 L56 36 L56 48 L8 48 Z" stroke={color} strokeWidth="3" fill={color} opacity="0.1" strokeLinejoin="round" />
    <circle cx="18" cy="48" r="6" stroke={color} strokeWidth="3" fill="none" />
    <circle cx="46" cy="48" r="6" stroke={color} strokeWidth="3" fill="none" />
    <path d="M18 22 L22 12 L42 12 L46 22" stroke={color} strokeWidth="2.5" fill="none" />
    <path d="M30 30 L34 26 L34 36 L38 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Spain map SVG (simplified)
const SpainMap = ({ color = "#6b8c3a", strokeColor = "#f5f5dc" }) => (
  <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 320 }}>
    <path
      d="M60,80 L80,60 L120,55 L160,50 L200,55 L240,60 L260,80 L265,110 L255,140 L230,160 L200,170 L160,175 L130,170 L100,160 L70,140 L55,115 Z"
      fill={color}
      stroke={strokeColor}
      strokeWidth="2"
      opacity="0.85"
    />
    {/* Canary Islands */}
    <ellipse cx="60" cy="190" rx="18" ry="10" fill={color} stroke={strokeColor} strokeWidth="2" opacity="0.85" />
    {/* Baleares */}
    <ellipse cx="245" cy="100" rx="12" ry="7" fill={color} stroke={strokeColor} strokeWidth="2" opacity="0.85" />
    {/* Location pins */}
    <circle cx="180" cy="120" r="5" fill="#2857c8" />
    <path d="M180,115 L180,100" stroke="#2857c8" strokeWidth="2" />
    <circle cx="150" cy="140" r="5" fill="#2857c8" />
    <path d="M150,135 L150,120" stroke="#2857c8" strokeWidth="2" />
    <circle cx="160" cy="110" r="5" fill="#2857c8" />
    <path d="M160,105 L160,90" stroke="#2857c8" strokeWidth="2" />
  </svg>
);

// ─── SOLAR PANEL ILLUSTRATION ─────────────────────────────────────────────────
const SolarPanelIllustration = ({ isDark }) => {
  const c = isDark ? "#f5f5dc" : "#1e2d45";
  const accent = "#2857c8";
  const green = "#6b8c3a";
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Sun */}
      <circle cx="260" cy="45" r="28" fill="#f5b942" opacity="0.9" />
      <line x1="260" y1="5" x2="260" y2="15" stroke="#f5b942" strokeWidth="3" />
      <line x1="260" y1="75" x2="260" y2="85" stroke="#f5b942" strokeWidth="3" />
      <line x1="220" y1="45" x2="230" y2="45" stroke="#f5b942" strokeWidth="3" />
      <line x1="290" y1="45" x2="300" y2="45" stroke="#f5b942" strokeWidth="3" />
      <line x1="231" y1="16" x2="238" y2="23" stroke="#f5b942" strokeWidth="3" />
      <line x1="282" y1="67" x2="289" y2="74" stroke="#f5b942" strokeWidth="3" />
      {/* Ground */}
      <path d="M20 190 Q160 175 300 190 L300 240 L20 240 Z" fill={green} opacity="0.3" />
      {/* House */}
      <path d="M40 190 L40 130 L80 100 L120 130 L120 190 Z" fill={c} opacity="0.15" stroke={c} strokeWidth="2" />
      <path d="M40 130 L80 100 L120 130" stroke={c} strokeWidth="2" fill="none" />
      {/* Solar panels on roof */}
      <rect x="55" y="112" width="18" height="12" rx="2" fill={accent} opacity="0.7" stroke={accent} strokeWidth="1" />
      <line x1="64" y1="112" x2="64" y2="124" stroke="white" strokeWidth="0.8" />
      <line x1="55" y1="118" x2="73" y2="118" stroke="white" strokeWidth="0.8" />
      <rect x="75" y="116" width="18" height="12" rx="2" fill={accent} opacity="0.7" stroke={accent} strokeWidth="1" />
      <line x1="84" y1="116" x2="84" y2="128" stroke="white" strokeWidth="0.8" />
      <line x1="75" y1="122" x2="93" y2="122" stroke="white" strokeWidth="0.8" />
      {/* Panel array on ground */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${140 + i * 48}, 120)`}>
          <rect x="0" y="0" width="38" height="55" rx="3" fill={accent} opacity="0.8" stroke="white" strokeWidth="1" transform="skewY(-10)" />
          <line x1="12" y1="-5" x2="12" y2="50" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <line x1="25" y1="-5" x2="25" y2="50" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <line x1="0" y1="15" x2="38" y2="15" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <line x1="0" y1="30" x2="38" y2="30" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <rect x="15" y="55" width="8" height="20" fill={c} opacity="0.5" />
          <rect x="5" y="73" width="28" height="4" rx="2" fill={c} opacity="0.5" />
        </g>
      ))}
      {/* Energy flow lines */}
      <path d="M260 73 Q240 120 180 145 Q150 155 80 160" stroke="#f5b942" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" fill="none" />
    </svg>
  );
};

// EV Charger illustration
const EVChargerIllustration = ({ isDark }) => {
  const c = isDark ? "#f5f5dc" : "#1e2d45";
  const accent = "#2857c8";
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Charger station */}
      <rect x="110" y="50" width="80" height="130" rx="10" fill={accent} opacity="0.15" stroke={accent} strokeWidth="2" />
      <rect x="120" y="65" width="60" height="40" rx="6" fill={accent} opacity="0.4" stroke={accent} strokeWidth="1.5" />
      <text x="150" y="92" textAnchor="middle" fontSize="20" fill={c} fontWeight="bold">⚡</text>
      <rect x="125" y="115" width="50" height="8" rx="4" fill={accent} opacity="0.5" />
      <rect x="125" y="130" width="35" height="8" rx="4" fill={accent} opacity="0.3" />
      <circle cx="150" cy="160" r="8" fill={accent} opacity="0.6" />
      {/* Cable */}
      <path d="M150 178 Q150 200 220 205" stroke={accent} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Car */}
      <path d="M195 175 L205 155 L270 155 L280 175 L280 200 L195 200 Z" fill={c} opacity="0.12" stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <path d="M205 155 L215 138 L260 138 L270 155" fill={c} opacity="0.1" stroke={c} strokeWidth="2" />
      <circle cx="213" cy="200" r="10" stroke={c} strokeWidth="2.5" fill="none" />
      <circle cx="262" cy="200" r="10" stroke={c} strokeWidth="2.5" fill="none" />
      {/* Charge indicator */}
      <rect x="225" y="162" width="28" height="14" rx="3" stroke="#6b8c3a" strokeWidth="2" fill="none" />
      <rect x="253" y="166" width="4" height="6" rx="1" fill="#6b8c3a" opacity="0.6" />
      <rect x="227" y="164" width="18" height="10" rx="2" fill="#6b8c3a" opacity="0.7" />
      {/* Ground */}
      <path d="M20 215 L300 215" stroke={c} strokeWidth="2" opacity="0.2" />
      {/* Sun rays */}
      <circle cx="50" cy="50" r="20" fill="#f5b942" opacity="0.7" />
      <path d="M50 70 Q120 80 150 50" stroke="#f5b942" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.6" />
    </svg>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SolarLanding() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const t = isDark ? theme.dark : theme.light;

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".solar-dropdown")) setSolarOpen(false);
      if (!e.target.closest(".mobile-menu")) setMenuOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const styles = {
    page: {
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: t.bg,
      color: t.text,
      minHeight: "100vh",
      transition: "background 0.4s, color 0.4s",
      overflowX: "hidden",
    },
    // NAV
    nav: {
      background: t.bgNav,
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    logo: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: 20,
    },
    navLinks: {
      display: "flex",
      gap: 32,
      alignItems: "center",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: "white",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
      textDecoration: "none",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: 16,
    },
    themeBtn: {
      background: "rgba(255,255,255,0.2)",
      border: "none",
      borderRadius: "50%",
      width: 38,
      height: 38,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.2s",
    },
    dropdown: {
      position: "absolute",
      top: 64,
      background: "#6b8c3a",
      borderRadius: "0 0 12px 12px",
      padding: "8px 0",
      minWidth: 160,
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      zIndex: 200,
    },
    dropdownItem: {
      display: "block",
      padding: "10px 20px",
      color: "white",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
      textDecoration: "none",
    },
    // HERO
    hero: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "calc(100vh - 64px)",
      maxWidth: 1400,
      margin: "0 auto",
      padding: "0 24px",
      gap: 48,
      alignItems: "center",
    },
    heroLeft: {
      paddingTop: 60,
      paddingBottom: 60,
    },
    heroTitle: {
      fontSize: "clamp(56px, 7vw, 96px)",
      fontWeight: 900,
      fontStyle: "italic",
      color: t.accent,
      lineHeight: 0.95,
      margin: "0 0 28px",
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
    },
    heroBody: {
      fontSize: 18,
      fontStyle: "italic",
      color: t.textMuted,
      lineHeight: 1.7,
      maxWidth: 500,
      marginBottom: 40,
    },
    heroBtns: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: t.btnPrimary,
      color: "white",
      border: "none",
      borderRadius: 50,
      padding: "16px 32px",
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "transform 0.15s, box-shadow 0.15s",
    },
    btnSecondary: {
      background: t.btnSecondary,
      color: "white",
      border: "none",
      borderRadius: 50,
      padding: "16px 32px",
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "transform 0.15s, box-shadow 0.15s",
    },
    heroRight: {
      background: t.bgCard,
      borderRadius: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 400,
      overflow: "hidden",
      padding: 24,
    },
    // BENEFITS
    benefits: {
      background: t.benefitsBg,
      padding: "64px 24px",
      transition: "background 0.4s",
    },
    benefitsInner: {
      maxWidth: 1200,
      margin: "0 auto",
    },
    benefitsTitle: {
      fontSize: "clamp(32px, 4vw, 52px)",
      fontWeight: 900,
      fontStyle: "italic",
      color: "white",
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      marginBottom: 40,
    },
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
    },
    benefitCard: {
      background: t.benefitsCard,
      borderRadius: 20,
      padding: "32px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 16,
      transition: "background 0.2s, transform 0.2s",
      cursor: "pointer",
    },
    benefitText: {
      color: "white",
      fontSize: 14,
      fontStyle: "italic",
      lineHeight: 1.6,
      opacity: 0.9,
    },
    benefitBtn: {
      background: isDark ? "#f5f5dc" : "white",
      color: t.benefitsBg,
      border: "none",
      borderRadius: 50,
      padding: "10px 24px",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
      marginTop: "auto",
      transition: "transform 0.15s",
    },
    // PRODUCTS
    products: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "80px 24px",
    },
    productRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      marginTop: 40,
    },
    productCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      alignItems: "start",
    },
    productTitle: {
      fontSize: "clamp(28px, 3vw, 44px)",
      fontWeight: 900,
      fontStyle: "italic",
      color: t.accent,
      textTransform: "uppercase",
      marginBottom: 16,
      lineHeight: 1,
      gridColumn: "1 / -1",
    },
    productImg: {
      background: t.bgCard,
      borderRadius: 16,
      minHeight: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    productText: {
      fontSize: 15,
      fontStyle: "italic",
      lineHeight: 1.7,
      color: t.textMuted,
    },
    verMas: {
      background: t.btnSecondary,
      color: "white",
      border: "none",
      borderRadius: 50,
      padding: "12px 28px",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer",
      display: "inline-block",
      marginTop: 16,
      transition: "transform 0.15s",
    },
    // COVERAGE
    coverage: {
      background: t.bg,
      padding: "80px 24px",
    },
    coverageInner: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center",
    },
    coverageTitle: {
      fontSize: "clamp(36px, 4.5vw, 64px)",
      fontWeight: 900,
      fontStyle: "italic",
      color: t.accentAlt,
      textTransform: "uppercase",
      lineHeight: 0.95,
      marginBottom: 24,
    },
    coverageBody: {
      fontSize: 16,
      fontStyle: "italic",
      color: t.textMuted,
      lineHeight: 1.7,
      marginBottom: 32,
    },
    coverageBtn: {
      background: t.accentAlt,
      color: "white",
      border: "none",
      borderRadius: 50,
      padding: "14px 36px",
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "transform 0.15s",
    },
    // REVIEWS
    reviews: {
      background: t.bgReviews,
      padding: "64px 24px",
      transition: "background 0.4s",
    },
    reviewsInner: {
      maxWidth: 1200,
      margin: "0 auto",
    },
    reviewsTitle: {
      fontSize: "clamp(28px, 3.5vw, 48px)",
      fontWeight: 900,
      fontStyle: "italic",
      color: isDark ? "#1a2235" : "white",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: 40,
    },
    reviewsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 16,
    },
    reviewCard: {
      background: "rgba(255,255,255,0.15)",
      borderRadius: 16,
      padding: "20px 16px",
      border: "1px solid rgba(255,255,255,0.25)",
    },
    stars: {
      color: "#f5b942",
      fontSize: 16,
      marginBottom: 8,
    },
    reviewText: {
      color: "white",
      fontSize: 13,
      fontStyle: "italic",
      lineHeight: 1.6,
    },
    // FOOTER
    footer: {
      background: t.bgFooter,
      padding: "60px 24px 32px",
      transition: "background 0.4s",
    },
    footerGrid: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: 40,
      marginBottom: 48,
    },
    footerHeading: {
      color: "white",
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 16,
    },
    footerText: {
      color: "rgba(255,255,255,0.8)",
      fontSize: 14,
      fontStyle: "italic",
      lineHeight: 1.7,
    },
    footerContact: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "rgba(255,255,255,0.9)",
      fontSize: 14,
      fontStyle: "italic",
      marginTop: 8,
    },
    footerDivider: {
      borderColor: "rgba(255,255,255,0.2)",
      margin: "0 0 20px",
    },
    footerCopy: {
      maxWidth: 1200,
      margin: "0 auto",
      color: "rgba(255,255,255,0.6)",
      fontSize: 13,
      fontStyle: "italic",
      textAlign: "center",
    },
    socialRow: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "rgba(255,255,255,0.85)",
      fontSize: 14,
      fontStyle: "italic",
      cursor: "pointer",
    },
  };

  const benefits = [
    { icon: <HomeIcon size={52} color={isDark ? "#6b8c3a" : "#2857c8"} />, text: "Reduce tu factura eléctrica hasta un 80% con instalación fotovoltaica en tu hogar." },
    { icon: <BoltIcon size={52} color={isDark ? "#6b8c3a" : "#2857c8"} />, text: "Genera tu propia energía limpia y vende el excedente a la red eléctrica." },
    { icon: <LeafIcon size={52} color={isDark ? "#2857c8" : "#6b8c3a"} />, text: "Contribuye al medio ambiente reduciendo tu huella de carbono cada día." },
    { icon: <BatteryIcon size={52} color={isDark ? "#6b8c3a" : "#2857c8"} />, text: "Almacena energía en baterías de última generación para total autonomía." },
  ];

  const reviewsData = [
    { stars: 5, text: "Instalación impecable. El equipo fue muy profesional y resolvieron todas mis dudas antes y después." },
    { stars: 5, text: "Ahorro visible desde el primer mes. Totalmente recomendable para cualquier hogar o empresa." },
    { stars: 5, text: "Rápidos, eficientes y con un precio muy competitivo. La mejor decisión que hemos tomado." },
    { stars: 5, text: "Excelente servicio postventa. Ante cualquier consulta responden al instante. 10/10." },
    { stars: 4, text: "Muy contentos con el resultado. Las placas llevan 6 meses funcionando perfectamente." },
  ];

  const iconColor = isDark ? "#6b8c3a" : "#2857c8";

  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logo}>☀️</div>
        <ul style={{ ...styles.navLinks, display: window?.innerWidth < 768 ? "none" : "flex" }}>
          <li>
            <a style={styles.navLink} href="#contacto">Contáctanos</a>
          </li>
          <li>
            <a style={styles.navLink} href="#electricidad">Electricidad</a>
          </li>
          <li style={{ position: "relative" }} className="solar-dropdown">
            <span
              style={styles.navLink}
              onClick={(e) => { e.stopPropagation(); setSolarOpen(!solarOpen); }}
            >
              Solar ▾
            </span>
            {solarOpen && (
              <div style={styles.dropdown} className="solar-dropdown">
                <a style={styles.dropdownItem} href="#instalacion">Instalación</a>
                <a style={styles.dropdownItem} href="#mantenimiento">Mantenimiento</a>
                <a style={styles.dropdownItem} href="#baterias">Baterías</a>
              </div>
            )}
          </li>
          <li><a style={styles.navLink} href="#cargadores">Cargadores</a></li>
          <li><a style={styles.navLink} href="#tramites">Trámites</a></li>
        </ul>
        <div style={styles.navRight}>
          <button
            style={styles.themeBtn}
            onClick={() => setIsDark(!isDark)}
            aria-label="Cambiar tema"
          >
            {isDark ? <SunIcon size={18} color="white" /> : <MoonIcon size={18} color="white" />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: t.bg, padding: "0 0 40px" }} id="inicio">
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>
              Energía<br />Solar<br />para Ti
            </h1>
            <p style={styles.heroBody}>
              Instalamos, mantenemos y optimizamos sistemas fotovoltaicos para hogares y empresas en toda España. Ahorra desde el primer día.
            </p>
            <div style={styles.heroBtns}>
              <button
                style={styles.btnPrimary}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Preguntas Frecuentes
              </button>
              <button
                style={styles.btnSecondary}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Presupuesto
              </button>
            </div>
          </div>
          <div style={styles.heroRight}>
            <SolarPanelIllustration isDark={isDark} />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={styles.benefits} id="solar">
        <div style={styles.benefitsInner}>
          <h2 style={styles.benefitsTitle}>Beneficios de la Energía Solar</h2>
          <div style={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div
                key={i}
                style={styles.benefitCard}
                onMouseEnter={e => {
                  e.currentTarget.style.background = t.benefitsCardHover;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = t.benefitsCard;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {b.icon}
                <p style={styles.benefitText}>{b.text}</p>
                <button
                  style={styles.benefitBtn}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={styles.products} id="cargadores">
        <div style={styles.productRow}>
          {/* Cargadores VE */}
          <div>
            <h2 style={{ ...styles.productTitle }}>Cargadores VE</h2>
            <div style={styles.productCard}>
              <div style={styles.productImg}>
                <EVChargerIllustration isDark={isDark} />
              </div>
              <div>
                <p style={styles.productText}>
                  Instalamos puntos de recarga para vehículos eléctricos en garajes, comunidades de vecinos y empresas. Soluciones compatibles con todos los modelos del mercado.
                </p>
                <button
                  style={{ ...styles.verMas, background: t.btnSecondary }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  Ver Más
                </button>
              </div>
            </div>
          </div>
          {/* Placas y Baterías */}
          <div>
            <h2 style={{ ...styles.productTitle, color: t.accentAlt }}>Placas y Baterías</h2>
            <div style={styles.productCard}>
              <div style={{ ...styles.productImg, background: isDark ? "#f5f5dc" : "#1e2d45" }}>
                <div style={{ padding: 24, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
                  <BatteryIcon size={64} color={isDark ? "#1e2d45" : "#f5f5dc"} />
                  <HomeIcon size={56} color={isDark ? "#6b8c3a" : "#6b8c3a"} />
                </div>
              </div>
              <div>
                <p style={styles.productText}>
                  Suministramos e instalamos placas solares de alta eficiencia y baterías de almacenamiento para maximizar tu independencia energética.
                </p>
                <button
                  style={{ ...styles.verMas, background: t.accentAlt }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  Ver Más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE + REVIEWS */}
      <section style={styles.coverage} id="tramites">
        <div style={styles.coverageInner}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SpainMap
              color={isDark ? "#2857c8" : "#6b8c3a"}
              strokeColor={isDark ? "#1a2235" : "#f5f5dc"}
            />
          </div>
          <div>
            <h2 style={styles.coverageTitle}>Trabajamos en<br />toda España</h2>
            <p style={styles.coverageBody}>
              Con instalaciones en más de 15 provincias, gestionamos todos los trámites con las distribuidoras eléctricas y las administraciones locales. Tú solo disfruta del ahorro.
            </p>
            <button
              style={styles.coverageBtn}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Otros Proyectos
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={styles.reviews}>
        <div style={styles.reviewsInner}>
          <h2 style={styles.reviewsTitle}>¿Qué dicen de nosotros?</h2>
          <div style={styles.reviewsGrid}>
            {reviewsData.map((r, i) => (
              <div key={i} style={styles.reviewCard}>
                <div style={styles.stars}>{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                <p style={styles.reviewText}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer} id="contacto">
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerHeading}>Nosotros</div>
            <p style={styles.footerText}>
              Empresa especializada en energía solar fotovoltaica, cargadores para vehículos eléctricos y gestión de trámites con la administración.
            </p>
            <div style={styles.footerContact}>📞 <span>666 666 666</span></div>
            <div style={styles.footerContact}>💬 <span>666 666 666</span></div>
            <div style={styles.footerContact}>✉️ <span>info@solar.com</span></div>
          </div>
          <div>
            <div style={styles.footerHeading}>Empresa</div>
            <p style={styles.footerText}>
              Quiénes somos<br />Nuestro equipo<br />Proyectos realizados<br />Trabaja con nosotros
            </p>
          </div>
          <div>
            <div style={styles.footerHeading}>Legal</div>
            <p style={styles.footerText}>
              Aviso legal<br />Política de privacidad<br />Política de cookies<br />Términos de servicio
            </p>
          </div>
          <div>
            <div style={styles.footerHeading}>Redes</div>
            <div style={styles.socialRow}>
              {["📷 Instagram", "👤 Facebook", "🎵 TikTok", "𝕏 Twitter / X", "▶️ YouTube"].map((s, i) => (
                <div key={i} style={styles.socialLink}>{s}</div>
              ))}
            </div>
          </div>
        </div>
        <hr style={styles.footerDivider} />
        <p style={styles.footerCopy}>© 2025 Solar Energy. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}