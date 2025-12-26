import { useTranslation } from "react-i18next";
import { Shield, Bug, Headset, CheckCircle, ArrowUpRight } from "lucide-react";

const stats = [
    { key: "hero.stats.experience", icon: './intro/intro-1.svg' },
    { key: "hero.stats.vulnerabilities", icon: './intro/intro-2.svg' },
    { key: "hero.stats.support", icon: './intro/intro-3.svg' },
    { key: "hero.stats.alignment", icon: './intro/intro-4.svg' }
];

export default function IntroSection() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black px-6 pt-20 relative overflow-hidden"
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
                <div className="max-w-6xl mx-auto flex gap-20 mt-20 items-center bg-[linear-gradient(180deg,#240303_0%,#0E0202_100%)] border border-[#FFFFFF33] rounded-[24px] p-6">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.key}>
                                <div className="flex items-center gap-2">
                                    <div className="w-14 h-14 mb-3 p-3 flex items-center justify-center
                                rounded-[12px] bg-[#776767]">
                                        <img src={Icon} alt={Icon} />
                                    </div>

                                    <p className="text-[28px] font-semibold text-white">
                                        {t(`${item.key}.value`)}
                                    </p>
                                </div>
                                <p className="text-[16px] text-[#FFFFFFE5]">
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
