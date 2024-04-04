/** @type {import('tailwindcss').Config} */
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
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
}

