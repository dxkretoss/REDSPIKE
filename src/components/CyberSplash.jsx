import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CyberSplash({ onFinish }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            onFinish();
            document.body.style.overflow = "auto";
        }, 2800);

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
                transition={{ duration: 0.6 }}
                className="
          fixed inset-0 z-[9999] flex items-center justify-center
          bg-[radial-gradient(circle_at_center,#2a0606_0%,#02070E_65%)]
          overflow-hidden
        "
            >
                {/* 🔲 Cyber Grid */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.15) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* 🔴 Rotating Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute w-[280px] h-[280px] rounded-full
          border border-[#D21717]/30"
                />

                {/* 🔴 Pulsing Inner Ring */}
                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.4 }}
                    className="absolute w-[200px] h-[200px] rounded-full
          border border-[#D21717]/40"
                />

                {/* 🧠 CENTER CONTENT */}
                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative text-center"
                >
                    {/* 🔐 Status */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#D21717] tracking-[6px] text-xs mb-4"
                    >
                        INITIALIZING SECURITY
                    </motion.p>

                    {/* 🔥 BRAND */}
                    <motion.img
                        src="/mainlogo.svg"   // ← your logo path
                        alt="RED SPIKE"
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* 🔐 Cyber Boot Loader */}
                    <div className="mt-8 flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0.2, scaleY: 0.6 }}
                                animate={{
                                    opacity: [0.2, 1, 0.2],
                                    scaleY: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                    ease: "easeInOut",
                                }}
                                className="w-[6px] h-[24px] bg-[#D21717] rounded-sm origin-bottom"
                            />
                        ))}
                    </div>

                    {/* 🧾 Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 0.6 }}
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
