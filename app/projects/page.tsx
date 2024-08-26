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
                    All Projects
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <Card
                        title="Daito Stories"
                        description="Daito Stories is 2.5D dungeon crawler game made in Unreal Engine 5. 
                        More information soon."
                        languages={["cpp", "ue5"]}
                        status="inprogress"
                        by="OmegaSpaceDev"
                        link="/projects/daitostories"
                    />
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
                        title="BlackMessages"
                        description="BlackMessages is a location based chat app. Designed for people who want to chat with others in their area."
                        languages={["dart", "flutter"]}
                        status="paused"
                        by="OmegaSpaceDev"
                        link="/projects/blackmessages"
                    />
                    <Card
                        title="Navix"
                        description="Navix is a modular avionics board for OmegaSpaceSystems. It's designed to be used in various aerospace projects."
                        languages={["kicad", "hardware"]}
                        status="paused"
                        by="OmegaSpaceSystems"
                        link="/projects/navix"
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
                    <Card
                        title="Liquid Rocket Engine"
                        description="Liquid Rocket Engine is project that focuses on creating a liquid rocket engine that uses liquid nitrus oxide and ethanol as fuel."
                        languages={["fusion360", "rpa", "hardware"]}
                        status="paused"
                        by="OmegaSpaceSystems"
                        link="/projects/liquid-rocket-engine"
                    />
                    <Card
                        title="Sagas of Mankind"
                        description="Sagas Of Mankind is a fascinating evolutionary-strategic game in which players lead their civilization through centuries of evolution and adapt to the changing environment."
                        languages={["cpp", "ue5"]}
                        status="paused"
                        by="OmegaSpaceDev"
                        link="/projects/sagas-of-mankind"
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
            </motion.section>
        </div>
    );
}
