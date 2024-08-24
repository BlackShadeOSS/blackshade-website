"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Status from "@/app/components/status";
import Repo from "@/app/components/repo";

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
                        Daito Stories
                    </h2>
                    <div className="flex flex-col 2xl:flex-row justify-between">
                        <Status status="inprogress" size="lg" />
                        <Repo repo="" size="lg" />
                    </div>
                    <p className="text-2xl text-white text-center">
                        Daito Stories is 2.5D dungeon crawler game made in
                        Unreal Engine 5. More information soon.
                    </p>
                </div>
            </motion.section>
        </div>
    );
}
