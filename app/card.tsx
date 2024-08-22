"use client";
import Link from "next/link";
import "./globals.css";
import { motion } from "framer-motion";

type CardProps = {
    title: string;
    description: string;
    languages: string[];
};

export default function Card({ title, description }: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.05] }}
            transition={{ duration: 0.4 }}
        >
            <motion.div className="h-64 w-full bg-ashgrey rounded-lg p-5">
                <h3 className="text-left text-3xl px-8">{title}</h3>
                <p
                    className={`px-8 pt-5 text-lg text-left line-clamp-3
                    }`}
                >
                    {description}
                </p>
            </motion.div>
        </motion.div>
    );
}
