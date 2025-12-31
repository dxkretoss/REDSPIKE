import { useTranslation } from "react-i18next";
import { ArrowUpRight, ShieldCheck, Radar, Lock } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import RotatingNote from "./RotatingNote";
import { useEffect } from "react";

/* ===================== CYBER SQUARES ===================== */

const SQUARE_COUNT = 75;

const CyberSquares = () => {
    return (
        <div className="absolute inset-0 overflow-visible pointer-events-none">
            {Array.from({ length: SQUARE_COUNT }).map((_, i) => {
                const size = Math.random() * 8 + 4;
                const startX = Math.random() * 260 - 130;
                const startY = Math.random() * 260 - 130;
                const travelX = startX * 2.2;
                const travelY = startY * 2.2;

                const duration = 8 + Math.random() * 6;
                const delay = Math.random() * duration; // 🔥 key part

                return (
                    <motion.span
                        key={i}
                        className="absolute bg-red-600"
                        style={{
                            width: size,
                            height: size,
                            top: "50%",
                            left: "50%",
                            boxShadow: "0 0 14px rgba(255,0,0,0.85)",
                            filter: Math.random() > 0.7 ? "blur(1.5px)" : "none",
                        }}
                        initial={{
                            x: startX,
                            y: startY,
                            opacity: 0,
                            scale: 0.6,
                        }}
                        animate={{
                            x: [startX, travelX],
                            y: [startY, travelY],
                            opacity: [0, 1, 1, 0],
                            scale: [0.6, 1, 1.8],
                            rotate: [0, 180],
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "linear", // 🔥 continuous motion
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

    /* Mouse reactive glow */
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const glowX = useTransform(mouseX, [0, window.innerWidth], [-60, 60]);
    const glowY = useTransform(mouseY, [0, window.innerHeight], [-60, 60]);

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 26,
            filter: "blur(6px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.75,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="w-full bg-black px-[20px] md:px-[40px] 2xl:px-[90px] mt-10 relative overflow-hidden">

            {/* ===== SUBTLE GRID SCAN ===== */}
            <motion.div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,0,0,0.25) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
                animate={{ backgroundPositionY: ["0%", "100%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />


            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* ================= LEFT CONTENT ================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* TITLE */}
                    <motion.h1
                        className="text-5xl lg:text-7xl leading-tight"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        <motion.span
                            className="text-white block"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9 }}
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
                                textShadow: [
                                    "0 0 14px rgba(255,70,70,0.4)",
                                    "0 0 36px rgba(255,70,70,1)",
                                    "0 0 14px rgba(255,70,70,0.4)",
                                ],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            {t("offenseHero.title.highlight")}
                        </motion.span>

                        <motion.span
                            className="text-white block"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.15 }}
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
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        transition={{ duration: 3 }}
                        variants={itemVariants}
                        whileTap={{ scale: 0.96 }}
                        className="
                        inline-flex items-center gap-2
                        px-5 py-2.5 rounded-md text-sm font-medium text-white
                        bg-gradient-to-r from-[rgba(147,36,36,0.25)] to-[rgba(206,67,67,0.25)]
                        border border-[#e47575a2] shadow-[0_0_24px_#A33F3F80]
                        "
                    >
                        {t("offenseHero.cta")}
                        <ArrowUpRight size={16} />
                    </motion.button>

                    {/* NOTE */}
                    <p className="mt-6 text-[14px] text-transparent bg-clip-text"
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
                                transition={{ delay: 0.9 + index * 0.2 }}
                                whileHover={{
                                    color: "#FF4D4D",
                                    textShadow: "0 0 12px rgba(255,77,77,0.9)",
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
                        className="relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.94, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1.1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <motion.img
                            src="./hero.svg"
                            alt="Cyber Shield"
                            className="w-full relative z-10"
                            initial={{ filter: "blur(8px)" }}
                            animate={{
                                filter: "blur(0px)",
                                y: [0, -16, 0],
                                rotateZ: [0, 0.6, 0],
                                opacity: [1, 0.96, 1],
                            }}
                            transition={{
                                filter: { duration: 0.8, ease: "easeOut" },
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                rotateZ: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                opacity: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        <CyberSquares />
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
