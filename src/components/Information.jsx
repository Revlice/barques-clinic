import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Information = () => {
    return (
        <div className="w-full bg-logoColor/95 text-white text-sm py-2 z-10">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8">

                {/* Randevu ve Danışmanlık */}
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <Link to="/contact" className="hover:underline mr-4 hover:text-gray-200 transition">Randevu Alın</Link>
                    <span className="opacity-50 mr-4">|</span>
                    <Link to="https://wa.me/905060326301" className="hover:underline hover:text-gray-200 transition">Çevrimiçi Danışmanlık</Link>
                </div>

                {/* Telefon ve E-posta Bilgileri */}
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <div className="flex items-center space-x-1">
                        <FaPhoneAlt className="text-gray-300" />
                        <span>+90 506 032 63 01</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaEnvelope className="text-gray-300" />
                        <span>clinicbarques@gmail.com</span>
                    </div>
                </div>

                {/* Sosyal Medya İkonları */}
                <div className="flex items-center space-x-3">
                    <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-400 transition">
                        <FaLinkedin className="text-[#13253B] text-lg" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-400 transition">
                        <FaTiktok className="text-[#13253B] text-lg" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-400 transition">
                        <FaYoutube className="text-[#13253B] text-lg" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-400 transition">
                        <FaInstagram className="text-[#13253B] text-lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Information;
