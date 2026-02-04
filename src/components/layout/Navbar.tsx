"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Peinture", href: "/peinture" },
    { name: "Placo & Isolation", href: "/placo-isolation" },
    { name: "Revêtements", href: "/revetements" },
    { name: "Rénovation", href: "/renovation" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Zone", href: "/zone-intervention" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-28 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-[280px] h-28">
                            <Image
                                src="/images/logo.png"
                                alt="TR Peinture Logo"
                                fill
                                className="object-contain mix-blend-multiply"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex gap-6 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="flex items-center gap-4 ml-4">
                            <a
                                href="tel:0635238107"
                                className="flex items-center gap-2 text-slate-700 font-bold hover:text-primary transition-colors"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Phone size={18} />
                                </div>
                                06 35 23 81 07
                            </a>
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                            >
                                <Paintbrush size={18} />
                                Devis gratuit
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="tel:0635238107"
                        className="flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-lg font-bold mt-2"
                    >
                        <Phone size={20} /> Appeler maintenant
                    </a>
                </div>
            )}
        </header>
    );
}
