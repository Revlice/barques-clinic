import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import { PiCodeDuotone } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-logoColor text-white py-10">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Section: Logo and About the Clinic */}
                <div className="space-y-4">
                    <img
                        src={logo}
                        alt="Clinic Logo"
                        className="w-40"
                    />
                    <p className="text-gray-400 leading-relaxed">
                        With our modern medical services, we always prioritize our patients' satisfaction.
                    </p>
                </div>

                {/* Middle Section: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="/en"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/en/about"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/en/technics"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Our Techniques
                            </a>
                        </li>
                        <li>
                            <a
                                href="/en/contact"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/en/privacy-policy"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="flex items-center space-x-3">
                        <FiMapPin size={20} className="text-blue-400" />
                        <span className="text-gray-400">Address: Doğu, Bilge Sk. No:1, 34890 Pendik/Istanbul</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FiPhone size={20} className="text-blue-400" />
                        <span className="text-gray-400">+90 506 032 63 01</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FiMail size={20} className="text-blue-400" />
                        <span className="text-gray-400">clinicbarques@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Social Media and Copyright */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://www.instagram.com/barqueshairclinic?igsh=MWZxN2c0cnFicWwzMQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400 transition"
                    >
                        <FaInstagram size={24}/>
                    </a>
                    <a
                        href="https://wa.me/905060326301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition"
                    >
                        <FaWhatsapp size={24}/>
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    © 2024 Barques Clinic - All Rights Reserved.
                </p>
                <div className="flex justify-center items-center">
                    <p className="text-sm text-gray-500 flex items-center hover:text-blue-500">
                        <PiCodeDuotone className="mr-2 text-lg text-gray-500 hover:text-blue-500"/>
                        <a className="hover:text-blue-500 text-gray-500" href="https://rahmicantut.com/"> coded by
                            revlice</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
