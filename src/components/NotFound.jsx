// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-xl"
            >
                {/* 404 */}
                <h1
                    className="text-[120px] font-bold text-transparent bg-clip-text"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #C22222 0%, #C04646 78%)",
                        fontFamily: "Sora, sans-serif",
                    }}
                >
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl text-white mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-white/60 mt-3 leading-relaxed">
                    The page you’re looking for doesn’t exist or may have been moved.
                </p>

                {/* Actions */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="
              px-6 py-2.5 rounded-md text-sm font-medium text-white
              bg-gradient-to-r from-[#932424] to-[#C04646]
              hover:shadow-[0_0_24px_rgba(210,23,23,0.6)]
              transition-all
            "
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="
              px-6 py-2.5 rounded-md text-sm font-medium
              text-white/80 border border-white/20
              hover:border-[#D21717] hover:text-white
              transition-all
            "
                    >
                        Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
