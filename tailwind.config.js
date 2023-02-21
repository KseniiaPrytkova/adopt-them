/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}', './src/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'ui-sans-serif'],
                gloria: ['"Gloria Hallelujah"', 'ui-sans-serif']
            },
            colors: {
                light: {
                    navy: '#1b277b',
                    orange: '#f26513',
                    blue: '#0b5b8c',
                    teal: '#0e71ae',
                    gold: '#f2d649',
                    paleGold: '#f3e3a0',
                    darkNavy: '#152445',
                    lightNavy: '#eaf1f7',
                    tan: '#d99c2b'
                },
                dark: {
                    purple: '#38184c',
                    teal: '#1c646d',
                    paleTeal: '#2793a2',
                    green: '#a0cd60',
                    lightPurple: '#572c5f',
                    paleGreen: '#cef09d',
                    darkRed: '#1f0802',
                    lightGrey: '#f9f9f9'
                }
            },
            animation: {
                'appear-from-left-top':
                    'appear-from-left-top 1s ease-out forwards'
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark']
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
