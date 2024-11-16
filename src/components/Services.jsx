import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import resim1 from "../assets/saçekimi/resim1.jpeg"
import resim2 from "../assets/saçekimi/resim2.jpeg"
import resim3 from "../assets/saçekimi/resim3.jpeg"
import resim4 from "../assets/saçekimi/resim4.jpeg"
import resim5 from "../assets/saçekimi/resim5.jpeg"
import resim6 from "../assets/saçekimi/resim6.jpeg"
import resim7 from "../assets/saçekimi/resim7.jpeg"
import resim8 from "../assets/saçekimi/resim8.jpeg"
import resim9 from "../assets/saçekimi/resim9.jpeg"
import resim10 from "../assets/saçekimi/resim10.jpeg"
import resim11 from "../assets/saçekimi/resim11.jpeg"
import resim12 from "../assets/saçekimi/resim12.jpeg"

const Services = () => {
    const FUEImages = [
        resim1,resim3,resim5,resim7,resim9,resim11
    ];

    const DHIImages = [
        resim2,resim4,resim6,resim8,resim10,resim12
    ];

    const [currentFUEIndex, setCurrentFUEIndex] = useState(0);
    const [currentDHIIndex, setCurrentDHIIndex] = useState(0);

    // Otomatik FUE slider geçişi
    useEffect(() => {
        const intervalFUE = setInterval(() => {
            setCurrentFUEIndex((prevIndex) => (prevIndex + 1) % FUEImages.length);
        }, 2000);

        const intervalDHI = setInterval(() => {
            setCurrentDHIIndex((prevIndex) => (prevIndex + 1) % DHIImages.length);
        }, 2000);

        return () => {
            clearInterval(intervalFUE);
            clearInterval(intervalDHI);
        }; // Temizleme işlemi
    }, []);

    return (
        <div className="w-full py-16 bg-[#F1F5F9]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Başlık */}
                <h2 className="text-4xl font-bold text-center text-[#13253B] mb-12">
                    Tekniklerimiz
                </h2>

                {/* Hizmet Kartları (Yan Yana) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* FUE Saç Ekimi */}
                    <div className="shadow-blue-800  bg-logoColor rounded-lg shadow-xl p-6">
                        <h3 className="text-3xl font-semibold text-white mb-4">
                            FUE Saç Ekimi
                        </h3>
                        <p className="text-gray-300 mb-6 text-sm">
                            FUE (Foliküler Ünite Ekstraksiyonu) yöntemi, saç köklerinin tek tek
                            alınarak doğal bir görünüm sağlayacak şekilde ekildiği modern bir saç
                            ekim tekniğidir.
                        </p>

                        {/* FUE Slider */}
                        <div className="relative mb-8">
                            <div className="overflow-hidden">
                                {/* Görsellerin kayması */}
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
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img
                                                src={image}
                                                alt={`FUE image ${index + 1}`}
                                                className="w-full h-48 object-cover"
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
                                        } w-3 h-3 rounded-full cursor-pointer`}
                                        onClick={() => setCurrentFUEIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DHI Saç Ekimi */}
                    <div className="shadow-blue-800  bg-logoColor rounded-lg shadow-xl p-6">
                        <h3 className="text-3xl font-semibold text-white mb-4">
                            DHI Saç Ekimi
                        </h3>
                        <p className="text-gray-300 mb-6 text-sm">
                            DHI (Doğrudan Saç Ekimi) yöntemi, saç köklerinin özel bir kalemle
                            doğrudan ekildiği ve saçların daha yoğun bir görünüm kazandığı bir
                            tekniktir.
                        </p>

                        {/* DHI Slider */}
                        <div className="relative mb-8">
                            <div className="overflow-hidden">
                                {/* Görsellerin kayması */}
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
                                                className="w-full h-48 object-cover"
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
                                        } w-3 h-3 rounded-full cursor-pointer`}
                                        onClick={() => setCurrentDHIIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
