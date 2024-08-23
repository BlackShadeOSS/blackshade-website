import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const NavBar = () => {
    return (
        <nav className="bg-coalblack px-2 pt-5 pb-10 rounded ">
            <div className="container flex flex-wrap items-center justify-center lg:justify-between mx-auto">
                <h1 className="text-3xl">BlackShade</h1>
                <ul className="flex flex-wrap items-center justify-center lg:justify-around gap-2 lg:gap-0 mt-4 lg:mt-0">
                    <li>
                        <Link href="/">
                            <span className="px-3 py-2 text-white text-2xl">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <span className="px-3 py-2 text-white text-2xl">
                                Projects
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/omegaspaceteam">
                            <span className="px-3 py-2 text-white text-2xl">
                                OmegaSpaceTeam
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact">
                            <span className="px-3 py-2 text-white text-2xl">
                                Contact
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
