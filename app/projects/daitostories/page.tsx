"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Status from "@/app/components/status";
import Repo from "@/app/components/repo";
import Languages from "@/app/components/languagesUsed";
import { AnimatedText } from "@/app/components/textTyper";
import RunBy from "@/app/components/runBy";
import PhotosGalery from "@/app/components/photosGalery";

const photos = [
    {
        name: "daitostories1",
        extention: ".png",
        folder: "daitostories",
    },
    {
        name: "daitostories2",
        extention: ".png",
        folder: "daitostories",
    },
];

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section className="flex flex-col gap-8 mt-10" id="project">
                <span className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                    <AnimatedText
                        text="Project: Daito Stories"
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
                        <Status status="inprogress" size="lg" />
                        <Repo repo="" size="lg" />
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center mt-6">
                        <h3 className="text-2xl text-white text-center lg:text-left lg:text-4xl">
                            Languages/Programs used:
                        </h3>
                        <Languages languages={["cpp", "ue5"]} size="lg" />
                    </div>
                    <RunBy by="OmegaSpaceDev" size="md" />
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
                    <p className="text-2xl text-white text-center mt-6">
                        Daito Stories is 2.5D dungeon crawler game made in
                        Unreal Engine 5. More information soon.
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
                <PhotosGalery
                    folder="daitostories"
                    collumns={3}
                    photos={photos}
                />
            </section>
        </div>
    );
}
