import "../globals.css";
import Image from "next/image";

import fs from "fs";
import path from "path";

type PhotosGaleryBackProps = {
    folder: string;
};

type Photo = {
    name: string;
    folder: string;
    extention: string;
};

const photos: Photo[] = [];

const photosPath = path.join(process.cwd(), "public/photos");

const photosFolders = fs.readdirSync(photosPath);

photosFolders.forEach((folder) => {
    const photosInFolder = fs.readdirSync(path.join(photosPath, folder));

    photosInFolder.forEach((photo) => {
        const extention = path.extname(photo);
        const name = path.basename(photo, extention);

        photos.push({
            name,
            folder,
            extention,
        });
    });
});


export default function PhotosGaleryBackEnd({ folder }: PhotosGaleryBackProps) {
    return (
        
    );
}
