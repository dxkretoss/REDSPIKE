import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
    useSpring
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

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

const glowTextVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        y: [0, -1.5, 0],
        textShadow: [
            "0 0 10px rgba(255,70,70,0.35)",
            "0 0 22px rgba(255,70,70,0.7)",
            "0 0 10px rgba(255,70,70,0.35)",
        ],
        transition: {
            duration: 3.2,
            ease: "easeInOut",
        },
    },
};


/* ================= ANIMATED NUMBER ================= */

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    if (value.includes("/")) {
        const [left, right] = value.split("/");
        return (
            <span ref={ref} className="inline-flex items-baseline gap-1">
                <SingleNumber number={parseInt(left, 10)} start={isInView} />
                <span>/</span>
                <SingleNumber number={parseInt(right, 10)} start={isInView} />
            </span>
        );
    }

    const match = value.match(/([\d,]+)(.*)/);
    const number = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
    const suffix = match ? match[2] : "";

    return (
        <span ref={ref} className="inline-flex items-baseline gap-1">
            <SingleNumber number={number} start={isInView} />
            <span>{suffix}</span>
        </span>
    );
};

const SingleNumber = ({ number, start }) => {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) =>
        Math.floor(latest).toLocaleString()
    );

    useEffect(() => {
        if (!start) return;
        const controls = animate(motionValue, number, {
            duration: number < 10 ? 0.6 : 1.3,
            ease: "easeOut",
        });
        return controls.stop;
    }, [start, number, motionValue]);

    return <motion.span>{rounded}</motion.span>;
};

/* ================= STATS ================= */

const stats = [
    { key: "hero.stats.experience", icon: "./intro/intro-1.svg" },
    { key: "hero.stats.vulnerabilities", icon: "./intro/intro-2.svg" },
    { key: "hero.stats.support", icon: "./intro/intro-3.svg" },
    { key: "hero.stats.alignment", icon: "./intro/intro-4.svg" },
];

/* ================= MAIN SECTION ================= */

export default function IntroSection() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

    const containerRef = useRef(null);

    // Raw motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Softer spring = smoother return
    const smoothX = useSpring(x, {
        stiffness: 80,     // ⬇ lower = slower
        damping: 26,       // ⬆ higher = smoother
        mass: 0.8,         // ⬆ heavier = premium feel
    });

    const smoothY = useSpring(y, {
        stiffness: 80,
        damping: 26,
        mass: 0.8,
    });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        isHovering.current = true;

        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(offsetX * 30);
        y.set(offsetY * 30);
    };

    const resetPosition = () => {
        isHovering.current = false;
        x.set(0);
        y.set(0);
    };

    const idleRotateX = useMotionValue(-0.6);
    const idleRotateY = useMotionValue(0.6);

    useEffect(() => {
        animate(idleRotateX, [-0.6, 0.6, -0.6], {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
        });

        animate(idleRotateY, [0.6, -0.6, 0.6], {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
        });
    }, []);


    const isHovering = useRef(false);

    const idleRX = useMotionValue(0);
    const idleRY = useMotionValue(0);

    useEffect(() => {
        const controlsX = animate(idleRX, [-0.4, 0.4, -0.4], {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
        });

        const controlsY = animate(idleRY, [0.4, -0.4, 0.4], {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
        });

        return () => {
            controlsX.stop();
            controlsY.stop();
        };
    }, []);

    const rotateX = useTransform(smoothY, (v) =>
        isHovering.current ? v * -0.1 : idleRX.get()
    );

    const rotateY = useTransform(smoothX, (v) =>
        isHovering.current ? v * 0.1 : idleRY.get()
    );

    const idleY = useMotionValue(0);
    useEffect(() => {
        const controls = animate(idleY, [0, -8, 0], {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        });

        return () => controls.stop();
    }, []);

    const combinedY = useTransform(
        [smoothY, idleY],
        ([hoverY, idle]) => hoverY + idle
    );


    return (
        <motion.section
            ref={sectionRef}
            className="w-full bg-black px-[20px] md:px-[40px] 2xl:px-[90px] mt-20 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
        >
            {/* ===== AMBIENT CYBER PULSE ===== */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(255,60,60,0.12), transparent 70%)",
                }}
                animate={{
                    opacity: [0.25, 0.45, 0.25],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* ===== SCAN LINE OVERLAY ===== */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "120px 100%",
                }}
                animate={{ backgroundPositionX: ["0%", "100%"] }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50"
                style={{ backgroundImage: "url(/protection-bg-image.svg)" }}
            />

            <div className="relative z-10 max-w-[1920px] mx-auto">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.span
                            variants={itemVariants}
                            className="inline-block mb-4 px-3 py-2 text-xs rounded-full bg-[#93242466] text-white"
                        >
                            {t("hero.badge")}
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl text-white leading-tight mb-6 capitalize"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            <span>{t("hero.title.line1")}</span>{" "}
                            <motion.span
                                variants={glowTextVariants}
                                className="font-bold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg,#C22222,#C04646)",
                                }}
                            >
                                {t("hero.title.highlight")}
                            </motion.span>
                            <br />
                            <motion.span
                                variants={glowTextVariants}
                                className="font-bold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg,#C22222,#C04646)",
                                }}
                            >
                                {t("hero.title.line2")}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-[16px] text-white max-w-xl mb-6"
                        >
                            {t("hero.subtitle")}
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-sm text-white/60 max-w-xl mb-8"
                        >
                            {t("hero.description")}
                        </motion.p>

                        <motion.button
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            variants={itemVariants}
                            whileTap={{ scale: 0.96 }}
                            className="
                        inline-flex items-center gap-2
                        px-5 py-2.5 rounded-md text-sm font-medium text-white
                        bg-gradient-to-r from-[rgba(147,36,36,0.25)] to-[rgba(206,67,67,0.25)]
                        border border-[#e47575a2] shadow-[0_0_24px_#A33F3F80]
                        "
                        >
                            {t("hero.cta")}
                            <ArrowUpRight size={16} />
                        </motion.button>


                    </motion.div>

                    {/* RIGHT ILLUSTRATION */}
                    <motion.div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={resetPosition}
                        className="hidden lg:flex justify-center -mr-[20px] md:-mr-[40px] 2xl:-mr-[90px] relative"
                    >
                        {/* TOP IMAGE — CURSOR PARALLAX ONLY */}
                        <motion.img
                            src="/Group 1376156983.svg"
                            alt="Top Illustration"
                            className="absolute z-20 w-[350px] pointer-events-none will-change-transform"
                            style={{
                                x: smoothX,
                                y: combinedY,
                                rotateX,
                                rotateY,
                            }}
                        />


                        {/* BOTTOM IMAGE — STATIC */}
                        <img
                            src="/Group 1376156982.svg"
                            alt="Bottom Illustration"
                            className="relative z-10"
                        />
                    </motion.div>

                </div>

                {/* STATS */}
                <motion.div
                    className="
            max-w-6xl mx-auto mt-12 md:mt-20
            bg-[linear-gradient(180deg,#240303_0%,#0E0202_100%)]
            border border-[#FFFFFF33]
            rounded-[24px]
            p-6 md:p-8
          "
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
                        {stats.map((item, index) => (
                            <motion.div
                                key={item.key}
                                className="flex flex-col"
                                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 0 32px rgba(255,80,80,0.35)",
                                }}
                                transition={{
                                    delay: 0.6 + index * 0.15,
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 p-3 flex items-center justify-center rounded-[12px] bg-[#776767]">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <p className="text-[22px] md:text-[28px] font-semibold text-white">
                                        <AnimatedNumber value={t(`${item.key}.value`)} />
                                    </p>
                                </div>
                                <p className="text-[14px] md:text-[16px] text-[#FFFFFFE5]">
                                    {t(`${item.key}.label`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
