"use client";
import Link from "next/link";
import "./globals.css";
import { motion } from "framer-motion";

type CardProps = {
    title: string;
    description: string;
    languages: LanguageKey[];
};
type LanguageKey = keyof typeof colors;

// language match colors
const colors = {
    javascript: "#efd81d",
    typescript: "#2f74c0",
    rust: "#f75108",
    csharp: "#512bd4",
    python: "#3572a5",
    java: "#e25040",
    cpp: "#005697",
};

export default function Card({ title, description, languages }: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.05] }}
            transition={{ duration: 0.4 }}
        >
            <div className="h-64 w-full bg-ashgrey rounded-lg p-5">
                <h3 className="text-left text-3xl px-4">{title}</h3>
                <p className={`px-4 pt-5 text-lg text-left line-clamp-3`}>
                    {description}
                </p>
                <div className="mt-auto flex gap-2 px-4">
                    {languages &&
                        languages.map((lang) => (
                            <div
                                key={lang}
                                className="rounded px-2 py-1"
                                style={{ backgroundColor: colors[lang] }}
                            >
                                <span>{lang}</span>
                            </div>
                        ))}
                </div>
            </div>
        </motion.div>
    );
}
