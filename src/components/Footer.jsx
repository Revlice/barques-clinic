import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { PiCodeDuotone } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-logoColor text-white py-10">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Sol Bölüm: Logo ve Klinik Hakkında */}
                <div className="space-y-4">
                    <img
                        src={logo}
                        alt="Klinik Logo"
                        className="w-40"
                    />
                    <p className="text-gray-400 leading-relaxed">
                        Modern tıbbi hizmetlerimizle hastalarımızın memnuniyetini her zaman ön planda tutuyoruz.
                    </p>
                </div>

                {/* Orta Bölüm: Hızlı Bağlantılar */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="/about"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Hakkımızda
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Hizmetlerimiz
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                İletişim
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-blue-400 transition"
                            >
                                Gizlilik Politikası
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Sağ Bölüm: İletişim Bilgileri */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">İletişim Bilgileri</h3>
                    <div className="flex items-center space-x-3">
                        <FiMapPin size={20} className="text-blue-400" />
                        <span className="text-gray-400">Adres : Doğu, Bilge Sk. No:1, 34890 Pendik/İstanbul</span>
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

            {/* Alt Kısım: Sosyal Medya ve Telif Hakkı */}
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
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition"
                    >
                        <FaWhatsapp size={24}/>
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    © 2024 Barques Clinic - Tüm Hakları Saklıdır.
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
