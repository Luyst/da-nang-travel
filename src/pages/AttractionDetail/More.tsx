import Card from "@/components/Card";
import React from "react";

export default function More({ attractions }) {
    return (
        <div className="MainContainer grid grid-cols-3 gap-6">
            {attractions.slice(0, 3).map((content, index) => (
                <div key={index}>
                    <Card
                        id={content.id}
                        imageUrl={content.image}
                        title={content.title}
                        aspect="square"
                        content={content.description}
                    />
                </div>
            ))}
        </div>
    );
}
