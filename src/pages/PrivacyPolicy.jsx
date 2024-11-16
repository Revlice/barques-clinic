import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PrivacyPolicy = () => {
    return (
        <>
        <Information/>
            <Header/>
        <div className="bg-[#F7F8FA] py-12">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-[#13253B] mb-6 text-center">
                    Gizlilik Politikası
                </h2>
                <p className="text-lg text-[#13253B] mb-6">
                    Barques Clinic olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz.
                    Aşağıda, kişisel bilgilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında
                    bilgilere yer verilmiştir.
                </p>

                <div className="space-y-6">
                    <section>
                        <h3 className="text-2xl font-semibold text-[#13253B]">1. Bilgi Toplama</h3>
                        <p className="text-base text-[#13253B]">
                            Web sitemizi ziyaret ettiğinizde, kişisel bilgilerinizi toplamak için herhangi bir işlem
                            yapılmaz. Ancak, kullanıcı adı, e-posta adresi gibi bilgileri, belirli hizmetler için
                            sağladığınızda toplarız.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold text-[#13253B]">2. Bilgilerin Kullanımı</h3>
                        <p className="text-base text-[#13253B]">
                            Topladığımız bilgileri, hizmetlerimizi geliştirmek, taleplerinizi yerine getirmek ve
                            iletişime geçmek için kullanırız. Ayrıca, kullanıcı deneyimini iyileştirmek amacıyla
                            anonimleştirilmiş veriler kullanabiliriz.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold text-[#13253B]">3. Bilgi Güvenliği</h3>
                        <p className="text-base text-[#13253B]">
                            Kullanıcı bilgilerinizin güvenliği bizim için önemlidir. Bu nedenle, bilgilerinizi
                            korumak için endüstri standardı güvenlik önlemleri alırız.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold text-[#13253B]">4. Üçüncü Taraf Bağlantılar</h3>
                        <p className="text-base text-[#13253B]">
                            Web sitemizde üçüncü taraflara ait bağlantılar bulunabilir. Bu bağlantılar üzerinden
                            başka sitelere yönlendirilirsiniz. Ancak, bu sitelerin gizlilik politikalarından sorumlu
                            değiliz.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold text-[#13253B]">5. Değişiklikler</h3>
                        <p className="text-base text-[#13253B]">
                            Gizlilik politikamızda herhangi bir değişiklik yapmamız durumunda, bu sayfada
                            güncellenmiş haliyle yayınlanacaktır.
                        </p>
                    </section>
                </div>

                <p className="text-lg text-[#13253B] mt-6">
                    Gizliliğiniz bizim için önemlidir. Herhangi bir sorunuz olduğunda bizimle iletişime
                    geçebilirsiniz.
                </p>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default PrivacyPolicy;
