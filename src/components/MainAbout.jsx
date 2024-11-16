import resim1 from '../assets/resim1.jpeg';
import resim2 from '../assets/resim2.jpeg';
import resim3 from '../assets/resim3.jpeg';
import { useState, useEffect } from 'react';

const MainAbout = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [resim1, resim2, resim3];

    // Otomatik slider için interval
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext(); // Belirli bir süre sonra otomatik geçiş yap
        }, 3000); // 3 saniyede bir geçiş

        return () => clearInterval(interval); // Component unmount olduğunda temizle
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full h-screen bg-[#F4F7FA]">
            <div className="container mx-auto px-6 py-12 border-t-4 rounded-t-2xl pt-12 border-t-blue-500">
                <div className="text-center md:text-left">
                    <h1 className="text-blue-500 text-xl font-semibold">BARQUES HAKKINDA</h1>
                    <div className="mt-8">
                        <h2 className="font-bold text-4xl md:text-5xl text-[#12253B]">
                            Değişen Hayat, <br /> Artan Güven
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    {/* Sol Taraf - Metinler */}
                    <div className="flex-1 md:mr-8">
                        <div className="flex justify-between border-b border-b-blue-500 py-2 mb-4">
                            <h3 className="text-lg text-[#12253B] font-semibold">Hakkımızda</h3>
                            <p className="text-gray-600">
                                Özel Barques Kliniği, saç ekimi ve estetik hizmetleri sunmaktadır.
                            </p>
                        </div>
                        <div className="flex justify-between border-b border-b-blue-500 py-2 mb-4">
                            <h3 className="text-lg text-[#12253B] font-semibold">Konumumuz</h3>
                            <p className="text-gray-600">
                                Polikliniğimiz, Sabiha Gökçen Havalimanı’na sadece 15 dakika uzaklıktadır.
                            </p>
                        </div>
                        <div className="flex justify-between border-b border-b-blue-500 py-2 mb-4">
                            <h3 className="text-lg text-[#12253B] font-semibold">Tedavilerimiz</h3>
                            <p className="text-gray-600">
                                Polikliniğimiz, saç ekimi ve estetik alanında hizmet vermektedir.
                            </p>
                        </div>
                        <div className="mt-8">
                            <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all">
                                Daha Fazla Göster
                            </button>
                        </div>
                    </div>

                    {/* Sağ Taraf - Image Slider */}
                    <div className="flex-1 flex-col mt-8 md:mt-0 flex justify-center items-center">
                        <div className="relative w-full md:w-[500px] h-[500px] overflow-hidden">
                            <div
                                className="w-full h-full flex transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Slider image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg shadow-lg flex-shrink-0"
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all"
                            >
                                ‹
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all"
                            >
                                ›
                            </button>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-4 h-4 rounded-full cursor-pointer ${
                                        index === currentIndex
                                            ? "bg-blue-500"
                                            : "bg-gray-300"
                                    } transition-all`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainAbout;
