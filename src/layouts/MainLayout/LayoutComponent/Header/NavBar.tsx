import React from "react";
import { Link, useLocation } from "react-router-dom";

const config = [
    { name: "Trang Chủ", path: "/" },
    { name: "Điểm Tham Quan", path: "/attractions" },
    { name: "Ẩm Thực", path: "/foods" },
    { name: "Hoạt Động", path: "/activities" },
];
export default function NavBar({ dark = false }) {
    const currentPage = useLocation().pathname;
    const textColor =
        useLocation().pathname == "/" ? "text-white" : "text-gray-700";
    return (
        <div className="MenuBar flex gap-6">
            {config.map((con) => (
                <Link
                    className={` title text-xl   ${
                        currentPage === con.path
                            ? "underline-offset-8 font-bold underline text-primary"
                            : `font-semibold  ${textColor}`
                    }`}
                    to={con.path}
                >
                    {con.name}
                </Link>
            ))}
        </div>
    );
}
