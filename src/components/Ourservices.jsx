import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const services = [
    { key: "services.offensive", icon: "./ourservice/service-1.svg", type: "redspike" },
    { key: "services.webApi", icon: "./ourservice/service-2.svg", type: "redspike" },
    { key: "services.network", icon: "./ourservice/service-3.svg", type: "redspike" },
    { key: "services.threat", icon: "./ourservice/service-4.svg", type: "redspike" },
    { key: "services.osint", icon: "./ourservice/service-5.svg", type: "redspike" },
    { key: "services.phishing", icon: "./ourservice/service-6.svg", type: "redspike" },
    { key: "services.training", icon: "./ourservice/service-7.svg", type: "redspike" },
    { key: "services.mobile", icon: "./ourservice/service-8.svg", type: "hybrid" },
    { key: "services.forensics", icon: "./ourservice/service-9.svg", type: "hybrid" },
    { key: "services.iot", icon: "./ourservice/service-10.svg", type: "partner" },
    { key: "services.compliance", icon: "./ourservice/service-11.svg", type: "partner" },
];

const bgByType = {
    redspike: "bg-[linear-gradient(180deg,#000000_0%,#170202_100%)]",
    hybrid: "bg-[linear-gradient(180deg,#000000_0%,#1B011B_100%)]",
    partner: "bg-[linear-gradient(180deg,#000000_0%,#03011B_100%)]",
};

const dottype = {
    redspike: "w-4 h-4 rounded-full bg-[#D21717] shadow-[0_0_14px_#D21717]",
    hybrid: "w-4 h-4 rounded-full bg-[#D217CF] shadow-[0_0_14px_#D217C6]",
    partner: "w-4 h-4 rounded-full bg-[#1720D2] shadow-[0_0_14px_#3317D2]",
};

const imgbg = {
    redspike: "bg-[linear-gradient(90deg,#932424_0%,#CE4343_100%)]",
    hybrid: "bg-[linear-gradient(90deg,#93248C_0%,#CE43AB_100%)]",
    partner: "bg-[linear-gradient(90deg,#242693_0%,#4346CE_100%)]",
};

const hoverBorderByType = {
    redspike: "hover:border-b-4 hover:border-[#932424]",
    hybrid: "hover:border-b-4 hover:border-[#93248C]",
    partner: "hover:border-b-4 hover:border-[#4346CE]",
};

/* ================= ANIMATIONS ================= */

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const cardAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const innerAnim = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

/* ================= COMPONENT ================= */

export default function OurServices() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black mt-20 mb-10 px-6 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">

                {/* TITLE */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-5xl mb-4"
                >
                    <span className="text-white">{t("services.titleWhite")}</span>{" "}
                    <span
                        className="font-bold text-transparent bg-clip-text"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #C22222 0%, #C04646 78%)",
                        }}
                    >
                        {t("services.titleRed")}
                    </span>
                </motion.h2>

                {/* DESCRIPTION */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-5xl mx-auto text-center text-white mb-12"
                >
                    {t("services.description")}
                </motion.p>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10"
                >
                    {services.map((item) => (
                        <motion.div
                            key={item.key}
                            variants={cardAnim}
                            whileHover={{ scale: 1.04 }}
                            className={`
                relative rounded-[24px] p-4
                ${bgByType[item.type]}
                border border-[#FFFFFF33]
                ${hoverBorderByType[item.type]}
                shadow-[0_0_44px_#6612124D]
                transition-all
              `}
                        >
                            <span className={`absolute top-4 right-4 ${dottype[item.type]}`} />

                            <motion.div variants={container}>
                                <motion.div variants={innerAnim} className={`w-10 h-10 mb-4 rounded-lg ${imgbg[item.type]}`}>
                                    <img src={item.icon} alt="" className="p-1.5" />
                                </motion.div>

                                <motion.h4 variants={innerAnim} className="text-white mb-2 text-[16px] font-semibold">
                                    {t(`${item.key}.title`)}
                                </motion.h4>

                                <motion.p variants={innerAnim} className="text-white/70 text-sm">
                                    {t(`${item.key}.description`)}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
