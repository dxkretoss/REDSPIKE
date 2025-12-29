import { useTranslation } from "react-i18next";
import { ArrowUpRight, ShieldCheck, Radar, Lock } from "lucide-react";
import RotatingNote from "./RotatingNote";

const features = [
    { key: "offenseHero.features.monitoring", icon: ShieldCheck },
    { key: "offenseHero.features.detection", icon: Radar },
    { key: "offenseHero.features.protection", icon: Lock }
];


export default function OffenseHero() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black px-6 mt-20 relative overflow-hidden">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl lg:text-7xl leading-tight mb-6"
                        style={{ fontFamily: "Sora, sans-serif" }}>
                        <span className="text-white">{t("offenseHero.title.line1")}</span>
                        <br />
                        <span
                            className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                            }}
                        >
                            {t("offenseHero.title.highlight")}
                        </span>

                        <br />
                        <span className="text-white">{t("offenseHero.title.line2")}</span>
                    </h1>

                    <p className="text-[16px] text-white max-w-md mb-6">
                        {t("offenseHero.subtitle")}
                    </p>

                    <button
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                        className="
                            inline-flex items-center gap-2
                            px-5 py-2.5 rounded-md text-sm font-medium text-white
                            bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]
                            border border-[#932424]
                            shadow-[0_0_24px_#A33F3F80]
                            hover:text-[#D21717]
                            transition-all
                        "
                    >
                        {t("offenseHero.cta")}
                        <ArrowUpRight size={16} />
                    </button>

                    <p
                        className="
                            mt-6 text-xs
                            text-transparent
                            bg-clip-text
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #FFFFFF 0%, #932424 136.94%)",
                        }}
                    >
                        <RotatingNote interval={4000} />
                    </p>


                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        {features.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.key}
                                    className="flex items-center gap-2 text-white uppercase"
                                >
                                    {/* <Icon size={14} className="text-[#D21717]" /> */}
                                    <img src="/tick.svg" className="w-4" />
                                    {t(item.key)}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="hidden lg:flex justify-center relative">
                    <img
                        src="/Group 1376156941.svg"
                        alt="Security Illustration"
                    />
                </div>

            </div>
        </section>
    );
}
