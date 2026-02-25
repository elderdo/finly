module.exports = {
    content: [
        "./views/**/*.ejs",
        "./public/**/*.html",
        "./src/**/*.js"
    ],
    safelist: [
        "text-emerald-500",
        "text-emerald-800",
        "btn",
        "btn-primary"
    ],
    theme: { extend: {} },
    plugins: [require('daisyui')],
};