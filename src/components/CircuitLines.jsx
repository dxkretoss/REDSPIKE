import { motion } from "framer-motion";

const glow = {
    filter: "drop-shadow(0 0 6px rgba(255,60,60,0.8))",
};

const pathProps = {
    stroke: "#ff3b3b",
    strokeWidth: 1,
    fill: "none",
};

export default function CircuitLines() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 600"
        >
            {/* ================= LEFT SIDE (BEFORE PERSON) ================= */}

            <motion.path {...pathProps} d="M40 120 H160 V90 H240"
                strokeDasharray="4 14"
                initial={{ strokeDashoffset: 260 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.4 }}
            />

            <motion.path {...pathProps} d="M60 200 H140 V260 H220"
                strokeDasharray="5 12"
                initial={{ strokeDashoffset: 220 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.45 }}
            />

            <motion.path {...pathProps} d="M80 300 V220 H180 V180"
                strokeDasharray="4 16"
                initial={{ strokeDashoffset: 280 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.35 }}
            />

            <motion.path {...pathProps} d="M100 420 H200 V360"
                strokeDasharray="5 14"
                initial={{ strokeDashoffset: 260 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.4 }}
            />

            {/* ================= PERSON ZONE (EXISTING) ================= */}

            <motion.path {...pathProps} d="M240 110 V70"
                strokeDasharray="6 10"
                initial={{ strokeDashoffset: 120 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                style={glow}
            />

            <motion.path {...pathProps} d="M220 160 H280"
                strokeDasharray="6 12"
                initial={{ strokeDashoffset: 160 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={glow}
            />

            {/* ================= RIGHT OF PERSON (NEW – IMPORTANT) ================= */}

            <motion.path {...pathProps} d="M280 120 H340 V160 H420"
                strokeDasharray="6 12"
                initial={{ strokeDashoffset: 220 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.55 }}
            />

            <motion.path {...pathProps} d="M300 160 V200 H380 V240"
                strokeDasharray="5 10"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.5 }}
            />

            <motion.path {...pathProps} d="M320 110 H420"
                strokeDasharray="6 14"
                initial={{ strokeDashoffset: 260 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.6 }}
            />

            {/* ================= BELOW PERSON (NEW – IMPORTANT) ================= */}

            <motion.path {...pathProps} d="M240 180 V260 H300"
                strokeDasharray="6 10"
                initial={{ strokeDashoffset: 180 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.55 }}
            />

            <motion.path {...pathProps} d="M260 200 V300 H360"
                strokeDasharray="5 12"
                initial={{ strokeDashoffset: 220 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.5 }}
            />

            <motion.path {...pathProps} d="M280 220 V320 H420"
                strokeDasharray="6 12"
                initial={{ strokeDashoffset: 240 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ ...glow, opacity: 0.45 }}
            />

            {/* ================= SERVER & FAR RIGHT ================= */}

            <motion.path {...pathProps} d="M360 260 V380 H480"
                strokeDasharray="5 12"
                initial={{ strokeDashoffset: 240 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={glow}
            />

            <motion.path {...pathProps} d="M380 360 H520 V440"
                strokeDasharray="6 12"
                initial={{ strokeDashoffset: 260 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                style={glow}
            />

            {/* ================= BOTTOM DISTRIBUTION ================= */}

            <motion.path {...pathProps} d="M260 340 H180 V440"
                strokeDasharray="5 10"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4.3, repeat: Infinity, ease: "linear" }}
                style={glow}
            />

            <motion.path {...pathProps} d="M300 340 H420 V460"
                strokeDasharray="5 10"
                initial={{ strokeDashoffset: 220 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
                style={glow}
            />

            {/* ================= NODES ================= */}

            {[
                [240, 90],   // person
                [300, 140],
                [340, 160],
                [380, 240],
                [420, 320],
                [260, 340],
                [180, 440],
                [420, 460],
                [520, 440],
            ].map(([cx, cy], i) => (
                <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="3"
                    fill="#ff3b3b"
                    style={{ filter: "drop-shadow(0 0 4px #ff3b3b)" }}
                />
            ))}
        </svg>
    );
}
