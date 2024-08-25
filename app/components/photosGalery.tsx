"use client";
import "../globals.css";
import { motion } from "framer-motion";
import Image from "next/image";

type PhotosGaleryProps = {
    folder: string;
    collumns?: 1 | 2 | 3 | 4 | 5;
    photos: Photo[]; // Ensure photos is an array type
};

type Photo = {
    name: string;
    extention: string;
    folder: string;
};

export default function PhotosGalery({
    folder,
    collumns = 3,
    photos = [], // Default to an empty array if photos is undefined
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
            <div
                className={
                    "grid grid-cols-1 gap-3 mt-8 lg:grid-cols-" + collumns
                }
            >
                {photos
                    .filter((photo) => photo.folder === folder)
                    .map((photo) => (
                        <div
                            key={photo.name}
                            className="bg-ashgrey rounded-2xl"
                        >
                            <Image
                                src={`/photos/${folder}/${photo.name}${photo.extention}`}
                                alt={photo.name}
                                width={350}
                                height={350}
                                className="rounded-2xl w-full h-auto"
                            />
                        </div>
                    ))}
            </div>
        </motion.div>
    );
}
