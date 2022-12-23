/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}', './src/index.html'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'ui-sans-serif'],
                gloria: ['"Gloria Hallelujah"', 'ui-sans-serif']
            },
            colors: {
                'purple-sky': '#1B277B',
                'dark-sky': '#152445',
                'bright-sky': '#0B5B8C',
                'juicy-sun': '#D99C2B',
                'grey-snow': '#F2F2F2'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
