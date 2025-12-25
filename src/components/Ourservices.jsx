import { useTranslation } from "react-i18next";
import {
    Shield,
    Globe,
    Network,
    Radar,
    Search,
    MailWarning,
    GraduationCap,
    Smartphone,
    Fingerprint,
    Cpu,
    FileCheck
} from "lucide-react";

const services = [
    { key: "services.offensive", icon: Shield },
    { key: "services.webApi", icon: Globe },
    { key: "services.network", icon: Network },
    { key: "services.threat", icon: Radar },
    { key: "services.osint", icon: Search },
    { key: "services.phishing", icon: MailWarning },
    { key: "services.training", icon: GraduationCap },
    { key: "services.mobile", icon: Smartphone },
    { key: "services.forensics", icon: Fingerprint },
    { key: "services.iot", icon: Cpu },
    { key: "services.compliance", icon: FileCheck }
];

export default function OurServices() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-center text-3xl font-semibold mb-4">
                    <span className="text-white">{t("services.titleWhite")}</span>{" "}
                    <span className="text-[#D21717]">{t("services.titleRed")}</span>
                </h2>

                {/* Description */}
                <p className="max-w-4xl mx-auto text-center text-sm text-white/70 mb-12">
                    {t("services.description")}
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, index) => {
                        const Icon = item.icon;
                        const isPurple = index % 5 === 0;

                        return (
                            <div
                                key={item.key}
                                className="
                  relative rounded-xl p-6
                  bg-gradient-to-br from-[#1a0f0f] to-[#2a0f0f]
                  border border-[#932424]
                  shadow-[0_0_24px_#A33F3F40]
                  hover:shadow-[0_0_36px_#A33F3F80]
                  transition-all
                "
                            >
                                {/* Glow Dot */}
                                <span
                                    className={`absolute -top-2 -right-2 w-3 h-3 rounded-full
                  ${isPurple ? "bg-purple-500" : "bg-red-500"}`}
                                />

                                {/* Icon */}
                                <div className="w-10 h-10 mb-4 flex items-center justify-center
                                rounded-lg border border-[#932424]
                                text-[#D21717]">
                                    <Icon size={20} />
                                </div>

                                {/* Content */}
                                <h4 className="text-sm font-semibold text-white mb-2">
                                    {t(`${item.key}.title`)}
                                </h4>
                                <p className="text-xs text-white/70 leading-relaxed">
                                    {t(`${item.key}.description`)}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
