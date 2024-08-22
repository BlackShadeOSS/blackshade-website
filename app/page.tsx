"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "./textTyper";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2"
                id="aboutMe"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary">
                        <AnimatedText text="Hi, I'm Tomasz" once speed={0.14} />
                    </h2>
                    <p className="text-xl text-black-primary dark:text-white-primary">
                        I am a beginner software developer from Poland. I mainly
                        focus on web development and game development. Most of
                        my time I use languages like JavaScript, TypeScript, C#
                        and a little of Rust.
                    </p>

                    <p className="text-xl text-black-primary dark:text-white-primary">
                        In the internet I am known as BlackShade or
                        BlackShadeOSS. I'm a leader of OmegaSpace team, about
                        which you can read below.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: +100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <Image
                        src="/avatar-round.png"
                        alt="My avatar"
                        className="order-first mx-auto w-9/12 lg:order-1 lg:mr-0 lg:w-fit lg:text-right"
                        width={350}
                        height={350}
                    />
                </motion.div>
            </section>
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2"
                id="aboutOmegaSpace"
            >
                <Image
                    src="/OSS-logo.png"
                    alt="OSS logo"
                    className=" mx-auto w-9/12 lg:order-0 lg:ml-0 lg:w-fit lg:text-left"
                    width={350}
                    height={350}
                />
                <div className="flex flex-col gap-4 text-right">
                    <h2 className="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary">
                        OmegaSpace Team
                    </h2>
                    <p className="text-xl text-black-primary dark:text-white-primary">
                        OmegaSpace Team is a multipart group of people
                        interested in software development and engineering.
                    </p>

                    <p className="text-xl text-black-primary dark:text-white-primary text-left">
                        We are made up of two departments which are listed
                        below:
                    </p>
                    <ul className="mb-4 ml-8 list-disc text-xl text-black-primary dark:text-white-primary text-left">
                        <li>
                            OmegaSpaceDev is focused on software development and
                            game development.
                        </li>
                        <li>
                            OmegaSpaceSystems is focused on aerospace and rocket
                            engineering.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 mt-10">
                <h2 className="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary">
                    Projects
                </h2>
            </section>
        </div>
    );
}
