import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSyringe } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from '../../../assets/logo2.jpeg';
import { HiMiniBars2 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [treatmentDropdownOpen, setTreatmentDropdownOpen] = useState(false);
    const [language, setLanguage] = useState('en'); // Default to English
    const navigate = useNavigate();

    const menuList = [
        { name: "Home", go: "/en" },
        {
            name: "About Us",
            go: "/en/about",
            icon: MdKeyboardArrowDown,
            dropdown: [
                { name: "Who We Are?", go: "/en/about" },
                { name: "Our Clinic", go: "/en/about/clinic" },
                { name: "Privacy Policy", go: "/en/about/privacy-policy" },
            ],
        },
        {
            name: "Our Techniques",
            icon: MdKeyboardArrowDown,
            go:"/en/technics",
            dropdown: [
                { name: "FUE Hair Transplant", go: "/en/technics", icon: FaSyringe },
                { name: "DHI Hair Transplant", go: "/en/technics", icon: FaSyringe },
                { name: "Manual FUE Hair Transplant", go: "/en/technics", icon: FaSyringe },
            ],
        },
        { name: "Contact", go: "/en/contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleTreatmentDropdown = () => setTreatmentDropdownOpen(!treatmentDropdownOpen);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);

        if (selectedLanguage === "tr") {
            navigate("/");
        } else {
            navigate("/en");
        }
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
                className="container mx-auto flex justify-between items-center p-4 md:p-6"
            >
                {/* Logo and Help Text */}
                <div className="flex items-center w-full md:w-auto space-x-6">
                    <img
                        onClick={() => navigate("/en")}
                        src={logo}
                        className="cursor-pointer w-20 md:w-auto h-20 md:h-24"
                        alt="logo"
                    />
                    <span className="hidden md:block text-white w-96 text-sm md:text-base font-medium border-l pl-6 border-l-blue-500/50">
                        Need help? <br />
                        <span className="font-semibold cursor-pointer hover:underline hover:text-gray-200 transition">
                            Contact Us
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
                        {menuList.map((item, index) => (
                            <li
                                key={index}
                                className="relative group text-center"
                                onClick={() =>
                                    item.name === "About Us"
                                        ? toggleDropdown()
                                        : item.name === "Our Techniques" &&
                                        toggleTreatmentDropdown()
                                }
                                onMouseEnter={() =>
                                    (item.name === "About Us" || item.name === "Our Techniques") &&
                                    (item.name === "About Us"
                                        ? setDropdownOpen(true)
                                        : setTreatmentDropdownOpen(true))
                                }
                                onMouseLeave={() =>
                                    item.name === "About Us"
                                        ? setDropdownOpen(false)
                                        : item.name === "Our Techniques" &&
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
                                {(item.name === "About Us" || item.name === "Our Techniques") && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-2 bg-[#13253B] p-2 rounded-md w-full z-50"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity:
                                                item.name === "About Us"
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
                        {menuList.map((item, index) => (
                            <li
                                key={index}
                                className="relative group text-center md:text-left"
                                onClick={() =>
                                    item.name === "About Us"
                                        ? toggleDropdown()
                                        : item.name === "Our Techniques" &&
                                        toggleTreatmentDropdown()
                                }
                                onMouseEnter={() =>
                                    (item.name === "About Us" || item.name === "Our Techniques") &&
                                    !isMenuOpen &&
                                    (item.name === "About Us"
                                        ? setDropdownOpen(true)
                                        : setTreatmentDropdownOpen(true))
                                }
                                onMouseLeave={() =>
                                    item.name === "About Us"
                                        ? setDropdownOpen(false)
                                        : item.name === "Our Techniques" &&
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
                                {(item.name === "About Us" || item.name === "Our Techniques") && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-2 bg-[#13253B] p-2 rounded-md w-48 z-50"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity:
                                                item.name === "About Us"
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
                                {(item.name === "About Us" || item.name === "Our Techniques") && (
                                    <motion.div
                                        className="absolute top-0.5 -right-6 transform -translate-y-1/2"
                                        initial={{ rotate: 0 }}
                                        animate={{
                                            rotate:
                                                item.name === "About Us"
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

                {/* Language Selector */}
                <div className="flex items-center space-x-3">
                    <div className="relative flex items-center">
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                            className="bg-[#13253B] text-white p-2 rounded-md hover:text-blue-500 focus:outline-none transition"
                        >
                            <option onClick={()=>navigate("/")} value="tr">🇹🇷 Turkish</option>
                            <option onClick={()=>navigate("/en")} value="en">🇬🇧 English</option>
                        </select>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Header;
