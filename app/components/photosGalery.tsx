"use client";
import "../globals.css";
import { motion } from "framer-motion";
import Image from "next/image";

type PhotosGaleryProps = {
    folder: string;
    collumns?: 1 | 2 | 3 | 4 | 5; // idk why but 4 and 5 are like 1
    photos: Photo[];
};

export type Photo = {
    name: string;
    extention: string;
    folder: string;
};

export default function PhotosGalery({
    folder,
    collumns = 3,
    photos = [],
}: PhotosGaleryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 1.75 }}
            className="bg-ashgrey rounded-2xl p-10 h-fit"
        >
            <h3 className="text-3xl text-center font-bold text-white lg:text-4xl">
                Photos
            </h3>
            {photos.length === 0 ? (
                <p className="text-white text-center mt-8 text-3xl w-full">
                    No photos to show
                </p>
            ) : null}
            <div
                className={
                    "grid grid-cols-1 gap-8 mt-8 lg:grid-cols-" + collumns
                }
            >
                {photos.length !== 0
                    ? photos.map((photo) => (
                          <div
                              key={photo.name}
                              className="bg-ashgrey rounded-2xl"
                          >
                              <Image
                                  src={`/photos/${folder}/${photo.name}${photo.extention}`}
                                  alt={photo.name}
                                  width={700}
                                  height={700}
                                  className="rounded-2xl w-full h-auto"
                              />
                          </div>
                      ))
                    : null}
            </div>
        </motion.div>
    );
}
