import React from "react";

export default function Main({ attraction }) {
    return (
        <div className="MainLeft px-20 space-y-3 ">
            <p className="text-lg font-semibold italic ">
                {attraction.description}
            </p>
            {attraction.content &&
                attraction.content.map((content) => (
                    <section className="ContentContainer space-y-4">
                        <h2 className="Title text-xl font-bold">
                            {content.title}:
                        </h2>
                        <ul className="Infor space-y-4">
                            {content.text.map((text) => (
                                <li className="list-inside text-base ">
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
        </div>
    );
}
