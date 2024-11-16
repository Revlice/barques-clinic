import React from 'react';
import video from '../assets/Banner.mp4';
import { motion } from 'framer-motion';
import { FaUserEdit, FaWhatsapp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import {useNavigate} from "react-router-dom";

const Main = () => {
    // Animasyon Ayarları
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
 const navigate = useNavigate();
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Arka Plan Video */}
            <video
                className="absolute top-0 left-0 w-full pointer-events-none h-full object-cover filter brightness-75"
                autoPlay loop muted style={{touchAction: 'none'}}>
                <source src={video} className="pointer-events-none" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-white"></div>

            {/* İçerik */}
            <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 sm:px-10 md:px-16 space-y-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}>

                {/* Başlık ve Açıklama */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg"
                    variants={itemVariants}>
                    Barques Clinic'e Hoş Geldiniz
                </motion.h1>
                <motion.h3
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                    variants={itemVariants}>
                    Kişiselleştirilmiş En Yeni Tedavi Yöntemleri
                </motion.h3>
                <motion.p
                    className="text-sm sm:text-md md:text-lg text-blue-100 max-w-2xl mx-auto"
                    variants={itemVariants}>
                    Tıbbı Hizmetler ve Bütünsel Sağlık
                </motion.p>

                {/* Liste */}
                <motion.div
                    className=" text-left p-6 rounded-xl border-t-4 border-blue-500 max-w-3xl w-full"
                    variants={itemVariants}>
                    <ul className="space-y-4">
                        <motion.li className="flex items-center" whileHover={{scale: 1.05}}>
                            <TiTick className="text-blue-400 text-2xl mr-3"/>
                            <span>Deneyimli ve uzman kadro</span>
                        </motion.li>
                        <motion.li className="flex items-center" whileHover={{scale: 1.05}}>
                            <TiTick className="text-blue-400 text-2xl mr-3"/>
                            <span>Güvenilir ve yenilikçi tedavi yöntemleri</span>
                        </motion.li>
                        <motion.li className="flex items-center" whileHover={{scale: 1.05}}>
                            <TiTick className="text-blue-400 text-2xl mr-3"/>
                            <span>Hasta memnuniyeti odaklı hizmet</span>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Randevu Butonu */}
                <motion.button onClick={() => navigate("/contact")}
                               className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center"
                               whileHover={{scale: 1.1}}
                               variants={itemVariants}>
                    <FaUserEdit className="mr-3 text-2xl"/> Randevu Alın
                </motion.button>
            </motion.div>

            {/* WhatsApp Butonu */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{type: "spring", stiffness: 120}}>
                <a href="https://wa.me/905060326301" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transform transition-all duration-300 hover:scale-110">
                        <FaWhatsapp className="text-3xl"/>
                    </button>
                </a>
            </motion.div>
        </div>
    );
};

export default Main;
