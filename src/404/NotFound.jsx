import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/en"); // Veya istediğiniz ana sayfa yolunu belirleyebilirsiniz
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0D1A2D] to-[#13253B] text-white">
            <div className="text-center">
                <h1 className="text-6xl sm:text-8xl font-extrabold text-[#A5C4D4] mb-4">404</h1>
                <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <button
                    onClick={handleRedirect}
                    className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default NotFound;
