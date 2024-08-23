"use client";
import "./globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import css from "styled-jsx/css";

type CardProps = {
    title: string;
    description: string;
    languages: LanguageKey[];
    status: StatusKey;
    repo?: string;
    by?: ByKey;
};
type LanguageKey = keyof typeof colors;

type StatusKey = keyof typeof statusColors;

type ByKey = keyof typeof byLogo;

const statusColors = {
    completed: "#00ff00",
    inprogress: "#fbe83a",
    paused: "#ff5f0e",
};

const statusText = {
    completed: "Completed",
    inprogress: "In Progress",
    paused: "Paused",
};

const statusTextColors = {
    completed: "#000",
    inprogress: "#000",
    paused: "#000",
};

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

const byLogo = {
    BlackShade: "/avatar-round.png",
    OmegaSpaceDev: "/OSD-logo.svg",
    OmegaSpaceSystems: "/OSS-logo.svg",
};

export default function Card({
    title,
    description,
    languages,
    status,
    repo = "",
    by = "BlackShade",
}: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.015] }}
            transition={{ duration: 0.4 }}
        >
            <div className="h-auto w-full bg-ashgrey rounded-lg p-5">
                <div className="flex justify-between">
                    <h3 className="text-left text-3xl px-4">{title}</h3>
                    <Image
                        src={byLogo[by]}
                        alt="Logo"
                        className="inline ml-2 mb-1.5 h-10 w-auto"
                        width={40}
                        height={40}
                    />
                </div>
                <p className="px-4 pt-5 text-lg text-left line-clamp-3 h-26">
                    {description}
                </p>
                <div className="flex flex-col 2xl:flex-row">
                    <p className="px-4 text-xl text-left mt-6 2xl:mb-4 py-2 align-middle w-full 2xl:w-1/2">
                        Status:{" "}
                        <span
                            className="rounded px-2 py-1 text-lg font-semibold ml-2"
                            style={{
                                backgroundColor: statusColors[status],
                                color: statusTextColors[status],
                            }}
                        >
                            {statusText[status]}
                        </span>
                    </p>
                    <p className="px-4 text-xl text-left 2xl:text-right 2xl:mt-6 mb-4 py-2 align-middle w-full 2xl:w-1/2">
                        Repo:{" "}
                        {repo ? (
                            <a
                                href={`https://${repo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded px-2 py-1 text-lg font-semibold ml-2 bg-coalblack hover:text-sky-500 duration-500"
                            >
                                <Image
                                    src="/github-mark-white.svg"
                                    alt="github logo"
                                    className="inline mr-1.5 mb-1.5"
                                    width={23}
                                    height={23}
                                />
                                Public
                            </a>
                        ) : (
                            <span className="rounded px-2 py-1 text-lg font-semibold ml-2 bg-coalblack hover:text-red-600 duration-500">
                                <Image
                                    src="/lock.svg"
                                    alt="lock icon"
                                    className="inline mr-1.5 mb-1.5"
                                    width={23}
                                    height={23}
                                />
                                Private
                            </span>
                        )}
                    </p>
                </div>
                <div className="flex gap-2 px-4 py-2 overflow-x-hidden">
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
