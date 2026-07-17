import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Shrikhand, Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400", variable: "--font-shrikhand" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Sauce Renova",
  description: "Instalaciones de energía solar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${shrikhand.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
    <script dangerouslySetInnerHTML={{
      __html: `
        try {
          if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
          }
        } catch {}
      `
    }} />
  </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}