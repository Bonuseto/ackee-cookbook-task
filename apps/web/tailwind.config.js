/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'sf-ui-display': [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'SF UI Display',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
                'sf-ui-text': [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'SF UI Text',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
            },
            fontSize: {
                '12': '12px',
                '14': '14px',
                '15': '15px',
                '16': '16px',
                '17': '17px',
                '20': '20px',
                '24': '24px',
            },
            colors: {
                pink: '#FF00FF',
                'app-blue': '#0000FF',
                'app-dark': '#030303',
                'app-brown': '#554D44',
                'app-gray': '#C7C7CD',
            },
            textShadow: {
                lg: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            },
            backgroundImage: {
                'ackee-plate-icon': "url('/assets/icons/recipe-page-icon.png')",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow-lg': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                },
            };
            addUtilities(newUtilities);
        },
    ],
}; 