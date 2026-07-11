"use client";

import { useTheme } from "@/context/ThemeContext";
import Hero from "@/components/sections/home/Hero";
import Benefits from "@/components/sections/home/Benefits";
import Products from "@/components/sections/home/Products";
import Coverage from "@/components/sections/home/Coverage";
import Reviews from "@/components/sections/home/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main>
      <Hero isDark={isDark} />
      <Benefits isDark={isDark} />
      <Products isDark={isDark} />
      <Coverage isDark={isDark} />
      <Reviews isDark={isDark} />
      <Footer />
    </main>
  );
}