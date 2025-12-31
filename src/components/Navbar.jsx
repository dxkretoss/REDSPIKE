import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
    { key: "nav.home", path: "/" },
    { key: "nav.about", path: "/about" },
    { key: "nav.contacts", path: "/contacts" },
    { key: "nav.services", path: "/services" },
    { key: "nav.tools", path: "/tools" },
    { key: "nav.blog", path: "/blog" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const itemVariants = {
    hidden: { y: -6, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 },
    },
};

const Navbar = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-black h-[80px] border-b border-[#FFFFFF80] relative z-50"
        >
            {/* ===== OUTER FULL WIDTH ===== */}
            <div className="w-full px-[20px] md:px-[40px] 2xl:px-[90px]">
                {/* ===== INNER CONTAINER ===== */}
                <div className="max-w-[1920px] mx-auto flex items-center justify-between h-[80px]">

                    {/* LOGO */}
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center"
                    >
                        <img
                            src="/mainlogo.svg"
                            alt="RedSpike"
                            className="h-[50px] w-auto"
                        />
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-8">

                        {/* DESKTOP NAV */}
                        <motion.nav
                            className="hidden md:flex items-center gap-2"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.key}
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                    className="relative"
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-[6px] text-sm transition-all relative
                      ${isActive
                                                ? "text-[#D21717] bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]"
                                                : "text-white hover:text-[#D21717]"
                                            }`
                                        }
                                    >
                                        {t(item.key)}

                                        {/* HOVER LINE */}
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute left-2 right-2 bottom-1 h-[1px] bg-[#D21717]"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </NavLink>
                                </motion.div>
                            ))}
                        </motion.nav>

                        {/* CTA BUTTON */}
                        <motion.button
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="
                                hidden md:flex items-center gap-1 px-4 py-2 text-sm text-white rounded-[8px]
                                bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]
                                border border-[#932424]
                                hover:text-[#D21717]
                                transition-all shadow-[0px_0px_24px_0px_#A33F3F80]
                            "
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                        >
                            {t("nav.contactUs")}
                            <ArrowUpRight size={16} />
                        </motion.button>

                        {/* MOBILE TOGGLE */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden text-white"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* ===== MOBILE MENU ===== */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-[80px] left-0 w-full bg-black border-t border-[#FFFFFF20]"
                    >
                        <div className="w-full">
                            <div className="max-w-[1920px] mx-auto">
                                <motion.div
                                    className="flex flex-col p-6 gap-4"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.08 } },
                                    }}
                                >
                                    {navItems.map((item) => (
                                        <motion.div key={item.key} variants={itemVariants}>
                                            <NavLink
                                                to={item.path}
                                                onClick={() => setOpen(false)}
                                                className={({ isActive }) =>
                                                    `px-4 py-3 rounded-md text-sm transition-all block
                          ${isActive
                                                        ? "text-[#D21717] bg-[#D2171720]"
                                                        : "text-white hover:text-[#D21717]"
                                                    }`
                                                }
                                            >
                                                {t(item.key)}
                                            </NavLink>
                                        </motion.div>
                                    ))}

                                    {/* MOBILE CTA */}
                                    <motion.button
                                        whileTap={{ scale: 0.96 }}
                                        className="
                      mt-4 flex items-center justify-center gap-1 px-4 py-3 text-sm text-white rounded-[8px]
                      bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]
                      border border-[#932424]
                    "
                                        onClick={() => {
                                            setOpen(false);
                                            document.getElementById("contact")?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }}
                                    >
                                        {t("nav.contactUs")}
                                        <ArrowUpRight size={16} />
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
