import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px #D21717",
                    }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-22 right-6 z-50
            w-12 h-12 rounded-full
            bg-[#D21717] text-white
            flex items-center justify-center
            shadow-lg
          "
                    aria-label="Scroll to top"
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
}
