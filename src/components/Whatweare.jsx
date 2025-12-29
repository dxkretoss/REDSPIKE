import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function Whatweare() {
    const { t } = useTranslation();
    const containerRef = useRef(null);

    // Track scroll progress across the whole component
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative px-4 mt-24 mb-20">
            <div className="relative">

                {/* STICKY HEADER - Stays fixed until the last card pushes it up */}
                <div className="
                    text-center max-w-[1920px] mx-auto mb-20
                    [@media(min-height:991px)]:sticky
                    [@media(min-height:991px)]:top-12
                    z-10
                ">
                    <h2 className="text-4xl md:text-5xl font-medium text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                        {t("Whatweare.headerTitle")}{" "}
                        <span
                            className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                            }}
                        >
                            {t("Whatweare.headerTitleRed")}
                        </span>
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-white leading-relaxed">
                        {t("Whatweare.headerSubtitle")}
                    </p>
                </div>

                {/* CARDS LIST */}
                <div className="flex flex-col items-center gap-[30vh]">
                    {whatWeAreCards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                            index={index}
                            t={t}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ card, index, t, progress }) => {
    // 1. Calculate when this card should start shrinking
    // We want it to start shrinking when the NEXT cards come into view
    const startRange = index * 0.25;

    // 2. Shrink and Dim effect:
    // Scale goes from 1 to a slightly smaller size (e.g., 0.9)
    // Opacity goes from 1 to 0.8 to create depth
    const scale = useTransform(progress, [startRange, 1], [1, 1 - (whatWeAreCards.length - index) * 0.05]);
    const filter = useTransform(
        progress,
        [startRange, startRange + 0.3],
        ["brightness(1)", "brightness(0.8)"]
    );
    return (
        <motion.div
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

            {/* LEFT CONTENT */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white">
                    <img src={card.sortHeaderimg} alt="icon" className="w-4 h-4" />
                    {t(card.sortHeader)}
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    {t(card.titleKey)}
                </h3>

                <ul className="space-y-4 text-sm md:text-base text-white/80 max-w-lg">
                    {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D21717] shrink-0" />
                            <span>{t(point)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative rounded-2xl overflow-hidden">
                <img
                    src={card.image}
                    alt=""
                    className="rounded-xl object-cover w-full h-auto"
                />
                {card?.id === 1 &&
                    <div className="absolute top-8 left-8">
                        <span className="text-3xl"
                            style={{ fontFamily: "Sora, sans-serif" }}>Global Experience and Transparency</span>
                    </div>
                }
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max">
                    <p className="flex items-center gap-3 px-5 py-2 text-sm rounded-xl
                      bg-[#00000040] text-white border border-[#FFFFFF33]
                      backdrop-blur-md shadow-2xl"
                    >
                        <span className="text-3xl font-bold tracking-tighter">
                            {card.badge1}
                        </span>
                        <span className="text-lg font-light opacity-80 leading-none">
                            {card.badge2}
                        </span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};