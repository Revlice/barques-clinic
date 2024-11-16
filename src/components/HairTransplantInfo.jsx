import logo from '../assets/logo.png';
import { FaUserMd, FaRegLightbulb, FaClipboardList, FaSyringe, FaRegClock, FaCheckCircle } from "react-icons/fa"; // Importing Font Awesome icons

const HairTransplantInfo = () => {
    return (
        <div className="bg-white text-gray-800 p-8 md:p-16">
            <h1 className="text-4xl font-bold text-center text-[#12253B] mb-12">
                Saç Ekimi Hakkında Bilgiler
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Saç Ekimi Nedir */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaUserMd className="mr-3 text-blue-500" /> Saç Ekimi Nedir?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Saç ekimi, dökülen bölgelere, ense bölgesinden alınan saç köklerinin (graftların) nakil edilmesidir. Uzman hekimler
                        tarafından yapılması gereken, ciddi bir operasyondur. Saç ekimi estetik kaygıları gidermek amacıyla tercih edilse de,
                        sağlıklı bir uygulama olması için uzmanlık gereklidir.
                    </p>
                </section>

                {/* Saç Ekimi Öncesi Dikkat Edilmesi Gerekenler */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaRegLightbulb className="mr-3 text-blue-500" /> Saç Ekimi Öncesi Dikkat Edilmesi Gerekenler
                    </h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        <li>Sigara kullanımını azaltın ya da bırakın.</li>
                        <li>Alkol ve kafein tüketiminden kaçının.</li>
                        <li>Saç ekiminden önce sağlığınızla ilgili tüm bilgileri doktorunuza iletin.</li>
                        <li>İlaçları doktorunuza danışarak bırakın.</li>
                        <li>Saçınıza herhangi bir losyon ya da ilaç sürmeyin.</li>
                    </ul>
                </section>

                {/* Ekim Alanının Hazırlığı */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaClipboardList className="mr-3 text-blue-500" /> Ekim Alanının Hazırlığı
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Ekim yapılacak bölge lokal anestezi ile uyuşturulur. Bu bölge, saç köklerinin ekilmesi için küçük kanallar açılarak
                        hazırlanır. Kanalların yönü ve açısı, ekilen saçların doğal görünmesi için önemlidir.
                    </p>
                </section>

                {/* Greftlerin Ekilmesi */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaSyringe className="mr-3 text-blue-500" /> Graftlerin Ekilmesi
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Son aşamada, toplanan saç kökleri tek tek açılan kanallara ekilir. Bu işlem sırasında, saç köklerinin doğru yönde ve
                        açıda ekilmesine özen gösterilir. Graftlerin ekimi, genellikle birkaç saat sürebilir ve seanslar halinde
                        gerçekleştirilebilir.
                    </p>
                </section>

                {/* Saç Ekimi Sonrası Bakım */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaRegClock className="mr-3 text-blue-500" /> Saç Ekimi Sonrası Bakım
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        FUE saç ekimi sonrası iyileşme süreci genellikle hızlı ve rahat geçer. İlk birkaç gün, ekim yapılan bölgede hafif
                        şişlik ve kızarıklık olabilir. Bu durum normaldir ve kısa sürede geçer. Doktorun önerdiği bakım talimatlarına
                        uyulması, iyileşme sürecini hızlandırır ve sonuçların daha iyi olmasını sağlar.
                    </p>
                </section>

                {/* Saç Ekimi Süreci */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaCheckCircle className="mr-3 text-blue-500" /> Saç Ekimi Süreci
                    </h2>
                    <p className="text-lg text-gray-700 border-t border-t-[#12253B] leading-relaxed">
                        Saç ekimi süreci, kişinin mevcut saç yapısına ve ihtiyacına göre şekillenir. İlk olarak donör alan belirlenir ve
                        saç kökleri alınarak ekim yapılacak bölgelere transfer edilir. Süreç dikkatli bir şekilde yürütülmeli, uzman kişiler
                        tarafından gerçekleştirilmelidir.
                    </p>
                </section>

                {/* Saç Ekimi Sonuçları */}
                <section className="bg-white shadow-lg rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500 relative">
                    {/* Logo in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
                        <FaCheckCircle className="mr-3 text-blue-500" /> Saç Ekimi Sonuçları
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Saç ekimi sonuçları, kişiye bağlı olarak farklılık gösterebilir. Yaş, genetik faktörler, yaşam tarzı gibi etkenler
                        bu süreci etkileyebilir. Ancak doğru merkezde yapılan işlemler genellikle başarılı sonuçlar verir.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default HairTransplantInfo;
