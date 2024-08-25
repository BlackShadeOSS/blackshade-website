"use client";
import "../globals.css";
import { motion } from "framer-motion";
import Image from "next/image";
import PhotosGaleryBackEnd from "./photosGaleryBackEnd";

type PhotosGaleryProps = {
    folder: string;
    collumns?: 1 | 2 | 3 | 5;
};

export default function PhotosGalery({
    folder,
    collumns = 3,
}: PhotosGaleryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            className="bg-ashgrey rounded-2xl p-10 h-fit"
        >
            <h3 className="text-3xl text-center font-bold text-white lg:text-4xl">
                Photos
            </h3>
            <div className={"grid grid-cols-1 gap-8 lg:grid-cols-" + collumns}>

            </div>
        </motion.div>
    );
}
