import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import Footer from "./footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BlackShade Personal Website",
    description: "Personal website of BlackShade",
    creator: "Tomasz Tarnawski",
    publisher: "OmegaSpaceDev",
    icons: {
        icon: "/avatar-round.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="pl"
            className="scroll-smooth overflow-x-hidden bg-coalblack"
        >
            <body className="">
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
