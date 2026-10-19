"use client";

import { useLanguage } from "@/context/LanguageContext";
import LegalPage from "@/components/ui/LegalPage";
import { cookiesCopy } from "@/lib/i18n/cookies";

export default function CookiesPage() {
  const { lang } = useLanguage();
  return <LegalPage {...cookiesCopy[lang]} />;
}