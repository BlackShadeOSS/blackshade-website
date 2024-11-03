"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText } from "./components/textTyper";
import Card from "./components/card";
import ContactCard from "./components/contactCard";
import KofiButton from "./components/kofiButton";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 mb-4"
                id="aboutMe"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                    }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-left">
                        <AnimatedText text="Hi, I'm Tomasz" once speed={0.15} />
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 0.25,
                        }}
                        className="text-xl text-white text-center lg:text-left"
                    >
                        I am a beginner software developer from Poland. I mainly
                        focus on web development and game development. Most of
                        my time I use languages like JavaScript, TypeScript, C#
                        and a little of Rust.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 0.5,
                        }}
                        className="text-xl text-white text-center lg:text-left"
                    >
                        In the internet I am known as BlackShade or
                        BlackShadeOSS. I{`'`}m a leader of OmegaSpace team,
                        about which you can read below.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                    }}
                >
                    <Image
                        src="/avatar-round.png"
                        alt="My avatar"
                        className="order-first mx-auto w-9/12 lg:order-1 lg:mr-0 lg:w-fit h-auto lg:h-96"
                        width={350}
                        height={350}
                    />
                </motion.div>
            </section>
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 mb-10"
                id="aboutOmegaSpace"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                        delay: 0.25,
                    }}
                    className="order-last lg:order-first"
                >
                    <Image
                        src="/OSS-logo.svg"
                        alt="OSS logo"
                        className="mx-auto w-9/12 lg:ml-0 lg:w-fit h-auto lg:h-96"
                        width={350}
                        height={350}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                        delay: 0.25,
                    }}
                    className="flex flex-col gap-4 text-right"
                >
                    <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-right">
                        OmegaSpace Team
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 0.25,
                        }}
                        className="text-xl text-white text-center lg:text-right"
                    >
                        OmegaSpace Team is a multipart group of people
                        interested in software development and engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 0.25,
                        }}
                    >
                        <p className="text-xl text-white text-center lg:text-left">
                            We are made up of two departments which are listed
                            below:
                        </p>
                        <ul className="mb-4 ml-8 list-disc text-xl text-white text-left">
                            <li>
                                OmegaSpaceDev is focused on software development
                                and game development.
                            </li>
                            <li>
                                OmegaSpaceSystems is focused on various
                                engineering fields like aerospace.
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 0.25,
                        }}
                        className="text-xl text-white text-center mb-10 lg:mb-0"
                    >
                        <motion.div
                            whileHover={{ scale: 1.025 }}
                            transition={{ duration: 0.25 }}
                            className="hover:cursor-pointer text-white hover:text-sky-400 duration-500"
                        >
                            <Link
                                href={"https://www.omegaspaceteam.tech"}
                                target="_blank"
                            >
                                <span className="bg-ashgrey px-6 py-3 rounded-lg text-2xl lg:text-xl font-semibold">
                                    Learn more
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    type: "spring",
                    duration: 1.5,
                    delay: 0.25,
                }}
                className="flex flex-col gap-8 mt-10"
                id="projects"
            >
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-left mb-10">
                    Projects
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <Card
                        title="LMCSS"
                        description="LMCSS is a unity script that dynamicly updates a list of toggles so user can select a input device. It's designed for local multiplayer games."
                        languages={["csharp", "unity"]}
                        status="completed"
                        repo="github.com/BlackShadeOSS/LocalMultiplayerControllerSelectionScript"
                        link="/projects/lmcss"
                    />
                    <Card
                        title="MECB"
                        description="MECB is a Modular Exhaust and CanBox for Voron2.4 printer. It's designed to support multiple toolheads with or without a exhaust filters."
                        languages={["fusion360"]}
                        status="inprogress"
                        repo="/github.com/BlackShadeOSS/Modular-Exhaust-CanBox"
                        link="/projects/mecb"
                    />
                    <Card
                        title="Space Odyssey 2"
                        description="Space Odyssey 2 is a space race game made using Canvas. It was made as a final project for my first year of high school."
                        languages={["html", "css", "javascript"]}
                        status="completed"
                        repo="github.com/BlackShadeOSS/Space-Odyssey-2"
                        by="BlackShade"
                        link="/projects/spaceodyssey2"
                    />
                </div>
                <div className="flex justify-center items-center gap-4 h-28 mt-10">
                    <motion.div
                        whileHover={{ scale: 1.025 }}
                        transition={{ duration: 0.25 }}
                        className="hover:cursor-pointer text-white hover:text-sky-400 duration-500"
                    >
                        <Link href="/projects">
                            <span className="bg-ashgrey px-6 py-3 lg:px-12 lg:py-6 rounded-lg text-2xl lg:text-3xl font-semibold ">
                                View all projects
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    type: "spring",
                    duration: 1.5,
                    delay: 0.25,
                }}
                className="flex flex-col gap-8 mt-10"
                id="contact"
            >
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-left mb-10">
                    Wanna to contact me? Here{`'`}s how!
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-5">
                    <ContactCard
                        title="Email"
                        link="mailto:diaxsio10@gmail.com"
                        logo="email"
                    />
                    <ContactCard
                        title="GitHub"
                        link="https://github.com/BlackShadeOSS"
                        logo="github"
                    />
                    <ContactCard
                        title="Discord"
                        link="https://discordapp.com/users/710398177613971499"
                        logo="discord"
                    />
                    <ContactCard
                        title="LinkedIn"
                        link="https://www.linkedin.com/in/tomasz-tarnawski/"
                        logo="linkedin"
                    />
                    <ContactCard
                        title="X"
                        link="https://x.com/BlackShadeOSS"
                        logo="x"
                    />
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    type: "spring",
                    duration: 1.5,
                    delay: 0.25,
                }}
                className="flex flex-col gap-8 mt-10"
                id="supportme"
            >
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-left">
                    Support me!
                </h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75, delay: 1 }}
                    className="text-xl text-black-primary dark:text-white-primary lg:w-2/3"
                >
                    If you want to support me and my team, you can do it by
                    following me on my social media above or by donating me on
                    Ko-fi. Every donation will be used to fund our current and
                    future projects.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75, delay: 1.25 }}
                    className="flex justify-center lg:justify-start gap-4 h-28 mt-4"
                >
                    <KofiButton
                        link="https://ko-fi.com/blackshade"
                        message="Support me on Ko-fi"
                    />
                </motion.div>
            </motion.section>
        </div>
    );
}
