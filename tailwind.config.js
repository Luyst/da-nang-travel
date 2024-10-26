/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0093A3",
                secondary: "#E0B400",
                strong: "#172a3a",
                main: "#F3F7F3",
                baseText: "#003249",
                white: "#f1faee",
                pastel: {
                    blue: "#DDF1F8",
                    yellow: "#FDF9D8",
                    green: "#C2FFC8",
                    pink: "#FFE4E1",
                    lavender: "#EDE7F6",
                    red: "#F8D1D1",
                    peach: "#FFD8BE",
                    mint: "#D0F0C0",
                    lilac: "#E6C9E8",
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const colors = theme("colors");

            const newUtilities = {
                // Button styles
                ".btn-primary": {
                    backgroundColor: colors.primary,
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    "&:hover": {
                        backgroundColor: "#3e6548", // custom hover effect
                    },
                },
                ".btn-secondary": {
                    backgroundColor: colors.secondary,
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    "&:hover": {
                        backgroundColor: "#5b8660", // custom hover effect
                    },
                },

                // Card styles
                ".card-bg": {
                    backgroundColor: colors.main,
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                },
            };

            addUtilities(newUtilities);
        },
    ],
};
