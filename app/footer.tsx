import "./globals.css";

const Footer = () => {
    return (
        <footer>
            <div className="flex-auto flex-row h-auto bg-coalblack w-full text-center text-white grid grid-cols-1 gap-4 px-32 py-12 mt-32">
                <span className="text-2xl text-center">
                    Copyright &copy; 2024 BlackShade
                </span>
                <span className="text-base text-center">
                    Made by: BlackShade
                </span>
            </div>
        </footer>
    );
};

export default Footer;
