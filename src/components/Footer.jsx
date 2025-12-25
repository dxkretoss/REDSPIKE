import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-black border-t border-[#FFFFFF1A] relative">

            {/* Top Section */}
            <div className="max-w-[1390px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <img src="/mainlogo.svg" alt="RedSpike" className="h-[50px] w-auto" />
                        <p className="text-[16px] text-[#FFFFFF] leading-relaxed mt-5">
                            {t("footer.tagline.line1")} <br />
                            {t("footer.tagline.line2")} <br />
                            {t("footer.tagline.line3")}
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="text-[14px] text-[#FFFFFFBF] mb-4 uppercase tracking-wider">
                            {t("footer.usefulLinks.title")}
                        </h4>
                        <ul className="space-y-2 text-[16px] text-[#FFFFFF]">
                            <li className="hover:text-white cursor-pointer">{t("nav.home")}</li>
                            <li className="hover:text-white cursor-pointer">{t("nav.about")}</li>
                            <li className="hover:text-white cursor-pointer">{t("nav.services")}</li>
                            <li className="hover:text-white cursor-pointer">{t("nav.contact")}</li>
                            <li className="hover:text-white cursor-pointer">{t("nav.blog")}</li>
                        </ul>
                    </div>

                    {/* Terms */}
                    <div>
                        <h4 className="text-[14px] text-[#FFFFFFBF] mb-4 uppercase tracking-wider">
                            {t("footer.terms.title")}
                        </h4>
                        <ul className="space-y-2 text-[16px] text-[#FFFFFF]">
                            <li className="hover:text-white cursor-pointer">
                                {t("footer.terms.privacy")}
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                {t("footer.terms.conditions")}
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[14px] text-[#FFFFFFBF] mb-4 uppercase tracking-wider">
                            {t("footer.contact.title")}
                        </h4>

                        <div className="space-y-2 text-sm">
                            <p className="text-white">{t("footer.contact.emailLabel")}</p>
                            <p className=" text-[#D21717]">{t("footer.contact.email")}</p>

                            <p className="text-white mt-4">{t("footer.contact.callLabel")}</p>
                            <p className="text-[#D21717]">{t("footer.contact.phoneIndia")}</p>
                            <p className="text-[#D21717]">{t("footer.contact.phoneUsa")}</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border border-[#FFFFFF40]
                                    flex items-center justify-center
                                    hover:border-[#D21717] hover:text-[#D21717]
                                    transition-all cursor-pointer"
                                >
                                    <Icon size={14} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Divider */}

            {/* Bottom Section */}
            <div className="relative py-10 text-center">
                <div className="absolute  inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-[120px] font-bold tracking-[0.4em] text-white/5">
                        REDSPIKE
                    </h1>
                </div>

                <p className="relative z-10 text-xs text-[#FFFFFF80]">
                    {t("footer.copyright")}
                </p>
            </div>

        </footer>
    );
};

export default Footer;
