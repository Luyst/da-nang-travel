import React from "react";

interface Content {
    title: string;
    text: string[];
}

interface Attraction {
    id: string;
    title: string;
    image: string;
    description: string;
    mapLink?: string;
    content?: Content[];
}

export default function Main({ attraction }: { attraction: Attraction }) {
    return (
        <div className="MainLeft md:px-20  space-y-3">
            <p className="text-lg font-semibold italic">
                {attraction.description}
            </p>
            {attraction.content &&
                attraction.content.map((content, index) => (
                    <section className="ContentContainer space-y-4" key={index}>
                        <h2 className="Title text-xl font-bold">
                            {content.title}:
                        </h2>
                        <ul className="Infor space-y-4">
                            {content.text.map((text, idx) => (
                                <li className="list-inside text-base" key={idx}>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
        </div>
    );
}
