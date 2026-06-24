"use client";

import { useState } from "react";
import Link from "next/link";

const solarDropdown = ["Instalación", "Mantenimiento", "Baterías"];

const navLinks = [
    { label: "Contactanos", href: "/contacto" },
    { label: "Electricidad", href: "/electricidad" },
    { label: "Solar", href: "/solar", dropdown: solarDropdown },
    { label: "Cargadores", href: "/cargadores" },
    { label: "Trámites", href: "/tramites" },
];

export default function Navbar() {
    const [solarOpen, setSolarOpen] = useState(false);

    return (
        <header className="px-12 py-6">
            <nav className="w-full px-3 py-2 flex items-center rounded-full bg-gradient-to-r from-green to-blue">
                <div className="w-12 h-12 rounded-full bg-white flex-shrink-0" />

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

                            {link.dropdown && solarOpen && (
                                <ul className="absolute top-full left-0 mt-2 bg-green rounded-xl py-2 z-50 min-w-max">
                                    {link.dropdown.map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`/solar/${item.toLowerCase()}`}
                                                className="block px-5 py-2 text-white font-bold text-2xl hover:opacity-80 transition-opacity"
                                            >
                                                {item.toUpperCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}