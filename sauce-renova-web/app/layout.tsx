import type { Metadata } from "next";
import { cookies } from "next/headers";
import BackToTop from "@/components/ui/BackToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Shrikhand, Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider, type LangCode } from "@/context/LanguageContext";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400", variable: "--font-shrikhand" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Sauce Renova",
  description: "Instalaciones de energía solar",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const stored = (await cookies()).get("lang")?.value;
  const initialLang: LangCode = stored === "en" ? "en" : "es";

  return (
    <html lang={initialLang} className={`${shrikhand.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.getItem('theme') === 'dark') {
                document.documentElement.dataset.theme = 'dark';
              }
            } catch {}
          `
        }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider initialLang={initialLang}>
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}