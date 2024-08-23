"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 mb-6 mt-4"
                id="aboutOmegaSpace"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="flex flex-col gap-4 text-right"
                >
                    <h2 className="text-5xl text-center font-bold text-white lg:text-6xl lg:text-left">
                        OmegaSpace Team
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.25 }}
                        className="text-xl text-white text-center lg:text-left"
                    >
                        OmegaSpace Team is a multipart group of people
                        interested in software development and engineering. We
                        are self funded and work on projects in our free time.
                        Some of our projects are open source and are available
                        on GitHub. We are always looking for new members to join
                        our team. If you are interested in joining our team,
                        please contact us.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.5 }}
                    ></motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: +100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <Image
                        src="/OSS-logo.svg"
                        alt="OSS logo"
                        className="order-first mx-auto w-9/12 lg:order-1 lg:mr-0 lg:w-fit h-auto lg:h-96"
                        width={350}
                        height={350}
                    />
                </motion.div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.75 }}
                className="flex flex-col gap-8 mt-10"
                id="departments"
            >
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                    Departments
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        className="h-auto w-full bg-ashgrey rounded-lg p-8"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-left text-4xl lg:text-5xl px-4 h-12">
                                Systems
                            </h3>
                            <Image
                                src="/OSS-logo.svg"
                                alt="OSS-Logo"
                                className="inline w-auto h-16 lg:h-24"
                                width={96}
                                height={96}
                            />
                        </div>
                        <p className="px-4 pt-5 text-lg text-left mb-6">
                            OmegaSpaceSystems is a department that focuses on
                            creating hardware for aerospace and rocketry
                            projects. We work on various project but we look
                            most forward to creating a liquid rocket engine.
                            Most of our projects are closed source and are not
                            available, as sharing them would brake local laws.
                            We are actively looking for new members to join our
                            team as working on rocketry projects is very time
                            consuming.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        className="h-auto w-full bg-ashgrey rounded-lg p-8"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-left text-4xl lg:text-5xl px-4 h-12">
                                Dev
                            </h3>
                            <Image
                                src="/OSD-logo.svg"
                                alt="OSD-Logo"
                                className="inline w-auto h-16 lg:h-24"
                                width={96}
                                height={96}
                            />
                        </div>
                        <p className="px-4 pt-5 text-lg text-left mb-6">
                            OmegaSpaceDev is a department that focuses on
                            creating websites, games, software and more. We are
                            trying to often go to hackathons and game jams to
                            improve our skills. Most of our projects are open
                            source and are available on GitHub. Currently most
                            of our team members are working on a game called
                            Daito Stories about which you can read more on our
                            projects page.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.75 }}
                className="flex flex-col gap-8 mt-10"
                id="Members"
            >
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                    Members
                </h2>
                <div className="grid grid-cols-1 gap-8 px-12 lg:grid-cols-2">
                    <div className="h-auto w-full bg-ashgrey rounded-lg p-5">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <h3 className="text-center lg:text-left text-4xl lg:text-5xl px-4 h-auto lg:h-12">
                                Tomasz Tarnawski
                            </h3>
                            <Image
                                src="/avatar-round.png"
                                alt="BlackShade"
                                className="inline w-auto h-24 mt-4 lg:mt-0"
                                width={96}
                                height={96}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 h-28 ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.75 }}
                    >
                        <a
                            href="/#contact"
                            className="flex items-center justify-center bg-ashgrey hover:bg-[#05226f] h-24 rounded-full px-12 py-6 text-white text-2xl lg:text-3xl duration-700"
                        >
                            <span>Join Us</span>
                        </a>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
