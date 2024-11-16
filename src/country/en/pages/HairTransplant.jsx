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
                        Our Hair Transplant Techniques
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* FUE Hair Transplant */}
                        <motion.div
                            className="bg-[#1a3049] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <FaSyringe size={30} className="text-blue-400" />
                                <h3 className="text-2xl md:text-3xl font-semibold">FUE Hair Transplant</h3>
                            </div>
                            <p className="text-lg md:text-xl mb-6">
                                FUE (Follicular Unit Extraction) is a technique used in the hair transplantation process
                                during the graft removal phase, and it is the latest development in hair transplant surgery.
                                In the FUE technique, grafts are taken from the donor area (the area between the two ears)
                                using micro punches. The FUE technique allows for the removal of a large number of grafts with minimal scarring
                                in the donor area. No incision is made in the scalp during FUE. FUE provides more graft extraction
                                compared to other techniques, resulting in a fuller and denser hair appearance.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Minimal scarring and quick recovery.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">More graft extraction.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Denser hair appearance.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">No incisions are made.</p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* DHI Hair Transplant */}
                        <motion.div
                            className="bg-[#1a3049] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <GiHairStrands size={30} className="text-blue-400" />
                                <h3 className="text-2xl md:text-3xl font-semibold">DHI Hair Transplant</h3>
                            </div>
                            <p className="text-lg md:text-xl mb-6">
                                DHI hair transplantation is one of the most advanced methods, performed using a special device
                                called the "implanter pen." The DHI technique (Direct Hair Implantation) has become popular due to its
                                two-stage method with no incisions. Unlike other methods where graft removal, channel opening, and graft
                                implantation are performed in three stages, DHI simplifies the process into two main stages: graft removal
                                and graft implantation. The key to this simplification is the use of the implanter pen, which allows
                                for the direct placement of grafts into the skin, enabling both actions to occur simultaneously.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">No incisions and quick recovery.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Precise graft implantation using the implanter pen.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Direct hair follicle implantation.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Natural and dense results.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                        {/* Manual FUE Hair Transplant */}
                        <motion.div
                            className="bg-[#1a3049] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <FaHandSparkles size={30} className="text-blue-400" />
                                <h3 className="text-2xl md:text-3xl font-semibold">Manual FUE Hair Transplant</h3>
                            </div>
                            <p className="text-lg md:text-xl mb-6">
                                The MANUAL FUE technique involves extracting grafts individually with a high level of precision and
                                without leaving scars in the donor area. It requires a delicate touch, physical endurance, excellent hand-eye
                                coordination, and manual dexterity. In this technique, grafts are carefully extracted by hand, ensuring no graft loss.
                                The primary goal is to avoid damage to the donor area and maintain its homogeneity, which ensures that even after multiple
                                sessions, the donor area maintains its density, which can only be noticed upon close examination.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">No scarring and quick recovery.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">No graft loss, natural results.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Donor area density is preserved.</p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaRegCheckCircle size={22} className="text-blue-400" />
                                    <p className="text-lg">Personalized planning for each patient.</p>
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
