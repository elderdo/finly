# Tailwind CSS v3 + daisyUI Setup Guide

This guide explains how to set up Tailwind CSS v3 with daisyUI for full compatibility, especially if you want to use daisyUI components in your project.

---

## 1. Install Dependencies

Install Tailwind CSS v3, PostCSS, autoprefixer, and daisyUI:

```bash
npm install tailwindcss@3 postcss autoprefixer daisyui
```

---

## 2. Initialize Tailwind and PostCSS Configs

Generate the config files:

```bash
npx tailwindcss init -p
```

This creates:

- `tailwind.config.js`
- `postcss.config.js`

---

## 3. Configure Tailwind

Edit `tailwind.config.js` to include your template files and enable daisyUI:

```js
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
```

---

## 4. Create Your Tailwind CSS Entry File

In `public/styles/`, create `tailwind.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 5. Build Tailwind CSS

Add a script to your `package.json`:

```json
"scripts": {
  "build:css": "tailwindcss -i ./public/styles/tailwind.css -o ./public/styles/output.css --watch"
}
```

Then run:

```bash
npm run build:css
```

---

## 6. Use daisyUI Components

You can now use daisyUI classes (like `btn`, `card`, etc.) in your EJS/HTML files. Example:

```html
<button class="btn btn-primary">Click me</button>
```

---

## 7. Reference the Compiled CSS

In your HTML/EJS head:

```html
<link rel="stylesheet" href="/styles/output.css">
```

---

## Notes

- Make sure your template files are included in the `content` array in `tailwind.config.js`.
- Rebuild your CSS after adding new classes/components.
- daisyUI themes and options can be configured in `tailwind.config.js` (see daisyUI docs for details).

---

You are now ready to use Tailwind CSS v3 and daisyUI together!
