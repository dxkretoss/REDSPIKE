import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
    { key: "services.compliance", icon: "./ourservice/service-11.svg", type: "partner" }
];

const bgByType = {
    redspike: "bg-[linear-gradient(180deg,#000000_0%,#170202_100%)]",
    hybrid: "bg-[linear-gradient(180deg,#000000_0%,#1B011B_100%)]",
    partner: "bg-[linear-gradient(180deg,#000000_0%,#03011B_100%)]",
};

const dottype = {
    redspike: "w-4 h-4 rounded-full bg-[#D21717] shadow-[0_0_14px_0_#D21717]",
    hybrid: "w-4 h-4 rounded-full bg-[#D217CF] shadow-[0_0_14px_0_#D217C6]",
    partner: "w-4 h-4 rounded-full bg-[#1720D2] shadow-[0_0_14px_0_#3317D2]",
};

const imgbg = {
    redspike:
        "bg-[linear-gradient(90deg,#932424_0%,#CE4343_100%)] shadow-[0_0_14px_0_#681D1D]",
    hybrid:
        "bg-[linear-gradient(90deg,#93248C_0%,#CE43AB_100%)] shadow-[0_0_14px_0_#681D5A]",
    partner:
        "bg-[linear-gradient(90deg,#242693_0%,#4346CE_100%)] shadow-[0_0_14px_0_#241D68]",
};

const hoverBorderByType = {
    redspike: "hover:border-b-4 hover:border-[#932424]",
    hybrid: "hover:border-b-4 hover:border-[#93248C]",
    partner: "hover:border-b-4 hover:border-[#4346CE]",
};

/* ================= ANIMATION CONFIG (SAFE) ================= */

const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
};

const scaleFade = {
    hidden: { opacity: 0, scale: 0.96 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function OurServices() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black pt-20 pb-5 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* ===== TITLE ===== */}
                <motion.h2
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center text-5xl mb-4"
                >
                    <span className="text-white">{t("services.titleWhite")}</span>{" "}
                    <span
                        className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                        style={{
                            backgroundImage:
                                "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                        }}
                    >
                        {t("services.titleRed")}
                    </span>
                </motion.h2>

                {/* ===== DESCRIPTION ===== */}
                <motion.p
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center text-[16px] text-white mb-12"
                >
                    {t("services.description")}
                </motion.p>

                {/* ===== LEGEND ===== */}
                <motion.div
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-10"
                >
                    {/* unchanged legend content */}
                    {/* REDSPIKE */}
                    <div className="flex flex-col items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#D21717] shadow-[0_0_14px_0_#D21717]" />
                        <span className="text-white text-lg font-medium tracking-wide">
                            REDSPIKE
                        </span>
                    </div>

                    <div className="h-8 w-px bg-white/30" />

                    <div className="flex flex-col items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#D217CF] shadow-[0_0_14px_0_#D217C6]" />
                        <span className="text-white text-lg font-medium tracking-wide">
                            HYBRID
                        </span>
                    </div>

                    <div className="h-8 w-px bg-white/30" />

                    <div className="flex flex-col items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1720D2] shadow-[0_0_14px_0_#3317D2]" />
                        <span className="text-white text-lg font-medium tracking-wide">
                            PARTNERS
                        </span>
                    </div>
                </motion.div>

                {/* ===== GRID ===== */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
                >
                    {services.map((item) => (
                        <motion.div
                            key={item.key}
                            variants={scaleFade}
                            className={`
                relative rounded-[24px] p-4
                ${bgByType[item.type]}
                border border-[#FFFFFF33]
                ${hoverBorderByType[item.type]}
                shadow-[0_0_44px_0_#6612124D]
                transition-all duration-300
              `}
                        >
                            <span
                                className={`absolute top-4 right-4 ${dottype[item.type]}`}
                            />

                            <div
                                className={`w-10 h-10 mb-4 flex items-center justify-center rounded-lg ${imgbg[item.type]}`}
                            >
                                <img src={item.icon} alt="" className="p-1.5" />
                            </div>

                            <h4 className="text-[15px] font-medium text-white mb-2">
                                {t(`${item.key}.title`)}
                            </h4>
                            <p className="text-[12px] text-white leading-relaxed">
                                {t(`${item.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
