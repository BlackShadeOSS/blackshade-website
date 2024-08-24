"use client";
import "../globals.css";
import Image from "next/image";

type RepoProps = {
    repo?: string;
};

export default function Repo({ repo = "" }: RepoProps) {
    return (
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
    );
}
