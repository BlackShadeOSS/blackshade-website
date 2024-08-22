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
                        {" "}
                        I am a beginner software developer from Poland.
                    </p>

                    <p className="text-xl text-black-primary dark:text-white-primary">
                        {" "}
                        I'm a leader of ΩmegaSpaceDev team.
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
        </div>
    );
}
