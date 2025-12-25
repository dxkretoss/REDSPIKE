import { useState } from "react";
import i18n from "../utils/i18n";

const LANGUAGES = [
    {
        code: "en",
        label: "English",
        flag: "🇺🇸",
    },
    {
        code: "pt",
        label: "Português",
        flag: "🇵🇹",
    },
];

const LanguageSwitcher = () => {
    const [open, setOpen] = useState(false);
    const currentLang =
        LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

    const changeLanguage = (code) => {
        localStorage.setItem("lang", code); // ✅ persist
        i18n.changeLanguage(code);
        setOpen(false);
    };


    return (
        <div style={{ position: "relative", width: "140px" }}>
            {/* Selected */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    bottom: 0,
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #333",
                    background: "#000",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                }}
            >
                <span>
                    {currentLang.flag} {currentLang.label}
                </span>
                <span style={{ fontSize: "12px" }}>▼</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "-210%",
                        width: "100%",
                        background: "#000",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        overflow: "hidden",
                        zIndex: 100,
                    }}
                >
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            style={{
                                width: "100%",
                                padding: "8px 12px",
                                background: "transparent",
                                color: "#fff",
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                cursor: "pointer",
                            }}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
