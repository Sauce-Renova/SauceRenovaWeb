export default function LeafIcon({ size = 48, color = "#78a83f" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M12 52 C12 52 16 28 36 20 C52 14 56 8 56 8 C56 8 58 28 44 38 C34 46 12 52 12 52Z" fill={color} opacity="0.25" stroke={color} strokeWidth="3" />
      <path d="M12 52 C18 42 30 34 42 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}