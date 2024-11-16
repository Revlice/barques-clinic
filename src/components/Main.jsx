import { motion } from 'framer-motion';
import { FaUserEdit, FaWhatsapp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import resim1 from '../assets/WhatsApp Image 2024-11-16 at 16.31.02.jpeg';
import resim2 from '../assets/WhatsApp Image 2024-11-16 at 16.31.03.jpeg';
import resim3 from '../assets/WhatsApp Image 2024-11-16 at 16.31.03 (1).jpeg';
import resim4 from '../assets/WhatsApp Image 2024-11-16 at 16.31.03 (2).jpeg';

const Main = () => {
    const navigate = useNavigate();

    // Resim slider için state
    const images = [resim1, resim2, resim3, resim4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3 saniyede bir resim değişimi

        return () => clearInterval(interval); // Component unmount olduğunda interval temizlenir
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Arka Plan Image Slider */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <img
                    src={images[currentImageIndex]}
                    alt="slider image"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
                />
            </div>

            {/* İçerik */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 sm:px-10 md:px-16 space-y-8 bg-black bg-opacity-50">
                {/* Başlık */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">
                    Barques Clinic'e Hoş Geldiniz
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed text-gray-200">
                    Sağlıkta güven ve yeniliği bir arada sunan bir klinik deneyimi.
                </p>

                {/* Liste */}
                <ul className="space-y-4 text-left max-w-3xl mx-auto">
                    <li className="flex items-center space-x-4">
                        <TiTick className="text-blue-500 text-2xl" />
                        <span>Deneyimli ve uzman kadro</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <TiTick className="text-blue-500 text-2xl" />
                        <span>Güvenilir ve yenilikçi tedavi yöntemleri</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <TiTick className="text-blue-500 text-2xl" />
                        <span>Hasta memnuniyeti odaklı hizmet</span>
                    </li>
                </ul>

                {/* Randevu Butonu */}
                <button
                    onClick={() => navigate("/contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
                >
                    <FaUserEdit className="inline-block mr-2 text-lg" />
                    Randevu Alın
                </button>
            </div>

            {/* WhatsApp Butonu */}
            <div className="fixed bottom-6 right-6 z-50">
                <a href="https://wa.me/905060326301" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        <FaWhatsapp className="text-2xl" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Main;
