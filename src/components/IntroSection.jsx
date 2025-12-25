import { useTranslation } from "react-i18next";
import { Shield, Bug, Headset, CheckCircle, ArrowUpRight } from "lucide-react";

const stats = [
    { key: "hero.stats.experience", icon: Shield },
    { key: "hero.stats.vulnerabilities", icon: Bug },
    { key: "hero.stats.support", icon: Headset },
    { key: "hero.stats.alignment", icon: CheckCircle }
];

export default function IntroSection() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black px-6 py-20 relative overflow-hidden"
            style={{
                backgroundImage: 'url(/protection-bg-image.svg)'
            }}>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full
                             bg-[#93242466]
                             text-[#FFFFFF]">
                            {t("hero.badge")}
                        </span>

                        <h1 className="text-4xl lg:text-5xl text-white leading-tight mb-6  capitalize">
                            {t("hero.title.line1")}{" "}
                            <span className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                                }}>
                                {t("hero.title.highlight")}
                            </span>
                            <br />
                            <span className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                                }}>
                                {t("hero.title.line2")}
                            </span>

                        </h1>

                        <p className="text-[16px] text-white max-w-xl mb-6">
                            {t("hero.subtitle")}
                        </p>

                        <p className="text-sm text-white/60 max-w-xl mb-8">
                            {t("hero.description")}
                        </p>

                        <button
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
                            {t("hero.cta")}
                            <ArrowUpRight size={16} />
                        </button>
                    </div>

                    {/* RIGHT ILLUSTRATION */}
                    <div className="hidden lg:flex justify-center">
                        <img
                            src="/intro.svg"
                            alt="Security Illustration"
                        />
                    </div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.key}
                                className="
                  rounded-xl p-4 text-center
                  bg-gradient-to-br from-[#1a0f0f] to-[#2a0f0f]
                  border border-[#932424]
                  shadow-[0_0_24px_#A33F3F40]
                "
                            >
                                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center
                                rounded-lg border border-[#932424]
                                text-[#D21717]">
                                    <Icon size={18} />
                                </div>

                                <p className="text-lg font-semibold text-white">
                                    {t(`${item.key}.value`)}
                                </p>
                                <p className="text-xs text-white/70">
                                    {t(`${item.key}.label`)}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
