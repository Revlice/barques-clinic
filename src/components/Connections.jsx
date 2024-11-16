import React from "react";
import { FiPhoneCall, FiInfo, FiHeadphones } from "react-icons/fi";
import { motion } from "framer-motion";

const Connections = () => {
    return (
        <div className="w-full py-20 ">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <h2 className="text-4xl font-bold text-center text-[#13253B] mb-16">
                    Hızlı Bağlantılar
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            Icon: FiHeadphones,
                            title: "Ücretsiz Danışmanlık Alın",
                            description:
                                "Uzmanlarımızdan ücretsiz danışmanlık alarak doğru tedavi hakkında bilgi edinirsiniz.",
                            linkText: "Hemen Başlayın",
                        },
                        {
                            Icon: FiPhoneCall,
                            title: "Sizi Geri Arayalım",
                            description:
                                "Bize bırakın, sizi en kısa sürede arayalım ve ihtiyaçlarınıza göre bir plan oluşturalım.",
                            linkText: "Bizi Arayın",
                        },
                        {
                            Icon: FiInfo,
                            title: "Sıkça Sorulan Sorular",
                            description:
                                "Hizmetlerimiz ve tedavi süreçlerimiz hakkında sıkça sorulan sorulara göz atın.",
                            linkText: "Daha Fazla Bilgi",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative bg-transparent rounded-lg  p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                <item.Icon size={48} className="text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#13253B]">
                                {item.title}
                            </h3>
                            <p className="text-lg text-gray-600 mt-4">
                                {item.description}
                            </p>
                            <a
                                href="#"
                                className="mt-6 inline-block text-lg font-semibold text-blue-600 hover:underline"
                            >
                                {item.linkText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Connections;
