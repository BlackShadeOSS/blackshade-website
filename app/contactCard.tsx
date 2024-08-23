"use client";
import "./globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

type CardProps = {
    title: string;
    link: string;
    logo: keyof typeof logos;
};

const logos = {
    github: "/github-logo.svg",
    discord: "/discord-logo.svg",
    email: "/email-logo.png",
    x: "/x-logo.png",
    linkedin: "/linkedin-logo.png",
};

export default function ContactCard({ title, link, logo }: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.015] }}
            transition={{ duration: 0.4 }}
        >
            <div className="h-28 w-full bg-ashgrey rounded-lg p-9">
                <div className="flex">
                    <Image
                        src={"/ContactLogos/" + logos[logo]}
                        alt="contact logo"
                        className="rounded-full inline mr-2 h-10 w-auto"
                        width={40}
                        height={40}
                    />
                    <h3 className="text-left text-3xl px-4">{title}</h3>
                </div>
            </div>
        </motion.div>
    );
}
