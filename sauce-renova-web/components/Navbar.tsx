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
        <header className="px-12 py-4">
            <nav className="w-full pl-3 pr-8 py-2 flex items-center rounded-full bg-gradient-to-r from-green to-blue">
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
                                    className={`absolute top-full left-0 pt-3 z-10 transition-all duration-300 ease-out ${
                                        solarOpen
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                                >
                                    <ul className="bg-green rounded-xl py-2 min-w-max">
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
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}