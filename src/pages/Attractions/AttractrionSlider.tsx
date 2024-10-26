import React, { useState, useEffect, useMemo } from "react";

interface SliderProps {
    images: ImageModel[];
    interval?: number;
}

const Slider: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNext = () => {
        setCurrentIndex((currentIndex) =>
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
    };
    const goToPrevious = () => {
        setCurrentIndex((currentIndex) =>
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, interval);
        return () => clearInterval(intervalId);
    }, [interval, currentIndex]);

    const memoizedImages = useMemo(() => {
        return images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                    className="w-full h-full object-cover"
                    src={image.image}
                    alt={image.title}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
                    {image.title}
                </div>
            </div>
        ));
    }, [images]);

    return (
        <div className="w-full h-full relative overflow-hidden " tabIndex={0}>
            <SliderContent />
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {memoizedImages}
            </div>
            <SliderControls
                onPrevious={goToPrevious}
                onNext={goToNext}
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
                images={images}
            />
        </div>
    );
};

export default Slider;
