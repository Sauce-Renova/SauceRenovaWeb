"use client";

import { useLanguage } from "@/context/LanguageContext";
import LegalPage from "@/components/ui/LegalPage";
import { privacidadCopy } from "@/lib/i18n/privacidad";

export default function PrivacidadPage() {
  const { lang } = useLanguage();
  return <LegalPage {...privacidadCopy[lang]} />;
}