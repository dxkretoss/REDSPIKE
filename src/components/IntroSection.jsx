import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

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
        textShadow: [
            "0 0 0px rgba(255,60,60,0)",
            "0 0 18px rgba(255,60,60,0.65)",
            "0 0 12px rgba(255,60,60,0.45)",
        ],
        transition: { duration: 1.4, ease: "easeOut" },
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

    return (
        <motion.section
            ref={sectionRef}
            className="w-full bg-black px-6 mt-20 mb-20 relative overflow-hidden"
            // style={{ backgroundImage: "url(/protection-bg-image.svg)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
        >
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
                            className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-[#93242466] text-white"
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
                                    backgroundImage: "linear-gradient(90deg,#C22222,#C04646)",
                                }}
                            >
                                {t("hero.title.highlight")}
                            </motion.span>
                            <br />
                            <motion.span
                                variants={glowTextVariants}
                                className="font-bold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(90deg,#C22222,#C04646)",
                                }}
                            >
                                {t("hero.title.line2")}
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-[16px] text-white max-w-xl mb-6">
                            {t("hero.subtitle")}
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-sm text-white/60 max-w-xl mb-8">
                            {t("hero.description")}
                        </motion.p>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 0 40px rgba(255,0,0,0.65)",
                            }}
                            whileTap={{ scale: 0.96 }}
                            className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-md text-sm font-medium text-white
                bg-gradient-to-r from-[rgba(147,36,36,0.25)] to-[rgba(206,67,67,0.25)]
                border border-[#932424]
                shadow-[0_0_24px_#A33F3F80]
              "
                        >
                            {t("hero.cta")}
                            <ArrowUpRight size={16} />
                        </motion.button>
                    </motion.div>

                    {/* RIGHT ILLUSTRATION */}
                    <motion.div
                        className="hidden lg:flex justify-center lg:-mr-6 relative"
                    >
                        {/* TOP IMAGE */}
                        <motion.img
                            src="/Group 1376156983.svg"
                            alt="Top Illustration"
                            className="absolute z-20 w-[350px]"
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, -16, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />


                        {/* BOTTOM IMAGE */}
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
                                transition={{
                                    delay: 0.6 + index * 0.15,
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -6,
                                    scale: 1.05,
                                    boxShadow: "0 0 28px rgba(255,0,0,0.45)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 p-3 flex items-center justify-center rounded-[12px] bg-[#776767]">
                                        <img src={item.icon} alt="" className="w-full h-full object-contain" />
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
