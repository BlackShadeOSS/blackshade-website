"use client";
import "./globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

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
};

const byLogo = {
    BlackShade: "/avatar-round.png",
    OmegaSpaceDev: "/OSS-logo.png",
    OmegaSpaceSystems: "/OSS-logo.png",
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
            <div className="h-80 w-full bg-ashgrey rounded-lg p-5">
                <div className="flex justify-between">
                    <h3 className="text-left text-3xl px-4">{title}</h3>
                    <Image
                        src={byLogo[by]}
                        alt="BlackShade logo"
                        className="rounded-full inline ml-2 mb-1.5 h-10 w-auto"
                        width={40}
                        height={40}
                    />
                </div>
                <p className="px-4 pt-5 text-lg text-left line-clamp-3 h-26">
                    {description}
                </p>
                <div className="flex">
                    <p className="px-4 text-xl text-left mt-6 mb-4 py-2 align-middle w-1/2">
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
                    <p className="px-4 text-xl text-right mt-6 mb-4 py-2 align-middle w-1/2">
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
