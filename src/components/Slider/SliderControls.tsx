import React from "react";
import { ImageModel } from "@/models";

type SliderControlsProps = {
    onPrevious: () => void;
    onNext: () => void;
    setCurrentIndex: (index: number) => void;
    currentIndex: number;
    images: ImageModel[];
};

const SliderControls: React.FC<SliderControlsProps> = ({
    onPrevious,
    onNext,
    setCurrentIndex,
    currentIndex,
    images,
}) => {
    return (
        <div className="absolute w-full sm:px-40 py-14 px-6 bottom-0 bg-black bg-opacity-30">
            {/* Thanh ngang di chuyển theo index */}
            <div className=" absolute top-0 left-40 right-40  flex items-center bg-gray-500 h-px">
                <div
                    className=" h-0.5 rounded-full bg-white transition-transform duration-500"
                    style={{
                        width: `${100 / images.length}%`,
                        transform: `translateX(${currentIndex * 100}%)`,
                    }}
                ></div>
            </div>

            {/* Các title*/}
            <div className="flex justify-between space-x-4 ">
                {images.map((image, index) => (
                    <div
                        key={"title" + index}
                        onClick={() => setCurrentIndex(index)}
                        className={` space-y-4 cursor-pointer w-1/5 `}
                    >
                        <div
                            className={` text-lg text-left w-full transition-all duration-300 text-white ${
                                index === currentIndex ? "font-bold " : ""
                            }`}
                        >
                            0{index + 1}
                        </div>
                        <div
                            className={` text-lg text-left  transition-all duration-300 text-white ${
                                index === currentIndex
                                    ? "font-bold text-pastel"
                                    : ""
                            }`}
                        >
                            {image.title}
                        </div>
                        <div className="DescriptionContainer text-sm text-white line-clamp-2">
                            {image.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderControls;
