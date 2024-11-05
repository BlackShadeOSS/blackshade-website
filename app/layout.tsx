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
        <html lang="pl" className="scroll-smooth overflow-x-hidden">
            <body className="text-white">
                <div className="h-full w-full bg-coalblack">
                    <div className="container mx-auto flex h-full min-h-screen flex-col px-8 py-4 bg-coalblack">
                        <NavBar />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
