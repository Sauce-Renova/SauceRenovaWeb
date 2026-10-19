"use client";

import { useLanguage } from "@/context/LanguageContext";
import LegalPage from "@/components/ui/LegalPage";
import { terminosCopy } from "@/lib/i18n/terminos";

export default function TerminosPage() {
  const { lang } = useLanguage();
  return <LegalPage {...terminosCopy[lang]} />;
}