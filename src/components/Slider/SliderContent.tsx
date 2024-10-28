import React from "react";

type Props = {};

export default function SliderContent({}: Props) {
    return (
        <section className="TitleContainer absolute space-y-5 top-0 px-6 sm:px-40 pt-40 z-10">
            <header className="MainTitle title text-white text-5xl font-bold">
                Khám Phá Đà Nẵng!
            </header>
            <main className="SubTitle text-xl text-white">
                Cùng chúng tôi khám phá vẻ đẹp và những điều thú vị của thành
                phố biển này.
            </main>
        </section>
    );
}
