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

const photos: Photo[] = [];

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section className="flex flex-col gap-8 mt-10" id="project">
                <span className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                    <AnimatedText
                        text="Project: Liquid Rocket Engine"
                        once
                        speed={0.125}
                    />
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
                        <Status status="paused" size="lg" />
                        <Repo repo="" size="lg" />
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center mt-6">
                        <h3 className="text-2xl text-white text-center lg:text-left lg:text-4xl">
                            Languages/Programs used:
                        </h3>
                        <Languages
                            languages={["fusion360", "rpa", "hardware"]}
                            size="lg"
                        />
                    </div>
                    <RunBy by="OmegaSpaceSystems" size="md" />
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
                        Liquid Rocket Engine is project that focuses on creating
                        a liquid rocket engine that uses liquid nitrus oxide and
                        ethanol as fuel. The planned expansion ratio is 13.25.
                        It is goin to be working with a pressure of 50 bar in
                        the combustion chamber. The fuel is going to be injected
                        using a pintle injector and pumped using a electric
                        turbopump. Predicted thrust is going to be around 638N.
                        The throat diameter is 10mm. The engine is going to be
                        cooled using a regenerative cooling system.
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
                <PhotosGalery folder="navix" collumns={2} photos={photos} />
            </section>
        </div>
    );
}
