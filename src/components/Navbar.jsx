import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

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

    return (
        <header className="w-full bg-black h-[80px] border-b border-[#FFFFFF80] flex items-center">
            <div className="w-full px-6">
                <div className="flex items-center justify-between">

                    {/* LEFT: Logo */}
                    <div className="flex items-center">
                        <img
                            src="/mainlogo.svg"
                            alt="RedSpike"
                            className="h-[50px] w-auto"
                        />
                    </div>

                    {/* RIGHT: Nav + Button */}
                    <div className="flex items-center gap-8">

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.key}
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
                            ))}
                        </nav>

                        {/* Contact Us Button */}
                        <NavLink
                            to="/contact"
                            className="
                                flex items-center gap-1
                                px-4 py-2 text-sm text-white rounded-[8px]
                                bg-gradient-to-r from-[rgba(147,36,36,0.2)] to-[rgba(206,67,67,0.2)]
                                border border-[#932424]
                                hover:text-[#D21717]
                                transition-all
                                shadow-[0_0_24px_0px_#A33F3F80]
                            "
                        >
                            <span>{t("nav.contactUs")}</span>
                            <ArrowUpRight size={16} className="bg-transparent" />
                        </NavLink>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
