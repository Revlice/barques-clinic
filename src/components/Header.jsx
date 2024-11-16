import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo2.jpeg";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);

    const liste = [
        { name: "Anasayfa", go: "/" },
        {
            name: "Hakkımızda",
            go: "",
            icon: MdKeyboardArrowDown,
            dropdown: [
                { name: "Biz Kimiz?", go: "/about" },
                { name: "Polikliniğimiz", go: "/about/clinic" },
                { name: "Doktorlarımız", go: "/about/doctors" },
                { name: "Kalite Standartlarımız", go: "/about/quality" },
                { name: "Akreditasyon", go: "/about/accreditation" },
                { name: "Gizlilik Politikası", go: "/about/privacy-policy" },
            ],
        },
        { name: "Hizmetlerimiz", go: "/services" },
        { name: "İletişim", go: "/contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const toggleTreatmentsDropdown = () => {
        setTreatmentsDropdownOpen(!treatmentsDropdownOpen);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-logoColor shadow-lg"
        >
            <motion.div
                initial={{ translateX: -120, opacity: 0 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4"
            >
                {/* Logo ve Yardım Metni */}
                <div className="text-white flex items-center w-full md:w-auto">
                    <img src={logo} className="cursor-pointer w-auto h-24" alt="logo" />
                    <span className="ml-12 border-l pl-12 w-full md:w-96 border-l-blue-500/50 text-center md:text-left">
                        Yardıma mı ihtiyacınız var? <br />
                        <span className="font-extrabold cursor-pointer hover:underline hover:text-gray-200 transition">
                            Bize Ulaşın
                        </span>
                    </span>
                </div>

                {/* Hamburger Icon Sağda */}
                <div className="md:hidden flex items-center ml-auto">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <HiMiniBars2 size={30} />
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className={`w-full ${isMenuOpen ? "block" : "hidden"} md:flex md:items-center`}>
                    <ul className="flex flex-col md:flex-row space-x-4 md:space-x-8 w-full">
                        {liste.map((item, index) => (
                            <li
                                key={index}
                                className="relative group text-center md:text-left"
                                onClick={() => item.name === "Hakkımızda" && toggleDropdown()}
                                onMouseEnter={() => item.name === "Hakkımızda" && !isMenuOpen && setDropdownOpen(true)}
                                onMouseLeave={() => item.name === "Hakkımızda" && setDropdownOpen(false)}
                            >
                                <NavLink
                                    to={item.go}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-bold text-lg cursor-pointer"
                                            : "text-white/70 cursor-pointer hover:text-white font-bold text-lg transition"
                                    }
                                >
                                    {item.name}
                                </NavLink>

                                {/* Dropdown menü, sadece Hakkımızda için */}
                                {item.name === "Hakkımızda" && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-2 bg-[#13253B] p-2 rounded-md w-48 z-50"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: dropdownOpen ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                            <NavLink
                                                key={dropdownIndex}
                                                to={dropdownItem.go}
                                                className="block text-white text-md py-3 px-2 hover:bg-blue-500/20"
                                            >
                                                {dropdownItem.name}
                                            </NavLink>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Ok ikonu */}
                                {item.name === "Hakkımızda" && (
                                    <motion.div
                                        className="absolute top-0.5 -right-6 transform -translate-y-1/2"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <MdKeyboardArrowDown className="text-white" size={24} />
                                    </motion.div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tedavilerimiz Dropdown */}
                <div className="relative px-4 py-2 border rounded flex items-center">
                    <button
                        onClick={toggleTreatmentsDropdown}
                        className="text-white flex items-center text-lg font-bold"
                    >
                        <HiMiniBars2 className="mr-2"/>
                        Tedavilerimiz
                    </button>


                </div>
                {treatmentsDropdownOpen && (
                    <motion.div
                        className="absolute top-40 left-0 w-full bg-[#13253B] p-6 rounded-lg shadow-lg z-50 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[#1C3D5A] p-4 rounded-lg shadow-md transition">
                                <h3 className="text-xl text-white font-semibold mb-4">Saç Ekimi</h3>
                                <ul className="text-white space-y-3">
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">DHI Saç
                                        Ekimi</NavLink></li>
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">FUE Saç
                                        Ekimi</NavLink></li>
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">Kadın
                                        Saç Ekimi</NavLink></li>
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">Sakal
                                        Ekimi</NavLink></li>
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">Bıyık
                                        Ekimi</NavLink></li>
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">Kaş
                                        Ekimi</NavLink></li>
                                    <li><NavLink to="/services/hair-transplant" className="hover:text-blue-500">PRP & Mezoterapi</NavLink></li>


                                </ul>
                            </div>
                            <div className="bg-[#1C3D5A] p-4 rounded-lg shadow-md  transition">
                                <h3 className="text-xl text-white font-semibold mb-4">Medikal Estetik</h3>
                                <ul className="text-white space-y-3">
                                    <li><NavLink to="/services/hair-loss" className="hover:text-blue-500">Botulinum
                                        Toksin</NavLink></li>
                                    <li><NavLink to="/services/hair-loss"
                                                 className="hover:text-blue-500">Dermatoloji</NavLink></li>
                                    <li><NavLink to="/services/hair-loss"
                                                 className="hover:text-blue-500">Epilasyon</NavLink></li>
                                    <li><NavLink to="/services/hair-loss"
                                                 className="hover:text-blue-500">Dolgular</NavLink></li>
                                    <li><NavLink to="/services/hair-loss"
                                                 className="hover:text-blue-500">Cilt Bakımı</NavLink></li>
                                </ul>
                            </div>
                            <div className="bg-[#1C3D5A] p-4 rounded-lg shadow-md  transition">
                                <h3 className="text-xl text-white font-semibold mb-4">Diş Tedavisi</h3>
                                <ul className="text-white space-y-3">
                                    <li><NavLink to="/services/beauty" className="hover:text-blue-500">Hollywood
                                        Smile</NavLink></li>
                                    <li><NavLink to="/services/beauty" className="hover:text-blue-500">Implant
                                        Tedavisi</NavLink></li>
                                    <li><NavLink to="/services/beauty" className="hover:text-blue-500">E-Max Lamine Kaplamalar</NavLink></li>
                                    <li><NavLink to="/services/beauty" className="hover:text-blue-500">Zirkonyum Kaplama</NavLink></li>
                                    <li><NavLink to="/services/beauty" className="hover:text-blue-500">All On Four</NavLink></li>
                                    <li><NavLink to="/services/beauty" className="hover:text-blue-500">All On Six</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Arama Inputu */}
                <div className="flex items-center space-x-3">
                    <div className="relative flex items-center space-x-6 text-md font-medium">
                        <select
                            className="bg-[#13253B] text-white p-1 rounded hover:text-blue-500 hover:cursor-pointer transition"
                        >
                            <option value="tr">🇹🇷 Türkçe</option>
                            <option value="en">🇬🇧 İngilizce</option>
                            <option value="de">🇩🇪 Almanca</option>
                        </select>
                    </div>

                    <div className="relative flex items-center">
                        {searchActive ? (
                            <motion.input
                                type="text"
                                placeholder="Arama yapın..."
                                className="pl-4 pr-12 py-2 border rounded-lg bg-gray-100 text-black w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                onBlur={() => setSearchActive(false)}
                            />
                        ) : (
                            <FaSearch
                                onClick={() => setSearchActive(true)}
                                size={24}
                                color="white"
                                className="cursor-pointer"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Header;
