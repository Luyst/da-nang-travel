import React, { useEffect, useState } from "react";

interface WeatherProps {
    city: string; // Props nhận thành phố từ bên ngoài
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [timeOfDay, setTimeOfDay] = useState<number>(0);

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=0d4a884d9ea345d595d75510242210&q=${city}&aqi=no`;

    const determineTimeOfDay = (localtime: string) => {
        const hour = new Date(localtime).getHours(); // Lấy giờ từ thời gian địa phương của API
        if (hour >= 6 && hour < 12) {
            return "0";
        } else if (hour >= 12 && hour < 14) {
            return "1"; // Buổi trưa
        } else if (hour >= 14 && hour < 18) {
            return "2";
        } else {
            return "3";
        }
    };

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setWeather(data);
                setLoading(false);

                // Xác định thời gian trong ngày dựa vào localtime từ API
                const localtime = data.location.localtime;
                setTimeOfDay(determineTimeOfDay(localtime));
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    const backgroundColors = [
        "from-blue-400 to-gray-400",
        "from-orange-300 to-red-400 ",
        "from-cyan-400 to-yellow-400",
        "from-blue-950 to-purple-700 ",
    ];

    return (
        <div
            className={`weather-widget bg-gradient-to-br  p-6  rounded-3xl  shadow-lg flex  ${backgroundColors[timeOfDay]} items-center justify-center w-full h-full`}
        >
            {loading ? (
                <p className="text-white">Đang tải dữ liệu thời tiết...</p>
            ) : weather ? (
                <div className="weather-content flex items-center space-x-8">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-semibold text-white">
                            {city}
                        </h3>
                        <p className="text-white text-lg">
                            Nhiệt độ:{" "}
                            <span className="font-bold">
                                {weather.current.temp_c}°C
                            </span>
                        </p>
                        <p className="text-white text-lg">
                            Gió: {weather.current.wind_kph} km/h
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img
                            src={`https:${weather.current.condition.icon}`}
                            alt={weather.current.condition.text}
                            className="w-24 h-24"
                        />
                    </div>
                </div>
            ) : (
                <p className="text-white">Không lấy được dữ liệu thời tiết.</p>
            )}
        </div>
    );
};

export default Weather;
