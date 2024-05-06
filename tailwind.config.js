/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            height: {
                '100vh-h-7': 'calc(100vh - 12rem)',
            },
            fontFamily: {
                writter: ["Writter", ...defaultTheme.fontFamily.sans],
                agrandir: ["Agrandir", ...defaultTheme.fontFamily.sans],
                tn: ["TN", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
}

