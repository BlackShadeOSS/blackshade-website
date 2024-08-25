import Image from "next/image";
import path from "path";
import { GetStaticProps } from "next";

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
    const photosPath = path.join(process.cwd(), "public/photos");
    const folder = params?.folder as string;

    const photos: Photo[] = [];

    const photosInFolder = await import(`../../public/photos/${folder}`);

    photosInFolder.forEach((photo: string) => {
        const extention = path.extname(photo);
        const name = path.basename(photo, extention);

        photos.push({
            name,
            folder,
            extention,
        });
    });

    return {
        props: {
            folder,
            photos,
        },
    };
};

export async function getStaticPaths() {
    const photosPath = path.join(process.cwd(), "public/photos");
    const folders = ["daitostories"];

    const paths = folders.map((folder: string) => ({
        params: { folder },
    }));

    return {
        paths,
        fallback: false,
    };
}

export default function PhotosGaleryBackEnd({
    folder,
    photos,
}: PhotosGaleryBackProps) {
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
