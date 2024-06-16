/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.{html,md,css}"],
    theme: {
        extend: {
            colors: {
                rust: {
                    50: "#fff6ec",
                    100: "#ffebd3",
                    200: "#ffd3a6",
                    300: "#ffb46e",
                    400: "#ff8933",
                    500: "#ff670c",
                    600: "#f44b02",
                    700: "#ca3604",
                    800: "#af2f0d",
                    900: "#81260d",
                    950: "#460f04",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
