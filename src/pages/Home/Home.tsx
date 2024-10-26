import React, { useEffect, useState } from "react";
import home from "@/assets/data/home.json"; // Đường dẫn đến tệp JSON của bạn
import { useAttraction } from "@/context/AttractionContext";
import Slider from "@/components/Slider"; // Đảm bảo bạn nhập đúng đường dẫn đến component Slider
import HomeAttraction from "./HomeAttraction";
import HomeFood from "./HomeFood";
import HomeHighLights from "./HomeHighLights";

const Home: React.FC = () => {
    const { state } = useAttraction();
    const { attractions, loading, error } = state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className="HomePageContainer relative h-full space-y-32">
            <div className="SliderContainer h-dvh w-full ">
                <Slider images={home.banners} interval={5000} />
            </div>

            <HomeAttraction
                title="Những địa điểm nên đến"
                mainContent={attractions}
            />
        </div>
    );
};

export default Home;
