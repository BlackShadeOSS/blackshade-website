import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const NavBar = () => {
    return (
        <nav className="bg-coalblack px-2 pt-5 pb-10 rounded ">
            <div className="container flex flex-wrap items-center justify-start mx-auto">
                <h1 className="text-3xl">BlackShade</h1>
            </div>
        </nav>
    );
};

export default NavBar;
