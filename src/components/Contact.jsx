import { MapPin, Clock, Mail, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-center text-3xl font-semibold mb-12">
                    <span className="text-[#D21717]">{t("contact.titleRed")}</span>{" "}
                    <span className="text-white">{t("contact.titleWhite")}</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: FORM */}
                    <div className="rounded-xl p-6 bg-gradient-to-br from-[#1a0f0f] to-[#2a0f0f]
                          border border-[#E0E0E0]">
                        <form className="space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label={t("contact.form.firstName")} placeholder={t("contact.form.firstNamePlaceholder")} />
                                <Input label={t("contact.form.email")} placeholder={t("contact.form.emailPlaceholder")} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label={t("contact.form.phone")} placeholder={t("contact.form.phonePlaceholder")} />
                                <Input label={t("contact.form.company")} placeholder={t("contact.form.companyPlaceholder")} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label={t("contact.form.role")} placeholder={t("contact.form.rolePlaceholder")} />
                                <Select label={t("contact.form.service")} />
                            </div>

                            <Textarea
                                label={t("contact.form.message")}
                                placeholder={t("contact.form.messagePlaceholder")}
                            />

                            <button
                                className="mt-4 px-6 py-2 rounded-md text-sm font-medium text-white
                           bg-gradient-to-r from-[#932424] to-[#CE4343]
                           shadow-[0_0_24px_#A33F3F80] hover:opacity-90 transition"
                            >
                                {t("contact.form.submit")}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: INFO */}
                    <div className="text-white space-y-6">

                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-[#D21717]">
                                {t("contact.info.title")}
                            </h3>
                            <p className="text-sm text-white/70 max-w-md">
                                {t("contact.info.description")}
                            </p>
                        </div>

                        <InfoItem
                            icon={<MapPin size={18} />}
                            title={t("contact.info.locationTitle")}
                            text={t("contact.info.locationText")}
                        />

                        <InfoItem
                            icon={<Clock size={18} />}
                            title={t("contact.info.availabilityTitle")}
                            text={t("contact.info.availabilityText")}
                        />

                        <InfoItem
                            icon={<Mail size={18} />}
                            title={t("contact.info.emailTitle")}
                            text={t("contact.info.email")}
                        />

                        <InfoItem
                            icon={<Phone size={18} />}
                            title={t("contact.info.phoneTitle")}
                            text={`${t("contact.info.phonePt")}\n${t("contact.info.phoneAo")}`}
                        />

                        {/* Bottom Note */}
                        <div className="flex items-start gap-3 p-4 rounded-lg
                            bg-gradient-to-r from-[#1a0f0f] to-[#2a0f0f]
                            border border-[#932424]">
                            <Send size={18} className="text-[#D21717] mt-1" />
                            <p className="text-sm text-white/80">
                                {t("contact.info.note")}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Reusable Components ---------- */

const Input = ({ label, placeholder }) => (
    <div>
        <label className="text-xs text-white/70">{label}</label>
        <input
            placeholder={placeholder}
            className="mt-1 w-full px-3 py-2 rounded-md text-sm
                 bg-black border border-[#932424]
                 text-white placeholder:text-white/40
                 focus:outline-none focus:ring-1 focus:ring-[#D21717]"
        />
    </div>
);

const Textarea = ({ label, placeholder }) => (
    <div>
        <label className="text-xs text-white/70">{label}</label>
        <textarea
            rows={4}
            placeholder={placeholder}
            className="mt-1 w-full px-3 py-2 rounded-md text-sm
                 bg-black border border-[#932424]
                 text-white placeholder:text-white/40
                 focus:outline-none focus:ring-1 focus:ring-[#D21717]"
        />
    </div>
);

const Select = ({ label }) => (
    <div>
        <label className="text-xs text-white/70">{label}</label>
        <select
            className="mt-1 w-full px-3 py-2 rounded-md text-sm
                 bg-black border border-[#932424]
                 text-white focus:outline-none focus:ring-1 focus:ring-[#D21717]"
        >
            <option>{label}</option>
            <option>Cyber Security</option>
            <option>Threat Intelligence</option>
            <option>Consulting</option>
        </select>
    </div>
);

const InfoItem = ({ icon, title, text }) => (
    <div className="flex gap-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-full
                    border border-[#932424] text-[#D21717]">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-white/70 whitespace-pre-line">{text}</p>
        </div>
    </div>
);
