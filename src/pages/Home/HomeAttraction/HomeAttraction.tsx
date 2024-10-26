import Card from "@/components/Card";
import React, { useState } from "react";
import Introduce from "./Introduce";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type ImageModel = {
    id: string;
    image: string;
    title: string;
    description?: string;
};

type MainContainerProps = {
    title: string;
    subTitle?: string;
    mainContent: ImageModel[];
};

export default function HomeAttraction({
    title,
    mainContent,
}: MainContainerProps) {
    const [currentItems, setCurrentItems] = useState(3);

    return (
        <section className="HomeAttrationContainer  px-8 space-y-32 h-full">
            <Introduce />

            <main className="HomeAttractionMain" id="HomeAttractionMain">
                <section className="ContentContainer space-y-16 px-32 py-16 bg-pastel-blue rounded-3xl shadow-lg">
                    <div className="TitleContainer space-y-2">
                        <div className="SubTitle text-xl font-  bg-gradient-to-r to-orange-500 from-blue-500 inline-block text-transparent bg-clip-text">
                            01/ Attractions
                        </div>
                        <div className="MainTitle text-6xl text-baseText font-semibold">
                            {title}
                        </div>
                    </div>
                    <motion.main
                        className="MainContainer grid grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {mainContent
                            .slice(0, currentItems)
                            .map((content, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card
                                        id={content.id}
                                        imageUrl={content.image}
                                        title={content.title}
                                        aspect="square"
                                        content={content.description}
                                    />
                                </motion.div>
                            ))}
                    </motion.main>

                    {currentItems < 9 ? (
                        <div
                            className="flex justify-center animate-bounce"
                            onClick={() => setCurrentItems(currentItems + 3)}
                        >
                            <Button>
                                Hiển thị thêm
                                <div className="group-">
                                    <KeyboardArrowDownIcon />
                                </div>
                            </Button>
                        </div>
                    ) : (
                        <Link
                            to="./attractions"
                            className=" flex justify-center"
                        >
                            <Button>Xem tất cả</Button>
                        </Link>
                    )}
                </section>
            </main>
        </section>
    );
}
