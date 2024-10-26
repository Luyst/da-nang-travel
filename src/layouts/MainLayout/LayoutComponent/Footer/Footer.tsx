import React from "react";
import "./Footer.scss";
export default function Footer() {
    return (
        <footer className="bg-strong text-main py-8 mt-20">
            <div className="px-40">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-xl text-main font-bold mb-2">
                            Đà Nẵng Travel
                        </h2>
                        <p className="text-sm text-main">
                            © {new Date().getFullYear()} Đà Nẵng Tourist.
                        </p>
                    </div>

                    <div className="wrapper flex flex-row justify-between mx-2 py-4 px-2 mt-20 border-t-2  border-dark-gray">
                        <div className="contact *:size-10 *:overflow-hidden flex flex-row gap-4 items-center cursor-pointer  *:gap-4 *:ease-in-out *:duration-500 *:bg-secondary-color *:rounded-full hover:*:w-32">
                            <a
                                href="https://www.instagram.com/duchuy_lux/"
                                target="__blank"
                                className="instagram button-container flex items-center  group hover:bg-white"
                            >
                                <i className="bx bxl-instagram  size-10 p-3 font-bold rounded-full flex items-center justify-center text-xl "></i>
                                <span className=" span-instagram font-semibold pe-2 -ms-3">
                                    Instagram
                                </span>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100028388523941"
                                target="__blank"
                                className="facebook button-container flex items-center  group hover:bg-white"
                            >
                                <i className="bx bxl-facebook size-10 p-3 font-bold rounded-full flex items-center justify-center text-xl"></i>
                                <span className="span-facebook  font-semibold pe-2 -ms-3">
                                    Facebook
                                </span>
                            </a>
                            <a
                                href="https://github.com/Luyst/da-nang-travel"
                                target="__blank"
                                className="github button-container flex items-center  group hover:bg-white "
                            >
                                <i className="bx bxl-github  size-10  p-3 font-bold rounded-full flex items-center justify-center text-xl"></i>
                                <span className="span-github  font-semibold pe-2 -ms-2">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
