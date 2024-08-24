"use client";
import "../globals.css";

type LanguagesProps = {
    languages: LanguageKey[];
    size?: "sm" | "md" | "lg";
};

export type LanguageKey = keyof typeof colors;

const colors = {
    javascript: "#efd81d",
    typescript: "#2f74c0",
    rust: "#f75108",
    csharp: "#512bd4",
    python: "#3572a5",
    java: "#e25040",
    cpp: "#005697",
    ue5: "#000",
    unity: "#c3cbd0",
    fusion360: "#f6792e",
    dart: "#04599c",
    flutter: "#59c7f8",
    kicad: "#314cb0",
    html: "#e96228",
    css: "#2862e9",
    hardware: "#7c8185",
};

const fullnames = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    rust: "Rust",
    csharp: "C#",
    python: "Python",
    java: "Java",
    cpp: "C++",
    ue5: "Unreal Engine 5",
    unity: "Unity",
    fusion360: "Fusion 360",
    dart: "Dart",
    flutter: "Flutter",
    kicad: "KiCad",
    html: "HTML",
    css: "CSS",
    hardware: "Hardware",
};

const textColors = {
    javascript: "#000",
    typescript: "#000",
    rust: "#fff",
    csharp: "#fff",
    python: "#fff",
    java: "#fff",
    cpp: "#fff",
    ue5: "#fff",
    unity: "#000",
    fusion360: "#fff",
    dart: "#fff",
    flutter: "#000",
    kicad: "#fff",
    html: "#fff",
    css: "#000",
    hardware: "#fff",
};

const languageClassSpan = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-lg sm:text-2xl",
};

export default function Languages({ languages, size = "sm" }: LanguagesProps) {
    return (
        <div className="flex flex-col text-center lg:flex-row gap-2 px-4 py-2 overflow-x-hidden h-fit">
            {languages &&
                languages.map((lang) => (
                    <div
                        key={lang}
                        className="rounded px-2 py-1"
                        style={{ backgroundColor: colors[lang] }}
                    >
                        <span
                            style={{ color: textColors[lang] }}
                            className={"font-bold " + languageClassSpan[size]}
                        >
                            {fullnames[lang]}
                        </span>
                    </div>
                ))}
        </div>
    );
}
