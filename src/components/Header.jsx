import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSyringe } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo2.jpeg";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [treatmentDropdownOpen, setTreatmentDropdownOpen] = useState(false);
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
            icon: MdKeyboardArrowDown,
            dropdown: [
                { name: "FUE Saç Ekimi", go: "/technics",icon:FaSyringe},
                { name: "DHI Saç Ekimi", go: "/technics",icon:FaSyringe },
                {name:"Manuel FUE Saç Ekimi",go:"/technics",icon:FaSyringe},
            ],
        },
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
                className="container mx-auto flex justify-between items-center p-4 md:p-6"
            >
                {/* Logo ve Yardım Metni */}
                <div className="flex items-center w-full md:w-auto space-x-6">
                    <img
                        onClick={() => navigate("/")}
                        src={logo}
                        className="cursor-pointer w-20 md:w-auto h-20 md:h-24"
                        alt="logo"
                    />
                    <span className="hidden md:block text-white w-96 text-sm md:text-base font-medium border-l pl-6 border-l-blue-500/50">
                        Yardıma mı ihtiyacınız var? <br />
                        <span className="font-semibold cursor-pointer hover:underline hover:text-gray-200 transition">
                            Bize Ulaşın
                        </span>
                    </span>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <HiMiniBars2 size={30} />
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <motion.div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:hidden absolute top-44 left-0 right-0 bg-[#13253B] w-full z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col space-y-4 p-4">
                        {liste.map((item, index) => (
                            <li
                                key={index}
                                className="relative group text-center"
                                onClick={() =>
                                    item.name === "Hakkımızda"
                                        ? toggleDropdown()
                                        : item.name === "Tekniklerimiz" &&
                                        toggleTreatmentDropdown()
                                }
                                onMouseEnter={() =>
                                    (item.name === "Hakkımızda" || item.name === "Tekniklerimiz") &&
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
                                            ? "text-white font-semibold text-lg cursor-pointer"
                                            : "text-white/70 cursor-pointer hover:text-white font-medium text-lg transition"
                                    }
                                >
                                    {item.name}
                                </NavLink>

                                {/* Dropdown menu */}
                                {(item.name === "Hakkımızda" || item.name === "Tekniklerimiz") && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-2 bg-[#13253B] p-2 rounded-md w-full z-50"
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
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Navigation Menu for Desktop */}
                <div className={`w-full md:flex md:items-center ${isMenuOpen ? "hidden" : "hidden"}`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full">
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
                                            ? "text-white font-semibold text-lg cursor-pointer"
                                            : "text-white/70 cursor-pointer hover:text-white font-medium text-lg transition"
                                    }
                                >
                                    {item.name}
                                </NavLink>

                                {/* Dropdown menu */}
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

                                {/* Arrow Icon for dropdowns */}
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

                {/* Arama ve Dil Seçimi */}
                <div className="flex items-center space-x-3">
                    {/* Language Selector */}
                    <div className="relative flex items-center">
                        <select className="bg-[#13253B] text-white p-2 rounded-md hover:text-blue-500 focus:outline-none transition">
                            <option value="tr">🇹🇷 Türkçe</option>
                            <option value="en">🇬🇧 İngilizce</option>
                            <option value="de">🇩🇪 Almanca</option>
                        </select>
                    </div>


                </div>
            </motion.div>
        </motion.div>
    );
};

export default Header;
