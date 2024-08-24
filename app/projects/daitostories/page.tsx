"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Status from "@/app/components/status";
import Repo from "@/app/components/repo";
import Languages from "@/app/components/languagesUsed";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-8 mt-10"
                id="project"
            >
                <div className="bg-ashgrey rounded-lg p-10 h-fit">
                    <h2 className="text-5xl text-center font-bold text-white lg:text-6xl mb-10">
                        Project: Daito Stories
                    </h2>
                    {/* <h2 className="text-3xl text-center font-bold text-white lg:text-4xl">
                        Basic Information
                    </h2> */}
                    <div className="flex flex-col lg:flex-row justify-around">
                        <Status status="inprogress" size="lg" />
                        <Repo repo="" size="lg" />
                    </div>
                    <Languages languages={["cpp", "ue5"]} />
                    <h3 className="text-3xl text-center font-bold text-white lg:text-4xl mt-6">
                        About the project
                    </h3>
                    <p className="text-2xl text-white text-center mt-6">
                        Daito Stories is 2.5D dungeon crawler game made in
                        Unreal Engine 5. More information soon.
                    </p>
                </div>
            </motion.section>
        </div>
    );
}
