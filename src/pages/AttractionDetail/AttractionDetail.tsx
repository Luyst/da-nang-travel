import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAttraction } from "@/context/AttractionContext";
import Main from "./Main";
import More from "./More";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ArrowBack } from "@mui/icons-material";
export default function AttractionDetail() {
    const navigate = useNavigate();
    const { attractionId } = useParams();
    const { state } = useAttraction();
    const { attractions } = state;

    const attraction = attractions.find((a) => a.id === attractionId);
    if (!attraction) return <div>Loading...</div>;

    return (
        <div className="AttractionPageContainer space-y-8 md:pt-28 ">
            <div className="BannerHeader md:mx-8 md:h-[36rem] mb-28 flex items-center shadow-lg md:rounded-3xl overflow-hidden ">
                <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full object-cover"
                />
                <div
                    onClick={() => navigate(-1)}
                    className="z-10 text-gray-50 absolute top-0 translate-x-3 translate-y-3 rounded-full bg-primary aspect-square h-10 flex items-center justify-center"
                >
                    <ArrowBack />
                </div>
            </div>
            <div className="md:px-40 px-8">
                <div className="Title flex flex-col gap-3">
                    <h1 className="text-3xl md:text-7xl text-primary font-semibold">
                        {attraction.title}
                    </h1>
                    <a
                        href={attraction.mapLink}
                        target="__blank"
                        className="text-baseText hover:text-cyan-900 text-center items-center  flex "
                    >
                        <LocationOnIcon fontSize="medium" />
                        <div className="font-semibold">Xem bản đồ</div>
                    </a>
                </div>

                <div className="devide h-px mt-3 bg-gray-300 w-full"></div>
                <main className="MainContain py-10 space-y-20">
                    <Main attraction={attraction} />
                    <div className="devide h-px mt-3 bg-gray-300 w-full"></div>
                    <div className="MoreTitle text-4xl font-bold text-primary-color text-center ">
                        Các địa điểm khác
                    </div>
                    <More attractions={attractions} />
                </main>
            </div>
        </div>
    );
}
