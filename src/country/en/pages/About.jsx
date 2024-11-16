import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaMedkit, FaStar } from 'react-icons/fa';
import Logo from '../../../assets/logo2.jpeg';
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

                    {/* Logo and Title */}
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
                            About Us
                        </motion.h1>
                        <motion.p
                            className="text-lg text-gray-700 max-w-3xl mx-auto"
                            variants={itemVariants}
                        >
                            Barques Clinic is dedicated to providing the best possible healthcare, offering safe and modern services that meet the individual health needs of each person. We are by your side at every step, utilizing the latest technology with our expert team.
                        </motion.p>
                    </motion.div>

                    {/* Mission, Vision, Values */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >

                        {/* Our Mission */}
                        <motion.div
                            className="bg-white rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            variants={itemVariants}
                        >
                            <FaHandHoldingHeart className="text-6xl text-blue-600 mb-6 transition-transform transform hover:scale-110" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Our mission is to provide healthcare at the highest standards with a patient-focused approach, and to manage treatment processes in the best way possible.
                            </p>
                        </motion.div>

                        {/* Our Vision */}
                        <motion.div
                            className="bg-white rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            variants={itemVariants}
                        >
                            <FaMedkit className="text-6xl text-blue-600 mb-6 transition-transform transform hover:scale-110" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                To be a pioneer in healthcare services and to become a leader in the industry by offering innovative solutions.
                            </p>
                        </motion.div>

                        {/* Our Values */}
                        <motion.div
                            className="bg-white rounded-xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            variants={itemVariants}
                        >
                            <FaStar className="text-6xl text-blue-600 mb-6 transition-transform transform hover:scale-110" />
                            <h3 className="text-2xl font-semibold text-[#12253B] mb-4">Our Values</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                To contribute to the healthcare sector with a focus on customer satisfaction, offering reliable and high-quality services.
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* Why Choose Us? */}
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
                            Why Barques Clinic?
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8"
                            variants={itemVariants}
                        >
                            Barques Clinic offers a healthy, safe, and effective treatment process to its patients with its modern infrastructure, experienced team, and the latest medical technology. You can entrust your health to us!
                        </motion.p>

                        <motion.a
                            href="/contact"
                            className="inline-block text-lg font-semibold text-white bg-blue-600 py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            variants={itemVariants}
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
