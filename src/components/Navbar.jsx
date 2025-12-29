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

const Navbar = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-black h-[80px] border-b border-[#FFFFFF80] flex items-center relative z-50"
        >
            <div className="w-full px-6">
                <div className="flex items-center justify-between">

                    {/* LEFT: Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center"
                    >
                        <img src="/mainlogo.svg" alt="RedSpike" className="h-[50px] w-auto" />
                    </motion.div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-8">

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-2">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.05 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-[6px] text-sm transition-all
                      ${isActive
                                                ? "text-[#D21717] bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]"
                                                : "text-white hover:text-[#D21717]"
                                            }`
                                        }
                                    >
                                        {t(item.key)}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>

                        {/* CONTACT BUTTON (DESKTOP) */}
                        <motion.button
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="hidden md:flex items-center gap-1 px-4 py-2 text-sm text-white rounded-[8px]
                bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]
                border border-[#932424]
                hover:text-[#D21717]
                transition-all
                shadow-[0_0_24px_0px_#A33F3F80]"
                        >
                            <span>{t("nav.contactUs")}</span>
                            <ArrowUpRight size={16} />
                        </motion.button>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-[80px] left-0 w-full bg-black border-t border-[#FFFFFF20]"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.key}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-3 rounded-md text-sm transition-all
                    ${isActive
                                            ? "text-[#D21717] bg-[#D2171720]"
                                            : "text-white hover:text-[#D21717]"
                                        }`
                                    }
                                >
                                    {t(item.key)}
                                </NavLink>
                            ))}

                            {/* CONTACT BUTTON (MOBILE) */}
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                                className="mt-4 flex items-center justify-center gap-1 px-4 py-3 text-sm text-white rounded-[8px]
                  bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]
                  border border-[#932424]"
                            >
                                {t("nav.contactUs")}
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
