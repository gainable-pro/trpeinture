"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZigZagItem {
    title: string;
    description: string;
    imageSrc: string;
    features: string[];
}

interface ZigZagSectionProps {
    items: ZigZagItem[];
}

export function ZigZagSection({ items }: ZigZagSectionProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 space-y-24">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex flex-col gap-12 items-center",
                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        )}
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-slate-800">{item.title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                            <ul className="space-y-3">
                                {item.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
