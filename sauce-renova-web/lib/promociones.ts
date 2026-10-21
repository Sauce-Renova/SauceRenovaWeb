import type { StaticImageData } from "next/image";
import mantenimiento from "@/components/illustrations/planesMantenimiento.webp";

export type Promocion = {
  id: string;
  imagen: StaticImageData;
  alt: { es: string; en: string };
  desde?: string;
  hasta?: string;
};

export const promociones: Promocion[] = [
  {
    id: "mantenimiento-2026-10",
    imagen: mantenimiento,
    alt: {
      es: "Planes de mantenimiento solar de Sauce Renova: Esencial, Rendimiento y Premium",
      en: "Sauce Renova solar maintenance plans: Essential, Performance and Premium",
    },
  },
];

const hoyMadrid = () =>
  new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });

export const promocionDelDia = (): Promocion | null => {
  const hoy = hoyMadrid();
  const activas = promociones.filter(
    (p) => (!p.desde || hoy >= p.desde) && (!p.hasta || hoy <= p.hasta)
  );
  if (activas.length === 0) return null;
  const dia = Math.floor(Date.parse(hoy) / 86400000);
  return activas[dia % activas.length];
};