"use client";
import "./globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Languages from "./languagesUsed";

type CardProps = {
    title: string;
    description: string;
    languages: string[];
    status: StatusKey;
    repo?: string;
    by?: ByKey;
};

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
                <div className="flex justify-between items-center">
                    <h3 className="text-left text-2xl lg:text-3xl px-4 h-fit">
                        {title}
                    </h3>
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
                    <Languages languages={languages} />
                </div>
            </div>
        </motion.div>
    );
}
