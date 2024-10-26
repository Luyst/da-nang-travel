import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=" HeaderContainer px-40 flex py-4 w-full  justify-between items-center absolute z-50 ">
            <Link to={`./`} className="LogoDanang ">
                <img
                    className="size-20 "
                    src="https://firebasestorage.googleapis.com/v0/b/da-nang-travel-812a5.appspot.com/o/main-logo.png?alt=media&token=e713a800-70a7-49ee-90ad-11fd4313d9b6"
                    alt="logo"
                />
            </Link>
            <NavBar />
        </header>
    );
}
