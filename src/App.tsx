import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ScrollToTop from "@/components/ScrollTotop";
import { AttractionProvider } from "@/context/AttractionContext";
import {
    Home,
    Foods,
    Attractions,
    Activities,
    AttractionDetail,
} from "@/pages";

const AppRouter = () => {
    return (
        <AttractionProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="foods" element={<Foods />} />
                        <Route path="attractions" element={<Attractions />} />
                        <Route
                            path="attractions/:attractionId"
                            element={<AttractionDetail />}
                        />
                        <Route path="activities" element={<Activities />} />
                    </Route>
                </Routes>
            </Router>
        </AttractionProvider>
    );
};

export default AppRouter;
