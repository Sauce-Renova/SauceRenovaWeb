"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";
import { navbarCopy } from "@/lib/i18n/navbar";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";

export default function Navbar() {
    const [solarOpen, setSolarOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSolarOpen, setMobileSolarOpen] = useState(false);
    const { toggleTheme } = useTheme();
    const { lang, setLang } = useLanguage();
    const pathname = usePathname();

    const copy = navbarCopy[lang];

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

    const solarDropdown = [
        { label: copy.solarDropdown.instalacion, href: "/solar/instalacion" },
        { label: copy.solarDropdown.mantenimiento, href: "/solar/mantenimiento" },
        { label: copy.solarDropdown.baterias, href: "/solar/baterias" },
    ];

    const navLinks = [
        { label: copy.links.contacto, href: "/contacto" },
        { label: copy.links.electricidad, href: "/electricidad" },
        { label: copy.links.solar, href: "/solar", dropdown: solarDropdown },
        { label: copy.links.cargadores, href: "/cargadores" },
        { label: copy.links.tramites, href: "/tramites" },
    ];

    const navBg = "linear-gradient(to right, var(--nav-from), var(--nav-to))";
    const dropdownBg = "var(--nav-dropdown)";

    return (
        <header className="px-4 md:px-12 py-4" style={{ background: "var(--bg-page)" }}>
            <nav
                className="w-full pl-3 pr-3 py-2 flex items-center rounded-full relative"
                style={{ background: navBg, transition: "background 0.4s" }}
            >
                <Link href="/" onClick={() => setMobileOpen(false)}>
                    <div className="w-12 h-12 rounded-full bg-white flex-shrink-0" />
                </Link>

                {/* Menú desktop */}
                <ul className="hidden xl:flex items-center gap-12 ml-auto">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        const hovered = !!link.dropdown && solarOpen;
                        return (
                            <li
                                key={link.href}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setSolarOpen(true)}
                                onMouseLeave={() => link.dropdown && setSolarOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`inline-block px-3 py-1 rounded-full font-bold text-2xl tracking-wide transition-colors duration-300 ${active
                                        ? "bg-white text-navy-800"
                                        : `text-white hover:bg-white/20 ${hovered ? "bg-white/20" : ""}`
                                        }`}
                                >
                                    {link.label.toUpperCase()}
                                </Link>

                                {link.dropdown && (
                                    <div
                                        className={`absolute top-full left-0 pt-3 z-10 transition-all duration-300 ease-out ${solarOpen
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-2 pointer-events-none"
                                            }`}
                                    >
                                        <ul
                                            className="rounded-xl py-2 min-w-max"
                                            style={{ background: dropdownBg }}
                                        >
                                            {link.dropdown.map((item) => (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        aria-current={isActive(item.href) ? "page" : undefined}
                                                        className={`block mx-2 px-4 py-2 rounded-full font-bold text-2xl transition-colors duration-300 ${isActive(item.href)
                                                            ? "bg-white text-navy-800"
                                                            : "text-white hover:bg-white/20"
                                                            }`}
                                                    >
                                                        {item.label.toUpperCase()}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Selector de idioma + tema (desktop) */}
                <div className="hidden xl:flex items-center ml-6 gap-3 flex-shrink-0">
                    <div className="flex items-center bg-white/20 rounded-full p-1">
                        {LANGUAGES.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => setLang(l.code)}
                                className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${lang === l.code
                                    ? "bg-white text-navy-800"
                                    : "text-white hover:bg-white/20"
                                    }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                        aria-label={copy.aria.toggleTheme}
                    >
                        <span className="theme-light-only"><MoonIcon size={18} color="white" /></span>
                        <span className="theme-dark-only"><SunIcon size={18} color="white" /></span>
                    </button>
                </div>

                {/* Controles móvil */}
                <div className="flex xl:hidden items-center gap-3 ml-auto">
                    <div className="flex items-center bg-white/20 rounded-full p-1">
                        {LANGUAGES.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => setLang(l.code)}
                                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${lang === l.code
                                    ? "bg-white text-navy-800"
                                    : "text-white"
                                    }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                        aria-label={copy.aria.toggleTheme}
                    >
                        <span className="theme-light-only"><MoonIcon size={18} color="white" /></span>
                        <span className="theme-dark-only"><SunIcon size={18} color="white" /></span>
                    </button>
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 flex-shrink-0"
                        aria-label={copy.aria.openMenu}
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* Panel desplegable móvil */}
            <div
                className="xl:hidden grid"
                inert={!mobileOpen}
                style={{
                    gridTemplateRows: mobileOpen ? "1fr" : "0fr",
                    marginTop: mobileOpen ? 12 : 0,
                    transition: "grid-template-rows 0.35s ease, margin-top 0.35s ease",
                }}
            >
                <div className="overflow-hidden rounded-3xl" style={{ background: navBg }}>
                    <ul className="flex flex-col py-2">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <li key={link.href}>
                                    {link.dropdown ? (
                                        <>
                                            <div
                                                className={`flex items-center justify-between px-6 py-3 border-l-4 ${active ? "border-white bg-white/10" : "border-transparent"}`}
                                            >
                                                <Link
                                                    href={link.href}
                                                    aria-current={active ? "page" : undefined}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="text-white font-bold text-xl tracking-wide"
                                                >
                                                    {link.label.toUpperCase()}
                                                </Link>
                                                <button
                                                    onClick={() => setMobileSolarOpen((v) => !v)}
                                                    className="p-2 -mr-2"
                                                    aria-label={copy.aria.showSolarOptions}
                                                >
                                                    <span className={`block text-white transition-transform ${mobileSolarOpen ? "rotate-180" : ""}`}>▾</span>
                                                </button>
                                            </div>
                                            <div
                                                className="grid"
                                                inert={!mobileSolarOpen}
                                                style={{
                                                    gridTemplateRows: mobileSolarOpen ? "1fr" : "0fr",
                                                    transition: "grid-template-rows 0.3s ease",
                                                }}
                                            >
                                                <div className="overflow-hidden">
                                                    <ul className="pb-2" style={{ background: dropdownBg }}>
                                                        {link.dropdown.map((item) => (
                                                            <li key={item.href}>
                                                                <Link
                                                                    href={item.href}
                                                                    aria-current={isActive(item.href) ? "page" : undefined}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className={`block px-10 py-2 text-white font-bold text-lg ${isActive(item.href) ? "bg-white/15" : ""}`}
                                                                >
                                                                    {item.label.toUpperCase()}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => setMobileOpen(false)}
                                            className={`block px-6 py-3 text-white font-bold text-xl tracking-wide border-l-4 ${active ? "border-white bg-white/10" : "border-transparent"}`}
                                        >
                                            {link.label.toUpperCase()}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}