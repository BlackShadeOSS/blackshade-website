"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Languages from "./languagesUsed";
import { LanguageKey } from "./languagesUsed";
import { StatusKey } from "./status";
import Status from "./status";
import Repo from "./repo";

type CardProps = {
    title: string;
    description: string;
    languages: LanguageKey[];
    status: StatusKey;
    repo?: string;
    by?: ByKey;
};

type ByKey = keyof typeof byLogo;

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
                    <Status status={status} />
                    <Repo repo={repo} />
                </div>
                <Languages languages={languages} />
            </div>
        </motion.div>
    );
}
