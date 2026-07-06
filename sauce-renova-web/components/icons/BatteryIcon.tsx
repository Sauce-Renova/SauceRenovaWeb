export default function BatteryIcon({ size = 48, color = "#2857c8" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect x="6" y="18" width="46" height="28" rx="4" stroke={color} strokeWidth="3" />
      <rect x="52" y="24" width="6" height="16" rx="2" fill={color} opacity="0.5" />
      <rect x="12" y="24" width="10" height="16" rx="2" fill={color} opacity="0.4" />
      <rect x="26" y="24" width="10" height="16" rx="2" fill={color} opacity="0.4" />
      <rect x="40" y="24" width="6" height="16" rx="2" fill={color} opacity="0.2" />
    </svg>
  );
}