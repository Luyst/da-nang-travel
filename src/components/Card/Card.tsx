import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
    imageUrl: string;
    title: string;
    content?: string;
    aspect?: "horizontal" | "vertical" | "square"; // Thêm loại cho thuộc tính aspect
    id: string;
};

const Card: React.FC<CardProps> = ({
    imageUrl,
    id,
    title,
    content,
    aspect = "vertical", // Mặc định là vertical
}) => {
    // Đặt tỷ lệ khung hình dựa trên thuộc tính aspect
    let aspectRatioClass;
    switch (aspect) {
        case "horizontal":
            aspectRatioClass = "aspect-[3/1]";
            break;
        case "square":
            aspectRatioClass = "aspect-square";
            break;
        case "vertical":
            aspectRatioClass = "aspect-[6/7]";
            break;
        default:
            aspectRatioClass = "";
            break;
    }

    return (
        <Link
            to={`/attractions/${id}`}
            className="CardCotainer rounded-lg overflow-hidden shadow-lg "
            key={id}
        >
            <div className={` overflow-hidden   aspect-video`}>
                <img
                    src={imageUrl}
                    alt="Card-image"
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out   "
                    loading="lazy"
                />
            </div>
            <div className="px-4 py-6  bg-main  bg-opacity-40  w-full space-y-3 min-h-44">
                <div className="text-xl font-semibold hover:underline cursor-pointer">
                    {title}
                </div>
                {content && (
                    <p className=" leading-6 tracking-wide  line-clamp-3">
                        {content}
                    </p>
                )}
            </div>
        </Link>
    );
};

export default Card;
