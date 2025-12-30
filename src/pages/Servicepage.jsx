import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Radar, Lock } from "lucide-react";

const services = [
    {
        title: "Offensive Security",
        description:
            "Proactive security testing to identify vulnerabilities before attackers do.",
        icon: Shield,
    },
    {
        title: "Threat Detection",
        description:
            "Continuous monitoring and intelligence-driven detection of malicious activity.",
        icon: Radar,
    },
    {
        title: "System Protection",
        description:
            "Strengthening infrastructure, applications, and networks against attacks.",
        icon: Lock,
    },
];

export default function Servicepage() {
    return (
        <section className="min-h-screen bg-black px-6 py-20 relative overflow-hidden">

            {/* SUBTLE BACKGROUND GLOW */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-5xl mx-auto"
            >
                {/* TITLE */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
                        Our Services
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-sm lg:text-base">
                        We provide comprehensive cybersecurity services designed to help
                        organizations stay resilient against evolving digital threats.
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3 + index * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 0 40px rgba(255,0,0,0.25)",
                                }}
                                className="
                  rounded-xl p-6
                  bg-gradient-to-b from-[#0C0C0C] to-[#070707]
                  border border-[#FFFFFF12]
                "
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <Icon size={36} className="text-[#D21717]" />
                                </div>
                                <h3 className="text-white text-lg font-medium mb-2 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-white/70 text-sm text-center leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* BACK TO HOME */}
                <div className="flex justify-center mt-14">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to="/"
                            className="
                inline-flex items-center gap-2 px-5 py-2.5
                text-sm text-white rounded-md
                bg-gradient-to-r from-[rgba(147,36,36,0.25)] to-[rgba(206,67,67,0.25)]
                border border-[#932424]
                shadow-[0_0_24px_#A33F3F80]
                hover:text-[#D21717]
                transition-all
              "
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </NavLink>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
