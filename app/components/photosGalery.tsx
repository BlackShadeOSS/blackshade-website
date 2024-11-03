"use client";
import "../globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

type PhotosGaleryProps = {
    folder: string;
    collumns?: 1 | 2 | 3 | 4 | 5;
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
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleKeyPress = useCallback(
        (e: KeyboardEvent) => {
            if (!selectedPhoto) return;

            switch (e.key) {
                case "ArrowLeft":
                    navigatePhotos("prev");
                    break;
                case "ArrowRight":
                    navigatePhotos("next");
                    break;
                case "Escape":
                    closePreview();
                    break;
            }
        },
        [selectedPhoto]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    const openPreview = (photo: Photo) => {
        setSelectedPhoto(photo);
        setCurrentIndex(photos.findIndex((p) => p.name === photo.name));
        setLoading(true);
    };

    const closePreview = () => {
        setSelectedPhoto(null);
        setLoading(true);
    };

    const navigatePhotos = useCallback(
        (direction: "next" | "prev") => {
            let newIndex;
            if (direction === "next") {
                newIndex = (currentIndex + 1) % photos.length;
            } else {
                newIndex = (currentIndex - 1 + photos.length) % photos.length;
            }

            setCurrentIndex(newIndex);
            setSelectedPhoto(photos[newIndex]);
            setLoading(true);
        },
        [currentIndex, photos]
    );

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            navigatePhotos("next");
        }
        if (isRightSwipe) {
            navigatePhotos("prev");
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", duration: 1.5, delay: 0.25 }}
                className="bg-ashgrey rounded-2xl p-10 h-fit"
            >
                <h3 className="text-4xl text-center font-bold text-white lg:text-5xl pb-6">
                    Photos
                </h3>
                {photos.length === 0 ? (
                    <p className="text-white text-center mt-8 text-3xl w-full">
                        No photos to show
                    </p>
                ) : null}
                <div
                    className={
                        "grid grid-cols-1 gap-8 mt-8 grid-flow-dense lg:grid-cols-" +
                        collumns
                    }
                >
                    {photos.length !== 0
                        ? photos.map((photo) => (
                              <motion.div
                                  key={photo.name}
                                  className="bg-ashgrey rounded-3xl overflow-hidden cursor-pointer aspect-square relative"
                                  whileHover={{ scale: 1.02 }}
                                  onClick={() => openPreview(photo)}
                              >
                                  <Image
                                      src={`/photos/${folder}/${photo.name}${photo.extention}`}
                                      alt={photo.name}
                                      fill
                                      className="object-cover"
                                  />
                              </motion.div>
                          ))
                        : null}
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                        onClick={closePreview}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative max-w-7xl w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Close button */}
                            <button
                                onClick={closePreview}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
                            >
                                <X size={32} />
                            </button>

                            {/* Image counter */}
                            <div className="absolute -top-12 left-0 text-white text-lg font-medium">
                                {currentIndex + 1} of {photos.length}
                            </div>

                            {/* Navigation buttons */}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigatePhotos("prev");
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full z-30"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigatePhotos("next");
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full z-30"
                            >
                                <ChevronRight size={32} />
                            </button>

                            {/* Loading indicator */}
                            <AnimatePresence>
                                {loading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl z-20"
                                    >
                                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Preview Image */}
                            <div className="relative w-full h-[80vh]">
                                <Image
                                    src={`/photos/${folder}/${selectedPhoto.name}${selectedPhoto.extention}`}
                                    alt={selectedPhoto.name}
                                    fill
                                    className="object-contain rounded-3xl"
                                    quality={100}
                                    priority
                                    onLoadingComplete={() => setLoading(false)}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
