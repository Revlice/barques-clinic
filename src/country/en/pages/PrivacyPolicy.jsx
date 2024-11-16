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
                        Privacy Policy
                    </h2>
                    <p className="text-lg text-[#13253B] mb-6">
                        At Barques Clinic, we take the privacy of our users very seriously.
                        Below is information on how we collect, use, and protect your personal data.
                    </p>

                    <div className="space-y-6">
                        <section>
                            <h3 className="text-2xl font-semibold text-[#13253B]">1. Information Collection</h3>
                            <p className="text-base text-[#13253B]">
                                When you visit our website, no action is taken to collect personal data. However, if you
                                provide information such as a username or email address for specific services, we collect that data.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-[#13253B]">2. Use of Information</h3>
                            <p className="text-base text-[#13253B]">
                                We use the information we collect to improve our services, fulfill your requests, and
                                communicate with you. Additionally, we may use anonymized data to enhance the user experience.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-[#13253B]">3. Information Security</h3>
                            <p className="text-base text-[#13253B]">
                                The security of your information is important to us. Therefore, we take industry-standard
                                security measures to protect your data.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-[#13253B]">4. Third-Party Links</h3>
                            <p className="text-base text-[#13253B]">
                                Our website may contain links to third-party sites. By clicking these links, you may be directed
                                to other websites. However, we are not responsible for the privacy policies of these sites.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-[#13253B]">5. Changes</h3>
                            <p className="text-base text-[#13253B]">
                                If we make any changes to our privacy policy, the updated version will be published on this page.
                            </p>
                        </section>
                    </div>

                    <p className="text-lg text-[#13253B] mt-6">
                        Your privacy is important to us. If you have any questions, feel free to contact us.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PrivacyPolicy;
