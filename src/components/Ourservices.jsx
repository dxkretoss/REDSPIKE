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
    hidden: { opacity: 0, scale: 0.92 },
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

const iconPop = {
    hidden: {
        opacity: 0,
        scale: 0.7,
        y: 10,
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const glowPulse = {
    animate: {
        scale: [1, 1.25, 1],
        opacity: [0.6, 1, 0.6],
        transition: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};


/* ================= COMPONENT ================= */

export default function OurServices() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black mt-20  px-[20px] md:px-[40px] 2xl:px-[90px] relative overflow-hidden">

            {/* ===== AMBIENT CYBER PULSE (SLOWED) ===== */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(255,60,60,0.10), transparent 70%)",
                    willChange: "opacity, transform",
                }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.06, 1],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* ===== SCAN LINE OVERLAY (SLOWED) ===== */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "140px 100%",
                    willChange: "background-position",
                }}
                animate={{ backgroundPositionX: ["0%", "100%"] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <div className="relative z-10 max-w-[1920px] mx-auto">

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


                {/* ===== LEGEND ===== */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-10"
                >
                    {/* REDSPIKE */}
                    <motion.div variants={item} className="flex flex-col items-center gap-3">
                        <motion.span
                            variants={glowPulse}
                            animate="animate"
                            className="w-4 h-4 rounded-full bg-[#D21717] shadow-[0_0_14px_0_#D21717]"
                        />
                        <span className="text-white text-[14px] font-medium tracking-wide">
                            REDSPIKE
                        </span>
                    </motion.div>

                    <div className="h-8 w-px bg-white/30" />

                    {/* HYBRID */}
                    <motion.div variants={item} className="flex flex-col items-center gap-3">
                        <motion.span
                            variants={glowPulse}
                            animate="animate"
                            className="w-4 h-4 rounded-full bg-[#D217CF] shadow-[0_0_14px_0_#D217C6]"
                        />
                        <span className="text-white text-[14px] font-medium tracking-wide">
                            HYBRID
                        </span>
                    </motion.div>

                    <div className="h-8 w-px bg-white/30" />

                    {/* PARTNERS */}
                    <motion.div variants={item} className="flex flex-col items-center gap-3">
                        <motion.span
                            variants={glowPulse}
                            animate="animate"
                            className="w-4 h-4 rounded-full bg-[#1720D2] shadow-[0_0_14px_0_#3317D2]"
                        />
                        <span className="text-white text-[14px] font-medium tracking-wide">
                            PARTNERS
                        </span>
                    </motion.div>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10"
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={item.key}
                            variants={cardAnim}
                            style={{ willChange: "transform" }}
                            animate={{
                                y: [0, -3, 0],
                            }}
                            transition={{
                                duration: 14 + index,
                                delay: index * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -6,
                            }}
                            className={`
                                    relative rounded-[24px] p-4
                                    ${bgByType[item.type]}
                                    border border-[#FFFFFF33]
                                    ${hoverBorderByType[item.type]}                
                                    transition-all
                                `}
                        >
                            <span className={`absolute top-4 right-4 ${dottype[item.type]}`} />

                            <motion.div variants={container}>
                                <motion.div
                                    variants={iconPop}
                                    style={{ willChange: "transform, opacity" }}
                                    className={`
                                        w-10 h-10  mb-4 rounded-lg ${imgbg[item.type]}
                                        relative
                                    `}
                                >
                                    {/* subtle glow layer */}
                                    <span
                                        className="absolute inset-0 rounded-lg opacity-30 blur-md"
                                        style={{
                                            background: "inherit",
                                        }}
                                    />

                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="relative z-10 p-1.5"
                                    />
                                </motion.div>


                                <motion.h4
                                    variants={innerAnim}
                                    className="text-white mb-2 text-[16px] font-semibold"
                                >
                                    {t(`${item.key}.title`)}
                                </motion.h4>

                                <motion.p
                                    variants={innerAnim}
                                    className="text-white/70 text-sm"
                                >
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
