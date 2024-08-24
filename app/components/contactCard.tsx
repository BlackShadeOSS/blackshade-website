"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

type ContactCardProps = {
    title: string;
    link: string;
    logo: keyof typeof logos;
};

const logos = {
    github: "/github-logo.svg",
    discord: "/discord-logo.svg",
    email: "/email-logo.svg",
    x: "/x-logo.svg",
    linkedin: "/linkedin-logo.svg",
};

export default function ContactCard({ title, link, logo }: ContactCardProps) {
    return (
        <a href={link} target="_blank">
            <motion.div
                whileHover={{ scale: [null, 1.015] }}
                transition={{ duration: 0.4 }}
            >
                <div className="h-28 w-full bg-ashgrey rounded-lg p-9">
                    <div className="flex">
                        <Image
                            src={"/ContactLogos" + logos[logo]}
                            alt="contact logo"
                            className="inline mr-2 h-10 w-auto"
                            width={40}
                            height={40}
                        />
                        <h3 className="text-left text-2xl 2xl:text-3xl px-4">
                            {title}
                        </h3>
                    </div>
                </div>
            </motion.div>
        </a>
    );
}
