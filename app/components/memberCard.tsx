"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

type MemberCardProps = {
    name: string;
    photo: string;
};

export default function MemberCard({ name, photo }: MemberCardProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.015] }}
            transition={{ duration: 0.4 }}
        >
            <div className="h-auto w-full bg-ashgrey rounded-lg p-5">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <h3 className="text-center lg:text-left text-4xl lg:text-5xl px-4 h-auto lg:h-12">
                        {name}
                    </h3>
                    <Image
                        src={"/MembersPhotos" + photo}
                        alt="MemberPhoto"
                        className="inline w-auto h-24 mt-4 lg:mt-0 rounded-full"
                        width={96}
                        height={96}
                    />
                </div>
            </div>
        </motion.div>
    );
}
