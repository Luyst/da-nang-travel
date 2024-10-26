import { useState, useEffect } from "react";

const useSlider = (images: string[], interval: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, interval);
        return () => clearInterval(intervalId);
    }, [goToNext, interval]);

    return { currentIndex, goToNext, goToPrevious };
};

export default useSlider;
