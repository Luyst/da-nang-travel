import Card from "@/components/Card";
import { ImageModel } from "@/models";
import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import { RamenDining } from "@mui/icons-material";
type MainContainerProps = {
    title: string;
    subTitle?: string;
    mainContent: ImageModel[];
};

const filter = [
    {
        id: "filter1",
        label: "Filter 1",
        icon: <CheckCircleOutlineOutlinedIcon />,
        iconActive: <CheckCircleIcon />,
    },
    {
        id: "filter2",
        label: "Filter 2",
        icon: <ExploreOutlinedIcon />,
        iconActive: <ExploreIcon />,
    },
    {
        id: "filter3",
        label: "Filter 3",
        icon: <BeachAccessOutlinedIcon />,
        iconActive: <BeachAccessIcon />,
    },
    {
        id: "filter4",
        label: "Filter 4",
        icon: <RamenDiningOutlinedIcon />,
        iconActive: <RamenDining />,
    },
];

export default function HomeHighLights({
    title,

    mainContent,
}: MainContainerProps) {
    const [activeFilter, setActiveFilter] = useState<string>("filter1");
    return (
        <main className="HomeFoodMain px-8" id="HomeFoodMain">
            <section className="ContentContainer space-y-10 px-32 py-20 ">
                <div className="TitleContainer space-y-2 ">
                    <div className="SubTitle text-xl   bg-gradient-to-r inline-block to-red-300 from-primary text-transparent bg-clip-text">
                        03/ Highlights
                    </div>
                    <div className="MainTitle text-6xl  text-baseText">
                        {title}
                    </div>
                </div>
                <main className="">
                    <div className="filterContainer">
                        <div className="FilterTitle">Bộ lọc</div>
                        <div className="filterMain flex">
                            {filter.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveFilter(item.id)}
                                    style={{
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {activeFilter === item.id
                                        ? item.iconActive
                                        : item.icon}{" "}
                                    {/* Hiển thị icon tương ứng */}
                                    <span>{item.label}</span>{" "}
                                    {/* Hiển thị label */}
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </section>
        </main>
    );
}
