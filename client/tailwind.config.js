module.exports = {
    purge: {
        content: ["./src/**/*.{html,js}"]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
}