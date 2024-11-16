import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import resim1 from "../assets/saçekimi/resim1.jpeg";
import resim2 from "../assets/saçekimi/resim2.jpeg";
import resim3 from "../assets/saçekimi/resim3.jpeg";
import resim4 from "../assets/saçekimi/resim4.jpeg";
import resim5 from "../assets/saçekimi/resim5.jpeg";
import resim6 from "../assets/saçekimi/resim6.jpeg";
import resim7 from "../assets/saçekimi/resim7.jpeg";
import resim8 from "../assets/saçekimi/resim8.jpeg";
import resim9 from "../assets/saçekimi/resim9.jpeg";
import resim10 from "../assets/saçekimi/resim10.jpeg";
import resim11 from "../assets/saçekimi/resim11.jpeg";
import resim12 from "../assets/saçekimi/resim12.jpeg";

const Services = () => {
    const FUEImages = [
        resim1, resim3, resim5, resim7, resim9, resim11
    ];

    const DHIImages = [
        resim2, resim4, resim6, resim8, resim10, resim12
    ];

    const [currentFUEIndex, setCurrentFUEIndex] = useState(0);
    const [currentDHIIndex, setCurrentDHIIndex] = useState(0);

    // Otomatik slider geçişi
    useEffect(() => {
        const intervalFUE = setInterval(() => {
            setCurrentFUEIndex((prevIndex) => (prevIndex + 1) % FUEImages.length);
        }, 1500); // Her 3 saniyede bir geçiş yapacak

        const intervalDHI = setInterval(() => {
            setCurrentDHIIndex((prevIndex) => (prevIndex + 1) % DHIImages.length);
        }, 1500); // Her 3 saniyede bir geçiş yapacak

        return () => {
            clearInterval(intervalFUE);
            clearInterval(intervalDHI);
        };
    }, []);

    return (
        <div className="w-full py-16 bg-gradient-to-r from-[#13253B] to-[#0A1F2D]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Başlık */}
                <h2 className="text-5xl font-extrabold text-center text-white mb-12 tracking-tight">
                    Saç Ekimi Tekniklerimiz
                </h2>

                {/* Hizmet Kartları (Yan Yana) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* FUE Saç Ekimi */}
                    <div
                        className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-3xl font-bold text-[#13253B] p-6 border-b border-gray-200">
                            FUE Saç Ekimi
                        </h3>
                        <p className="text-gray-700 p-6 text-sm lg:text-lg  border-t border-t-blue-500">
                            FUE (Foliküler Ünite Ekstraksiyonu) yöntemi, saç köklerinin tek tek alınarak doğal bir
                            görünüm sağlamak için ekildiği modern bir saç ekim tekniğidir.
                        </p>

                        {/* FUE Slider */}
                        <div className="relative mb-8">
                            <div className="overflow-hidden rounded-lg">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentFUEIndex * 100}%)`,
                                    }}
                                >
                                    {FUEImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="w-full flex-shrink-0"
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            <img
                                                src={image}
                                                alt={`FUE image ${index + 1}`}
                                                className="w-full h-72 object-cover  shadow-lg"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Gösterge (Indicator) */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {FUEImages.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${
                                            currentFUEIndex === index
                                                ? "bg-blue-600"
                                                : "bg-gray-300"
                                        } w-3 h-3 rounded-full cursor-pointer transition-all`}
                                        onClick={() => setCurrentFUEIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex  mb-4  justify-center items-center">
                            <button
                                className="px-4 py-2 border hover:bg-blue-500 hover:text-white transition-all  rounded border-blue-500 text-blue-500">Daha
                                Fazla Bilgi
                            </button>
                        </div>
                    </div>

                    {/* DHI Saç Ekimi */}
                    <div
                        className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-3xl font-bold text-[#13253B] p-6 border-b border-gray-200">
                            DHI Saç Ekimi
                        </h3>
                        <p className="text-gray-700 p-6 text-sm lg:text-lg  border-t border-t-blue-500">
                            DHI (Doğrudan Saç Ekimi) yöntemi, saç köklerinin özel bir kalemle doğrudan ekildiği ve daha yoğun bir görünüm kazandığı bir tekniktir.
                        </p>

                        {/* DHI Slider */}
                        <div className="relative mb-8">
                            <div className="overflow-hidden rounded-lg">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentDHIIndex * 100}%)`,
                                    }}
                                >
                                    {DHIImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="w-full flex-shrink-0"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img
                                                src={image}
                                                alt={`DHI image ${index + 1}`}
                                                className="w-full h-72 object-cover  shadow-lg"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Gösterge (Indicator) */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {DHIImages.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${
                                            currentDHIIndex === index
                                                ? "bg-blue-600"
                                                : "bg-gray-300"
                                        } w-3 h-3 rounded-full cursor-pointer transition-all`}
                                        onClick={() => setCurrentDHIIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex  mb-4  justify-center items-center">
                            <button className="px-4 py-2 border hover:bg-blue-500 hover:text-white transition-all  rounded border-blue-500 text-blue-500">Daha Fazla Bilgi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
