import React, { useEffect, useState } from "react";
import { useAttraction } from "@/context/AttractionContext";
import Slider from "@/components/Slider";
import HomeAttraction from "./HomeAttraction";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/FirebaseConfig";
import Button from "@/components/Button";

const Home: React.FC = () => {
    const [home, setHome] = useState<any>(null); // Khởi tạo với null
    const { state } = useAttraction();
    const { loading, error, attractions } = state;

    useEffect(() => {
        const fetchAttractions = async () => {
            try {
                const homeCollection = collection(db, "home");
                const snapshot = await getDocs(homeCollection);

                const homeData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setHome(homeData[0]); // Lưu dữ liệu đầu tiên vào state
            } catch (error) {
                console.error("Error fetching attractions: ", error);
            }
        };

        fetchAttractions();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="HomePageContainer relative h-full sm:space-y-32">
            <div className="SliderContainer sm:h-dvh w-full sm:flex hidden">
                {home && home.banners ? ( // Kiểm tra xem home và home.banners có dữ liệu không
                    <Slider images={home.banners} interval={5000} />
                ) : (
                    <div>Loading banners...</div> // Hiển thị thông báo khi vẫn đang tải dữ liệu
                )}
            </div>
            <div
                className="z-20 h-dvh w-dvh sm:hidden relative
            "
            >
                <img
                    src="https://dulichkhampha24.com/wp-content/uploads/2020/06/cau-vang-da-nang-5-1.jpg"
                    alt=""
                    className="object-cover h-full "
                />
                <div className="Content">
                    <section className="TitleContainer absolute space-y-5 top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2  sm:px-40  z-10 items-center justify-center flex flex-col">
                        <header
                            className="MainTitle title text-white text-5xl font-extrabold w-full px-20 text-center
                        "
                        >
                            CHÀO MỪNG ĐẾN ĐÀ NẴNG
                        </header>
                        <div>
                            <Button size="large">Khám phá</Button>
                        </div>
                    </section>
                </div>
            </div>

            <HomeAttraction
                title="Những địa điểm nên đến"
                mainContent={attractions}
            />
        </div>
    );
};

export default Home;
