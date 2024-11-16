import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo2.jpeg";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [treatmentDropdownOpen, setTreatmentDropdownOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const navigate = useNavigate();

    const liste = [
        { name: "Anasayfa", go: "/" },
        {
            name: "Hakkımızda",
            go: "/about",
            icon: MdKeyboardArrowDown,
            dropdown: [
                { name: "Biz Kimiz?", go: "/about" },
                { name: "Polikliniğimiz", go: "/about/clinic" },
                { name: "Kalite Standartlarımız", go: "/about/quality" },
                { name: "Gizlilik Politikası", go: "/about/privacy-policy" },
            ],
        },
        {
            name: "Tekniklerimiz",
            go: "/treatments",
            icon: MdKeyboardArrowDown,
            dropdown: [
                { name: "FUE Saç Ekimi", go: "/treatments/hair-transplant/fue" },
                { name: "DHI Saç Ekimi", go: "/treatments/hair-transplant/dhi" },
            ],
        },
        { name: "Hizmetlerimiz", go: "/services" },
        { name: "İletişim", go: "/contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleTreatmentDropdown = () => setTreatmentDropdownOpen(!treatmentDropdownOpen);

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
                    <img
                        onClick={() => navigate("/")}
                        src={logo}
                        className="cursor-pointer w-auto h-24"
                        alt="logo"
                    />
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
                <div
                    className={`w-full ${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:items-center`}
                >
                    <ul className="flex flex-col md:flex-row space-x-4 md:space-x-8 w-full">
                        {liste.map((item, index) => (
                            <li
                                key={index}
                                className="relative group text-center md:text-left"
                                onClick={() =>
                                    item.name === "Hakkımızda"
                                        ? toggleDropdown()
                                        : item.name === "Tekniklerimiz" &&
                                        toggleTreatmentDropdown()
                                }
                                onMouseEnter={() =>
                                    (item.name === "Hakkımızda" || item.name === "Tekniklerimiz") &&
                                    !isMenuOpen &&
                                    (item.name === "Hakkımızda"
                                        ? setDropdownOpen(true)
                                        : setTreatmentDropdownOpen(true))
                                }
                                onMouseLeave={() =>
                                    item.name === "Hakkımızda"
                                        ? setDropdownOpen(false)
                                        : item.name === "Tekniklerimiz" &&
                                        setTreatmentDropdownOpen(false)
                                }
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

                                {/* Dropdown menü */}
                                {(item.name === "Hakkımızda" || item.name === "Tekniklerimiz") && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-2 bg-[#13253B] p-2 rounded-md w-48 z-50"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity:
                                                item.name === "Hakkımızda"
                                                    ? dropdownOpen
                                                        ? 1
                                                        : 0
                                                    : treatmentDropdownOpen
                                                        ? 1
                                                        : 0,
                                        }}
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
                                {(item.name === "Hakkımızda" || item.name === "Tekniklerimiz") && (
                                    <motion.div
                                        className="absolute top-0.5 -right-6 transform -translate-y-1/2"
                                        initial={{ rotate: 0 }}
                                        animate={{
                                            rotate:
                                                item.name === "Hakkımızda"
                                                    ? dropdownOpen
                                                        ? 180
                                                        : 0
                                                    : treatmentDropdownOpen
                                                        ? 180
                                                        : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <MdKeyboardArrowDown className="text-white" size={24} />
                                    </motion.div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Arama Inputu */}
                <div className="flex items-center space-x-3">
                    <div className="relative flex items-center space-x-6 text-md font-medium">
                        <select className="bg-[#13253B] text-white p-1 rounded hover:text-blue-500 hover:cursor-pointer transition">
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
