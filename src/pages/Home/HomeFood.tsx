import Card from "@/components/Card";
import React from "react";

type MainContainerProps = {
    title: string;
    subTitle?: string;
    mainContent: ImageModel[];
};

export default function HomeFood({
    title,

    mainContent,
}: MainContainerProps) {
    return (
        <main className="HomeFoodMain px-8" id="HomeFoodMain">
            <section className="ContentContainer space-y-10 px-32 py-20 bg-pastel-yellow rounded-3xl shadow-lg">
                <div className="TitleContainer space-y-2 text-center">
                    <div className="SubTitle text-xl  text-center  bg-gradient-to-r inline-block to-blue-300 from-green-800 text-transparent bg-clip-text">
                        02/ Local Foods
                    </div>
                    <div className="MainTitle text-6xl text-center text-baseText font-medium">
                        {title}
                    </div>
                </div>
                <main className="MainContainer flex gap-2">
                    {/* <div className="leftContainer w-2/5 h-full">
                        <Card
                            imageUrl={mainContent[0].image}
                            title={mainContent[0].title}
                            aspect="square"
                        />
                    </div>
                    <div className="rightContainer w-3/5 p-2 flex flex-col justify-between space-y-3 -translate-y-2">
                        {mainContent.slice(1, 3).map((content) => (
                            <Card
                                imageUrl={content.image}
                                title={content.title}
                                aspect="horizontal"
                            />
                        ))}
                    </div> */}
                </main>
            </section>
        </main>
    );
}
