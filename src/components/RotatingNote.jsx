import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NOTE_KEYS = [
    "offenseHero.notes.1",
    "offenseHero.notes.2",
    "offenseHero.notes.3",
    "offenseHero.notes.4",
    "offenseHero.notes.5",
    "offenseHero.notes.6",
    "offenseHero.notes.7",
    "offenseHero.notes.8",
    "offenseHero.notes.9",
    "offenseHero.notes.10",
    "offenseHero.notes.11",
    "offenseHero.notes.12",
    "offenseHero.notes.13"
];

export default function RotatingNote({ interval = 4000 }) {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % NOTE_KEYS.length);
        }, interval);

        return () => clearInterval(timer);
    }, [interval]);

    return (
        <p
            key={index} // 👈 important for animation reset
            className="
                mt-6 text-[14px]
                text-transparent
                bg-clip-text
                animate-fadeIn
            "
            style={{
                backgroundImage:
                    "linear-gradient(90deg, #FFFFFF 0%, #932424 136.94%)",
            }}
        >
            {t(NOTE_KEYS[index])}
        </p>
    );
}
