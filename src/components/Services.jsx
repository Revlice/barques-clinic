import React from "react";
import Cards from "../components/Cards.jsx";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-t from-[#eaf4ff] via-[#f4f7fa] to-[#dbe8ff] py-20">
            <div className="container mx-auto px-6">
                {/* Başlık ve Açıklama */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#12253B] mb-4">
                        Hizmetlerimiz
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mx-auto max-w-3xl">
                        Sağlık hizmetlerimizde en son teknoloji ve uzman kadromuz ile hastalarımıza
                        en iyi bakımı sunuyoruz. Modern tıp teknikleriyle sağlığınızı daha ileriye taşıyoruz.
                    </p>
                </div>

                {/* Hizmet Kartları */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, staggerChildren: 0.3 },
                        },
                    }}
                >
                    <Cards
                        imageURL="https://estoriaclinic.com.tr/wp-content/uploads/2024/02/DHI-Hair-Transplant-Estoria-International-Clinic-2-1.jpg"
                        title="Saç Ekimi"
                        description="Doğal ve kalıcı sonuçlar için en son DHI saç ekimi teknikleri ile saç dökülmesini tedavi ediyoruz."
                    />
                    <Cards
                        imageURL="https://estoriaclinic.com.tr/wp-content/uploads/2024/02/Face-Aesthetics-1.jpg"
                        title="Medikal Estetik"
                        description="Cilt yenileme, botoks, dolgu ve daha pek çok estetik uygulama ile gençleşin."
                    />
                    <Cards
                        imageURL="https://estoriaclinic.com.tr/wp-content/uploads/2024/08/Hollywood-Smile-After-1-1.jpg"
                        title="Diş Tedavileri"
                        description="Hollywood gülüşü ve estetik diş tedavileri ile diş sağlığınızı yenileyin."
                    />
                </motion.div>

                {/* Görüntüle Butonu */}
                <div className="text-center mt-16">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/services"
                        className="inline-block text-lg font-semibold text-[#12253B] border-2 border-[#12253B] py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#12253B] hover:text-white"
                    >
                        Tüm Hizmetlerimizi Görüntüle
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Services;
