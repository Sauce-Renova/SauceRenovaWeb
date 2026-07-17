"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";

const solarDropdown = [
    { label: "Instalación", href: "/solar/instalacion" },
    { label: "Mantenimiento", href: "/solar/mantenimiento" },
    { label: "Baterías", href: "/solar/baterias" },
];

const navLinks = [
    { label: "Contactanos", href: "/contacto" },
    { label: "Electricidad", href: "/electricidad" },
    { label: "Solar", href: "/solar", dropdown: solarDropdown },
    { label: "Cargadores", href: "/cargadores" },
    { label: "Trámites", href: "/tramites" },
];

export default function Navbar() {
    const [solarOpen, setSolarOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navBg = mounted && isDark
        ? "linear-gradient(to right, #0454be, #1f4408)"
        : "linear-gradient(to right, #6FA050, #0454be)";

    const dropdownBg = mounted && isDark ? "#203147" : "#6FA050";

    return (
        <header className="px-12 py-4" style={{ background: mounted && isDark ? "#203147" : "#fafad6" }}>
            <nav
                className="w-full pl-3 pr-3 py-2 flex items-center rounded-full"
                style={{ background: navBg, transition: "background 0.4s" }}
            >
                <Link href="/">
                    <div className="w-12 h-12 rounded-full bg-white flex-shrink-0" />
                </Link>

                <ul className="flex items-center gap-18 ml-auto">
                    {navLinks.map((link) => (
                        <li
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.dropdown && setSolarOpen(true)}
                            onMouseLeave={() => link.dropdown && setSolarOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className="text-white font-bold text-2xl tracking-wide hover:opacity-80 transition-opacity"
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
                                            <li key={item.label}>
                                                <Link
                                                    href={item.href}
                                                    className="block px-5 py-2 text-white font-bold text-2xl hover:opacity-80 transition-opacity"
                                                >
                                                    {item.label.toUpperCase()}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={toggleTheme}
                    className="ml-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                    aria-label="Cambiar tema"
                >
                    {mounted && (isDark ? <SunIcon size={18} color="white" /> : <MoonIcon size={18} color="white" />)}
                </button>
            </nav>
        </header>
    );
}