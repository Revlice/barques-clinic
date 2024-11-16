import { useState } from "react";
import resim1 from "../../../assets/resim1.jpeg";
import resim2 from "../../../assets/resim2.jpeg";
import resim3 from "../../../assets/resim3.jpeg";
import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Clinic = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Information/>
            <Header/>
            <div className="min-h-screen bg-gray-100 py-10 px-5">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Welcome to Our Clinic
                    </h1>
                    {/* Description */}
                    <p className="text-center text-gray-600 mb-10">
                        We provide the best service with our modern facilities and professional team. You can explore the gallery below.
                    </p>
                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[resim1, resim2, resim3].map((image, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Clinic ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-semibold transition duration-300">
                                    Inside the Clinic {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full mx-5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-700 text-lg hover:text-gray-900"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected Clinic"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Clinic;
