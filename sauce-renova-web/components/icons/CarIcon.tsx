export default function CarIcon({ size = 48, color = "#2857c8" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M8 36 L14 22 L50 22 L56 36 L56 48 L8 48 Z" stroke={color} strokeWidth="3" fill={color} opacity="0.1" strokeLinejoin="round" />
      <circle cx="18" cy="48" r="6" stroke={color} strokeWidth="3" fill="none" />
      <circle cx="46" cy="48" r="6" stroke={color} strokeWidth="3" fill="none" />
      <path d="M18 22 L22 12 L42 12 L46 22" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M30 30 L34 26 L34 36 L38 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}