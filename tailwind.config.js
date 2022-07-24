module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neon: '#52DEE5',
                text: '#C7D3FF',
                textDark: '#A1ABBF',
                bgblue: '#222E50',
                darkerBlue: '#0A192F',
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                fira: ['Fira Code', 'monospace'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
