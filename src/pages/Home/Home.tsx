import React, { useEffect, useState } from "react";
import { useAttraction } from "@/context/AttractionContext";
import Slider from "@/components/Slider";
import HomeAttraction from "./HomeAttraction";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/FirebaseConfig";

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
        <div className="HomePageContainer relative h-full space-y-32">
            <div className="SliderContainer h-dvh w-full">
                {home && home.banners ? ( // Kiểm tra xem home và home.banners có dữ liệu không
                    <Slider images={home.banners} interval={5000} />
                ) : (
                    <div>Loading banners...</div> // Hiển thị thông báo khi vẫn đang tải dữ liệu
                )}
            </div>

            <HomeAttraction
                title="Những địa điểm nên đến"
                mainContent={attractions}
            />
        </div>
    );
};

export default Home;
