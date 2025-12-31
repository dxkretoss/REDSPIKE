import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

/* ================= ANIMATION CONFIG ================= */

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

/* ================= COMPONENT ================= */

export default function Contact() {
    const { t } = useTranslation();

    /* ===== FORM STATE ===== */
    const [form, setForm] = useState({
        firstName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    /* ===== VALIDATION ===== */
    const validate = () => {
        const newErrors = {};

        if (!form.firstName.trim())
            newErrors.firstName = "First name is required";

        if (!form.email.trim())
            newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(form.email))
            newErrors.email = "Enter a valid email";

        if (!form.phone.trim())
            newErrors.phone = "Phone number is required";
        else if (form.phone.length < 8)
            newErrors.phone = "Enter a valid phone number";

        if (!form.message.trim())
            newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Form submitted:", form);
        // API integration here
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section className="w-full bg-black mt-20 mb-20">
            <div className="max-w-[1390px] mx-auto px-[20px] md:px-[40px] 2xl:px-[90px]">

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
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    name="firstName"
                                    label={t("contact.form.firstName")}
                                    value={form.firstName}
                                    onChange={handleChange}
                                    error={errors.firstName}
                                />
                                <Input
                                    name="email"
                                    label={t("contact.form.email")}
                                    value={form.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    name="phone"
                                    label={t("contact.form.phone")}
                                    value={form.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                />
                                <Input
                                    name="company"
                                    label={t("contact.form.company")}
                                    value={form.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    name="role"
                                    label={t("contact.form.role")}
                                    value={form.role}
                                    onChange={handleChange}
                                />
                                <Select
                                    name="service"
                                    label={t("contact.form.service")}
                                    value={form.service}
                                    onChange={handleChange}
                                />
                            </div>

                            <Textarea
                                name="message"
                                label={t("contact.form.message")}
                                value={form.message}
                                onChange={handleChange}
                                error={errors.message}
                            />

                            <motion.button
                                type="submit"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="
                  px-6 py-2 rounded-md text-sm font-medium text-white
                  bg-gradient-to-r from-[#932424] to-[#CE4343]
                  hover:opacity-90 transition
                "
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
                            <h3
                                className="text-[22px] font-semibold mb-2 text-[#932424]"
                                style={{ fontFamily: "Sora, sans-serif" }}
                            >
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
                            className="flex flex-col items-center text-center lg:flex-row lg:text-left gap-3 p-4 rounded-lg
              bg-[#9324244D] border border-[#FFFFFF1A]"
                        >
                            <div className="flex gap-3">
                                <div className="w-14 h-12 flex items-center justify-center rounded-[8px] bg-[#FFFFFF1A] cursor-pointer">
                                    <img src="./telegram.svg" />
                                </div>

                                <div className="w-14 h-12 flex items-center justify-center rounded-[8px] bg-[#FFFFFF1A] cursor-pointer">
                                    <img src="./wp.svg" />
                                </div>
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

/* ================= REUSABLE COMPONENTS ================= */

const Input = ({ label, error, ...props }) => (
    <div>
        <label className="text-[14px] text-[#FFFFFF]">{label}</label>
        <input
            {...props}
            className={`
        mt-2 w-full px-3 py-2 rounded-md text-sm
        bg-black border
        ${error ? "border-red-500" : "border-[#b9b9b980]"}
        text-white placeholder:text-[#FFFFFF]
        focus:outline-none focus:ring-1 focus:ring-[#932424]
      `}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
);

const Textarea = ({ label, error, ...props }) => (
    <div>
        <label className="text-[14px] text-[#FFFFFF]">{label}</label>
        <textarea
            rows={4}
            {...props}
            className={`
        mt-2 w-full px-3 py-2 rounded-md text-sm
        bg-black border
        ${error ? "border-red-500" : "border-[#b9b9b980]"}
        text-white placeholder:text-[#FFFFFF]
        focus:outline-none focus:ring-1 focus:ring-[#932424]
      `}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
);

const Select = ({ label, ...props }) => (
    <div>
        <label className="text-[14px] text-[#FFFFFF]">{label}</label>
        <select
            {...props}
            className="
        mt-2 w-full px-3 py-2 rounded-md text-sm
        bg-black border border-[#b9b9b980]
        text-white
        focus:outline-none focus:ring-1 focus:ring-[#932424]
      "
        >
            <option value="">{label}</option>
            <option>Cyber Security</option>
            <option>Threat Intelligence</option>
            <option>Consulting</option>
        </select>
    </div>
);

const InfoItem = ({ icon, title, text }) => (
    <motion.div
        variants={fadeUp}
        className="flex gap-4 items-start"
    >
        {/* ICON */}
        <div
            className="
        w-12 h-12 flex items-center justify-center
        rounded-[8px] bg-[#FFFFFF1A]
        shrink-0
      "
        >
            <img
                src={icon}
                alt=""
                className="w-7 h-7 object-contain"
            />
        </div>

        {/* TEXT */}
        <div>
            {/* Title */}
            <p className="text-[16px] text-white font-semibold leading-snug">
                {title}
            </p>

            {/* Description */}
            <p className="text-[14px] text-white/90 leading-relaxed whitespace-pre-line">
                {text}
            </p>
        </div>
    </motion.div>
);

