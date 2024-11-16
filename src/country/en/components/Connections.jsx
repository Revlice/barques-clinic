import {Link} from 'react-router-dom';
import { FiPhoneCall, FiHeadphones } from "react-icons/fi";

const Connections = () => {
    return (
        <div className="w-full py-16 bg-[#F5F9FF]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-[#13253B] mb-12">
                    Quick Connections
                </h2>

                {/* Connections */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {[
                        {
                            Icon: FiHeadphones,
                            title: "Get Free Consultation",
                            go:"/contact",
                            description:
                                "Get information about the right treatment by consulting our experts for free.",
                            linkText: "Start Now",
                            bgColor: "bg-blue-50",
                            iconBg: "bg-blue-100",
                            textColor: "text-blue-600",
                        },
                        {
                            Icon: FiPhoneCall,
                            title: "Let Us Call You Back",
                            go:"https://wa.me/905060326301",
                            description:
                                "We will call you as soon as possible and create a plan tailored to your needs.",
                            linkText: "Message Us",
                            bgColor: "bg-green-50",
                            iconBg: "bg-green-100",
                            textColor: "text-green-600",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex-1 flex items-center gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${item.bgColor}`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full ${item.iconBg}`}
                            >
                                <item.Icon  size={32} className={`${item.textColor}`} />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className={`text-xl font-semibold ${item.textColor}`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
                                <Link
                                    to={item.go}
                                    className={`mt-3 inline-block font-medium hover:underline ${item.textColor}`}
                                >
                                    {item.linkText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Connections;
