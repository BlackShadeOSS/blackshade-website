"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 mb-10"
                id="aboutOmegaSpace"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, delay: 1 }}
                    className="flex flex-col gap-4 text-right"
                >
                    <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-left">
                        OmegaSpace Team
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 1.25 }}
                        className="text-xl text-white text-center lg:text-left"
                    >
                        OmegaSpace Team is a multipart group of people
                        interested in software development and engineering.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 1.5 }}
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
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: +100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, delay: 1 }}
                >
                    <Image
                        src="/OSS-logo.png"
                        alt="OSS logo"
                        className="order-first mx-auto w-9/12 lg:order-1 lg:mr-0 lg:w-fi"
                        width={350}
                        height={350}
                    />
                </motion.div>
            </section>
        </div>
    );
}
