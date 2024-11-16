const Cards = ({ imageURL, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
            {/* Görsel */}
            <div className="relative">
                <img
                    src={imageURL}
                    alt={title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Üstüne gelince başlık */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <h2 className="text-white text-4xl font-medium">{title}</h2>
                </div>
            </div>

            {/* İçerik */}
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h1>
                <p className="text-sm text-gray-600 mb-4">{description}</p>

                {/* Buton */}
                <a
                    href="#"
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Daha fazla göster
                </a>
            </div>
        </div>
    );
};

export default Cards;
