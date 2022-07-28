module.exports = {
        content: ['./app/**/*.{ts,tsx,jsx,js}'],
        theme: {
                extend: {
                        keyframes: {
                                wiggle: {
                                        '0%': {transform: 'translateY(-10px)'},
                                        '50% ': {
                                                transform: ' translateY(15px) translateX(15px)',
                                        },
                                        '100%': {
                                                transform: ' translateY(-10px)',
                                        },
                                },

                                moveInRight: {
                                        '0%': {
                                                // opacity: 0,
                                                transform: ' translateX(-100px)',
                                        },
                                        '80%': {
                                                // opacity: 0.8,
                                                transform: 'translateX(20px)',
                                        },
                                        '100%': {
                                                transform: 'translate(0)',
                                        },
                                },

                                moveInLeft: {
                                        '0%': {
                                                opacity: 0,
                                                transform: 'translateX(10rem)',
                                        },
                                        '80%': {
                                                opacity: 0.8,
                                                transform: 'translateX(-2rem)',
                                        },
                                        '100%': {
                                                opacity: 1,
                                                transform: 'translate(0)',
                                        },
                                },

                                moveInUp: {
                                        '0%': {
                                                opacity: 0,
                                                transform: 'translateY(10rem)',
                                        },
                                        '100%': {
                                                opacity: 1,
                                                transform: 'translateX(0)',
                                        },
                                },
                                copiedAnimation: {
                                        '0%': {
                                                width: '100%',
                                        },
                                        '100%': {
                                                width: '0',
                                        },
                                },
                        },
                        animation: {
                                wiggle: 'wiggle 3.2s ease-in-out infinite',
                                moveInUp: 'moveInUp 0.8s ease-in-out',
                                moveInLeft: 'moveInLeft 0.8s ease-in-out',
                                moveInRight: 'moveInRight 0.8s ease-in-out',
                                copiedAnimation:
                                        'copiedAnimation 2s linear forwards',
                        },
                },
        },
        plugins: [],
}
