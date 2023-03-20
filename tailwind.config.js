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
                shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both 4s',
                appear: '2s appear ease-out forwards',
                'zoom-in-out': '2s zoom-in-out',
                'shake-immediately':
                    'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
                flash: 'flash 0.5s 2', // Duration: 0.5s, Repeat: 2
                flip: 'flip 2s', // Duration: 2s
                rubberBand: 'rubberBand 1s', // Duration: 1s
                swing: ' swing 2s ease-in-out 0.1s ' // Duration: 1s, Timing function: ease-in-out, Delay: 0.1s
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
                    '10%, 90%': {
                        transform: 'translate3d(-1px, 0, 0)'
                    },
                    '20%, 80%': {
                        transform: 'translate3d(2px, 0, 0)'
                    },
                    '30%, 50%, 70%': {
                        transform: 'translate3d(-4px, 0, 0)'
                    },
                    '40%, 60%': {
                        transform: 'translate3d(4px, 0, 0)'
                    }
                },
                'zoom-in-out': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' }
                },
                flash: {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0'
                    }
                },
                flip: {
                    '0%': {
                        transform: 'translateY(0) rotate(0)'
                    },
                    '25%': {
                        transform: 'translateY(-80px) rotate(0)'
                    },
                    '75%': {
                        transform: 'translateY(0) rotate(360deg)'
                    },
                    '100%': {
                        transform: 'translateY(0) rotate(360deg)'
                    }
                },
                rubberBand: {
                    '0%, 100%': {
                        transform: 'scaleX(1) scaleY(1)'
                    },
                    '25%': {
                        transform: 'scaleX(1.5) scaleY(0.8)'
                    },
                    '75%': {
                        transform: 'scaleX(0.8) scaleY(1.2)'
                    }
                },
                swing: {
                    '0%': {
                        transform: 'rotate(0)',
                        transformOrigin: '50% 0%'
                    },
                    '25%': {
                        transform: 'rotate(20deg)',
                        transformOrigin: '50% 0%'
                    },
                    '50%': {
                        transform: 'rotate(-20deg)',
                        transformOrigin: '50% 0%'
                    },
                    '100%': {
                        transform: 'rotate(0)',
                        transformOrigin: '50% 0%'
                    }
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
