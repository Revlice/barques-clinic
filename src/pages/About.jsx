import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUserMd, FaMedkit } from 'react-icons/fa';
import Logo from '../assets/logo2.jpeg';

const About = () => {

    // Animasyon Ayarları
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <Information />
            <Header />
            <div className="w-full min-h-screen bg-gradient-to-b from-[#f9fbfd] to-[#f4f7fa] py-16">
                <div className="container mx-auto px-6">

                    {/* Logo ve Başlık */}
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.img
                            src={Logo}
                            alt="Barques Clinic Logo"
                            className="mx-auto mb-6 w-auto h-52 rounded-lg"
                            variants={itemVariants}
                        />
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold text-[#12253B] mb-4"
                            variants={itemVariants}
                        >
                            Hakkımızda
                        </motion.h1>
                        <motion.p
                            className="text-lg text-gray-700 max-w-3xl mx-auto"
                            variants={itemVariants}
                        >
                            Barques Clinic, her bireyin sağlık ihtiyacına en iyi şekilde cevap veren, güvenli ve modern
                            bir sağlık hizmeti sunmayı kendine ilke edinmiştir. Uzman kadromuzla, en son teknolojiyi kullanarak
                            her adımda yanınızdayız.
                        </motion.p>
                    </motion.div>

                    {/* Misyon, Vizyon ve Değerler */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
                            variants={itemVariants}
                        >
                            <FaHandHoldingHeart className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-2">Misyonumuz</h3>
                            <p className="text-gray-600">
                                Hasta odaklı yaklaşımımızla en yüksek standartlarda sağlık hizmeti sunmak, tedavi süreçlerini
                                en iyi şekilde yönetmektir.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
                            variants={itemVariants}
                        >
                            <FaUserMd className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-2">Uzman Kadro</h3>
                            <p className="text-gray-600">
                                Alanında uzman doktorlarımız ve sağlık personelimizle, hastalarımıza kaliteli tedavi ve bakım
                                sunuyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
                            variants={itemVariants}
                        >
                            <FaMedkit className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-2">Vizyonumuz</h3>
                            <p className="text-gray-600">
                                Sağlık hizmetlerinde öncü olmak ve yenilikçi çözümler sunarak sektörün lideri olmaktır.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Neden Bizi Seçmelisiniz? */}
                    <motion.div
                        className="text-center mt-16"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl font-semibold text-[#12253B] mb-6"
                            variants={itemVariants}
                        >
                            Neden Barques Clinic?
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
                            variants={itemVariants}
                        >
                            Barques Clinic, modern altyapısı, deneyimli kadrosu ve en son tıbbi teknolojiyle hastalarına
                            sağlıklı, güvenli ve etkili bir tedavi süreci sunmaktadır. Sağlığınızı bize emanet edebilirsiniz!
                        </motion.p>

                        <motion.a
                            href="/contact"
                            className="inline-block text-lg font-semibold text-white bg-blue-600 py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            variants={itemVariants}
                        >
                            İletişime Geçin
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default About;
