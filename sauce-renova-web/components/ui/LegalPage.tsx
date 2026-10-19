"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { legalCommon } from "@/lib/i18n/legal";

interface Section {
  titulo: string;
  parrafos: readonly string[];
}

interface Props {
  title: string;
  intro?: string;
  updated: string;
  sections: readonly Section[];
}

export default function LegalPage({ title, intro, updated, sections }: Props) {
  const { lang } = useLanguage();
  const common = legalCommon[lang];

  return (
    <main style={{ background: "var(--bg-service)", minHeight: "100vh" }}>
      <section style={{ background: "var(--hero-bg)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-green-dark)",
            marginBottom: 16,
          }}>
            {common.breadcrumb}
          </p>
          <h1 style={{
            fontSize: "clamp(2rem, 7vw, 64px)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "var(--color-cream-text)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: 24,
          }}>
            {title}
          </h1>
          <p style={{ fontSize: 14, fontStyle: "italic", color: "var(--on-cream-75)", margin: 0 }}>
            {common.updatedLabel}: {updated}
          </p>
        </div>
      </section>

      <section style={{ padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {intro && (
            <p style={{
              fontSize: 16,
              fontStyle: "italic",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: 48,
            }}>
              {intro}
            </p>
          )}

          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{
                fontSize: "clamp(20px, 2.4vw, 28px)",
                fontWeight: 800,
                fontStyle: "italic",
                color: "var(--title-color)",
                marginBottom: 16,
              }}>
                {i + 1}. {s.titulo}
              </h2>
              {s.parrafos.map((p, j) => (
                <p key={j} style={{
                  fontSize: 15,
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  marginBottom: 12,
                }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          <Link href="/" style={{
            color: "var(--title-color)",
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>
            {common.volver}
          </Link>
        </div>
      </section>
    </main>
  );
}