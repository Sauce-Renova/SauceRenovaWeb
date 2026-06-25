interface Props {
  isDark: boolean;
}

export default function EVChargerIllustration({ isDark }: Props) {
  const c = isDark ? "#f5f5dc" : "#1e2d45";
  const accent = "#2857c8";

  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect x="110" y="50" width="80" height="130" rx="10" fill={accent} opacity="0.15" stroke={accent} strokeWidth="2" />
      <rect x="120" y="65" width="60" height="40" rx="6" fill={accent} opacity="0.4" stroke={accent} strokeWidth="1.5" />
      <text x="150" y="92" textAnchor="middle" fontSize="20" fill={c} fontWeight="bold">⚡</text>
      <rect x="125" y="115" width="50" height="8" rx="4" fill={accent} opacity="0.5" />
      <rect x="125" y="130" width="35" height="8" rx="4" fill={accent} opacity="0.3" />
      <circle cx="150" cy="160" r="8" fill={accent} opacity="0.6" />
      <path d="M150 178 Q150 200 220 205" stroke={accent} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M195 175 L205 155 L270 155 L280 175 L280 200 L195 200 Z" fill={c} opacity="0.12" stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <path d="M205 155 L215 138 L260 138 L270 155" fill={c} opacity="0.1" stroke={c} strokeWidth="2" />
      <circle cx="213" cy="200" r="10" stroke={c} strokeWidth="2.5" fill="none" />
      <circle cx="262" cy="200" r="10" stroke={c} strokeWidth="2.5" fill="none" />
      <rect x="225" y="162" width="28" height="14" rx="3" stroke="#6b8c3a" strokeWidth="2" fill="none" />
      <rect x="253" y="166" width="4" height="6" rx="1" fill="#6b8c3a" opacity="0.6" />
      <rect x="227" y="164" width="18" height="10" rx="2" fill="#6b8c3a" opacity="0.7" />
      <path d="M20 215 L300 215" stroke={c} strokeWidth="2" opacity="0.2" />
      <circle cx="50" cy="50" r="20" fill="#f5b942" opacity="0.7" />
      <path d="M50 70 Q120 80 150 50" stroke="#f5b942" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.6" />
    </svg>
  );
}