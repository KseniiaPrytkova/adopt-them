/** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ['./src/**/*.{js,ts,jsx,tsx,html}', './src/index.html'],
//     theme: {
//         extend: {
//             fontFamily: {
//                 poppins: ['Poppins', 'ui-sans-serif'],
//                 gloria: ['"Gloria Hallelujah"', 'ui-sans-serif']
//             },
//             colors: {
//                 'purple-sky': '#1B277B',
//                 'dark-sky': '#152445',
//                 'bright-sky': '#0B5B8C',
//                 'juicy-sun': '#D99C2B',
//                 'grey-snow': '#F2F2F2'
//             }
//         }
//     },
//     plugins: [require('@tailwindcss/forms')]
// };

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}', './src/index.html'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'ui-sans-serif'],
                gloria: ['"Gloria Hallelujah"', 'ui-sans-serif']
            },
            colors: {
                light: {
                    'purple-sky': '#1B277B',
                    'bright-sky': '#0B5B8C',
                    'juicy-sun': '#D99C2B',
                    'grey-snow': '#F2F2F2',
                    white: '#ffffff'
                },
                dark: {
                    'purple-sky': '#7B8EC3',
                    'bright-sky': '#80C2EA',
                    'juicy-sun': '#F5B971',
                    'grey-snow': '#363636',
                    black: '#000000'
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
