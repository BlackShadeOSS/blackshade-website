import Image from "next/image";

export default function Page() {
    return (
        <div className="font-sans bg-coalblack">
            <div
                className="flex-auto flex-col h-auto w-full text-center text-black grid grid-cols-1 gap-4 mx-auto"
                id="aboutMe"
            >
                <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary">
                            <span className="text-sky-500">Hi,</span> I'm Tomasz
                        </h1>
                        <p className=""></p>
                    </div>
                    <Image
                        src="/avatar-round.png"
                        alt="My avatar"
                        className="rounded-lg justify-self-center lg:justify-self-start"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}
