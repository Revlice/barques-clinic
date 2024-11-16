import logo from '../../../assets/logo.png';
import { FaUserMd, FaRegLightbulb, FaClipboardList, FaSyringe, FaRegClock, FaCheckCircle } from "react-icons/fa"; // Importing Font Awesome icons

const HairTransplantInfo = () => {
    return (
        <div className="bg-white text-gray-800 p-8 md:p-16">
            <h1 className="text-4xl font-bold text-center text-[#12253B] mb-12">
                Information About Hair Transplant
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* What is Hair Transplant */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaUserMd className="mr-3 text-blue-500" /> What is Hair Transplant?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Hair transplant involves transplanting hair follicles (grafts) from the donor area, usually from the back of the head, to areas with hair loss. It is a serious procedure that should be performed by a specialist doctor. While hair transplant is typically done for aesthetic reasons, it requires expertise to ensure a healthy and effective outcome.
                    </p>
                </section>

                {/* Things to Consider Before Hair Transplant */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaRegLightbulb className="mr-3 text-blue-500" /> Things to Consider Before Hair Transplant
                    </h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        <li>Reduce or quit smoking.</li>
                        <li>Avoid alcohol and caffeine consumption.</li>
                        <li>Share all health information with your doctor before the procedure.</li>
                        <li>Consult your doctor before stopping any medications.</li>
                        <li>Do not apply any lotions or medications to your hair.</li>
                    </ul>
                </section>

                {/* Preparation of the Transplant Area */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaClipboardList className="mr-3 text-blue-500" /> Preparation of the Transplant Area
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The area to be transplanted is numbed with local anesthesia. Small channels are created in the area to place the hair follicles. The direction and angle of the channels are important to ensure a natural appearance of the transplanted hair.
                    </p>
                </section>

                {/* Transplanting the Grafts */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaSyringe className="mr-3 text-blue-500" /> Transplanting the Grafts
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In the final stage, the collected hair follicles are individually placed in the pre-made channels. It is essential to ensure that the follicles are placed in the correct direction and angle. The graft transplant usually takes several hours and can be performed in sessions.
                    </p>
                </section>

                {/* Post-Hair Transplant Care */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaRegClock className="mr-3 text-blue-500" /> Post-Hair Transplant Care
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The recovery process after FUE hair transplant is usually quick and comfortable. There may be mild swelling and redness in the transplanted area during the first few days, but this is normal and will resolve soon. Following the doctor's aftercare instructions speeds up recovery and ensures better results.
                    </p>
                </section>

                {/* Hair Transplant Process */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaCheckCircle className="mr-3 text-blue-500" /> Hair Transplant Process
                    </h2>
                    <p className="text-lg text-gray-700 border-t border-t-[#12253B] leading-relaxed">
                        The hair transplant process is tailored to the individual's hair structure and needs. First, the donor area is determined, and hair follicles are collected and transferred to the target areas. The process must be carefully managed and performed by experts.
                    </p>
                </section>

                {/* Hair Transplant Results */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaCheckCircle className="mr-3 text-blue-500" /> Hair Transplant Results
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The results of hair transplant vary depending on the individual. Factors such as age, genetics, and lifestyle can affect the outcome. However, procedures performed at the right center generally yield successful results.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default HairTransplantInfo;
