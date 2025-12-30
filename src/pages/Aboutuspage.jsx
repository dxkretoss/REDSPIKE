import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Aboutuspage() {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

            {/* SUBTLE BACKGROUND GLOW */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-xl text-center"
            >
                {/* TITLE */}
                <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
                    About Us
                </h1>

                {/* DESCRIPTION */}
                <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8">
                    We are a security-focused technology team dedicated to building
                    offensive and defensive cybersecurity solutions. Our mission is to
                    help organizations identify vulnerabilities, strengthen systems,
                    and stay resilient against evolving digital threats.
                </p>

                {/* HOME BUTTON */}
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
            </motion.div>
        </section>
    );
}
