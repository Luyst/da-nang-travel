import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=" HeaderContainer px-40 flex py-4 w-full  justify-between items-center absolute z-50 ">
            <Link to={`./`} className="LogoDanang ">
                <img
                    className="size-20 "
                    src="src\assets\main-logo.png"
                    alt="123123"
                />
            </Link>
            <NavBar />
        </header>
    );
}
