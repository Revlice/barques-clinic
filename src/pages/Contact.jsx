import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
    return (
        <>
            <Information />
            <Header />

            {/* Contact Page */}
            <div className="bg-gradient-to-r from-[#0D1A2D] to-[#13253B] text-white py-12">
                <div className="container mx-auto px-6 lg:px-16">
                    {/* Page Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">İletişim</h1>
                        <p className="text-gray-300 text-lg">
                            Sorularınız mı var? Bize ulaşın! Bilgi almak için iletişim bilgilerimizi kullanabilir ya da formu doldurabilirsiniz.
                        </p>
                    </div>

                    {/* Contact Details and Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="bg-[#1B2D47] p-8 rounded-lg shadow-lg space-y-6">
                            <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
                            <div className="flex items-center space-x-4">
                                <FiMapPin size={28} className="text-blue-400" />
                                <p className="text-gray-300">
                                    Doğu, Bilge Sk. No:1, 34890 Pendik/İstanbul
                                </p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FiPhone size={28} className="text-blue-400" />
                                <p className="text-gray-300">+90 506 032 63 01</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FiMail size={28} className="text-blue-400" />
                                <p className="text-gray-300">clinicbarques@gmail.com</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="overflow-hidden rounded-lg shadow-lg h-72 lg:h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19207.038457236728!2d29.2078975!3d40.8832296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8e6fefb3e85%3A0xa4ed3b03cf06fabb!2sPendik%2C%20%C4%B0stanbul!5e0!3m2!1sen!2str!4v1699351802041!5m2!1sen!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Klinik Haritası"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-6 text-center">
                            İletişim Formu
                        </h2>
                        <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium text-gray-600">
                                        Adınız
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Adınız"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-gray-600">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="E-posta"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block mb-2 font-medium text-gray-600">
                                    Mesajınız
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Mesajınız"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>
                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                                >
                                    Gönder
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
