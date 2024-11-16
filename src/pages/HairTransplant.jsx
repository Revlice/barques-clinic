import { motion } from 'framer-motion';
import { FaRegCheckCircle, FaSyringe, FaHandSparkles } from 'react-icons/fa';
import { GiHairStrands } from 'react-icons/gi';
import Footer from "../components/Footer.jsx";
import Information from "../components/Information.jsx";
import Header from "../components/Header.jsx";

const HairTransplant = () => {
    return (
        <>
            <Information />
            <Header />
            <div className="bg-[#13253B] py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Saç Ekimi Tekniklerimiz
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* FUE Saç Ekimi */}
                        <motion.div
                            className="bg-[#1a3049] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <FaSyringe size={30} className="text-blue-400" />
                                <h3 className="text-2xl md:text-3xl font-semibold">FUE Saç Ekimi</h3>
                            </div>
                            <p className="text-lg md:text-xl mb-6">
                                FUE (Follicular Unit Extraction)
                                FUE, saç naklinde graftlarin çıkarılması aşamasında kullanılan teknik olup, saç nakli cerrahisi alanındaki son gelişmedir.
                                FUE tekniğinde graftlar mikro punchlar kullanılarak donör bölgesinden (saç alimi yapılacak iki kulak arasında kalan alan) alınır.
                                FUE tekniği çok sayıda graftın, donör bölgesinde minimal yara izi ile alınmasını saglar. FUE tekniğinde saç derisinde herhangi bir kesi yapılmaz.
                                FUE tekniği, diğer tekniklere oranla daha fazla graft alınmasını / çıkarılmasını saglar. FUE tekniği, diğer tekniklere oranla ekilecek graft sayısını artırır ve hastanın daha şık/yoğun bir saça kavuşmasına olanak saglar.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Minimal yara izi ve hızlı iyileşme.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Daha fazla graft alımı.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Daha yoğun saç görünümü.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Herhangi bir kesi yapılmaz.</p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* DHI Saç Ekimi */}
                        <motion.div
                            className="bg-[#1a3049] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <GiHairStrands size={30} className="text-blue-400" />
                                <h3 className="text-2xl md:text-3xl font-semibold">DHI Saç Ekimi</h3>
                            </div>
                            <p className="text-lg md:text-xl mb-6">
                                DHI saç ekimi, "implanter pen" olarak adlandırılan özel cihazlar kullanılarak gerçekleştirilen en gelişmiş saç ekimi yöntemlerinden birisidir. Direct Hair Implantation olarak açılımı yapılabilen DHI saç ekimi tekniği, Türkçeye "Doğrudan Saç Ekimi" olarak gevrilmektedir.
                                DHI tekniğinin son yıllarda öne çıkmasının en önemli sebeplerinden birisi, kesi açılmayan iki aşamalı bir yöntem olmasidir. Diğer saç ekimi tekniklerinde graft toplama, kanal açma ve graft ekimi olarak üç açamada gerçeklestirilen saç ekimi, DHI yöntemi kullanılarak graft toplama ve graft ekimi şeklinde iki temel aşama ile gerçeklestirilmektedir.
                                Saç ekiminin iki aşamaya indirilebilmesinde en önemli etken, implanter pen cihazlarinin kullanilmasidir. Cihaz içerisine graft yerlegtirildikten sonra cilt delinerek graft doğrudan cildin içerisine bırakılmalıdır. Bu sayede kanal açma ve graft ekimi işlemleri aynı anda gerçeklestirilebilmektedir.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Kesi yapılmaz ve hızlı iyileşme sağlar.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">İmplanter pen cihazı ile hassas ekim.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Doğrudan saç kökü yerleştirilmesi.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">En doğal ve yoğun sonuçlar.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                        {/* Manuel FUE Saç Ekimi */}
                        <motion.div
                            className="bg-[#1a3049] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <FaHandSparkles size={30} className="text-blue-400" />
                                <h3 className="text-2xl md:text-3xl font-semibold">Manuel FUE Saç Ekimi</h3>
                            </div>
                            <p className="text-lg md:text-xl mb-6">
                                MANUEL FUE tekniği, donör bölgesinde herhangi yara izi bırakmadan, optimum
                                sayıda ve kalitede graftların tek tek alınması / extraction işlemi ile yapılır.
                                Manuel Fue tekniği hassas bir dokunuş, fiziksel dayanıklılık, mükemmel bir el-göz
                                koordinasyonu ve el motor becerisi gerektirir. Manuel FUE tekniği ile extraction
                                işlemi, el ile graftların hissedilerek tek tek çıkarıldığı ve graft kaybının
                                olmadığı bir tekniktir. Manuel FUE tekniğinin temel amacı, extraction işlemi
                                sırasında graftların ve donör bölgesinin zarar görmemesi ve donör bölgesinin
                                homojenliğinin korunmasıdır. Homojenliğin korunuyor olması sebebiyle birden fazla
                                seans sonra bile, donör alanındaki yoğunluk ancak yakın muayene ile görülebilmektedir.
                                Her bir hastanın kafa yapısı, saçların yönü ve açısı birbirinden farklı olabildiğinden,
                                planlamanın buna uygun olarak yapılarak doğal bir görünüm sağlanmaktadır.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Yara izi bırakmaz ve hızlı iyileşme sağlar.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Graft kaybı olmaz, doğal sonuçlar elde edilir.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Homojen donör bölgesi yoğunluğu korunur.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Her bir hastaya özel planlama yapılır.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HairTransplant;
