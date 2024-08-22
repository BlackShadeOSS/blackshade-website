"use client";
import "./globals.css";
import { motion } from "framer-motion";

type CardProps = {
    title: string;
    description: string;
    languages: LanguageKey[];
    status: string;
};
type LanguageKey = keyof typeof colors;

const statusColors = {
    completed: "#00ff00",
    inprogress: "#ff0000",
    paused: "#ffaa00",
};

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

// language match correct names
const fullnames = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    rust: "Rust",
    csharp: "C#",
    python: "Python",
    java: "Java",
    cpp: "C++",
};

// language match text colors
const textColors = {
    javascript: "#000",
    typescript: "#000",
    rust: "#fff",
    csharp: "#fff",
    python: "#fff",
    java: "#fff",
    cpp: "#fff",
};

export default function Card({ title, description, languages }: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.05] }}
            transition={{ duration: 0.4 }}
        >
            <div className="h-80 w-full bg-ashgrey rounded-lg p-5">
                <h3 className="text-left text-3xl px-4">{title}</h3>
                <p className="px-4 pt-5 text-lg text-left line-clamp-3">
                    {description}
                </p>
                <p className="px-4 text-xl text-left my-6">Project Status: </p>
                <div className="flex gap-2 px-4 pb-4 mt-12 overflow-x-hidden">
                    {languages &&
                        languages.map((lang) => (
                            <div
                                key={lang}
                                className="rounded px-2 py-1"
                                style={{ backgroundColor: colors[lang] }}
                            >
                                <span
                                    style={{ color: textColors[lang] }}
                                    className="font-bold"
                                >
                                    {fullnames[lang]}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </motion.div>
    );
}
