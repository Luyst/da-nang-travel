import React from "react";
import { useAttraction } from "@/context/AttractionContext";
import Card from "@/components/Card";

interface Attraction {
    id: string;
    title: string;
    image: string;
    description: string;
    mapLink?: string;
}

const Attraction: React.FC = () => {
    const { state } = useAttraction();
    const { attractions, loading, error } = state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className="AttractionPageContainer space-y-8 pt-6 sm:pt-28 ">
            <div className="BannerHeader mx-8 overflow-hidden hidden sm:block rounded-3xl">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/da-nang-travel-812a5.appspot.com/o/attractions%2F113030473.avif?alt=media&token=a991a260-d123-4232-9742-bda1ab7ceea1"
                    alt="123"
                    className="w-full rounded-3xl shadow-lg object-cover"
                />
            </div>
            <div className="text-center px-3">
                <h1 className="text-4xl font-bold text-primary-color">
                    Địa điểm du lịch nổi tiếng
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Đà Nẵng là thiên đường du lịch với nhiều địa điểm đẹp và đặc
                    sắc.
                </p>
            </div>

            <div className=" px-8 md:px-40 ">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 ">
                    {attractions.map((attraction) => (
                        <Card
                            id={attraction.id}
                            key={attraction.id} // Sử dụng id làm key
                            title={attraction.title}
                            imageUrl={attraction.image}
                            content={attraction.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attraction;
