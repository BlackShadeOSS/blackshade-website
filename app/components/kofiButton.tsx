"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

type KofiButtonProps = {
    link: string;
    message: string;
    className?: string;
};

// skaking logo animation
const logoAnimation = {
    initial: { rotate: 0, scale: 1 },
    animate: {
        rotate: [0, 10, -10, 10, -10, 0],
        scale: [1, 1.25, 1.25, 1.25, 1.25, 1],
    },
};

export default function KofiButton({
    link,
    message,
    className = "flex items-center justify-center bg-ashgrey hover:bg-[#13C3FF] h-24 rounded-2xl p-6 text-white text-2xl lg:text-3xl duration-700",
}: KofiButtonProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.015] }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                initial="initial"
                animate="initial"
                whileHover="animate"
            >
                <a href={link} target="_blank" className={className}>
                    <motion.div
                        variants={logoAnimation}
                        transition={{
                            duration: 0.75,
                        }}
                    >
                        <Image
                            src="/kofi-logo.png"
                            alt="Ko-fi logo"
                            width={64}
                            height={64}
                        />
                    </motion.div>
                    <span className="ml-2">{message}</span>
                </a>
            </motion.div>
        </motion.div>
    );
}
