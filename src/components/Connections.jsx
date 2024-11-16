import React from "react";
import { FiPhoneCall, FiHeadphones } from "react-icons/fi";

const Connections = () => {
    return (
        <div className="w-full py-16 bg-[#F5F9FF]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Başlık */}
                <h2 className="text-4xl font-bold text-center text-[#13253B] mb-12">
                    Hızlı Bağlantılar
                </h2>

                {/* Bağlantılar */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {[
                        {
                            Icon: FiHeadphones,
                            title: "Ücretsiz Danışmanlık Alın",
                            description:
                                "Uzmanlarımızdan ücretsiz danışmanlık alarak doğru tedavi hakkında bilgi edinin.",
                            linkText: "Hemen Başlayın",
                            bgColor: "bg-blue-50",
                            iconBg: "bg-blue-100",
                            textColor: "text-blue-600",
                        },
                        {
                            Icon: FiPhoneCall,
                            title: "Sizi Geri Arayalım",
                            description:
                                "Sizi en kısa sürede arayıp ihtiyaçlarınıza göre bir plan oluşturalım.",
                            linkText: "Bizi Arayın",
                            bgColor: "bg-green-50",
                            iconBg: "bg-green-100",
                            textColor: "text-green-600",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex-1 flex items-center gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${item.bgColor}`}
                        >
                            {/* İkon */}
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full ${item.iconBg}`}
                            >
                                <item.Icon size={32} className={`${item.textColor}`} />
                            </div>

                            {/* İçerik */}
                            <div>
                                <h3 className={`text-xl font-semibold ${item.textColor}`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
                                <a
                                    href="#"
                                    className={`mt-3 inline-block font-medium hover:underline ${item.textColor}`}
                                >
                                    {item.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Connections;
