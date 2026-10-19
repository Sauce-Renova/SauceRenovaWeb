"use client";

import { useLanguage } from "@/context/LanguageContext";
import LegalPage from "@/components/ui/LegalPage";
import { avisoLegalCopy } from "@/lib/i18n/avisoLegal";

export default function AvisoLegalPage() {
  const { lang } = useLanguage();
  return <LegalPage {...avisoLegalCopy[lang]} />;
}