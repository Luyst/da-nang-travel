import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./LayoutComponent";
import { Home, Tour, RamenDining, Event } from "@mui/icons-material";

const navItems = [
    { path: "/", icon: <Home fontSize="large" /> },
    { path: "/attractions", icon: <Tour fontSize="large" /> },
    { path: "/foods", icon: <RamenDining fontSize="large" /> },
    { path: "/", icon: <Event fontSize="large" /> },
];
const MainLayout = () => {
    const location = useLocation();
    return (
        <div className="w-full h-dvh ">
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
            <div className="sticky flex bottom-0 z-10 bg-white divide-x divide-gray-300">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            to={item.path}
                            key={item.path}
                            className={`flex-1 flex justify-center items-center text-5xl p-4 transition-colors ${
                                isActive ? "text-primary" : "text-gray-600"
                            }`}
                        >
                            {item.icon}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MainLayout;
