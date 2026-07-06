export default function HomeIcon({ size = 48, color = "#2857c8" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M8 32 L32 10 L56 32" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M14 27 L14 54 L50 54 L50 27" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="38" width="16" height="16" rx="2" stroke={color} strokeWidth="3" fill="none" />
      <rect x="20" y="22" width="8" height="6" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5" />
      <rect x="30" y="18" width="8" height="6" rx="1" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}