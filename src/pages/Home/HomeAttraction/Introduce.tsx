import Button from "@/components/Button";
import React from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import ExploreIcon from "@mui/icons-material/Explore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Weather from "@/components/Weather";

export default function Introduce() {
    return (
        <header className="IntroduceContaienr sm:flex  sm:px-32   ">
            <div className="LeftContainer sm:w-2/3 pe-40 space-y-8 hidden sm:block ">
                <div className="TitleContainer space-y-8">
                    <div className="MainTitleContainer text-primary text-7xl font-bold">
                        Đà Nẵng
                    </div>
                    <div className="SubTitleContainer text-xl  font-normal">
                        Nơi hội tụ vẻ đẹp của những món ăn đặc sản thơm ngon
                        cùng với các địa điểm du lịch hấp dẫn, Đà Nẵng mang đến
                        sự kết hợp hoàn hảo giữa văn hóa ẩm thực phong phú và
                        những cảnh quan tuyệt đẹp.
                    </div>
                </div>

                <div className="ButtonContainer sm:flex gap-6 hidden">
                    <Button
                        color="bg-pastel-green text-base font-semibold bg-opacity-50"
                        size="large"
                        onClick={() => {
                            const element =
                                document.getElementById("HomeAttractionMain");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <ExploreIcon className="text-green-700 me-3" />
                        Địa điểm nên đến
                        <ArrowForwardIcon fontSize="small" className="ms-3" />
                    </Button>
                    <Button
                        color="bg-pastel-yellow text-base font-semibold bg-opacity-70"
                        size="large"
                        onClick={() => {
                            const element =
                                document.getElementById("HomeFoodMain");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <RamenDiningIcon className="text-yellow-700 me-3 " />
                        Món ăn nên thử
                        <ArrowForwardIcon fontSize="small" className="ms-3" />
                    </Button>
                </div>
            </div>
            <section className="RightContainer sm:w-1/3 pt-32 sm:pt-0 rounded-lg shadow-lg">
                <Weather city="Đà Nẵng" />
            </section>
        </header>
    );
}
