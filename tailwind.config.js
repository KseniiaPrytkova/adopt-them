/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}', './src/index.html'],
    tailwindConfig: './styles/tailwind.config.js',
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'ui-sans-serif'],
                gloria: ['"Gloria Hallelujah"', 'ui-sans-serif']
            },
            gridTemplateRows: {
                // Complex site-specific row configuration
                detailsLayout: 'auto minmax(0, 1fr)'
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
                'appear-from-left': '3s appear-from-left  ease-in-out ',
                'fade-in-slow': '6s fade-in ease-in-out forwards',
                'fade-in-fast': '2s fade-in ease-in-out forwards',
                shake: '2s shake 4s both',
                appear: '2s appear ease-out forwards',
                'zoom-in-out': '2s zoom-in-out',
                'shake-immediately': '4s shake both'
            },

            keyframes: {
                'appear-from-left': {
                    from: {
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateX(0)'
                    }
                },
                'fade-in': {
                    from: {
                        opacity: 0,
                        transform: 'translateY(20px)'
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                },
                appear: {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                },
                shake: {
                    '20%, 40%, 60%, 80%': {
                        transform: 'translateX(1%)'
                    },
                    '10%, 30%, 50%, 70%, 90%': {
                        transform: 'translateX(-5%)'
                    },
                    from: {
                        transform: 'none'
                    },
                    to: {
                        transform: 'none'
                    }
                },
                'zoom-in-out': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' }
                }
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
