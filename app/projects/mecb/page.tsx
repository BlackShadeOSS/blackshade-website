"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Status from "@/app/components/status";
import Repo from "@/app/components/repo";
import Languages from "@/app/components/languagesUsed";
import { AnimatedText } from "@/app/components/textTyper";
import RunBy from "@/app/components/runBy";
import PhotosGalery from "@/app/components/photosGalery";
import { Photo } from "@/app/components/photosGalery";

const photos: Photo[] = [
    {
        name: "mecb-1",
        folder: "spaceodyssey2",
        extention: ".png",
    },
    {
        name: "mecb-2",
        folder: "spaceodyssey2",
        extention: ".png",
    },
];

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section className="flex flex-col gap-8 mt-10" id="project">
                <span className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                    <AnimatedText text="Project: MECB" once speed={0.125} />
                </span>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, delay: 0.25 }}
                    className="bg-ashgrey rounded-2xl p-10 h-fit"
                >
                    <h2 className="text-4xl text-center font-bold text-white lg:text-5xl mb-10">
                        Basic Information
                    </h2>
                    <div className="flex flex-col lg:flex-row justify-around items-center">
                        <Status status="completed" size="lg" />
                        <Repo
                            repo="github.com/BlackShadeOSS/Space-Odyssey-2"
                            size="lg"
                        />
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center mt-6">
                        <h3 className="text-2xl text-white text-center lg:text-left lg:text-4xl">
                            Languages/Programs used:
                        </h3>
                        <Languages
                            languages={["fusion360", "hardware"]}
                            size="lg"
                        />
                    </div>
                    <RunBy by="BlackShade" size="md" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, delay: 0.75 }}
                    className="bg-ashgrey rounded-2xl p-10 h-fit"
                >
                    <h3 className="text-3xl text-center font-bold text-white lg:text-4xl">
                        About the project
                    </h3>
                    <p className="text-2xl lg:text-3xl text-white text-center mt-6">
                        MECB is a Modular Exhaust and CanBox for Voron2.4
                        printer. It's designed to support multiple toolheads
                        with or without a exhaust filters. It supports multiple
                        canbus extensions types like wagos or BTT CEB board.
                        Filters have 2 options, 1 is a hepa and carbon filter
                        and the other is a solo carbon filter. The exhaust
                        operates in 2 modes, 1 is a exhaust mode and the other
                        is a recirculation mode.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, delay: 1.25 }}
                    className="bg-ashgrey rounded-2xl p-10 h-fit flex flex-col items-center justify-center"
                >
                    <h3 className="text-3xl text-center font-bold text-white lg:text-4xl">
                        Wanna talk about this project?
                    </h3>
                    <Link
                        href="/#contact"
                        className="flex items-center justify-center bg-deepnavyblue hover:bg-[#05226f] h-24 rounded-full px-6 py-3 text-white text-2xl lg:text-3xl duration-700 mt-8 w-1/2"
                    >
                        <span>Contact me</span>
                    </Link>
                </motion.div>
                <PhotosGalery folder="mecb" collumns={2} photos={photos} />
            </section>
        </div>
    );
}
