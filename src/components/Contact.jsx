import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

/* ================= ANIMATION CONFIG (NO UI IMPACT) ================= */

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -24 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 24 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-black mt-20 mb-20 px-6">
            <div className="max-w-[1920px] mx-auto">

                {/* ================= TITLE ================= */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center text-5xl font-semibold mb-12"
                    style={{ fontFamily: "Sora, sans-serif" }}
                >
                    <span
                        className="font-bold text-transparent bg-clip-text [text-shadow:0_0_9.54px_#E4303099]"
                        style={{
                            backgroundImage:
                                "linear-gradient(90.09deg, #C22222 0.08%, #C04646 78.5%)",
                        }}
                    >
                        {t("contact.titleRed")}
                    </span>{" "}
                    <span className="text-white">{t("contact.titleWhite")}</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ================= LEFT: FORM ================= */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 0 60px rgba(210, 23, 23, 0.45)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 18,
                        }}
                        className="
    rounded-[8px] p-6
    bg-[linear-gradient(180deg,#0B0F16_0%,#240304_100%)]
    border border-[#a5a4a4be]
    shadow-[0_0_10px_0_#0000000D,0_0_44px_0_#A33F3F4D]
  "
                    >

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

                            <motion.button
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="px-6 py-2 rounded-md text-sm font-medium text-white
                bg-gradient-to-r from-[#932424] to-[#CE4343]
                hover:opacity-90 transition"
                            >
                                {t("contact.form.submit")}
                            </motion.button>

                        </form>
                    </motion.div>

                    {/* ================= RIGHT: INFO ================= */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-white space-y-6"
                    >

                        <div>
                            <h3 className="text-[22px] font-semibold mb-2 text-[#932424]"
                                style={{ fontFamily: "Sora, sans-serif" }}>
                                {t("contact.info.title")}
                            </h3>
                            <p className="text-[16px] text-[#FFFFFFCC] max-w-xl">
                                {t("contact.info.description")}
                            </p>
                        </div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <InfoItem
                                icon="./loc.svg"
                                title={t("contact.info.locationTitle")}
                                text={t("contact.info.locationText")}
                            />

                            <InfoItem
                                icon="./avaible.svg"
                                title={t("contact.info.availabilityTitle")}
                                text={t("contact.info.availabilityText")}
                            />

                            <InfoItem
                                icon="./mail.svg"
                                title={t("contact.info.emailTitle")}
                                text={t("contact.info.email")}
                            />

                            <InfoItem
                                icon="./call.svg"
                                title={t("contact.info.phoneTitle")}
                                text={`${t("contact.info.phonePt")}\n${t("contact.info.phoneAo")}`}
                            />
                        </motion.div>

                        {/* ================= NOTE ================= */}
                        <motion.div
                            variants={fadeUp}
                            className="flex items-start gap-3 p-4 rounded-lg
              bg-[#9324244D] border border-[#FFFFFF1A]"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#FFFFFF1A]">
                                <img src="./telegram.svg" />
                            </div>

                            <div className="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#FFFFFF1A]">
                                <img src="./wp.svg" />
                            </div>

                            <p
                                className="text-sm text-white/80"
                                dangerouslySetInnerHTML={{
                                    __html: t("contact.info.note"),
                                }}
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ================= REUSABLE COMPONENTS (UI UNCHANGED) ================= */

const Input = ({ label, placeholder }) => (
    <div>
        <label className="text-[14px] text-[#FFFFFF]">{label}</label>
        <input
            placeholder={placeholder}
            className="mt-2 w-full px-3 py-2 rounded-md text-sm
      bg-black border border-[#b9b9b980]
      text-white placeholder:text-[#FFFFFF]
      focus:outline-none focus:ring-1 focus:ring-[#932424]"
        />
    </div>
);

const Textarea = ({ label, placeholder }) => (
    <div>
        <label className="text-[14px] text-[#FFFFFF]">{label}</label>
        <textarea
            rows={4}
            placeholder={placeholder}
            className="mt-2 w-full px-3 py-2 rounded-md text-sm
      bg-black border border-[#b9b9b980]
      text-white placeholder:text-[#FFFFFF]
      focus:outline-none focus:ring-1 focus:ring-[#932424]"
        />
    </div>
);

const Select = ({ label }) => (
    <div>
        <label className="text-[14px] text-[#FFFFFF]">{label}</label>
        <select
            className="mt-2 w-full px-3 py-2 rounded-md text-sm
      bg-black border border-[#b9b9b980]
      text-white
      focus:outline-none focus:ring-1 focus:ring-[#932424]"
        >
            <option>{label}</option>
            <option>Cyber Security</option>
            <option>Threat Intelligence</option>
            <option>Consulting</option>
        </select>
    </div>
);

const InfoItem = ({ icon, title, text }) => (
    <motion.div variants={fadeUp} className="flex gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#FFFFFF1A]">
            <img src={icon} alt="" />
        </div>
        <div>
            <p className="text-[16px] text-[#FFFFFF] font-semibold">{title}</p>
            <p className="text-[14px] text-[#FFFFFF] whitespace-pre-line">{text}</p>
        </div>
    </motion.div>
);
