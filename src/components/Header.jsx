import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo2.jpeg";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menüsünün açık olup olmadığını kontrol etmek
    const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown açma kapama
    const [searchActive, setSearchActive] = useState(false); // Arama çubuğunun açık olup olmadığını kontrol etme

    const liste = [
        { name: "Anasayfa", go: "/" },
        {
            name: "Hakkımızda",
            go: "",
            icon: MdKeyboardArrowDown,
            dropdown: [
                {name:"Hakkımızda",go:"/about"},
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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Menü durumunu değiştirir
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Hakkımızda dropdown açma/kapama

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-logoColor shadow-lg">
            <motion.div
                initial={{ translateX:-120,opacity:0 }}
                animate={{ opacity: 1,translateX:0 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
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
                                onClick={() => item.name === "Hakkımızda" && toggleDropdown()} // Mobilde tıklandığında dropdown açılır
                                onMouseEnter={() => item.name === "Hakkımızda" && !isMenuOpen && setDropdownOpen(true)} // Hover ile dropdown (desktop)
                                onMouseLeave={() => item.name === "Hakkımızda" && setDropdownOpen(false)} // Hover bittiğinde dropdown
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

                <div className="flex items-center space-x-3">
                    <div className="relative flex items-center space-x-6 text-md font-medium">
                        <select
                            className="bg-[#13253B] text-white p-1 rounded hover:text-blue-500 hover:cursor-pointer transition"
                        >
                            <option value="tr">🇹🇷 Türkçe</option>
                            <option value="es">🇪🇸 İspanyolca</option>
                            <option value="en">🇬🇧 İngilizce</option>
                            <option value="de">🇩🇪 Almanca</option>
                            <option value="he">🇮🇱 İbranice</option>
                            <option value="sv">🇸🇪 İsveççe</option>
                            <option value="fr">🇫🇷 Fransızca</option>
                        </select>

                        <button
                            className="flex border border-gray-400 rounded px-4 py-2 hover:text-blue-500 items-center text-white transition"
                        >
                            <HiMiniBars2 />{" "}
                            <span className="ml-2 font-bold">Tedavilerimiz</span>
                        </button>
                    </div>

                    <div className="relative flex items-center">
                        {/* Arama inputu */}
                        {searchActive ? (
                            <motion.input
                                type="text"
                                placeholder="Arama yapın..."
                                className="pl-4 pr-12 py-2 border rounded-lg bg-gray-100 text-black w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                onBlur={() => setSearchActive(false)} // Input'a tıklanmadığında kapanır
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        ) : (
                            <FaSearch
                                onClick={() => setSearchActive(true)} // Tıklandığında açılır
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