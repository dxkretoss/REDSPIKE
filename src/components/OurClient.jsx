import { useTranslation } from "react-i18next";
import {
    Landmark,
    Gavel,
    Store,
    Monitor,
    HeartPulse,
    Factory,
    Radio,
    Truck,
    Building2,
    Zap
} from "lucide-react";

const sectors = [
    { key: "clients.banking", icon: Landmark },
    { key: "clients.government", icon: Gavel },
    { key: "clients.retail", icon: Store },
    { key: "clients.it", icon: Monitor },
    { key: "clients.healthcare", icon: HeartPulse },
    { key: "clients.industry", icon: Factory },
    { key: "clients.telecom", icon: Radio },
    { key: "clients.transportation", icon: Truck },
    { key: "clients.service", icon: Building2 },
    { key: "clients.energy", icon: Zap }
];

export default function OurClient() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-center text-3xl font-semibold mb-4">
                    <span className="text-[#D21717]">{t("clients.titleRed")}</span>{" "}
                    <span className="text-white">{t("clients.titleWhite")}</span>
                </h2>

                {/* Description */}
                <p className="max-w-4xl mx-auto text-center text-sm text-white/70 mb-12">
                    {t("clients.description")}
                </p>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {sectors.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.key}
                                className="
                                flex flex-col items-center justify-center gap-3
                                rounded-xl p-6 text-center
                                transition-all
                                "
                            >
                                <div className="w-12 h-12 flex items-center justify-center
                                rounded-lg border border-[#932424]
                                text-[#D21717]">
                                    <Icon size={22} />
                                </div>

                                <p className="text-sm text-white">
                                    {t(item.key)}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
