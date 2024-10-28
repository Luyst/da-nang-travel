import Card from "@/components/Card";
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

export default function More({ attractions }: { attractions: Attraction[] }) {
    return (
        <div className="MainContainer grid grid-cols-1 md:grid-cols-3 gap-6">
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
