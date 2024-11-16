import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State for handling form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(''); // Reset status before submission

        // Simulate form submission (this could be an API call)
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setFormStatus('Form başarıyla gönderildi!');
            setFormData({ name: '', email: '', message: '' }); // Reset form after submission
        }, 2000); // Simulate a 2-second delay
    };

    return (
        <>
            <Information />
            <Header />

            {/* Contact Page */}
            <div className="bg-gradient-to-r from-[#0D1A2D] to-[#13253B] text-white py-12">
                <div className="container mx-auto px-6 lg:px-16">

                    {/* Page Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">İletişim</h1>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Sorularınız mı var? Bize ulaşın! Bilgi almak için iletişim bilgilerimizi kullanabilir ya da formu doldurabilirsiniz.
                        </p>
                    </div>

                    {/* Contact Details and Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="bg-[#1B2D47] p-8 w-full h-full rounded-lg shadow-xl space-y-12">
                            <h2 className="text-2xl font-semibold text-[#A5C4D4] mb-4">Bize Ulaşın</h2>
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
                        <div className="overflow-hidden rounded-lg shadow-xl h-72 lg:h-96">
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
                        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#A5C4D4] mb-6">
                            İletişim Formu
                        </h2>
                        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block mb-2 font-medium text-gray-600">
                                        Adınız
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Adınız"
                                        className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-gray-600">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="E-posta"
                                        className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block mb-2 font-medium text-gray-600">
                                    Mesajınız
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    placeholder="Mesajınız"
                                    className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                ></textarea>
                            </div>
                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                </button>
                            </div>
                        </form>

                        {/* Form Status */}
                        {formStatus && (
                            <div className="mt-6 text-center text-green-500 font-semibold">
                                {formStatus}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
