import React from "react";
import { useTranslation } from "react-i18next";

const whatWeAreCards = [
    {
        id: 1,
        image: "/what1.svg",
        sortHeaderimg: './medal.svg',
        sortHeader: "Whatweare.card1.securityFits",
        titleKey: "Whatweare.card1.title",
        points: [
            "Whatweare.card1.point1",
            "Whatweare.card1.point2",
            "Whatweare.card1.point3",
        ],
        badge: "10+ Countries",
    },
    {
        id: 2,
        image: "/what2.svg",
        sortHeaderimg: './3star.svg',
        sortHeader: "Whatweare.card2.securityFits",
        titleKey: "Whatweare.card2.title",
        points: [
            "Whatweare.card2.point1",
            "Whatweare.card2.point2",
            "Whatweare.card2.point3",
        ],
        badge: "100+ Projects",
    },
    {
        id: 3,
        image: "/what3.svg",
        sortHeaderimg: './security.svg',
        sortHeader: "Whatweare.card3.securityFits",
        titleKey: "Whatweare.card3.title",
        points: [
            "Whatweare.card3.point1",
            "Whatweare.card3.point2",
            "Whatweare.card3.point3",
        ],
        badge: "10,000+ Secured Assets",
    },
];

export default function Whatweare() {
    const { t } = useTranslation();

    return (
        <section className="px-4 py-28">
            {/* ===== HEADER ===== */}
            <div className="text-center max-w-3xl mx-auto mb-24">
                <h2 className="text-4xl md:text-5xl font-medium text-white">
                    {t("Whatweare.headerTitle")}{" "}
                    <span className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                        style={{
                            backgroundImage:
                                "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                        }}>
                        {t("Whatweare.headerTitleRed")}
                    </span>
                </h2>

                <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
                    {t("Whatweare.headerSubtitle")}
                </p>
            </div>

            {/* ===== 3 CARDS ===== */}
            <div className="flex flex-col gap-24 items-center">
                {whatWeAreCards.map((card) => (
                    <div
                        key={card.id}
                        className="
              w-full max-w-6xl
              rounded-3xl p-10
              grid grid-cols-1 md:grid-cols-2 gap-10 items-center
              bg-[linear-gradient(180deg,#0B0F16_0%,#240303_100%)]
              border border-white/10
              shadow-[0_0_60px_0_#00000099]
              relative overflow-hidden
            "
                    >
                        {/* LEFT */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white">
                                <img src={card.sortHeaderimg} alt="security" />
                                {t(card.sortHeader)}
                            </div>

                            <h3 className="text-3xl font-medium text-white leading-tight">
                                {t(card.titleKey)}
                            </h3>

                            <ul className="space-y-4 text-sm text-white/80 max-w-lg">
                                {card.points.map((point, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 leading-relaxed"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D21717] shrink-0" />
                                        <span>{t(point)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT */}
                        <div className="relative rounded-2xl">
                            <img
                                src={card.image}
                                alt=""
                                className="rounded-xl object-cover w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
