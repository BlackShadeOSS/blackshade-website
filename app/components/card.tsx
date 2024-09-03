"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Languages from "./languagesUsed";
import { LanguageKey } from "./languagesUsed";
import { StatusKey } from "./status";
import Status from "./status";
import Repo from "./repo";
import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
    languages: LanguageKey[];
    status: StatusKey;
    repo?: string;
    by?: ByKey;
    link: string;
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
    link,
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
                <div className="flex flex-col 2xl:flex-row justify-around items-center">
                    <Status status={status} />
                    <Repo repo={repo} />
                </div>
                <Languages languages={languages} />
                <motion.div
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.25 }}
                    className={
                        "flex justify-center hover:cursor-pointer text-white h-fit mt-6 w-full px-4 py-2 duration-500 " +
                        (link !== ""
                            ? "hover:text-sky-400"
                            : "hover:text-red-600")
                    }
                >
                    {link !== "" ? (
                        <Link href={link} className="w-full">
                            <span className="bg-deepnavyblue px-6 py-3 rounded-lg text-center text-lg lg:text-xl font-semibold w-full block">
                                Learn More
                            </span>
                        </Link>
                    ) : (
                        <span className="bg-deepnavyblue px-6 py-3 rounded-lg text-center text-lg lg:text-xl font-semibold w-full block">
                            Details Coming Soon
                        </span>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}
