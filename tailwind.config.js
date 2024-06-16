/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.{html,md,css}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
