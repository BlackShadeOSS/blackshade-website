"use client";
import "../globals.css";
import Image from "next/image";

type RepoProps = {
    repo?: string;
    size?: "sm" | "md" | "lg";
};

const repoClassP = {
    sm: "px-4 text-xl text-left 2xl:text-right 2xl:mt-6 mb-6 2xl:mb-4 py-2 align-middle w-full 2xl:w-1/2",
    md: "text-xl sm:text-3xl text-left lg:mt-6 mb-4 lg:mb-4 py-2 align-middle w-fit",
    lg: "text-xl sm:text-4xl text-left lg:mt-6 mb-4 lg:mb-4 py-2 align-middle w-fit",
};

const repoClassSpan = {
    sm: "rounded px-2 py-1 text-lg font-semibold ml-2",
    md: "rounded px-2 py-1 text-lg sm:text-2xl font-semibold ml-2",
    lg: "rounded px-2 py-1 text-lg sm:text-3xl font-semibold ml-2",
};

export default function Repo({ repo = "", size = "sm" }: RepoProps) {
    return (
        <p className={repoClassP[size]}>
            Repo:{" "}
            {repo ? (
                <a
                    href={`https://${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                        repoClassSpan[size] +
                        " bg-coalblack hover:text-sky-500 duration-500"
                    }
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
                <span
                    className={
                        repoClassSpan[size] +
                        " bg-coalblack hover:text-red-600 duration-500"
                    }
                >
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
    );
}
