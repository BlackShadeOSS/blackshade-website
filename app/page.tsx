import Image from "next/image";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-12 pb-8">
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2"
                id="aboutMe"
            >
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary">
                        Hi, I'm Tomasz
                    </h1>
                    <p className="text-xl text-black-primary dark:text-white-primary">
                        I am a beginner software developer from Poland. I mainly
                        focus on web development and game development. Most of
                        my time I use languages like JavaScript, TypeScript, C#
                        and a little of Rust.
                    </p>

                    <p className="text-xl text-black-primary dark:text-white-primary">
                        In the internet I am known as BlackShade or
                        BlackShadeOSS. I'm a leader of OmegaSpace team, about
                        which you can read below.
                    </p>
                </div>
                <Image
                    src="/avatar-round.png"
                    alt="My avatar"
                    className="order-first mx-auto w-9/12 lg:order-1 lg:mr-0 lg:w-fit lg:text-right"
                    width={350}
                    height={350}
                />
            </section>
            <section
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2"
                id="aboutMe"
            >
                <Image
                    src="/OSS-logo.png"
                    alt="My avatar"
                    className=" mx-auto w-9/12 lg:order-0 lg:ml-0 lg:w-fit lg:text-left"
                    width={350}
                    height={350}
                />
                <div className="flex flex-col gap-4 text-right">
                    <h1 className="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary">
                        OmegaSpace Team
                    </h1>
                    <p className="text-xl text-black-primary dark:text-white-primary">
                        OmegaSpace Team is a multipart group of people
                        interested in software development and engineering.
                    </p>

                    <p className="text-xl text-black-primary dark:text-white-primary text-left">
                        We are made up of two departments which are listed
                        below:
                        <ul className="mb-4 ml-8 list-disc text-xl text-black-primary dark:text-white-primary text-left">
                            <li>
                                OmegaSpaceDev is focused on software development
                                and game development.
                            </li>
                            <li>
                                OmegaSpaceSystems is focused on aerospace and
                                rocket engineering.
                            </li>
                        </ul>
                    </p>
                </div>
            </section>
        </div>
    );
}
