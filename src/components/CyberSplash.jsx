import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CyberSplash({ onFinish }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            onFinish();
            document.body.style.overflow = "auto";
        }, 3000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
          fixed inset-0 z-[9999] flex items-center justify-center
          bg-[radial-gradient(circle_at_center,#2a0606_0%,#02070E_70%)]
          overflow-hidden
        "
            >
                {/* ================= CYBER GRID ================= */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,0,0,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.18) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* ================= ENERGY PULSE ================= */}
                <motion.div
                    className="absolute w-[520px] h-[520px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(210,23,23,0.25), transparent 65%)",
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        scale: [0.9, 1.05, 0.9],
                        opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* ================= OUTER RING ================= */}
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full border border-[#D21717]/25"
                    style={{ willChange: "transform" }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* ================= INNER RING ================= */}
                <motion.div
                    className="absolute w-[220px] h-[220px] rounded-full border border-[#D21717]/35"
                    style={{ willChange: "transform, opacity" }}
                    animate={{
                        scale: [1, 1.06, 1],
                        opacity: [0.35, 0.7, 0.35],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* ================= CENTER ================= */}
                <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative text-center z-10"
                >
                    {/* STATUS */}
                    <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-[#D21717] tracking-[6px] text-xs mb-4"
                    >
                        INITIALIZING SECURITY
                    </motion.p>

                    {/* LOGO */}
                    <motion.div
                        className="relative inline-block"
                        animate={{
                            opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Glow */}
                        <div
                            className="absolute inset-0 blur-2xl opacity-40"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(210,23,23,0.6), transparent 60%)",
                            }}
                        />
                        <img
                            src="/mainlogo.svg"
                            alt="RED SPIKE"
                            className="relative z-10 mx-auto"
                        />
                    </motion.div>

                    {/* LOADER */}
                    <div className="mt-8 flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.span
                                key={i}
                                className="w-[6px] h-[24px] bg-[#D21717] rounded-sm origin-bottom"
                                initial={{ opacity: 0.2, scaleY: 0.6 }}
                                animate={{
                                    opacity: [0.2, 1, 0.2],
                                    scaleY: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 1.6,
                                    repeat: Infinity,
                                    delay: i * 0.18,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>

                    {/* SUBTITLE */}
                    <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 0.75, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-4 text-xs text-white tracking-wide"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        ADVANCED CYBER DEFENSE SYSTEM
                    </motion.p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
