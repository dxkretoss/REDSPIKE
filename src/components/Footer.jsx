import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "#", img: "/facebook.svg", alt: "Facebook" },
    { href: "#", img: "/x.svg", alt: "Twitter" },
    { href: "#", img: "/insta.svg", alt: "Instagram" },
];

/* ===== Animation variants ===== */

const footerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const footerItem = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full px-6 bg-black border-t border-[#FFFFFF1A] relative overflow-hidden">
            {/* ===== TOP SECTION ===== */}
            <motion.div
                variants={footerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1920px] mx-auto py-16"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div variants={footerItem}>
                        <img
                            src="/mainlogo.svg"
                            alt="RedSpike"
                            className="h-[50px] w-auto"
                        />
                        <p className="text-[16px] text-[#FFFFFF] leading-relaxed mt-5">
                            {t("footer.tagline.line1")} <br />
                            {t("footer.tagline.line2")} <br />
                            {t("footer.tagline.line3")}
                        </p>
                    </motion.div>

                    {/* Useful Links */}
                    <motion.div variants={footerItem}>
                        <h4 className="text-[14px] text-[#FFFFFFBF] mb-4 uppercase tracking-wider">
                            {t("footer.usefulLinks.title")}
                        </h4>
                        <ul className="space-y-2 text-[16px] text-[#FFFFFF]">
                            {["home", "about", "services", "contact", "blog"].map((key) => (
                                <li
                                    key={key}
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    {t(`nav.${key}`)}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Terms */}
                    <motion.div variants={footerItem}>
                        <h4 className="text-[14px] text-[#FFFFFFBF] mb-4 uppercase tracking-wider">
                            {t("footer.terms.title")}
                        </h4>
                        <ul className="space-y-2 text-[16px] text-[#FFFFFF]">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                {t("footer.terms.privacy")}
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                {t("footer.terms.conditions")}
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={footerItem}>
                        <h4 className="text-[14px] text-[#FFFFFFBF] mb-4 uppercase tracking-wider">
                            {t("footer.contact.title")}
                        </h4>

                        <div className="space-y-2 text-sm">
                            <p className="text-white">{t("footer.contact.emailLabel")}</p>
                            <p className="text-[#D21717]">
                                {t("footer.contact.email")}
                            </p>

                            <p className="text-white mt-4">
                                {t("footer.contact.callLabel")}
                            </p>
                            <p className="text-[#D21717]">
                                {t("footer.contact.phoneIndia")}
                            </p>
                            <p className="text-[#D21717]">
                                {t("footer.contact.phoneUsa")}
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                    className="
                    w-10 h-10 rounded-full
                    bg-[#0E1219] border border-[#FFFFFF33]
                    flex items-center justify-center
                    hover:border-[#D21717]
                    transition-colors cursor-pointer
                  "
                                >
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="w-4 h-4 object-contain"
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ===== BOTTOM SECTION ===== */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative py-10 text-center"
            >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-[60px] sm:text-[90px] md:text-[120px] font-bold tracking-[0.35em] text-white/5"
                        style={{ fontFamily: "Sora, sans-serif" }}>
                        REDSPIKE
                    </h1>
                </div>

                <p className="relative z-10 text-xs text-[#FFFFFF80]">
                    {t("footer.copyright")}
                </p>
            </motion.div>
        </footer>
    );
}
