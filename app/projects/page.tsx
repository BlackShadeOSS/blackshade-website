"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "../components/card";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-8 mt-10"
                id="projects"
            >
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                    Personal Projects
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
                        languages={["fusion360", "hardware"]}
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
                        initial={{ rotate: 0 }}
                        whileHover={{
                            rotate: [0, 25, -25, 25, -25, 0],
                        }}
                        transition={{ duration: 0.5 }}
                        className=" text-white duration-500 hover:text-red-500"
                    >
                        <span className="bg-ashgrey px-5 py-3 lg:px-12 lg:py-6 rounded-full text-xl lg:text-3xl font-semibold ">
                            More Projects Coming Soon...
                        </span>
                    </motion.div>
                </div>
                <h2 className="text-5xl text-center font-bold text-white lg:text-6xl mt-10 mb-5">
                    Team Projects
                </h2>
                {/* This is the added motion div */}
                <div className="flex flex-col justify-center items-center gap-4 bg-ashgrey rounded-2xl p-10 h-fit w-full xl:w-2/3 mx-auto">
                    <p className="text-3xl text-white text-center mb-5 w-full xl:w-2/3">
                        All team projects that I have worked on can be found on
                        the OmegaSpaceTeam website.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.025 }}
                        transition={{ duration: 0.25 }}
                        className="hover:cursor-pointer text-white hover:text-sky-400 duration-500 my-10"
                    >
                        <Link
                            href={"https://www.omegaspaceteam.tech/projects"}
                            target="_blank"
                        >
                            <span className="bg-deepnavyblue px-5 py-3 lg:px-12 lg:py-6 rounded-full text-xl lg:text-3xl font-semibold ">
                                See Team Projects Here
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
