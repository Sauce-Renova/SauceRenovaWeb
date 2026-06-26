export default function BoltIcon({ size = 48, color = "#0354bf" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <polygon points="36,4 16,36 30,36 28,60 48,28 34,28" fill={color} opacity="0.25" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}