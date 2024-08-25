import Image from "next/image";
import path from "path";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";

type PhotosGaleryBackProps = {
    folder: string;
    photos: Photo[];
};

type Photo = {
    name: string;
    folder: string;
    extention: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const folder = params?.folder as string;
    const photosPath = path.join(process.cwd(), "public/photos", folder);

    let photos: Photo[] = [];

    if (fs.existsSync(photosPath)) {
        const photosInFolder = fs.readdirSync(photosPath);

        photos = photosInFolder.map((photo) => {
            const extention = path.extname(photo);
            const name = path.basename(photo, extention);

            return {
                name,
                folder,
                extention,
            };
        });
    }

    return {
        props: {
            folder,
            photos,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const photosPath = path.join(process.cwd(), "public/photos");

    const folders = fs.readdirSync(photosPath);

    const paths = folders.map((folder) => ({
        params: { folder },
    }));

    return {
        paths,
        fallback: false, // Set to `true` or `blocking` if you expect new folders to be added
    };
};

export default function PhotosGaleryBackEnd({
    folder,
    photos,
}: PhotosGaleryBackProps) {
    return (
        <>
            {photos.map((photo) => (
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
