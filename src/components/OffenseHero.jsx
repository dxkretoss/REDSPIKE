import { useTranslation } from "react-i18next";
import { ArrowUpRight, ShieldCheck, Radar, Lock } from "lucide-react";
import { motion } from "framer-motion";
import RotatingNote from "./RotatingNote";

/* ===================== CYBER SQUARES ===================== */

const SQUARE_COUNT = 75;

const CyberSquares = () => {
    return (
        <div className="absolute inset-0 overflow-visible pointer-events-none">
            {Array.from({ length: SQUARE_COUNT }).map((_, i) => {
                const size = Math.random() * 8 + 4;
                const startX = Math.random() * 260 - 130;
                const startY = Math.random() * 260 - 130;

                return (
                    <motion.span
                        key={i}
                        className="absolute bg-red-600"
                        style={{
                            width: size,
                            height: size,
                            top: "50%",
                            left: "50%",
                            marginLeft: startX,
                            marginTop: startY,
                            boxShadow: "0 0 14px rgba(255,0,0,0.85)",
                            filter: Math.random() > 0.75 ? "blur(1.5px)" : "none",
                        }}
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{
                            scale: [0.2, 1, 2.8],
                            x: startX * 1.6,
                            y: startY * 1.6,
                            rotate: [0, 180],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 4,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    />
                );
            })}
        </div>
    );
};

/* ===================== DATA ===================== */

const features = [
    { key: "offenseHero.features.monitoring", icon: ShieldCheck },
    { key: "offenseHero.features.detection", icon: Radar },
    { key: "offenseHero.features.protection", icon: Lock },
];

/* ===================== COMPONENT ===================== */

export default function OffenseHero() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black px-6 mt-10 relative overflow-hidden">
            {/* CYBER BACKGROUND DRIFT */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* ================= LEFT CONTENT ================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* TITLE */}
                    <motion.h1
                        className="text-5xl lg:text-7xl leading-tight"
                        style={{ fontFamily: "Sora, sans-serif" }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.08 },
                            },
                        }}
                    >
                        <motion.span
                            className="text-white block"
                            variants={{
                                hidden: { y: 40, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                                },
                            }}
                        >
                            {t("offenseHero.title.line1")}
                        </motion.span>

                        <motion.span
                            className="font-bold text-transparent bg-clip-text inline-block"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #C22222, #FF6A6A)",
                            }}
                            animate={{
                                opacity: [0.85, 1, 0.85],
                                textShadow: [
                                    "0 0 14px rgba(255,70,70,0.4)",
                                    "0 0 30px rgba(255,70,70,0.9)",
                                    "0 0 14px rgba(255,70,70,0.4)",
                                ],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {t("offenseHero.title.highlight")}
                        </motion.span>

                        <motion.span
                            className="text-white block"
                            variants={{
                                hidden: { y: 40, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                                },
                            }}
                        >
                            {t("offenseHero.title.line2")}
                        </motion.span>
                    </motion.h1>

                    {/* SUBTITLE */}
                    <motion.p
                        className="text-[16px] text-white max-w-md mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {t("offenseHero.subtitle")}
                    </motion.p>

                    {/* CTA */}
                    <motion.button
                        whileHover={{
                            scale: 1.07,
                            boxShadow: "0 0 42px rgba(255,0,0,0.85)",
                        }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 220, damping: 16 }}
                        className="
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-md text-sm font-medium text-white
              bg-gradient-to-r from-[rgba(147,36,36,0.25)] to-[rgba(206,67,67,0.25)]
              border border-[#932424]
              shadow-[0_0_24px_#A33F3F80]
            "
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    >
                        {t("offenseHero.cta")}
                        <ArrowUpRight size={16} />
                    </motion.button>

                    {/* NOTE */}
                    <p
                        className="mt-6 text-xs text-transparent bg-clip-text"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #FFFFFF 0%, #932424 136.94%)",
                        }}
                    >
                        <RotatingNote interval={4000} />
                    </p>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        {features.map((item, index) => (
                            <motion.div
                                key={item.key}
                                className="flex items-center gap-2 text-white uppercase text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.9 + index * 0.2,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    x: 4,
                                    color: "#FF4D4D",
                                    textShadow: "0 0 12px rgba(255,77,77,0.8)",
                                }}
                            >
                                <img src="/tick.svg" className="w-4" />
                                {t(item.key)}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ================= RIGHT SIDE ================= */}

                <div className="hidden lg:block relative w-[600px] mx-auto">
                    <motion.div
                        className="hidden lg:flex justify-center relative"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.img
                            src="./hero.svg"
                            alt="Cyber Shield"
                            className="w-full relative z-10"
                            animate={{
                                y: [0, -14, 0],
                                scale: [1, 1.02, 1],
                                rotateZ: [0, 0.4, 0],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        />

                        <CyberSquares />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
