"use client";
import "../globals.css";
import Image from "next/image";

type RunByProps = {
    by: ByKey;
    size?: "sm" | "md" | "lg";
};

type ByKey = keyof typeof byLogo;

const byLogo = {
    BlackShade: "/avatar-round.png",
    OmegaSpaceDev: "/OSD-logo.svg",
    OmegaSpaceSystems: "/OSS-logo.svg",
    OST_CanSatTeam: "/CanSat-logo.svg",
};

const byText = {
    BlackShade: "BlackShade",
    OmegaSpaceDev: "OmegaSpaceDev",
    OmegaSpaceSystems: "OmegaSpaceSystems",
    OST_CanSatTeam: "OST CanSatGroup",
};

export default function runBy({ by, size = "sm" }: RunByProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mt-6">
            <span className="text-2xl text-white text-center lg:text-left lg:text-4xl mr-0 lg:mr-4">
                {"Run by: "}
            </span>
            <Image
                src={byLogo[by]}
                alt={by}
                width={size === "sm" ? 50 : size === "md" ? 100 : 150}
                height={size === "sm" ? 50 : size === "md" ? 100 : 150}
                className="inline-block mr-4"
            />
            <span className="text-2xl text-white text-center lg:text-left lg:text-4xl">
                {byText[by]}
            </span>
        </div>
    );
}
