import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400", variable: "--font-shrikhand" });

export const metadata: Metadata = {
  title: "Sauce Renova",
  description: "Instalaciones de energía solar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={shrikhand.variable}>
      <body className="bg-cream">
        <Navbar />
        {children}
      </body>
    </html>
  );
}