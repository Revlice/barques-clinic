import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
const OurServices = () => {
    const services = [
        {
            title: "Saç Ekimi",
            description:
                "Gelişmiş teknikler kullanarak, doğal ve estetik sonuçlar elde ediyoruz. Her hastanın ihtiyacına özel saç ekimi çözümleri sunuyoruz.",
        },
        {
            title: "Saç Dökülmesi Tedavisi",
            description:
                "Saç dökülmesini durdurmak ve sağlıklı saç büyümesini desteklemek için çeşitli tedavi yöntemleri sunuyoruz.",
        },
        {
            title: "Estetik Saç Tasarımı",
            description:
                "Modern estetik anlayışıyla kişiye özel saç tasarımları yaparak, yüz hatlarına en uygun saç modelleri sunuyoruz.",
        },
        {
            title: "PRP Tedavisi",
            description:
                "Platelet Rich Plasma (PRP) tedavisi ile saçın doğal büyümesini teşvik ederek dökülmeyi engelliyoruz.",
        },
        {
            title: "Saç Pigmentasyonu",
            description:
                "Saç dökülmesini kamufle eden, kalıcı makyaj yöntemleriyle estetik görünüm sağlayan saç pigmentasyonu uygulamaları.",
        },
    ];

    return (
        <>
            <Information/>
            <Header/>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gray-100 py-16"
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-extrabold text-[#13253B] mb-12">Hizmetlerimiz</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <FaCheckCircle size={30} color="#13253B" />
                                <h3 className="text-2xl font-bold text-[#13253B]">{service.title}</h3>
                            </div>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
            <Footer/>
        </>
    );
};

export default OurServices;
