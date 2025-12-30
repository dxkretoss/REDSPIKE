import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    animate,
    useInView,
} from "framer-motion";

/* ================= COUNT UP ================= */

const CountUpOnView = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const match = value.match(/([\d,]+)\s*(.*)/);
    const number = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
    const suffix = match ? match[2] : "";

    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) =>
        Math.floor(latest).toLocaleString()
    );

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(motionValue, number, {
            duration: 1.2,
            ease: "easeOut",
        });
        return controls.stop;
    }, [isInView, number, motionValue]);

    return (
        <span ref={ref} className="inline-flex items-baseline">
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </span>
    );
};

/* ================= DATA ================= */

const whatWeAreCards = [
    {
        id: 1,
        image: "/what1.svg",
        sortHeaderimg: "./medal.svg",
        sortHeader: "Whatweare.card1.securityFits",
        titleKey: "Whatweare.card1.title",
        points: [
            "Whatweare.card1.point1",
            "Whatweare.card1.point2",
            "Whatweare.card1.point3",
        ],
        badge1: "10+ ",
        badge2: "Countries",
    },
    {
        id: 2,
        image: "/what2.svg",
        sortHeaderimg: "./3star.svg",
        sortHeader: "Whatweare.card2.securityFits",
        titleKey: "Whatweare.card2.title",
        points: [
            "Whatweare.card2.point1",
            "Whatweare.card2.point2",
            "Whatweare.card2.point3",
        ],
        badge1: "100+ ",
        badge2: "Projects",
    },
    {
        id: 3,
        image: "/what3.svg",
        sortHeaderimg: "./security.svg",
        sortHeader: "Whatweare.card3.securityFits",
        titleKey: "Whatweare.card3.title",
        points: [
            "Whatweare.card3.point1",
            "Whatweare.card3.point2",
            "Whatweare.card3.point3",
        ],
        badge1: "10,000+ ",
        badge2: "Secured Assets",
    },
];

/* ================= SECTION ================= */

export default function Whatweare() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-120px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative px-4 mt-24 mb-20">
            <div className="relative">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    animate={
                        isInView
                            ? { opacity: 1, y: 0, filter: "blur(0px)" }
                            : {}
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
                        text-center max-w-[1920px] mx-auto mb-20
                        [@media(min-height:900px)]:sticky
                        [@media(min-height:900px)]:top-12
                        z-10
                    "
                >
                    <h2
                        className="text-4xl md:text-5xl font-medium text-white"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        {t("Whatweare.headerTitle")}{" "}
                        <span
                            className="font-bold text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg,#C22222 0%,#C04646 78%)",
                                textShadow: "0 0 12px rgba(228,48,48,0.6)",
                            }}
                        >
                            {t("Whatweare.headerTitleRed")}
                        </span>
                    </h2>

                    <p className="mt-4 text-sm md:text-base text-white leading-relaxed">
                        {t("Whatweare.headerSubtitle")}
                    </p>
                </motion.div>

                {/* CARDS */}
                <div className="flex flex-col items-center gap-[30vh]">
                    {whatWeAreCards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                            index={index}
                            t={t}
                            progress={scrollYProgress}
                            sectionInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ================= CARD ================= */

const Card = ({ card, index, t, progress, sectionInView }) => {
    const startRange = index * 0.25;

    const scale = useTransform(
        progress,
        [startRange, 1],
        [1, 1 - (whatWeAreCards.length - index) * 0.05]
    );

    const filter = useTransform(
        progress,
        [startRange, startRange + 0.3],
        ["brightness(1)", "brightness(0.8)"]
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={
                sectionInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : {}
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
                scale,
                filter,
                zIndex: index + 1,
                "--i": index,
            }}
            className="
        sticky
        [--cardTop:80px]
        [@media(min-height:991px)]:[--cardTop:calc(180px+var(--i)*25px)]
        top-[var(--cardTop)]
        w-full max-w-6xl
        rounded-3xl p-8 md:p-10
        grid grid-cols-1 md:grid-cols-2 gap-10 items-center
        bg-[linear-gradient(180deg,#0B0F16_0%,#240303_100%)]
        border border-white/10
        shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.9)]
      "
        >
            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white">
                    <img src={card.sortHeaderimg} alt="" className="w-4 h-4" />
                    {t(card.sortHeader)}
                </div>

                <h3
                    className="text-2xl md:text-3xl font-medium text-white leading-tight"
                    style={{ fontFamily: "Sora, sans-serif" }}
                >
                    {t(card.titleKey)}
                </h3>

                <ul className="space-y-4 text-sm md:text-base text-white/80 max-w-lg">
                    {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#D21717]" />
                            <span>{t(point)}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* RIGHT */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden"
            >
                <img src={card.image} alt="" className="rounded-xl w-full" />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
                    <p className="flex items-center gap-3 px-5 py-2 text-sm rounded-xl
            bg-[#00000040] text-white border border-white/20
            backdrop-blur-md shadow-2x whitespace-nowrap"
                    >
                        <span className="text-3xl font-bold tracking-tighter">
                            <CountUpOnView value={card.badge1} />
                        </span>
                        <span className="text-lg opacity-80">
                            {card.badge2}
                        </span>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};
