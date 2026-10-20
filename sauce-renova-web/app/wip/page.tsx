"use client";

import { useLanguage } from "@/context/LanguageContext";
import LegalPage from "@/components/ui/LegalPage";
import { wipCopy } from "@/lib/i18n/wip";

export default function WipPage() {
  const { lang } = useLanguage();
  return <LegalPage {...wipCopy[lang]} />;
}