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
        <>
            {photos
                .filter((photo) => photo.folder === folder)
                .map((photo) => (
                    <div key={photo.name} className="bg-ashgrey rounded-2xl">
                        <Image
                            src={`/photos/${folder}/${photo.name}${photo.extention}`}
                            alt={photo.name}
                            width={350}
                            height={350}
                            className="rounded-2xl w-full h-auto"
                        />
                    </div>
                ))}
        </>
    );
}
