import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaMedkit, FaRegLightbulb, FaStar } from 'react-icons/fa';
import Logo from '../assets/logo2.jpeg';
import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
const About = () => {

    // Animation Settings
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
            <Information/>
            <Header/>
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
                            className="mx-auto mb-6 w-40 h-auto rounded-full"
                            variants={itemVariants}
                        />
                        <motion.h1
                            className="text-4xl sm:text-5xl font-extrabold text-[#12253B] mb-4"
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

                    {/* Misyon, Vizyon, Değerler */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >

                        {/* Misyonumuz */}
                        <motion.div
                            className="bg-white rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            variants={itemVariants}
                        >
                            <FaHandHoldingHeart className="text-6xl text-blue-600 mb-6 transition-transform transform hover:scale-110" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-4">Misyonumuz</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Hasta odaklı yaklaşımımızla en yüksek standartlarda sağlık hizmeti sunmak, tedavi süreçlerini
                                en iyi şekilde yönetmektir.
                            </p>
                        </motion.div>

                        {/* Vizyonumuz */}
                        <motion.div
                            className="bg-white rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            variants={itemVariants}
                        >
                            <FaMedkit className="text-6xl text-blue-600 mb-6 transition-transform transform hover:scale-110" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-4">Vizyonumuz</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Sağlık hizmetlerinde öncü olmak ve yenilikçi çözümler sunarak sektörün lideri olmaktır.
                            </p>
                        </motion.div>

                        {/* Değerlerimiz */}
                        <motion.div
                            className="bg-white rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            variants={itemVariants}
                        >
                            <FaStar className="text-6xl text-blue-600 mb-6 transition-transform transform hover:scale-110" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-4">Değerlerimiz</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Müşteri memnuniyetini ön planda tutarak, güvenilir ve kaliteli hizmet anlayışıyla sağlık
                                sektörüne katkı sağlamak.
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
                            className="text-3xl sm:text-4xl font-semibold text-[#12253B] mb-6"
                            variants={itemVariants}
                        >
                            Neden Barques Clinic?
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8"
                            variants={itemVariants}
                        >
                            Barques Clinic, modern altyapısı, deneyimli kadrosu ve en son tıbbi teknolojiyle hastalarına
                            sağlıklı, güvenli ve etkili bir tedavi süreci sunmaktadır. Sağlığınızı bize emanet edebilirsiniz!
                        </motion.p>

                        <motion.a
                            href="/contact"
                            className="inline-block text-lg font-semibold text-white bg-blue-600 py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            variants={itemVariants}
                        >
                            İletişime Geçin
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
