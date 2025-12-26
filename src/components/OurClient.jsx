import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const sectors = [
    { key: "clients.banking", icon: "./ourclients/bank.svg" },
    { key: "clients.government", icon: "./ourclients/gov.svg" },
    { key: "clients.retail", icon: "./ourclients/retail.svg" },
    { key: "clients.it", icon: "./ourclients/it.svg" },
    { key: "clients.healthcare", icon: "./ourclients/health.svg" },
    { key: "clients.industry", icon: "./ourclients/industry.svg" },
    { key: "clients.telecom", icon: "./ourclients/tele.svg" },
    { key: "clients.transportation", icon: "./ourclients/transport.svg" },
    { key: "clients.service", icon: "./ourclients/service.svg" },
    { key: "clients.energy", icon: "./ourclients/energy.svg" }
];

/* ===== Animation variants (minimal & safe) ===== */

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export default function OurClient() {
    const { t } = useTranslation();

    return (
        <section
            className="w-full bg-black pt-20 pb-5 px-6 relative overflow-hidden"
            style={{
                backgroundImage: "url(./ourclients/bg.svg)",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto">

                {/* ===== TITLE ===== */}
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-5xl mb-4"
                >
                    <span
                        className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                        style={{
                            backgroundImage:
                                "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                        }}
                    >
                        {t("clients.titleRed")}
                    </span>{" "}
                    <span className="text-white">{t("clients.titleWhite")}</span>
                </motion.h2>

                {/* ===== DESCRIPTION ===== */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="max-w-5xl mx-auto text-center text-[16px] text-white mb-12"
                >
                    {t("clients.description")}
                </motion.p>

                {/* ===== GRID ===== */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                >
                    {sectors.map((item) => (
                        <motion.div
                            key={item.key}
                            variants={itemVariants}
                            whileHover={{
                                y: -6,
                                scale: 1.03,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 18,
                            }}
                            className="
                flex flex-col items-center justify-center gap-3
                rounded-xl p-6 text-center
                transition-all
              "
                        >
                            <div
                                className="w-20 h-20 p-4 flex items-center justify-center
                rounded-lg border border-[#932424] bg-[#9324244D]
                backdrop-blur-[12px]"
                            >
                                <img src={item.icon} alt="" />
                            </div>

                            <p className="text-[18px] text-white whitespace-nowrap">
                                {t(item.key)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
