interface Props {
  isDark: boolean;
}

export default function SolarPanelIllustration({ isDark }: Props) {
  const c = isDark ? "#fafad6" : "#1e2d45";
  const accent = "#0354bf";
  const green = "#78a83f";

  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <circle cx="260" cy="45" r="28" fill="#f5b942" opacity="0.9" />
      <line x1="260" y1="5" x2="260" y2="15" stroke="#f5b942" strokeWidth="3" />
      <line x1="260" y1="75" x2="260" y2="85" stroke="#f5b942" strokeWidth="3" />
      <line x1="220" y1="45" x2="230" y2="45" stroke="#f5b942" strokeWidth="3" />
      <line x1="290" y1="45" x2="300" y2="45" stroke="#f5b942" strokeWidth="3" />
      <line x1="231" y1="16" x2="238" y2="23" stroke="#f5b942" strokeWidth="3" />
      <line x1="282" y1="67" x2="289" y2="74" stroke="#f5b942" strokeWidth="3" />
      <path d="M20 190 Q160 175 300 190 L300 240 L20 240 Z" fill={green} opacity="0.3" />
      <path d="M40 190 L40 130 L80 100 L120 130 L120 190 Z" fill={c} opacity="0.15" stroke={c} strokeWidth="2" />
      <path d="M40 130 L80 100 L120 130" stroke={c} strokeWidth="2" fill="none" />
      <rect x="55" y="112" width="18" height="12" rx="2" fill={accent} opacity="0.7" stroke={accent} strokeWidth="1" />
      <line x1="64" y1="112" x2="64" y2="124" stroke="white" strokeWidth="0.8" />
      <line x1="55" y1="118" x2="73" y2="118" stroke="white" strokeWidth="0.8" />
      <rect x="75" y="116" width="18" height="12" rx="2" fill={accent} opacity="0.7" stroke={accent} strokeWidth="1" />
      <line x1="84" y1="116" x2="84" y2="128" stroke="white" strokeWidth="0.8" />
      <line x1="75" y1="122" x2="93" y2="122" stroke="white" strokeWidth="0.8" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${140 + i * 48}, 120)`}>
          <rect x="0" y="0" width="38" height="55" rx="3" fill={accent} opacity="0.8" stroke="white" strokeWidth="1" transform="skewY(-10)" />
          <line x1="12" y1="-5" x2="12" y2="50" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <line x1="25" y1="-5" x2="25" y2="50" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <line x1="0" y1="15" x2="38" y2="15" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
          <line x1="0" y1="30" x2="38" y2="30" stroke="white" strokeWidth="0.8" transform="skewY(-10)" />
        </g>
      ))}
    </svg>
  );
}