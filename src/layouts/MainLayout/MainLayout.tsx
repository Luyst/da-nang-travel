import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./LayoutComponent";

const MainLayout = () => {
    return (
        <div className="w-full h-dvh ">
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
