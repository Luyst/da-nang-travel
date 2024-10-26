import React from "react";
import Button from "../Button";

const Tag: React.FC<CardType> = ({
    imageUrl,
    author,
    title,
    content,
    type,
    view,
    date,
    size = 3,
}) => {
    let titleSize: string = "";
    let textSize: string = "";
    let paddingSize: string = "";

    switch (size) {
        case 1:
            titleSize = "text-xs";
            textSize = "text-xs";
            paddingSize = "p-2";
            break;
        case 2:
            titleSize = "text-xs";
            textSize = "text-xs";
            break;
        case 3:
            titleSize = "text-xl";
            textSize = "text-md";
            paddingSize = "p-4";
            break;
        default:
            break;
    }

    return (
        <div className="cardContainer bg-white rounded-md flex  overflow-hidden max-w-96">
            <div className="thumbnail aspect-square h-20">
                <img
                    src={imageUrl}
                    alt="Tag-image"
                    className="card-image w-full h-full object-cover hover:scale-110     ease-in-out duration-300"
                />
            </div>
            <div
                className={`card-body ${paddingSize} flex flex-col gap-1 justify-center text-gray-500`}
            >
                <div className={`text-gray-500 font-bold ${titleSize}`}>
                    {title}
                </div>

                <div className="moreInfor flex flex-col gap-2">
                    <div
                        className={`text-gray-400 type flex flex-row gap-2 ${textSize}`}
                    >
                        <div>10N lượt xem</div>
                        <div>•</div>
                        <div>20/02/2020</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tag;
